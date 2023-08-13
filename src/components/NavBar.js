
import { Link } from "react-router-dom";
import { useEffect } from "react";
const navStyle = {
  backgroundColor:'#46518B'
}




function NavBar(){
  useEffect(() => {
    const navbarNavDiv = document.querySelector('#navbarNav')
  navbarNavDiv.addEventListener('click', ()=>{
    navbarNavDiv.classList.remove('show')
    // console.log(navbarNavDiv)
  }, [])
  
})
  return (  
    <nav style={navStyle} className="fixed-top navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
      <a className="navbar-brand" href="/">Patrick Cheung</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item nav-link">
            <Link to='/' >Home</Link>
          </li>
          <li className="nav-item nav-link" >
            <Link to='/projects'>Projects</Link>
          </li>
          <li className="nav-item nav-link" >
            <Link to='/resume'>Experience</Link>
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

