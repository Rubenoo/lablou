import "./stylesv2.scss";
import React from "react";
import Block from "../Block/Block.tsx";
import Carousel from "../Carousel/Carousel.tsx";
import InstagramMarquee from "../InstagramMarquee/InstagramMarquee.tsx";
import ImageBlock from "../ImageBlock/ImageBlock.tsx";

const OverOnsBlockV2: React.FunctionComponent = () => {
  return (
    <section className={"overons-container"}>
      <div className={"block-container"}>
        <Block
          variant={"groen"}
          titel={"De sociale en circulaire broedplaats van regio Zeist"}
          toelichting={
            <>
              <b>Lab Lou</b> is een plek waar creatieve én sociale ondernemers
              samenkomen. Sinds 2023 zijn we gevestigd in een voormalig
              tuincentrum in Zeist-West, de allereerste sociale en circulaire
              broedplaats van de regio. Opgestart door{" "}
              <u>
                <b>Stadslab Zeist</b>
              </u>{" "}
              en{" "}
              <u>
                <b>Stichting LOU</b>
              </u>
              , biedt Lab Lou ruimte aan makers, dromers en doeners. En dat
              allemaal in een inspirerende, toegankelijke sfeer met goede koffie
              van{" "}
              <u>
                <b>de Koffiebak</b>
              </u>{" "}
              en heerlijk eten van{" "}
              <u>
                <b>Laura’s Sabor.</b>
              </u>
            </>
          }
        />
        <Carousel />
      </div>
      <div className={"block-container"}>
        <Block
          variant={"roze"}
          style={{ order: 1 }}
          titel={"Een bruisende plek in Zeist"}
          toelichting={
            <>
              Naast onze werk- en verhuurruimtes is Lab Lou er voor iedereen.
              Met een wekelijkse programmering vol workshops, exposities,
              koffieochtenden, spelletjesavonden en meer is er altijd iets te
              doen, voor jong én oud. Ook vind je bij ons een
              menstruatie-uitgiftepunt, een gereedschap bieb en ons
              plantenasiel. Samen maken we ruimte voor ontmoeting, creativiteit
              en verandering.
            </>
          }
        />
        <Carousel />
      </div>
      <InstagramMarquee variant={"left"} text={"PROGRAMMA"} />
      <div className={"block-container"}>
        <Block
          variant={"bruin"}
          titel={"Van tuincentrum tot broedplaats"}
          toelichting={
            <>
              In september 2023 kreeg Stadslab Zeist een telefoontje: ‘Hé,
              wisten jullie dat er al heel lang een oud tuincentrum leeg staat
              in Zeist west? In november kregen we de sleutel.In samenwerking
              met <b>Stichting LOU</b>, gaven we dit leegstaande gebouw een
              nieuwe, bruisende bestemming.
              <br />
              <br /> De verbouwing werd mogelijk gemaakt dankzij steun van{" "}
              <b>gemeente Zeist</b>, <b>gemeente De Bilt</b>, de <b>RSD</b>,{" "}
              <b>Stadsregio Utrecht</b> en een succesvolle{" "}
              <b>crowdfundingcampagne</b>.
            </>
          }
        />
        <Carousel />
      </div>
      <InstagramMarquee
        variant={"right"}
        type={"zwart"}
        text={"LAB LOU TEAM"}
        disable
      />
      <ImageBlock
        src={"overlablou/over_lablou.jpeg"}
        alt={"Over Lab Lou"}
        className={"over-ons-image"}
      />
    </section>
  );
};
export default OverOnsBlockV2;
