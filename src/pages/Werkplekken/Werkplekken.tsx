import StyledButton from "../../components/Button/Button.tsx";
import Block from "../../components/Block/Block.tsx";
import ImageBlock from "../../components/ImageBlock/ImageBlock.tsx";
import React from "react";
import CTABlock from "../../components/CTABlock/CTABlock.tsx";

const Werkplekken: React.FunctionComponent = () => {
  const button = (
    <a href="mailto:info@lablou.nl">
      <StyledButton variant={"zwart"}>Contact opnemen</StyledButton>
    </a>
  );
  return (
    <main>
      <div className={"block-container"}>
        <Block
          variant={"bruin"}
          terugKnop
          title={"De mogelijkheden van Lab Lou"}
          toelichting={
            "De Lab Lou is een thuishaven voor iedere ondernemer: creatievelingen, workaholics, trainers en levensgenieters. Wij bieden jouw unieke zakelijke woonkamer waar je helemaal all-out mag gaan in design en inrichting.\n\nEen broedplaats waar ontmoetingen, toffe samenwerkingen en zakelijke groei op nummer 1 staat."
          }
          button={button}
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
