import { Button } from "../components/Button";
import { EaSportsGamesGrid } from "../components/EaSportsGamesGrid";
import { useMediaPredicate } from "react-media-hook";
import { NavTab } from "../components/NavTab/NavTab";
import "./../style/index.scss";
import "../style/pages/games/EA-SPORTS.scss";
import { Header } from "../components/header/Header";
import { Footer } from "../components/Footer";

export function EaSports() {
  const biggerThan768 = useMediaPredicate("(min-width: 768px)");

  return (
    <>
      <Header />
      <div className="EASPORTS-big-wrap">
        <div className="EASPORTS-firstwrap">
          <img
            className="EASPORTS-blackground"
            src="/assets/images/EASPORTSpage/fr-fr-others-pegi-16xl.png.adapt.1920w.png"
            alt=""
          />
          <video
            className="EASPORTS-video"
            src="assets/images/EASPORTSpage/easports-video-pagebackground.webm"
            autoPlay
            loop
            muted
          >
            {" "}
          </video>

          <div className="content-wrap">
            <div className="title-game">
              <img
                className="EA-title-logo"
                src="/assets/images/game/ea-sports-logo-light.png"
                alt="EA sports logo"
              />
              <h3>Ultimi giochi sportivi</h3>
              <h4>
                Gioca ai migliori giochi di calcio, football americano, hockey
                su ghiaccio, golf, basket,<span>Formula 1®</span>e MMA con i
                titoli sportivi di Electronic Arts. Domina il gioco più bello
                del mondo con i nostri titoli<span> FIFA</span>, conquista la
                gloria sul campo da football nella serie<span> Madden NFL</span>{" "}
                , domina il ghiaccio con un hockey così realistico che ti farà
                venire voglia di indossare il paradenti nei nostri titoli
                <span>NHL</span>, e molto altro ancora!
              </h4>
            </div>

            <EaSportsGamesGrid firstGrid />

            <div className="main-content-wrap">
              <Button buttonText={"Tutti i giochi SPORTIVI"} />
            </div>
          </div>
        </div>

        <div
          className="EASPORTS-insertion"
          style={{
            backgroundImage: `url(/assets/images/EASPORTSpage/ea-play-product-conversion-gradient-jpg-mobile.768w.jpg)`,
          }}
        >
          <div className="insertion-text">
            <h4>IL MODO MIGLIORE DI GIOCARE: UNISCITI A EA PLAY!</h4>
          </div>

          <div className="insertion-logo">
            <img
              className="insertion-svg"
              src="/assets/images/EASPORTSpage/ea-play-logo-coral-cta-type-image.svg"
              alt="EA PLAY"
            />
            <div className="main-content-wrap">
              <Button buttonText={"Iscriviti subito"} />
            </div>
          </div>
        </div>

        <div className="EASPORTS-secondwrap">
          <div className="content-wrap">
            <div className="title-game">
              <h3>GIOCHI SPORTIVI PER DISPOSITIVI MOBILI </h3>
            </div>
            <EaSportsGamesGrid />
          </div>
        </div>

        <div className="EASPORTS-thirdwrap">
          <div className="EASPORTS-thirdwrap-title">
            <h3>Ultime notizie</h3>
          </div>

          <NavTab gestion="eaSports" type={"ArticleGrid"} />
        </div>
        <div
          className="EASPORTS-insertion2"
          style={
            biggerThan768
              ? {
                  backgroundImage: `url('/assets/images/EASPORTSpage/ea-sports-pc-join-us-xl.png.tablet.1024w.png')`,
                }
              : {}
          }
        >
          <h3>insieme cambieremo i giochi</h3>

          <div className="main-content-wrap">
            <Button buttonText={"Entra nella nostra squadra"} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
