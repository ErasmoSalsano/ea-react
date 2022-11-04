
import { HomePageUpperHero } from "../components/HomePageUpperHero";
import { HomePageLowerHero } from "../components/HomePageLowerHero";
// import { Header } from "../components/Header";
// import { NavTab } from "../components/NavTab/NavTab";
import { GamesGrid } from "../components/GamesGrid"

export function Home() {
  return (
    <div>
       <HomePageUpperHero
        logoSvg="assets\images\hero\home\hero1\eacom-apex-eclipse-adaptive-logo-xl.png.adapt.crop2x1.1023w.png"
        mobile="assets\images\hero\home\hero1\apex-hero-medium-eclipse-eacom-7x2-xl.jpg.adapt.crop16x9.767w.jpg"
        tablet768="assets\images\hero\home\hero1\apex-hero-medium-eclipse-eacom-7x2-xl.jpg.adapt.crop2x1.1023w.jpg"
        tablet1024="assets\images\hero\home\hero1\apex-hero-medium-eclipse-eacom-7x2-xl.jpg.adapt.crop5x2.1455w.jpg"
        desktop="assets\images\hero\home\hero1\apex-hero-medium-eclipse-eacom-7x2-xl.jpg.adapt.crop7x2.1920w.jpg"
        spanText="Trova la tua forza interiore"
        buttonSpan='Gioca ora'
        buttonPosition='center'
        content='content1'

      />
      <HomePageLowerHero
      eaSvg='/assets/images/hero/home/hero2/ea-play-logo-coral-hero-logo-small.svg'
      buttonSpan='Unisciti ora'
      buttonTextColor='white'
        bgImage='assets\images\hero\home\hero1\ea-play-product-conversion-gradient-jpg-2020-xl.jpg.adapt.1920w.jpg'
        imageClass='lower-hero_image1'
        className="lower-hero"
        textColor='white'
        spanText="Per i nuovi membri è disponibile un'offerta imperdibile sul primo mese†"
      />

      <GamesGrid />
      {/* <NavTab gestion='home'/> */}
      {/* Dichiarare una basepath da usare per accorciare */}
      <HomePageUpperHero
        logoSvg="/assets/images/hero/home/hero2/ea-play-logo-coral-hero-logo-small.svg"
        mobile="/assets/images/hero/home/hero2/hero-767-medium-console-7x2-xl.jpg.adapt.crop3x5.767w.jpg"
        tablet768="/assets/images/hero/home/hero2/hero-1023-medium-console-7x2-xl.jpg.adapt.crop2x1.1023w.jpg"
        tablet1024="/assets/images/hero/home/hero2/hero-1455-medium-console-7x2-xl.jpg.adapt.crop5x2.1455w.jpg"
        desktop="/assets/images/hero/home/hero2/hero-1920-medium-console-7x2-xl.jpg.adapt.crop7x2.1920w.jpg"
        spanText="Non limitarti al gioco. Gioca al massimo. Sblocca ricompense esclusive, contenuti per i soli
        membri e una libreria dei migliori titoli."
        buttonSpan='Iscriviti subito'
        content='content2'
        buttonPosition='left'
      />
      <HomePageLowerHero
        buttonSpan='Scopri di più'
        bgImage='/assets/images/hero/home/hero2/ea-section-sfondo blu-bg-esrb-parents-blue-xl.jpg.adapt.1920w.jpg'
        imageClass='lower-hero_image2'
        className="lower-hero"
        textColor='black'
        spanText='Genitori: il controllo dei videogiochi è nelle vostre mani.'
      />
    </div>
  );
}