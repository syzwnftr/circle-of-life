import './Footer.css';
import WA from '../../img/whatsapp.png'; 
import FB from '../../img/fb.png'; 
import IG from '../../img/ig.png'; 

function Footer() {
    return (
        <div className='c'>
            <div className="c-item">
                <h3 className="c-title">Delivery Support</h3>

                <div className="c-info">
                    <p className="c-desc">+7 495 018-37-45</p>
                    <a href="https://wa.me/600123456789?text=Hi!%20Welcome%20to%20Circle%20Of%20Life." className='c-link' target="_blank" without rel="noreferrer">
                        Contact us on 
                        <img src={WA} alt="" className="c-icon" />
                        WhatsApp
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;