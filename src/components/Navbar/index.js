// Write your code here

import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const changeTheme = () => {
        toggleTheme()
      }
      const logoImageToggle = !isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
      const ToggleBtnImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const navbarColor = isDarkTheme ? '' : 'navbarContWhite'
      const homeDark = isDarkTheme ? '' : 'homeDark'
      return (
        <ul className={`navbarCont ${navbarColor}`}>
          <li>
            <img src={logoImageToggle} alt="website logo" className="website" />
          </li>
          <li className="homeAboutCont">
            <Link className="Link" to="/">
              <h1 className={`home ${homeDark}`}>Home</h1>
            </Link>
            <Link className="Link" to="/about">
              <h1 className={`home ${homeDark}`}>About</h1>
            </Link>
          </li>
          <button
            data-testid="theme"
            onClick={changeTheme}
            className="buttonnav"
            type="button"
          >
            <img src={ToggleBtnImage} className="lightButton" alt="theme" />
          </button>
        </ul>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
