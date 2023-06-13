import { reverse } from "lodash";
import { React, useState, useEffect } from "react";
import { Avatar } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
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

  const [filtershow, setFilterShow] = useState(true);
  const [shortby, setShortby] = useState(false);
  const [mobfilter , setMobfilter] = useState(false)

  const style = {
    width: "22px",
    height: "22px",
    bgcolor: "transparent",
    color: "#3D55A5",
    fontSize: "15px",
    fontWeight: "bold",
  };

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

  let Bgcolor;
  let color;
  let transform;

  if (filtershow === true) {
    Bgcolor = " bg-blue ";
    color = " text-white ";
    transform = " r-45 ";
  } else {
    Bgcolor = " bg-lgrey ";
    color = " text-dark ";
    transform = " r-90 ";
  }

  let Bgcolor3;
  let color3;
  let transform3;

  if (mobfilter==true) {
    Bgcolor3 = " bg-blue ";
    color3 = " text-white ";
    transform3 = " r-45 ";
  } else {
    Bgcolor3 = " bg-lgrey ";
    color3 = " text-dark ";
    transform3 = " r-90 ";
  }



  let Bgcolor2;
  let color2;
  let transform2;
  if (shortby === true) {
    Bgcolor2 = " bg-blue ";
    color2 = " text-white ";
    transform2 = " r-45 ";
  } else {
    Bgcolor2 = " bg-lgrey ";
    color2 = " text-dark ";
    transform2 = " r-90 ";
  }

  return (
    <>
      <div className="leftsectionset bg-lgrey my-lg-5 mt-3 mb-0 rounded pp">
        <div className="bg-white pb-lg-3">
          <div className="d-flex">
            <button
              type="button"
              className={
                "btn d-none d-md-block  btn-primary rounded  btnSidebar fw-bold mt-0 mb-0 mb-md-2 mb-lg-0" +
                Bgcolor + color }
              onClick={() => {
                setFilterShow(true);
                setShortby(false);
              }}
            >
              Filters <ArrowDropUpIcon className={transform} />
             
            </button>

            <button
              type="button"
              className={
                "btn  d-md-none btn-primary rounded  btnSidebar fw-bold mt-0 mb-0 mb-md-2 mb-lg-0" +
                Bgcolor3 +
                color3
              }
              onClick={() => {
                setMobfilter(!mobfilter);
                setShortby(false);
                setFilterShow(false);
              }}
            >
              Filters <ArrowDropUpIcon className={transform3} />
             
            </button>
           

            <button
              type="button"
              className={
                "btn  btn-primary rounded  btnSidebar fw-bold mt-0 mb-0 mb-md-2 mb-lg-0" +
                Bgcolor2 +
                color2
              }
              onClick={() => {
                setShortby(true);
                setFilterShow(false);
                setMobfilter(false);
              }}
            >
              Sort By <ArrowDropUpIcon className={transform2}/>
            </button>
            
          </div>
        </div>

        {mobfilter &&  (
          <div className="d-block d-md-none trade_search leftSection postGroups1 p-3  bg-lgrey rounded  mt-3">
            <div className="d-flex justify-content-center align-items-center">
              
              <h4 className="fw-bold text-center">Search by Trade</h4>

              {/* <div>
                <Avatar
                  sx={style}
                  onClick={() => {
                    setMobfilter(false);
                  }}
                >
                  X
                </Avatar>
              </div> */}

              {/* <p style={{cursor:"pointer",fontWeight:"bold",border:"2px solid black",borderRadius:"50%",width:"20px",height:"25px",display}} className="blue">X</p> */}
            </div>
            <div class="divider mt-0 mb-3"></div>
            <div class="searchRank m-0 ">
              <div class="searchProgram">
                <div className="App">
                  <div>
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
                  <div>
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
        )}

        {shortby && (
         <div className="d-block d-md-none trade_search leftSection postGroups1 p-3  bg-lgrey rounded  mt-3">
           <div className="filterBody">
            <div className="searchRank">
            <h4 className="text-center mb-0">Search Ranking</h4>
            <div class="divider mt-0 mb-3"></div>
              <div className="searchProgram">
                <div className="form-group">
                  <select
                    name="programs"
                    id=""
                    className="form-control selectOptionSidebar"
                  >
                    <option value="">Program</option>
                    <option value="">Program 1</option>
                    <option value="">Program 2</option>
                    <option value="">Program 3</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="checkBox">
              <input type="checkbox" defaultChecked="" id="myCheck" />
              <label htmlFor="myCheck">Only remove programs</label>
            </div>
            <div className="radioBox">
              <p>Sort By</p>
              <div className="radioBoxDiv">
                <div className="radioBoxRow">
                  <input
                    type="radio"
                    className="radioBtn"
                    defaultChecked=""
                    id="radioBtn1"
                  />{" "}
                  <label htmlFor="myCheck">Recommended</label>
                </div>
                <div className="radioBoxRow">
                  <input type="radio" className="radioBtn" id="radioBtn2" />{" "}
                  <label htmlFor="myCheck">Top Rated</label>
                </div>
                <div className="radioBoxRow">
                  <input type="radio" className="radioBtn" id="radioBtn3" />{" "}
                  <label htmlFor="myCheck">Budget</label>
                </div>
              </div>
            </div>
            <div className="priceRange">
              <p>Filter</p>
              <span className="priceBudget">Budget</span>
              <div className="price-range-slider">
                <div
                  id="slider-range"
                  className="range-bar ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                >
                  <div
                    className="ui-slider-range ui-corner-all ui-widget-header"
                    style={{ left: "0%", width: "56.2059%" }}
                  />
                  <span
                    tabIndex={0}
                    className="ui-slider-handle ui-corner-all ui-state-default"
                    style={{ left: "0%" }}
                  />
                  <span
                    tabIndex={0}
                    className="ui-slider-handle ui-corner-all ui-state-default"
                    style={{ left: "56.2059%" }}
                  />
                </div>
                <span className="range-value">
                  <input type="text" id="amount1" readOnly="" />
                  To
                  <input type="text" id="amount2" readOnly="" />
                </span>
              </div>
            </div>
            <div className="stateBox">
              <div className="form-group">
                <select
                  name="programs"
                  id=""
                  className="form-control selectOptionSidebar"
                >
                  <option value="">State</option>
                  <option value="">Program 1</option>
                  <option value="">Program 2</option>
                  <option value="">Program 3</option>
                </select>
              </div>
            </div>
            <div className="sideBarFooter">
              <button
                type="button"
                className="btn btn-primary btnBSidebar RefilterBtn "
              >
                Reset Filters
              </button>
              <button
                type="button"
                className="btn btn-primary btnBSidebar saveBtn"
              >
                Save
              </button>
            </div>
          </div>
          </div>
        )}

        
{shortby && (
         <div className="d-none d-md-block trade_search leftSection postGroups1 bg-lgrey p-3 ">
           <div className="filterBody">
            <div className="searchRank">
            <h4 className="text-center mb-0">Search Ranking</h4>
            <div class="divider mt-0 mb-3"></div>
              <div className="searchProgram">
                <div className="form-group">
                  <select
                    name="programs"
                    id=""
                    className="form-control selectOptionSidebar"
                  >
                    <option value="">Program</option>
                    <option value="">Program 1</option>
                    <option value="">Program 2</option>
                    <option value="">Program 3</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="checkBox">
              <input type="checkbox" defaultChecked="" id="myCheck" />
              <label htmlFor="myCheck">Only remove programs</label>
            </div>
            <div className="radioBox">
              <p>Sort By</p>
              <div className="radioBoxDiv">
                <div className="radioBoxRow">
                  <input
                    type="radio"
                    className="radioBtn"
                    defaultChecked=""
                    id="radioBtn1"
                  />{" "}
                  <label htmlFor="myCheck">Recommended</label>
                </div>
                <div className="radioBoxRow">
                  <input type="radio" className="radioBtn" id="radioBtn2" />{" "}
                  <label htmlFor="myCheck">Top Rated</label>
                </div>
                <div className="radioBoxRow">
                  <input type="radio" className="radioBtn" id="radioBtn3" />{" "}
                  <label htmlFor="myCheck">Budget</label>
                </div>
              </div>
            </div>
            <div className="priceRange">
              <p>Filter</p>
              <span className="priceBudget">Budget</span>
              <div className="price-range-slider">
                <div
                  id="slider-range"
                  className="range-bar ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                >
                  <div
                    className="ui-slider-range ui-corner-all ui-widget-header"
                    style={{ left: "0%", width: "56.2059%" }}
                  />
                  <span
                    tabIndex={0}
                    className="ui-slider-handle ui-corner-all ui-state-default"
                    style={{ left: "0%" }}
                  />
                  <span
                    tabIndex={0}
                    className="ui-slider-handle ui-corner-all ui-state-default"
                    style={{ left: "56.2059%" }}
                  />
                </div>
                <span className="range-value">
                  <input type="text" id="amount1" readOnly="" />
                  To
                  <input type="text" id="amount2" readOnly="" />
                </span>
              </div>
            </div>
            <div className="stateBox">
              <div className="form-group">
                <select
                  name="programs"
                  id=""
                  className="form-control selectOptionSidebar"
                >
                  <option value="">State</option>
                  <option value="">Program 1</option>
                  <option value="">Program 2</option>
                  <option value="">Program 3</option>
                </select>
              </div>
            </div>
            <div className="sideBarFooter">
              <button
                type="button"
                className="btn btn-primary btnBSidebar RefilterBtn "
              >
                Reset Filters
              </button>
              <button
                type="button"
                className="btn btn-primary btnBSidebar saveBtn"
              >
                Save
              </button>
            </div>
          </div>
          </div>
        )}
        {
          filtershow &&
          <div className="d-none d-md-block trade_search leftSection postGroups1 bg-lgrey p-3 ">
          <h4 className="fw-bold text-center mb-0">Search by Trade</h4>
          <div class="divider mt-0 mb-3"></div>
          <div class="searchRank">
            <div class="searchProgram m-0">
              <div className="App">
                <div>
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
                <div>
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
        }
        


      </div>
    </>
  );
};
export default Leftpanel;
