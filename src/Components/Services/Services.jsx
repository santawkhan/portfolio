import './Services.css';
import heartimoji from '../../img/heartemoji.png';
import hearti from '../../img/heartemoji.png';
import Card from '../Card/Card';
import Resume from './rakibul islams cover letter.pdf'

const Services = () => {
    return (
        <div className="services" id='About'>

            {/* left side  */}
            <div className="awesome">
                <span>About </span>
                <span title='santaw'>Me  </span>
                <span>I am a passionate MERN Developer with expertise  <br />in HTML, CSS, Bootstrap, Tailwind CSS, and various frameworks. <br /> As a junior MERN Developer, I have a strong grasp of Stripe, JWT, Node.js, <br /> Express.js, MongoDB, and other robust tools.
                </span>
                <a href={Resume} download ><button className='button s-button'>Download CV</button></a>

                <div className='blur s-blur' style={{ background: "#ABF1FF94" }}></div>
            </div>

            {/* right side  */}
            <div className="cards">
                <div style={{ left: '14rem', }}>
                    <Card
                        emoji={heartimoji}
                        heading={'TECHNICAL SKILL'}
                        detail={"HTML5,CSS3,JAVASCRIPT,REACT"}
                    />
                </div>
                <div style={{ top: "12rem", left: "-4rem" }}>
                    <Card
                        emoji={heartimoji}
                        heading={'  EXPERIENCE'}
                        detail={"1 YEAR"}>

                    </Card>
                </div>
                <div style={{ top: "19rem", left: "12rem" }}>
                    <Card
                        emoji={heartimoji}
                        heading={'PROJECTS'}
                        detail={"20+ PROJECTS "}>

                    </Card>
                </div>
                <div className='blur s-blur2' style={{ background: "var(--purple)" }}></div>
            </div>
        </div>
    );
};

export default Services;