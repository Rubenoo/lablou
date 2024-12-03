export interface GroupedEventsByMonth {
  [key: string]: GroupedEvents;
}

export interface Submission {
  id: number;
  payload_params: {
    titel: string;
    startdatum: string;
    einddatum: string;
    beschrijvingKort: string;
    beschrijvingLang: string;
    link: string;
  };
}

export interface ApiResponse {
  submissions: Submission[];
  meta: {
    count: number;
    inbox_count: number;
    spam_count: number;
    trash_count: number;
    page: number;
    per_page: number;
    form_name: string;
  };
}

export interface GroupedEvents {
  [key: string]: Submission[];
}

export interface AgendaAccordionProps {
  day: string;
  events: Submission[];
  dayIndex: number;
}
