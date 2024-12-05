import Block from "../../components/Block/Block.tsx";
import ImageBlock from "../../components/ImageBlock/ImageBlock.tsx";
import ZalenJSON from "./zalen.json";
import { ZaalType } from "./types.ts";
import { useNavigate, useParams } from "react-router";
import Pijl from "../../components/Pijl/Pijl.tsx";
import AanvullendeInformatieBlock from "../../components/AanvullendeInformatieBlock/AanvullendeInformatieBlock.tsx";
import { useEffect } from "react";

const Zaal: React.FunctionComponent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const zaal: ZaalType | undefined = ZalenJSON.find(
    // @ts-expect-error negeer deze
    (zaal: ZaalType) => zaal.index == id,
  );
  useEffect(() => {
    if (!zaal) {
      void navigate("/");
    }
  }, [zaal, navigate]);

  if (!zaal) {
    return null;
  }

  return (
    <main>
      <div className={"block-container"}>
        <Block
          variant={"groen"}
          titel={zaal.titel}
          terugKnop={"flexruimtes"}
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
};

export default Zaal;

const Symposiumruimte: React.FunctionComponent = () => {
  return (
    <video disableRemotePlayback autoPlay muted loop className={"image-block"}>
      <source src="/assets/videos/symposiumruimte.mp4" type="video/mp4" />
    </video>
  );
};
