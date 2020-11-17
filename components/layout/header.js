import React, { useState } from "react";
import { useRouter } from 'next/router';
import { Image } from "cloudinary-react";
import Link from "next/link";

import { login, navigation } from "../../data/header";

export const Header = () => {
  const [openLoginMenu, setOpenLoginMenu] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const router = useRouter();

  return (
    <nav className="bg-white">
      <div className="mx-auto max-w-7xl lg:max-w-none lg:w-3/4 3xl:w-3/5">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            {/* <!-- Mobile menu button--> */}
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
              aria-label="Main menu"
              aria-expanded="false"
              onClick={() => setOpenMobileMenu(!openMobileMenu)}
            >
              {/* <!-- Icon when menu is closed. -->
          <!--
            Heroicon name: menu

            Menu open: "hidden", Menu closed: "block"
          --> */}
              <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              {/* {!openMobileMenu && (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )} */}
              
              {/* <!-- Icon when menu is open. -->
          <!--
            Heroicon name: x

            Menu open: "block", Menu closed: "hidden"
          --> */}
              {/* {openMobileMenu && (
                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                )}           */}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center md:items-stretch md:justify-start">
            <div className="flex-shrink-0 lg:mt-2 md:mt-2">
              <Link href="/">
                <Image
                  cloudName="membersy"
                  publicId="vantageone/VantageOne-Main-Logo"
                  width="150"
                  crop="scale"
                />
              </Link>
            </div>
            <div className="hidden md:block md:ml-6">
              <div className="flex">
                {navigation.map(({ href, title }) => (
                  <a
                    href={href}
                    className="px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out 3xl:text-lg"
                    key={title}
                  >
                    {title}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static lg:inset-auto lg:ml-6 lg:pr-0">
            {/* <button
              className="hidden sm:hidden md:block btn-blue flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out"
              aria-label="Join now"
            >
              Join now
            </button> */}
            {router.pathname !== '/join-now' && (
              <a
                href="/join-now"
                className="hidden sm:hidden md:block whitespace-no-wrap inline-flex items-center justify-center my-2 px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:border-green-400 focus:shadow-outline-green active:bg-green-400 transition ease-in-out duration-150 3xl:text-lg"
              >
                Join now
              </a>
            )}
            

            {/* <!-- Profile dropdown --> */}
            <div className="ml-3 relative">
              <div>
                <button
                  className="whitespace-no-wrap inline-flex items-center justify-center my-2 px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:border-green-400 focus:shadow-outline-green active:bg-green-400 transition ease-in-out duration-150 3xl:text-lg"
                  id="user-menu"
                  aria-label="User menu"
                  aria-haspopup="true"
                  onClick={() => setOpenLoginMenu(!openLoginMenu)}
                >
                  Login
                </button>
              </div>
              {/* <!--
            Profile dropdown panel, show/hide based on dropdown state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          --> */}

              {openLoginMenu && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg z-20">
                  <div
                    className="py-1 rounded-md bg-white shadow-xs"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu"
                  >
                    {login.map(({ href, label }) => (
                      <a
                        href={href}
                        className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                        role="menuitem"
                        key={label}
                      >
                        {label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* <!--
    Mobile menu, toggle classes based on menu state.

    Menu open: "block", Menu closed: "hidden"
  --> */}
      {openMobileMenu && (
        <div className="block md:hidden lg:hidden">
          <div className="px-2 pt-2 pb-3">
            {navigation.map(({ href, title }) => (
              <a
                href={href}
                className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
                key={title}
              >
                {title}
              </a>
            ))}

            {router.pathname !== '/join-now' && (
              <span class="inline-flex rounded-md shadow-sm">
                <a
                  href="/join-now"
                  className="whitespace-no-wrap inline-flex items-center justify-center my-2 px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:border-green-400 focus:shadow-outline-green active:bg-green-400 transition ease-in-out duration-150"
                >
                  Join now
                </a>
              </span>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};
