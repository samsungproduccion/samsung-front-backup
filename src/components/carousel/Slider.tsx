import React, { FC } from 'react';
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Slide from './Slide';



const Carousel:FC = ({children}) => {
    SwiperCore.use([Autoplay])
    return (
        <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            autoplay={{delay:6000}}
            speed={800}
        >
            {React.Children.map(children,(child, i)=>(
                <SwiperSlide key={i}>
                    <Slide>
                        {child}
                    </Slide>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Carousel;
