import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
/* import authContext from '../context/auth/authContext';
import appContext from '../context/app/appContext'; */
import { useRouter } from "next/router";
import authContext from "../context/auth/authContext";

const Header = () => {
  const [isOpen, open] = useState(false);
  // define context
  const AuthContext = useContext(authContext);
  const { autenticatedUser,user,  autenticated, logout } = AuthContext;
  useEffect(() => {
    autenticatedUser();

  }, []);
  return (
    <div className="w-100 bg-gray-400 p-5">
      <nav className="flex-row">
        <div className="flex flex-row justify-between">
          <a href="/">
            <span className="font-semibold text-xl tracking-tight">
              Accolade
            </span>
          </a>

          <button
            id="hamburgerbtn"
            className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={() => open(!isOpen)}
          >
            <svg
              className="fill-current h-8 w-8"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>{" "}
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>

        <ul className={isOpen ? "active" : "hidden"} id="mobileMenu">
            { autenticated ? 
            <li className="text-center pr-5">
            <a 
            type="button"
            className="block mt-4 text-gray-800 hover:text-gray-600"
            onClick={() => logout() }
        >Log Out</a>
        </li>
            : <> 
          <li className="text-center pr-5">
            <Link href="/login">
              <a className="block mt-4 text-gray-800 hover:text-gray-600">
                {" "}
                Log In{" "}
              </a>
            </Link>
          </li>
          <li className="text-center pr-5">
            <Link href="/signup">
              <a className="block mt-4 text-gray-800 hover:text-gray-600">
                Sign Up
              </a>
            </Link>
          </li>
          </>
        }

          <li className="text-center pr-5">
            <Link href="/about">
              <a className="block mt-4 text-gray-800 hover:text-gray-600">
                About
              </a>
            </Link>
          </li>
          <li className="text-center pr-5">
            <Link href="/contact">
              <a className="block mt-4  text-gray-800 hover:text-gray-600">
                Contact
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
