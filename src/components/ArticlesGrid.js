import { ArticleCard } from "./ArticleCard";
import { useEffect } from "react";
import { MainWrap } from "./0_wraps/mainWrap";
import { MainContentWrap } from "./0_wraps/mainContentWrap";

export function ArticlesGrid(props) {
    let myNewData = data(props.request, props.total, props.argument)

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
                    <div class="content-details">
                        <a class="details" style={{cursor:'pointer'}}>
                            <p>Più dettagli</p>
                        </a>
                    </div>
                </MainContentWrap>
                :props.button === 'B'?
                <MainContentWrap p>
                    <div className="large-details btn">
                        <div className="l-details">
                            <svg>
                                <path d="M34.5,25.5h-6v-6c0-0.6-0.4-1-1-1 c-0.6,0-1,0.4-1,1v6h-6c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h6v6c0,0.6,0.4,1,1,1c0.6,0,1-0.4,1-1v-6h6c0.6,0,1-0.4,1-1 C35.5,25.9,35.1,25.5,34.5,25.5z"></path>
                                <path d="M27,54C12.1,54,0,41.9,0,27S12.1,0,27,0s27,12.1,27,27S41.9,54,27,54z M27,2 C13.2,2,2,13.2,2,27s11.2,25,25,25s25-11.2,25-25S40.8,2,27,2z"></path>
                            </svg>
                            <h2>Carica altro</h2>
                        </div>
                    </div>
                </MainContentWrap>
                :null}
            </MainContentWrap>
        </MainWrap>
    )
}