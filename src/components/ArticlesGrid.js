import { MainWrap } from "./0_wraps/mainWrap";
import { MainContentWrap } from "./0_wraps/mainContentWrap";
import { ButtonLoadMore } from "./Buttons/ButtonLoadMore";
import { Button } from "./Button";
import { useContentSelection } from "../utils/useContentSelection";
import { useEffect, useState } from "react";

export function ArticlesGrid(props) {
    const {myNewData, totalData, addCards} = useContentSelection(props)
    const [data, setData] = useState(myNewData)
    
    useEffect(()=>{
        setData(myNewData)
    },[])

    return (
        <MainWrap>
            <MainContentWrap
                extendClass={
                    props.classA
                        ? "articles-standard container"
                        : "articles-standard tabContent"}
                pt>
                {data && myNewData}
                {props.button && props.button === 'A'
                    ? <MainContentWrap p>
                        <Button buttonText={'Più dettagli'} buttonLink={'/informazioni/notizie'} />
                    </MainContentWrap>
                    : props.button === 'B'
                        ? myNewData.length === totalData.length? null: <ButtonLoadMore onClick={addCards}/>
                        : null}
            </MainContentWrap>
        </MainWrap>
    )
}