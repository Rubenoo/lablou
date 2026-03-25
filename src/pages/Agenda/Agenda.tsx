import React, { useState, useEffect } from "react";
import { Accordion, Spinner, Button } from "react-bootstrap";
import dayjs from "dayjs";
import "dayjs/locale/nl";
import Papa from "papaparse";
import "./styles.scss";
import ContactOpnemenKnop from "../../components/ContactOpnemenKnop/ContactOpnemenKnop.tsx";
import { AgendaAccordionProps, GroupedEventsByMonth, Event } from "./types.ts";
import InstagramMarquee from "../../components/InstagramMarquee/InstagramMarquee.tsx";

const LoadingState = () => (
  <>
    <InstagramMarquee
      variant="right"
      type={"zwart"}
      text={"BEKIJK ONZE AGENDA"}
    />

    <section className="block block-groen d-flex justify-content-center align-items-center pt-3 rounded-top-0">
      <Spinner animation="border" role="status" className={"mt-2 mt-lg-4"}>
        <span className="visually-hidden">Laden...</span>
      </Spinner>
    </section>
  </>
);

const EmptyState = ({
  showMarquee,
  children,
}: {
  showMarquee?: boolean;
  children: string;
}) => (
  <>
    {showMarquee && (
      <InstagramMarquee
        variant="right"
        type={"zwart"}
        text={"BEKIJK ONZE AGENDA"}
      />
    )}

    <section
      className="block block-groen text-center pt-3 rounded-top-0"
      id={"agenda"}
    >
      <h3 className={"mb-0 mt-2 mt-lg-4"}>{children}</h3>
    </section>
  </>
);
const getHref = (event: Event) => {
  if (event.link) {
    return event.link;
  }
  if (event.email) {
    return `mailto:${event.email}`;
  }
  return undefined;
};

