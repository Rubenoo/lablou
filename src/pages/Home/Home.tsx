import Block from "../../components/Block/Block.tsx";
import StyledButton from "../../components/Button/Button.tsx";
import ImageBlock from "../../components/ImageBlock/ImageBlock.tsx";
import AanbodBlock from "../../components/AanbodBlock/AanbodBlock.tsx";
import CTABlock from "../../components/CTABlock/CTABlock.tsx";

const Home: React.FunctionComponent = () => {
  const button = (
    <StyledButton className={""} variant={"zwart"}>
      Bekijk het aanbod
    </StyledButton>
  );
  return (
    <main>
      <div className={"block-container"}>
        <Block
          variant={"roze"}
          inleiding="Wat doen we bij Lab Lou"
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
      <div className={"ons-aanbod-container"}>
        <h1>Ons aanbod</h1>
        <div className={"ons-aanbod-items-container"}>
          <AanbodBlock
            category={"Zaalverhuur"}
            image={"stock"}
            title={"Ontdek onze vergaderzalen"}
          />
          <AanbodBlock
            category={"Werk- en atelierruimte"}
            image={"stock"}
            title={"Ontdek onze Werk- en atelierruimte"}
          />
        </div>
      </div>
      <CTABlock />
    </main>
  );
};
export default Home;
