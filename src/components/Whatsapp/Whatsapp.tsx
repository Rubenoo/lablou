import React from "react";
import "./styles.scss";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { Placement } from "react-bootstrap/cjs/types";
import WhatsappIcon from "@assets/svg/whatsapp.svg?react";
type WhatsappButtonProps = {
  className?: string;
  tooltipPlacement?: Placement;
  color?: "wit" | "zwart";
};

export const WhatsappButton: React.FunctionComponent<WhatsappButtonProps> = ({
  className,
  tooltipPlacement = "right",
  color = "zwart",
}) => (
  <OverlayTrigger
    placement={tooltipPlacement}
    delay={{ show: 150, hide: 80 }}
    popperConfig={{
      modifiers: [
        {
          name: "offset",
          options: { offset: [0, 10] }, // [skid, distance] -> increase 10 for more space
        },
      ],
    }}
    overlay={
      <Tooltip id="whatsapp-tooltip">Neem contact op via Whatsapp</Tooltip>
    }
  >
    <a
      href="https://wa.me/31332072337"
      aria-label="Neem contact op via Whatsapp"
      rel="noopener noreferrer"
      target="_blank"
      className={`whatsappLink ${className ? ` ${className}` : ""}`}
    >
      <WhatsappIcon className={`whatsapp whatsapp-${color}`} />
    </a>
  </OverlayTrigger>
);

export default WhatsappButton;
