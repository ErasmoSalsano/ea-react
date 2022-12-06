import { MainWrap } from "./0_wraps/mainWrap";
import { MainContentWrap } from "./0_wraps/mainContentWrap";
import { ButtonLoadMore } from "./Buttons/ButtonLoadMore";
import { Button } from "./Button";
import { useContentSelection } from "../utils/useContentSelection";

export function ArticlesGrid(props) {
    const {myNewData} = useContentSelection(props)
    return (
        <MainWrap>
            <MainContentWrap
                extendClass={
                    props.classA
                        ? "articles-standard container"
                        : "articles-standard tabContent"}
                pt>
                {myNewData}
                {props.button && props.button === 'A'
                    ? <MainContentWrap p>
                        <Button buttonText={'Più dettagli'} buttonLink={'/informazioni/notizie'} />
                    </MainContentWrap>
                    : props.button === 'B'
                        ? <ButtonLoadMore />
                        : null}
            </MainContentWrap>
        </MainWrap>
    )
}