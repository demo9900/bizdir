"use client";
import React, { useState } from "react";
import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri";
export default function page() {
  const [showMenu, setShowMenu] = useState(false);
  const [showMenuSm, setShowMenuSm] = useState(false);
  const [search, setSearch] = useState(false);
  const [ isMenuVisible, setMenuVisibility ] = useState(false);
  return (
    
    <div className="bg-[#090b52]">
      <div className="2xl:container 2xl:mx-auto md:py-5 lg:px-20 md:px-6 p-4">
        <div className="flex justify-between">
          <div className="lg:w-3/12">
            <div className="logo float-left">
              <a href="/">
                <img
                  src="https://ik.imagekit.io/rrw4vjgxohv/bizbook/logo-b.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672921621987"
                  className="pt-2 w-48"
                  alt="logo"
                />
              </a>
            </div>

            <button
              onClick={() => setShowMenu(true)}
              aria-label="Open Menu"
              className="text-gray-800 dark:text-white hidden md:block lg:hidden focus:outline-none focus:ring-2 focus:ring-gray-800 rounded"
            >
              <svg
                className="fill-stroke"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 18L4 18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 12L4 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 6L4 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={() => setSearch(true)}
              aria-label="Search Menu"
              className="text-gray-800 dark:text-white md:hidden focus:outline-none focus:ring-2 focus:ring-gray-800 rounded hover:bg-gray-100 p-0.5"
            >
              <svg
                className="fill-stroke"
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.9984 19.0004L14.6484 14.6504"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className=" menu flex text-white font-bold lg:w-[20%] border-solid border-l cursor-pointer border-gray-200 float-left mx-5 mt-2 py-1 pr-1 pl-3 relative">
            <h4>All Category</h4>
            <RiArrowDropDownLine onClick={() => setMenuVisibility(! isMenuVisible)} className="text-2xl mx-2" />
          </div>
          <div className={`${isMenuVisible ? 'visible opacity-100': 'invisible opacity-0' } overflow-hidden left-0 absolute   transition translate-y-14 p-[25px]   duration-500 ease-in-out group-hover:transform z-50 w-full  transform`}>
              <div className="relative top-6 p-6 bg-white shadow-xl container max-w-[1140px] mx-auto">
                  <div className="flex flex-wrap -mx-[15px]">
                    <div className="w-[22%] px-0 pt-0 pb-2">
                      
                      <ul className="mt-3 text-[15px]">
                        <li>
                        <a href="/" className={`text-[#49494c] text-[13px]  font-sans py-2 px-5 uppercase font-semibold w-full`}>
                        <img src="/icon/shop.png" alt="" />
                        All Services
                        </a>
                        </li>
                        <li>
                        <a href="/" className="text-[#49494c] text-[13px]  font-sans py-2 px-5 uppercase font-semibold w-full">
                        <img src="/icon/shop.png" alt="" />
                        All Services
                        </a>
                        </li>
                        <li>
                        <a href="/" className="text-[#49494c] text-[13px]  font-sans py-2 px-5 uppercase font-semibold w-full">
                        <img src="/icon/shop.png" alt="" />
                        All Services
                        </a>
                        </li>
                        <li>
                        <a href="/" className="text-[#49494c] text-[13px]  font-sans py-2 px-5 uppercase font-semibold w-full">
                        <img src="/icon/shop.png" alt="" />
                        All Services
                        </a>
                        </li>
                        <li>
                        <a href="/" className="text-[#49494c] text-[13px]  font-sans py-2 px-5 uppercase font-semibold w-full">
                        <img src="/icon/shop.png" alt="" />
                        All Services
                        </a>
                        </li>
                        <li>
                        <a href="/" className="text-[#49494c] text-[13px]  font-sans py-2 px-5 uppercase font-semibold w-full">
                        <img src="/icon/shop.png" alt="" />
                        All Services
                        </a>
                        </li>
                        
                       
                      </ul>
                    </div>
                    <div className="w-[78%]">
                      <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]  font-sans">
                        Extensions
                      </p>
                      <ul className="mt-3 text-[15px]">
                        <li>
                          <a
                            href="/#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Plugins
                            <p className="text-gray-500 font-normal">
                              Tweak existing functionality
                            </p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="/#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Batch uploads
                            <p className="text-gray-500 font-normal">
                              Get your time back
                            </p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="/#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Social sharing
                            <p className="text-gray-500 font-normal">
                              Generate content for socials
                            </p>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
              </div>
            </div>
          <div className="lg:w-6/12 flex flex-col justify-center items-center space-y-3.5">
            <div className="hidden lg:block absolute float-left right-[65px] w-7/12">
              <div className="top-serr float-left w-3/10 pt-[8px] pl-[40px] w-full">
                <form>
                  <div className="flex">
                    <div className="relative ">
                      <input
                        type="search"
                        id="search-dropdown"
                        className="block  w-[336px] pt-[10px] pr-[40px] pb-[10px] pl-[20px] h-[33px]  z-20 text-sm text-gray-900 bg-gray-50 rounded border-l-gray-50 border-l-2 border-1 border-gray-300 dark:bg-gray-50 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-700 focus:outline-0"
                        placeholder="Search for services and business..."
                        required=""
                      />
                      <button
                        type="submit"
                        className="absolute  top-0 right-0 py-[5px] px-0 text-[14px] font-medium text-gray-700 bg-none rounded-r-lg h-[33px] w-[40px]  focus:outline-none  dark:bg-none text-center inline-block "
                      >
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                        <span className="sr-only">Search</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div></div>
          <div className="lg:w-3/12 flex justify-end items-center space-x-4">
            <div className="inline-block w-[142px] px-0 pb-0 pt-1 box-border">
              <img
                className="h-[36px] w-[36px] rounded-full float-left object-cover mr-2"
                src="https://ik.imagekit.io/rrw4vjgxohv/bizbook/62736rn53themes.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672921816064"
                alt=""
              />
              <b className="p-0 text-[11px] float-left leading-4 font-normal text-[#bfbfbf]">
                Profile by
              </b>
              <br />
              <h4 className="text[14px] leading-4 whitespace-pre overflow-hidden text-[#fff] mx-0 mb-0 -mt-2">
                Digital koncept
              </h4>
            </div>

            <button
              onClick={() => setShowMenuSm(true)}
              aria-label="open menu"
              className="text-gray-800 dark:text-white md:hidden focus:outline-none focus:ring-2 focus:ring-gray-800 rounded hover:bg-gray-100 p-0.5"
            >
              <svg
                className="fill-stroke"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6H20"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 12H20"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 18H20"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <RiArrowDropDownLine className="text-[30px] mx-2 absolute top-[10px] right-[50px]  opacity-70 text-[#aaadaf]" />
        </div>
        <div
          id="md-menu"
          className={`${
            showMenu ? "md:block" : ""
          } hidden lg:hidden absolute z-10 inset-0 h-screen w-full dark:bg-gray-800 bg-gray-800 bg-opacity-70 dark:bg-opacity-70`}
        >
          <div className="relative w-full h-screen">
            <div className="absolute inset-0 w-1/2 bg-white dark:bg-gray-900 p-6 justify-center">
              <div className="flex items-center justify-between border-b pb-4 border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3 mx-2">
                  <div>
                    <svg
                      className="fill-stroke text-gray-800 dark:text-white"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                        stroke="currentColor"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M18.9984 19.0004L14.6484 14.6504"
                        stroke="currentColor"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Search for products"
                    className="text-sm text-gray-600 dark:text-gray-300 focus:outline-none bg-transparent"
                  />
                </div>
                <button
                  onClick={() => setShowMenu(false)}
                  aria-label="close menu"
                  className="focus:outline-none focus:ring-2 focus:ring-gray-800"
                >
                  <svg
                    className="fill-stroke text-gray-800 dark:text-white"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 4L4 12"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 4L12 12"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="mt-8">
                <ul className="flex flex-col space-y-8">
                  <li className="flex items-center justify-between">
                    <a
                      href="/javascript:void(0)"
                      className="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                    >
                      Home
                    </a>
                    <button
                      className="fill-stroke text-black dark:text-white"
                      aria-label="show options"
                    >
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 6L8 10L4 6"
                          stroke="currentColor"
                          strokeWidth="0.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </li>
                  <li className="flex items-center justify-between">
                    <a
                      href="/javascript:void(0)"
                      className="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                    >
                      Catalog
                    </a>
                    <button
                      className="fill-stroke text-black dark:text-white"
                      aria-label="show options"
                    >
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 6L8 10L4 6"
                          stroke="currentColor"
                          strokeWidth="0.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </li>
                  <li className="flex items-center justify-between">
                    <a
                      href="/javascript:void(0)"
                      className="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                    >
                      Pages
                    </a>
                    <button
                      className="fill-stroke text-black dark:text-white"
                      aria-label="show options"
                    >
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 6L8 10L4 6"
                          stroke="currentColor"
                          strokeWidth="0.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </li>
                  <li className="flex items-center justify-between">
                    <a
                      href="/javascript:void(0)"
                      className="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                    >
                      Blog
                    </a>
                    <button
                      className="fill-stroke text-black dark:text-white"
                      aria-label="show options"
                    >
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 6L8 10L4 6"
                          stroke="currentColor"
                          strokeWidth="0.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </li>
                  <li className="flex items-center justify-between">
                    <a
                      href="/javascript:void(0)"
                      className="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                    >
                      Contact us
                    </a>
                    <button
                      className="fill-stroke text-black dark:text-white"
                      aria-label="show options"
                    >
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 6L8 10L4 6"
                          stroke="currentColor"
                          strokeWidth="0.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Search menu */}
        <div
          id="mobile-search-menu"
          className={`${
            search ? "flex" : "hidden"
          } md:hidden absolute inset-0 z-10 flex-col w-full h-screen bg-white dark:bg-gray-900 pt-4`}
        >
          <div className="w-full">
            <div className="flex items-center justify-between border-b border-gray-200 pb-3 mx-4">
              <div className="flex items-center space-x-3 mx-2">
                <div>
                  <svg
                    className="fill-stroke text-gray-800 dark:text-white"
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                      stroke="currentColor"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18.9984 19.0004L14.6484 14.6504"
                      stroke="currentColor"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search for products"
                  className="text-sm text-gray-600 focus:outline-none bg-transparent"
                />
              </div>
              <button
                aria-label="close menu"
                onClick={() => setSearch(false)}
                className="text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800"
              >
                <svg
                  className="fill-stroke"
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 5L5 15"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 5L15 15"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="mt-8 mx-4">
            <h2 className="text-sm text-gray-600 dark:text-gray-300 uppercase">
              Suggestions
            </h2>
            <ul className="mt-6 flex flex-col space-y-6">
              <li className="flex items-center justify-between">
                <a
                  href="/javascript:void(0)"
                  className="text-sm text-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                >
                  Bags
                </a>
              </li>
              <li className="flex items-center justify-between">
                <a
                  href="/javascript:void(0)"
                  className="text-sm text-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                >
                  Shoes
                </a>
              </li>
              <li className="flex items-center justify-between">
                <a
                  href="/javascript:void(0)"
                  className="text-sm text-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                >
                  Capes
                </a>
              </li>
              <li className="flex items-center justify-between">
                <a
                  href="/javascript:void(0)"
                  className="text-sm text-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                >
                  Coats
                </a>
              </li>
              <li className="flex items-center justify-between">
                <a
                  href="/javascript:void(0)"
                  className="text-sm text-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                >
                  Denim 2021
                </a>
              </li>
              <li className="flex items-center justify-between">
                <a
                  href="/javascript:void(0)"
                  className="text-sm text-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                >
                  Leather shoe collection 2021
                </a>
              </li>
              <li className="flex items-center justify-between">
                <a
                  href="/javascript:void(0)"
                  className="text-sm text-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                >
                  Active wear
                </a>
              </li>
              <li className="flex items-center justify-between">
                <a
                  href="/javascript:void(0)"
                  className="text-sm text-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                >
                  Sweat suits
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full h-full flex items-end">
            <ul className="bg-gray-50 dark:bg-gray-800 py-10 px-4 flex flex-col space-y-8 w-full">
              <li>
                <a
                  className="flex items-center space-x-2 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                  href="/javascript:void(0)"
                >
                  <div>
                    <svg
                      className="fill-stroke"
                      width={22}
                      height={22}
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.33333 1L1 5V19C1 19.5304 1.23413 20.0391 1.65087 20.4142C2.06762 20.7893 2.63285 21 3.22222 21H18.7778C19.3671 21 19.9324 20.7893 20.3491 20.4142C20.7659 20.0391 21 19.5304 21 19V5L17.6667 1H4.33333Z"
                        stroke="currentColor"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1 5H21"
                        stroke="currentColor"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15.4436 9C15.4436 10.0609 14.9753 11.0783 14.1418 11.8284C13.3083 12.5786 12.1779 13 10.9991 13C9.82039 13 8.68993 12.5786 7.85643 11.8284C7.02294 11.0783 6.55469 10.0609 6.55469 9"
                        stroke="currentColor"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="text-base">Cart</p>
                </a>
              </li>
              <li>
                <a
                  className="flex items-center space-x-2 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                  href="/javascript:void(0)"
                >
                  <div>
                    <svg
                      className="fill-stroke"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.3651 3.84172C16.9395 3.41589 16.4342 3.0781 15.8779 2.84763C15.3217 2.61716 14.7255 2.49854 14.1235 2.49854C13.5214 2.49854 12.9252 2.61716 12.369 2.84763C11.8128 3.0781 11.3074 3.41589 10.8818 3.84172L9.99847 4.72506L9.11514 3.84172C8.25539 2.98198 7.08933 2.49898 5.87347 2.49898C4.65761 2.49898 3.49155 2.98198 2.6318 3.84172C1.77206 4.70147 1.28906 5.86753 1.28906 7.08339C1.28906 8.29925 1.77206 9.46531 2.6318 10.3251L3.51514 11.2084L9.99847 17.6917L16.4818 11.2084L17.3651 10.3251C17.791 9.89943 18.1288 9.39407 18.3592 8.83785C18.5897 8.28164 18.7083 7.68546 18.7083 7.08339C18.7083 6.48132 18.5897 5.88514 18.3592 5.32893C18.1288 4.77271 17.791 4.26735 17.3651 3.84172V3.84172Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="text-base">Wishlist</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Main Menu */}
        <div
          id="mobile-menu"
          className={`${
            showMenuSm ? "flex" : "hidden"
          } md:hidden absolute inset-0 z-10 flex-col w-full h-screen bg-white pt-4`}
        >
          <div className="w-full">
            <div className="flex items-center justify-between border-b border-gray-200 pb-4 mx-4">
              <div />
              <div>
                <p className="text-base font-semibold text-gray-800">Menu</p>
              </div>
              <button
                aria-label="close menu"
                onClick={() => setShowMenuSm(false)}
                className="text-gray-800 dark:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800"
              >
                <svg
                  className="fill-stroke"
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 5L5 15"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 5L15 15"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="mt-6 mx-4 ">
            <ul className="flex flex-col space-y-8 ">
              <li className="flex items-center justify-between">
                <a
                  href="/javascript:void(0)"
                  className="text-base text-gray-800 focus:outline-none dark:text-gray-800 focus:ring-2 focus:ring-gray-800 hover:underline"
                >
                  Home
                </a>
                <button className="focus:outline-none focus:ring-2 text-black dark:text-gray-800 focus:ring-gray-800 rounded hover:bg-gray-100 p-0.5">
                  <svg
                    className="fill-stroke"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 6L8 10L4 6"
                      stroke="currentColor"
                      strokeWidth="0.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </li>
              <li className="flex items-center justify-between">
                <a
                  href="/javascript:void(0)"
                  className="text-base text-gray-800 focus:outline-none dark:text-gray-800 focus:ring-2 focus:ring-gray-800 hover:underline"
                >
                  Catalog
                </a>
                <button className="focus:outline-none focus:ring-2 text-black dark:text-gray-800 focus:ring-gray-800 rounded hover:bg-gray-100 p-0.5">
                  <svg
                    className="fill-stroke"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 6L8 10L4 6"
                      stroke="currentColor"
                      strokeWidth="0.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </li>
              <li className="flex items-center justify-between">
                <a
                  href="/javascript:void(0)"
                  className="text-base text-gray-800 focus:outline-none dark:text-gray-800 focus:ring-2 focus:ring-gray-800 hover:underline"
                >
                  Pages
                </a>
                <button className="focus:outline-none focus:ring-2 text-black dark:text-gray-800 focus:ring-gray-800 rounded hover:bg-gray-100 p-0.5">
                  <svg
                    className="fill-stroke"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 6L8 10L4 6"
                      stroke="currentColor"
                      strokeWidth="0.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </li>
              <li className="flex items-center justify-between">
                <a
                  href="/javascript:void(0)"
                  className="text-base text-gray-800 focus:outline-none dark:text-gray-800 focus:ring-2 focus:ring-gray-800 hover:underline"
                >
                  Blog
                </a>
                <button className="focus:outline-none focus:ring-2 text-black dark:text-gray-800 focus:ring-gray-800 rounded hover:bg-gray-100 p-0.5">
                  <svg
                    className="fill-stroke"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 6L8 10L4 6"
                      stroke="currentColor"
                      strokeWidth="0.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </li>
              <li className="flex items-center justify-between">
                <a
                  href="/javascript:void(0)"
                  className="text-base text-gray-800 focus:outline-none dark:text-gray-800 focus:ring-2 focus:ring-gray-800 hover:underline"
                >
                  Contact us
                </a>
                <button className="focus:outline-none focus:ring-2 text-black dark:text-gray-800 focus:ring-gray-800 rounded hover:bg-gray-100 p-0.5">
                  <svg
                    className="fill-stroke"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 6L8 10L4 6"
                      stroke="currentColor"
                      strokeWidth="0.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </li>
            </ul>
          </div>
          <div className="w-full h-full flex items-end">
            <ul className="bg-white dark:bg-white py-10 px-4 flex flex-col space-y-8 w-full">
              <li>
                <a
                  className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                  href="/javascript:void(0)"
                >
                  <div>
                    <svg
                      width={22}
                      height={22}
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.33333 1L1 5V19C1 19.5304 1.23413 20.0391 1.65087 20.4142C2.06762 20.7893 2.63285 21 3.22222 21H18.7778C19.3671 21 19.9324 20.7893 20.3491 20.4142C20.7659 20.0391 21 19.5304 21 19V5L17.6667 1H4.33333Z"
                        stroke="#1F2937"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1 5H21"
                        stroke="#1F2937"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15.4436 9C15.4436 10.0609 14.9753 11.0783 14.1418 11.8284C13.3083 12.5786 12.1779 13 10.9991 13C9.82039 13 8.68993 12.5786 7.85643 11.8284C7.02294 11.0783 6.55469 10.0609 6.55469 9"
                        stroke="#1F2937"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="text-base text-gray-800">Cart</p>
                </a>
              </li>
              <li>
                <a
                  className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                  href="/javascript:void(0)"
                >
                  <div>
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.3651 3.84172C16.9395 3.41589 16.4342 3.0781 15.8779 2.84763C15.3217 2.61716 14.7255 2.49854 14.1235 2.49854C13.5214 2.49854 12.9252 2.61716 12.369 2.84763C11.8128 3.0781 11.3074 3.41589 10.8818 3.84172L9.99847 4.72506L9.11514 3.84172C8.25539 2.98198 7.08933 2.49898 5.87347 2.49898C4.65761 2.49898 3.49155 2.98198 2.6318 3.84172C1.77206 4.70147 1.28906 5.86753 1.28906 7.08339C1.28906 8.29925 1.77206 9.46531 2.6318 10.3251L3.51514 11.2084L9.99847 17.6917L16.4818 11.2084L17.3651 10.3251C17.791 9.89943 18.1288 9.39407 18.3592 8.83785C18.5897 8.28164 18.7083 7.68546 18.7083 7.08339C18.7083 6.48132 18.5897 5.88514 18.3592 5.32893C18.1288 4.77271 17.791 4.26735 17.3651 3.84172V3.84172Z"
                        stroke="#1F2937"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="text-base text-gray-800">Wishlist</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
