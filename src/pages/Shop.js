import { useState } from "react";
import { useParams } from "react-router-dom";
import { MainContentWrap } from "../components/0_wraps/mainContentWrap";
import { MainWrap } from "../components/0_wraps/mainWrap";
import { useManageAccount } from "../utils/useManageAccount";
import "./../style/pages/shop/shop.scss";

const previewGame = [
    { thumb: 1, img: 'https://cdn.mcr.ea.com/3/images/6ed0dc36-d243-41e9-a176-4505af0987e5/1623260686-16x9-1920-1080.jpg' },
    { thumb: 2, img: 'https://cdn.mcr.ea.com/3/images/03a78db9-7129-4a78-91df-3fe805ca698a/1622833279-16x9-1920-1080.jpg' },
    { thumb: 3, img: 'https://cdn.mcr.ea.com/3/images/ca273c83-f439-4e11-aca7-e6d2c22c226c/1669240079-16x9-3840-2160.png' },
    { thumb: 4, img: 'https://cdn.mcr.ea.com/3/images/8ec7961d-3df7-40e4-a37d-53d1b84d02c9/1669240089-16x9-3840-2160.png' },
]

export function Shop() {
    const { loggedUser, currentUser } = useManageAccount();

    //implementazione dell'id dai games in vendita
    const { id } = useParams()
    const [purchase, setPurchase] = useState(false)
    const [subscription, setSubscription] = useState(false)

    //cambiare content con la struttura del game e le relattive componentistiche
    const [content, setContent] = useState(
        { img: previewGame[0].img }
    )

    //cambiare la funzione con il setup del messaggio che verrà visualizzato dall'user
    function buy(x){
        if(currentUser && loggedUser){
            if(x === 'ea'){
                if(subscription === false){
                    setSubscription(true)
                    console.log('Congratulation!You are subscribbed to EA')
                }else{
                    console.log('We are sorry, you are already subscribed')
                }
            }if(x === 'game'){
                if(purchase === false){
                    setPurchase(true)
                    console.log('Congratulation, your purchase successfull the game')
                }else{
                    console.log('you own this game')
                }
            }
        }
        else{
            console.log('You have to login')
        }
    }

    return (
        <div className="Shop">
            <MainWrap>
                <MainContentWrap extendClass={'game-name'} p>
                    <h1>Nome gioco</h1>
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
                            <img src={content && content.img}/>
                        </div>
                        <div className="gameInfo_carousel">
                            Immagini e video
                        </div>
                        <div className="thumbs">
                            {previewGame && previewGame.map((item, index) =>
                                <img className="thumb" key={index} src={item.img} onClick={() => setContent(item)}/>
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
                            <div onClick={()=>buy('ea')} className="purchase_cta">
                                <div className="purchase_cta-types">
                                    <p>Unisciti a EA Play</p>
                                    <p>EA Play EA PlayPro</p>
                                </div>
                                <div className="purchase_cta-types2">
                                    <p>A partire da</p>
                                    <p>€ 3.99</p>
                                </div>
                            </div>
                            <div onClick={()=> buy('game')} className="purchase_cta">
                                <div className="purchase_cta-types">
                                    <p>Compra nome del gioco</p>
                                </div>
                                <div className="purchase_cta-types2">
                                    <p>A partire da</p>
                                    <p>€ 3.99</p>
                                </div>
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
                    <div className="gameInfo_carousel">
                        Immagini e video
                    </div>
                    <div className="thumbs">
                        {previewGame && previewGame.map((item, index) =>
                            <img className="thumb" src={item.img} key={index} onClick={() => setContent(item)}/>
                        )}
                    </div>
                </MainContentWrap>
            </MainWrap>
            <div className="void"></div>
        </div>
    )
}