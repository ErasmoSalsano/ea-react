import { Button } from "./Button"

export function HomePageLowerHero({ spanText, textColor, className, bgImage, buttonSpan, buttonTextColor, eaSvg,imageClass }) {

    const lowerHeroSpanStyle = {
        color: textColor,
      
    }


    return (
        <div className="hero_wrap ">
            <div className="second-hero_wrap second-lower-hero_wrap">
                <picture>
                    <img className={imageClass} src={process.env.PUBLIC_URL + bgImage} alt='' />
                </picture>
                <div className={className + ' main-wrap'}>

                    <div className="main-content-wrap ">
                        <span style={lowerHeroSpanStyle}>{spanText}</span>
                        <div className='buttons-wrap'>
                           {eaSvg && <img className='eaplay-logo' src={process.env.PUBLIC_URL + eaSvg} alt='ea play logo' /> }
                            <Button buttonText={buttonSpan} color={buttonTextColor} /*justifyContent={'center'}*/ />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
