import Header from "./common/header";
import Footer from "./common/footer";
import Slider from "./slider";
import Leftpanel from "./leftpanel";
import RightPanel from "./rightpanel";

function Home() {
    return (
        <>
            <Header></Header>
            <Slider></Slider>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-xl-3 col-lg-3 col-md-3 col-xs-12">
                        <Leftpanel></Leftpanel>
                    </div>
                    <div className="col-12 col-xl-9 col-lg-9 col-md-9 col-xs-12">
                        <RightPanel></RightPanel>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Home