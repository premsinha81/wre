import React from "react";
import Table from 'react-bootstrap/Table';
class EmailAPIGET extends React.Component {
    // Constructor
    constructor(props) {
        super(props);
 
        this.state = {
            items: [],
            DataisLoaded: false,
        };
    }
 
    // ComponentDidMount is used to
    // execute the code
    componentDidMount() {
        fetch("https://admin.allnuud.com/api/get/subscribe-mail")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json.data,
                    DataisLoaded: true,
                });
            });
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded)
            return (
                <div>
                    <h1> Pleses wait some time.... </h1>
                </div>
            );
 
        return (
            <div className="App">
                <br></br>  <br></br>
             <center>  <h3>All Subscribe Email</h3></center> 
                <div className="container">
                       <div className="item">
                              <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>Email</th>
         
        </tr>
      </thead>
      <tbody>
      {items.map((item) => (
                    
        <tr key={item.id}>
          <td>{item.id}</td>
          <td width="50%">{item.mail},</td>
          
        </tr>
   ))}
      </tbody>
    </Table>

                            
                        </div>
                 
                </div>
            </div>
        );
    }
}
 
export default EmailAPIGET;