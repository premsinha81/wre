import Menu from "./menu";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ReactComponent as YourSvg } from './svg.svg';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <>
        <header>
        <div className="container">
            <div className="row">
                <div className="col-12 col-xl-6 col-lg-6 col-lg-6 col-sm-6 col-xs-12">
                <Link to="/"  >
                        <div className="svgLogo"><YourSvg /></div>
                  </Link>

                </div>
                <div className="col-12 col-xl-6 col-lg-6 col-lg-6 col-sm-6 col-xs-12">
                    <div className="text-right">
                        <Menu></Menu>
                    </div>
                </div>
                
            </div>
        </div>
        </header>    
        </>
    )
}

export default Header