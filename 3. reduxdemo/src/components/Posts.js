import React, { Component } from 'react'
import {connect} from 'react-redux';
import {fetchPosts} from '../action/postActions';

class Posts extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts :[]
        }
    }
    componentWillMount(){
        this.props.fetchPosts();
    }
  render() {
      const postItems = this.state.posts.map(post =>(
      <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      </div>))
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    )
  }
}


export default connect(null, fetchPosts)(Posts);