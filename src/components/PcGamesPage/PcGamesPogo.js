import { Button } from "../Button";

export function PcGamesPogo() {
  return (
    <div class="main-wrap">
      <div class="content-wrap">
        <div class="box-card pogo-box">
        <picture >
                    <source media="(max-width: 766px)"
                        srcSet={'/assets/images/banners/pogo-767.jpg 767w'} />
                    <source media="(max-width: 1023px)"
                        srcSet={'/assets/images/banners/pogo-1023.jpg 1024w'} />
                    <source media="(max-width: 1455px)"
                        srcSet={'/assets/images/banners/pogo-1455.jpg 1320w'} />
                    <source media="(min-width: 1456px)"
                        srcSet={'/assets/images/banners/pogo-1920.jpg 1456w'} />
                    <img className="pogo-image"
                        src={'/assets/images/banners/pogo-767.jpg 767w'}
                        alt="hero_image" />
                </picture>

  <div class="text-card-pogo">
            <img
              class="logo-play"
              src="/assets/images/banners/pogo-logo.svg"
              alt=""
            />
            <p className="">Pogo è dove nascono i migliori giochi casual gratutiti online</p>
            <div class="main-wrap">
              <div class="main-content-wrap">
              <Button buttonText={'Scopri di più'}/>
              </div>
              <div class="main-content-wrap">
             <Button buttonText={'Gioca ora'}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
