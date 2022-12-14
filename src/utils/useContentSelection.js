import { useEffect, useState } from "react";
import { ArticleCard } from "../components/ArticleCard";

export const useContentSelection = ({ request, amount, argument}) => {
  const [plus, setPlus] = useState(0)
  let myNewData = data(request, amount, argument, plus);
  let totalData = argument.filter(e=> request === "all"? e.category !== request: e.category === request)

  function addCards(){
    setPlus( plus + 3)
  }

  useEffect(() => {
    data(request, amount, argument, plus);
  }, [myNewData, request, amount, argument, plus]);

  function data(reqCategory, num, argument, plus) {
    return (
      reqCategory &&
      argument
        .filter((e) =>
          reqCategory === "all"
            ? e.category !== reqCategory
            : e.category === reqCategory
        )
        .slice(0, (plus?num + plus:num))
        .map((item, index) => (
          <ArticleCard key={item.id + index} article={item} />
        ))
    );
  }

  return {
    totalData: totalData,
    myNewData: myNewData,
    addCards: addCards
  };
};