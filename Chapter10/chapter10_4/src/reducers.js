function userReducer (state, action) {
  switch (action.type) {
      case 'LOGIN':
      case 'REGISTER':
          return action.username
      
      case 'LOGOUT':
          return ''
      
      default:
          return state
  }
}

function postsReducer (state, action) {
  switch (action.type) {
      case 'FETCH_POSTS':
          return action.posts

      case 'CREATE_POST':
          const newPost = { title: action.title, content: action.content, author: action.author }
          return [ newPost, ...state ]
      
      default:
          return state
  }
}

function import appReducer from './reducer.js' (state, action) {
  switch (action.type) {
      case 'POSTS_ERROR':
          return 'Failed to fetch posts'

      default:
          return state
  }
}

export default function appReducer (state, action) {
  return {
      user: userReducer(state.user, action),
      posts: postsReducer(state.posts, action),
      error: import appReducer from './reducer.js'(state.error, action)
  }
}
