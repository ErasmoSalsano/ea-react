import { Button } from "./Button"

export function HomePageUpperHero({ mobile, tablet768, tablet1024, desktop, spanText, logoSvg,buttonSpan,buttonPosition,content }) {

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

                <div className={'upper-hero ' + content}>



                    
                    <div className={'upper-hero_content main-wrap ' + content}>
                        <img className="upper-hero_logo"
                            src={logoSvg} alt="ea play logo" />
                        <span className={content}>{spanText} </span>
                        <Button buttonText={buttonSpan} color='white' justifyContent={buttonPosition} />

                    </div>
                </div>
            </div>
        </div>
    )
}