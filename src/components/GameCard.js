export function GameCard({game}) {
    return (
          <a className="game-box" href="sitooriginale.it">
            <img className="game-image" src={process.env.PUBLIC_URL + game.imageBg} alt={game.imgDescription} />
            <div className="image_overlay">
              <img className="logo" src={process.env.PUBLIC_URL + game.svgPath} alt="Game cover" />
              <span className="span_games">{game.nameUrl}</span>
            </div>
          </a>
    )
  }
  