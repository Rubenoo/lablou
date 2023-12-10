import "./styles.scss";
import StyledButton from "../Button/Button.tsx";

const CTABlock: React.FunctionComponent = () => {
  return (
    <section className={"cta-container"}>
      <h2>
        Direct een flexplek boeken bij de tofste en gezelligste werkplek van
        Zeist?
      </h2>
      <p>
        De Lab Lou is een thuishaven voor iedere ondernemer: creatievelingen,
        workaholics, trainers en levensgenieters. Wij bieden jouw unieke
        zakelijke woonkamer waar je helemaal all-out mag gaan in design en
        inrichting.
      </p>
      <StyledButton variant={"zwart"}>Bekijk het aanbod</StyledButton>
    </section>
  );
};
export default CTABlock;
