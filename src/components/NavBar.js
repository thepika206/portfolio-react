
import { Link } from "react-router-dom";

function NavBar(){
  return (  
    <nav className="fixed-top navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
      <a className="navbar-brand" href="/">Patrick Cheung</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item nav-link">
            <Link to='/' >Home</Link>
          </li>
          <li className="nav-item nav-link" >
            <Link to='/about'>About</Link>
          </li>
          {/* <li className="nav-item nav-link" >
            <Link to='/resume'>Resume</Link>
          </li> */}
          <li className="nav-item nav-link" >
            <Link to='/projects'>Projects</Link>
          </li>
          <li className="nav-item nav-link" >
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </div>
      </div>
    </nav>
    
  )
}

export default NavBar

