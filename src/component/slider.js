import { useEffect, useState } from "react";
import axios from "axios";
import  TextField  from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

function Slider() {

    const [maintrade, setMainTrade] = useState()
    const [trade, setTrade] = useState()
    const [entervalue, setEnterValue] = useState();

    useEffect(() => {

        axios.get("https://workreadyeducation.com/wre/api/get/trades")
        .then(function (result) {
            setTrade(result.data)
            setMainTrade(result.data)
        })
        
    }, []);

    function handletradeChange(event) {
        setEnterValue(event.target.value)
        if(entervalue !== '' && entervalue !== undefined){
            axios.get("https://workreadyeducation.com/wre/api/get/trades?q="+entervalue)
            .then(function (result) {
                // console.log(result.data)
                if(result.data.status.status_code === 200){
                    setTrade(result.data.results)
                    
                }else{
                    setTrade(maintrade)
                }
            })
        }
        
      }

      function handleSearchChange(event, value) {
          console.log(value)
          if(value !== '' && value !== undefined){
            console.log('111')
            setEnterValue(value.title)
          }else{
            console.log('222')
          }
          
          console.log(entervalue)
          axios.post("https://workreadyeducation.com/wre/api/get/search",{
            trade:entervalue
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
                        sx={{width:300}}
                        onInputChange={handletradeChange}
                        onChange={handleSearchChange}
                        renderInput={(params) => <TextField {...params} labal="SEARCH FOR A TRADE" />}
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