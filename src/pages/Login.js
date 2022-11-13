import { useState } from 'react'
import { Link } from 'react-router-dom'
import { LoginIcon } from '../components/login-create/LoginIcon'
import '../style/pages/signin/login.scss'

export const Login = () => {

  const baseIconUrl = 'https://eaassets-a.akamaihd.net/resource_signin_ea_com/551.0.220805.388.c847323/p/'

  // to be moved to useLogin custom hook
  const [inputData, setInputData] = useState({
    phoneMail: '',
    password: '',
    remember: false
  })

  const onInputChange = (event) => {
    const {name, value, checked} = event.currentTarget
    setInputData((data)=>{ return {...data, [name]: name === 'remember' ? checked : value}})
  }

  const onLogin = () => {
    console.log(inputData)
  }

  return (
    <div className="login-page">
      <div className="main-container">
        <div className="logo">
          <img src={`${baseIconUrl}statics/juno/img/EALogo-New.svg`}
            alt="Logo Electronic Arts" />
        </div>

        <h1>Accedi al tuo account EA</h1>

        <div className="icons">
          <LoginIcon link='/maintenance' name='google' imgSrc={`${baseIconUrl}images/google.svg`} />
          <LoginIcon link='/maintenance' name='facebook' imgSrc={`${baseIconUrl}images/facebook.svg`} />
          <LoginIcon link='/maintenance' name='apple' imgSrc={`${baseIconUrl}images/apple.svg`} />
          <LoginIcon link='/maintenance' name='steam' imgSrc={`${baseIconUrl}images/steam.svg`} />
          <LoginIcon link='/maintenance' name='x-box' imgSrc={`${baseIconUrl}images/xbox.svg`} />
          <LoginIcon link='/maintenance' name='playstation' imgSrc={`${baseIconUrl}images/psn.svg`} />
        </div>

        <div className="separator">
          <div className="horizontal-line"></div>
          <div className="layer">
            <span>o</span>
          </div>
        </div>

        <form action="Link#" method="post">
          <label htmlFor="phoneMail">TELEFONO O E-MAIL</label>
          <input type="text" name="phoneMail" id="phoneMail" placeholder="Inserisci numero di telefono o e-mail"
          value={inputData.phoneMail} onChange={onInputChange} />

          <label htmlFor="password">PASSWORD</label>
          <input type="password" name="password" id="password" placeholder="Inserisci la password"
          value={inputData.password} onChange={onInputChange} />

          <label className="wrapping-label" htmlFor="remember">
            <input className="nested-input" type="checkbox" name="remember" id="remember"
            checked={inputData.remember} onChange={onInputChange} />
            Ricordami
          </label>

          <button type="button" onClick={onLogin}>ACCEDI</button>
        </form>

        <Link className="anchor-psw-recovery" to="Link#">Hai dimenticato la password?</Link>
        <Link className="anchor-button" to="/create">CREA ACCOUNT</Link>
      </div>
    </div>
  )
}