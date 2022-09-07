import './Hero.css';
import Twitter from '../../img/twitt.png';
import LI from '../../img/linkedin.png';
import IG from '../../img/ig.png';
import hero from '../../img/hero.gif';
import WA from '../../img/whatsapp.png';

function Hero() {
    return (
        <div className='h'>
            <div className="h-header">
                <h1 className='h-logo'>cirle of life.</h1>
                
                <div className="h-circle-wrapper">
                    <div className="h-circle hide">
                        <img src={WA} alt="" className='h-icon' />
                    </div>
                    <p className='h-telno hide'>
                        +7 495018-37-45
                    </p>
                    <div className="h-circle">
                        <img src={Twitter} alt="" className='h-icon' />
                    </div>
                    <div className="h-circle">
                        <img src={IG} alt="" className='h-icon ig' />
                    </div>
                    <div className="h-circle hide">
                        <img src={LI} alt="" className='h-icon' />
                    </div>
                </div>
            </div>

            <div className="h-text">
                <h2 className="h-desc">
                    <span className='h-desc-content'>Give away the things you</span>
                    <span className='h-desc-content content-second'>don’t need anymore and </span>
                    <span className='h-desc-content content-third'>start the circle of life</span>
                </h2>
                <button className="h-btn">Start the circle</button>
            </div>

            <div className="h-img-wrapper">
                <img src={hero} alt="" className="h-img" />
            </div>
        </div>
    )
}

export default Hero;