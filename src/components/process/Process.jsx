import './Process.css';
import Take from '../../img/take.gif'
import Send from '../../img/send.gif'
import Improve from '../../img/improve.gif'

function Process() {
    return (
        <div className='p'>
            <div className="p-title-wrapper">
                <h2 className="p-title">We start</h2>
                <h2 className="p-title">the Circle Of Life</h2>
            </div>

            <div className="p-box">
                <div className="p-img-wrapper">
                    <img src={Take} alt="" className="p-img" />
                </div> 

                <div className="p-text">
                    <p className="p-sub">At first</p>
                    <h3 className="p-heading">We Take and Sort</h3>
                    <p className="p-desc">The things you don't need and put it to the warehouse. Things in good condition will go to our workshop for new unique, designer items to be created.</p>
                </div>
            </div>

            <div className="p-box">
                <div className="p-img-wrapper">
                    <img src={Improve} alt="" className="p-img" />
                </div> 

                <div className="p-text">
                    <p className="p-sub">After that</p>
                    <h3 className="p-heading">We Improve or Redesign</h3>
                    <p className="p-desc">We attract designers worldwide to create new fashionable clothes and interior items. Let's give thing a second life and turn them into a piece of art!</p>
                </div>
            </div>

            <div className="p-box">
                <div className="p-img-wrapper">
                    <img src={Send} alt="" className="p-img" />
                </div> 

                <div className="p-text">
                    <p className="p-sub">And finally</p>
                    <h3 className="p-heading">We Send to The Right Place</h3>
                    <p className="p-desc"><span className='p-bold'>Children</span> will be able to unleash their creativity, master practical skills and learn how to earn money on their own.</p>
                    <p className="p-desc"><span className='p-bold'>Adults</span> will acquire things that will not only be unique, but will also carry a philosophy that combines sustainable zero waste, circular economy and humanity.</p>
                    <p className="p-desc"><span className='p-bold'>Things</span> will find a second life and become a piece of art and fashion.</p>
                </div>
            </div>
        </div>
    )
}

export default Process;