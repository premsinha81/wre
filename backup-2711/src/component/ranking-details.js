import tradeImg1 from '../img/trade-schools.jpeg';
import tradeImg2 from '../img/section1.jpg';

import Resources from './resources';
import { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';

function RankingDetails() {
    // const [search_result, setSearcResult] = useState([]);
    const [ranking, setRanking] = useState([])
    const { slug } = useParams();

    useEffect(() => {
        axios.get(`https://admin.allnuud.com/api/get/trades/${slug}`)
            .then(function (result) {
                // console.log(result)
                if (result.data.status.status_code == 200) {
                    setRanking(result.data.results)
                    console.log(result.data.results)
                    // setRanking(result.data.results)
                } else {
                    setRanking('')
                }
            })
    }, [])
    // console.log(ranking.results.title)
    return (
        <>

            <section className="headerImage">
                <div className="background pb10">
                    <div className="container">
                        <div className="row  ">
                            <div className="col-md-7 section-h">
                                <div className="bannerHeading">
                                    <h1>{ranking.title}</h1>
                                    <h4>{ranking.degree}</h4>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <ul className='rankingList'>
                                    <li className='duration'>Duration : {ranking.duration}</li>
                                    <li className='degree'>Program Type : {ranking.RemoteProgram}</li>
                                    <li className='fees'>Fees : ${ranking.fees}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="programsSection mt0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 test-design">
                        <h3 className='text-black' >{ranking.title}</h3>
                            <p className='m25' dangerouslySetInnerHTML={{__html:ranking.description}}>
                                    
                            
                                
                            </p>
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
export default RankingDetails