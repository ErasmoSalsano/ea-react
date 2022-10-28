export function Button({buttonText,color,justifyContent}) {

    const buttonStyle ={
    color: color,
    borderColor: color,
   
    }

    const buttonPosition = { 
        justifyContent: justifyContent
    }

    return (
        <div style={buttonPosition} className="content-details">
            <div style={buttonStyle} className="details " >
                <p>{buttonText}
                </p>
            </div>
        </div>
    )
}