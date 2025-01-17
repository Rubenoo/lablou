import React, { FormEvent, useRef, useState } from "react";
import { Form, Container, Alert, Button as BSButton } from "react-bootstrap";
import Button from "../../components/Button/Button.tsx";

type DateSet = {
  id: number;
  startdatum: string;
  einddatum: string;
};

const EventementenToevoegen: React.FC = () => {
  const [dateSets, setDateSets] = useState<DateSet[]>([
    { id: 1, startdatum: "", einddatum: "" },
  ]);
  const [nextId, setNextId] = useState(2);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const addDateSet = () => {
    setNextId((prevId) => prevId + 1);
    setDateSets((prev) => [
      ...prev,
      { id: nextId, startdatum: "", einddatum: "" },
    ]);
  };

  const removeDateSet = (id: number) => {
    if (dateSets.length > 1) {
      setDateSets(dateSets.filter((set) => set.id !== id));
    }
  };

  const handleDateChange = (
    id: number,
    field: "startdatum" | "einddatum",
    value: string,
  ) => {
    setDateSets(
      dateSets.map((set) => (set.id === id ? { ...set, [field]: value } : set)),
    );
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const wachtwoord = formData.get("wachtwoord") as string;

    if (wachtwoord.toLowerCase() !== "lablou") {
      setError("Wachtwoord is onjuist");
      setIsSubmitting(false);
      return;
    }
    const baseData = {
      titel: formData.get("titel"),
      ondertitel: formData.get("ondertitel"),
      beschrijving: formData.get("beschrijving"),
      link: formData.get("link"),
      email: formData.get("email"),
    };

    const submissions = dateSets.map((dateSet) => {
      const submissionData = new FormData();
      Object.entries(baseData).forEach(([key, value]) => {
        submissionData.append(key, value as string);
      });
      submissionData.append("startdatum", dateSet.startdatum);
      submissionData.append("einddatum", dateSet.einddatum);

      return fetch("https://usebasin.com/f/ceef5c83026a", {
        method: "POST",
        body: submissionData,
      });
    });

    try {
      await Promise.all(submissions);
      alert("Evenementen successvol toegevoegd!");
      formRef.current?.reset();
      setDateSets([{ id: 1, startdatum: "", einddatum: "" }]);
    } catch {
      setError(
        "Er is iets misgegaan bij het versturen van het formulier. Probeer het later opnieuw.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container className="mt-5">
      {error && (
        <Alert variant="danger" onClose={() => setError(null)} dismissible>
          {error}
        </Alert>
      )}
      <Form
        onSubmit={(e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          void handleSubmit(e);
        }}
        ref={formRef}
      >
        <Form.Group className="mb-3">
          <Form.Label>Titel</Form.Label>
          <Form.Control type="text" name="titel" required />
          <Form.Text className="text-muted">
            Voer een duidelijke en korte titel in voor het evenement
          </Form.Text>
        </Form.Group>

        <div className="mb-4">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5>Datums</h5>
            <BSButton variant="outline-primary" onClick={addDateSet}>
              + Datum toevoegen
            </BSButton>
          </div>

          {dateSets.map((dateSet) => (
            <div key={dateSet.id} className="p-3 mb-3 border rounded">
              <div className="d-flex justify-content-between align-items-start mb-2">
                <h6>Datum {dateSet.id}</h6>
                {dateSets.length > 1 && (
                  <BSButton
                    variant="outline-danger"
                    size="sm"
                    onClick={() => removeDateSet(dateSet.id)}
                  >
                    Verwijderen
                  </BSButton>
                )}
              </div>

              <Form.Group className="mb-3">
                <Form.Label>Startdatum en tijd</Form.Label>
                <Form.Control
                  type="datetime-local"
                  key={"startdatum-" + dateSet.id}
                  value={dateSet.startdatum}
                  onChange={(e) =>
                    handleDateChange(dateSet.id, "startdatum", e.target.value)
                  }
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Einddatum en tijd</Form.Label>
                <Form.Control
                  type="datetime-local"
                  key={"einddatum-" + dateSet.id}
                  value={dateSet.einddatum}
                  onChange={(e) =>
                    handleDateChange(dateSet.id, "einddatum", e.target.value)
                  }
                  required
                />
              </Form.Group>
            </div>
          ))}
        </div>

        <Form.Group className="mb-3">
          <Form.Label>Ondertitel</Form.Label>
          <Form.Control as="textarea" rows={3} name="ondertitel" required />
          <Form.Text className="text-muted">
            Geef een korte beschrijving van het evenement. In maximaal één zin,
            dit wordt gebruikt in de overzichtspagina.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Beschrijving</Form.Label>
          <Form.Control as="textarea" rows={3} name="beschrijving" required />
          <Form.Text className="text-muted">
            Geef een uitgebreide beschrijving van het evenement. Denk aan: wat
            kunnen bezoekers verwachten, voor wie is het bedoeld, etc.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Link</Form.Label>
          <Form.Control type="url" name="link" />
          <Form.Text className="text-muted">
            Voeg een link toe naar meer informatie of registratie (bijvoorbeeld
            ticketverkoop) Formaat: https://www.lablou.nl
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" name="email" />
          <Form.Text className="text-muted">
            Voer hier het e-mail in waarnaar de aanmelding moet worden verstuurd
            voor het evenement
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Wachtwoord</Form.Label>
          <Form.Control type="password" name="wachtwoord" required />
          <Form.Text className="text-muted">
            Voer het wachtwoord in om het evenement te kunnen toevoegen
          </Form.Text>
        </Form.Group>
        <input type="hidden" name="_honny_ponny" />

        <Button variant="zwart" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Bezig met versturen..." : "Versturen"}
        </Button>
      </Form>
    </Container>
  );
};

export default EventementenToevoegen;
