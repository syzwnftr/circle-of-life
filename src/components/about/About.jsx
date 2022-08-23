import './About.css';

function About() {
    return (
        <div className='a'>
            <div className="a-text">
                <h3 className="a-desc">Cirlcle of life is a community of influencers, designers, teachers and just caring people.
                </h3>
            </div>

            <div className="a-box">
                 <p className='a-title'>Our Mission</p>
                 
                 <div className="a-col">
                    <p className="a-item">
                    Reduce waste, make the world around us cleaner, and give kids practical skills to work with.
                    </p>

                    <p className="a-item">
                    Unnecessary things will get a second life and children will have the opportunity to earn money and unleash their creative potential.
                    </p>
                 </div>
            </div>

            <div className="a-box">
                 <p className='a-title'>Organisations</p>

                 <div className="a-col">
                    <p className="a-item">
                        Pati Asuhan Kemas Kebangsaan
                    </p>

                    <p className="a-item">
                        All Colors Orphans
                    </p>

                    <p className="a-item">
                        Yayasan Anak Yatim Semporna
                    </p>

                    <p className="a-item">
                        Pertubuhan Kebajikan Masyarakat Sabah
                    </p>
                 </div>
            </div>
        </div>
    )
}

export default About;