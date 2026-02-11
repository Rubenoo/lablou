import "./styles.scss";
import { ZaalType } from "../../pages/Flexruimtes/types.ts";
import React from "react";
import WhatsappButton from "../Whatsapp/Whatsapp.tsx";

type AanvullendeInformatieBlockProps = ZaalType & {
  className?: string;
};

const AanvullendeInformatieBlock: React.FunctionComponent<
  AanvullendeInformatieBlockProps
> = ({ className, index, informatie, aanvullendeInformatie }) => {
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
        <p>{aanvullendeInformatie}</p>
        <WhatsappButton className={"d-none d-lg-block"} />
      </div>
      <div>
        <div className={"gegevens"}>{informatieElements}</div>
        <WhatsappButton className={"d-lg-none d-block"} />
      </div>
    </section>
  );
};
export default AanvullendeInformatieBlock;
