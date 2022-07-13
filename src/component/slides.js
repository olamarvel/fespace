import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSwiperSlide } from 'swiper/react'
import { urlFor, OverLay } from './'


// `*[_type == "slide"]{
//     title,
//     slug,
//     mainImage{
//       asset->{
//       _id,
//       url
//     }
//   }
// }`

const Slides = ({
  data: { title, slug, mainImage, description, publishedAt },
}) => {
  const swiperSlide = useSwiperSlide()
  const navigate = useNavigate()
  const src = swiperSlide.isActive
    ? urlFor(mainImage).width(250).url()
    : urlFor(mainImage).width(250).blur(10).url()
  description = description.slice(0, 100) + '....'
  const click = () => {
    navigate(`/post/${slug.current}`)
  }
  return (
    <div
      className={`w-full  ${
        swiperSlide.isActive ? ' h-4/5' : ' h-3/5'
      }  relative cursor-pointer`}
    >
      <img
        src={src}
        className="absolute top-0 left-0 w-full h-full object-cover rounded-lg border-2 swadow "
        alt={title}
      />
      <OverLay onClick={null} classes={'rounded-lg bg-opacity-30'}  />
      {swiperSlide.isActive && (
        <div className="z-10 absolute left-0 bottom-0 bg-white/40 w-4/5 rounded-r-lg p-3">
          <div className=''>
            <h2 className="">{title}</h2>
            <span className="span">{publishedAt}</span>
          </div>
          <p>{description}</p>
          <button className="btn" onClick={click}>Read more</button>
        </div>
      )}
    </div>
  )
}

export default Slides
