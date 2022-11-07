import { MainContentWrap } from "../components/0_wraps/mainContentWrap";
import { MainWrap } from "../components/0_wraps/mainWrap";
import { ArticlesGrid } from "../components/ArticlesGrid";
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
            </MainWrap>
            <div className="void"></div>
        </div>
    )
}