import { NavList } from "../data/headerData"
import { Details } from "./Details"

export const HeaderNavbar = ()=>{
  return(
    <div className="header-navbar-wrap">
      <div className="header-nav">
        <ul>
          {NavList.map((item) => {
            return (
              <li key={item.summary}>
                <Details Data={item} />
              </li>
              )
          })}
        </ul>
      </div>
    </div>
  )
}