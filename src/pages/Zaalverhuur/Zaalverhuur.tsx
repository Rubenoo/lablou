import Block from "../../components/Block/Block.tsx";
import ImageBlock from "../../components/ImageBlock/ImageBlock.tsx";
import AanbodBlock from "../../components/AanbodBlock/AanbodBlock.tsx";
import ZalenJSON from "./zalen.json";
import { ZaalType } from "./types.ts";
import Pijl from "../../components/Pijl/Pijl.tsx";
const Zaalverhuur: React.FunctionComponent = () => {
  const Zalen = ZalenJSON.map((zaal: ZaalType) => (
    <AanbodBlock {...zaal} to={zaal.index.toString()} key={zaal.index} />
  ));

  return (
    <main>
      <div className={"block-container"}>
        <Block
          variant={"groen"}
          titel={"Dagverhuur"}
          terugKnop={"home"}
          toelichting={
            "Op zoek naar een creatieve en toegankelijke locatie om af te spreken? Wil je een tof event organiseren op een top locatie? Het kan allemaal! Onze ruimtes zijn van alle gemakken voorzien, we hebben heerlijke catering en wij zijn goed bereikbaar met OV, fiets en auto. Neem vooral contact met ons op, wij denken graag mee!"
          }
          button={<Pijl href={"#ons-aanbod"} />}
        />
        <ImageBlock
          src={"/lablou/assets/images/voorbeeldfoto.png"}
          alt={"voorbeeld foto"}
        />
      </div>
      <div id="ons-aanbod" className={"ons-aanbod-container"}>
        <h1>Ons aanbod</h1>
        <div className={"ons-aanbod-items-container"}>{Zalen}</div>
      </div>
    </main>
  );
};

export default Zaalverhuur;
