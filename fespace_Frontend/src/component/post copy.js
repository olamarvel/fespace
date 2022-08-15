// import pic from '../pictures/one.jpg'
import { PortableText } from '@portabletext/react'
import { useParams } from 'react-router-dom'
import { urlFor } from '../client'
import { loader } from '../container'
import { Q_F_Post } from '../utils/query'


// const addComment = () => {
//     if (comment) {
//       setAddingComment(true);

//       client
//         .patch(pinId)
//         .setIfMissing({ comments: [] })
//         .insert('after', 'comments[-1]', [{ comment, _key: uuidv4(), postedBy: { _type: 'postedBy', _ref: user._id } }])
//         .commit()
//         .then(() => {
//           fetchPinDetails();
//           setComment('');
//           setAddingComment(false);
//         });
//     }
//   };

// title,
//   publishedAt,
//   body,
//   slug,
//   mainImage{
//   asset->{_id,
//   url}
//   }

function _Post({ result }) {
  let { title, publishedAt, body, comment, mainImage } = result[0]
  const src = urlFor(mainImage).width(1000).height(500).url()
  return (
    )
}
  
  
  

const Post = loader(_Post, Q_F_Post)

const PostwithSlug = () => {
  const { slug } = useParams()
  return (
    <>
      <Post params={{ slug }} />
    </>
  )
}

export default PostwithSlug
