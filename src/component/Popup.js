import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function Popup() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button className='btnConselling' onClick={handleShow}>Online Counselling</Button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Online Counselling</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form>
                    <input type='text' placeholder="Enter Name" required className='form-control'/>
                    <input type='email' placeholder="Enter Email" required className='form-control'/>
                    <input type='text' placeholder="Enter Phone" required className='form-control'/>
                    <select className='form-control' placeholder='Course'>
                            <option>Course1</option>
                            <option>Course2</option>
                    </select>
                </form>
                <Button className='btnSidebar float-end'>Submit</Button>                
            
          </Modal.Body>
          
        </Modal>
      </>
    );
  }
  export default Popup