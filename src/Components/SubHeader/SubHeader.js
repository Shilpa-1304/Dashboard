import React, { useState } from 'react'
// import { BiSkipPreviousCircle ,BiSkipNextCircle} from 'react-icons/bi';
import {MdOutlineChangeCircle} from 'react-icons/md';
import {CgSandClock} from 'react-icons/cg'; 
import './SubHeader.css';
function SubHeader() {
    
    return (
        <div className='d-flex flex-row my-1 justify-content-between  subHeader'>
            {/* <div class="card border-secondary mb-3 " style={{ width: ' 18em', height: '5em' }}>
                <div class=" d-flex flex-row align-items-center justify-content-evenly h-100 text-secondary ">
                    <BiSkipPreviousCircle onClick={()=>handleSwitchDate('Prev')} className='dateSwitchIcon d-flex align-self-center ' />
                    <span className='    '>
                        <h2 className='cardTitle1 fs-4 align-items-center d-flex' >{date}</h2>
                        
                    </span>
                    <BiSkipNextCircle  onClick={()=>handleSwitchDate('Next')} className='dateSwitchIcon d-flex align-self-center ' />
                </div>
            </div> */}
            {/* <div class="card border-secondary mb-3 " style={{ width: ' 18em', height: '5em' }}>
                <div class=" d-flex flex-row align-items-center h-100 text-secondary ">
                    <MdFlightTakeoff className='subHeaderIcon d-flex ml-2 align-self-center ' />
                    <span className='  w-100   '>
                        <h2 className='cardTitle1'>8</h2>
                        <div className='cardTitle2'>Total No. of Flights Departed</div>
                    </span>

                </div>
            </div> */}
            <div class="card border border-secondary" style={{ width: ' 18em', height: '5em' }}>
                <div class=" d-flex flex-row align-items-center h-100 text-secondary ">
                    <MdOutlineChangeCircle className='subHeaderIcon d-flex mx-2 align-self-center ' />
                    <span className='  w-100   '>
                        <h2 className='cardTitle1'>1</h2>
                        <div className='cardTitle2'>No. of Equipments Changed</div>
                    </span>

                </div>
            </div>
            <div class="card border border-secondary mx-2" style={{ width: ' 18em', height: '5em' }}>
                <div class=" d-flex flex-row align-items-center h-100 text-secondary ">
                    <CgSandClock className='subHeaderIcon d-flex ml-2 align-self-center ' />
                    <span className='  w-100   '>
                        <h2 className='cardTitle1'>2</h2>
                        <div className='cardTitle2'>Pending Status</div>
                    </span>

                </div>
            </div>
        </div>
    )
}

export default SubHeader