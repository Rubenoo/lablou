import "./styles.scss";
import StyledButton from "../Button/Button.tsx";
import { ZaalType } from "../../pages/Zaalverhuur/types.ts";
import { NavLink } from "react-router-dom";

type AanbodBlockProps = ZaalType & {
  className?: string;
  category?: string;
  to: string;
};
const AanbodBlock: React.FunctionComponent<AanbodBlockProps> = ({
  className,
  extraInfo,
  category,
  titel,
  afbeelding,
  index,
  to,
}) => {
  const extraInfoButtons = (
    <div className={"aanbod-container__extra_info_container"}>
      {extraInfo?.map((info: string, keyButton) => (
        <StyledButton key={keyButton} variant={"groen"}>
          {info}
        </StyledButton>
      ))}
    </div>
  );
  return (
    <NavLink
      to={to}
      key={index}
      className={`aanbod-container aanbod-container-image-${afbeelding} ${className} ${
        extraInfoButtons && "aanbod-container__extra-info"
      }`}
    >
      {extraInfoButtons}
      <div className={"aanbod-container-info"}>
        {category && <p>{category}</p>}
        <h2>
          {titel}
          <img src={"/lablou/assets/svg/pijl-white.svg"} />
        </h2>
      </div>
    </NavLink>
  );
};
export default AanbodBlock;
