import React, { useEffect, useRef } from 'react';
import Masonry from 'react-masonry-css';
import gsap from 'gsap';

export default function Masonary({ images }) {
  const scroll = useRef(false);
  useEffect(() => {
    if (!scroll.current)
      return;
    const tween = gsap.timeline({
      repeat: -1,
      repeatDelay: 1,
      onComplete: () => {
      },
    });
    tween.to(scroll.current, {
      scrollTo: 'max',
      ease: 'none',
      duration: 30,
    });
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
      .play();
    return () => {
      tween.kill();
    };
  }, [scroll]);
  return (
    <div
      className="w-full bg-white h-full relative  border-b-primary shadow overflow-y-scroll scroll-hide"
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
  );
}
