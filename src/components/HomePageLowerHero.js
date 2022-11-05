import { Button } from "./Button"

export function HomePageLowerHero({ spanText, textColor, className, }) {

    const lowerHeroSpanStyle = {
        color: textColor
    }



    return (
        <div className="hero_wrap">
            <div className="second-hero_wrap">
                <div className={className}>
                    <div className="main-content-wrap ">
                        <span style={lowerHeroSpanStyle}>{spanText}</span>
                        <Button buttonText="Scopri di più" color='black'/>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}
