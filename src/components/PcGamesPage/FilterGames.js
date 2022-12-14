import React, { useState, useMemo } from "react";
import { game } from "../../data/cards-data.js";
import { Pagination } from "./Pagination";
import { useMediaPredicate } from "react-media-hook";
import { useNavigate } from "react-router-dom";

let PageSize = 9;

// Note: the empty deps array [] means
// this useEffect will run once
export function FilterGames() {
  const navigate = useNavigate();
  const lowerThan768 = useMediaPredicate("(max-width: 768px)");
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("");
  const search_parameters = Object.keys(Object.assign({}, ...game));
  const filter_Franchise = [...new Set(game.map((item) => item.franchise))];
  const filter_Categories = [
    ...new Set(game.map((item) => item.categories[0])),
  ];

  function search(items) {
    return items.filter((item) => {
      if (item.franchise.includes(filter)) {
        return search_parameters.some((parameter) =>
          item[parameter].toString().toLowerCase().includes(query)
        );
      }
      if (item.categories[0].includes(filter)) {
        return search_parameters.some((parameter) =>
          item[parameter].toString().toLowerCase().includes(query)
        );
      }
      // Ci vuole un return qui.
    });
  }

  const currentGridData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    // return data.slice(firstPageIndex, lastPageIndex);
    return search(game).slice(firstPageIndex, lastPageIndex);
  });

  function genreSelected(event) {
    if (event.target.value !== "") {
      document.getElementById("franchiseBtn").value = "";
    }
  }
  function franchiseSelected(event) {
    if (event.target.value !== "") {
      document.getElementById("genreBtn").value = "";
    }
  }

  return (
    <div className="wrapper">
      <div className="search-wrapper">
        <label id="search-bar" htmlFor="search-form">
          <input
            style={lowerThan768 ? { display: "none" } : {}}
            type="search"
            name="search-form"
            id="search-form"
            className="search-input"
            placeholder="Cerca il tuo gioco"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          />
        </label>

        <div className="select">
          <select
            onClick={franchiseSelected}
            id="franchiseBtn"
            onChange={(e) => setFilter(e.target.value)}
            className="custom-select"
            aria-label="Filter Countries By Region"
          >
            <option value="">Filtra per Franchise</option>
            {filter_Franchise.map((item, index) => (
              <option key={index + 1} value={item}>
                {item}
              </option>
            ))}
          </select>
          <span className="focus"></span>
        </div>
        <div className="select">
          <select
            onClick={genreSelected}
            id="genreBtn"
            onChange={(e) => setFilter(e.target.value)}
            className="custom-select"
            aria-label="Filter Countries By Region"
          >
            <option value="">Filtra per Genere</option>
            {filter_Categories.map((item, index) => (
              <option key={index + 1} value={item}>
                {item}
              </option>
            ))}{" "}
          </select>
          <span className="focus"></span>
        </div>
      </div>
      <div>
        <div className="grid-games">
          {currentGridData.map((game, index) => {
            return (
              <div
                key={index + 1}
                className="game-box "
                href="sitooriginale.it"
                onClick={() => navigate(`/shop/${game.id}`)}
              >
                <img
                  className="game-image "
                  src={process.env.PUBLIC_URL + game.card.imageBg}
                  alt={game.imgDescription}
                />
                <div className="image_overlay ">
                  <img
                    className="logo"
                    src={process.env.PUBLIC_URL + game.card.svgPath}
                    alt="Game cover"
                  />
                  <div className="block">
                    <a href="#" className="span_games">
                      Sito Ufficiale
                    </a>
                    <a href="#" className="span_games  second">
                      Aiuto
                    </a>
                    <a href="#" className="span_games third">
                      Forum
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
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
