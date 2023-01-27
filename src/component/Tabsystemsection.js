import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Tabsystemsection() {



  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
       <div class="container">
      <Row>
     
        <Col sm={4}>
        <div class="leftSidebar">
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
           
              <Nav.Link eventKey="first">
                 <div class="leftSideBtn">
                     <div class="plusCercle">+</div>
                     <p>How We Rank Trade Institutes and Colleges in the U.S.</p>
                     </div></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second"><div class="leftSideBtn">
                     <div class="plusCercle">+</div>
                     <p>Data Collection & Rankings Methodology</p>
                  </div></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third"><div class="leftSideBtn">
                     <div class="plusCercle">+</div>
                     <p>Ranking Factors WRE Uses for different States</p>
                  </div></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fourth"><div class="leftSideBtn">
                     <div class="plusCercle">+</div>
                     <p>How We Rank Trade Institutes and Colleges in the U.S.</p>
                  </div></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="five"><div class="leftSideBtn">
                     <div class="plusCercle">+</div>
                     <p>Data Collection & Rankings Methodology</p>
                  </div></Nav.Link>
            </Nav.Item>
         
             
          </Nav>
          </div>
        </Col>
     
        <Col sm={8}>
        <div class="tabPanel">
          <Tab.Content>
      
            <Tab.Pane eventKey="first active">
        
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                     industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                     and scrambled it to make a type specimen book. It has survived not only five centuries, but also
                     the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                     1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                     desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    
            </Tab.Pane>
            <Tab.Pane eventKey="second">
       
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                     industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                     and scrambled it to make a type specimen book. It has survived not only five centuries, but also
                     the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                     1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                     desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

            </Tab.Pane>
            <Tab.Pane eventKey="third">
          
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                     industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                     and scrambled it to make a type specimen book. It has survived not only five centuries, but also
                     the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                     1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                     desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  
            </Tab.Pane>
            <Tab.Pane eventKey="fourth">
         
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                     industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                     and scrambled it to make a type specimen book. It has survived not only five centuries, but also
                     the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                     1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                     desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
   
            </Tab.Pane>
            <Tab.Pane eventKey="five">
           
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                     industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                     and scrambled it to make a type specimen book. It has survived not only five centuries, but also
                     the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                     1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                     desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  
            </Tab.Pane>
          </Tab.Content>
          </div>
         
        </Col>
      </Row>
      </div>
    </Tab.Container>
  );
}

export default Tabsystemsection;