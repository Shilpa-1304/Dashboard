import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
function Header() {
  return (
    <nav class="navbar navbar-light bg-light ">
  <div class="container-fluid d-flex  flex-row">
    <span class="navbar-brand headContainer"><span className='heading1'>FSC</span><br/><span>Dashboard</span></span>
    <div class=" d-flex dropdown btn-group dropstart" style={{textAlign:'center'}}>
                    <a href="#"  class="d-flex align-items-center justify-content-center p-3 text-decoration-none dropdown-toggle" id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
                    <FontAwesomeIcon icon={faUser} beatFade size="lg" color=' rgb(214, 13, 13)'/>
                    </a>
                    <ul class="dropdown-menu dropdown-menu1 dropdown-menu-dark text-small shadow" aria-labelledby="dropdownMenuButton" >
                      
                      <li><a class="dropdown-item dropdown-item1" href="#">Profile</a></li>
                      <li><hr class="dropdown-divider"/></li>
                      <li><a class="dropdown-item dropdown-item1" href="/">Sign out</a></li>
                    </ul>
                  
                </div>
  </div>
</nav>
  )
}

export default Header