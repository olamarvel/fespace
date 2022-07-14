import { useCallback } from 'react'

import { Navigation, Pagination, Autoplay, } from 'swiper'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react/swiper-react.js'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Slides, ICONS, Qslides } from './'

import 'swiper/css'
import 'swiper/css/navigation'
import { loader } from '../container'

const _Header = ({ result }) => {
  return (
    <div className="w-full bg-white h-[75vh] min-h-[500px] max-h-[650px] relative  border-b-primary shadow">
      {' '}
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        // effect='fade'
        centeredSlides={true}
        autoplay={{ delay: 2000 }}
        className="w-full h-full z-0 "
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{ prevEl: null, nextEl: null }}
        breakpoints={{
          
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
            centeredSlides:true
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
            centeredSlides:true
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
            centeredSlides:true
          },
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((v, i) => {
          return (
            <SwiperSlide key={v.toString() + i * i}>
              <div className="flex items-center  h-full w-full">
                <Slides data={result[0]} />
              </div>
            </SwiperSlide>
          )
        })}
        <NavigationButton />
      </Swiper>
    </div>
  )
}

export const Header = loader(_Header, Qslides)

const NavigationButton = (params) => {
  const swiper = useSwiper()

  const handlePrev = useCallback(() => {
    if (!swiper) return
    swiper.slidePrev()
  }, [swiper])

  const handleNext = useCallback(() => {
    if (!swiper) return
    swiper.slideNext()
  }, [swiper])
  return (
    <>
      <FontAwesomeIcon
        icon={ICONS.faChevronLeft}
        onClick={handlePrev}
        className=" z-10 cursor-pointer absolute top-[50%] text-4xl -translate-y-1/2 text-dark hover:text-secondary shadow-md left-3"
      />
      <FontAwesomeIcon
        icon={ICONS.faChevronRight}
        onClick={handleNext}
        className=" z-10 cursor-pointer absolute top-[50%] text-4xl -translate-y-1/2 text-dark hover:text-secondary shadow-md right-3"
      />
    </>
  )
}
