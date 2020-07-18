import {
  POST_FORM,
  GET_POSTS,
  ADD_POST,
  POST_ERROR,
  VALIDATE_POST,
  CURRENT_POST,
  DELETE_POST,
  GET_CREATOR,
  SPINNER_ON,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case POST_FORM:
      return {
        ...state,
        form: true,
      };
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        postsfiltered: action.payload,
        spinnerpost: null,
      };
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
        form: false,
        errorform: false,
      };
    case VALIDATE_POST:
      return {
        ...state,
        errorform: true,
      };
    case CURRENT_POST:
      return {
        ...state,
        postsfiltered: state.posts.filter((post) => post.title.includes(action.payload)),
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
        post: null,
      };
    case POST_ERROR:
      return {
        ...state,
        message: action.payload,
      };
    case GET_CREATOR:
      return {
        ...state,
        creatorInfo: action.payload,
      };
    case SPINNER_ON:
      return {
        ...state,
        spinnerpost: true
      };
    default:
      return state;
  }
};
