import ImageBlock from "../ImageBlock/ImageBlock.tsx";
import "./styles.scss";
import React from "react";

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
        src={"overlablou/over_lablou.jpg"}
        alt={"Over Lab Lou"}
        className={"over-ons-image"}
      />
      <h2>Ontmoeten in Lab Lou</h2>
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
        We gaan elkaar in Lab Lou ontmoeten! En daarvoor organiseren wij
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
      <p>
        Merel de Jong, Marloes van Haaren, Emma Fijma, Marloes Klok, Marjolein
        Brandenburg en Willy Douma
      </p>
      <h2>Contact en bereikbaarheid</h2>
      <address>
        <b className={"m-0 d-block"}>Lab Lou</b>
        <a
          href={
            "https://www.google.com/maps/search/?api=1&query=Weteringlaan+1,+3732HZ+De+Bilt"
          }
          target={"_blank"}
        >
          Weteringlaan 1 <br />
          3732 HZ De Bilt
        </a>
        <a className={"d-block"} href="mailto:hallo@lablou.nl">
          hallo@lablou.nl
        </a>
        <a className={"d-block"} href="tel:06 28277642">
          06 28277642
        </a>
        <a
          className={"d-block mb-2"}
          href={"https://www.instagram.com/bijlablou/"}
          target={"_blank"}
        >
          @bijlablou
        </a>
        <p>
          Parkeerplaatsen op eigen terrein
          <br />
          Bus 74 stopt voor de deur - halte Weteringlaan zowel vanuit Utrecht
          als vanaf Station Driebergen-Zeist
        </p>
      </address>
    </section>
  );
};
export default OverOnsBlock;
