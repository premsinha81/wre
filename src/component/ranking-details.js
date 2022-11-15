import tradeImg1 from '../img/trade-schools.jpeg';
import tradeImg2 from '../img/section1.jpg';
import Header from "./common/header";
import Footer from "./common/footer";


function Rankingdetails() {
    return (
        <>
            <Header></Header>
            <section className="headerImage">
                <div className="background ">
                    <div className="container">
                        <div className="row  ">
                            <div className="col-md-8 section-h">
                                <div className="bannerHeading">
                                    <h1>WRE's Trade Education Rankings</h1>
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
                            <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </h5>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br /><br />
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                    <br/><br/>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                    </p>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br /><br />
                                            </p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12 img-design">
                                                <img width="100%" src={tradeImg1} />
                                                    <p>
                                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br/><br/>
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                                            <br/><br/>
                                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                                            </p>
                                                                <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It
                                                                </h6>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        <div className="programsSection">
                                                            <div className="container">
                                                                <div className="row">
                                                                    <div className="col-md-4 col-sm-12 img-design">
                                                                        <img className="img-fluid w-100  " src={tradeImg2}/>
                                                                    </div>
                                                                    <div className="col-md-8 col-sm-12 img-design1">
                                                                        <p>
                                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br/><br/>
                                                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                                                            </p>
                                                                            </div>
                                                                    </div>
                                                                    <div className="row">
                                                                        <div className="col-md-12 col-sm-12 img-design">
                                                                            <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It
                                                                            </h6>
                                                                        </div>
                                                                    </div>
                                                                    <div className="programsSection">
                                                                        <div className="row">
                                                                            <div className="col-md-8 col-sm-12 img-design1">
                                                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br/><br/>
                                                                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                                                                    </div>
                                                                                    <div className="col-md-4 col-sm-12 img-design">
                                                                                        <img className="img-fluid w-100" src={tradeImg2} />
                                                                                    </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <Footer></Footer>
                                                        </>
                                                        )
}

                                                        export default Rankingdetails