import React, { useEffect, useRef } from 'react'
import Masonry from 'react-masonry-css'
import TypeIt from 'typeit-react'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/all'
gsap.registerPlugin(ScrollToPlugin)
const Header = ({ images }) => {
  const scroll = useRef(false)
  useEffect(() => {
    if (!scroll.current) return
    console.log('tweening')
    // var tl = gsap.timeline({
    //   repeat: 3,
    //   repeatDelay: 1,
    //   onComplete: () => {
    //     console.log('done')
    //   },
    // })

    const tween = gsap.timeline({

      repeat: -1,
      repeatDelay: 1,
      onComplete: () => {
        console.log('done')
      },
    })
    tween.to(scroll.current, {
      scrollTo: 'max',
      ease: 'none',
      duration: 30,
    })
    tween
      .to(
        scroll.current,
        {
          scrollTo: { y: 0 },
          ease: 'none',
          duration: 30,
        },
        '>'
      )
      .play()
    return () => {
      tween.kill()
    }
  }, [scroll])

  return (
    <div className="relative">
      <div
        className="w-full bg-white h-[75vh] min-h-[500px] max-h-[650px] relative  border-b-primary shadow overflow-y-scroll scroll-hide"
        ref={scroll}
      >
        {images && (
          <Masonry
            breakpointCols={{
              default: 4,
              2400: 6,
              1200: 4,
              700: 2,
              500: 1,
            }}
            className="flex -ml-2 w-[auto] "
            columnClassName="pl-2 top-0 left-0"
          >
            {images}
          </Masonry>
        )}
      </div>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-dark/30 flex justify-center items-center font-Lora">
        <span className="text-4xl md:text-8xl text-white">
          I am{' '}
          <TypeIt
            options={{
              // speed: 10,
              waitUntilVisible: true,
              loop: true,
            }}
            getBeforeInit={(instance) => {
              setText(instance)
              return instance
            }}
          />
        </span>
      </div>
    </div>
  )
}

export default Header

function setText(instance) {
  instance
    .type('a')
    .pause(233)
    .type(' ')
    .pause(408)
    .type('g')
    .pause(189)
    .type('i')
    .pause(142)
    .type('r')
    .pause(140)
    .type('l')
    .pause(2469)
    .delete(1)
    .pause(232)
    .delete(1)
    .pause(199)
    .delete(1)
    .pause(209)
    .delete(1)
    .pause(202)
    .delete(1)
    .pause(226)
    .delete(1)
    .pause(741)
    .type('a')
    .pause(137)
    .type(' ')
    .pause(229)
    .type('l')
    .pause(231)
    .type('a')
    .pause(610)
    .type('d')
    .pause(134)
    .type('y')
    .pause(2346)
    .delete(1)
    .pause(239)
    .delete(1)
    .pause(212)
    .delete(1)
    .pause(199)
    .delete(1)
    .pause(202)
    .delete(1)
    .pause(222)
    .delete(1)
    .pause(652)
    .type('a')
    .pause(242)
    .type(' ')
    .pause(541)
    .type('w')
    .pause(209)
    .type('o')
    .pause(181)
    .type('m')
    .pause(186)
    .type('a')
    .pause(265)
    .type('n')
    .pause(2509)
    .delete(1)
    .pause(199)
    .delete(1)
    .pause(185)
    .delete(1)
    .pause(178)
    .delete(1)
    .pause(191)
    .delete(1)
    .pause(190)
    .delete(1)
    .pause(201)
    .delete(1)
    .pause(911)
    .type('a')
    .pause(212)
    .type(' ')
    .pause(971)
    .type('m')
    .pause(122)
    .type('o')
    .pause(350)
    .type('t')
    .pause(161)
    .type('h')
    .pause(170)
    .type('e')
    .pause(142)
    .type('r')
    .pause(3009)
    .delete(1)
    .pause(200)
    .delete(1)
    .pause(199)
    .delete(1)
    .pause(201)
    .delete(1)
    .pause(210)
    .delete(1)
    .pause(211)
    .delete(1)
    .pause(192)
    .delete(1)
    .pause(203)
    .delete(1)
    .pause(1190)
    .type('a')
    .pause(573)
    .type(' ')
    .pause(642)
    .type('f')
    .pause(150)
    .type('e')
    .pause(834)
    .delete(1)
    .pause(284)
    .delete(1)
    .pause(1381)
    .type('F')
    .pause(130)
    .type('E')
    .pause(210)
    .type('M')
    .pause(171)
    .type('A')
    .pause(121)
    .type('L')
    .pause(220)
    .type('E')
    .pause(4766)
    .type('!')
    .pause(330)
    .type('!')
    .pause(311)
    .type('!')
    .pause(301)
    .type('!')
    .pause(1686)
    .delete(1)
    .pause(354)
    .delete(1)
    .pause(57)
    .delete(1)
    .pause(182)
    .delete(1)
    .pause(179)
    .delete(1)
    .pause(182)
    .delete(1)
    .pause(160)
    .delete(1)
    .pause(181)
    .delete(1)
    .pause(192)
    .delete(1)
    .pause(178)
    .delete(1)
    .pause(214)
    .delete(1)
    .pause(183)
    .delete(1)
}
