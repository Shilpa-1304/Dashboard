import React from 'react'
import './Dashboard.css';
import Header from '../Header/Header.js';
import { useState } from 'react';
import SubHeader from '../SubHeader/SubHeader';
import FlightDetail from '../FlightDetail/FlightDetail';
import moment from 'moment/moment';
function Dashboard() {
  const [yesterday,setYesterday]=useState(moment().subtract(1, 'days').format('ll'));
  const [today, setToday] = useState(moment().format('ll'));
  const [tomorrow,setTomorrow]=useState(moment().add(1, 'days').format('ll'));
  return (
    <div className='d-flex align-item-center  '>
      <div className='flex-fill '>
        <Header />
        {/* From and To date picker */}
        <div className='d-flex flex-row justify-content-between '>
          <SubHeader />
          <div className='d-flex align-items-center '>
            {/* <span className='dateContainer mx-2  my-1'>
              <span className='dateLabel'>From Date</span><br />
              <input type='date' className='p-1 m-1 datePicker' />
            </span>

            <span className='dateContainer mx-2 my-1'>
              <span className='dateLabel'>To Date</span><br />
              <input type='date' className='p-1  m-1 datePicker' />
            </span>
            <button type="button" className='btn btn-danger mx-2  searchBtn'>Search</button> */}
            {/* <div className='d-flex flex-row  border border-primary justify-content-center '> */}
            <div class="btn-group btn-group-sm " style={{ height: 'max-content' }} role="group" aria-label="Basic radio toggle button group">
              <input type="radio" class="btn-check  mx-2" name="btnradio" id="btncheck1" autocomplete="off" />
              <label class="btn btn-outline-secondary  mx-2" for="btncheck1">{yesterday}</label>

              <input type="radio" class="btn-check mx-2 " name="btnradio" checked id="btncheck2" autocomplete="off" />
              <label class="btn btn-outline-secondary mx-2" for="btncheck2">{today}</label>

              <input type="radio" class="btn-check mx-2" name="btnradio" id="btncheck3" autocomplete="off" />
              <label class="btn btn-outline-secondary mx-2" for="btncheck3">{tomorrow}</label>
            </div>
          </div>
          {/* </div> */}


        </div>

        <FlightDetail />
      </div>

    </div>
  )
}

export default Dashboard