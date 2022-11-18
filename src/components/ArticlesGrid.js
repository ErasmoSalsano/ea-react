import { ArticleCard } from "./ArticleCard";
import { useEffect } from "react";
import { MainWrap } from "./0_wraps/mainWrap";
import { MainContentWrap } from "./0_wraps/mainContentWrap";
import { ButtonLoadMore } from "./Buttons/ButtonLoadMore";
import { Button } from "./Button";

export function ArticlesGrid(props) {
    let myNewData = data(props.request, props.amount, props.argument)

    useEffect(() => {
        data()
    }, [myNewData, props])

    function data(reqCategory, num, argument) {
        return reqCategory &&
            argument.filter(e =>
                reqCategory === 'all'
                    ? e.category !== reqCategory
                    : e.category === reqCategory)
                .slice(0, num)
                .map((item, index) =>
                    <ArticleCard
                        key={item.id + index}
                        article={item} />)
    }

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