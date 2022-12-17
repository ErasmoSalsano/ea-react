import { Button } from "../Button";

export function PcGamesEaPlay() {
  return (
    <div className="main-wrap">
      <div className="content-wrap">
        <div className="box-card ea-play-box">
        <picture >
                    <source media="(max-width: 766px)"
                        srcSet={'/assets/images/banners/ea-play-767.jpg 767w'} />
                    <source media="(max-width: 1023px)"
                        srcSet={'/assets/images/banners/ea-play-1023.jpg 1024w'} />
                    <source media="(max-width: 1455px)"
                        srcSet={'/assets/images/banners/ea-play-1455.jpg 1320w'} />
                    <source media="(min-width: 1456px)"
                        srcSet={'/assets/images/banners/ea-play-1920.jpg 1456w'} />
                    <img className=""
                        src={'/assets/images/banners/ea-play-320.jpg 320w'}
                        alt="hero_image" />
                </picture>




          <div className="text-card">
            <img
              className="logo-play"
              src="/assets/images/banners/ea-playpro-logo.svg"
              alt=""
            />
            <p>
              Non limitarti al gioco. Gioca al massimo. Sblocca ricompense
              esclusive,contenuti per i soli membri e una libreria dei migliori
              titoli.
            </p>
            <div className="main-wrap">
              <div className="main-content-wrap">
              <Button buttonText={'Unisciti ora'}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
