import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LoginIcon } from "../components/login-create/LoginIcon";
import "../style/pages/signin/create.scss";
import { useManageAccount } from "../utils/useManageAccount";
import { avatars } from "../data/avatars";

export const Create = () => {
  const {
    baseIconUrl,
    countries,
    monthsLength,
    userData,
    date,
    error,
    loading,
    onInputChange,
    optList,
    onSubmit,
  } = useManageAccount();

  useEffect(() => {
    document.body.style.overflow = "auto";
  }, []);

  const [selectedAvatar, setSelectedAvatar] = useState(
    avatars.find((a) => a.id === "DE")
  );
  const onAvatarClick = (avatar) => {
    // console.log("Avatar clicked");
    setSelectedAvatar(avatar);
  };

  useEffect(() => {
    onInputChange(null, selectedAvatar);
  }, [selectedAvatar]);

  return (
    <div className="create">
      <div className="main-container">
        <div className="logo">
          <img
            src="https://eaassets-a.akamaihd.net/resource_signin_ea_com/551.0.220805.388.c847323/p/statics/juno/img/EALogo-New.svg"
            alt="Logo Electronic Arts"
          />
        </div>

        <h1>Crea un account EA</h1>

        <p className="description">
          Basterà seguire pochi passaggi per completare il tuo account EA (è
          veloce, promesso).
        </p>

        <div className="icons">
          <LoginIcon
            link="/maintenance"
            name="google"
            imgSrc={`${baseIconUrl}images/google.svg`}
          />
          <LoginIcon
            link="/maintenance"
            name="facebook"
            imgSrc={`${baseIconUrl}images/facebook.svg`}
          />
          <LoginIcon
            link="/maintenance"
            name="apple"
            imgSrc={`${baseIconUrl}images/apple.svg`}
          />
          <LoginIcon
            link="/maintenance"
            name="steam"
            imgSrc={`${baseIconUrl}images/steam.svg`}
          />
          <LoginIcon
            link="/maintenance"
            name="x-box"
            imgSrc={`${baseIconUrl}images/xbox.svg`}
          />
          <LoginIcon
            link="/maintenance"
            name="playstation"
            imgSrc={`${baseIconUrl}images/psn.svg`}
          />
        </div>

        <div className="separator">
          <div className="horizontal-line"></div>
          <div className="layer">
            <span>o</span>
          </div>
        </div>

        <form action="Link#" method="post">
          <label htmlFor="country">PAESE/REGIONE</label>
          <select name="country" id="country">
            {countries.map((item) => (
              <option key={item.id} value={item.name.toLowerCase()}>
                {item.name}
              </option>
            ))}
          </select>

          <label htmlFor="bDay">DATA DI NASCITA</label>
          <div className="dataSet">
            <select
              name="bDay"
              id="bDay"
              value={date.day || ""}
              required
              onChange={onInputChange}
            >
              <option value="" /* selected={!date.day} */ disabled>
                Giorno
              </option>
              {optList(
                "days",
                date.month ? monthsLength[date.month - 1] : 31,
                date.day
              )}
            </select>
            <select
              name="bMonth"
              id="bMonth"
              value={date.month || ""}
              required
              onChange={onInputChange}
            >
              <option value="" /* selected={!date.month} */ disabled>
                Mese
              </option>
              {optList("months", 0, date.month - 1)}
            </select>
            <select
              name="bYear"
              id="bYear"
              value={date.year || ""}
              required
              onChange={onInputChange}
              min="1940"
              max="2011"
            >
              <option value="" /* selected={!date.year} */ disabled>
                Anno
              </option>
              {optList("years", 120, date.year)}
            </select>
          </div>

          <label htmlFor="mail">E-MAIL</label>
          <input
            type="mail"
            name="mail"
            id="mail"
            placeholder="Inserisci e-mail"
            pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
            /* caseInsensitive="on" */ value={userData.mail}
            onChange={onInputChange}
            required
          />

          <label htmlFor="userName">USERNAME</label>
          <input
            type="userName"
            name="userName"
            id="userName"
            placeholder="Inserisci username"
            minLength={5}
            maxLength={25}
            value={userData.userName}
            onChange={onInputChange}
            required
          />

          <label htmlFor="avatar">AVATAR</label>
          <div className="avatar-selection">
            <img
              name="avatar"
              id="avatar"
              value={selectedAvatar}
              key={0}
              src={selectedAvatar.value}
              alt="avatar"
            />
            <p>Seleziona il tuo preferito</p>
            <div className="avatar-list">
              {avatars.map((avatar) => (
                <img
                  className="avatar-item"
                  key={avatar.id}
                  value={avatar}
                  src={avatar.value}
                  alt="avatar"
                  onClick={() => onAvatarClick(avatar)}
                />
              ))}
            </div>
          </div>

          <label htmlFor="password">PASSWORD</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Inserisci password"
            value={userData.password}
            onChange={onInputChange}
            minLength={8}
            maxLength={20}
            required
          />

          <label htmlFor="rePassword">REPEAT PASSWORD</label>
          <input
            type="password"
            name="rePassword"
            id="rePassword"
            placeholder="Ripeti password"
            value={userData.rePassword}
            onChange={onInputChange}
            minLength={8}
            maxLength={20}
            required
          />

          {error && <p className="create-error">{error}</p>}

          <button type="button" onClick={onSubmit} disabled={loading}>
            AVANTI
          </button>
        </form>

        <div className="alternatives">
          <p className="parag">
            {"Hai già un account? "}
            <Link to="/login" className="anchorText">
              Accedi
            </Link>
          </p>
          <p>
            <Link className="anchorText" to="#">
              Vuoi creare un account EA per tuo figlio?
            </Link>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.99996 1.66675C9.63177 1.66675 9.33329 1.96522 9.33329 2.33341C9.33329 2.7016 9.63177 3.00008 9.99996 3.00008H12.0292L8.86099 6.18047C8.60114 6.44131 8.60194 6.86342 8.86279 7.12327C9.12364 7.38313 9.54575 7.38232 9.8056 7.12147L13 3.91485V6.00008C13 6.36827 13.2984 6.66675 13.6666 6.66675C14.0348 6.66675 14.3333 6.36827 14.3333 6.00008V2.33341C14.3333 1.96522 14.0348 1.66675 13.6666 1.66675H9.99996ZM3.99996 4.66675C3.99996 4.29856 4.29844 4.00008 4.66663 4.00008H7.33329C7.70148 4.00008 7.99996 3.7016 7.99996 3.33341C7.99996 2.96522 7.70148 2.66675 7.33329 2.66675H4.66663C3.56206 2.66675 2.66663 3.56218 2.66663 4.66675V11.3334C2.66663 12.438 3.56206 13.3334 4.66663 13.3334H11.3333C12.4379 13.3334 13.3333 12.438 13.3333 11.3334V8.66675C13.3333 8.29856 13.0348 8.00008 12.6666 8.00008C12.2984 8.00008 12 8.29856 12 8.66675V11.3334C12 11.7016 11.7015 12.0001 11.3333 12.0001H4.66663C4.29844 12.0001 3.99996 11.7016 3.99996 11.3334V4.66675Z"
                fill="#5288FD"
              ></path>
            </svg>
          </p>
        </div>
      </div>
    </div>
  );
};
