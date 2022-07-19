export default {
    name: 'event',
    title: 'Event',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name:'from',
        title:'From',
        type:'datetime'
      },
      {
        name:'to',
        title:'To',
        type:'datetime'
      },
      
      {
        name: 'guests',
        title: 'Guests',
        type: 'array',
        of: [{type: 'reference', to: {type: 'author'}}],
      },
      {
        name: 'Flyer',
        title: 'Flyer',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name:'ticket',
        title:'Ticket',
        type:'url'
      }
      
    ],
  
    preview: {
      select: {
        title: 'title',
        media: 'mainImage',
      },
      prepare(selection) {
        const { author } = selection
        return Object.assign({}, selection, {
          subtitle: author && `by ${author}`,
        })
      },
    },
  }
  