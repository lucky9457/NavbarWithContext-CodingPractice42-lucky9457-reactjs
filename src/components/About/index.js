// Write your code here
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const toggleBacKColor = isDarkTheme ? '' : 'aboutContWhite'
      const toggleAboutImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
      return (
        <div className={`mainAboutContainer ${toggleBacKColor}`}>
          <Navbar />
          <div className="AboutbottomContainer">
            <img src={toggleAboutImage} alt="about" className="aboutIcon" />
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default Home
