import Block from "../../components/Block/Block.tsx";
import StyledButton from "../../components/Button/Button.tsx";
import ImageBlock from "../../components/ImageBlock/ImageBlock.tsx";

const Home: React.FunctionComponent = () => {
  const button = (
    <StyledButton className={""} variant={"zwart"}>
      Bekijk het aanbod
    </StyledButton>
  );
  return (
    <main>
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
    </main>
  );
};
export default Home;
