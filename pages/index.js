import Head from "next/head";
import Layout from "../components/Layout";
import Link from "next/link";
import authContext from "../context/auth/authContext";
import { useContext, useEffect } from "react";
import eventContext from "../context/events/eventContext";
import postContext from "../context/posts/postContext";

export default function Index() {
  // Get autenticated user from Storage
  const AuthContext = useContext(authContext);
  const { autenticatedUser } = AuthContext;

  const EventContext = useContext(eventContext);
  const { events, getEvents, message, spinnerevent } = EventContext;

  const PostContext = useContext(postContext);
  const { posts, getPosts, spinnerpost } = PostContext;
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
    getEvents();
    getPosts();
  }, [message]);

  return (
    <Layout>
      <div className="p-32 bg-gray-400 text-center font-semibold text-xl">
        {events.length === 0 && !spinnerevent ? (
          <>
            <h1>There aren't uncoming events</h1>
            <Link href="/events">
              <a>Go and add a new one!</a>
            </Link>
          </>
        ) : (
          <>
            <h1>Upcoming Events:</h1>
            {events.slice(0, 3).map((event) => {
              return <p key={event._id}> {event.title}</p>;
            })}
            <Link href="/events">
              <a className="block mt-4 text-gray-800 hover:text-gray-600 underline">
                All
              </a>
            </Link>
          </>
        )}
      </div>
      <div className="mt-20 p-32 bg-yellow-400 text-center font-semibold text-xl">
        {posts.length === 0 && !spinnerpost ? (
          <>
            <h1> By the moment, projects aren't searching for talents</h1>
            <Link href="/posts">
              <a className="block mt-4 text-gray-800 hover:text-gray-600 underline">
                Go and post your need!
              </a>
            </Link>
          </>
        ) : (
          <>
            <div className="w-full h-full fixed block top-0 left-0 bg-white opacity-75 z-50">
              <span className="text-teal-500 opacity-75 top-1/2 my-0 mx-auto block relative w-0 h-0">
                <i className="fas fa-circle-notch fa-spin fa-5x" />
              </span>
            </div>
            <h1 className="mb-10 text-3xl">Talent needed! </h1>
            {posts.slice(0, 3).map((post, index) => {
              return (
                <div key={post._id}>
                  {" "}
                  <p className="text-left">
                    Project {index} is {post.title}
                  </p>
                  <p className="text-right">{post.city}</p>{" "}
                </div>
              );
            })}
            <Link href="/posts">
              <a className="block mt-4 text-gray-800 hover:text-gray-600 underline text-left">
                All
              </a>
            </Link>
          </>
        )}
      </div>
      <div className="mt-20 p-32 bg-teal-400 text-center font-semibold text-xl">
        <Link href="/">
          <a className="mb-10 text-3xl">Weekly Creative Spotlight</a>
        </Link>
        <img className="mx-auto mt-10" src="/hero.png" alt="Ideas"></img>
        <p className="mt-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus
          vehicula tellus, a volutpat justo accumsan et. Donec sollicitudin
          vulputate semper. Proin posuere non tortor ullamcorper cursus.
          Suspendisse sed velit tincidunt, gravida sem et, pellentesque sem.
          Morbi facilisis augue ex, nec euismod nisi aliquet sit amet. In
          pellentesque leo vitae libero efficitur placerat. Morbi a tempor arcu,
          sit amet scelerisque libero. In hendrerit tincidunt dictum. Sed quam
          enim, tempor ac magna nec, molestie ullamcorper diam. Pellentesque
          bibendum lorem eu eros tincidunt volutpat. In sed est vitae risus
          egestas gravida eu quis nunc. Ut accumsan malesuada nulla, at placerat
          arcu. Integer et arcu et tortor mollis congue at non quam.
        </p>
      </div>
      <div className="mt-20 p-32 bg-green-400 text-center font-semibold text-xl">
        <p>Keep up with Us!</p>
        <br />
        <p>Follow us on social media...</p>
        <div className="pt-20">
        <button class="bg-teal-600 mx-10 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full">
                <span className="icon fa-twitter">Twitter</span>
        </button>
        <button class="bg-teal-600 mx-10 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full">
                <span className="icon fa-twitter">Facebook</span>
        </button>
        <button class="bg-teal-600 mx-10 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full">
                <span className="icon fa-twitter">Instagram</span>
        </button>
        </div>
      </div>
    </Layout>
  );
}
