import { GameCard } from "./GameCard"
import { Button } from "./Button"

export function GamesGrid(props) {
  const cards = [
    {
      nameUrl: 'Sito Ufficiale',
      imageBg: './assets/images/game/crysis-remastered.jpg',
      imgDescription: 'descrizione',
      svgPath: "./assets/images/game/fifa23-logo-white-stacked (1).svg"
    },
    {
      nameUrl: 'Sito Ufficiale',
      imageBg: './assets/images/game/1-1-gamebox-f122-keyart-1.png.adapt.crop1x1.767p.png',
      imgDescription: 'descrizione',
      svgPath: "https://media.contentapi.ea.com/content/dam/gin/common/logos/f122-gamebox-logo.png"
    },
    {
      nameUrl: 'Sito Ufficiale',
      imageBg: './assets/images/game/apex-mobile-keyart-1x1.jpg.adapt.crop1x1.767p.jpg',
      imgDescription: 'Apex Legends Mobile logo',
      svgPath: "https://media.contentapi.ea.com/content/dam/gin/common/logos/apex-mobile-logo.svg"
    },
    {
      nameUrl: 'Sito Ufficiale',
      imageBg: './assets/images/game/eas-fifa22-gen5-ue-keyart-horz-f23logo-1x1.jpg.adapt.crop1x1.767p.jpg',
      imgDescription: 'descrizione',
      svgPath: "./assets/images/game/fifa23-logo-white-stacked (1).svg"
    }]

  return (
    <div className="main-wrap">
      <div className="content-wrap">
        <div className="title-game">
          <h3>Giochi in evidenza</h3>
        </div>
        <div className="grid-games">{
          cards.map((i, index) => { return <GameCard key={i.nameUrl + index} game={i} /> })}
        </div>

        <Button buttonText="Ultimi Giochi" color='black' />
      </div>
    </div>
  )
}



