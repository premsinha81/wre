import RangeSlider from "./rangeSlider";
function Leftpanel() {
    return (
        <>
            <div className="leftSection">

                <div class="programsSideBar">
                    <div class="filterArea">
                        <button type="button" class="btn btn-primary btnSidebar filterBtn ">Filters</button>
                        <button type="button" class="btn btn-primary btnSidebar sortBtn">Sort By</button>
                    </div>
                </div>

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
                    <input type="checkbox" checked id="myCheck" />
                    <label for="myCheck">Only remove programs</label>
                </div>

                <div class="radioBox">
                    <p>Sort By</p>
                    <div class="radioBoxDiv">
                        <div class="radioBoxRow">
                            <input type="radio" class="radioBtn" checked="" id="radioBtn1" /> <label for="myCheck">Recommended</label>
                        </div>
                        <div class="radioBoxRow">
                            <input type="radio" class="radioBtn" id="radioBtn2" /> <label for="myCheck">Top
                                Rated</label>
                        </div>
                        <div class="radioBoxRow">
                            <input type="radio" class="radioBtn" id="radioBtn3" /> <label for="myCheck">Budget</label>
                        </div>
                    </div>
                </div>

                <div class="priceRange">
                    <p>Filter</p>
                    <span class="priceBudget">Budget</span>
                    <div class="price-range-slider">
                        <RangeSlider></RangeSlider>
                        {/* <span class="range-value">
                            <input type="text" id="amount1" readonly="" />
                            To
                            <input type="text" id="amount2" readonly="" />
                        </span> */}
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
                    <button type="button" class="btn btn-primary btnBSidebar RefilterBtn">Reset
                        Filters</button>
                    <button type="button" class="btn btn-primary btnBSidebar saveBtn">Save</button>
                </div>

            </div>
        </>
    )
}
export default Leftpanel