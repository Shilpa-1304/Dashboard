import React, { useState } from 'react'
import { BiSkipPreviousCircle ,BiSkipNextCircle} from 'react-icons/bi';
import {MdFlightTakeoff,MdOutlineChangeCircle} from 'react-icons/md';
import {CgSandClock} from 'react-icons/cg';
import './SubHeader.css';
function SubHeader() {
    let today=new Date().toLocaleDateString('en-GB');
    const [date,setDate]=useState(today);
    const handleSwitchDate=(action)=>{
        let date=new Date();
        if(action=='Next'){
            let day=date.setDate(date.getDate() + 1);
            console.log(day);
        }
        else{
            let d1=date.setDate(date.getDate() - 1);
            console.log(d1)
        }
    }
    return (
        <div className='d-flex flex-row m-1 justify-content-around  subHeader'>
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
            <div class="card border-secondary mx-2 my-1" style={{ width: ' 18em', height: '5em' }}>
                <div class=" d-flex flex-row align-items-center h-100 text-secondary ">
                    <MdOutlineChangeCircle className='subHeaderIcon d-flex mx-2 align-self-center ' />
                    <span className='  w-100   '>
                        <h2 className='cardTitle1'>1</h2>
                        <div className='cardTitle2'>No. of Equipments Changed</div>
                    </span>

                </div>
            </div>
            <div class="card border-secondary mx-2 my-1" style={{ width: ' 18em', height: '5em' }}>
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