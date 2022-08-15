export const components = {
  block: {
    // Ex. 1: customizing common block types
    h1: ({ children }) => <h1 className="text-2xl">{children}</h1>,
    p: ({ children }) => <p className="text-2xl first-child:">{children}</p>,
    blockquote: ({ children }) => <blockquote className="border-l-purple-500">{children}</blockquote>,

    // Ex. 2: rendering custom styles
    customHeading: ({ children }) => <h2 className="text-lg text-primary text-purple-700">{children}</h2>,
  },
};
