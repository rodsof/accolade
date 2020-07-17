import React, { useContext, useEffect } from "react";
import Layout from "../components/Layout";
import postContext from "../context/posts/postContext";
import moment from 'moment';


const Posts = () => {
  // define context
  const PostContext = useContext(postContext);
  const { posts, getPosts, message } = PostContext;
  console.log(posts);

  // get posts when component is loaded
  useEffect(() => {
    // if there is an error
    if (message) {
      //mostrarAlerta(mensaje.msg, mensaje.categoria);
      console.log(message);
    }

    getPosts();
    // eslint-disable-next-line
  }, [message]);

  //  check if there are posts
  if (posts.length === 0)
    return <Layout>There aren't posts yet, start adding one</Layout>;

  return (
    <Layout>
        <ul className="m-20 pl-20 pr-20">
          {posts.map((post) => (
            <div className="p-12 bg-gray-300" key={post.id}>
              <h1 className="text-center font-semibold text-xl">
                Looking for a {post.title} 
              </h1>
              <p><b>Pay: </b>{post.details}</p>
              <p><b>Date:</b> {moment(post.date).format('LLLL')} </p>
              <p><b>Project details: </b>{post.details}</p>
              <p><b>Contact Info:</b> {post.creator}</p>
            </div>
          ))}
        </ul>
    </Layout>
  );
};

export default Posts;
