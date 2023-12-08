
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



const BannerSlider = (props) => {

    console.log(props);
  return (
    <>
    <Swiper
        slidesPerView={1}
        spaceBetween={0}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiperBanner"
    >
        {props.slides.map((item,i) => (
            <SwiperSlide 
                key={i}
                // className={styles.slide} 
                style={{backgroundImage: `url(${item.image})`,width:'100%','height':"90vh",'objectFit':'contain'}}>
            </SwiperSlide>
        ))}
    </Swiper>
    </>
  )
}

export default BannerSlider