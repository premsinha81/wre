import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from "axios";
import  TextField  from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

function Slider() {

    const [trade, setTrade] = useState()

    useEffect(() => {

        axios.get("https://workreadyeducation.com/wre/api/get/trades")
        .then(function (result) {
            console.log(result.data)
            setTrade(result.data)
            
        })
        
    }, []);

    function handletradeChange(event) {
        console.log(event.target.value);
        axios.get("https://workreadyeducation.com/wre/api/get/trades/")
        .then(function (result) {
            console.log(result)
            setTrade(event.target.value)
        })
      }

      function handleSearchChange(event) {
          console.log(event.target.value);
          axios.post("https://workreadyeducation.com/wre/api/get/search/",{
            title:trade
          })
          .then(function (result) {
              console.log(result)
          })
        }


    return (
        <div className="slider">
            <div className="gradient"></div>
            <div className="container">
                <div className="container posRelative">
                    <div className="searchPanel">
                        <Autocomplete
                        disablePortal
                        className=""
                        options={trade}
                        getOptionLabel={(option) => option.title}
                        renderInput={(params) => <TextField {...params} labal="SEARCH FOR A TRADE" placeholder="SEARCH FOR A TRADE" />}
                        />
                        {/*<input type="text" onChange={handletradeChange} className="form-control" placeholder="SEARCH FOR A TRADE"/>*/}
                        <button className="btn btn-primary button btnSearch" onClick={handleSearchChange}>SEARCH NOW</button>
                        {/* <h2>SEARCH PROGRAMS</h2>
                        <hr />
                        <form onSubmit={searchsubmit()}>
                            <select onChange={e => handleProgramChange(e)} >
                                <option>Select Program</option>
                                {
                                    program.map((resp, key) => <option key={key} value={resp.id}>{resp.title}</option>)
                                }
                            </select>
                            <select onChange={e => handleDegreeChange(e)}>
                                <option>Select Degree</option>
                                {
                                    degree.map((resp, key) => <option key={key} value={resp.id}>{resp.degree}</option>)
                                }
                            </select>
                            <select onChange={e => handleDurationChange(e)}>
                                <option>Select Duration</option>
                                {
                                    duration.map((resp, key) => <option key={key} value={resp.id}>{resp.duration}</option>)
                                }
                            </select>
                            <button className="btn btn-primary button" type="submit">SEARCH NOW</button>
                        </form> */}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider;