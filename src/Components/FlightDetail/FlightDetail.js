import React, { useState } from 'react'
import { SiMicrosoftexcel } from 'react-icons/si';
// import { BsFileEarmarkPdfFill } from 'react-icons/bs';
import { FaFilter, FaSort } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { AiOutlineExpandAlt } from 'react-icons/ai';
import './FlightDetail.css';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
function FlightDetail() {
  const [edit, setEdit] = useState(false);
  return (
    <div className=''>
      <div className='tableHeading d-flex flex-row justify-content-between'>

        <span>FSC Equipment Change Listing</span>
        <div className='d-flex flex-row my-1 justify-content-center '>
          <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
            <input type="radio" class="btn-check mx-1" active name="btnradio" id="btnradio1" autocomplete="off" />
            <label class="btn btn-outline-secondary mx-1" for="btnradio1">Yesterday</label>

            <input type="radio" class="btn-check mx-1" name="btnradio" id="btnradio2" autocomplete="off" />
            <label class="btn btn-outline-secondary mx-1" for="btnradio2">Today</label>

            <input type="radio" class="btn-check mx-1" name="btnradio" id="btnradio3" autocomplete="off" />
            <label class="btn btn-outline-secondary mx-1" for="btnradio3">Tomorrow</label>
          </div>
        </div>
        <span className='d-flex'>
          <button type="button" className="btn btn-outline-danger mx-2 p-1 btn-md" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Send Mail</button>
          <button type='button' className='btn btn-danger mx-2 p-1'><SiMicrosoftexcel /></button>
          {/* <button type='button' className='btn btn-danger mx-2 p-1'><BsFileEarmarkPdfFill /></button> */}
          <button type='button' className='btn btn-danger mx-2 p-1'><FaFilter /></button>
        </span>
      </div>        <br />
      <div class="table-responsive flightTableContainer">
        <table class="table table-hover  table-striped">
          <thead class="tableHead">
            <tr>
              <th></th>
              <th>Flight No.<FaSort size='20px' /></th>
              <th>Flight Type<FaSort size='20px' /></th>
              <th>Action Code <FaSort size='20px' /></th>
              <th>Departure Date <FaSort size='20px' /></th>
              <th>STD (UTC) <FaSort size='20px' /></th>
              <th>STA (UTC) <FaSort size='20px' /></th>
              <th>Day No. <FaSort size='20px' /></th>
              <th>Equipment <FaSort size='20px' /></th>
              <th>Departure <FaSort size='20px' /></th>
              <th>Arrival <FaSort size='20px' /></th>
              <th>Mail Sent<br /> By <FaSort size='20px' /></th>
              <th>Mail Sent<br /> Time (IST) <FaSort size='20px' /></th>
              <th>Logs <FaSort size='20px' /></th>
            </tr>
          </thead>
          <tbody className=''>

            <tr>
              <td><input type='checkbox' /></td>
              <td>SG005</td>
              <td>J</td>
              <td>H</td>
              <td>24/04/2023</td>
              <td>23:30</td>
              <td>00:30</td>
              <td>000500</td>
              <td>1897MB</td>
              <td>DXB</td>
              <td>DEL</td>
              <td>Crew A</td>
              <td>23:30</td>
              <td><button type='button' className='btn btn-danger btn-sm' data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Logs</button></td>

            </tr>
            <tr style={{ backgroundColor: 'rgb(213, 13, 13)', color: 'white' }}>
              <td><input type='checkbox' /></td>
              <td>SG008</td>
              <td>J</td>
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
              <td><button type='button' className='btn btn-danger btn-sm' data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Logs</button></td>

            </tr>
            <tr>
              <td><input type='checkbox' /></td>
              <td>SG0013</td>
              <td>J</td>
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
              <td><button type='button' className='btn btn-danger btn-sm' data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Logs</button></td>

            </tr>

            <tr>
              <td><input type='checkbox' /></td>
              <td>SG0013</td>
              <td>J</td>
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
              <td><button type='button' className='btn btn-danger btn-sm' data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Logs</button></td>

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

                <button type="button" class="btn headerBtn" data-bs-dismiss="modal" ><AiOutlineExpandAlt style={{ color: 'white' }} /></button>
                <button type="button" class="btn headerBtn" data-bs-dismiss="modal" ><AiOutlineClose style=
                  {{ color: 'white' }} /></button>
              </span>
            </div>
            {
              edit === false ?
                (<div className='d-flex flex-row justify-content-between m-2 text-secondary subHeaderModal'>
                  <span >acc@dubaiairports.ae,slots@acl-international.com</span>
                  <span>ccBcc</span>
                </div>) :
                (<div className='d-flex flex-column  text-secondary subHeaderModal'>
                  <div class="d-flex flex-row justify-content-between" style={{ border: 'none' }}>
                    <span class="" id=""> {" "}To</span>
                    <input type="text" style={{ outline: 'none', border: 'none', borderBottom: '1px solid grey', width: '90%' }} />
                  </div>
                  <div class="d-flex flex-row justify-content-between" style={{ border: 'none' }}>
                    <span class="" id=""> {" "}CC</span>
                    <input type="text" style={{ outline: 'none', border: 'none', borderBottom: '1px solid grey', width: '90%' }} />
                  </div>
                  <div class="d-flex flex-row justify-content-between" style={{ border: 'none' }}>
                    <span class="" id=""> {" "}BCC</span>
                    <input type="text" style={{ outline: 'none', border: 'none', width: '90%' }} />
                  </div>
                </div>)

            }


            <div className='d-flex flex-row justify-content-between m-2 text-secondary subHeaderModal'>
              EQUIPMENT CHANGE AT DXB DATE 24 MARCH 2023
            </div>
            <div class="modal-body">
              Equipment change detail will go here...
            </div>
            <div class="modal-footer d-flex flex-row ">
              <Editor
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                wrapperStyle={{ width: 800, border: "1px solid black" }}
              />
              <button type="button" class="btn btn-secondary" onClick={() => { setEdit(!edit) }}>Edit</button>
              <button type="button" class="btn btn-danger">Send</button>
            </div>
          </div>
        </div>
      </div>
      <div class="offcanvas offcanvas-start border border-danger text-light" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
        <div class="offcanvas-header bg-danger">
          <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Equipment Change Logs offcanvas</h5>
          <button type="button" class="btn text-reset text-light" data-bs-dismiss="offcanvas" aria-label="Close">X</button>
        </div>
        {/* offcanvas */}
        <div class="offcanvas-body">
          <table class="table table-striped table-hover table-bordered">
            <thead>
              <th>Date</th>
              <th>Time</th>
              <th>Editor</th>
              {/* <th>Response/Request</th> */}
              <th>Change</th>
            </thead>
            <tbody>
              <tr>
                <th scope="row">21:10</th>
                <td>01-01-2023</td>
                <td>Crew 0</td>
                <td>
                  <table class="table table-hover  table-striped table-border">
                    <tr><th>Request</th><td>XSG0051 SG0052 24MAR24MAR 0000500 1897M8 PNQPNQ1820 2000PNQPNQ JJ</td></tr>
                    <tr><th>Response</th><td>KSG0051 SG0052 24MAR24MAR 0000500 18973H PNQPNQ1820 2000PNQPNQ JJ</td></tr>
                  </table>
                </td>


              </tr>
              <tr>
                <th scope="row">21:30</th>
                <td>01-01-2023</td>
                <td>Crew 1</td>
                <td>
                  <table class="table table-hover  table-striped table-border">
                    <tr><th>Request</th><td>XSG0051 SG0052 24MAR24MAR 0000500 18973H PNQPNQ1820 2000PNQPNQ JJ</td></tr>
                    <tr><th>Response</th><td>KSG0051 SG0052 24MAR24MAR 0000500 1897M8 PNQPNQ1820 2000PNQPNQ JJ</td></tr>
                  </table>
                </td>
              </tr>
              <tr>
                <th scope="row">21:50</th>
                <td>01-01-2023</td>
                <td>Crew 2</td>
                <td>
                  <table class="table table-hover  table-striped table-border">
                    <tr><th>Request</th><td>XSG0051 SG0052 24MAR24MAR 0000500 1897M8 PNQPNQ1820 2000PNQPNQ JJ</td></tr>
                    <tr><th>Response</th><td>KSG0051 SG0052 24MAR24MAR 0000500 18973H PNQPNQ1820 2000PNQPNQ JJ</td></tr>
                  </table>
                </td>
              </tr>
              <tr>
                <th scope="row">21:55</th>
                <td>01-01-2023</td>
                <td>Crew 3</td>
                <td>
                  <table class="table table-hover  table-striped table-border">
                    <tr><th>Request</th><td>XSG0051 SG0052 24MAR24MAR 0000500 18973H PNQPNQ1820 2000PNQPNQ JJ</td></tr>
                    <tr><th>Response</th><td>KSG0051 SG0052 24MAR24MAR 0000500 18973K PNQPNQ1820 2000PNQPNQ JJ</td></tr>
                  </table>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}

export default FlightDetail