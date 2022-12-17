import { GameCard } from "./GameCard";
import { Button } from "./Button";

export function GamesGrid(props) {
  const cards = [
    {
      nameUrl: "Sito Ufficiale",
      gameId: 1,
      imageBg: "./assets/images/game/the-sims-mobile.jpg",
      imgDescription: "descrizione",
      svgPath: "./assets/images/game/the-sims-mobile-logo.png",
    },
    {
      nameUrl: "Sito Ufficiale",
      gameId: 12,
      imageBg: "./assets/images/game/nhl-23.jpg",
      imgDescription: "descrizione",
      svgPath: "./assets/images/game/nhl-23-logo.svg",
    },
    {
      nameUrl: "Sito Ufficiale",
      gameId: 2,
      imageBg: "./assets/images/game/crysis-remastered.jpg",
      imgDescription: "descrizione",
      svgPath: "./assets/images/game/crysis-remastered-logo.png",
    },
    {
      nameUrl: "Sito Ufficiale",
      gameId: "6",
      imageBg:
        "./assets/images/game/1-1-gamebox-f122-keyart-1.png.adapt.crop1x1.767p.png",
      imgDescription: "descrizione",
      svgPath:
        "https://media.contentapi.ea.com/content/dam/gin/common/logos/f122-gamebox-logo.png",
    },
    {
      nameUrl: "Sito Ufficiale",
      gameId: "17",
      imageBg: "./assets/images/game/madden-23.jpg",
      imgDescription: "Apex Legends Mobile logo",
      svgPath: "/assets/images/game/madden-23-logo.svg",
    },
    {
      nameUrl: "Sito Ufficiale",
      gameId: 3,
      imageBg:
        "./assets/images/game/eas-fifa22-gen5-ue-keyart-horz-f23logo-1x1.jpg.adapt.crop1x1.767p.jpg",
      imgDescription: "descrizione",
      svgPath: "./assets/images/game/fifa23-logo-white-stacked (1).svg",
    },
  ];

  return (
    <div className="main-wrap">
      <div className="content-wrap">
        <div className="title-game">
          <h3>Giochi in evidenza</h3>
        </div>
        <div className="grid-games">
          {cards.map((i, index) => {
            return <GameCard key={i.nameUrl + index} game={i} />;
          })}
        </div>

        <Button
          buttonLink="/pcGames"
          buttonText="Ultimi Giochi"
          color="black"
        />
      </div>
    </div>
  );
}
