import { React, useState, useEffect } from 'react'

const Leftpanel = () => {
    const [data, setdata] = useState([]);
    const [rating, setRating] = useState([]);

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

    useEffect(() => {
        getuser();
    }, [])
    useEffect(() => {
        getRating();
    }, [])

    return (
        <>

            <div className="leftSection">

                <div class="programsSideBar">
                    <div class="filterArea">
                        <button type="button" class="btn btn-primary btnSidebar sortBtn ">Filters</button>

                    </div>
                </div>

                <div class="searchRank">

                    <div class="searchProgram">
                        <div class="form-group">

                            <select name="programs" id="" class="form-control selectOptionSidebar">
                                <option value="">By Trade</option>

                            </select>
                        </div>
                    </div>
                </div>
                <div class="scrollview">
                    <div class="scrollview1">
                        <div class="checkBox">
                            <input type="checkbox" id="myCheck" />
                            <label htmlFor="myCheck">Welding Training</label>
                        </div>
                        <div class="checkBox">
                            <input type="checkbox" id="myCheck" />
                            <label htmlFor="myCheck">Welding Training</label>
                        </div>
                        <div class="checkBox">
                            <input type="checkbox" id="myCheck" />
                            <label htmlFor="myCheck">Welding Training</label>
                        </div>
                        <div class="checkBox">
                            <input type="checkbox" id="myCheck" />
                            <label htmlFor="myCheck">Welding Training</label>
                        </div> <div class="checkBox">
                            <input type="checkbox" id="myCheck" />
                            <label htmlFor="myCheck">Welding Training</label>
                        </div> <div class="checkBox">
                            <input type="checkbox" id="myCheck" />
                            <label htmlFor="myCheck">Welding Training</label>
                        </div> <div class="checkBox">
                            <input type="checkbox" id="myCheck" />
                            <label htmlFor="myCheck">Welding Training</label>
                        </div>
                        <div class="checkBox">
                            <input type="checkbox" id="myCheck" />
                            <label htmlFor="myCheck">Welding Training</label>
                        </div>
                        <div class="checkBox">
                            <input type="checkbox" id="myCheck" />
                            <label htmlFor="myCheck">Welding Training</label>
                        </div>
                        <div class="checkBox">
                            <input type="checkbox" id="myCheck" />
                            <label htmlFor="myCheck">Welding Training</label>
                        </div>
                        <div class="checkBox">
                            <input type="checkbox" id="myCheck" />
                            <label htmlFor="myCheck">Welding Training</label>
                        </div>
                        <div class="checkBox">
                            <input type="checkbox" id="myCheck" />
                            <label htmlFor="myCheck">Welding Training</label>
                        </div>
                        <div class="checkBox">
                            <input type="checkbox" id="myCheck" />
                            <label htmlFor="myCheck">Welding Training</label>
                        </div>
                        <div class="checkBox">
                            <input type="checkbox" id="myCheck" />
                            <label htmlFor="myCheck">Welding Training</label>
                        </div>
                        <div class="checkBox">
                            <input type="checkbox" id="myCheck" />
                            <label htmlFor="myCheck">Welding Training</label>
                        </div>
                        <div class="checkBox">
                            <input type="checkbox" id="myCheck" />
                            <label htmlFor="myCheck">Welding Training</label>
                        </div>
                        <div class="checkBox">
                            <input type="checkbox" id="myCheck" />
                            <label htmlFor="myCheck">Welding Training</label>
                        </div><div class="checkBox">
                            <input type="checkbox" id="myCheck" />
                            <label htmlFor="myCheck">Welding Training</label>
                        </div>

                    </div>
                </div>

                <div class="stateBox" >
                    <div class="form-group">
                        <select name="programs" id="" class="form-control selectOptionSidebar">
                            <option value="">By Cities</option>

                        </select>
                    </div>

                    <div class="scrollview">
                        <div class="scrollview1">
                            {data.results && data.results.length > 0 && data.results.map((cities, index) => (
                                <div class="checkBox" key={index}>
                                    <input type="checkbox" id={"myCheck" + cities.id} />
                                    <label htmlFor={"myCheck" + cities.id}>{cities.name}</label>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>



                <div class="stateBox">
                    <div class="form-group">
                        <select name="programs" id="" class="form-control selectOptionSidebar">
                            <option value="">By Rating</option>
                        </select>
                    </div>
                    <div class="scrollview">
                        <div class="scrollview1">
                            {rating.data && rating.data.length > 0 && rating.data.map((rating, x) => (
                                <div class="checkBox" key={x}>
                                    <input type="checkbox" id={"Rating" + rating.rating} />
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
                            <div class="checkBox">
                                <input type="checkbox" id="myCheck" />
                                <label htmlFor="myCheck">Online</label>
                            </div>

                            <div class="checkBox">
                                <input type="checkbox" id="myCheck" />
                                <label htmlFor="myCheck">Online</label>
                            </div>
                            <div class="checkBox">
                                <input type="checkbox" id="myCheck" />
                                <label htmlFor="myCheck">Online</label>
                            </div>
                            <div class="checkBox">
                                <input type="checkbox" id="myCheck" />
                                <label htmlFor="myCheck">Online</label>
                            </div>
                            <div class="checkBox">
                                <input type="checkbox" id="myCheck" />
                                <label htmlFor="myCheck">Online</label>
                            </div>
                            <div class="checkBox">
                                <input type="checkbox" id="myCheck" />
                                <label htmlFor="myCheck">Online</label>
                            </div>
                            <div class="checkBox">
                                <input type="checkbox" id="myCheck" />
                                <label htmlFor="myCheck">Online</label>
                            </div>
                            <div class="checkBox">
                                <input type="checkbox" id="myCheck" />
                                <label htmlFor="myCheck">Online</label>
                            </div>
                        </div>
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