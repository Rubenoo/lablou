import "./stylesv2.scss";
import React from "react";
import Block from "../Block/Block.tsx";
import InstagramMarquee from "../InstagramMarquee/InstagramMarquee.tsx";
import ImageBlock from "../ImageBlock/ImageBlock.tsx";
import OveronsCarousel from "../Carousel/OveronsCarousel.tsx";
import TeamledenBlock from "../TeamlidBlock/TeamledenBlock.tsx";

const OverOnsBlockV2: React.FunctionComponent = () => {
  return (
    <section className={"overons-container"}>
      <div className={"block-container"}>
        <Block
          variant={"groen"}
          titel={"De sociale en circulaire broedplaats van regio Zeist"}
          terugKnop={"home"}
          toelichting={
            <>
              <b>Lab Lou</b> is een plek waar creatieve én sociale ondernemers
              samenkomen. Sinds 2023 zijn we gevestigd in een voormalig
              tuincentrum in Zeist-West, de allereerste sociale en circulaire
              broedplaats van de regio. Opgestart door{" "}
              <a
                className={"underline"}
                target={"_blank"}
                href={"https://www.stadslabzeist.nl"}
              >
                Stadslab Zeist
              </a>{" "}
              en{" "}
              <a
                className={"underline"}
                target={"_blank"}
                href={"https://stichtinglou.nl"}
              >
                Stichting LOU
              </a>
              , biedt Lab Lou ruimte aan makers, dromers en doeners. En dat
              allemaal in een inspirerende, toegankelijke sfeer met goede koffie
              van{" "}
              <a
                className={"underline"}
                href={"https://koffiebak.nl"}
                target={"_blank"}
              >
                de Koffiebak
              </a>{" "}
              en heerlijk eten van{" "}
              <a
                className={"underline"}
                target={"_blank"}
                href={"https://www.laurasabor.nl"}
              >
                Laura’s Sabor.
              </a>
            </>
          }
        />
        <OveronsCarousel />
      </div>
      <div className={"block-container"}>
        <Block
          variant={"roze"}
          className={"responsive-order"}
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
        <ImageBlock
          src={"overlablou/eenbruisendeplek.png"}
          alt={"Een bruisende plek in Zeist"}
        />
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
        <ImageBlock
          src={"home/carousel_3.jpg"}
          alt={"Een bruisende plek in Zeist"}
        />
      </div>
      <InstagramMarquee
        variant={"right"}
        type={"zwart"}
        text={"LAB LOU TEAM"}
        className={"d-flex d-lg-none"}
        disable
      />
      <div className={"team-container"}>
        <InstagramMarquee
          variant={"right"}
          type={"zwart"}
          text={"LAB LOU TEAM"}
          className={"d-lg-flex d-none"}
          disable
        />
        <ImageBlock
          src={"overlablou/over_lablou.jpeg"}
          alt={"Het Lab Lou team"}
          className={"over-ons-image"}
        />
      </div>
      <TeamledenBlock />
    </section>
  );
};
export default OverOnsBlockV2;
