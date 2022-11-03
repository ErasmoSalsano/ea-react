import { Button } from "./Button"

export function HomePageUpperHero({mobile,tablet768,tablet1024,desktop,spanText,logoSvg}) {

    return (
        <div className="hero_wrap">
            <div className="second-hero_wrap">
                <div className="upper-hero2">
                    <picture>
                        <source media="(max-width: 766px)"
                            srcSet={mobile} />
                        <source media="(min-width: 767px)"
                            srcSet={tablet768} />
                        <source media="(min-width: 1024px)"
                            srcSet={tablet1024} />
                        <source media="(min-width: 1456px)"
                            srcSet={desktop} />
                        <img className="upper-hero2_image"
                            src={mobile}
                            alt="hero_image" />
                    </picture>


                    <div className="main-content-wrap hero2-buttons">
                        <img className="upper-hero2-logo"
                            src={logoSvg} alt="ea play logo" />
                        <span>{spanText} </span>
                      <div>
                        <Button buttonText='Iscriviti subito' color='white'/>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    )
}