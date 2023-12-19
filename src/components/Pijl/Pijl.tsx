import "./styles.scss";
import { AnchorProps } from "react-bootstrap";

const Pijl: React.FunctionComponent<AnchorProps> = (props) => {
  const handleClick =
    (href: string) =>
    (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      event.preventDefault();

      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    };
  return (
    <a onClick={handleClick(props.href!)}>
      <img
        alt="pijl icoon"
        className="pijl"
        src="/lablou/assets/svg/pijl-round.svg"
      />
    </a>
  );
};
export default Pijl;
