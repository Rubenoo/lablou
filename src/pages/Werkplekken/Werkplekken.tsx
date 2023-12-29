import Block from "../../components/Block/Block.tsx";
import ImageBlock from "../../components/ImageBlock/ImageBlock.tsx";
import React from "react";
import CTABlock from "../../components/CTABlock/CTABlock.tsx";
import ContactOpnemenKnop from "../../components/ContactOpnemenKnop/ContactOpnemenKnop.tsx";

const Werkplekken: React.FunctionComponent = () => {
  return (
    <main>
      <div className={"block-container"}>
        <Block
          variant={"bruin"}
          terugKnop
          titel={"De mogelijkheden van Lab Lou"}
          toelichting={
            "De Lab Lou is een thuishaven voor iedere ondernemer: creatievelingen, workaholics, trainers en levensgenieters. Wij bieden jouw unieke zakelijke woonkamer waar je helemaal all-out mag gaan in design en inrichting.\n\nEen broedplaats waar ontmoetingen, toffe samenwerkingen en zakelijke groei op nummer 1 staat."
          }
          button={<ContactOpnemenKnop />}
        />
        <ImageBlock
          src={"/lablou/assets/images/voorbeeldfoto.png"}
          alt={"voorbeeld foto"}
        />
      </div>
      <CTABlock className={"margin-top"} />
    </main>
  );
};
export default Werkplekken;
