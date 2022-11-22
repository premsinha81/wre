/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import './menu.css';

function Menu() {
    return (
        <ul>
            <li><a href="/about">CAREER</a></li>
            <li><a href="#">COMMUNITY</a></li>
            <li><a href="#">JOBS</a></li>
            <li><a href="#">RESOURCES</a></li>
            <li className="active"><a href="#">JOIN</a></li>
        </ul>
    )
}

export default Menu;