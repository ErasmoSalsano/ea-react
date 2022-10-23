import { useEffect, useState, useCallback } from "react"
import { ArticlesGrid } from "./ArticlesGrid"
import { TabButtons } from "../data/DummyData";
import { articleCards } from "../data/DataArticle";

export function NavTab({gestion}) {
    const [active, setActive] = useState({
        id:1,
        nome:'Notizie Ea',
        categoria:'Eletronics Arts',
    })
    
    const showArgument = useCallback(function showArgument(item){
        return () => active === item.id ? setActive(null) : setActive(item)
    }, [active])

    useEffect(() => {
        showArgument()
    }, [active, showArgument])


    const padding = { padding: 0 }
    const display = { 'display': 'flex' }

    return (
        <>
        <div className="main-wrap navTab">
            <div className="main-content-wrap" style={padding}>
                <button className="left-btn buttons" id="left-Btn" ><i className="material-icons">arrow_back_ios</i></button>
                <div className="navTabArticles">
                    <>{TabButtons[gestion].map((item, index) =>
                        <div key={index} style={display}>
                            <button onClick={showArgument(item)} className={active.id === index +1 ? 'linkTab active' : 'linkTab'}>
                                <div className="content">
                                    {item.nome}
                                </div>
                                <div className="animation"></div>
                            </button>
                        </div>
                    )}</>
                </div>
                <button className="right-btn buttons" id="right-Btn"><i className="material-icons">arrow_forward_ios</i></button>
            </div>
        </div>
        {active && <ArticlesGrid key={active.id +1} total={6} request={active.categoria} argument={articleCards}/>}
        </>
    )
}