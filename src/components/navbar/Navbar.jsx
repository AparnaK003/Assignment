import "./navbar.css"
import logo from "./LOGO.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"



const Navbar = () => {
  return (
    <div className="navbar">
          <div className="navContainer">
            <div className="navleft">
              {/* logo, 2 button */}
                <img src={logo} alt="logo1" />
                <button className="btn1" >
                  <span>Courses</span>
                  <FontAwesomeIcon id="navI" icon={faChevronDown}/>
                </button>
                <button className="btn1">
                <span>Programs</span>
                  
                  <FontAwesomeIcon id="navI" icon={faChevronDown}/>
                </button>
                
            </div>
            
            <div className="navright">

              <button className="btn1"><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
              <button className="btn1" >Log in</button>
              <button className="join" >JOIN NOW</button>
            
            </div>
            
          </div>
    </div>
  )
}

export default Navbar