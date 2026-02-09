import "./styles.scss";
import { AnchorProps } from "react-bootstrap";
import { scrollTo } from "../utils.ts";

const Pijl: React.FunctionComponent<AnchorProps> = (props) => {
  return (
    <a onClick={scrollTo(props.href!)}>
      <img alt="pijl icoon" className="pijl" src="/assets/svg/pijl-round.svg" />
    </a>
  );
};
export default Pijl;
