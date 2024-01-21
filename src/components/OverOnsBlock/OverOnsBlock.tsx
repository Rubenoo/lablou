import ImageBlock from "../ImageBlock/ImageBlock.tsx";
import "./styles.scss";

const OverOnsBlock: React.FunctionComponent = () => {
  return (
    <section className={"overons-container"}>
      <h1>Lab Lou</h1>
      <p className={"overons-container-intro"}>
        In september 2023 kreeg team Stadslab Zeist een telefoontje: ‘Hé, wisten
        jullie dat er al heel lang een oud tuincentrum leeg staat in Zeist West?
        Zou dat niet een toffe plek zijn om een creatieve broedplaats op te
        starten?!......’ En nu is dat oude tuincentrum omgetoverd tot onze
        droomplek!
      </p>
      <ImageBlock
        src={"/assets/images/voorbeeldfoto.png"}
        alt={"voorbeeld foto"}
      />
      <h2>Wij zijn een beweging</h2>
      <p>
        Op 1 november 2023 kregen we de sleutel van de eerste creatieve èn
        sociale broedplaats uit onze regio op Weteringlaan 1 in De Bilt (en toch
        ook echt bebouwde kom Zeist): Lab Lou. Opgestart door Stads<b>LAB</b>{" "}
        Zeist en Stichting <b>LOU</b> - Leegstand Oplossers Utrecht. Een gouden
        combinatie :)
      </p>
      <p>
        De financiering van de verbouwing van het oude tuincentrum is gelukt en
        wordt gesteund door gemeente Zeist, gemeente De Bilt, de RSD en
        Stadsregio Utrecht. Daarnaast hebben wij met een crowdfundingcampagne
        geld, spullen en een groot nieuw netwerk opgehaald in onze regio.
      </p>
      <p>
        Creatieve en sociale ondernemers kunnen in Lab Lou een werkplek huren,
        flexwerken en samenwerken. We zullen mensen die dat nodig hebben helpen
        om weer in hun kracht te komen door bijvoorbeeld het creëren van
        werkervaringsplekken.
      </p>
      <p>
        Vooral gaan we elkaar In Lab Lou ontmoeten! En daarvoor organiseren wij
        allerlei activiteiten voor de buurt en inwoners van regio Zeist/De Bilt
        om dat te laten gebeuren. Denk aan workshops, exposities, filmavonden,
        koffieochtenden, voorstellingen voor jong en oud, en noem maar op! En
        wat superleuk is, wat dat programma precies is, dat mag jij bepalen.
        Want wij willen heel graag met inwoners en lokale organisaties samen
        leuke dingen bedenken en ze ook echt gaan doen!
      </p>
      <p>
        En dit alles in een fijne, creatieve en professionele sfeer mèt goede
        koffie en het lekkerste eten. Wat wil je nog meer?
      </p>
      <p>
        Kom zelf ervaren hoe het bij ons is. Wij zien je graag snel in Lab Lou!
      </p>
      <p>Merel, Marloes, Emma, Marjolein, Willy en Simon</p>
    </section>
  );
};
export default OverOnsBlock;
