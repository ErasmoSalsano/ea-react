export function HomePageLowerHero({ spanText, textColor, className }) {

    const lowerHeroSpanStyle = {
        color: textColor
    }



    return (
        <div className="hero_wrap">
            <div className="second-hero_wrap">
                <div className={className}>
                    <div className="main-content-wrap ">
                        <span style={lowerHeroSpanStyle}>{spanText}</span>
                        <div className="content-details hero2-button_discover">
                            <div className="details hero2-button_discover_content" >
                                <p>Scopri di più
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}