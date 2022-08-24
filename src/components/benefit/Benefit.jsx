import './Benefit.css';
import Medal from '../../img/medal.png'

function Benefit() {
    return (
        <div className='b'>
            <div className="b-wrapper">
                <h2 className="b-title">Why is it useful?</h2>

                <div className="b-item-wrapper">
                    <div className="b-item">
                        <div className="b-icon-wrapper">
                            <img src={Medal} alt="" className="b-icon" />
                        </div>
                        
                        <p className="b-desc">
                        We sell new and recycled items to cover costs 
                        </p>
                    </div>

                    <div className="b-item">
                        <div className="b-icon-wrapper">
                            <img src={Medal} alt="" className="b-icon" />
                        </div>
                        
                        <p className="b-desc">
                        We train and involve children from uprotected segmens of the population (mainly from orphanages) in our work   
                        </p>
                    </div>

                    <div className="b-item">
                        <div className="b-icon-wrapper">
                            <img src={Medal} alt="" className="b-icon" />
                        </div>
                        
                        <p className="b-desc">
                        Craftsmen teach children to draw, cook, sculpt from clay and weave macramé  
                        </p>
                    </div>

                    <div className="b-item">
                        <div className="b-icon-wrapper">
                            <img src={Medal} alt="" className="b-icon" />
                        </div>
                        
                        <p className="b-desc">
                        It affects the general culture of the island and its ecology  
                        </p>
                    </div>

                    <div className="b-item">
                        <div className="b-icon-wrapper">
                            <img src={Medal} alt="" className="b-icon" />
                        </div>
                        
                        <p className="b-desc">
                        This is how we together improve the standard of living and education of every child  
                        </p>
                    </div>

                    <div className="b-item">
                        <div className="b-icon-wrapper">
                            <img src={Medal} alt="" className="b-icon" />
                        </div>
                        
                        <p className="b-desc">
                        Children join the world of finance, they form a work-money connection  
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Benefit;

