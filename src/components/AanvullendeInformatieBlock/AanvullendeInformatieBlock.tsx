import "./styles.scss";
import { ZaalType } from "../../pages/Zaalverhuur/types.ts";
import ContactOpnemenKnop from "../ContactOpnemenKnop/ContactOpnemenKnop.tsx";
import React from "react";

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
        <ContactOpnemenKnop className={"d-none d-lg-block"} />
        <p>
          meer weten <b>download</b> dan onze brochure
        </p>
      </div>
      <div>
        <h3>Tarieven (excl.btw)</h3>
        <div className={"gegevens"}>{informatieElements}</div>
        <ContactOpnemenKnop className={"d-lg-none d-block"} />
      </div>
    </section>
  );
};
export default AanvullendeInformatieBlock;
