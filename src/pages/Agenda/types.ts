export interface GroupedEventsByMonth {
  [key: string]: GroupedEvents;
}

export interface Event {
  id: number;
  titel: string;
  startdatum: string;
  einddatum: string;
  ondertitel: string;
  beschrijving: string;
  link?: string;
  email?: string;
}

export interface GroupedEvents {
  [key: string]: Event[];
}

export interface AgendaAccordionProps {
  day: string;
  events: Event[];
  dayIndex: number;
}
