import { useEffect, useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Leftpanel from "./leftpanel";
import LeftTabsExample from "./tabs"
import Resources from "./resources";

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
        if (entervalue !== '' && entervalue !== undefined) {
            axios.get("https://workreadyeducation.com/wre/api/get/trades?q=" + entervalue)
                .then(function (result) {
                    if (result.data.status.status_code === 200) {
                        setTrade(result.data.results)

                    } else {
                        setTrade(maintrade)
                    }
                })
        }

    }

    const handleSearchChange = (event, value) => {
        console.log(event.type,event,value)
        let search_term;
        if (value !== '' && value !== undefined) {
            search_term = value.title
            setEnterValue('');
        } else {
            search_term = entervalue
        }

        axios.post("https://workreadyeducation.com/wre/api/get/search", {
            trade: search_term
        })
        .then(function (result) {
            if (result.data.status.status_code == 200) {
                setSearcResult((result.data.results))
            }
            if (result.data.status.status_code == 400) {
                setSearcResult((result.data.results))
            }

        })
    }

    useEffect(() => {
        console.log(search_result)
    }, [search_result])


    return (
        <>
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
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-xl-3 col-lg-3 col-md-3 col-xs-12">
                        <Leftpanel></Leftpanel>
                    </div>
                    <div className="col-12 col-xl-9 col-lg-9 col-md-9 col-xs-12">

                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                        {search_result ? 
                        search_result.length > 0 && ( 
                        <div className="rightSection">
                            <div className="row">
                                <div className="col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    
                                    {search_result.map((res,key) => (
                                        <div className="searchBox">
                                        <ul>
                                            <li>
                                                <h2>{key+1}</h2>
                                                <p>NIRF - 01</p>
                                            </li>
                                            <li>
                                                <img src={res.image_path} alt='' className="img-fluid" />
                                            </li>
                                            <li>
                                                <h6>{res.college_name} - {res.title}</h6>
                                                <p>Course Duration - {res.duration}</p>
                                                <p>Rating : <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span></p>
                                                <p>Fee : <strong>${res.fees}</strong></p>
                                            </li>
                                        </ul>

                                    </div>
                                    ))}

                                </div>

                                <div className="clearfix"></div>
                                <button className="btn btn-primary button btnLoadMore">LOAD MORE</button>
                            </div>

                        </div>
                         ):'' }

                    </div>
                    <LeftTabsExample></LeftTabsExample>
                    <Resources></Resources>
                </div>

            </div>
        </>
    )
}

export default Slider;