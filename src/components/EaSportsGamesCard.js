export function EaSportsGamesCard({game}) {
    return (
          <a className="game-box zoom-animation-box" href="sitooriginale.it">
            <img className="game-image zoom-animation-image" src={process.env.PUBLIC_URL + game.imageBg} alt={game.imgDescription} />
            <div className="image_overlay zoom-animation-overlay">
              <img className='logo zoom-animation-logo' src={process.env.PUBLIC_URL + game.svgPath} alt="Game cover" />
            
            </div>
          </a>
    )
  }
  