
import { useNavigate } from 'react-router-dom'
import { urlFor } from './'

const Card = ({ image, title, publishedAt, body, slug }) => {
  const navigate = useNavigate()
  const src = image && urlFor(image).height(300).url()
  //   : urlFor(image).width(250).blur(10).url()F
  const click = () => {
    navigate(`/post/${slug.current}`)
  } 
  return (
    
      <div className="shadow-lg h-full flex flex-col ">
        <img src={src} alt={title} className="w-full h-72  rounded-lg" />
        <div className="rounded-b-lg p-3  bg-white flex flex-col justify-between grow  ">
          <h2 className="">{title}</h2>
          <span className="span block">{publishedAt}</span>
          
          <button className="btn my-2" onClick={click}>
            Read more
          </button>
        </div>
      </div>
    
  )
}

export default Card
