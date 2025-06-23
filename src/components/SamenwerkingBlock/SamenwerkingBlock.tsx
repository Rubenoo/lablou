import "./styles.scss";
import React from "react";

const SamenwerkingBlock: React.FunctionComponent = () => {
  return (
    <section className={"samenwerking-container"}>
      <h2>Lab Lou is een samenwerking tussen:</h2>
      <div className={"samenwerking-grid"}>
        <address>
          <b>Stichting Stadslab Zeist</b>
          <p>(Dagelijks beheer en programmering)</p>
          <a
            href={
              "https://www.google.com/maps/search/?api=1&query=Weteringlaan+1,+3732HZ+De+Bilt"
            }
            target={"_blank"}
          >
            <br className={"d-none d-lg-block"} />
            Weteringlaan 1 <br />
            3732 HZ (De Bilt)
          </a>
          <br />
          <a href="mailto:wijzijn@stadslabzeist.nl">wijzijn@stadslabzeist.nl</a>
        </address>
        <address>
          <b>Stichting Leegstand Oplossers Utrecht (LOU)</b>
          <p>(Administratie en financiën)</p>
          <a
            href={
              "https://www.google.com/maps/search/?api=1&query=Barkasstraat+5,+3534+PH+Utrecht"
            }
            target={"_blank"}
          >
            Barkasstraat 5 <br />
            3534 PH Utrecht
          </a>
          <br />

          <a href="mailto:info@stichtinglou.nl">info@stichtinglou.nl</a>
        </address>
      </div>
    </section>
  );
};
export default SamenwerkingBlock;
