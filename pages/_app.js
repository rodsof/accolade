import React from "react";
import AuthState from "../context/auth/authState";
import PostState from "../context/posts/postState";

const MyApp = ({ Component, pageProps }) => {
  return (
    <AuthState>
        <PostState>
      <Component {...pageProps} />
      </PostState>
    </AuthState>
  );
};
export default MyApp;
