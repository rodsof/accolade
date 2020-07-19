import React, { useContext, useEffect } from "react";
import postContext from "../context/posts/postContext";
import moment from "moment";
import { DELETE_POST } from "../types";
import authContext from "../context/auth/authContext";

const Post = ({ post }) => {
  // define context
  const PostContext = useContext(postContext);
  const { message, getCreator, creatorInfo, deletePost } = PostContext;
  // Define auth context
  const AuthContext = useContext(authContext);
  const { user, autenticatedUser } = AuthContext;

  // get craetor info when component is loaded
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      autenticatedUser();
    }
    // if there is an error
    if (message) {
      //mostrarAlerta(mensaje.msg, mensaje.categoria);
      console.log(message);
    }
    getCreator(post.creator);
    // eslint-disable-next-line
  }, [message]);
  // every time creator is updated, state is updated

  const delPost = (id) => {
    deletePost(id);
  };

  return (
    <div className="p-12 mb-20 bg-gray-300">
      <h1 className="text-center font-semibold text-xl">{post.title}</h1>
      <p className="pl-10">
        <b>Pay: </b>
        {post.pay}
      </p>
      <p className="pl-10">
        <b>Date:</b> {moment(post.date).format("L")}{" "}
      </p>
      <p className="pl-10">
        <b>Time:</b> {moment(post.date).format("LT")}
      </p>
      <p className="pl-10">
        <b>Project details: </b>
        {post.details}
      </p>

      {creatorInfo ? (
        <p className="pl-10">
          <b>Contact Info</b>
          <br />
          <b>Name: </b>
          {creatorInfo.name}
          <br />
          <b>Email: </b>
          {creatorInfo.email}
        </p>
      ) : null}

      {user && user._id === post.creator ? (
        <>
          {message ? (
            <div className="my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4">
              <p className="font-bold">Error</p>
              <p>{message.msg} </p>
            </div>
          ) : null}
          <button
            className="mt-12 mx-auto items-center rounded bg-red-400 py-1 px-3 text-xs font-bold hover:bg-red-400 hover:text-red-200"
            onClick={() => delPost(post._id)}
          >
            Remove
          </button>
        </>
      ) : null}
    </div>
  );
};

export default Post;
