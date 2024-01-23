export type ZaalType = {
  index: number;
  titel: string;
  toelichting?: string;
  extraInfo?: string[];
  link?: string;
  informatie?: Info[];
  afbeelding: string;
  aanvullendeInformatie?: string;
  contact?: boolean;
};

export type Info = {
  titel: string;
  gegevens?: string;
};
