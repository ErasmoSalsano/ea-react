import { HeaderNavbar } from './HeaderNavbar'
import { menuIconDots, menuIconHamburger } from "../data/headerData"
import { UserSpace } from './UserSpace'
import { useHeader } from '../utils/useHeader'

export const Header = ()=>{

  const { scrollUp } = useHeader()

  return(
   <div id='header-wrap'>
    <div className={`header-container ${scrollUp ? '' : 'user-close'}`} >
      <UserSpace />
    <header>
      <div className="upper-header">
          <div className="header-menu-icon-wrap">
            { menuIconHamburger }
            { menuIconDots }
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
