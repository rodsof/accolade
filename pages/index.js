import Head from "next/head";
import Layout from "../components/Layout";
import Link from "next/link";
import authContext from "../context/auth/authContext";
import { useContext, useEffect } from "react";

export default function Home() {
    // Get autenticated user from Storage 
    const AuthContext = useContext( authContext );
    const { autenticatedUser } = AuthContext;
  
    useEffect(() => {
      const token = localStorage.getItem('token');
  
      if(token) {
        autenticatedUser()
      }
     
    }, []);
  return (
    <Layout>
      <div className="p-32 bg-gray-400 text-center font-semibold text-xl">
        <Link href="/upcomingEvents">
          <a>Upcoming Events</a>
        </Link>
      </div>
      <div className="mt-20 p-32 bg-yellow-400 text-center font-semibold text-xl">
        <Link href="/posts">
          <a>Talent Needed!</a>
        </Link>
      </div>
      <div className="mt-20 p-32 bg-teal-400 text-center font-semibold text-xl">
        <Link href="/">
          <a className="mb-20">Weekly Creative Spotlight</a>
        </Link>
        <img className="mx-auto" src="/hero.png" alt="Ideas"></img>
      </div>
      <div className="mt-20 p-32 bg-green-400 text-center font-semibold text-xl">
          <p>Keep up with Us!</p>
          <br/>
          <p>Follow us on social media...</p>
      
      </div>
    </Layout>
  );
}
