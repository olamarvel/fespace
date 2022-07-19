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


