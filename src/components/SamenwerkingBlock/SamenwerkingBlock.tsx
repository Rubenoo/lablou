import "./styles.scss";
import React from "react";

const SamenwerkingBlock: React.FunctionComponent = () => {
  return (
    <section className={"samenwerking-container"}>
      <h2>Lab Lou is een samenwerking tussen:</h2>
      <div className={"samenwerking-grid"}>
        <address>
          <b>Stadslab Zeist</b>
          <p>(uitvoer en kwartiermaken)</p>
          <a
            href={
              "https://www.google.com/maps/search/?api=1&query=Weteringlaan+1,+3732HZ+De+Bilt"
            }
            target={"_blank"}
          >
            Weteringlaan 1 <br />
            3732 HZ De Bilt
          </a>
          <br />
          <a href="mailto:wijzijn@stadslabzeist.nl">wijzijn@stadslabzeist.nl</a>
        </address>
        <address>
          <b>Stichting Leegstand Oplossers Utrecht</b>
          <p>(Administratie en financieren)</p>
          <a
            href={
              "https://www.google.com/maps/search/?api=1&query=Gruttersdijk+12,+3514+BG+Utrecht"
            }
            target={"_blank"}
          >
            Gruttersdijk 12 <br />
            3514 BG Utrecht
          </a>
          <p />
          <a href="mailto:info@stichtinglou.nl">info@stichtinglou.nl</a>
        </address>
      </div>
    </section>
  );
};
export default SamenwerkingBlock;
