import { useEffect } from "react";
import { Link } from "react-router-dom";
import { LoginIcon } from "../components/login-create/LoginIcon";
import "../style/pages/signin/login.scss";
import { useManageAccount } from "../utils/useManageAccount";

export const Login = () => {
  const baseIconUrl =
    "https://eaassets-a.akamaihd.net/resource_signin_ea_com/551.0.220805.388.c847323/p/";

  const { loginData, onLoginInputChange, onLogin, error, isValidForm } =
    useManageAccount();

  useEffect(() => {
    document.body.style.overflow = "auto";
  }, []);

  return (
    <div className="login-page">
      <div className="main-container">
        <div className="logo">
          <img
            src={`${baseIconUrl}statics/juno/img/EALogo-New.svg`}
            alt="Logo Electronic Arts"
          />
        </div>

        <h1>Accedi al tuo account EA</h1>

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
          <label htmlFor="mail">E-MAIL</label>
          <input
            type="mail"
            name="mail"
            id="mail"
            placeholder="Inserisci e-mail"
            pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
            value={loginData.mail}
            onChange={onLoginInputChange}
            required
          />

          <label htmlFor="password">PASSWORD</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Inserisci la password"
            minLength={1}
            maxLength={20}
            value={loginData.password}
            onChange={onLoginInputChange}
            required
          />

          <label className="wrapping-label" htmlFor="remember">
            <input
              className="nested-input"
              type="checkbox"
              name="remember"
              id="remember"
              checked={loginData.remember}
              onChange={onLoginInputChange}
            />
            Ricordami
          </label>

          {error && <p className="login-error">{error}</p>}

          <button
            type="button"
            onClick={() => {
              // console.log(loginData.mail, loginData.password);
              onLogin(loginData);
            }}
            disabled={!isValidForm}
          >
            ACCEDI
          </button>
        </form>

        <Link className="anchor-psw-recovery" to="Link#">
          Hai dimenticato la password?
        </Link>
        <Link className="anchor-button" to="/create">
          CREA ACCOUNT
        </Link>
      </div>
    </div>
  );
};
