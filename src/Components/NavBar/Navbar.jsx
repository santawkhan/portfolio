import React from 'react';
import './Navbar.css'
import Toggle from '../Toggle/Toggle';
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Shanto</div>
                <Toggle />
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{ listStyleType: 'none' }}>
                        <Link spy={true} to='Navbar' smooth={true}><li>Home</li></Link>
                        <Link spy={true} to='About' smooth={true}><li>About</li></Link>
                        <Link spy={true} to='Skills' smooth={true}><li>Skills</li></Link>
                        <Link spy={true} to='Projects' smooth={true} ><li>Projects</li></Link>





                    </ul>
                </div>
                <button className='button n-button'>
                    <Link spy={true} to='contact' smooth={true} > Contact</Link>

                </button>
            </div>
        </div>
    );
};

export default Navbar;