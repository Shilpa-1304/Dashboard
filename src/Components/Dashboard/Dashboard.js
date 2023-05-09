import React from 'react'
import './Dashboard.css';
import Header from '../Header/Header.js';
import { useState } from 'react';
import SubHeader from '../SubHeader/SubHeader';
import FlightDetail from '../FlightDetail/FlightDetail';
function Dashboard() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className='d-flex '>
      <div className='flex-fill'>
        <Header />
{/* From and To date picker */}
        <div className='d-flex flex-row justify-content-around'>
<div className='d-flex flex-row'>
<span className='dateContainer mx-2  my-1'>
            <span className='dateLabel'>From Date</span><br />
            <input type='date' className='p-1 m-1 datePicker' />
          </span>

          <span className='dateContainer mx-2 my-1'>
            <span className='dateLabel'>To Date</span><br />
            <input type='date' className='p-1  m-1 datePicker' />
          </span>
          <button type="button" className='btn btn-danger mx-2 searchBtn'>Search</button>
</div>
<SubHeader/>
          
        </div>
        
        <FlightDetail/>
      </div>
      
    </div>
  )
}

export default Dashboard