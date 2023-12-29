import Block from "../../components/Block/Block.tsx";
import ImageBlock from "../../components/ImageBlock/ImageBlock.tsx";
import StyledButton from "../../components/Button/Button.tsx";
import AanbodBlock from "../../components/AanbodBlock/AanbodBlock.tsx";
import ZalenJSON from "./zalen.json";
import { ZaalType } from "./types.ts";
const Zaalverhuur: React.FunctionComponent = () => {
  const button = (
    <StyledButton className={""} variant={"zwart"}>
      Bekijk het aanbod
    </StyledButton>
  );
  const Zalen = ZalenJSON.map((zaal: ZaalType) => (
    <AanbodBlock {...zaal} to={zaal.index.toString()} key={zaal.index} />
  ));

  return (
    <main>
      <div className={"block-container"}>
        <Block
          variant={"groen"}
          titel={"De mogelijkheden van Lab Lou"}
          terugKnop
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
        <div className={"ons-aanbod-items-container"}>{Zalen}</div>
      </div>
    </main>
  );
};

export default Zaalverhuur;
