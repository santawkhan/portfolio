import React from 'react';
import './Works.css';
import upwork from '../../img/express-js.png';
import fiver from '../../img/atom.png';
import amazon from '../../img/database.png';
import shopify from '../../img/coding.png';
import facebook from '../../img/node-js.png';

const Works = () => {
    return (
        <div className='works' id='Skills'>
            <div className="awesome">
                <span>My Skills</span>
                <span>Brands & Clients</span>
                <span>I love what I do and hope that you enjoy <br /> the site that I've made for you!

                </span>

                <button className='button s-button'>Hire Me</button>
                <div className='blur s-blur' style={{ background: "#ABF1FF94" }}></div>
            </div>
            {/* right side  */}
            <div className='w-right'>
                <div className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={upwork} style={{ width: '200px' }} alt="" />

                    </div>
                    <div className="w-secCircle">
                        <img src={fiver} style={{ width: '200px' }} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={shopify} style={{ width: '200px' }} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={amazon} style={{ width: '200px' }} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={facebook} style={{ width: '200px' }} alt="" />
                    </div>

                </div>
                <div className='w-backCircle blueCircle'></div>
                <div className='w-backCircle yellowCircle'></div>
            </div>
        </div>
    );
};

export default Works;