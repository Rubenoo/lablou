import { TerugKnop } from "../../components/TerugKnop/TerugKnop.tsx";
import OverOnsBlock from "../../components/OverOnsBlock/OverOnsBlock.tsx";
import "./styles.scss";
import OnzeLaborantenBlock from "../../components/OnzeLaborantenBlock/OnzeLaborantenBlock.tsx";
import SamenwerkingBlock from "../../components/SamenwerkingBlock/SamenwerkingBlock.tsx";

const OverHetLab: React.FunctionComponent = () => {
  return (
    <main>
      <div className={"over-ons"}>
        <TerugKnop className={"terug-knop"} variant={"home"} />
        <OverOnsBlock />
      </div>
      <OnzeLaborantenBlock />
      <div className={"over-ons"}>
        <div />
        <SamenwerkingBlock />
      </div>
    </main>
  );
};
export default OverHetLab;
