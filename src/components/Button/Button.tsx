import "./styles.scss";
import { Button } from "react-bootstrap";
import React from "react";

type StyledButtonProps = {
  children: React.ReactNode;
  variant: "zwart" | "roze" | "groen";
  className?: string;
};
const StyledButton: React.FunctionComponent<StyledButtonProps> = ({
  children,
  variant,
  className,
  ...props
}) => {
  return (
    <Button className={`button button-${variant} ${className}`} {...props}>
      {children}
    </Button>
  );
};
export default StyledButton;
