import { Link } from "react-router-dom"

export function Button({buttonText, color, justifyContent, buttonLink}) {

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
                <Link to={buttonLink}>
                    <p>{buttonText}</p>
                </Link>
            </div>
        </div>
    )
}
