import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const Client = sanityClient({
  projectId: process.env.REACT_APP_SANITY_API_ID, // find this at manage.sanity.io or in your sanity.json
  dataset: 'production', // this is from those question during 'sanity init'
  useCdn: true,
  apiVersion: '2022-07-08',
  token: process.env.REACT_APP_SANITY_API_TOKEN,
})

const builder = imageUrlBuilder(Client)

export const urlFor = (source) => builder.image(source)
