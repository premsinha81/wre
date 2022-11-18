/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import './menu.css';

function Menu() {
    return (
        <ul>
            <li> <Link to="Career"  >CAREER</Link></li>
            <li><Link to="/"  >COMMUNITY</Link></li>
            <li><Link to="/"  >JOBS</Link></li>
            <li><Link to="/"  >RESOURCES</Link></li>
            <li className="active"><Link to="/"  >JOIN</Link></li>
        </ul>
    )
}

export default Menu;