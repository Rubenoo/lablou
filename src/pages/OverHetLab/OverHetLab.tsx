import { TerugKnop } from "../../components/TerugKnop/TerugKnop.tsx";
import OverOnsBlock from "../../components/OverOnsBlock/OverOnsBlock.tsx";
import "./styles.scss";
import OnzeLaborantenBlock from "../../components/OnzeLaborantenBlock/OnzeLaborantenBlock.tsx";

const OverHetLab: React.FunctionComponent = () => {
  return (
    <main>
      <div className={"over-ons"}>
        <TerugKnop className={"terug-knop"} variant={"home"} />
        <OverOnsBlock />
      </div>
      <OnzeLaborantenBlock />
    </main>
  );
};
export default OverHetLab;
