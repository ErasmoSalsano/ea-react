import { Pagination } from "./Pagination";
import React, { useState, useMemo } from "react";
import {game} from "../../data/cards-data.js"
import './pagination.scss'


let PageSize = 9;


export function PcGamesGrid() {

  const [currentPage, setCurrentPage] = useState(1);

  const currentGridData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    // return data.slice(firstPageIndex, lastPageIndex);
    return game.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
  return (


    <div>
      <div className="grid-games">
        {currentGridData.map((game) => {
          return (
            <a className="game-box " href="sitooriginale.it">
              <img
                className="game-image "
                src={process.env.PUBLIC_URL + game.card.imageBg}
                alt={game.imgDescription}
              />
              <div className="image_overlay ">
                <img
                  className={"logo"}
                  src={process.env.PUBLIC_URL + game.card.svgPath}
                  alt="Game cover"
                />
                <div class="block">
                  <a href="#" class="span_games">
                    Sito Ufficiale
                  </a>
                  <a href="#" class="span_games  second">
                    Aiuto
                  </a>
                  <a href="#" class="span_games third">
                    Forum
                  </a>
                </div>
              </div>
            </a>
          );
        })}
      </div>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={game.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}
