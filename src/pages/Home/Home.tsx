import Block from "../../components/Block/Block.tsx";
import StyledButton from "../../components/Button/Button.tsx";
import AanbodBlock from "../../components/AanbodBlock/AanbodBlock.tsx";
import CTABlock from "../../components/CTABlock/CTABlock.tsx";
import InstagramMarquee from "../../components/InstagramMarquee/InstagramMarquee.tsx";
import HomeCarousel from "../../components/Carousel/HomeCarousel.tsx";
import { handleClick } from "../../components/Pijl/Pijl.tsx";
import Agenda from "../Agenda/Agenda.tsx";
import CTABlockNieuwsbrief from "../../components/CTABlock/CTABlockNieuwsbrief.tsx";
import Kerst from "../../components/Banners/Kerst.tsx";

const Home: React.FunctionComponent = () => {
  return (
    <main>
      <Kerst />

      <div className={"block-container"}>
        <Block
          variant={"roze"}
          inleiding="Dit doen we bij Lab Lou"
          titel={"De sociale en circulaire broedplaats van regio Zeist"}
          toelichting={
            <>
              In een oud tuincentrum aan de rand van Zeist West vind je de
              eerste creatieve broedplaats van de regio. Volledig circulair
              ingericht, met flexwerkplekken, vergaderruimtes en kantoorruimtes.
              <br />
              <br />
              Daarnaast organiseren wij dagelijks een{" "}
              <a className={"underline"} href={"#/agenda"}>
                divers sociaal-cultureel programma
              </a>{" "}
              en ben je altijd welkom om te werken, ontmoeten of gewoon koffie
              te drinken.
            </>
          }
          button={button}
        />
        <HomeCarousel />
      </div>
      <InstagramMarquee variant={"left"} text={"BEKIJK ONZE AGENDA"} />
      <div className={"ons-aanbod-container"} id={"ons-aanbod"}>
        <h1>Onze ruimtes</h1>
        <div
          className={
            "ons-aanbod-items-container ons-aanbod-items-container-home"
          }
        >
          <AanbodBlock
            index={0}
            titel={"Flex- en vergaderruimte"}
            afbeelding={"flexruimtes"}
            to={"flexruimtes"}
            key={"0"}
          />
          <AanbodBlock
            index={1}
            afbeelding={"kantoor_en_atelierruimte"}
            titel={"Kantoor- en atelierruimte"}
            to={"kantoorenatelierruimte"}
          />
        </div>
      </div>
      <Agenda />
      <div className={"block-container"}>
        <CTABlock className={"mt-3"} />
        <CTABlockNieuwsbrief className={"mt-3"} />
      </div>
    </main>
  );
};
export default Home;

const button = (
  <StyledButton
    onClick={handleClick("#ons-aanbod")}
    className={""}
    variant={"zwart"}
  >
    Bekijk onze ruimtes
  </StyledButton>
);
