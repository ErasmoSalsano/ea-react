export function Button({buttonText,color}) {

    const buttonStyle ={
    color: color,
    borderColor: color,
    }

    return (
        <div className="content-details hero2-button_discover">
            <div style={buttonStyle} className="details hero2-button_discover_content" >
                <p>{buttonText}
                </p>
            </div>
        </div>
    )
}