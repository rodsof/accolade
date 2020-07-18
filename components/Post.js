import React, { useContext, useEffect } from "react";
import postContext from "../context/posts/postContext";
import moment from "moment";

const Post = ({post}) => {
  // define context
  const PostContext = useContext(postContext);
  const { message, getCreator, creatorInfo } = PostContext;

  // get craetor info when component is loaded
  useEffect(() => {
    // if there is an error
    if (message) {
      //mostrarAlerta(mensaje.msg, mensaje.categoria);
      console.log(message);
    }

    getCreator(post.creator);
    // eslint-disable-next-line
  }, [message]);

  return (
    <div className="p-12 mb-20 bg-gray-300">
      <h1 className="text-center font-semibold text-xl">
        Looking for a {post.title}
      </h1>
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

        {creatorInfo ? 
              <p className="pl-10">
        <b>Contact Info</b> 
        <br/>
        <b>Name: </b>{creatorInfo.name}
        <br/>
        <b>Email: </b>{creatorInfo.email}
        </p>

        : null}
    </div>
  );
};

export default Post;
