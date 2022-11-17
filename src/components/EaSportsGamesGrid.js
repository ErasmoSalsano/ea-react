import { EaSportsGamesCard } from "./EaSportsGamesCard"

export function EaSportsGamesGrid({firstGrid}) {
  const firstSection = [
    {
      nameUrl: 'Sito Ufficiale',
      imageBg: './assets/images/game/the-sims-mobile.jpg',
      imgDescription: 'descrizione',
      svgPath: "./assets/images/game/the-sims-mobile-logo.png"
    },
    {
      nameUrl: 'Sito Ufficiale',
      imageBg: './assets/images/game/nhl-23.jpg',
      imgDescription: 'descrizione',
      svgPath: "./assets/images/game/nhl-23-logo.svg",
    },
    {
      nameUrl: 'Sito Ufficiale',
      imageBg: './assets/images/game/crysis-remastered.jpg',
      imgDescription: 'descrizione',
      svgPath: "./assets/images/game/crysis-remastered-logo.png"
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
  const secondSection = [
    {
      nameUrl: 'Sito Ufficiale',
      imageBg:'/assets/images/game/fifa-mobile.jpg',
      imgDescription: 'descrizione',
      svgPath: "/assets/images/game/fifa-mobile-logo.svg"
    },
    {
      nameUrl: 'Sito Ufficiale',
      imageBg: '/assets/images/game/nba-live-mobile.jpg',
      imgDescription: 'descrizione',
      svgPath: "/assets/images/game/nba-live-mobile-logo.png",
    },
    {
      nameUrl: 'Sito Ufficiale',
      imageBg: '/assets/images/game/madden-22-mobile.jpg',
      imgDescription: 'descrizione',
      svgPath: "/assets/images/game/madden-22-mobile-logo.svg"
    },
    {
      nameUrl: 'Sito Ufficiale',
      imageBg: '/assets/images/game/formula1-mobileracing-gamebox.png.adapt.crop1x1.767w.png',
      imgDescription: 'descrizione',
      svgPath: "/assets/images/game/f1-mobileracing-logo.svg"
    },
    ]

  return (
    
      <div>
       {firstGrid ?
        <div className="grid-games">{
          firstSection.map((i, index) => { return <EaSportsGamesCard key={i.nameUrl + index} game={i} /> })}
        </div> :
        <div className="secondwrap-grid-games">{
          secondSection.map((i, index) => { return <EaSportsGamesCard key={i.nameUrl + index} game={i} /> })}
        </div>
        
        }

     
      </div>
   
  )
}

