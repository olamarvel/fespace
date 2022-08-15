export const Qslides = `*[_type == "slide"]{
    title,
    slug,
    description,
    publishedAt,
    mainImage{
      asset->{
      _id,
      url
    }
  }
}`
export const QFeatured = `*[_type == "post" && isFeatured == true]{title,publishedAt,body,slug,mainImage{asset->{_id,url}}}`
export const QCategory = `*[_type == "category"]{title,"Posts": *[_type=='post' && references(^._id)]{title,publishedAt,body,slug,mainImage{asset->{_id,url}}}}`
export const QCategoryTitle = `*[_type == "category"].title`
export const QMeun = `*[_type == "meun"]`


export const Q_F_Category = `*[_type == "category" && title==$type]{
    title,
    "Posts": *[_type=='post' && references(^._id)]{
      title,
      publishedAt,
      body,
      slug,
      mainImage{
      asset->{_id,
      url}
      }
    }
  }`

export const Q_Event = `*[_type == "event"]{
  title,
  slug,
  description,
  from,
  to,
  Flyer{asset->{_id,url}},
  ticket,
  guests[]->{name,slug,image{asset->{_id,url}}}
}`

export const Q_F_Post = `
*[_type == "post"  && slug.current==$slug]{
  _id,
  title,
  publishedAt,
  body,
  slug,
  "category":categories[]->title
  ,
  comments[]{
      comment,
      _key,
      postedBy->{
        _id,
        userName,
        image
      },
    },
  mainImage{
  asset->{_id,
  url}
  }
}
`



export const QCategoryRelated = `*[_type == "post" && $keyword[] match categories[]->title]{
  _id,
  title,
  publishedAt,
  slug,
  "category":categories[]->title,
  "image":mainImage{
  asset->{_id,
  url}
  }
}`


  
//   *[_type == "category" && title in $category ]{
//     *[_type=='post' && ^.title in $category               && references(^._id)]{
//      title,
//      publishedAt,
//      body,
//      slug,
//      mainImage{
//      asset->{_id,
//      url}
//      }
//    }
//  }