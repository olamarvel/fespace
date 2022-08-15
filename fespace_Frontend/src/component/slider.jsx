import { useCallback } from 'react'
import { Navigation, Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react/swiper-react.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ICONS } from './'

import 'swiper/css'
import 'swiper/css/navigation'

const NavigationButton = () => {
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
        className="active:bg-white bg-transparent rounded-full w-6 h-6 p-3 z-10 cursor-pointer absolute top-[50%] text-xl -translate-y-1/2 text-dark hover:text-secondary md:shadow-card md:bg-white left-3"
      />
      <FontAwesomeIcon
        icon={ICONS.faChevronRight}
        onClick={handleNext}
        className="active:bg-white bg-transparent rounded-full w-6 h-6 p-3 z-10 cursor-pointer absolute top-[50%] text-xl -translate-y-1/2 text-dark hover:text-secondary md:shadow-card md:bg-white right-3"
      />
    </>
  )
}

export default function Sliders({
  data,
  Slide,
  breakpoints = {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
      centeredSlides: true,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
      centeredSlides: true,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
      centeredSlides: true,
    },
  },
  development = true,
  autoplay={delay:2000},
  play=true,
  loop= true

}) {
  let spreaded =
    typeof data[0] === 'object' && !Array.isArray(data[0]) && data[0] !== null
      ? data[0]
      : {};
      let modules = [Navigation, Pagination]
      play && modules.push(Autoplay)
  return (
    <>
      {Slide ? (
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          loop={loop}
          centeredSlides={true}
          className="w-full h-full z-0 "
          // autoplay={autoplay ? autoplay : undefined}
          autoplay={autoplay}
          modules={modules}
          navigation={{ prevEl: null, nextEl: null }}
          breakpoints={breakpoints}
        >
          { development ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((v, i) => {
            return (
              <SwiperSlide key={'' + i * i}>
                <div className="flex items-center justify-center  h-full w-full ">
                  <Slide data={data[0]} {...spreaded} />
                </div>
              </SwiperSlide>
            )
          }):data.map((v, i) => {
            return (
              <SwiperSlide key={'' + i * i + v?.id}>
                <div className="flex items-center justify-center  h-full w-full ">
                  <Slide data={v} {...spreaded} />
                </div>
              </SwiperSlide>
            )
          })}
          <NavigationButton />
        </Swiper>
      ):<></>}
    </>
  )
}
