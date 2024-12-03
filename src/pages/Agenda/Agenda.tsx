import React, { useState, useEffect } from "react";
import { Accordion, Spinner, Button } from "react-bootstrap";
import dayjs from "dayjs";
import "dayjs/locale/nl";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
dayjs.extend(isSameOrAfter);
import "./styles.scss";
import ContactOpnemenKnop from "../../components/ContactOpnemenKnop/ContactOpnemenKnop.tsx";
import {
  AgendaAccordionProps,
  ApiResponse,
  GroupedEventsByMonth,
  Submission,
} from "./types.ts";
import InstagramMarquee from "../../components/InstagramMarquee/InstagramMarquee.tsx";

const LoadingState = () => (
  <section className="block block-groen d-flex justify-content-center align-items-center mt-3">
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Laden...</span>
    </Spinner>
  </section>
);

const EmptyState = () => (
  <section className="block block-groen text-center mt-3">
    <h3 className={"mb-0"}>
      Er zijn momenteel geen evenementen gepland voor deze maand
    </h3>
  </section>
);

const AgendaAccordion = ({ day, events, dayIndex }: AgendaAccordionProps) => {
  return (
    <Accordion key={day} id={"agenda"}>
      {events.map((event, eventIndex) => (
        <Accordion.Item key={event.id} eventKey={`${dayIndex}-${eventIndex}`}>
          <Accordion.Header>
            <div className={"d-block"}>
              <p>
                {dayjs(event.payload_params.startdatum)
                  .format("dd DD MMM")
                  .toUpperCase()}
                {" | "}
                {dayjs(event.payload_params.startdatum).format("HH:mm")} -{" "}
                {dayjs(event.payload_params.einddatum).format("HH:mm")}
              </p>
              <h3>
                <b>{event.payload_params.titel}</b>
              </h3>
              <p className={"mb-0"}>{event.payload_params.beschrijvingKort}</p>
            </div>
            <ContactOpnemenKnop
              href={event.payload_params.link}
              target="_blank"
              variant="zwart"
              className={"d-lg-block d-none"}
            >
              Tickets
            </ContactOpnemenKnop>
          </Accordion.Header>
          <Accordion.Body>
            <p>{event.payload_params.beschrijvingLang}</p>
            <ContactOpnemenKnop
              href={event.payload_params.link}
              target="_blank"
              variant="zwart"
              className={"d-block d-lg-none"}
            >
              Tickets
            </ContactOpnemenKnop>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

const Agenda: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(dayjs().format("YYYY-MM"));
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  dayjs.locale("nl");

  useEffect(() => {
    void fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch(
        "https://usebasin.com/api/v1/submissions/?api_token=" +
          import.meta.env.VITE_BASIN_API_KEY,
      );
      const data = (await response.json()) as ApiResponse;

      const futureEvents = data.submissions.filter((submission) =>
        dayjs(submission.payload_params.startdatum).isSameOrAfter(
          dayjs().startOf("day"),
        ),
      );

      setSubmissions(futureEvents);
    } catch (error) {
      console.error("Error fetching events:", error);
    } finally {
      setLoading(false);
    }
  };

  const groupEventsByMonth = () => {
    const grouped: GroupedEventsByMonth = {};

    submissions.forEach((submission) => {
      const monthKey = dayjs(submission.payload_params.startdatum).format(
        "YYYY-MM",
      );
      const dayOfWeek = dayjs(submission.payload_params.startdatum).format(
        "dddd",
      );

      if (!grouped[monthKey]) {
        grouped[monthKey] = {};
      }
      if (!grouped[monthKey][dayOfWeek]) {
        grouped[monthKey][dayOfWeek] = [];
      }
      grouped[monthKey][dayOfWeek].push(submission);
    });

    return grouped;
  };

  const goToNextMonth = () => {
    setCurrentMonth(dayjs(currentMonth).add(1, "month").format("YYYY-MM"));
  };

  const goToPreviousMonth = () => {
    const previousMonth = dayjs(currentMonth).subtract(1, "month");
    if (previousMonth.isSameOrAfter(dayjs(), "month")) {
      setCurrentMonth(previousMonth.format("YYYY-MM"));
    }
  };

  if (loading) {
    return <LoadingState />;
  }

  if (submissions.length === 0) {
    return <EmptyState />;
  }

  return (
    <>
      <InstagramMarquee variant="right" type={"zwart"} />
      <main className="block block-groen rounded-top-0">
        <div className="d-flex justify-content-around align-items-center mb-lg-5 mb-3">
          <Button
            variant="outline-light"
            className={"border-0 m-0"}
            onClick={goToPreviousMonth}
            disabled={dayjs(currentMonth).isSame(dayjs(), "month")}
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
          <EmptyState />
        )}
      </main>
    </>
  );
};

export default Agenda;