const AgendaAccordion = ({ day, events, dayIndex }: AgendaAccordionProps) => {
  return (
    <Accordion key={day}>
      {events.map((event, eventIndex) => {
        const href = getHref(event);
        const isInPast = dayjs(event.startdatum).isBefore(
          dayjs().startOf("day"),
        );
        return (
          <Accordion.Item key={event.id} eventKey={`${dayIndex}-${eventIndex}`}>
            <Accordion.Header className={isInPast ? "past-event" : ""}>
              <div className={"d-block"}>
                <p>
                  {dayjs(event.startdatum).format("dd DD MMM").toUpperCase()}
                  {" | "}
                  {dayjs(event.startdatum).format("HH:mm")} -{" "}
                  {dayjs(event.einddatum).format("HH:mm")}
                </p>
                <h3>
                  <b>{event.titel}</b>
                </h3>
                <p className={"mb-0"}>{event.ondertitel}</p>
              </div>
              {href && !isInPast && (
                <ContactOpnemenKnop
                  href={href}
                  target="_blank"
                  variant="zwart"
                  className={"d-lg-block d-none"}
                >
                  Tickets
                </ContactOpnemenKnop>
              )}
            </Accordion.Header>
            <Accordion.Body>
              <p>{event.beschrijving}</p>
              {href && !isInPast && (
                <ContactOpnemenKnop
                  href={href}
                  target="_blank"
                  variant="zwart"
                  className={"d-block d-lg-none pt-2"}
                >
                  Tickets
                </ContactOpnemenKnop>
              )}
            </Accordion.Body>
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
};

const Agenda: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(dayjs().format("YYYY-MM"));
  const [submissions, setSubmissions] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  dayjs.locale("nl");

  useEffect(() => {
    void fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const sheetId = "1NaggbYbYfJhBhYHShtdIl-VOseZ8832XhdCBcxmjIu8";
      const gid = "2083042934";
      const url = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv&gid=${gid}`;

      const response = await fetch(url);
      const csvData = await response.text();

      // Use PapaParse to parse the CSV
      const results = Papa.parse<string[]>(csvData, {
        header: false,
        skipEmptyLines: true,
      });

      const rows = results.data;

      // CSV order: id, created_at, remote_ip, location, titel, ondertitel, beschrijving, link, email, startdatum, einddatum, wachtwoord
      const dataRows = rows.slice(1);

      const mappedSubmissions: Event[] = dataRows
        .filter((row) => row.length >= 11) // Basic validation
        .map((row) => ({
          id: Number.parseInt(row[0]) || Math.random(),
          titel: row[4] || "",
          ondertitel: row[5] || "",
          beschrijving: row[6] || "",
          link: row[7] || undefined,
          email: row[8] || undefined,
          startdatum: row[9] || "",
          einddatum: row[10] || "",
        }));

      setSubmissions(mappedSubmissions);
    } catch (error) {
      console.error("Error fetching events:", error);
    } finally {
      setLoading(false);
    }
  };

  const groupEventsByMonth = () => {
    const grouped: GroupedEventsByMonth = {};

    // Sort submissions first by date
    const sortedSubmissions = [...submissions].sort(
      (a, b) => dayjs(a.startdatum).valueOf() - dayjs(b.startdatum).valueOf(),
    );

    sortedSubmissions.forEach((submission) => {
      const monthKey = dayjs(submission.startdatum).format("YYYY-MM");
      const dayKey = dayjs(submission.startdatum).format("D"); // Using D instead of DD removes leading zeros

      if (!grouped[monthKey]) {
        grouped[monthKey] = {};
      }
      if (!grouped[monthKey][dayKey]) {
        grouped[monthKey][dayKey] = [];
      }
      grouped[monthKey][dayKey].push(submission);
    });

    return grouped;
  };

  const goToNextMonth = () => {
    setCurrentMonth(dayjs(currentMonth).add(1, "month").format("YYYY-MM"));
  };

  const goToPreviousMonth = () => {
    const previousMonth = dayjs(currentMonth).subtract(1, "month");
    setCurrentMonth(previousMonth.format("YYYY-MM"));
  };

  if (loading) {
    return <LoadingState />;
  }

  if (submissions.length === 0) {
    return (
      <EmptyState showMarquee>
        Er zijn momenteel geen evenementen gepland voor deze maand
      </EmptyState>
    );
  }
  return (
    <>
      <InstagramMarquee
        variant="right"
        type={"zwart"}
        text={"BEKIJK ONZE AGENDA"}
      />
      <main className="block block-groen rounded-top-0" id={"agenda"}>
        <div className="d-flex justify-content-around align-items-center mb-lg-5 mb-3">
          <Button
            variant="outline-light"
            className={"border-0 m-0"}
            onClick={goToPreviousMonth}
          >
            <img
              src="/assets/svg/pijl-zwart.svg"
              alt="Vorige"
              className="agenda-nav-button prev-month"
            />
          </Button>
          <h1 className={"m-0"}>
            {dayjs(currentMonth).format("MMMM").toUpperCase()}
          </h1>
          <Button
            variant="outline-light"
            className={"border-0 m-0"}
            onClick={goToNextMonth}
          >
            <img
              src="/assets/svg/pijl-zwart.svg"
              alt="Volgende"
              className="agenda-nav-button next-month"
            />
          </Button>
        </div>
        {groupEventsByMonth()[currentMonth] ? (
          Object.entries(groupEventsByMonth()[currentMonth] || {}).map(
            ([day, events], dayIndex) => (
              <AgendaAccordion
                key={day}
                day={day}
                events={events}
                dayIndex={dayIndex}
              />
            ),
          )
        ) : (
          <EmptyState>
            {dayjs(currentMonth).isBefore(dayjs().startOf("day"))
              ? "Er waren evenementen gepland voor deze maand."
              : "Er zijn momenteel geen evenementen gepland voor deze maand."}
          </EmptyState>
        )}
      </main>
    </>
  );
};

export default Agenda;
