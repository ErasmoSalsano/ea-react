import { PcGamesPogo } from "../components/PcGamesPage/PcGamesPogo";
import { PcGamesEaPlay } from "../components/PcGamesPage/PcGamesEaPlay";
import { FilterGames } from "../components/PcGamesPage/FilterGames";
import { useMediaPredicate } from "react-media-hook";
// import "./../style/index.scss";
import "../style/pages/games/pc.scss";


export function PcGames() {
  const lowerThan1465 = useMediaPredicate("(min-width: 1456px)");
  return (
    <main>
      <div className="hero-container-pc">
        <picture>
          <source
            media="(max-width: 766px)"
            srcSet="/assets/images/hero/home/h1/h1-768.jpg"
          />
          <source
            media="(max-width: 1024px)"
            srcSet="/assets/images/hero/home/h1/h1-1456.jpg"
          />
          <source
            media="(max-width: 1456px)"
            srcSet="/assets/images/hero/home/h1/h1-1456.jpg"
          />
          <source
            media="(max-width: 9999px)"
            srcSet="/assets/images/hero/home/h1/h1-2910-2000.jpg.jpg"
          />
          <img
            src="/assets/images/hero/home/h1/h1-320.jpg"
            alt="3 geometric shapes"
          />
        </picture>
        <div className="hero-wrapper">
          <div
            style={lowerThan1465 ? {} : { display: "none" }}
            className="hero-text"
          >
            <h3>Giochi PC </h3>
          </div>
        </div>
      </div>

      <div class="main-wrap">
        <div class="content-wrap">
          <div class="title-game">
            <h2>Giochi PC in evidenza</h2>
          </div>
          <div class="grid-games">
            <div class="game-box">
              <img
                class="game-image-default"
                src="/assets/images/game/battlefield-2042-key-art.jpg.adapt.crop1x1.767p.jpg"
                alt="Battlefield 2042"
              />
              <div class="image_overlay">
                <img
                  class="logo big-logo"
                  alt="Battlefield 2042 logo"
                  src="https://media.contentapi.ea.com/content/dam/battlefield/battlefield-2042/common/season-01/bf-2042-white-nav-logo.svg"
                />
                <span class="span_games">Battlefield 2042</span>
              </div>
            </div>
            <div class="game-box">
              <img
                class="game-image-default"
                src="/assets/images/game/1-1-gamebox-f122-keyart-1.png.adapt.crop1x1.767p.png"
                alt="F1® 22"
              />
              <div class="image_overlay">
                <img
                  class="logo"
                  alt="F1® 22 logo"
                  src="https://media.contentapi.ea.com/content/dam/gin/common/logos/f122-gamebox-logo.png"
                />
                <span class="span_games">F1® 22</span>
              </div>
            </div>
            <div class="game-box">
              <img
                class="game-image-default"
                src="/assets/images/game/fifa-22.jpg"
                alt="FIFA 22"
              />
              <div class="image_overlay">
                <img
                  class="logo"
                  src="/assets/images/game/fifa-22-logo.svg"
                  alt="FIFA 22 logo"
                />
                <span class="span_games">FIFA 22</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="main-wrap">
        <div class="main-content-wrap">
          <div class="">
            <h2>Scopri altri fantastici giochi per PC</h2>
          </div>
        </div>
      </div>
      <div class="main-wrap">
        <div class="main-content-wrap">
          <div class="text-p">
            <p>
              Qualsiasi tipo di gioco per PC tu stia cercando, EA ha ciò che fa
              per te! Immergiti in un'epica <a href="#">battle royale</a> dove
              concorrenti leggendari si contendano gloria, fama e fortuna ai
              margini della Frontiera in Apex Legends™. Prova l'azione e il
              realismo del calcio scendendo in campo nella{" "}
              <a href="#">serie FIFA</a>. Oppure libera la tua immaginazione e
              crea un mondo assolutamente unico in <a href="#">The Sims 4</a>.
              Ci sono tantissimi altri titoli tra cui scegliere in ogni genere,
              dagli <a href="#">sparatutto</a> ai
              <a href="#"> giochi di corse</a> fino ai
              <a href="#"> GDR</a>.
            </p>
            <br />
            <p>
              E non dimenticare che i tuoi acquisti di giochi digitali sono
              protetti dalla <a href="#">Nostra Garanzia Grandi Giochi</a>.
            </p>
          </div>
        </div>
      </div>

      {/* <NavTab
            gestion='home'
            buttonType={'A'}
            /> */}

      <div className="main-wrap">
        <div className="content-wrap">
          <div class="title-game">
            <h3>Ultimi Giochi</h3>
          </div>

          <FilterGames />
        </div>
      </div>

      <PcGamesEaPlay />

      <PcGamesPogo />
    </main>
  );
}
