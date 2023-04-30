import React from 'react'
import { RiFlightLandFill } from 'react-icons/ri';
import {MdFlightTakeoff,MdOutlineChangeCircle} from 'react-icons/md';
import {CgSandClock} from 'react-icons/cg';
import './SubHeader.css';
function SubHeader() {
    return (
        <div className='d-flex flex-row mt-1 justify-content-around subHeader'>
            <div class="card border-secondary mb-3 " style={{ width: ' 18em', height: '5em' }}>
                <div class=" d-flex flex-row align-items-center h-100 text-secondary ">
                    <RiFlightLandFill className='subHeaderIcon d-flex  align-self-center ' />
                    <span className='  w-100   '>
                        <h2 className='cardTitle1'>8</h2>
                        <div className='cardTitle2'>Total No. of Flights Arrived</div>
                    </span>

                </div>
            </div>
            <div class="card border-secondary mb-3 " style={{ width: ' 18em', height: '5em' }}>
                <div class=" d-flex flex-row align-items-center h-100 text-secondary ">
                    <MdFlightTakeoff className='subHeaderIcon d-flex ml-2 align-self-center ' />
                    <span className='  w-100   '>
                        <h2 className='cardTitle1'>8</h2>
                        <div className='cardTitle2'>Total No. of Flights Departed</div>
                    </span>

                </div>
            </div>
            <div class="card border-secondary mb-3 " style={{ width: ' 18em', height: '5em' }}>
                <div class=" d-flex flex-row align-items-center h-100 text-secondary ">
                    <MdOutlineChangeCircle className='subHeaderIcon d-flex ml-2 align-self-center ' />
                    <span className='  w-100   '>
                        <h2 className='cardTitle1'>2</h2>
                        <div className='cardTitle2'>No. of Equipments Changed</div>
                    </span>

                </div>
            </div>
            <div class="card border-secondary mb-3 " style={{ width: ' 18em', height: '5em' }}>
                <div class=" d-flex flex-row align-items-center h-100 text-secondary ">
                    <CgSandClock className='subHeaderIcon d-flex ml-2 align-self-center ' />
                    <span className='  w-100   '>
                        <h2 className='cardTitle1'>1</h2>
                        <div className='cardTitle2'>Pending Status</div>
                    </span>

                </div>
            </div>
        </div>
    )
}

export default SubHeader