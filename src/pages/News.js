import { MainWrap } from "../components/0_wraps/mainWrap";
import { ArticlesGrid } from "../components/ArticlesGrid";
import { ButtonLoadMore } from "../components/Buttons/ButtonLoadMore";
import { Picture } from "../components/Picture";
import { Title } from "../components/Title";
import { articleCards } from "../data/DataArticle";
import './../style/pages/informazioni/news.scss'

export function News() {
    return (
        <div className="news">
            <div className="main-wrap-hero">
                <div className="main-wrap-hero-content">
                    <div className="main-wrap-hero-text">
                        <Title className="title">
                            <h1>Ultime notizie</h1>
                        </Title>
                    </div>
                    <Picture
                        imgClass={'img-text'}
                        request={'news'} />
                </div>
            </div>
            <ArticlesGrid
                request={'all'}
                amount={18}
                argument={articleCards}
                classA
                />
            <div className="void"></div>
            <MainWrap>
                <ButtonLoadMore />
            </MainWrap>
            <div className="void"></div>
        </div>
    )
}