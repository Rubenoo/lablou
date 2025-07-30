import Block from "../../components/Block/Block.tsx";
import ImageBlock from "../../components/ImageBlock/ImageBlock.tsx";
import AanbodBlock from "../../components/AanbodBlock/AanbodBlock.tsx";
import ZalenJSON from "./zalen.json";
import { ZaalType } from "./types.ts";
import Pijl from "../../components/Pijl/Pijl.tsx";
import React from "react";
const FlexEnVergaderRuimte: React.FunctionComponent = () => {
  const Zalen = ZalenJSON.map((zaal: ZaalType) => (
    <AanbodBlock {...zaal} to={zaal.index.toString()} key={zaal.index} />
  ));

  return (
    <main>
      <div className={"block-container"}>
        <Block
          variant={"groen"}
          titel={"Flexwerkplekken en vergaderruimtes"}
          terugKnop={"home"}
          toelichting={
            <>
              In verband met zomervakantie zijn wij t/m 25 augustus onregelmatig
              geopend. Informeer naar de flex- en vergadermogelijkheden via{" "}
              <a href="mailto:hallo@lablou.nl">hallo@lablou.nl</a>
              <br />
              <br />
              Naast vaste werkplekken biedt Lab Lou flexwerkplekken, diverse
              ruimtes voor vergaderingen, workshops, trainingen, presentaties en
              andere bijeenkomsten.
              <br />
              <br />
              Lab Lou is volledig circulair ingericht, rolstoeltoegankelijk,
              beschikt over een eigen cateraar en is goed bereikbaar met OV,
              fiets en auto..
              <br />
              <br />
              Ons team denkt graag met je mee, van creatieve invulling tot
              catering op maat.
            </>
          }
          button={<Pijl href={"#ons-aanbod"} />}
        />
        <ImageBlock
          src={"flexruimtes/overzicht.png"}
          alt={"Overzicht Flex- en vergaderruimtes"}
        />
      </div>
      <div id="ons-aanbod" className={"ons-aanbod-container"}>
        <h1>Aanbod</h1>
        <div className={"ons-aanbod-items-container"}>{Zalen}</div>
      </div>
    </main>
  );
};

export default FlexEnVergaderRuimte;
