import { Button } from "./Button"

export function HomePageLowerHero({ spanText, textColor, className, }) {

    const lowerHeroSpanStyle = {
        color: textColor,
        // textAlign:'left'
    }



    return (
        <div className="hero_wrap ">
            <div className="second-hero_wrap ">
                <div className={className + ' main-wrap'}>
                    <div className="main-content-wrap ">
                        <span style={lowerHeroSpanStyle}>{spanText}</span>
                        <Button buttonText="Scopri di più" color='black' justifyContent={'center'}/>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}