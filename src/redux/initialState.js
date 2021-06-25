export const initialState = {
  posts: {
    data: [
      {
        id: '1',
        title: 'Post 1',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis ex aliquet, tempus libero eget, pulvinar libero. Vestibulum ante ipsum.',
        email: 'author1@example.com',
      },
      {
        id: '2',
        title: 'Post 2',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis ex aliquet, tempus libero eget, pulvinar libero. Vestibulum ante ipsum.',
        email: 'author2@example.com',

      },
      {
        id: '3',
        title: 'Post 3',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis ex aliquet, tempus libero eget, pulvinar libero. Vestibulum ante ipsum.',
        email: 'author3@example.com',
      },
      {
        id: '4',
        title: 'Post 4',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis ex aliquet, tempus libero eget, pulvinar libero. Vestibulum ante ipsum.',
        email: 'author4@example.com',
      },
      {
        id: '5',
        title: 'Post 5',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis ex aliquet, tempus libero eget, pulvinar libero. Vestibulum ante ipsum.',
        email: 'author5@example.com',
      },
      {
        id: '6',
        title: 'Post 6',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis ex aliquet, tempus libero eget, pulvinar libero. Vestibulum ante ipsum.',
        email: 'author6@example.com',
      },
    ],
    loading: {
      active: false,
      error: false,
    },
  },
  user: null,
};
