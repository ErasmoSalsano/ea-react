import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MainContentWrap } from "../components/0_wraps/mainContentWrap";
import { MainWrap } from "../components/0_wraps/mainWrap";
import { Footer } from "../components/Footer";
import { Header } from "../components/header/Header";
import { Title } from "../components/Title";
import { game } from "../data/cards-data";
import { useManageAccount } from "../utils/useManageAccount";
import "./../style/pages/profile/profile.scss";

export function Profile() {
    const { loggedUser, currentUser } = useManageAccount();
    const user = loggedUser;
    const userBday = `${user?.date?.day} - ${user?.date?.month} - ${user?.date?.year}`;
    const boughtGames = user && user?.games?.map(i => game.find(items => items.id === i))
    const navigate = useNavigate();

    useEffect(() => {
        !currentUser && navigate("/");
    }, [currentUser, navigate]);

    return (
        user && (
            <>
                <Header />
                <div className="profile">
                    <div className={loggedUser?.subscription ? 'bg-profile gold':"bg-profile"}>
                        <div className={"void"}></div>
                        <MainWrap>
                            <MainContentWrap p extendClass="fc">
                                <Title className="title">
                                    <h1>Welcome {user.userName}</h1>
                                </Title>
                            </MainContentWrap>
                        </MainWrap>
                        <MainWrap>
                            <MainContentWrap p>
                                <div className="user-profile">
                                    <div className="user-image">
                                        <img
                                            src={loggedUser?.avatar?.value}
                                            alt={"user-profile-img"}
                                        />
                                    </div>
                                    <div className="data-container">
                                        <div className={"labels"}>
                                            <label>Name</label>
                                            <p>{user.userName}</p>
                                        </div>
                                        <div className={"labels"}>
                                            <label>Birthday</label>
                                            <p>{userBday}</p>
                                        </div>
                                        <div className={"labels"}>
                                            <label>E-mail</label>
                                            <p>{user.email}</p>
                                        </div>
                                        <div className={"labels"}>
                                            <label>Ea Play</label>
                                            <p>{user.subscription?'You are subscribed':'Not sub yet'}</p>
                                        </div>
                                        <div className={"labels"}>
                                            <label>Balance</label>
                                            <p>{user.credit}€</p>
                                        </div>
                                        {user.bonus &&
                                        <div className={"labels"}>
                                            <label>promozione</label>
                                            <p>{user?.bonus?.active && user?.bonus?.used ? 'used':'In one game 25%'}</p>
                                        </div>}
                                    </div>
                                </div>
                            </MainContentWrap>
                        </MainWrap>
                        <div className={"void"}></div>
                        {user.games && <>
                            <MainWrap>
                                <MainContentWrap p extendClass='fc'>
                                    <Title className="title">
                                        <h1 className="games-list">Your Games</h1>
                                    </Title>
                                </MainContentWrap>
                            </MainWrap>
                            <div className="games-user">
                                {boughtGames.map(x => (
                                    <div key={x.id} >
                                        <div className="game">
                                            <img src={x.card.imageBg} alt={'gioco' + x.title} />
                                            <div className="game_info">
                                                <p>{x.franchise}</p>
                                                <p>{x.categories[0]}</p>
                                            </div>
                                        </div>
                                        <h3 className="games-title">{x.title}</h3>
                                    </div>
                                )
                                )}
                            </div>
                        </>}
                        <div className={"void"}></div>
                    </div>
                </div>
                <Footer />
            </>
        )
    );
}