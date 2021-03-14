import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.min.css'

SwiperCore.use([Navigation, Pagination, Autoplay])

export const Slides: FC<{}> = ({}): JSX.Element => {
  return (
    <div>
      <Swiper
        className='animate-pulse -mx-4 my-2'
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{}}
        pagination={{ type: 'bullets', clickable: true, dynamicBullets: true, dynamicMainBullets: 3 }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
      >
        <SwiperSlide>
          <div className='h-56 bg-gray-200'></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='h-56 bg-gray-200'></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='h-56 bg-gray-200'></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='h-56 bg-gray-200'></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='h-56 bg-gray-200'></div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export const Skeleton: FC<{}> = ({}): JSX.Element => {
  return (
    <Swiper
      className='animate-pulse -mx-4 my-2'
      loop={true}
      spaceBetween={50}
      slidesPerView={1}
      navigation={{}}
      pagination={{ type: 'bullets', clickable: true, dynamicBullets: true, dynamicMainBullets: 3 }}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
    >
      <SwiperSlide>
        <div className='h-56 bg-gray-200'></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='h-56 bg-gray-200'></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='h-56 bg-gray-200'></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='h-56 bg-gray-200'></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='h-56 bg-gray-200'></div>
      </SwiperSlide>
    </Swiper>
  )
}
