import React, { useContext, useEffect } from "react";
import Layout from "../components/Layout";
import postContext from "../context/posts/postContext";
import Post from "../components/Post";
import authContext from "../context/auth/authContext";
import NewPost from "../components/NewPost";

const Posts = () => {
  // define context
  const PostContext = useContext(postContext);
  const { posts, getPosts, message } = PostContext;
 // Define auth context
 const AuthContext = useContext(authContext);
 const { user, autenticatedUser } = AuthContext;

 
  // get posts when component is loaded
  useEffect(() => {
    const token = localStorage.getItem('token');
 
    if(token) {
      autenticatedUser()
    }
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
    return <Layout><div className="text-center font-bold text-xl">There aren't posts  {user ? <NewPost /> : null}</div></Layout>;

  return (
    <Layout>
       {user ? <NewPost /> : null}
      <ul className="m-20 pl-20 pr-20">
        {posts.map((post) => (
         <Post key={post._id} post={post} />
        ))}
      </ul>
    </Layout>
  );
};

export default Posts;
