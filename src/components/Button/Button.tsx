import "./styles.scss";
import { Button } from "react-bootstrap";
import React from "react";
import { ButtonProps } from "react-bootstrap/Button";

export type StyledButtonProps = {
  children: React.ReactNode;
  variant: "zwart" | "roze" | "groen";
  className?: string;
  onClick?: React.EventHandler<React.MouseEvent | React.KeyboardEvent>;
} & ButtonProps;

const StyledButton: React.FunctionComponent<StyledButtonProps> = ({
  children,
  variant,
  className = "",
  ...props
}) => {
  return (
    <Button className={`button button-${variant} ${className}`} {...props}>
      {children}
    </Button>
  );
};

export default StyledButton;
