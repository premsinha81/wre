import { useEffect, useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Leftpanel from "./leftpanel";
import LeftTabsExample from "./tabs"
import Resources from "./resources";
import { slice } from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch} from '@fortawesome/fontawesome-free-solid';

function Slider() {
    const [maintrade, setMainTrade] = useState()
    const [trade, setTrade] = useState()
    const [entervalue, setEnterValue] = useState('');
    const [search_result, setSearcResult] = useState([]);

    const [isCompleted, setIsCompleted] = useState(false)
    const [index, setIndex] = useState(5)
    const initialOnline = slice(search_result, 0, index)

    const loadMore = () => {
        setIndex(index + 5)
        console.log(index)
        if (index >= search_result.length) {
            setIsCompleted(true)
        } else {
            setIsCompleted(false)
        }
    }

    useEffect(() => {

        axios.get("http://162.144.98.113/~work/wre/api/get/trades")
            .then(function (result) {
                // console.log(result)
                if (result.data.status.status_code == 200) {
                    setTrade(result.data.results)
                    setMainTrade(result.data.results)
                    setSearcResult(result.data.results)
                }
            })

    }, []);

    function handletradeChange(event) {
        setEnterValue(event.target.value)
        if (entervalue !== '' && entervalue !== undefined) {
            axios.get("http://162.144.98.113/~work/wre/api/get/trades?q=" + entervalue)
                .then(function (result) {
                    // console.log(result)
                    if (result.data.status.status_code == 200) {
                        setTrade(result.data.results)
                        setSearcResult(result.data.results)
                    } else {
                        setTrade(maintrade)
                        setSearcResult('')
                    }

                })
        }
    }
    const handleSearchChange = (event, value) => {
        console.log(event.type)
        console.log(event)
        console.log(value)
        let search_term;
        if (value !== '' && value !== undefined) {
            search_term = value.title
            setEnterValue('');
        } else {
            search_term = entervalue
        }

        axios.post("http://162.144.98.113/~work/wre/api/get/search", {
            trade: search_term
        })
            .then(function (result) {
                if (result.data.status.status_code == 200) {
                    setSearcResult(result.data.results)
                }
                if (result.data.status.status_code == 400) {
                    setSearcResult('')
                }

            })
    }
 
    // Trade Filter Code Start
    function handleChange(e) {
        // Destructuring
        const { value, checked } = e.target;
        
        if (checked) {
            axios.get("http://162.144.98.113/~work/wre/api/get/trades?q=" + value)
                .then(function (result) {
                    if (result.data.status.status_code == 200) {
                        setSearcResult(result.data.results)
                    } else {
                        setSearcResult('')
                    }
                })
        }
    };
    // Trade Filter Code End

    useEffect(() => {
        
    }, [initialOnline])




    return (
        <>

            <div className="slider">
                <div className="gradient"></div>
                <div className="container">
                    <div className="container posRelative">
                        <div className="searchPanel">
                            <h1>WRE's Trade Education Rankings</h1>
                            <Autocomplete
                                id="combo-box-demo"
                                className=""
                                options={trade}
                                getOptionLabel={(option) => option && option.title}
                                onInputChange={handletradeChange}
                                onChange={handleSearchChange}
                                renderInput={(params) => <TextField {...params} labal="SEARCH FOR A TRADE" />}
                            />
                            <button className="btn btn-primary button btnSearch" onClick={handleSearchChange}>
                                <i class="fa fa-search" ></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-xl-3 col-lg-3 col-md-3 col-xs-12">
                        <Leftpanel alert={handleChange}></Leftpanel>
                    </div>
                    <div className="col-12 col-xl-9 col-lg-9 col-md-9 col-xs-12">

                        {initialOnline ?
                            initialOnline.length > 0 && (
                                <div className="rightSection">
                                    <div className="row">
                                        <div className="col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">

                                            {initialOnline.map((res, key) => (
                                                <div className="searchBox">
                                                    <ul>
                                                        <li>

                                                            <img src={res.image_path} alt='' className="img-fluid" />
                                                        </li>
                                                        <li className="schoolDetails">
                                                            <a href={"search/" + res.slug}><h5>{res.college_name} - {res.title}</h5></a>
                                                            <p>Rating : <span className="fa fa-star checked"></span>
                                                                <span className="fa fa-star checked"></span>
                                                                <span className="fa fa-star checked"></span>
                                                                <span className="fa fa-star"></span>
                                                                <span className="fa fa-star"></span></p>
                                                                <p>Course Duration : {res.duration}</p>
                                                        </li>
                                                        <li className="location">
                                                            <p>Location: <b>Kompalli</b></p>
                                                            <p>Name of Training School : <a href={"collegeDetails/" + res.college_id}>{res.college_name}</a></p>
                                                        </li>
                                                    </ul>

                                                </div>
                                            ))}

                                        </div>

                                        <div className="clearfix"></div>
                                        {isCompleted ? (
                                            <div class="loadBtn">

                                                <button onClick={loadMore} type="button" className="btn btn-primary button btnLoadMore">That's It</button>
                                            </div>
                                        ) : (

                                            <button onClick={loadMore} type="button" className="btn btn-primary button btnLoadMore">LOAD MORE</button>
                                        )}

                                    </div>

                                </div>
                            ) : <div className="rightSection">No Record match.</div>}

                    </div>
                    <LeftTabsExample></LeftTabsExample>
                    <Resources></Resources>
                </div>

            </div>
        </>
    )
}
export default Slider;