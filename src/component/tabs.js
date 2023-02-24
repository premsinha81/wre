import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

import React, { useState, useEffect } from 'react';


function LeftTabsExample() {



//     const url="https://workreadyeducation.com/wre/api/get/tab";
//   const[data,setdata]=useState([]);
  
// const getuser=async()=>{
//     const respond = await fetch(url);
//     const user =await  respond.json();
//       setdata(user);
      
// }

// useEffect(() => {
// getuser();
//   },[])

//   working

const [user, setUser] = useState([]);

  const fetchData = () => {
    return fetch("http://162.144.98.113/~work/wre/api/get/tab")
          .then((response) => response.json())
          .then((data) => setUser(data));
  }

  useEffect(() => {
    fetchData();
  },[])
    

  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="Welding Technology and Training">
       <div class="container">
      <Row className='banneerSection'>
     
        <Col sm={4}>
        <div class="leftSidebar">
          <Nav variant="pills" className="flex-column">
          {user.data && user.data.length > 0 && user.data.map((userObj, index) => (
            <Nav.Item>
              <Nav.Link eventKey={userObj.Title}>
                 <div class="leftSideBtn">
                     {/* <div class="plusCercle">+</div> */}
                     <p>{userObj.Title}</p>
                     </div></Nav.Link>
            </Nav.Item>
            ))}
          </Nav>
          </div>
        </Col>
     
        <Col sm={8}>
        <div class="tabPanel">
          <Tab.Content>
          {user.data && user.data.length > 0 && user.data.map((userObj, index) => (
            <Tab.Pane eventKey={userObj.Title}>
                  <p className='active'>{userObj.Description}</p>
    
            </Tab.Pane>
            ))}
          </Tab.Content>
          </div>
         
        </Col>
      </Row>
      </div>
    </Tab.Container>
  );
}

export default LeftTabsExample;