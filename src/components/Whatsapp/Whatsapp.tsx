import React from "react";
import "./styles.scss";

type WhatsappButtonProps = {
  className?: string;
};
export const WhatsappButton: React.FunctionComponent<WhatsappButtonProps> = ({
  className,
}) => (
  <a
    href={"https://wa.me/31332072337"}
    aria-label="Neem contact op via Whatsapp"
    rel="noopener noreferrer"
    className={className}
    target={"_blank"}
  >
    <img className={"whatsapp"} src="/assets/svg/whatsapp.svg" alt="WhatsApp" />
  </a>
);

export default WhatsappButton;
