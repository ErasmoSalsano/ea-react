import { MainContentWrap } from "../components/0_wraps/mainContentWrap";
import { MainWrap } from "../components/0_wraps/mainWrap";
import { ArticleCard } from "../components/ArticleCard";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Title } from "../components/Title";
import { pages } from "../data/DummyData";
import './../style/pages/manteinance/manteinance.scss'

export function Manteinance() {

    return (
        <div className="manteinance">
            <Header />
            <div className={"bg"}>
                <img className={"img"} src="/assets/images/pages/maintenance/Component 1 – 1.png" alt="background-image" />
                <div className={"void"}></div>
                <MainWrap>
                    <MainContentWrap p extendClass='sorry'>
                        <Title className="title">
                            <h1>Sorry</h1>
                            <h3>Website under maintenaince</h3>
                        </Title>
                        <h1>Redirect to</h1>
                    </MainContentWrap>
                </MainWrap>
                <div className="page" id="griglia1">
                    <MainWrap>
                        <MainContentWrap pt extendClass='articles-standard'>
                            {pages.map((item, index) => <ArticleCard key={index + 1} article={item} />)}
                        </MainContentWrap>
                    </MainWrap>
                </div>
                <div className="navbar">
                    <button id="back">
                        <svg viewBox="0 0 40 40" preserveAspectRatio="xMidYMid meet" focusable="false" style={{pointerEvents: 'none', display: 'block', width: '100%', height: '100%'}}>
                            <g>
                                <g>
                                    <path d="M21.7,20.6l-4.9-4.9c-0.4-0.4-0.4-1,0-1.4l0,0c0.4-0.4,1-0.4,1.4,0l4.9,4.9c0.4,0.4,0.4,1,0,1.4 l0,0C22.8,21,22.1,21,21.7,20.6z"></path>
                                    <path d="M23.2,20.8l-4.9,4.9c-0.4,0.4-1,0.4-1.4,0l0,0c-0.4-0.4-0.4-1,0-1.4l4.9-4.9 c0.4-0.4,1-0.4,1.4,0l0,0C23.6,19.7,23.6,20.4,23.2,20.8z"></path>
                                    <path d="M20,2.1c9.8,0,17.9,8,17.9,17.9s-8,17.9-17.9,17.9S2.1,29.8,2.1,20S10.2,2.1,20,2.1 M20,0.2C9,0.2,0.2,9,0.2,20 S9,39.8,20,39.8S39.8,31,39.8,20S31,0.2,20,0.2L20,0.2z"></path>
                                </g>
                            </g>
                        </svg>
                    </button>
                    <div className="page-collector">
                        <button id="1" className="selectPage">
                            <div className="page-button"></div>
                        </button>
                        <button id="2" className="selectPage" >
                            <div className="page-button"></div>
                        </button>
                        <button id="3" className="selectPage">
                            <div className="page-button"></div>
                        </button>
                    </div>
                    <button id="next">
                        <svg viewBox="0 0 40 40" preserveAspectRatio="xMidYMid meet" focusable="false" style={{pointerEvents: 'none', display: 'block', width: '100%', height: '100%'}}>
                            <g>
                                <g>
                                    <path d="M21.7,20.6l-4.9-4.9c-0.4-0.4-0.4-1,0-1.4l0,0c0.4-0.4,1-0.4,1.4,0l4.9,4.9c0.4,0.4,0.4,1,0,1.4 l0,0C22.8,21,22.1,21,21.7,20.6z"></path>
                                    <path d="M23.2,20.8l-4.9,4.9c-0.4,0.4-1,0.4-1.4,0l0,0c-0.4-0.4-0.4-1,0-1.4l4.9-4.9 c0.4-0.4,1-0.4,1.4,0l0,0C23.6,19.7,23.6,20.4,23.2,20.8z"></path>
                                    <path d="M20,2.1c9.8,0,17.9,8,17.9,17.9s-8,17.9-17.9,17.9S2.1,29.8,2.1,20S10.2,2.1,20,2.1 M20,0.2C9,0.2,0.2,9,0.2,20 S9,39.8,20,39.8S39.8,31,39.8,20S31,0.2,20,0.2L20,0.2z"></path>
                                </g>
                            </g>
                        </svg>
                    </button>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
