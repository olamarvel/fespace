import post from './post'

post
export default {
    name: 'interviews',
    title: 'Interviews',
    type: 'document',
    fields: [
      {
        name: 'userName',
        title: 'UserName',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'string',
      },
    ],
  };