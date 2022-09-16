import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from "axios";

function Slider() {

    const [program, setProgram] = useState([])
    const [selprog, setSelprog] = useState([])
    const [errorprog, setErrorprog] = useState([])
    const [degree, setDegree] = useState([])
    const [seldegree, setSeldegree] = useState([])
    const [errordegree, setErrordegree] = useState([])
    const [duration, setDuration] = useState([])
    const [selduration, setSelduration] = useState([])
    const [errordur, setErrordur] = useState([])

    useEffect(() => {
        getprogram();
        getdegree();
        getduration();
    }, []);


    const getprogram = () => {

        axios.get("https://workreadyeducation.com/wre/api/programs")
            .then(function (response) {
                setProgram(response.data);
            })

    }

    const getdegree = () => {
        axios.get("https://workreadyeducation.com/wre/api/degree")
            .then(function (response) {
                setDegree(response.data);
            })
    }

    const getduration = () => {
        axios.get("https://workreadyeducation.com/wre/api/duration")
            .then(function (response) {
                setDuration(response.data);
            })
    }

    const handleProgramChange = (e) => {
        setSelprog(e.target.value)
    }

    const handleDegreeChange = (e) => {
        setSeldegree(e.target.value)
    }

    const handleDurationChange = (e) => {
        setSelduration(e.target.value)
    }

    const searchsubmit = () => {

        if (!selprog) {
            setErrorprog("Select Program");
            return;
        }

        if (!seldegree) {
            setErrordegree("Select Degree");
            return
        }

        if (!selduration) {
            setErrordur("Select Duration")
            return
        }

        // const url = "https://workreadyeducation.com/wre/api/programs/"+selprog+"/"+seldegree+"/"+selduration
        // console.log(url)
        // axios.post(url)
        // .then(function (response) {
        //     console.log(response);
        // })
    }

    return (
        <div className="slider">
            <div className="gradient"></div>
            <div className="container">
                <div className="container posRelative">
                    <div className="searchPanel">
                        <input type="text" className="form-control" placeholder="SEARCH FOR A TRADE"/>
                        <button className="btn btn-primary button btnSearch">SEARCH NOW</button>
                        {/* <h2>SEARCH PROGRAMS</h2>
                        <hr />
                        <form onSubmit={searchsubmit()}>
                            <select onChange={e => handleProgramChange(e)} >
                                <option>Select Program</option>
                                {
                                    program.map((resp, key) => <option key={key} value={resp.id}>{resp.title}</option>)
                                }
                            </select>
                            <select onChange={e => handleDegreeChange(e)}>
                                <option>Select Degree</option>
                                {
                                    degree.map((resp, key) => <option key={key} value={resp.id}>{resp.degree}</option>)
                                }
                            </select>
                            <select onChange={e => handleDurationChange(e)}>
                                <option>Select Duration</option>
                                {
                                    duration.map((resp, key) => <option key={key} value={resp.id}>{resp.duration}</option>)
                                }
                            </select>
                            <button className="btn btn-primary button" type="submit">SEARCH NOW</button>
                        </form> */}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider;