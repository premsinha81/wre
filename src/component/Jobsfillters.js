import { reverse } from "lodash";
import {  useState, useEffect } from "react";
import { Avatar } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
// import axios from "axios";

const 
Jobsfillters = (props) => {
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
    color = " text-white ";
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
           


            <div className="filterArea">
    <button type="button" className={"btn btn-primary btnSidebar filterBtn" +
     Bgcolor3 +
     color3
   }
   onClick={() => {
     setMobfilter(!mobfilter);
     setShortby(false);
     setFilterShow(false);
   }}>
      Filters<ArrowDropUpIcon className={transform} />
      </button>
    <button type="button" className="btn btn-primary btnSidebar sortBtn">
      Sort By
    </button>
  </div>
           

            {/* <button
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
            </button> */}
            
          </div>
        </div>

        {mobfilter &&  (
          <div className="d-block d-md-none trade_search leftSection postGroups1 p-3  bg-lgrey rounded  mt-3">
 <>
  
  <div className="filterBody">
    <div className="searchRank">
      <h4>Search Ranking</h4>
      <div className="searchProgram">
        <div className="form-group">
          <select
            name="programs"
            id=""
            className="form-control selectOptionSidebar job"
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
            style={{ left: "62.6177%" }}
          />
          <div
            className="ui-slider-range ui-corner-all ui-widget-header"
            style={{ left: "0%", width: "62.6177%" }}
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
          className="form-control selectOptionSidebar job"
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
      <button type="button" className="btn btn-primary btnBSidebar saveBtn">
        Save
      </button>
    </div>
  </div>
</>

          </div>
        )}

        {shortby && (
         <div className="d-block d-md-none trade_search leftSection postGroups1 p-3  bg-lgrey rounded  mt-3">
           <div className="filterBody">
           <>

  <div className="filterBody">
    <div className="searchRank">
      <h4>Search Ranking</h4>
      <div className="searchProgram">
        <div className="form-group">
          <select
            name="programs"
            id=""
            className="form-control selectOptionSidebar job"
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
            style={{ left: "62.6177%" }}
          />
          <div
            className="ui-slider-range ui-corner-all ui-widget-header"
            style={{ left: "0%", width: "62.6177%" }}
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
          className="form-control selectOptionSidebar job"
        >
          <option value="">State</option>
          <option value="">Program 1</option>
          <option value="">Program 2</option>
          <option value="">Program 3</option>
        </select>
      </div>
    </div>
    
  </div>
</>

           </div>
          </div>
        )}
        {
          filtershow &&
          <div className="d-none d-md-block trade_search leftSection postGroups1 bg-lgrey p-3 ">
         <>

  <div className="filterBody">
    <div className="searchRank">
      <h4>Search Ranking</h4>
      <div className="form-group">
  <select name="programs" id="" className="form-control selectOptionSidebar job">
    <option value="">Job Type</option>
    <option value="">Job Type</option>
  </select>
</div>
    <div className="form-group">
  <select name="programs" id="" className="form-control selectOptionSidebar job">
    <option value="">Location</option>
    <option value=""></option>
  </select>
</div>
</div>
<div className="form-group mt-4 mb-4">
<div className="radioBoxRow">
          <input
            type="checkbox"
            className="radioBtn"
            defaultChecked=""
            id="radioBtn1"
          />{" "}
          <label htmlFor="myCheck">Only On-Site Jobs</label>
        </div>
        </div>
      
        <div className="form-group">
  <select name="programs" id="" className="form-control selectOptionSidebar job">
    <option value="">Industry</option>
    <option value="">By Rating</option>
  </select>
</div>
<div className="form-group">
  <select name="programs" id="" className="form-control selectOptionSidebar job">
    <option value="">Experience</option>
    <option value="">By Rating</option>
  </select>
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
            style={{ left: "62.6177%" }}
          />
          <div
            className="ui-slider-range ui-corner-all ui-widget-header"
            style={{ left: "0%", width: "62.6177%" }}
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
          className="form-control selectOptionSidebar job"
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
      <button type="button" className="btn btn-primary btnBSidebar saveBtn">
        Save
      </button>
    </div>
  </div>
</>


     

    
       
        </div>
        }
        


      </div>
    </>
  );
};
export default Jobsfillters;
