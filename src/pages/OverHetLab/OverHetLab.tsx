import { TerugKnop } from "../../components/TerugKnop/TerugKnop.tsx";
// import OverOnsBlockV2 from "../../components/OverOnsBlock/OverOnsBlockV2.tsx";
import "./styles.scss";
import OnzeLaborantenBlock from "../../components/OnzeLaborantenBlock/OnzeLaborantenBlock.tsx";
import SamenwerkingBlock from "../../components/SamenwerkingBlock/SamenwerkingBlock.tsx";
import OverOnsBlock from "../../components/OverOnsBlock/OverOnsBlock.tsx";

const OverHetLab: React.FunctionComponent = () => {
  return (
    <main>
      <div className={"over-ons"}>
        <TerugKnop className={"terug-knop"} variant={"home"} />
        {/*<OverOnsBlockV2 />*/}
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
