import Block from "../../components/Block/Block.tsx";
import ImageBlock from "../../components/ImageBlock/ImageBlock.tsx";
import React from "react";
import ContactOpnemenKnop from "../../components/ContactOpnemenKnop/ContactOpnemenKnop.tsx";
import CTABlockKantoor from "../../components/CTABlock/CTABlockKantoor.tsx";

const KantoorEnAtelierRuimte: React.FunctionComponent = () => {
  return (
    <main>
      <div className={"block-container"}>
        <Block
          variant={"bruin"}
          terugKnop={"home"}
          titel={"Kantoor- en atelierruimte"}
          toelichting={
            <>
              In verband met zomervakantie zijn wij t/m 25 augustus onregelmatig
              geopend. Informeer naar de flex- en vergadermogelijkheden via{" "}
              <a href="mailto:hallo@lablou.nl">hallo@lablou.nl</a>
              <br />
              <br />
              Lab Lou beschikt over 12 verhuurbare ruimtes tussen de 19 en 100
              m2 en 8 bureau’s in onze kantoortuin. Interesse? Leuk! Neem gerust
              contact met ons op, we denken graag met je mee over toekomstige
              beschikbaarheid of andere flexibele opties. <br />
              <br />
              Daarnaast ben je altijd welkom om bij ons te komen flexwerken. We
              zorgen voor goede WiFi, lekkere koffie en een inspirerende
              werkomgeving
            </>
          }
          button={<ContactOpnemenKnop />}
        />
        <ImageBlock src={"vasteverhuur/overzicht.jpg"} alt={"voorbeeld foto"} />
      </div>
      <CTABlockKantoor className={"margin-top"} />
    </main>
  );
};
export default KantoorEnAtelierRuimte;
