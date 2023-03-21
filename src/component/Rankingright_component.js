import React from 'react'

import logo1 from '../Image/logo1.jpg';
import logo2 from '../Image/Group 512.svg';
import { useEffect, useState } from 'react';
import axios from "axios";
// import { useParams } from 'react-router-dom';



const Rankingright_component = ({slugId}) => {
  const [ranking, setRanking] = useState([])
  // const { id } = useParams();
  // var id = slugId;
    const fetchData = () => {
    return axios.get("https://admin.allnuud.com/api/suggestion_question_detail/"+slugId)
          .then((response) => setRanking(response.data.query[0]));
  }
  useEffect(() => {
    fetchData();
  },[])
  return (
    <div>

      <h1>{ranking.question}</h1>             
      <h2 className="py-3">
        {ranking.question}
      </h2>
      <p className='m25' dangerouslySetInnerHTML={{ __html: ranking.description }}></p>

      <div className="row">
        <div className="col">
          <div className="accordion py-5" id="accordionExample2 ">
            <div className="accordioniteli">
              <div className="rr borederlio">
                <div className="borederlio2">

                  <img width="100%" src={logo1} alt="" />
                </div>
                <div className="tradeTitle">
                  <h2>Lincolntech Trade School</h2>
                </div>
                <div className="borederlio1">

                  <img width="100%" src={logo2} alt="" />
                  <span>1</span>
                </div>
              </div>
              <div>
                <div className="accordion-body">
                  <ul className="accourdionCourseBullot1">
                    <li>
                      Concepts and insights behind the development of modern
                      wireless communication technologies. Detailed
                      performance analysis of 4G/ 5G wireless technologies
                      such as OFDM, MIMO, Multi-user MIMO{" "}
                    </li>
                    <li>
                      Detailed performance analysis of 4G/ 5G wireless
                      technologies such as OFDM, MIMO, Multi-user MIMO
                    </li>
                    <li>
                      Concepts and insights behind the development of modern
                      wireless communication technologies. Detailed
                      performance analysis of 4G/ 5G wireless technologies
                      such as OFDM, MIMO, Multi-user MIMO
                    </li>
                    <li>
                      Detailed performance analysis of 4G/ 5G wireless
                      technologies such as OFDM, MIMO, Multi-user MIMO
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion py-3" id="accordionExample2 ">
            <div className="accordioniteli">
              <div className="rr borederlio">
                <div className="borederlio2">
                  {" "}
                  <img width="100%" src={logo1} alt="" />
                </div>
                <div className="tradeTitle">
                  <h2>WCTC Kansas</h2>
                </div>
                <div className="borederlio1">
                  {" "}
                  <img width="100%" src={logo2} alt="" />
                  <span>2</span>
                </div>
              </div>
              <div>
                <div className="accordion-body">
                  <ul className="accourdionCourseBullot1">
                    <li>
                      Concepts and insights behind the development of modern
                      wireless communication technologies. Detailed
                      performance analysis of 4G/ 5G wireless technologies
                      such as OFDM, MIMO, Multi-user MIMO{" "}
                    </li>
                    <li>
                      Detailed performance analysis of 4G/ 5G wireless
                      technologies such as OFDM, MIMO, Multi-user MIMO
                    </li>
                    <li>
                      Concepts and insights behind the development of modern
                      wireless communication technologies. Detailed
                      performance analysis of 4G/ 5G wireless technologies
                      such as OFDM, MIMO, Multi-user MIMO
                    </li>
                    <li>
                      Detailed performance analysis of 4G/ 5G wireless
                      technologies such as OFDM, MIMO, Multi-user MIMO
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion py-5" id="accordionExample2 ">
            <div className="accordioniteli">
              <div className="rr borederlio">
                <div className="borederlio2">
                  {" "}
                  <img width="100%" src={logo1} alt="" />
                </div>
                <div className="tradeTitle">
                  <h2>Lincolntech Trade School</h2>
                </div>
                <div className="borederlio1">
                  {" "}
                  <img width="100%" src={logo2} alt="" />
                  <span>3</span>
                </div>
              </div>
              <div>
                <div className="accordion-body">
                  <ul className="accourdionCourseBullot1">
                    <li>
                      Concepts and insights behind the development of modern
                      wireless communication technologies. Detailed
                      performance analysis of 4G/ 5G wireless technologies
                      such as OFDM, MIMO, Multi-user MIMO{" "}
                    </li>
                    <li>
                      Detailed performance analysis of 4G/ 5G wireless
                      technologies such as OFDM, MIMO, Multi-user MIMO
                    </li>
                    <li>
                      Concepts and insights behind the development of modern
                      wireless communication technologies. Detailed
                      performance analysis of 4G/ 5G wireless technologies
                      such as OFDM, MIMO, Multi-user MIMO
                    </li>
                    <li>
                      Detailed performance analysis of 4G/ 5G wireless
                      technologies such as OFDM, MIMO, Multi-user MIMO
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion  py-5 " id="accordionExample2 ">
              <div className="accordioniteli ">
                <div className="rr borederlio">
                  <div className="borederlio2">
                    {" "}
                    <img width="100%" src={logo1} alt="" />
                  </div>
                  <div className="tradeTitle ">
                    <h2>WCTC Kansas</h2>
                  </div>
                  <div className="borederlio1">
                    {" "}
                    <img width="100%" src={logo2} alt="" />
                    <span>4</span>
                  </div>
                </div>
                <div>
                  <div className="accordion-body">
                    <ul className="accourdionCourseBullot1">
                      <li>
                        Concepts and insights behind the development of
                        modern wireless communication technologies. Detailed
                        performance analysis of 4G/ 5G wireless technologies
                        such as OFDM, MIMO, Multi-user MIMO{" "}
                      </li>
                      <li>
                        Detailed performance analysis of 4G/ 5G wireless
                        technologies such as OFDM, MIMO, Multi-user MIMO
                      </li>
                      <li>
                        Concepts and insights behind the development of
                        modern wireless communication technologies. Detailed
                        performance analysis of 4G/ 5G wireless technologies
                        such as OFDM, MIMO, Multi-user MIMO
                      </li>
                      <li>
                        Detailed performance analysis of 4G/ 5G wireless
                        technologies such as OFDM, MIMO, Multi-user MIMO
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion py-3" id="accordionExample2 ">
              <div className="accordioniteli">
                <div className="rr borederlio">
                  <div className="borederlio2">
                    {" "}
                    <img width="100%" src={logo1} alt="" />
                  </div>
                  <div className="tradeTitle">
                    <h2>Lincolntech Trade School</h2>
                  </div>
                  <div className="borederlio1">
                    {" "}
                    <img width="100%" src={logo2} alt="" />
                    <span>5</span>
                  </div>
                </div>
                <div>
                  <div className="accordion-body">
                    <ul className="accourdionCourseBullot1">
                      <li>
                        Concepts and insights behind the development of
                        modern wireless communication technologies. Detailed
                        performance analysis of 4G/ 5G wireless technologies
                        such as OFDM, MIMO, Multi-user MIMO{" "}
                      </li>
                      <li>
                        Detailed performance analysis of 4G/ 5G wireless
                        technologies such as OFDM, MIMO, Multi-user MIMO
                      </li>
                      <li>
                        Concepts and insights behind the development of
                        modern wireless communication technologies. Detailed
                        performance analysis of 4G/ 5G wireless technologies
                        such as OFDM, MIMO, Multi-user MIMO
                      </li>
                      <li>
                        Detailed performance analysis of 4G/ 5G wireless
                        technologies such as OFDM, MIMO, Multi-user MIMO
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion py-5" id="accordionExample2 ">
              <div className="accordioniteli">
                <div className="rr borederlio">
                  <div className="borederlio2">
                    {" "}
                    <img width="100%" src={logo1} alt="" />
                  </div>
                  <div className="tradeTitle">
                    <h2>WCTC Kansas</h2>
                  </div>
                  <div className="borederlio1">
                    {" "}
                    <img width="100%" src={logo2} alt="" />
                    <span>6</span>
                  </div>
                </div>
                <div>
                  <div className="accordion-body">
                    <ul className="accourdionCourseBullot1">
                      <li>
                        Concepts and insights behind the development of
                        modern wireless communication technologies. Detailed
                        performance analysis of 4G/ 5G wireless technologies
                        such as OFDM, MIMO, Multi-user MIMO{" "}
                      </li>
                      <li>
                        Detailed performance analysis of 4G/ 5G wireless
                        technologies such as OFDM, MIMO, Multi-user MIMO
                      </li>
                      <li>
                        Concepts and insights behind the development of
                        modern wireless communication technologies. Detailed
                        performance analysis of 4G/ 5G wireless technologies
                        such as OFDM, MIMO, Multi-user MIMO
                      </li>
                      <li>
                        Detailed performance analysis of 4G/ 5G wireless
                        technologies such as OFDM, MIMO, Multi-user MIMO
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion py-3" id="accordionExample2 ">
              <div className="accordioniteli">
                <div className="rr borederlio">
                  <div className="borederlio2">
                    {" "}
                    <img width="100%" src={logo1} alt="" />
                  </div>
                  <div className="tradeTitle">
                    <h2>Lincolntech Trade School</h2>
                  </div>
                  <div className="borederlio1">
                    {" "}
                    <img width="100%" src={logo2} alt="" />
                    <span>7</span>
                  </div>
                </div>
                <div>
                  <div className="accordion-body">
                    <ul className="accourdionCourseBullot1">
                      <li>
                        Concepts and insights behind the development of
                        modern wireless communication technologies. Detailed
                        performance analysis of 4G/ 5G wireless technologies
                        such as OFDM, MIMO, Multi-user MIMO{" "}
                      </li>
                      <li>
                        Detailed performance analysis of 4G/ 5G wireless
                        technologies such as OFDM, MIMO, Multi-user MIMO
                      </li>
                      <li>
                        Concepts and insights behind the development of
                        modern wireless communication technologies. Detailed
                        performance analysis of 4G/ 5G wireless technologies
                        such as OFDM, MIMO, Multi-user MIMO
                      </li>
                      <li>
                        Detailed performance analysis of 4G/ 5G wireless
                        technologies such as OFDM, MIMO, Multi-user MIMO
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion py-5" id="accordionExample2 ">
              <div className="accordioniteli">
                <div className="rr borederlio">
                  <div className="borederlio2">
                    {" "}
                    <img width="100%" src={logo1} alt="" />
                  </div>
                  <div className="tradeTitle">
                    <h2>WCTC Kansas</h2>
                  </div>
                  <div className="borederlio1">
                    {" "}
                    <img width="100%" src={logo2} alt="" />
                    <span>8</span>
                  </div>
                </div>
                <div>
                  <div className="accordion-body">
                    <ul className="accourdionCourseBullot1">
                      <li>
                        Concepts and insights behind the development of
                        modern wireless communication technologies. Detailed
                        performance analysis of 4G/ 5G wireless technologies
                        such as OFDM, MIMO, Multi-user MIMO{" "}
                      </li>
                      <li>
                        Detailed performance analysis of 4G/ 5G wireless
                        technologies such as OFDM, MIMO, Multi-user MIMO
                      </li>
                      <li>
                        Concepts and insights behind the development of
                        modern wireless communication technologies. Detailed
                        performance analysis of 4G/ 5G wireless technologies
                        such as OFDM, MIMO, Multi-user MIMO
                      </li>
                      <li>
                        Detailed performance analysis of 4G/ 5G wireless
                        technologies such as OFDM, MIMO, Multi-user MIMO
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion py-3" id="accordionExample2 ">
              <div className="accordioniteli">
                <div className="rr borederlio">
                  <div className="borederlio2">
                    {" "}
                    <img width="100%" src={logo1} alt="" />
                  </div>
                  <div className="tradeTitle">
                    <h2>Lincolntech Trade School</h2>
                  </div>
                  <div className="borederlio1">
                    {" "}
                    <img width="100%" src={logo2} alt="" />
                    <span>9</span>
                  </div>
                </div>
                <div>
                  <div className="accordion-body">
                    <ul className="accourdionCourseBullot1">
                      <li>
                        Concepts and insights behind the development of
                        modern wireless communication technologies. Detailed
                        performance analysis of 4G/ 5G wireless technologies
                        such as OFDM, MIMO, Multi-user MIMO{" "}
                      </li>
                      <li>
                        Detailed performance analysis of 4G/ 5G wireless
                        technologies such as OFDM, MIMO, Multi-user MIMO
                      </li>
                      <li>
                        Concepts and insights behind the development of
                        modern wireless communication technologies. Detailed
                        performance analysis of 4G/ 5G wireless technologies
                        such as OFDM, MIMO, Multi-user MIMO
                      </li>
                      <li>
                        Detailed performance analysis of 4G/ 5G wireless
                        technologies such as OFDM, MIMO, Multi-user MIMO
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion py-5" id="accordionExample2 ">
              <div className="accordioniteli">
                <div className="rr borederlio">
                  <div className="borederlio2">
                    {" "}
                    <img width="100%" src={logo1} alt="" />
                  </div>
                  <div className="tradeTitle">
                    <h2>WCTC Kansas</h2>
                  </div>
                  <div className="borederlio1">
                    {" "}
                    <img width="100%" src={logo2} />
                    <span>10</span>
                  </div>
                </div>
                <div>
                  <div className="accordion-body">
                    <ul className="accourdionCourseBullot1">
                      <li>
                        Concepts and insights behind the development of
                        modern wireless communication technologies. Detailed
                        performance analysis of 4G/ 5G wireless technologies
                        such as OFDM, MIMO, Multi-user MIMO{" "}
                      </li>
                      <li>
                        Detailed performance analysis of 4G/ 5G wireless
                        technologies such as OFDM, MIMO, Multi-user MIMO
                      </li>
                      <li>
                        Concepts and insights behind the development of
                        modern wireless communication technologies. Detailed
                        performance analysis of 4G/ 5G wireless technologies
                        such as OFDM, MIMO, Multi-user MIMO
                      </li>
                      <li>
                        Detailed performance analysis of 4G/ 5G wireless
                        technologies such as OFDM, MIMO, Multi-user MIMO
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <span>
              An associate degree in healthcare is a two-year degree that
              students may complete on campus, online, or in a combination
              of on-campus and online learning. Healthcare is a major part
              of the US economy, and an associate in health, health
              information management, health services management, or a
              healthcare administration program can open many paths to
              employment opportunities in the healthcare industry.
              Population changes drive much of the growth of healthcare in
              the US, while national policies have increased levels of
              health insurance available and the need for workers in
              healthcare support jobs to maintain healthcare records.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rankingright_component