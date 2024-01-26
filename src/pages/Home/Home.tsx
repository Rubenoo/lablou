import Block from "../../components/Block/Block.tsx";
import StyledButton from "../../components/Button/Button.tsx";
import AanbodBlock from "../../components/AanbodBlock/AanbodBlock.tsx";
import CTABlock from "../../components/CTABlock/CTABlock.tsx";
import InstagramMarquee from "../../components/InstagramMarquee/InstagramMarquee.tsx";
import Carousel from "../../components/Carousel/Carousel.tsx";
import { handleClick } from "../../components/Pijl/Pijl.tsx";

const Home: React.FunctionComponent = () => {
  return (
    <main>
      <div className={"block-container"}>
        <Block
          variant={"roze"}
          inleiding="Dit doen we bij Lab Lou"
          titel={"Creatieve en sociale hotspot"}
          toelichting={
            "Wij zijn de eerste creatieve en sociale broedplaats van de regio in een omgetoverd tuincentrum aan de rand van Zeist West. Creatieve en sociale ondernemers kunnen hier werkruimtes huren, flexwerken en samenwerken. \n\nDaarnaast ontwikkelen wij allerlei (inwoners)initiatieven en zetten we mensen in hun kracht door het aanbieden van gericht programma en het creëren van werkervaringsplekken. In Lab Lou bieden we ook tal van creatieve en culturele activiteiten aan. \n\nEr is altijd iets te doen!"
          }
          button={button}
        />
        <Carousel />
      </div>
      <InstagramMarquee variant={"right"} />
      <div className={"ons-aanbod-container"} id={"ons-aanbod"}>
        <h1>Ons aanbod</h1>
        <div
          className={
            "ons-aanbod-items-container ons-aanbod-items-container-home"
          }
        >
          <AanbodBlock
            index={0}
            category={"Flex- & vergaderruimte"}
            afbeelding={"ontdek_ons_aanbod"}
            titel={"Ontdek ons aanbod"}
            to={"flexruimtes"}
            key={"0"}
          />
          <AanbodBlock
            index={1}
            category={"Vaste verhuur"}
            afbeelding={"werk_en_atelierruimte"}
            titel={"Ontdek onze werk- en atelierruimte"}
            to={"vasteverhuur"}
          />
        </div>
      </div>
      <InstagramMarquee variant={"left"} />
      <CTABlock />
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
    Bekijk het aanbod
  </StyledButton>
);
