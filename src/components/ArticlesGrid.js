import { ArticleCard } from "./ArticleCard";
import { useEffect } from "react";
import { MainWrap } from "./0_wraps/mainWrap";
import { MainContentWrap } from "./0_wraps/mainContentWrap";
import { ButtonLoadMore } from "./Buttons/ButtonLoadMore";

export function ArticlesGrid(props) {
    let myNewData = data(props.request, props.amount, props.argument)
    let value

    useEffect(()=>{
        data()
    },[myNewData, props])

    function data(categoria, num, argument){
        return categoria && argument.filter(e => categoria === 'all'? e.category !== categoria :e.category === categoria).slice(0, num)
        .map((item, index) => <ArticleCard key={item.id + index} article={item} />)
    }

    return (
        <MainWrap>
            <MainContentWrap extendClass={props.classA?"articles-standard container":"tabContent articles-standard"} pt>
                {myNewData}
                {props.button && props.button === 'A'?
                <MainContentWrap p>
                    <div className="content-details">
                        <a className="details" style={{cursor:'pointer'}}>
                            <p>Più dettagli</p>
                        </a>
                    </div>
                </MainContentWrap>
                :props.button === 'B'?
                <ButtonLoadMore onClick={()=> console.log(data('all', value = props.amount + 6, props.argument))}/>
                :null}
            </MainContentWrap>
        </MainWrap>
    )
}