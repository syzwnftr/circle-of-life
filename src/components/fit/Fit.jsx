import './Fit.css';
import Applebadge from '../../img/applebadge.png';
import Googlebadge from '../../img/googlebadge.png';
import Mapicon from '../../img/mapicon.png';
import Greenapp from '../../img/greenapp.png';
import Kotak from '../../img/kotak.png';


function Fit() {
    return(
        <div className='f'>
            <div className="f-wrapper">
                <div className="f-text">
                    <div className="f-how-wrapper">
                        <h2 className='f-how'>
                            How to prepare and where to send?
                        </h2>
                    </div>

                    <div className="f-wash-wrapper">
                        <p className="f-wash">
                            Wash or put things in order
                        </p>

                        <p className="f-wash-small">
                            This will significantly reduce overhead costs, which mean we can spend more time on the development of the children from orphanages
                        </p>
                    </div>
                </div>

                <div className="f-shape"></div>

                <h2 className="f-title">All fit in one bag?</h2>

                <div className="f-btn-wrapper">
                    <button className="f-btn">Yes</button>
                    <button className="f-btn no">No</button>
                </div>

                <div className="f-item-box">
                    <div className="f-item-wrapper">
                        <div className="f-item">
                            <img src={Greenapp} alt="" className="f-img" />

                            <div className="f-info">
                                <div className="f-info-wrapper">
                                    <div className="f-circle">
                                        <p className="f-num">1</p>
                                    </div>
                                    <h3 className="f-subhead">
                                        Download the taxi application
                                    </h3>
                                </div>

                                <div className="f-badge-wrapper">
                                    <a href="https://play.google.com" target="_blank" rel="noreferrer">
                                        <img src={Applebadge} alt="" className="f-badge apple" />
                                    </a>

                                    <a href="https://play.google.com/" target="_blank" rel="noreferrer">
                                        <img src={Googlebadge} alt="" className="f-badge" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="f-item">
                            <img src={Mapicon} alt="" className="f-img mapicon" />

                            <div className="f-info">
                                <div className="f-info-wrapper">
                                    <div className="f-circle">
                                        <p className="f-num">2</p>
                                    </div>
                                    <h3 className="f-subhead">
                                        Indicate the warehouse address
                                    </h3>
                                </div>

                                <div className="f-badge-wrapper">
                                    <p className="f-desc">
                                        No 23, Jalan Gudang Sejahtera, Taman Gudang Sejahtera, 21000 Senai, Johor
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <img src={Kotak} alt="" className="f-box" />
                </div>  
            </div>
        </div>
    )
}

export default Fit;