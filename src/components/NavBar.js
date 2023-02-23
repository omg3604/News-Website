import './NavBar.css'
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return ( 
        <div>
            <nav className='fixed-top'>
                <input type="checkbox" id="check" />
                <label htmlFor="check" className="checkbtn">
                    <i className="fas fa-bars"></i>
                </label>
                <label className="logo">NewsApp</label>
                <ul>
                    <li><Link to="/General">General</Link></li>
                    <li><Link to="/Business">Business</Link></li>
                    <li><Link to="/Entertainment">Entertainment</Link></li>
                    <li><Link to="/Health">Health</Link></li>
                    <li><Link to="/Science">Science</Link></li>
                    <li><Link to="/Sports">Sports</Link></li>
                    <li><Link to="/Technology">Technology</Link></li>
                </ul>
            </nav>
        </div>
    )
}
export default NavBar;