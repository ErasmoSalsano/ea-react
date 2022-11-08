import { Button } from "../components/Button"
import { EaSportsGamesGrid } from "../components/EaSportsGamesGrid"
import { HomePageLowerHero } from "../components/HomePageLowerHero"
import './../style/index.scss'

export function EaSports() {
    return (
        <div class="EASPORTS-big-wrap">

            <div class="EASPORTS-firstwrap">

                <img class="EASPORTS-blackground"
                    src="/assets/images/EASPORTSpage/fr-fr-others-pegi-16xl.png.adapt.1920w.png" alt="" />
                <video class="EASPORTS-video" src="/assets/images/EASPORTSpage/easports-video-pagebackground.webm" autoplay
                    loop muted> </video>

                <div class="content-wrap">
                    <div class="title-game">
                        <img class="EA-title-logo" src="/assets/images/game/ea-sports-logo-light.png" alt="EA sports logo" />
                        <h3>Ultimi giochi sportivi</h3>
                        <h4>Gioca ai migliori giochi di calcio, football americano, hockey su ghiaccio, golf,
                            basket,<span>Formula 1®</span>
                            e MMA con i titoli sportivi di Electronic Arts. Domina il gioco più bello del mondo con i nostri
                            titoli<span> FIFA</span>, conquista la gloria sul campo da football nella serie<span> Madden
                                NFL</span> , domina il ghiaccio
                            con un hockey così realistico che ti farà venire voglia di indossare il paradenti nei nostri
                            titoli
                            <span>NHL</span>, e molto altro ancora!
                        </h4>
                    </div>
                    <div class="grid-games">
                        <EaSportsGamesGrid />
                    </div>

                    <div class="main-content-wrap">
                        <Button buttonText={'Tutti i giochi SPORTIVI'} />

                    </div>
                </div>

            </div>


            <div class="EASPORTS-insertion">
                {/* <div class="insertion-text">
                    <h4>IL MODO MIGLIORE DI GIOCARE: UNISCITI A EA PLAY!</h4>
                </div>

                <div class="insertion-logo">
                    <img class="insertion-svg" src="/assets/images/EASPORTSpage/ea-play-logo-coral-cta-type-image.svg"
                        alt="EA PLAY" />


                    <div class="main-content-wrap">
                        <Button buttonText={'Iscriviti subito'} />
                    </div>

                </div> */}

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



            </div>

        </div>




    )
}