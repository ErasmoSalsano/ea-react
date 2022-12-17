import { Link } from "react-router-dom"

export const LoginIcon = ({link, name, imgSrc}) => {

  return(
    <Link to={link}>
      <img className={`icon ${name}`} src={imgSrc}
        alt={`Logo ${name.charAt(0).toUpperCase() + name.slice(1)}`} />
    </Link>
  )
}