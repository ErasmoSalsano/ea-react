import { useEffect } from "react";
import { ArticleCard } from "../components/ArticleCard";

export const useContentSelection = ({ request, amount, argument }) => {
  let myNewData = data(request, amount, argument);

  useEffect(() => {
    data();
  }, [myNewData, request, amount, argument]);

  function data(reqCategory, num, argument) {
    return (
      reqCategory &&
      argument
        .filter((e) =>
          reqCategory === "all"
            ? e.category !== reqCategory
            : e.category === reqCategory
        )
        .slice(0, num)
        .map((item, index) => (
          <ArticleCard key={item.id + index} article={item} />
        ))
    );
  }

  return {
    myNewData: myNewData,
  };
};