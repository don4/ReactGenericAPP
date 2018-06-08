import { FETCH_POSTS, NEW_POST } from '../actions/types';

export const fetchPosts =dispath =>{
fetch('https://jsonplaceholder.typicode.com/Posts')
.then(res => res.json())
.then(posts => dispatch({
  type: FETCH_POSTS,
  payload: posts
}));
}
