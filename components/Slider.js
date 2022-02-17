import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper core and required modules
import SwiperCore, { Navigation, Autoplay } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation]);
SwiperCore.use([Autoplay]);

const Slider = () => {
    return (
        <div className="h-lgvh">
        <Swiper autoplay={{ delay: 3000 }} navigation={true} className="h-full mySwiper color-black">
          <SwiperSlide><img src="https://d33wubrfki0l68.cloudfront.net/images/70264c2126d1411294afaf6ccece5f1bb7fc61aa/hero.jpg" className="h-lgvh w-full object-cover"/></SwiperSlide>
          <SwiperSlide><img src="https://d33wubrfki0l68.cloudfront.net/3b6e3434d1be7a07f99db93d9419485d449b3e5a/b0db7/images/wrapping-paper.jpg" className="h-lgvh w-full object-cover"/>Slide 2</SwiperSlide>
          <SwiperSlide><img src="https://d33wubrfki0l68.cloudfront.net/images/cbc5c426c22cb4cdb5ba77c7571fe9e5b548fe0f/banner.jpg" className="h-lgvh w-full object-cover"/>Slide 3</SwiperSlide>
          <SwiperSlide><img src="https://d33wubrfki0l68.cloudfront.net/98a0825bdc31146e4ca3d7ccb599732f48e55aba/42934/images/rightleft1.jpg" className="h-lgvh w-full object-cover object-top"/>Slide 4</SwiperSlide>
      </Swiper>
      </div>
    )
};

export default Slider;
