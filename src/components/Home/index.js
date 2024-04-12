// Write your code here
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const togglehomeicon = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
      const togglecontainerColor = isDarkTheme ? '' : 'containerColoupdate'
      return (
        <div className={`mainHomeContainer ${togglecontainerColor}`}>
          <Navbar />
          <div className="bottomContainer">
            <img src={togglehomeicon} alt="home" className="homeIcon" />
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default Home
