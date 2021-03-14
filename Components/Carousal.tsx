import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

export const Slides: FC = (): JSX.Element => {
  return (
    <div>
      <Swiper spaceBetween={50} slidesPerView={1}></Swiper>
    </div>
  )
}

export const Skeleton: FC = (): JSX.Element => {
  return (
    <div>
      <Swiper spaceBetween={50} slidesPerView={1}>
        <SwiperSlide>1</SwiperSlide>
        <SwiperSlide>2</SwiperSlide>
        <SwiperSlide>3</SwiperSlide>
        <SwiperSlide>4</SwiperSlide>
        <SwiperSlide>5</SwiperSlide>
      </Swiper>
    </div>
  )
}
