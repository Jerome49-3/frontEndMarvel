import Image from "./Image";
import marvelLogo from '../assets/images/marvel-logo.svg'
import { Link } from "react-router-dom";
import Input from "./Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookies from 'js-cookie';

const Header = ({ show, setShow, name, setName, limit, token, setToken, setLimit, skip, setSkip, autocomplete }) => {

  return (
    <header>
      <div className="wrapper">
        <div className="boxLogo">
          <Link to='/'>
            <Image src={marvelLogo} alt='marvel' />
          </Link>
        </div>
        <div className="boxInput">
          <Input type='text' placeholder='search...' inputId='name' setState={setName} value={name} autocomplete={autocomplete} />
          <details>
            <summary>filtres</summary>
            <Input type='number' label='limiter à' inputId='limit' min="1" max="100" value={limit} setState={setLimit} />
            <Input type='number' label='passer' inputId='limit' min="1" max="100" value={skip} setState={setSkip} />
          </details>
        </div>
        <nav>
          <ul>
            {token ? (
              <li><button onClick={() => {
                Cookies.remove("MarvLogin");
                setToken(null);
                navigate('/')
              }} className="logout"><FontAwesomeIcon icon='right-from-bracket' /></button></li>
            ) : (
              <li>
                <button onClick={() => {
                  { show === false ? (setShow(true)) : (setShow(false)) }
                }} className="iconsignup"><FontAwesomeIcon icon='user-plus' /></button>
                <Link to='/login' className="login">
                  <FontAwesomeIcon icon='right-to-bracket' />
                </Link>
              </li>)}
            {token ? (
              <>
                <li>
                  <Link to='/comics'>Comics</Link>
                </li>
                <li>
                  <Link to='/'>Characters</Link>
                </li>
                <li>
                  <Link to='/favorites'>Favoris</Link>
                </li>
              </>
            ) : (null)}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header