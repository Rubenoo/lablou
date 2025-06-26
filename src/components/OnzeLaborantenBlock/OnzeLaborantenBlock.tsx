import "./styles.scss";
import Laboranten from "./Laboranten.json";
import ContactOpnemenKnop from "../ContactOpnemenKnop/ContactOpnemenKnop.tsx";
import React from "react";
import SamenwerkingBlock from "../SamenwerkingBlock/SamenwerkingBlock.tsx";
import Block from "../Block/Block.tsx";

type Laborant = {
  titel: string;
  websites?: Website[];
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
        {websites?.map(({ name, link }: Website, index) => (
          <a key={index} href={link}>
            {name}
          </a>
        ))}
      </div>
    ),
  );
  return (
    <section className={"onze-laboranten-container"}>
      <Block
        variant={"roze"}
        titel={"Onze Laboranten"}
        terugKnop={"home"}
        button={<ContactOpnemenKnop className={"d-none d-lg-block"} />}
        toelichting={
          <>
            <p>
              In LAB LOU huren creatieve, sociale en duurzame ondernemers een
              fijne werkplek en er is atelierruimte voor kunstenaars en makers.
              Onze huurders maken deel uit van de actieve Lab Lou community en
              doen mee met het organiseren van activiteiten. Daarnaast stellen
              zij hun kennis en netwerk beschikbaar aan hen die dat nodig hebben
              en creëren wij werkervaringsplekken voor mensen met een afstand
              tot de arbeidsmarkt.
            </p>
            <SamenwerkingBlock />
          </>
        }
      />
      <div className={"grey-block"}>
        <div className={"gegevens"}>{laborantenElements}</div>
        <ContactOpnemenKnop
          className={"d-lg-none d-flex justify-content-center"}
        >
          Contact opnemen
        </ContactOpnemenKnop>
      </div>
    </section>
  );
};
export default OnzeLaborantenBlock;
