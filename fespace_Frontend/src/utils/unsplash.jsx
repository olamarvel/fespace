const loc =
  // 'https://api.unsplash.com/search/photos/?client_id=oJHag6kJXnkoEiV5ut6RW0Ui2StHk49167jcTOZei_g&count=30&query=female&'
  'https://api.unsplash.com/photos/random/?client_id=oJHag6kJXnkoEiV5ut6RW0Ui2StHk49167jcTOZei_g&count=30&query=female'

const Response = importImages()
export const unSplash = Response.then((Url) => {
  
  return Promise.resolve(
    Url.map((url,i) => {
      return (
        <img
          src={url}
          alt={url}
          style={{
            
            width: '100%',
            objectFit: 'cover',
          }}
          key={`${url}${i}`}
          loading="lazy"
          className='mt-1 rounded object-cover'
        />
      )
    }),
  )
})

export default Response

async function importImages() {
  // debugger
  try {
    let res = await fetch(loc)
    if (res.ok) {
      const ImageasObject = await res.json()
      const Map = (img) => img.urls.raw + '&w=200&h=200'
      const ImageasUrl = [...ImageasObject].map(Map)
      
      return Promise.resolve(ImageasUrl)
    } else throw new Error('the given respons did not return well')
  } catch (error) {
    console.error(error)
  }
}
