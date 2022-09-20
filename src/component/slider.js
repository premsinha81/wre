import { useEffect, useState } from "react";
import axios from "axios";
import  TextField  from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import RightPanel from "./rightpanel";

function Slider() {

    const [maintrade, setMainTrade] = useState()
    const [trade, setTrade] = useState()
    const [entervalue, setEnterValue] = useState();
    const [search_result, setSearcResult] = useState();

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
        let search_term;
          console.log(value)
          if(value !== '' && value !== undefined){
            search_term = value.title
          }else{
            search_term = entervalue
          }
          
          axios.post("https://workreadyeducation.com/wre/api/get/search",{
            trade:search_term
          })
          .then(function (result) {
              console.log(result)
              if(result.data.status.status_code === 200){
                setSearcResult(result.data.results.result)
              }
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
                        onInputChange={handletradeChange}
                        onChange={handleSearchChange}
                        renderInput={(params) => <TextField {...params} labal="SEARCH FOR A TRADE" />}
                        />
                       <button className="btn btn-primary button btnSearch" onClick={handleSearchChange}>SEARCH NOW</button>
                    </div>
                </div>
            </div>
            <RightPanel data={search_result} />
        </div>
    )
}

export default Slider;