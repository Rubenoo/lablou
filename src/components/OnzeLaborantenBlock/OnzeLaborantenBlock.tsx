import "./styles.scss";
import Laboranten from "./Laboranten.json";
import ContactOpnemenKnop from "../ContactOpnemenKnop/ContactOpnemenKnop.tsx";
import React from "react";

type Laborant = {
  titel: string;
  websites: Website[];
};

type Website = {
  name: string;
  link: string;
};

const OnzeLaborantenBlock: React.FunctionComponent = () => {
  const laborantenElements = Laboranten?.map(
    ({ titel, websites }: Laborant, index) => (
      <div className={"animatie border"} key={index}>
        <h4>{titel}</h4>
        {websites.map(({ name, link }: Website, index) => (
          <a key={index} href={link}>
            {name}
          </a>
        ))}
      </div>
    ),
  );
  return (
    <section className={"onze-laboranten-container"}>
      <div className={"info"}>
        <h1>Onze Laboranten</h1>
        <p>
          In LAB LOU huren creatieve en sociale ondernemers een fijne werkplek
          en er is atelierruimte voor kunstenaars en makers. Onze huurders maken
          deel uit van de actieve Lab Lou community en doen mee met het
          organiseren van activiteiten. Daarnaast stellen zij hun kennis en
          netwerk beschikbaar aan hen die dat nodig hebben en creëren wij
          werkervaringsplekken voor mensen met een achterstand tot de
          arbeidsmarkt.
        </p>
        <ContactOpnemenKnop className={"d-none d-lg-block"} />
      </div>
      <div>
        <div className={"gegevens"}>{laborantenElements}</div>
        <ContactOpnemenKnop className={"d-lg-none d-block"}>
          Contact opnemen
        </ContactOpnemenKnop>
      </div>
    </section>
  );
};
export default OnzeLaborantenBlock;
