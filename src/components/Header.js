import { HeaderNavbar } from './HeaderNavbar'
import { menuIconDots, menuIconHamburger } from "../data/headerData"
import { UserSpace } from './UserSpace'
import { useHeader } from '../utils/useHeader'
import { Link } from 'react-router-dom'

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
          
          <Link exact className="header-logo-esteso" to="/">
              <img src="/assets/images/header/ea-wordmark-network-nav-coral-bicolor.svg" alt="Electronics Arts logo" />
          </Link>
          <HeaderNavbar />
      </div>
    </header>
    </div>
   </div>
  )
}
