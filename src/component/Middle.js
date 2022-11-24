import React from 'react'
import Online from './Online'
import Slider from './slider'
import Accordiansection from './Tabsystemsection'
const Middle = () => {
  return (
    <div> 
       <section class="headerImage">
       <div class="background mobileCssBG">
          <div class="container">
             <div class="row  ">
                <div class="col-md-8 section-h">
                   <div class="bannerHeading">
                      <h1>WRE's Trade Educatoion Rankings</h1>
                   </div>
                </div>
                <div class="col-md-4">
                   <main>
                      <div class="wrappers">
                         <h2>Search Programs</h2>
                         <form action="#">
                            <div class="form-group">
                               <select name="programs" id="" class="form-control selectOption">
                                  <option value="">- Select Program -</option>
                                  <option value="">Program 1</option>
                                  <option value="">Program 2</option>
                                  <option value="">Program 3</option>
                               </select>
                            </div>
                            <div class="form-group">
                               <select name="programs" id="" class="form-control selectOption">
                                  <option value="">- Select Degree -</option>
                                  <option value="">Degree 1</option>
                                  <option value="">Degree 2</option>
                                  <option value="">Degree 3</option>
                               </select>
                            </div>
                            <div class="form-group">
                               <select name="programs" id="" class="form-control selectOption">
                                  <option value="">- Select Duration -</option>
                                  <option value="">Duration 1</option>
                                  <option value="">Duration 2</option>
                                  <option value="">Duration 3</option>
                               </select>
                            </div>
                            <div class="input-box button">
                               <input type="submit" name="submitButton" class="searchBtn" id="submitButton"
                                  value="Search Now"/>
                            </div>
                         </form>
                      </div>
                   </main>
                </div>
             </div>
          </div>
       </div>
    </section>
       <div class="programsSection">
    <div class="container">
       <div class="row">

          <div class="col-lg-3 col-xl-3">
             <div class="programsSideBar">
                <div class="filterArea">
                   <button type="button" class="btn btn-primary btnSidebar filterBtn ">Filters</button>
                   <button type="button" class="btn btn-primary btnSidebar sortBtn">Sort By</button>
                </div>
                <div class="filterBody">
                   <div class="searchRank">
                      <h4>Search Ranking</h4>
                      <div class="searchProgram">
                         <div class="form-group">
                            <select name="programs" id="" class="form-control selectOptionSidebar">
                               <option value="">Program</option>
                               <option value="">Program 1</option>
                               <option value="">Program 2</option>
                               <option value="">Program 3</option>
                            </select>
                         </div>
                      </div>
                   </div>
                   <div class="checkBox">
                      <input type="checkbox" checked="" id="myCheck"/>
                      <label for="myCheck">Only remove programs</label>
                   </div>
                   <div class="radioBox">
                      <p>Sort By</p>
                      <div class="radioBoxDiv">
                         <div class="radioBoxRow">
                            <input type="radio" class="radioBtn" checked="" id="radioBtn1"/> <label
                               for="myCheck">Recommended</label>
                         </div>
                         <div class="radioBoxRow">
                            <input type="radio" class="radioBtn" id="radioBtn2"/> <label for="myCheck">Top
                               Rated</label>
                         </div>
                         <div class="radioBoxRow">
                            <input type="radio" class="radioBtn" id="radioBtn3"/> <label for="myCheck">Budget</label>
                         </div>
                      </div>
                   </div>
                   <div class="priceRange">
                      <p>Filter</p>
                      <span class="priceBudget">Budget</span>
                      <div class="price-range-slider">
                         <div id="slider-range"
                            class="range-bar ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content">
                            <div class="ui-slider-range ui-corner-all ui-widget-header"
                              ></div><span tabindex="0"
                               class="ui-slider-handle ui-corner-all ui-state-default" ></span><span
                               tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default"
                               ></span>
                         </div>
                         <span class="range-value">
                            <input type="text" id="amount1" readonly="" />
                            To
                            <input type="text" id="amount2" readonly="" />
                         </span>
                      </div>
                   </div>
                   <div class="stateBox">
                      <div class="form-group">
                         <select name="programs" id="" class="form-control selectOptionSidebar">
                            <option value="">State</option>
                            <option value="">Program 1</option>
                            <option value="">Program 2</option>
                            <option value="">Program 3</option>
                         </select>
                      </div>
                   </div>
                   <div class="sideBarFooter">
                      <button type="button" class="btn btn-primary btnBSidebar RefilterBtn ">Reset
                         Filters</button>
                      <button type="button" class="btn btn-primary btnBSidebar saveBtn">Save</button>
                   </div>
                </div>
             </div>
          </div>
      
          <div class="col-lg-9 col-xl-9">
          <Online/>
             <div class="row">
                <div class="col-12">
                   <div class="loadBtn">
                      <button type="button">Load More</button>
                   </div>
                </div>
             </div>
          </div>
       
       </div>
    </div>
 </div>

 <Accordiansection/>

<Slider/>
   
   </div>
  )
}

export default Middle