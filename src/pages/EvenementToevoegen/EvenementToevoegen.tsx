import React, { FormEvent, useRef, useState } from "react";
import { Form, Container, Alert } from "react-bootstrap";
import Button from "../../components/Button/Button.tsx";

const EventementenToevoegen: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
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

    fetch("https://usebasin.com/f/ceef5c83026a", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        setIsSubmitting(false);
        alert("Evenement successvol toegevoegd!");
        formRef.current?.reset(); // Clear the form
      })
      .catch(() => {
        setError(
          "Er is iets misgegaan bij het versturen van het formulier. Probeer het later opnieuw.",
        );
        setIsSubmitting(false);
      });
  };

  return (
    <Container className="mt-5">
      {error && (
        <Alert variant="danger" onClose={() => setError(null)} dismissible>
          {error}
        </Alert>
      )}
      <Form
        onSubmit={handleSubmit}
        action="https://usebasin.com/f/ceef5c83026a"
        method="POST"
        ref={formRef}
      >
        <Form.Group className="mb-3">
          <Form.Label>Titel</Form.Label>
          <Form.Control type="text" name="titel" required />
          <Form.Text className="text-muted">
            Voer een duidelijke en korte titel in voor het evenement
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Startdatum en tijd</Form.Label>
          <Form.Control type="datetime-local" name="startdatum" required />
          <Form.Text className="text-muted">
            Selecteer wanneer het evenement begint
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Einddatum en tijd</Form.Label>
          <Form.Control type="datetime-local" name="einddatum" required />
          <Form.Text className="text-muted">
            Selecteer wanneer het evenement eindigt
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Beschrijving kort</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="beschrijvingKort"
            required
          />
          <Form.Text className="text-muted">
            Geef een korte beschrijving van het evenement. In maximaal één zin,
            dit wordt gebruikt in de overzichtspagina.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Beschrijving lang</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="beschrijvingLang"
            required
          />
          <Form.Text className="text-muted">
            Geef een uitgebreide beschrijving van het evenement. Denk aan: wat
            kunnen bezoekers verwachten, voor wie is het bedoeld, etc.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Link</Form.Label>
          <Form.Control type="url" name="link" required />
          <Form.Text className="text-muted">
            Voeg een link toe naar meer informatie of registratie (bijvoorbeeld
            ticketverkoop) Formaat: https://www.lablou.nl
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Wachtwoord</Form.Label>
          <Form.Control type="password" name="wachtwoord" required />
          <Form.Text className="text-muted">
            Voer het wachtwoord in om het evenement te kunnen toevoegen
          </Form.Text>
        </Form.Group>

        <Button variant="zwart" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Bezig met versturen..." : "Versturen"}
        </Button>
      </Form>
    </Container>
  );
};

export default EventementenToevoegen;
