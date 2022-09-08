import Menu from "./menu";
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-12 col-xl-6 col-lg-6 col-lg-6 col-sm-6 col-xs-12">
                    <h1>WRE</h1>
                </div>
                <div className="col-12 col-xl-6 col-lg-6 col-lg-6 col-sm-6 col-xs-12">
                   <Menu></Menu>
                </div>
            </div>
        </div>        
        </>
    )
}

export default Header