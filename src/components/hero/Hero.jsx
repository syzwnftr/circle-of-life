import './Hero.css';
import Twitter from '../../img/twitter.png';
import Chat from '../../img/chat.png';
import hero from '../../img/hero.gif';

function Hero() {
    return (
        <div className='h'>
            <div className="h-header">
                <h1 className='h-logo'>cirle of life.</h1>
                <div className="h-circle-wrapper">
                    <p className="h-telno hide">+7 495018-37-45</p>
                    <div className="h-circle">
                        <img src={Twitter} alt="" className='h-icon' />
                    </div>
                    <div className="h-circle">
                        <img src={Chat} alt="" className='h-icon' />
                    </div>
                    <div className="h-circle hide">
                        <img src={Chat} alt="" className='h-icon' />
                    </div>
                </div>
            </div>

            <div className="h-text">
                <h2 className="h-desc">Give away the things you don’t need anymore and start the circle of life</h2>
            </div>

            <div className="h-img-wrapper">
                <img src={hero} alt="" className="h-img" />
            </div>
        </div>
    )
}

export default Hero;