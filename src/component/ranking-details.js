import React, { useState, useEffect } from 'react';
import tradeImg1 from '../img/trade-schools.jpeg';
import tradeImg2 from '../img/section1.jpg';
//import Resources from './resources';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Rankingdetails() {

    const [detail, setDetail] = useState([]);
    const params = useParams();

    useEffect(() => {

        let slug_url = params.slug
        axios.get("https://workreadyeducation.com/wre/api/get/trades/" + slug_url)
            .then(function (result) {
                if (result.data.status.status_code == 200) {
                    setDetail(result.data.results)
                }
            })
    });
    return (
        <>
            <section className="headerImage">
                <div className="background ">
                    <div className="container">
                        <div className="row  ">
                            <div className="col-md-8 section-h">
                                <div className="bannerHeading">
                                    <h1>{detail.title}</h1>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <main>
                                    <div className="wrappers">
                                        <h2>Search Programs</h2>
                                        <form action="#">
                                            <div className="form-group">
                                                <select name="programs" id="" className="form-control selectOption">
                                                    <option value="">- Select Program -</option>
                                                    <option value="">Program 1</option>
                                                    <option value="">Program 2</option>
                                                    <option value="">Program 3</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <select name="programs" id="" className="form-control selectOption">
                                                    <option value="">- Select Degree -</option>
                                                    <option value="">Degree 1</option>
                                                    <option value="">Degree 2</option>
                                                    <option value="">Degree 3</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <select name="programs" id="" className="form-control selectOption">
                                                    <option value="">- Select Duration -</option>
                                                    <option value="">Duration 1</option>
                                                    <option value="">Duration 2</option>
                                                    <option value="">Duration 3</option>
                                                </select>
                                            </div>
                                            <div className="input-box button">
                                                <input type="submit" name="submitButton" className="searchBtn" id="submitButton" value="Search Now" />
                                            </div>
                                        </form>
                                    </div>
                                </main>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="programsSection">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 test-design">
                            
                            <p className='m25'>
                                {detail.description}
                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>

            {/* <div className="programsSection">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 test-design">
                            <h4 className='m25'>
                                Graduates with a degree in health may find employment opportunities for healthcare professionals across the U.S. as physical therapy assistants, occupational therapy assistants, or a medical administrative assistant offering hospital or medical office assistance. With some clinical experience and perhaps a bachelor's degree from a healthcare administration program, these professionals might find jobs as health services managers, medical assistants, or a senior medical administrative assistant, though, often, medical assisting or healthcare administration might require a master's degree and clinical experience in healthcare facilities. A good next step if you have already earned a degree in health is to earn a higher-level degree in health information management, health services management, or a healthcare management or healthcare administration program.
                            </h4>
                            <p className='m25'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br /><br />
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                <br /><br />
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </p>
                            <p className='m25'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br /><br />
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 img-design">
                            <img width="100%" src={tradeImg1} />
                            <p className='m25'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br /><br />
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                <br /><br />
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </p>
                            <blockquote className='m25'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <div className="programsSection">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-12 img-design">
                            <img className="img-fluid w-100" src={tradeImg2} />
                        </div>
                        <div className="col-md-8 col-sm-12 img-design1">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-sm-12 img-design">
                            <blockquote className='m25'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It
                            </blockquote>
                        </div>
                    </div>
                    <div className="programsSection">
                        <div className="row">
                            <div className="col-md-8 col-sm-12 img-design1">
                                <p className='m25'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            </div>
                            <div className="col-md-4 col-sm-12 img-design">
                                <img className="img-fluid w-100" src={tradeImg2} />
                            </div>
                        </div>
                    </div>
                    <Resources></Resources>
                </div>
            </div> */}
           
        </>
    )
}
export default Rankingdetails