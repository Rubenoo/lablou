import StyledButton, { StyledButtonProps } from "../Button/Button.tsx";
import React from "react";

type ContactOpnemenProps = {
  className?: string;
  variant?: StyledButtonProps["variant"];
  children?: string;
  href?: string;
  target?: string;
};
export const ContactOpnemenKnop: React.FunctionComponent<
  ContactOpnemenProps
> = ({ className, variant, children, href, target }) => (
  <a
    href={href || "mailto:hallo@lablou.nl"}
    className={className}
    target={target}
  >
    <StyledButton variant={variant || "zwart"}>
      {children || "Contact"}
    </StyledButton>
  </a>
);

export default ContactOpnemenKnop;
