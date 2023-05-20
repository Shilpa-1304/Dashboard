import React from 'react';
import './Sidebar.css';
import {RiDashboardFill} from 'react-icons/ri';
import {BsClockHistory} from 'react-icons/bs'
import {ImAirplane} from 'react-icons/im';
import Dashboard from '../Dashboard/Dashboard';
import History from '../History/History';
function Sidebar() {
  return (         
  <div class="row container1">
    <div class="col-1">
          <div class="d-flex flex-column sidebar justify-content-between" >
                <div className='list-group d-flex flex-column  ' id="list-tab" role="tablist">
                <a href="dashboard" class="d-block p-3 link-dark text-decoration-none" data-bs-placement="right" >
                  <ImAirplane style={{fontSize:'1.5m' ,color:'rgb(180, 3, 3)'}}/>
                </a>
                <a class="list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home">
                  <RiDashboardFill style={{fontSize:'1.5m'}}/>
                  <span style={{fontSize:'0.8em'}}>Dashboard</span>
                </a>
                <a class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile"><span style={{fontSize:'0.8em'}}><BsClockHistory style={{fontSize:'1.5em'}}/><br/>History</span></a>
                
                </div>
                
          </div>
    </div>
  
  <div class="col-11">
    <div class="tab-content" id="nav-tabContent">
      <div class="tab-pane fade show active " id="list-home" role="tabpanel" aria-labelledby="list-home-list"><Dashboard/></div>
      <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list"><History/></div>
      
    </div>
  </div>
</div>
  )
}

export default Sidebar