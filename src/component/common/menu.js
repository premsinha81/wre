import { Link } from "react-router-dom";

function Menu() {
    return (
        <ul>
            <li><a href="#">CAREER</a></li>
            <li><a href="#">COMMUNITY</a></li>
            <li><a href="#">JOBS</a></li>
            <li><a href="#">RESOURCES</a></li>
            <li className="active"><a href="#">JOIN</a></li>
        </ul>
    )
}

export default Menu;