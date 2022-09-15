import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';


function LeftTabsExample() {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">How We Rank Trade Institutes and Colleges in the U.S.</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Data Collection & Rankings Methodology</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">Ranking Factors WRE Uses for different States</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fourth">How We Rank Trade Institutes and Colleges in the U.S.</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fifth">Data Collection & Rankings Methodology</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="six">Ranking Factors WRE Uses for different States</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              tab2
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              tab3
            </Tab.Pane>
            <Tab.Pane eventKey="fourth">
              tab3
            </Tab.Pane>
            <Tab.Pane eventKey="fifth">
              tab3
            </Tab.Pane>
            <Tab.Pane eventKey="six">
              tab3
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default LeftTabsExample;