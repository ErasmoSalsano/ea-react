import { HeaderNavbar } from './HeaderNavbar'
import { HeaderMenuIcon, HeaderMenuIcon2 } from "../data/headerData"

export const Header = ()=>{
  return(
   <div id='header-wrap'>
    <div className='header-container'>
    <header>
      <div className="upper-header">
          <div className="header-menu-icon-wrap">
            <HeaderMenuIcon />
            <HeaderMenuIcon2 />
          </div>
          
          <a className="header-logo-esteso" href="/index.html">
              <img src="/assets/images/header/ea-wordmark-network-nav-coral-bicolor.svg" alt="Electronics Arts logo" />
          </a>
          <HeaderNavbar />
      </div>
    </header>
    </div>
   </div>
  )
}