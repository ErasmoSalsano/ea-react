import { GameGrid } from "./components/GamesGrid";
import { HomePageUpperHero } from "./components/HomePageUpperHero";
import { HomePageLowerHero } from "./components/HomePageLowerHero";
import { Header } from "./components/Header";
import { NavTab } from "./components/NavTab/NavTab";

export function App() {
  return (
    <div className="App">
        <Header />
        <GameGrid />
        <NavTab gestion='home'/>
        <HomePageUpperHero 
        logoSvg="./assets/images/hero/home/hero2/ea-play-logo-coral-hero-logo-small.svg"
        mobile="/assets/images/hero/home/hero2/hero-767-medium-console-7x2-xl.jpg.adapt.crop3x5.767w.jpg"
        tablet768="/assets/images/hero/home/hero2/hero-1023-medium-console-7x2-xl.jpg.adapt.crop2x1.1023w.jpg"
        tablet1024="/assets/images/hero/home/hero2/hero-1455-medium-console-7x2-xl.jpg.adapt.crop5x2.1455w.jpg"
        desktop="/assets/images/hero/home/hero2/hero-1920-medium-console-7x2-xl.jpg.adapt.crop7x2.1920w.jpg"
        spanText="Non limitarti al gioco. Gioca al massimo. Sblocca ricompense esclusive, contenuti per i soli
        membri e una libreria dei migliori titoli."
        />
        <HomePageLowerHero 
        className="lower-hero2"
        textColor='black'
        spanText='Genitori: il controllo dei videogiochi è nelle vostre mani.'
        />
    </div>
  );
}