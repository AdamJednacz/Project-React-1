// import React from 'react';
//
// import img1 from '../../assets/img1.jpeg';
// import img2 from '../../assets/img2.jpg';
// import img3 from '../../assets/img3.jpg';
// import img4 from '../../assets/img4.jpeg';
// import img5 from '../../assets/img5.jpg';
// import img6 from '../../assets/img6.jpg';
// import { Swiper, SwiperSlide } from 'swiper/react';
//
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
//
// import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
//
// const images = [img1, img2, img3, img4, img5, img6];
//
// const MainSlider = () => {
//
//     return (
//         <div className="container2">
//
//             <Swiper
//                 effect={'coverflow'}
//                 grabCursor={true}
//                 centeredSlides={true}
//                 loop={true}
//                 slidesPerView={'auto'}
//                 coverflowEffect={{
//                     rotate: 0,
//                     stretch: 0,
//                     depth: 100,
//                     modifier: 2.5,
//                 }}
//                 pagination={{ el: '.swiper-pagination', clickable: true }}
//                 navigation={{
//                     nextEl: '.swiper-button-next',
//                     prevEl: '.swiper-button-prev',
//                     clickable: true,
//                 }}
//                 modules={[EffectCoverflow, Pagination, Navigation]}
//                 className="swiper_container"
//             >
//                 <SwiperSlide>
//                     <img src={img1} alt="slide_image" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src={img2} alt="slide_image" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src={img3} alt="slide_image" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src={img4} alt="slide_image" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src={img5} alt="slide_image" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src={img6} alt="slide_image" />
//                 </SwiperSlide>
//
//
//             </Swiper>
//         </div>
//     );
// }
// export default  MainSlider;