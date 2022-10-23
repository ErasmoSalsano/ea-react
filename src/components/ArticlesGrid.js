import { ArticleCard } from "./ArticleCard";
import { useEffect } from "react";

export function ArticlesGrid(props) {
    let myNewData = data(props.request, props.total, props.argument)

    useEffect(()=>{
        data()
    },[myNewData, props])

    function data(categoria, num, argument){
        return categoria && argument.filter(e => e.category === categoria).slice(0, num)
        .map((item, index) => <ArticleCard key={item.id + index} article={item} />)
    }

    const style = {'paddingTop': 60}
    return (
        <div className="main-wrap">
            <div className="main-content-wrap tabContent articles-standard" style={style}>
                {myNewData}
            </div>
        </div>
    )
}