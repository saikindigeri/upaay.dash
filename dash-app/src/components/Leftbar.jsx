

import React from "react";
import { useTheme } from "../context/ThemeContext";

const Leftbar = () => {
   const { theme } = useTheme();
    return (
    <div className={`w-full md:w-64 lg:w-1/5 p-4 md:p-5 min-h-screen ${theme==='light'?'bg-white':
    'bg-gray-900'}  overflow-auto  border-r-1 border-[#DBDBDB] `}>
      {/* Header div */}
      <div className="flex justify-between items-center space-x-1">
        <div className="flex items-center gap-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.6"
              d="M14 16C14 17.77 13.23 19.37 12 20.46C10.94 21.42 9.54 22 8 22C4.69 22 2 19.31 2 16C2 13.24 3.88 10.9 6.42 10.21C7.11 11.95 8.59 13.29 10.42 13.79C10.92 13.93 11.45 14 12 14C12.55 14 13.08 13.93 13.58 13.79C13.85 14.47 14 15.22 14 16Z"
              fill="#5030E5"
            />
            <path
              d="M18 8C18 8.78 17.85 9.53 17.58 10.21C16.89 11.95 15.41 13.29 13.58 13.79C13.08 13.93 12.55 14 12 14C11.45 14 10.92 13.93 10.42 13.79C8.59 13.29 7.11 11.95 6.42 10.21C6.15 9.53 6 8.78 6 8C6 4.69 8.69 2 12 2C15.31 2 18 4.69 18 8Z"
              fill="#5030E5"
            />
            <path
              opacity="0.4"
              d="M22 16C22 19.31 19.31 22 16 22C14.46 22 13.06 21.42 12 20.46C13.23 19.37 14 17.77 14 16C14 15.22 13.85 14.47 13.58 13.79C15.41 13.29 16.89 11.95 17.58 10.21C20.12 10.9 22 13.24 22 16Z"
              fill="#5030E5"
            />
          </svg>
          <h1 className={ `font-semibold text-lg md:text-xl leading-none tracking-normal ${theme==='light'?'text-black':'text-white'}`}>
            Project M.
          </h1>
        </div>
        <div className="flex">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5 17.225C12.3417 17.225 12.1834 17.1667 12.0584 17.0417L6.62502 11.6083C5.74169 10.725 5.74169 9.27499 6.62502 8.39165L12.0584 2.95832C12.3 2.71665 12.7 2.71665 12.9417 2.95832C13.1834 3.19999 13.1834 3.59999 12.9417 3.84165L7.50836 9.27499C7.10836 9.67499 7.10836 10.325 7.50836 10.725L12.9417 16.1583C13.1834 16.4 13.1834 16.8 12.9417 17.0417C12.8167 17.1583 12.6584 17.225 12.5 17.225Z"
              fill="#787486"
            />
            <path
              d="M8.5 17.225C8.3417 17.225 8.18336 17.1667 8.05836 17.0417L2.62502 11.6083C1.74169 10.725 1.74169 9.27499 2.62502 8.39165L8.05836 2.95832C8.30002 2.71665 8.70002 2.71665 8.94169 2.95832C9.18336 3.19999 9.18336 3.59999 8.94169 3.84165L3.50836 9.27499C3.10836 9.67499 3.10836 10.325 3.50836 10.725L8.94169 16.1583C9.18336 16.4 9.18336 16.8 8.94169 17.0417C8.81669 17.1583 8.65836 17.225 8.5 17.225Z"
              fill="#787486"
            />
          </svg>
        </div>
      </div>
      <hr className="border-1 border-[#DBDBDB] my-4" />
      <div>
        <ul className="space-y-3">
          <li className={`flex items-center gap-2 my-3 ${theme==='light'?'text-[#787486]':'text-gray-200'}  h-9 space-x-1`}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 10.75H5C2.58 10.75 1.25 9.42 1.25 7V5C1.25 2.58 2.58 1.25 5 1.25H7C9.42 1.25 10.75 2.58 10.75 5V7C10.75 9.42 9.42 10.75 7 10.75ZM5 2.75C3.42 2.75 2.75 3.42 2.75 5V7C2.75 8.58 3.42 9.25 5 9.25H7C8.58 9.25 9.25 8.58 9.25 7V5C9.25 3.42 8.58 2.75 7 2.75H5Z"
                fill="#787486"
              />
              <path
                d="M19 10.75H17C14.58 10.75 13.25 9.42 13.25 7V5C13.25 2.58 14.58 1.25 17 1.25H19C21.42 1.25 22.75 2.58 22.75 5V7C22.75 9.42 21.42 10.75 19 10.75ZM17 2.75C15.42 2.75 14.75 3.42 14.75 5V7C14.75 8.58 15.42 9.25 17 9.25H19C20.58 9.25 21.25 8.58 21.25 7V5C21.25 3.42 20.58 2.75 19 2.75H17Z"
                fill="#787486"
              />
              <path
                d="M19 22.75H17C14.58 22.75 13.25 21.42 13.25 19V17C13.25 14.58 14.58 13.25 17 13.25H19C21.42 13.25 22.75 14.58 22.75 17V19C22.75 21.42 21.42 22.75 19 22.75ZM17 14.75C15.42 14.75 14.75 15.42 14.75 17V19C14.75 20.58 15.42 21.25 17 21.25H19C20.58 21.25 21.25 20.58 21.25 19V17C21.25 15.42 20.58 14.75 19 14.75H17Z"
                fill="#787486"
              />
              <path
                d="M7 22.75H5C2.58 22.75 1.25 21.42 1.25 19V17C1.25 14.58 2.58 13.25 5 13.25H7C9.42 13.25 10.75 14.58 10.75 17V19C10.75 21.42 9.42 22.75 7 22.75ZM5 14.75C3.42 14.75 2.75 15.42 2.75 17V19C2.75 20.58 3.42 21.25 5 21.25H7C8.58 21.25 9.25 20.58 9.25 19V17C9.25 15.42 8.58 14.75 7 14.75H5Z"
                fill="#787486"
              />
            </svg>
            <h1 className="font-inter font-medium text-base md:text-[16px] leading-none tracking-normal">
              Home
            </h1>
          </li>
          <li className={`flex items-center gap-2 my-3 ${theme==='light'?'text-[#787486]':'text-gray-200'}  h-9 space-x-1`}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H16C20 2 22 4 22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19Z"
                stroke="#787486"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.9965 11H16.0054"
                stroke="#787486"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.9955 11H12.0045"
                stroke="#787486"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.99451 11H8.00349"
                stroke="#787486"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h1 className="font-inter font-medium text-base md:text-[16px] leading-none tracking-normal">
              Messages
            </h1>
          </li>
          <li className={`flex items-center gap-2 my-3 ${theme==='light'?'text-[#787486]':'text-gray-200'}  h-9 space-x-1`}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.37 8.88H17.62"
                stroke="#787486"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.38 8.88L7.13 9.63L9.38 7.38"
                stroke="#787486"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.37 15.88H17.62"
                stroke="#787486"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.38 15.88L7.13 16.63L9.38 14.38"
                stroke="#787486"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                stroke="#787486"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h1 className="font-inter font-medium text-base md:text-[16px] leading-none tracking-normal">
              Tasks
            </h1>
          </li>
          <li className={`flex items-center gap-2 my-3 ${theme==='light'?'text-[#787486]':'text-gray-200'}  h-9 space-x-1`}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.16 10.87C9.06 10.86 8.94 10.86 8.83 10.87C6.45 10.79 4.56 8.84 4.56 6.44C4.56 3.99 6.54 2 9 2C11.45 2 13.44 3.99 13.44 6.44C13.43 8.84 11.54 10.79 9.16 10.87Z"
                stroke="#787486"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.41 4C18.35 4 19.91 5.57 19.91 7.5C19.91 9.39 18.41 10.93 16.54 11C16.46 10.99 16.37 10.99 16.28 11"
                stroke="#787486"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.15997 14.56C1.73997 16.18 1.73997 18.82 4.15997 20.43C6.90997 22.27 11.42 22.27 14.17 20.43C16.59 18.81 16.59 16.17 14.17 14.56C11.43 12.73 6.91997 12.73 4.15997 14.56Z"
                stroke="#787486"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.34 20C19.06 19.85 19.74 19.56 20.3 19.13C21.86 17.96 21.86 16.03 20.3 14.86C19.75 14.44 19.08 14.16 18.37 14"
                stroke="#787486"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h1 className="font-inter font-medium text-base md:text-[16px] leading-none tracking-normal">
              Members
            </h1>
          </li>
          <li className={`flex items-center gap-2 my-3 ${theme==='light'?'text-[#787486]':'text-gray-200'}  h-9 space-x-1`}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                stroke="#787486"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 12.88V11.12C2 10.08 2.85 9.22 3.9 9.22C5.71 9.22 6.45 7.94 5.54 6.37C5.02 5.47 5.33 4.3 6.24 3.78L7.97 2.79C8.76 2.32 9.78 2.6 10.25 3.39L10.36 3.58C11.26 5.15 12.74 5.15 13.65 3.58L13.76 3.39C14.23 2.6 15.25 2.32 16.04 2.79L17.77 3.78C18.68 4.3 18.99 5.47 18.47 6.37C17.56 7.94 18.3 9.22 20.11 9.22C21.15 9.22 22.01 10.07 22.01 11.12V12.88C22.01 13.92 21.16 14.78 20.11 14.78C18.3 14.78 17.56 16.06 18.47 17.63C18.99 18.54 18.68 19.7 17.77 20.22L16.04 21.21C15.25 21.68 14.23 21.4 13.76 20.61L13.65 20.42C12.75 18.85 11.27 18.85 10.36 20.42L10.25 20.61C9.78 21.4 8.76 21.68 7.97 21.21L6.24 20.22C5.33 19.7 5.02 18.53 5.54 17.63C6.45 16.06 5.71 14.78 3.9 14.78C2.85 14.78 2 13.92 2 12.88Z"
                stroke="#787486"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h1 className="font-inter font-medium text-base leading-none tracking-normal">
              Settings
            </h1>
          </li>
        </ul>
        <hr className="border-1 border-[#DBDBDB] my-4" />
        {/* Projects div */}
        <div className="mb-6 space-y-3">
          <div className="flex items-center justify-between">
            <h1 className={`${theme==='light'?'text-[#787486]':'text-white'} font-inter font-bold text-xs  leading-none tracking-normal`}>
              MY PROJECTS
            </h1>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.33334 8H10.6667"
                stroke="#787486"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 10.6667V5.33333"
                stroke="#787486"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.00001 14.6667H10C13.3333 14.6667 14.6667 13.3333 14.6667 10V6C14.6667 2.66667 13.3333 1.33333 10 1.33333H6.00001C2.66668 1.33333 1.33334 2.66667 1.33334 6V10C1.33334 13.3333 2.66668 14.6667 6.00001 14.6667Z"
                stroke="#787486"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 my-3 text-[#787486] h-9 space-x-1 bg-[#5030E514] rounded-[6px] w-full">
              <div className="w-2 h-2 rounded-full bg-[#7AC555]"></div>
              <h1 className={`font-semibold leading-none tracking-normal text-base ${theme==='light'?'text-[#0D062D] ':'text-white'}`}>
                Mobile App
              </h1>
            </li>
            <li className={`flex items-center gap-2 my-3 ${theme==='light'?'text-[#787486]':'text-gray-200'}  h-9 space-x-1`}>
              <div className="w-2 h-2 rounded-full bg-[#FFA500]"></div>
              <h1 className="font-inter font-medium text-base leading-none tracking-normal">
                Website Redesign
              </h1>
            </li>
            <li className={`flex items-center gap-2 my-3 ${theme==='light'?'text-[#787486]':'text-gray-200'}  h-9 space-x-1`}>
              <div className="w-2 h-2 rounded-full bg-[#E4CCFD]"></div>
              <h1 className="font-inter font-medium text-base leading-none tracking-normal">
                Design System
              </h1>
            </li>
            <li className={`flex items-center gap-2 my-3 ${theme==='light'?'text-[#787486]':'text-gray-200'}  h-9 space-x-1`}>
              <div className="w-2 h-2 rounded-full bg-[#76A5EA]"></div>
              <h1 className="font-inter font-medium text-base leading-none tracking-normal">
                Wireframes
              </h1>
            </li>
          </ul>
        </div>
        {/* Thoughts div */}
        <div className={`${theme==='light'?'bg-[#F5F5F5]':'bg-gray-600'} space-y-3.5 rounded-2xl mt-6 p-4 h-auto min-h-[200px]`}>
          <div className="relative flex items-center justify-center">
            <div className="absolute w-12 h-12 rounded-full bg-yellow-300 blur-xl animate-pulse"></div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.21 6.36C18.17 4.26 16.16 2.71 13.83 2.2C11.39 1.66 8.88997 2.24 6.97997 3.78C5.05997 5.31 3.96997 7.6 3.96997 10.05C3.96997 12.64 5.51997 15.35 7.85997 16.92V17.75C7.84997 18.03 7.83997 18.46 8.17997 18.81C8.52997 19.17 9.04997 19.21 9.45997 19.21H14.59C15.13 19.21 15.54 19.06 15.82 18.78C16.2 18.39 16.19 17.89 16.18 17.62V16.92C19.28 14.83 21.23 10.42 19.21 6.36Z"
                fill="#FBCB18"
              />
              <path
                d="M15.26 22C15.2 22 15.13 21.99 15.07 21.97C13.06 21.4 10.95 21.4 8.93997 21.97C8.56997 22.07 8.17997 21.86 8.07997 21.49C7.96997 21.12 8.18997 20.73 8.55997 20.63C10.82 19.99 13.2 19.99 15.46 20.63C15.83 20.74 16.05 21.12 15.94 21.49C15.84 21.8 15.56 22 15.26 22Z"
                fill="#FBCB18"
              />
            </svg>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4">
            <h1 className={`font-medium text-sm font-inter ${theme==='light'?'text-[#000000]':'text-white'}`}>
              Thoughts Time
            </h1>
            <p className={ ` ${theme==='light'?'text-[#787486]':'text-white'} tracking-normal leading-tight text-xs font-normal text-center`}>
              We don’t have any notice for <br /> you, till then you can share{" "}
              <br /> your thoughts with your <br /> peers.
            </p>
            <h2 className={`leading-none tracking-normal text-sm font-medium ${theme==='light'?'text-[#000000] bg-white':'text-white bg-black'}  p-2 rounded-sm`}>
              Write a message
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leftbar;