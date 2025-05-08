import Block from "../../components/Block/Block.tsx";
import ImageBlock from "../../components/ImageBlock/ImageBlock.tsx";
import React from "react";
import CTABlock from "../../components/CTABlock/CTABlock.tsx";
import ContactOpnemenKnop from "../../components/ContactOpnemenKnop/ContactOpnemenKnop.tsx";

const VasteVerhuur: React.FunctionComponent = () => {
  return (
    <main>
      <div className={"block-container"}>
        <Block
          variant={"bruin"}
          terugKnop={"home"}
          titel={"Werk- en atelierplek"}
          toelichting={
            "Lab Lou beschikt over 12 verhuurbare units tussen de 19 en 100 m2. Daarnaast hebben wij 8 vaste bureauplekken. Op dit moment hebben wij geen units of bureaus meer over. Heb je wel interesse? Dat vinden wij natuurlijk heel leuk! Neem contact met ons op om te kijken of er op korte termijn iets vrijkomt of om andere flexibele opties te onderzoeken."
          }
          button={<ContactOpnemenKnop />}
        />
        <ImageBlock src={"vasteverhuur/overzicht.jpg"} alt={"voorbeeld foto"} />
      </div>
      <CTABlock className={"margin-top"} />
    </main>
  );
};
export default VasteVerhuur;
