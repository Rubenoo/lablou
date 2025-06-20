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
            "Lab Lou beschikt over 12 verhuurbare ruimtes tussen de 19 en 100 m2 en 8 bureau’s in onze kantoortuin. Op dit moment zijn alle vaste werkruimtes en werkplekken bezet. Toch interesse? Leuk! Neem gerust contact met ons op, we denken graag met je mee over toekomstige beschikbaarheid of andere flexibele opties.\n\nDaarnaast ben je altijd welkom om bij ons te komen flexwerken. We zorgen voor goede WiFi, lekkere koffie en een inspirerende werkomgeving."
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
