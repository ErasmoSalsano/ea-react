import { Button } from "./Button"

export function HomePageUpperHero({ mobile, tablet768, tablet1024, desktop, spanText, logoSvg }) {

    return (
        <div className="hero_wrap">
            <div className="second-hero_wrap">

                <picture>
                    <source media="(max-width: 766px)"
                        srcset={mobile} />
                    <source media="(min-width: 767px)"
                        srcset={tablet768} />
                    <source media="(min-width: 1024px)"
                        srcset={tablet1024} />
                    <source media="(min-width: 1456px)"
                        srcset={desktop} />
                    <img className="upper-hero_image"
                        src={mobile}
                        alt="hero_image" />
                </picture>

                <div className="upper-hero ">



                    
                    <div className="upper-hero_content main-wrap">
                        <img className="upper-hero_logo"
                            src={logoSvg} alt="ea play logo" />
                        <span>{spanText} </span>
                        <Button buttonText='Iscriviti subito' color='white' justifyContent={'left'} />

                    </div>
                </div>
            </div>
        </div>
    )
}