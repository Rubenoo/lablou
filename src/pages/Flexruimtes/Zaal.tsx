import Block from "../../components/Block/Block.tsx";
import ImageBlock from "../../components/ImageBlock/ImageBlock.tsx";
import ZalenJSON from "./zalen.json";
import { ZaalType } from "./types.ts";
import { useParams } from "react-router";
import NietGevonden from "../../components/NietGevonden/NietGevonden.tsx";
import Pijl from "../../components/Pijl/Pijl.tsx";
import AanvullendeInformatieBlock from "../../components/AanvullendeInformatieBlock/AanvullendeInformatieBlock.tsx";

const Zaal: React.FunctionComponent = () => {
  const { id } = useParams();
  const zaal: ZaalType | undefined = ZalenJSON.find(
    // @ts-expect-error negeer deze
    (zaal: ZaalType) => zaal.index == id,
  );
  if (zaal) {
    return (
      <main>
        <div className={"block-container"}>
          <Block
            variant={"groen"}
            titel={zaal.titel}
            terugKnop={"zaalverhuur"}
            toelichting={zaal.toelichting}
            button={<Pijl href={"#aanvullende-informatie"} />}
          />
          {zaal.titel === "Symposiumruimte" ? (
            <Symposiumruimte />
          ) : (
            <ImageBlock
              src={`flexruimtes/${zaal.afbeelding}.jpg`}
              alt={zaal.titel}
            />
          )}
        </div>
        <AanvullendeInformatieBlock {...zaal} />
      </main>
    );
  }
  return <NietGevonden />;
};

export default Zaal;

const Symposiumruimte: React.FunctionComponent = () => {
  return (
    <video autoPlay muted loop className={"video"}>
      <source src="/assets/videos/symposiumruimte.mp4" type="video/mp4" />
    </video>
  );
};
