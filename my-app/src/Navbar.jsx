import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand fs-1" to="/">Notes</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className="nav-link fs-3 p-2"  to="/view">View</Link>
        </li>
        <li className="nav-item">
         
          <Link className="nav-link active fs-3" aria-current="page" to="/create">Create</Link>
        </li>
       
        <li className="nav-item">
         
         <Link className="nav-link active fs-3" aria-current="page" to="/">Logout</Link>
       </li>
         

        
      </ul>
    </div>
  </div>
</nav>
  )
}
 

export default Navbar
