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
  <>
    <InstagramMarquee variant="right" type={"zwart"} />

    <section className="block block-groen d-flex justify-content-center align-items-center pt-3 rounded-top-0">
      <Spinner animation="border" role="status" className={"mt-2 mt-lg-4"}>
        <span className="visually-hidden">Laden...</span>
      </Spinner>
    </section>
  </>
);

const EmptyState = ({ showMarquee }: { showMarquee?: boolean }) => (
  <>
    {showMarquee && <InstagramMarquee variant="right" type={"zwart"} />}

    <section
      className="block block-groen text-center pt-3 rounded-top-0"
      id={"agenda"}
    >
      <h3 className={"mb-0 mt-2 mt-lg-4"}>
        Er zijn momenteel geen evenementen gepland voor deze maand
      </h3>
    </section>
  </>
);
const getHref = (event: Submission) => {
  if (event.payload_params.link) {
    return event.payload_params.link;
  }
  if (event.payload_params.email) {
    return `mailto:${event.payload_params.email}`;
  }
  return undefined;
};

const AgendaAccordion = ({ day, events, dayIndex }: AgendaAccordionProps) => {
  return (
    <Accordion key={day}>
      {events.map((event, eventIndex) => {
        const href = getHref(event);
        return (
          <Accordion.Item key={event.id} eventKey={`${dayIndex}-${eventIndex}`}>
            <Accordion.Header>
              <div className={"d-block"}>
                <p>
                  {dayjs(event.payload_params.startdatum)
                    .format("dd DD MMM")
                    .toUpperCase()}
                  {" | "}
                  {dayjs(event.payload_params.startdatum).format(
                    "HH:mm",
                  )} - {dayjs(event.payload_params.einddatum).format("HH:mm")}
                </p>
                <h3>
                  <b>{event.payload_params.titel}</b>
                </h3>
                <p className={"mb-0"}>{event.payload_params.ondertitel}</p>
              </div>
              {href && (
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
              <p>{event.payload_params.beschrijving}</p>
              {href && (
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

    // Sort submissions first by date
    const sortedSubmissions = [...submissions].sort(
      (a, b) =>
        dayjs(a.payload_params.startdatum).valueOf() -
        dayjs(b.payload_params.startdatum).valueOf(),
    );

    sortedSubmissions.forEach((submission) => {
      const monthKey = dayjs(submission.payload_params.startdatum).format(
        "YYYY-MM",
      );
      const dayKey = dayjs(submission.payload_params.startdatum).format("D"); // Using D instead of DD removes leading zeros

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
    if (previousMonth.isSameOrAfter(dayjs(), "month")) {
      setCurrentMonth(previousMonth.format("YYYY-MM"));
    }
  };

  if (loading) {
    return <LoadingState />;
  }

  if (submissions.length === 0) {
    return <EmptyState showMarquee />;
  }
  return (
    <>
      <InstagramMarquee variant="right" type={"zwart"} />
      <main className="block block-groen rounded-top-0" id={"agenda"}>
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
