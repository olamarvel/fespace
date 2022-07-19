// import pic from '../pictures/one.jpg'

const post = {
  heading: 'this a teasing post by olamrvel react rocks trust me  i know ',
  excrpt:
    'erevy one must have heard about the latest buss about react and it son nexjs well i here to tell you what if i tell you thgat  threer is a way forypu to learn react with no strees here at femela we believe strouly in the female child it role in the tech world...',
  createdOn: 'Saturday 2 July 2022',
  // featrueImg: pic,
  link:'read more'
}
const Post = () => {
  return (
    <div className=' w-10/12 max-w-96 mx-auto my-2 shadow-xl p-5 h-fit'>
      {/* <img alt={post.heading} src={post.featrueImg}  className='object-cover rounded-lg h- '/> */}
      <h1 className=''>{post.heading}</h1>
      <p className=''>{post.excrpt}</p>
      <span className=''>{post.createdOn} </span>
      <button className='btn'>{post.link}</button>
    </div>
  )
}

export default Post
