import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MainContentWrap } from "../components/0_wraps/mainContentWrap";
import { MainWrap } from "../components/0_wraps/mainWrap";
import { useManageAccount } from "../utils/useManageAccount";
import { game } from "../data/cards-data";
import "./../style/pages/shop/shop.scss";
import { Footer } from "../components/Footer";
import { Header } from "../components/header/Header";

export function Shop() {
    const { loggedUser, currentUser, userPurchases } = useManageAccount();
    const { id } = useParams()
    const [content, setContent] = useState()
    const [response, setResponse] = useState()
    const myData = game.find((it) => ([27, 28, 29].find((i) => i === +id)) ? it.id === 3 : it.id === +(id))
    const navigate = useNavigate()

    useEffect(() => {
        if (!myData) return
        setContent(myData.shop.secondary[0])
    }, [myData])

    function buy(x, y) {
        if (currentUser && loggedUser) {
            if (x === 'ea') {
                if (loggedUser.subscription === false) {
                    userPurchases(currentUser.uid, y)
                    setResponse({ message: 'Congratulation!You are subscribbed to EA', failed: false })
                } else {
                    setResponse({ message: 'We are sorry, you are already subscribed', failed: true })
                }
            } if (x === 'game') {
                if (!loggedUser?.games || loggedUser?.games && !loggedUser?.games.includes(myData.id)) {
                    userPurchases(currentUser.uid, y, myData.id)
                    setResponse({ message: 'Congratulation, your purchase successfull the game', failed: false })
                } else {
                    setResponse({ message: 'you own this game', failed: true })
                }
            }
        }
        else {
            setResponse({ message: 'You have to login', failed: true })
        }
    }

    return (
        myData ?
            <>
                <Header />
                <div className="Shop">
                    <MainWrap>
                        <MainContentWrap extendClass={'game-name'} p>
                            <h1>{myData.title}</h1>
                        </MainContentWrap>
                    </MainWrap>
                    <MainWrap>
                        <MainContentWrap extendClass={'select-section'} p>
                            <div className="sections">Informazioni sul gioco</div>
                            <div className="sections">Descrizione</div>
                        </MainContentWrap>
                    </MainWrap>
                    <MainWrap>
                        <MainContentWrap extendClass={'principal-section'} p>
                            <div className="gameInfo">
                                <div className="header">
                                    <p>L'App EA per Windows</p>
                                    <p>Incluso con EA Play ed EA PlayPro</p>
                                </div>
                                <div className="container_message">
                                    <p>Passaggio 1</p>
                                    <h3>Vuoi acquistare o abbonarti?</h3>
                                </div>
                                <div className="gameInfo_principal">
                                    <img src={content && content} alt="principal game content" />
                                </div>
                                <div className="gameInfo_carousel">
                                    Immagini e video
                                </div>
                                <div className="thumbs">
                                    {myData && myData.shop.secondary.map((item, index) =>
                                        <img className="thumb" key={index} src={item} onClick={() => setContent(item)} alt="content of the game" />
                                    )}
                                </div>
                            </div>
                            <div className="purchase">
                                <div className="header">
                                    <p>L'App EA per Windows</p>
                                    <p>Incluso con EA Play ed EA PlayPro</p>
                                </div>
                                <div className="container">
                                    <div className="container_message">
                                        <p>Passaggio 1</p>
                                        <h3>Vuoi acquistare o abbonarti?</h3>
                                    </div>
                                    <div className="response-message" style={response && response.failed ? { color: 'red' } : { color: 'green' }}>
                                        {response && response.message}
                                    </div>
                                    <div onClick={() => buy('ea', 'subscription')} className="purchase_cta">
                                        <div className="purchase_cta-types">
                                            <p>Unisciti a EA Play</p>
                                            <p>EA Play EA PlayPro</p>
                                        </div>
                                        <div className="purchase_cta-types2">
                                            <p>A partire da</p>
                                            <p>€ 3.99</p>
                                        </div>
                                    </div>
                                    <div onClick={() => buy('game', 'games')} className="purchase_cta">
                                        <div className="purchase_cta-types">
                                            <p>Compra <span style={{ color: 'red' }}>{myData.title}</span></p>
                                        </div>
                                        <div className="purchase_cta-types2">
                                            <p>A partire da</p>
                                            <p>€ {myData.shop.price}</p>
                                        </div>
                                    </div>
                                    <div className="available">Available on
                                        <p>{Object.keys(myData.platforms).filter(item => myData.platforms[item] === true).join(' - ')}</p>
                                    </div>
                                    <div className="container_message">
                                        <p className="container_message-one">Confronta diversi modi di giocare</p>
                                    </div>
                                    <div className="container_message">
                                        <h3 className="container_message-two">Seleziona per procedere</h3>
                                    </div>
                                    <div className="container_message">
                                        <p className="container_message-three">
                                            Questo gioco include acquisti in gioco opzionali di valuta virtuale che possono essere utilizzati per acquistare oggetti di gioco virtuali.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </MainContentWrap>
                    </MainWrap>
                    <MainWrap>
                        <MainContentWrap extendClass={'second-section'} p>
                            <div className="container">
                                <div className="gameInfo_carousel">
                                    Immagini e video
                                </div>
                                <div className="thumbs">
                                    {myData && myData.shop.secondary.map((item, index) =>
                                        <img className="thumb" key={index} src={item} onClick={() => setContent(item)} alt="content of the game" />
                                    )}
                                </div>
                                <div className="container_message">
                                    <p className="container_message-one">Confronta diversi modi di giocare</p>
                                </div>
                                <div className="container_message">
                                    <h3 className="container_message-two">Seleziona per procedere</h3>
                                </div>
                                <div className="container_message">
                                    <p className="container_message-three">
                                        Questo gioco include acquisti in gioco opzionali di valuta virtuale che possono essere utilizzati per acquistare oggetti di gioco virtuali.
                                    </p>
                                </div>
                            </div>
                        </MainContentWrap>
                    </MainWrap>
                    <div className="void"></div>
                    <h2 style={{ textAlign: 'center', padding: 15, color: 'blue' }}>Related games</h2>
                    <div className="otherGames">
                        {game.filter(item => item.franchise === myData.franchise).slice(0, 3).map(item =>
                            <div key={item.id} onClick={() => navigate(`/shop/${item.id}`)}>
                                <img className="thumb" src={item.shop.secondary[0]} alt="preview" />
                                <p>{item.title}</p>
                            </div>)}
                    </div>
                    <div className="void"></div>
                </div>
                <Footer />
            </>
            :
            <>
                <Header />
                <p className="shopErrorManage">Content not available</p>
                <Footer />
            </>
    )
}