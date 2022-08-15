// import pic from '../pictures/one.jpg'
import { PortableText } from '@portabletext/react'
import { useContext,  useState } from 'react'
import { useParams } from 'react-router-dom'
import { Client, urlFor } from '../client'
import { loader } from '../container'
import { USERCONTEXT } from '../contexts'
import { Q_F_Post, QCategoryRelated } from '../utils/query'
import { v4 as uuidv4 } from 'uuid'
import { Slider, Card } from '.'
import { Comments } from './Comments'
import { components } from './components'
  

const RelatedCategory =
  //  (category, ID) =>
  loader(
    ({ result }) => {
      console.log(result)
      return (
        <div className="w-full h-96 ">
          <Slider
            data={result}
            Slide={Card}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
                centeredSlides: true,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
                centeredSlides: true,
              },
            }}
          />
        </div>
      )
    },
    QCategoryRelated,
    false
  )

const _Post = ({ result, reload }) => {
  const [comment, setComment] = useState('')
  const [addingComment, setAddingComment] = useState(false)
  const [drop, setDrop] = useState(false)
  let {
    title,
    publishedAt,
    body,
    comments,
    category,
    mainImage,
    slug,
    _id: ID,
  } = result[0]
  const src = urlFor(mainImage).width(1000).height(500).url()
  const user = useContext(USERCONTEXT)
  const addComment = () => {
    if (comment) {
      setAddingComment(true)

      Client.patch(ID)
        .setIfMissing({ comments: [] })
        .insert('after', 'comments[-1]', [
          {
            comment,
            _key: uuidv4(),
            postedBy: { _type: 'postedBy', _ref: user.sub },
          },
        ])
        .commit()
        .then(() => {
          reload && reload((value) => value + 1)
          setComment('')
          setAddingComment(false)
        })
    }
  }
  const dropComment = () => {
    setDrop(true)
  }

  return (
    <section className="container mx-auto my-2  p-5 h-fit lg:grid lg:grid-cols-12 gap-4 ">
      <section className="col-span-9  ">
        <article>
          <div className="w-full overflow-hidden rounded-lg">
            <img
              src={src}
              alt={title}
              className=" w-full rounded-lg hover:scale-105 cursor-zoom-in"
            />
          </div>
          <div className="rounded-b-lg py-3  bg-white flex flex-col grow  ">
            <h2 className="text-2xl">{title}</h2>
            <div>
              <span className="span inline mr-8">{publishedAt}</span>
              <span className="span "> By Fespace </span>
            </div>
            <div className="">
              <PortableText value={body} components={components}/>
            </div>
          </div>
        </article>

        {/* related posts  */}
        <section className="my-6">
          <span className=' text-xl capitalize border-b-primary border-b-2 w-fit box-content ml-2 my-6 block'>Other Fun Reads</span>
          <RelatedCategory params={{ keyword: category, ID }} />
        </section>
        {/* related posts  */}
        <Comments
          user={user}
          comments={comments}
          comment={comment}
          setComment={setComment}
          addComment={addComment}
          addingComment={addingComment}
          slug={slug}
          drop={drop}
          dropComment={dropComment}
        />
      </section>
      <section className="col-span-3 bg-dark h-96 hidden lg:block"></section>
    </section>
  )
}

const Post = loader(_Post, Q_F_Post,true)

const PostwithSlug = () => {
  const { slug } = useParams()
  return (
    <>
      <Post params={{ slug }} />
    </>
  )
}

export default PostwithSlug
