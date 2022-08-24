import './Thing.css';
import Clothes from '../../img/clothes.png';
import Bag from '../../img/bag.png';
import Wardrobe from '../../img/wardrobe.png';
import Utensils from '../../img/utensils.png';

function Thing() {
    return (
        <div className='t'>
            <div className="t-wrapper">
                <h2 className="t-title">
                    What can be donated to Circle Of Life?
                </h2>

                <div className="t-item-wrapper">
                    <div className="t-item">
                        <img src={Clothes} alt="" className="t-img" />
                        <h4>Clothes and shoes</h4>
                        <p className="t-desc">which can be reused</p>
                    </div>

                    <div className="t-item">
                        <img src={Bag} alt="" className="t-img" />
                        <h4>Accessories</h4>
                        <p className="t-desc">bags, jewelry</p>
                    </div>

                    <div className="t-item">
                        <img src={Wardrobe} alt="" className="t-img" />
                        <h4>Furnitures</h4>
                        <p className="t-desc">tables, chairs, sofas</p>
                    </div>

                    <div className="t-item">
                        <img src={Utensils} alt="" className="t-img" />
                        <h4>Kitchen utensils</h4>
                        <p className="t-desc">suitable for use</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Thing;