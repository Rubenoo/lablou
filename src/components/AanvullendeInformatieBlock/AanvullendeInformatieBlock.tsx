import "./styles.scss";
import StyledButton from "../Button/Button.tsx";
import { ZaalType } from "../../pages/Zaalverhuur/types.ts";

type AanvullendeInformatieBlockProps = ZaalType & {
  className?: string;
};

const AanvullendeInformatieBlock: React.FunctionComponent<
  AanvullendeInformatieBlockProps
> = ({ className, toelichting, index, informatie }) => {
  const informatieElements = informatie?.map((info, index) => (
    <div key={index}>
      <h4>{info.titel}</h4>
      <p>{info.gegevens}</p>
    </div>
  ));
  return (
    <section
      key={index}
      id={"aanvullende-informatie"}
      className={`aanvullende-informatie-container ${className}`}
    >
      <div className={"info"}>
        <h1>Aanvullende informatie</h1>
        <p>{toelichting}</p>
        <StyledButton className={"d-none d-lg-block"} variant={"zwart"}>
          Contact opnemen
        </StyledButton>
        <p>
          meer weten <b>download</b> dan onze brochure
        </p>
      </div>
      <div>
        <h3>Tarieven (excl.btw)</h3>
        <div className={"gegevens"}>{informatieElements}</div>
        <StyledButton className={"d-lg-none d-block"} variant={"zwart"}>
          Contact opnemen
        </StyledButton>
      </div>
    </section>
  );
};
export default AanvullendeInformatieBlock;
