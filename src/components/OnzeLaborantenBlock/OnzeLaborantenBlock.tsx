import "./styles.scss";
import StyledButton from "../Button/Button.tsx";
import Laboranten from "./Laboranten.json";

type Laborant = {
  titel: string;
  website: string;
  link: string;
};

const OnzeLaborantenBlock: React.FunctionComponent = () => {
  const laborantenElements = Laboranten?.map(
    ({ titel, website, link }: Laborant, index) => (
      <div key={index}>
        <h4>{titel}</h4>
        <a href={link}>{website}</a>
      </div>
    ),
  );
  return (
    <section className={"onze-laboranten-container"}>
      <div className={"info"}>
        <h1>Onze Laboranten</h1>
        <p>
          Stay tuned with what is to come! Updates about new events, locations
          and highlights selected by our crew and experts! Stay tuned with what
          is to come!
        </p>
        <StyledButton className={"d-none d-lg-block"} variant={"zwart"}>
          Contact opnemen
        </StyledButton>
      </div>
      <div>
        <div className={"gegevens"}>{laborantenElements}</div>
        <StyledButton className={"d-lg-none d-block"} variant={"zwart"}>
          Contact opnemen
        </StyledButton>
      </div>
    </section>
  );
};
export default OnzeLaborantenBlock;
