import StyledButton, { StyledButtonProps } from "../Button/Button.tsx";
import React from "react";

type ContactOpnemenProps = {
  className?: string;
  variant?: StyledButtonProps["variant"];
};
export const ContactOpnemenKnop: React.FunctionComponent<
  ContactOpnemenProps
> = ({ className, variant }) => (
  <a href="mailto:info@lablou.nl" className={className}>
    <StyledButton variant={variant || "zwart"}>Contact opnemen</StyledButton>
  </a>
);

export default ContactOpnemenKnop;
