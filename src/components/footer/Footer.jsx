import './Footer.css';
import WA from '../../img/whatsapp.png'; 
import FB from '../../img/fb.png'; 
import IG from '../../img/ig.png'; 

function Footer() {
    return (
        <div className='c'>
            <div className="c-wrapper">
                <div className="c-item">
                    <h3 className="c-title">Delivery Support</h3>

                    <div className="c-info">
                        <p className="c-desc">+7 495 018-37-45</p>
                        <a href="https://wa.me/600123456789?text=Hi!%20Welcome%20to%20Circle%20Of%20Life." className='c-link' target="_blank" without rel="noreferrer">
                            <span className='c-hide'>
                                Contact us on
                            </span>
                            <img src={WA} alt="" className="c-wa" />
                            WhatsApp
                        </a>
                    </div>
                </div>

                <div className="c-item">
                    <h3 className="c-title second">Contact us at social network</h3>

                    <div className="c-info medsoc">
                        <img src={FB} alt="" className="c-icon fb" />
                        <img src={IG} alt="" className="c-icon" />
                        <img src={IG} alt="" className="c-icon" />
                    </div>
                 </div> 
            </div>
        </div>
    )
}

export default Footer;