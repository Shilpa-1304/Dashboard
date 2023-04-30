import React from 'react'
import { SiMicrosoftexcel } from 'react-icons/si';
import { BsFileEarmarkPdfFill } from 'react-icons/bs';
import { FaFilter, FaSort } from 'react-icons/fa';
import {AiOutlineClose} from 'react-icons/ai';
import {AiOutlineExpandAlt} from  'react-icons/ai';
import './FlightDetail.css';
function FlightDetail() {
  return (
    <div className=''>
      <div className='tableHeading d-flex flex-row justify-content-between'>

        <span>FSC Equipment Change Listing</span>
        <span className='d-flex'>
          <button type="button" className="btn btn-outline-danger mx-2 p-1 btn-md" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Send Mail</button>
          <button type='button' className='btn btn-danger mx-2 p-1'><SiMicrosoftexcel /></button>
          <button type='button' className='btn btn-danger mx-2 p-1'><BsFileEarmarkPdfFill /></button>
          <button type='button' className='btn btn-danger mx-2 p-1'><FaFilter /></button>
        </span>
      </div>        <br />
      <div class="table-responsive flightTableContainer">
        <table class="table table-hover  table-striped">
          <thead class="tableHead">
            <tr>
              <th>Flight No.<FaSort size='20px' /></th>
              <th>CLR Code <FaSort size='20px' /></th>
              <th>Dep Date <FaSort size='20px' /></th>
              <th>STD (UTC) <FaSort size='20px' /></th>
              <th>STA (UTC) <FaSort size='20px' /></th>
              <th>Day No. <FaSort size='20px' /></th>
              <th>Equipment <FaSort size='20px' /></th>
              <th>Departure <FaSort size='20px' /></th>
              <th>Arrival <FaSort size='20px' /></th>
              <th>Mail Sent<br /> By <FaSort size='20px' /></th>
              <th>Mail Sent<br /> Time (IST) <FaSort size='20px' /></th>
              <th>Status <FaSort size='20px' /></th>
            </tr>
          </thead>
          <tbody className=''>
            <tr>
              <td><input className='border border-secondary dataInput' type='text' /></td>
              <td><input className='border border-secondary dataInput' type='text' /></td>
              <td><input className='border border-secondary dataInput' type='text' /></td>
              <td><input className='border border-secondary dataInput' type='text' /></td>
              <td><input className='border border-secondary dataInput' type='text' /></td>
              <td><input className='border border-secondary dataInput' type='text' /></td>
              <td><input className='border border-secondary dataInput' type='text' /></td>
              <td><input className='border border-secondary dataInput' type='text' /></td>
              <td><input className='border border-secondary dataInput' type='text' /></td>
              <td><input className='border border-secondary dataInput' type='text' /></td>
              <td><input className='border border-secondary dataInput' type='text' /></td>
              <td><input className='border border-secondary dataInput' type='text' /></td>

            </tr>
            <tr>
              <td>SG005</td>
              <td>H</td>
              <td>24/04/2023</td>
              <td>23:30</td>
              <td>00:30</td>
              <td>000500</td>
              <td>1897MB</td>
              <td>DXB</td>
              <td>DEL</td>
              <td>Ram Tiwari</td>
              <td>23:30</td>
              <td>Approve</td>

            </tr>
            <tr style={{ backgroundColor: 'rgb(213, 13, 13)', color: 'white' }}>
              <td>SG008</td>
              <td>H</td>
              <td>24/04/2023</td>
              <td>23:50</td>
              <td>00:50</td>
              <td>000500</td>
              <td>1897MB</td>
              <td>BOM</td>
              <td>DXB</td>
              <td></td>
              <td></td>
              <td>Pending</td>

            </tr>
            <tr>
              <td>SG0013</td>
              <td>H</td>
              <td>24/04/2023</td>
              <td>17:50</td>
              <td>20:50</td>
              <td>000500</td>
              <td>1897MB</td>
              <td>IXM</td>
              <td>DXB</td>
              <td></td>
              <td></td>
              <td>Approve</td>

            </tr>
            <tr>
              <td>SG00136</td>
              <td>H</td>
              <td>24/04/2023</td>
              <td>15:50</td>
              <td>08:50</td>
              <td>000500</td>
              <td>1897MB</td>
              <td>BOM</td>
              <td>DEL</td>
              <td></td>
              <td></td>
              <td>Cancel</td>

            </tr>
          </tbody>
        </table>
      </div>
      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-scrollable border border-danger emailHeader">
          <div class="modal-content">
            <div class="modal-header d-flex flex-row justify-content-between">
              <h5 class="modal-title" id="staticBackdropLabel">Equipment change Email</h5>
              <span>
              
              <button type="button" class="btn headerBtn" data-bs-dismiss="modal" ><AiOutlineExpandAlt style={{color:'white'}} /></button>
              <button type="button" class="btn headerBtn" data-bs-dismiss="modal" ><AiOutlineClose style=
              {{color:'white'}} /></button>
              </span>
            </div>
            <div className='d-flex flex-row justify-content-between m-2 text-secondary subHeaderModal'>
                <span >acc@dubaiairports.ae,slots@acl-international.com</span>
                <span>ccBcc</span>
            </div>
            <div className='d-flex flex-row justify-content-between m-2 text-secondary subHeaderModal'>
                EQUIPMENT CHANGE AT DXB DATE 24 MARCH 2023
            </div>
            <div class="modal-body">
              ...
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Understood</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlightDetail