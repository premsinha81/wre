import { reverse } from "lodash";
import { React, useState, useEffect } from "react";
import {Avatar} from '@mui/material'
// import axios from "axios";

const Leftpanel = (props) => {
  const [data, setdata] = useState([]);
  const [rating, setRating] = useState([]);
  const [trade, setTrade] = useState([]);
  const [program, setProgram] = useState([]);
  const getTrade = async () => {
    const respond = await fetch("https://admin.allnuud.com/api/home_search");
    const dataTrade = await respond.json();
    setTrade(dataTrade);
  };

  const getuser = async () => {
    const respond = await fetch("https://admin.allnuud.com/api/get/location");
    const user = await respond.json();
    setdata(user);
  };
  const getRating = async () => {
    const respond = await fetch("https://admin.allnuud.com/api/rating");
    const dataRating = await respond.json();
    setRating(dataRating);
  };
  const getProgram = async () => {
    const respond = await fetch("https://admin.allnuud.com/api/program_type");
    const dataProgram = await respond.json();
    setProgram(dataProgram);
  };
  // const fruit = ['Welding Technology Post', 'Welding Technology and Training', 'Welding Technology and Training Program', 'Welding',
  //     'hellodf', 'Manufacturing and Automation', 'Manufacturing'];
  const [query, setQuery] = useState("");
  const [query1, setQuery1] = useState("");

  const [filtershow, setFilterShow] = useState(false);

  const style = {width:"22px",height:"22px",bgcolor:"transparent",color:"#3D55A5",fontSize:"15px",fontWeight:"bold"}

  useEffect(() => {
    getTrade();

    getuser();
    getRating();
    getProgram();
  }, []);

  // Trade Filtering

  //   useEffect(() => {

  //     axios.get("https://admin.allnuud.com/api/get/trades?q=" + tradeinfo.response)
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
  const resetFilter = () => {};
  return (
    <>
    <div className="leftsectionset my-lg-5 mt-3 mb-0 rounded">
      <div className="bg-white pb-lg-3">
        <div className="d-flex">
          <button
            type="button"
            className="btn btn-primary rounded  bg-lgrey btnSidebar text-dark fw-bold mt-0 mb-0 mb-md-2 mb-lg-0"
            onClick={() => {
              setFilterShow(!filtershow);
            }}
          >
            Filters 
          </button>
          <span className="dropdown-toggle ms-md-2 d-block d-md-none mx-2" onClick={() => {
              setFilterShow(true);
            }}></span>
          <button
            type="button"
            className="btn btn-primary btnSidebar rounded sortBtn mt-0 mb-0 mb-md-2 mb-lg-0 ms-2"
          >
            Sort By
          </button>
        </div>
      </div>
      
        {filtershow && 
          
          <div className="d-block d-md-none trade_search leftSection postGroups1 p-3  bg-lgrey rounded  mt-3">
            <div className="d-flex justify-content-between align-items-center">
              <div></div>
            <h4 className="fw-bold text-center">Search by Trade</h4>

            <div><Avatar sx={style} onClick={() => {
              setFilterShow(false);
            }}>X</Avatar></div>
            
            
            {/* <p style={{cursor:"pointer",fontWeight:"bold",border:"2px solid black",borderRadius:"50%",width:"20px",height:"25px",display}} className="blue">X</p> */}
            </div>
            <div class="divider mt-0 mb-3"></div>
            <div class="searchRank m-0 ">
              <div class="searchProgram">
                <div className="App">
                  <div >
                    <input 
                    className="form-control"
                      id="filter"
                      placeholder="By Trade"
                      name="filter"
                      type="text"
                      value={query}
                      onChange={(event) => setQuery(event.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="scrollview m-0  ">
              <div class="scrollview1">
                {trade.results &&
                  trade.results.length > 0 &&
                  trade.results
                    .filter((trade) =>
                      trade.title.toLowerCase().includes(query)
                    )
                    .map((trade) => (
                      <div class="checkBox" key={trade.id}>
                        <input
                          type="radio"
                          onClick={props.alert}
                          name="myCheck"
                          value={trade.title}
                          id={"check1" + trade.id}
                        />
                        <label htmlFor={"myCheck" + trade.id}>
                          {trade.title}
                        </label>
                      </div>
                    ))}
              </div>
            </div>

            <div class="searchRank m-0 ">
              <div class="searchProgram">
                <div className="App">
                  <div >
                    <input
                    className="form-control"
                      id="filters"
                      placeholder="By Cities"
                      name="filters"
                      type="text"
                      value={query1}
                      onChange={(event) => setQuery1(event.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="scrollview m-0 ">
              <div class="scrollview2">
                {data.results &&
                  data.results.length > 0 &&
                  data.results
                    .filter((data) => data.name.toLowerCase().includes(query1))
                    .map((data) => (
                      <div class="checkBox" key={data.id}>
                        <input
                          type="radio"
                          onClick={props.alert1}
                          name="myCheck1"
                          value={data.name}
                          id={"check2" + data.id}
                        />
                        <label htmlFor={"myCheck1" + data.id}>
                          {data.name}
                        </label>
                      </div>
                    ))}
              </div>
            </div>

            <div class="stateBox m-0 ">
              <div class="form-group">
                <select
                  name="programs"
                  id=""
                  class="form-control selectOptionSidebar"
                >
                  <option value="">By Rating</option>
                </select>
              </div>
              <div class="scrollview">
                <div class="scrollview2">
                  {rating.data &&
                    rating.data.length > 0 &&
                    rating.data.map((rating, x) => (
                      <div class="checkBox" key={x}>
                        <input
                          type="radio"
                          onClick={props.alert2}
                          name="myCheck"
                          value={rating.rating}
                          id={"check2" + rating.rating}
                        />
                        <label htmlFor={"myCheck1" + rating.rating}>
                          {rating.rating} Star
                        </label>
                      </div>
                    ))}
                </div>
              </div>
            </div>

            <div class="stateBox m-0 ">
              <div class="form-group">
                <select
                  name="programs"
                  id=""
                  class="form-control selectOptionSidebar"
                >
                  <option value="">By Program Type</option>
                </select>
              </div>
              <div class="scrollview">
                <div class="scrollview">
                  {program.data &&
                    program.data.length > 0 &&
                    program.data.map((program, x) => (
                      <div class="checkBox" key={x}>
                        <input
                          type="radio"
                          onClick={props.alert3}
                          name="myCheck"
                          value={program.RemoteProgram}
                          id={"check1" + program.RemoteProgram}
                        />
                        <label htmlFor={"Rating" + program.RemoteProgram}>
                          {program.RemoteProgram} Star
                        </label>
                      </div>
                    ))}
                </div>
              </div>
            </div>

            <div class="sideBarFooter m-0 " onClick={props.alert4}>
              <button
                type="button"
                class="btn btn-primary btnBSidebar RefilterBtn mt-3"
                onClick={resetFilter}
              >
                Reset Filters
              </button>
            </div>
          </div>
        }


        <div className="d-none d-md-block trade_search leftSection postGroups1 bg-lgrey p-3 rounded">
          <h4 className="fw-bold text-center mb-0">Search by Trade</h4>
          <div class="divider mt-0 mb-3"></div>
          <div class="searchRank">
            <div class="searchProgram m-0">
              <div className="App">
                <div >
                  <input
                  className="form-control"
                    id="filter"
                    placeholder="By Trade"
                    name="filter"
                    type="text"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="scrollview m-0 ">
            <div class="scrollview1">
              {trade.results &&
                trade.results.length > 0 &&
                trade.results
                  .filter((trade) => trade.title.toLowerCase().includes(query))
                  .map((trade) => (
                    <div class="checkBox" key={trade.id}>
                      <input
                        type="radio"
                        onClick={props.alert}
                        name="myCheck"
                        value={trade.title}
                        id={"check1" + trade.id}
                      />
                      <label htmlFor={"myCheck" + trade.id}>
                        {trade.title}
                      </label>
                    </div>
                  ))}
            </div>
          </div>

          <div class="searchRank m-0">
            <div class="searchProgram">
              <div className="App">
                <div >
                  <input
                  className="form-control"
                    id="filters"
                    placeholder="By Cities"
                    name="filters"
                    type="text"
                    value={query1}
                    onChange={(event) => setQuery1(event.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="scrollview m-0">
            <div class="scrollview2">
              {data.results &&
                data.results.length > 0 &&
                data.results
                  .filter((data) => data.name.toLowerCase().includes(query1))
                  .map((data) => (
                    <div class="checkBox" key={data.id}>
                      <input
                        type="radio"
                        onClick={props.alert1}
                        name="myCheck1"
                        value={data.name}
                        id={"check2" + data.id}
                      />
                      <label htmlFor={"myCheck1" + data.id}>{data.name}</label>
                    </div>
                  ))}
            </div>
          </div>

          <div class="stateBox m-0">
            <div class="form-group">
              <select
                name="programs"
                id=""
                class="form-control selectOptionSidebar"
              >
                <option value="">By Rating</option>
              </select>
            </div>
            <div class="scrollview">
              <div class="scrollview2">
                {rating.data &&
                  rating.data.length > 0 &&
                  rating.data.map((rating, x) => (
                    <div class="checkBox" key={x}>
                      <input
                        type="radio"
                        onClick={props.alert2}
                        name="myCheck"
                        value={rating.rating}
                        id={"check2" + rating.rating}
                      />
                      <label htmlFor={"myCheck1" + rating.rating}>
                        {rating.rating} Star
                      </label>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          <div class="stateBox m-0">
            <div class="form-group">
              <select
                name="programs"
                id=""
                class="form-control selectOptionSidebar"
              >
                <option value="">By Program Type</option>
              </select>
            </div>
            <div class="scrollview">
              <div class="scrollview">
                {program.data &&
                  program.data.length > 0 &&
                  program.data.map((program, x) => (
                    <div class="checkBox" key={x}>
                      <input
                        type="radio"
                        onClick={props.alert3}
                        name="myCheck"
                        value={program.RemoteProgram}
                        id={"check1" + program.RemoteProgram}
                      />
                      <label htmlFor={"Rating" + program.RemoteProgram}>
                        {program.RemoteProgram} Star
                      </label>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          <div class="sideBarFooter m-0" onClick={props.alert4}>
            <button
              type="button"
              class="btn btn-primary btnBSidebar RefilterBtn mt-3"
              onClick={resetFilter}
            >
              Reset Filters
            </button>
          </div>
        </div>
     
      </div>
    </>
  );
};
export default Leftpanel;
