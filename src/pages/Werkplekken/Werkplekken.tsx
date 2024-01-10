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
          titel={"Werk- en atelierplek"}
          toelichting={
            "Lab Lou beschikt over 12 verhuurbare units tussen de 19 en 100 m2. Daarnaast hebben wij 8 vaste bureauplekken en 6 atelierplekken. Op dit moment hebben wij nog een aantal bureau- en atelierplekken over. Heb je interesse? Leuk! Neem contact met ons op voor de mogelijkheden."
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
