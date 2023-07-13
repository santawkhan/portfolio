import React from 'react';
import './Portfolio.css';
import project1 from '../../img/Screenshot 2023-07-07 193501.png';
import projects2 from '../../img/Screenshot 2023-07-07 201217.png';
import projects3 from '../../img/Screenshot 2023-07-07 201356.png';

const Portfolio = () => {
    return (
        <div id='Projects'>
            <div className='awesome'><span>My</span> <span>Projects</span></div>
            <div className='pro'>
                <div> <img src={project1} style={{ height: '400px' }} alt="" />
                    <div style={{ display: 'flex', gap: '1rem' }}>  <p><a href="https://photography-80314.web.app/"> View live site</a></p> <p>Code Link</p></div>
                </div>
                <div> <img src={projects2} style={{ height: '400px' }} alt="" />
                    <div style={{ display: 'flex', gap: '1rem' }}>  <p> <a href="https://doll-house-92d4f.web.app/"> View live site</a></p> <p>Code Link</p></div>
                </div>
                <div> <img src={projects3} style={{ height: '400px' }} alt="" />
                    <div style={{ display: 'flex', gap: '1rem' }}>  <p> <a href="https://chef-website-82440.web.app/">View live site</a> </p> <p>Code Link</p></div>
                </div>

            </div>
        </div>
    );
};

export default Portfolio;