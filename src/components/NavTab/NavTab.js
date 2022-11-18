import { useEffect, useState, useCallback } from "react"
import { ArticlesGrid } from "../ArticlesGrid"
import { TabButtons } from "../../data/DummyData";
import { articleCards } from "../../data/DataArticle";
import { ButtonNavTab } from "../Buttons/ButtonNavTab";
import { MainWrap } from "../0_wraps/mainWrap";
import { MainContentWrap } from "../0_wraps/mainContentWrap";

export function NavTab({gestion, buttonType, value}) {
    const [active, setActive] = useState({
        id: TabButtons[gestion][0].id,
        nome: TabButtons[gestion][0].name,
        reqCategory: TabButtons[gestion][0].reqCategory,
    })
    
    const showArgument = useCallback(function showArgument(item){
        return () => active === item.id ? setActive(null) : setActive(item)
    }, [active])

    useEffect(() => {
        showArgument()
    }, [active, showArgument])

    const display = { 'display': 'flex' }

    return (
        <>
            <MainWrap extendClass={'navTab'}>
                <MainContentWrap p>
                    {/* <button className="left-btn buttons" id="left-Btn" ><i className="material-icons">arrow_back_ios</i></button> */}
                    <div className="navTabArticles">

                        
                        {TabButtons[gestion].map((item, index) =>
                            <div key={index} style={display}>
                                <ButtonNavTab 
                                onClick={showArgument(item)}
                                className={active.id === index +1 
                                    ? 'linkTab active' 
                                    : 'linkTab'}
                                divClassName={'content'}
                                buttonName={item.name}
                                effectClass={'animation'}
                                />
                            </div>
                        )}
                        
                    </div>
                    {/* <button className="right-btn buttons" id="right-Btn"><i className="material-icons">arrow_forward_ios</i></button> */}
                </MainContentWrap>
            </MainWrap>
            {active && 
            <ArticlesGrid 
                key={active.id +1} 
                amount={6} 
                request={active.reqCategory} 
                argument={articleCards} 
                button={buttonType} 
                classA={value}
                />
            }
        </>
    )
}
