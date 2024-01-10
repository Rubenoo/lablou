import Block from "../../components/Block/Block.tsx";
import StyledButton from "../../components/Button/Button.tsx";
import ImageBlock from "../../components/ImageBlock/ImageBlock.tsx";
import AanbodBlock from "../../components/AanbodBlock/AanbodBlock.tsx";
import CTABlock from "../../components/CTABlock/CTABlock.tsx";
import InstagramMarquee from "../../components/InstagramMarquee/InstagramMarquee.tsx";
import { NavLink } from "react-router-dom";

const Home: React.FunctionComponent = () => {
  const button = (
    <NavLink to="zaalverhuur">
      <StyledButton className={""} variant={"zwart"}>
        Bekijk het aanbod
      </StyledButton>
    </NavLink>
  );
  return (
    <main>
      <div className={"block-container"}>
        <Block
          variant={"roze"}
          inleiding="Wat doen we bij Lab Lou"
          titel={
            "Lab Lou, de creatieve en sociale hotspot van regio Zeist/De Bilt"
          }
          toelichting={
            "Bij ons kun je een werkplek huren, flexwerken en elkaar ontmoeten! We zetten mensen in hun kracht door het creëren van werkervaringsplekken en samen met inwoners en lokale organisaties ontwikkelen wij allerlei nieuwe initiatieven voor onze regio.\n\nEn dit alles in een fijne, creatieve en professionele sfeer mèt goede koffie en het lekkerste eten. Wat wil je nog meer?"
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
            index={0}
            category={"Zaalverhuur"}
            afbeelding={"stock"}
            titel={"Ontdek onze vergaderzalen"}
            to={"zaalverhuur"}
            key={"0"}
          />
          <AanbodBlock
            index={1}
            category={"Werk- en atelierruimte"}
            afbeelding={"stock"}
            titel={"Ontdek onze Werk- en atelierruimte"}
            to={"werkplekken"}
          />
        </div>
      </div>
      <InstagramMarquee />
      <CTABlock />
    </main>
  );
};
export default Home;
