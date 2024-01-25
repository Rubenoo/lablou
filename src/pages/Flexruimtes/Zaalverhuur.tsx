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
            "Ben je op zoek naar een creatieve en toegankelijke locatie om af te spreken of te vergaderen? Heb je zin om op een fijne plek te flexwerken? Wil je een event organiseren op een inspirerende locatie? Het kan allemaal! \n\nOnze vergaderkamers, workshopruimte en symposiumzaal zijn van alle gemakken voorzien. Heerlijke catering, goed bereikbaar met OV (bus 74), fiets en auto èn Lab Lou is rolstoeltoegankelijk. Werken bij Lab Lou is niet alleen super leuk, je maakt ook deel uit van een bruisende community en leert een groot netwerk kennen!"
          }
          button={<Pijl href={"#ons-aanbod"} />}
        />
        <ImageBlock
          src={"flexruimtes/overzicht.jpg"}
          alt={"Overzicht flex- & vergaderruimtes"}
        />
      </div>
      <div id="ons-aanbod" className={"ons-aanbod-container"}>
        <h1>Aanbod</h1>
        <div className={"ons-aanbod-items-container"}>{Zalen}</div>
      </div>
    </main>
  );
};

export default Zaalverhuur;
