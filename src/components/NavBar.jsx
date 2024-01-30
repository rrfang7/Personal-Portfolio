import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"


function NavBar() {

    // const [expandNavBar, setExpandNavbar] = useState(false);

  return (
    <div className='navbar'>
      <div className='toggleButton'>
        <button>  </button>
      </div>
      <div className='links'>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
      </div>    
    </div>
  )
}

export default NavBar