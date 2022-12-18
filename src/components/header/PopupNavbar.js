import { Link } from "react-router-dom";

export const PopupNavbar = ({ Data }) => {
  const {
    navHidden,
    gamesHidden,
    popMenuOpen,
    popNavOpen,
    popGamesOpen,
    onPopNavClick,
  } = Data;

  return (
    <div className="popup-menu-wrap" open={popMenuOpen} onClick={onPopNavClick}>
      <section
        className="popup-navbar-wrap"
        style={{ display: navHidden ? "none" : "block" }}
        open={popNavOpen}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="top-nav">
          <img
            className="header-logo-esteso-nav"
            src="/assets/images/header/ea-wordmark-network-nav-coral-bicolor.svg"
            alt="Electronics Arts logo"
          />
          <svg
            onClick={onPopNavClick}
            className="popup-close-icon"
            x="0px"
            y="0px"
            viewBox="0 0 40 40"
          >
            <g viewBox="0 0 16 16">
              <path
                fillRule="evenodd"
                style={{ stroke: "currentColor" }}
                fill="none"
                clipRule="evenodd"
                d="M20.2019 36.5256C30.433 36.5256 38.7269 28.4553 38.7269 18.5C38.7269 8.54472 30.433 0.474365 20.2019 0.474365C9.9708 0.474365 1.67688 8.54472 1.67688 18.5C1.67688 28.4553 9.9708 36.5256 20.2019 36.5256Z"
                strokeWidth="0.95"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.1566 13.1711C15.7806 12.8052 15.1709 12.8052 14.7949 13.1711C14.4189 13.537 14.4189 14.1302 14.7949 14.4961L18.8392 18.4314L14.6543 22.5035C14.2783 22.8694 14.2783 23.4626 14.6543 23.8285C15.0304 24.1944 15.64 24.1944 16.0161 23.8285L20.201 19.7564L24.3857 23.8284C24.7618 24.1943 25.3714 24.1943 25.7475 23.8284C26.1235 23.4625 26.1235 22.8693 25.7475 22.5034L21.5627 18.4314L25.6069 14.4962C25.9829 14.1303 25.9829 13.5371 25.6069 13.1712C25.2309 12.8053 24.6212 12.8053 24.2452 13.1712L20.201 17.1064L16.1566 13.1711Z"
              ></path>
            </g>
          </svg>
        </div>

        <div className="popup-nav">
          <ul>
            <li>
              <details className="details-1">
                <summary>
                  Giochi
                  <svg
                    className="chevron"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    {/* Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.  */}
                    <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z" />
                  </svg>
                </summary>
                <div className="content">
                  <ul className="inner-ul">
                    <li>
                      <details className="details-2">
                        <summary>
                          ESPLORA I GIOCHI
                          <svg
                            className="cross"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                          >
                            {/* <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                            <path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z" />
                          </svg>
                        </summary>
                        <div className="content">
                          <ul className="end-ul">
                            <li>
                              <a href="/mainteinance">Ultimi giochi</a>
                            </li>
                            <li>
                              <a href="/mainteinance">Prossimamente</a>
                            </li>
                            <li>
                              <a href="/EaSports">EA SPORTS</a>
                            </li>
                            <li>
                              <a href="/mainteinance">Giochi gratuiti</a>
                            </li>
                            <li>
                              <a href="/mainteinance">Libreria dei giochi</a>
                            </li>
                          </ul>
                        </div>
                      </details>
                    </li>
                    <li>
                      <details className="details-2">
                        <summary>
                          PIATTAFORME
                          <svg
                            className="cross"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                          >
                            {/* <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                            <path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z" />
                          </svg>
                        </summary>
                        <div className="content">
                          <ul className="end-ul">
                            <li>
                              <a href="/pcGames">PC</a>
                            </li>
                            <li>
                              <a href="/mainteinance">PlayStation®5</a>
                            </li>
                            <li>
                              <a href="/mainteinance">Xbox Series X</a>
                            </li>
                            <li>
                              <a href="/mainteinance">Nintendo Switch™</a>
                            </li>
                            <li>
                              <a href="/mainteinance">Cellulari</a>
                            </li>
                          </ul>
                        </div>
                      </details>
                    </li>
                  </ul>
                </div>
              </details>
            </li>
            <li>
              <details className="details-1">
                <summary>
                  Altre esperienze
                  <svg
                    className="chevron"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    {/* <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                    <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z" />
                  </svg>
                </summary>
                <div className="content">
                  <ul className="inner-ul">
                    <a href="/mainteinance">
                      <li>EA Play</li>
                    </a>
                    <a href="/mainteinance">
                      <li>Origin</li>
                    </a>
                    <a href="/mainteinance">
                      <li>Competizioni videoludiche</li>
                    </a>
                    <a href="/mainteinance">
                      <li>Diretta di EA Play</li>
                    </a>
                  </ul>
                </div>
              </details>
            </li>
            <li>
              <details className="details-1">
                <summary>
                  Informazioni
                  <svg
                    className="chevron"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    {/* <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                    <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z" />
                  </svg>
                </summary>
                <div className="content">
                  <ul className="inner-ul">
                    <a href="/mainteinance">
                      <li>Società</li>
                    </a>
                    <a href="/mainteinance">
                      <li>EA Studi</li>
                    </a>
                    <a href="/mainteinance">
                      <li>Lavora con noi</li>
                    </a>
                    <a href="/mainteinance">
                      <li>La nostra tecnologia</li>
                    </a>
                    <a href="/mainteinance">
                      <li>EA partners</li>
                    </a>
                    <a href="/informazioni/notizie">
                      <li>Notizie</li>
                    </a>
                    <a href="/informazioni/inside-ea">
                      <li>Inside EA</li>
                    </a>
                  </ul>
                </div>
              </details>
            </li>
            <li>
              <details className="details-1">
                <summary>
                  Impegni
                  <svg
                    className="chevron"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    {/* <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                    <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z" />
                  </svg>
                </summary>
                <div className="content">
                  <ul className="inner-ul">
                    <a href="/mainteinance">
                      <li>Gioco positivo</li>
                    </a>
                    <a href="/mainteinance">
                      <li>Diversità e inclusione</li>
                    </a>
                    <a href="/mainteinance">
                      <li>Investire nella comunità</li>
                    </a>
                    <a href="/mainteinance">
                      <li>Persone e cultura</li>
                    </a>
                    <a href="/mainteinance">
                      <li>Ambiente</li>
                    </a>
                  </ul>
                </div>
              </details>
            </li>
            <li>
              <details className="details-1">
                <summary>
                  Risorse
                  <svg
                    className="chevron"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    {/* <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                    <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z" />
                  </svg>
                </summary>
                <div className="content">
                  <ul className="inner-ul">
                    <a href="/mainteinance">
                      <li>Aiuto</li>
                    </a>
                    <a href="/mainteinance">
                      <li>Forum</li>
                    </a>
                    <a href="/mainteinance">
                      <li>Filtro famiglia</li>
                    </a>
                    <a href="/mainteinance">
                      <li>Accessibilità</li>
                    </a>
                    <a href="/mainteinance">
                      <li>Stampa</li>
                    </a>
                    <a href="/mainteinance">
                      <li>Investitori</li>
                    </a>
                    <a href="/mainteinance">
                      <li>Test di gioco</li>
                    </a>
                  </ul>
                </div>
              </details>
            </li>
          </ul>
        </div>
      </section>

      <section
        className="popup-games-wrap"
        style={{ display: gamesHidden ? "none" : "block" }}
        open={popGamesOpen}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="top-nav">
          <span>Tutti i giochi</span>
          <svg
            onClick={onPopNavClick}
            className="cross close-cross"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            {/* <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
            <path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z" />
          </svg>
        </div>

        <div className="popup-games">
          <Link to="/shop/100" className="game-in-nav">
            <img
              className="game-in-nav-image"
              src="https://media.contentapi.ea.com/content/dam/gin/images/2021/04/ea-play-16x9-png.adapt.crop1x1.767w."
              alt="Purple background"
            />
            <div className="game-in-nav-overlay">
              <img
                className="logo"
                src="https://media.contentapi.ea.com/content/dam/gin/images/2021/04/ea-play-mono-logo-svg.svg"
                alt="EA play live logo"
              />
            </div>
          </Link>

          <Link to="/shop/3" className="game-in-nav">
            <img
              className="game-in-nav-image"
              src="/assets/images/game/eas-fifa22-gen5-ue-keyart-horz-f23logo-1x1.jpg.adapt.crop1x1.767p.jpg"
              alt="FIFA 23"
            />
            <div className="game-in-nav-overlay">
              <img
                className="logo"
                src="https://media.contentapi.ea.com/content/dam/gin/common/logos/fifa23-logo-white-stacked.svg"
                alt="FIFA 23 logo"
              />
            </div>
          </Link>

          <Link to="/shop/6" className="game-in-nav">
            <img
              className="game-in-nav-image"
              src="/assets/images/game/1-1-gamebox-f122-keyart-1.png.adapt.crop1x1.767p.png"
              alt="F1® 22"
            />
            <div className="game-in-nav-overlay">
              <img
                className="logo"
                alt="F1® 22 logo"
                src="https://media.contentapi.ea.com/content/dam/gin/common/logos/f122-gamebox-logo.png"
              />
            </div>
          </Link>

          <Link to="/shop/17" className="game-in-nav">
            <img
              className="game-in-nav-image"
              src="/assets/images/game/madden-23.jpg"
              alt="Madden 23"
            />
            <div className="game-in-nav-overlay">
              <img
                className="logo"
                alt="Madden 23 logo"
                src="/assets/images/game/madden-23-logo.svg"
              />
            </div>
          </Link>

          <Link to="/shop/2" className="game-in-nav">
            <img
              className="game-in-nav-image"
              src="/assets/images/game/crysis-remastered.jpg"
              alt="Crysis Remastered"
            />
            <div className="game-in-nav-overlay">
              <img
                className="logo"
                alt="Crysis Remastered"
                src="/assets/images/game/crysis-remastered-logo.png"
              />
            </div>
          </Link>

          <Link to="/shop/8" className="game-in-nav">
            <img
              className="game-in-nav-image"
              src="/assets/images/game/battlefield-2042-key-art.jpg.adapt.crop1x1.767p.jpg"
              alt="Battlefield 2042"
            />
            <div className="game-in-nav-overlay">
              <img
                className="logo big-logo"
                alt="Battlefield 2042 logo"
                src="https://media.contentapi.ea.com/content/dam/gin/common/logos/battlefield-2042-mono-logo-svg.svg"
              />
            </div>
          </Link>

          <Link to="/shop/1" className="game-in-nav">
            <img
              className="game-in-nav-image"
              src="/assets/images/game/the-sims-4-keyart.jpg.adapt.crop1x1.767p.jpg"
              alt="The Sims 4"
            />
            <div className="game-in-nav-overlay">
              <img
                className="logo big-logo"
                alt="The Sims 4 logo"
                src="https://media.contentapi.ea.com/content/dam/gin/common/logos/the-sims-4-mono-logo.png"
              />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};
