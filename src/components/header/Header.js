import { HeaderNavbar } from "./HeaderNavbar";
import { menuIconDots, menuIconHamburger } from "../../data/headerData.js";
import { UserSpace } from "./UserSpace";
import { useHeader } from "../../utils/useHeader";
import { Link } from "react-router-dom";
import { PopupNavbar } from "./PopupNavbar";
import { usePopup } from "../../utils/usePopup";

export const Header = () => {
  const { scrollUp, setScrollUp } = useHeader();

  const popupData = usePopup(setScrollUp);
  const { onMenuClick } = popupData;

  return (
    <div id="header-wrap">
      <div className={`header-container ${scrollUp ? "" : "user-close"}`}>
        <UserSpace />
        <header>
          <div className="upper-header">
            <div className="header-menu-icon-wrap" onClick={onMenuClick}>
              {menuIconHamburger}
              {menuIconDots}
            </div>
            <PopupNavbar Data={popupData} />

            <Link className="header-logo-esteso" to="/">
              <img
                src="/assets/images/header/ea-wordmark-network-nav-coral-bicolor.svg"
                alt="Electronics Arts logo"
              />
            </Link>
            <HeaderNavbar />
          </div>
        </header>
      </div>
    </div>
  );
};
