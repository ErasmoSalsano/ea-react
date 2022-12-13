import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MainContentWrap } from "../components/0_wraps/mainContentWrap";
import { MainWrap } from "../components/0_wraps/mainWrap";
import { Footer } from "../components/Footer";
import { Header } from "../components/header/Header";
import { Title } from "../components/Title";
import { useManageAccount } from "../utils/useManageAccount";
import "./../style/pages/profile/profile.scss";

export function Profile() {
  const { loggedUser, currentUser } = useManageAccount();
  const user = loggedUser;
  const userBday = `${user?.date?.day} - ${user?.date?.month} - ${user?.date?.year}`;
  const navigate = useNavigate();

  useEffect(() => {
    !currentUser && navigate("/");
  }, [currentUser, navigate]);

  return (
    user && (
      <>
        <Header />
        <div className="profile">
          <div className={"bg-profile"}>
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
                  {/* <div className={"img"}>
                  <img
                    src={user.image ? user.image : "./assets/images/avatar.png"}
                    alt="user-profile-img"
                  />
                </div> */}
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
                  </div>
                </div>
              </MainContentWrap>
            </MainWrap>
            <div className={"void"}></div>
            {/* {userGames && <>
                    <MainWrap>
                        <MainContentWrap p extendClass='fc'>
                            <Title className="title">
                                <h1 className="games-list">Your Games</h1>
                            </Title>
                        </MainContentWrap>
                    </MainWrap>
                    <div className={"void"}></div>
                    <div className="games-user">
                        {userGames.map((i, index) => {
                            return (
                                <div key={index + 1} className="game">
                                    <img src={i.imageBg} alt={'gioco' + i.name} />
                                </div>
                            )
                        })}
                    </div>
                </>} */}
            <div className={"void"}></div>
          </div>
        </div>
        <Footer />
      </>
    )
  );
}
