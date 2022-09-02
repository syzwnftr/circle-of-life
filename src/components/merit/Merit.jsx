import './Merit.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import Merit1 from '../../img/merit/merit1.jpg';
import Merit2 from '../../img/merit/merit2.jpg';
import Merit3 from '../../img/merit/merit3.jpeg';
import Merit4 from '../../img/merit/merit4.jpg';
import Merit5 from '../../img/merit/merit5.jpg';
import Merit6 from '../../img/merit/merit6.jpg';

function Merit() {
  return (
    <div className='m'>
        <h1 className='m-title'>All this is your merit</h1>
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            pagination={{
            clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
        >
        <SwiperSlide>
            <img src={Merit1} alt="" className="m-img" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Merit4} alt="" className="m-img" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Merit3} alt="" className="m-img" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Merit2} alt="" className="m-img" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Merit5} alt="" className="m-img" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Merit6} alt="" className="m-img" />
        </SwiperSlide>
     
      </Swiper>
    </div>
  )
}

export default Merit;