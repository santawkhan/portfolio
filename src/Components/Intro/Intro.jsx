import React from 'react';
import './Intro.css';
import Linkedin from '../../img/linkedin.png'
import Github from '../../img/github.png'
import Instragram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/291651982_2228333847317468_4846676798308119590_n.jpg'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesImj from '../../img/glasses.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv';



const Intro = () => {

    return (

        <div className="intro" id='Navbar'>
            <div className="i-left">
                <div className="i-name">
                    <span>Hy! I am</span>
                    <span>Shanto Khan</span>
                    <span className='i'> Welcome to my portfolio website! I specialize in both frontend and backend development. Take a look at my projects and explore the world of web development through my eyes.
                    </span>
                </div>
                <button className="button i-button">Hire me</button>
                <div className="i-icons">
                    <img src={Linkedin} alt="" />
                    <img src={Github} alt="" />
                    <img src={Instragram} alt="" />
                </div>

            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img className='image' src={boy} style={{ width: '250px ', height: '350px', }} alt="" />
                <img

                    src={glassesImj} alt="" />
                <div style={{ top: '-4%', left: '68%' }}>
                    <FloatingDiv image={Crown} txt1='Web' txt2='Developer'></FloatingDiv>
                </div>
                <div style={{ top: '18rem', left: '0rem' }}>
                    <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award'></FloatingDiv>
                </div>

                {/* blur div  */}
                <div className='blur' style={{ background: "rgb(238 210 255)" }}></div>
                <div className='blur' style={{ background: '#C1F5FF', top: '17rem', width: '21rem', height: '11rem', left: '-9rem' }}></div>
            </div>
        </div>

    );
};

export default Intro;