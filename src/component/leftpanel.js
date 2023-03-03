import { reverse } from 'lodash';
import { React, useState, useEffect } from 'react';
// import axios from "axios";

const Leftpanel = (props) => {
    const [data, setdata] = useState([]);
    const [rating, setRating] = useState([]);
    const [trade, setTrade] = useState([]);
    const [program, setProgram] = useState([]);
    const getTrade = async () => {
        const respond = await fetch("http://162.144.98.113/~work/wre/api/home_search");
        const dataTrade = await respond.json();
        setTrade(dataTrade);

    }
    const getuser = async () => {
        const respond = await fetch("http://162.144.98.113/~work/wre/api/get/location");
        const user = await respond.json();
        setdata(user);

    }
    const getRating = async () => {
        const respond = await fetch("http://162.144.98.113/~work/wre/api/get/rating");
        const dataRating = await respond.json();
        setRating(dataRating);

    }
    const getProgram = async () => {
        const respond = await fetch("http://162.144.98.113/~work/wre/api/program_type");
        const dataProgram = await respond.json();
        setProgram(dataProgram);

    }
    // const fruit = ['Welding Technology Post', 'Welding Technology and Training', 'Welding Technology and Training Program', 'Welding',
    //     'hellodf', 'Manufacturing and Automation', 'Manufacturing'];
    const [query,  setQuery] = useState('');
    const [query1,  setQuery1] = useState('');

    useEffect(() => {
        getTrade();
        getuser();
        getRating();
        getProgram();
    }, [])

    // Trade Filtering

    //   useEffect(() => {

    //     axios.get("http://162.144.98.113/~work/wre/api/get/trades?q=" + tradeinfo.response)
    //             .then(function (result) {
    //                 // console.log(result)
    //                 if (result.data.status.status_code == 200) {
    //                     // setTrade(result.data.results)
    //                     // setSearcResult(result.data.results)
    //                 } else {
    //                     // setTrade(maintrade)
    //                     // setSearcResult('')
    //                 }

    //             })

    // }, [handleChange]);
    const resetFilter = () => {

    }
    return (
        <>

            <div className="leftSection">

                <div class="programsSideBar">
                    <div class="filterArea">
                        <h2>Filter</h2>    
                    </div>
                </div>

                <div class="searchRank">

                    <div class="searchProgram">
                        <div className="App">
                            <div className='form-control'>

                                <input id="filter" placeholder='By Trade' name="filter"
                                    type="text"
                                    value={query}
                                    onChange={event => setQuery(event.target.value)}
                                  
                                />
                            </div>
                           
                        </div>
                    </div>
                </div>
                <div class="scrollview">
                    <div class="scrollview1">
                        {trade.results && trade.results.length > 0 && trade.results.filter(trade => trade.title.toLowerCase().includes(query)).map((trade) => (
                            <div class="checkBox" key={trade.id}>
                                <input type="radio" onClick={props.alert} name="myCheck" value={trade.title} id={"check1" + trade.id} />
                                <label htmlFor={"myCheck" + trade.id}>{trade.title}</label>
                            </div>
                        ))}
                    </div>
                </div>

                <div class="searchRank">

<div class="searchProgram">
    <div className="App">
        <div className='form-control'>

            <input id="filters" placeholder='By Cities' name="filters"
                type="text"
                value={query1}
                onChange={event => setQuery1(event.target.value)}
              
            />
        </div>
       
    </div>
</div>
</div>

                    <div class="scrollview">
                        <div class="scrollview2">
                            {data.results && data.results.length > 0 && data.results.filter(data => data.name.toLowerCase().includes(query)).map((data) => (
                                <div class="checkBox" key={data.id}>
                                    <input type="radio"onClick={props.alert1} name="myCheck1" value={data.name} id={"check2" + data.id} />
                                    <label htmlFor={"myCheck1" + data.id}>{data.name}</label>
                                </div>
                            ))}
                        </div>
                    </div>

          



                <div class="stateBox">
                    <div class="form-group">
                        <select name="programs" id="" class="form-control selectOptionSidebar">
                            <option value="">By Rating</option>
                        </select>
                    </div>
                    <div class="scrollview">
                        <div class="scrollview2">
                        {rating.data && rating.data.length > 0 && rating.data.map((rating, x) => (
                                <div class="checkBox" key={x}>
                                    <input type="radio" onClick={props.alert2} name="myCheck" value={rating.rating} id={"check1" + rating.rating}  />
                                    <label htmlFor={"Rating" + rating.rating}>{rating.rating} Star</label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                
                <div class="stateBox">
                    <div class="form-group">
                        <select name="programs" id="" class="form-control selectOptionSidebar">
                            <option value="">By Program Type</option>

                        </select>

                    </div>
                    <div class="scrollview">
                        <div class="scrollview1">
                        {program.data && program.data.length > 0 && program.data.map((program, x) => (
                                <div class="checkBox" key={x}>
                                    <input type="radio"  onClick={props.alert3} name="myCheck" value={program.RemoteProgram} id={"check1" + program.RemoteProgram} />
                                    <label htmlFor={"Rating" + program.RemoteProgram}>{program.RemoteProgram} Star</label>
                                </div>
                            ))}   
                    </div>
                </div>
                </div>
                <div class="sideBarFooter" onClick={props.alert4}>
                    <button type="button"   class="btn btn-primary btnBSidebar RefilterBtn" onClick={resetFilter}>Reset
                        Filters</button>
                    <button type="button" class="btn btn-primary btnBSidebar saveBtn">Save</button>
                </div>

            </div>
        </>
    )
}
export default Leftpanel