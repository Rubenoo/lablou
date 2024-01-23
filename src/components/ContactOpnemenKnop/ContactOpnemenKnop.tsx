import StyledButton, { StyledButtonProps } from "../Button/Button.tsx";
import React from "react";

type ContactOpnemenProps = {
  className?: string;
  variant?: StyledButtonProps["variant"];
  children?: string;
};
export const ContactOpnemenKnop: React.FunctionComponent<
  ContactOpnemenProps
> = ({ className, variant, children }) => (
  <a href="mailto:hallo@lablou.nl" className={className}>
    <StyledButton variant={variant || "zwart"}>
      {children || "Contact"}
    </StyledButton>
  </a>
);

export default ContactOpnemenKnop;
