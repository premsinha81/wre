import tradeImg1 from '../img/trade-schools.jpeg';
import tradeImg2 from '../img/section1.jpg';

import Resources from './resources';
import { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';

function CollegeDetails() {
    // const [search_result, setSearcResult] = useState([]);
    const [ranking, setRanking] = useState([])
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://162.144.98.113/~work/wre/api/college_detail?college_id=${id}`)
            .then(function (result) {
                console.log(result)
                if (result.data.status.status_code == 200) {
                    setRanking(result.data.data)
                    console.log(result.data.data)
                    // setRanking(result.data.results)
                } else {
                    setRanking('')
                }
            })
    }, [])
    //console.log(ranking.results.title)
    //console.log('prem' + params.id);
    return (
        <>
            <section className="headerImage">
                <div className="background">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 section-h">
                                <div className="bannerHeading">
                                    <h1>{ranking.college}</h1>
                                </div>
                            </div>
                            <div className="col-md-4">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="programsSection">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 test-design">
                            
                            <p className='m25' dangerouslySetInnerHTML={{__html:ranking.description}}></p>
                        </div>
                    </div>
                    {/* <div className="row">
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
                    </div> */}
                </div>
                <div className="programsSection">
                    <div className="container">
                        {/* <div className="row">
                            <div className="col-md-4 col-sm-12 img-design">
                                <img className="img-fluid w-100" src={tradeImg2} />
                            </div>
                            <div className="col-md-8 col-sm-12 img-design1">
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                </p>
                            </div>
                        </div> */}
                        {/* <div className="row">
                            <div className="col-md-12 col-sm-12 img-design">
                                <blockquote className='m25'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It
                                </blockquote>
                            </div>
                        </div> */}
                        {/* <div className="programsSection">
                            <div className="row">
                                <div className="col-md-8 col-sm-12 img-design1">
                                    <p className='m25'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                </div>
                                <div className="col-md-4 col-sm-12 img-design">
                                    <img className="img-fluid w-100" src={tradeImg2} />
                                </div>
                            </div>
                        </div> */}
                        <Resources></Resources>
                    </div>
                </div>
            </div>

        </>
    )
}
export default CollegeDetails