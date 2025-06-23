import "./styles.scss";
import React from "react";

const Contact: React.FunctionComponent = () => {
  return (
    <main>
      <h1 className={"pt-2 pt-lg-4"}>Contact & bereikbaarheid</h1>
      <address>
        <p className={"pb-2 pb-lg-4"}>
          <b className={"d-block"}>Lab Lou</b>
          <a
            href={
              "https://www.google.com/maps/search/?api=1&query=Weteringlaan+1,+3732HZ+De+Bilt"
            }
            target={"_blank"}
          >
            Weteringlaan 1 <br />
            3732 HZ De Bilt
          </a>
          <a className={"d-block"} href="tel:06 28277642">
            06 28277642
          </a>
          <br />
          Socials:
          <br />
          <a
            className={"d-block mb-2"}
            href={"https://www.instagram.com/bijlablou/"}
            target={"_blank"}
          >
            @bijlablou
          </a>{" "}
          <br />
          <b>Dagverhuur en algemene informatie:</b>
          <a className={"d-block"} href="mailto:hallo@lablou.nl">
            hallo@lablou.nl
          </a>
          <b>Programma en communicatie:</b>
          <a className={"d-block"} href="mailto:programma@lablou.nl">
            programma@lablou.nl
          </a>{" "}
          <br />
          <b>Openingstijden:</b>
          <br /> ma t/m vrij van 9.00 tot 17.00 uur, overige tijden op aanvraag
          of tijdens activiteiten <br />
          <br />
          <b>Algemene toegankelijkheid:</b>
          <br />
          Rolstoeltoegankelijk toilet aanwezig <br />
          (Hulp)honden zijn welkom <br />
          Lab Lou is een MUP (Menstruatieproducten Uitgifte Punt) <br />
          Lab Lou is aangesloten bij de HogeNood app <br />
          <br />
          <b>Parkeren:</b> <br />
          Parkeerplaatsen op eigen terrein, maar we vinden het nóg fijner als je
          GROEN reist en met de fiets of het OV komt! <br />
          Bus 74 stopt voor de deur - halte Kwikstaartlaan - zowel vanuit
          Utrecht als vanaf Station Driebergen-Zeist.
        </p>
      </address>
    </main>
  );
};
export default Contact;
