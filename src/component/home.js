import Login from "./login";
import PostJobSlider from "./PostJobSlider";
import CertificateCourse from "./certificateCourse";
import Resources from "./resources";
function Home() {
    return (

        <>
            {/* <Slider></Slider>
            <Popup></Popup> */}
            <div className="topBanner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <h1>Welcome To The<br />Builders' Ecosystem </h1>
                            <p>Find Institute Jobs Courses and more</p>
                        </div>
                        <div className="col-lg-5">
                            <div className="loginPanel">
                                <Login></Login>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                        
                    </div>
                </div>
            </div>
            <div className="clearfix"></div>
            <div className="container">
            <PostJobSlider />
            </div>
            <CertificateCourse />
            <div className="container">
            <Resources />

            </div>
                    </>
    )
}

export default Home