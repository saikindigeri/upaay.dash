import React from 'react';
import { useDispatch } from 'react-redux';
import { moveTask } from '../redux/actions/taskActions';
import { useTheme } from '../context/ThemeContext';

const TaskCard = ({ task, section }) => {
  const dispatch = useDispatch();
  const { theme } = useTheme();

  const handleStatusChange = (e) => {
    const destinationSection = e.target.value;
    if (destinationSection !== section) {
      dispatch(moveTask(task.id, section, destinationSection));
    }
  };

  return (
    <div
      className={`p-4 sm:p-6 mb-2 rounded-2xl shadow-md ${
        theme === 'light' ? 'bg-white' : 'bg-gray-900'
      }`}
    >
      {/* Top container */}
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <div
          className={`font-inter bg-[#DFA87433] text-xs w-13 h-4 flex items-center justify-center rounded-sm font-medium leading-none tracking-normal ${
            theme === 'light' ? 'text-[#D58D49]' : 'text-[#DFA874]'
          }`}
        >
          {task.priority}
        </div>
        <div className="flex items-center gap-1">
          <div
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${
              theme === 'light' ? 'bg-black' : 'bg-white'
            }`}
          ></div>
          <div
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${
              theme === 'light' ? 'bg-black' : 'bg-white'
            }`}
          ></div>
          <div
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${
              theme === 'light' ? 'bg-black' : 'bg-white'
            }`}
          ></div>
        </div>
      </div>

      {/* Middle container */}
      <div className="flex flex-col gap-2 mb-3 sm:mb-4">
        <h1
          className={`font-inter font-semibold text-base sm:text-lg tracking-normal leading-tight ${
            theme === 'light' ? 'text-[#0D062D]' : 'text-white'
          }`}
        >
          {task.title}
        </h1>
        <p
          className={`font-inter font-normal text-xs sm:text-sm leading-tight tracking-normal ${
            theme === 'light' ? 'text-[#787486]' : 'text-gray-300'
          }`}
        >
          {task.description}
        </p>
      </div>

      {/* Last container */}
      <div className="flex items-center justify-between">
        <div className="flex">
          <img
            src="./public/first.png"
            alt="profile"
            className="w-5 h-5 sm:w-6 sm:h-6 rounded-full object-cover border-2 border-white -ml-2"
          />
          <img
            src="./public/second.png"
            alt="profile"
            className="w-5 h-5 sm:w-6 sm:h-6 rounded-full object-cover border-2 border-white -ml-2"
          />
          <img
            src="./public/third.png"
            alt="profile"
            className="w-5 h-5 sm:w-6 sm:h-6 rounded-full object-cover border-2 border-white -ml-2"
          />
        </div>
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          <div className="flex items-center gap-2 sm:gap-3 mt-2">
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 15.2067C7.54 15.2067 7.10667 14.9733 6.8 14.5667L5.8 13.2333C5.78 13.2067 5.7 13.1733 5.66667 13.1667H5.33334C2.55334 13.1667 0.833336 12.4133 0.833336 8.66667V5.33334C0.833336 2.38667 2.38667 0.833336 5.33334 0.833336H10.6667C13.6133 0.833336 15.1667 2.38667 15.1667 5.33334V8.66667C15.1667 11.6133 13.6133 13.1667 10.6667 13.1667H10.3333C10.28 13.1667 10.2333 13.1933 10.2 13.2333L9.2 14.5667C8.89334 14.9733 8.46 15.2067 8 15.2067ZM5.33334 1.83334C2.94667 1.83334 1.83334 2.94667 1.83334 5.33334V8.66667C1.83334 11.68 2.86667 12.1667 5.33334 12.1667H5.66667C6.00667 12.1667 6.39334 12.36 6.6 12.6333L7.6 13.9667C7.83334 14.2733 8.16667 14.2733 8.4 13.9667L9.4 12.6333C9.62 12.34 9.96667 12.1667 10.3333 12.1667H10.6667C13.0533 12.1667 14.1667 11.0533 14.1667 8.66667V5.33334C14.1667 2.94667 13.0533 1.83334 10.6667 1.83334H5.33334Z"
                fill={theme === 'light' ? '#787486' : '#FFFFFF'}
              />
              <path
                d="M8 8C7.62667 8 7.33334 7.7 7.33334 7.33333C7.33334 6.96666 7.63334 6.66666 8 6.66666C8.36667 6.66666 8.66667 6.96666 8.66667 7.33333C8.66667 7.7 8.37334 8 8 8Z"
                fill={theme === 'light' ? '#787486' : '#FFFFFF'}
              />
              <path
                d="M10.6667 8C10.2933 8 10 7.7 10 7.33333C10 6.96666 10.3 6.66666 10.6667 6.66666C11.0333 6.66666 11.3333 6.96666 11.3333 7.33333C11.3333 7.7 11.04 8 10.6667 8Z"
                fill={theme === 'light' ? '#787486' : '#FFFFFF'}
              />
              <path
                d="M5.33333 8C4.96 8 4.66666 7.7 4.66666 7.33333C4.66666 6.96666 4.96666 6.66666 5.33333 6.66666C5.7 6.66666 6 6.96666 6 7.33333C6 7.7 5.70666 8 5.33333 8Z"
                fill={theme === 'light' ? '#787486' : '#FFFFFF'}
              />
            </svg>
            <h2
              className={`font-inter text-xs font-medium tracking-normal leading-none ${
                theme === 'light' ? 'text-[#787486]' : 'text-gray-300'
              }`}
            >
              12 comments
            </h2>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 mt-2">
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.3334 7.33334V11.3333C14.3334 14 13.6667 14.6667 11.0001 14.6667H4.33341C1.66674 14.6667 1.00008 14 1.00008 11.3333V4.66667C1.00008 2 1.66674 1.33334 4.33341 1.33334H5.33341C6.33341 1.33334 6.55341 1.62667 6.93341 2.13334L7.93341 3.46667C8.18674 3.8 8.33341 4 9.00008 4H11.0001C13.6667 4 14.3334 4.66667 14.3334 7.33334Z"
                stroke={theme === 'light' ? '#787486' : '#FFFFFF'}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.33333 1.33334H11.3333C12.6667 1.33334 13.3333 2 13.3333 3.33334V4.25334"
                stroke={theme === 'light' ? '#787486' : '#FFFFFF'}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.33333 10H6"
                stroke={theme === 'light' ? '#787486' : '#FFFFFF'}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h2
              className={`font-inter text-xs font-medium tracking-normal leading-none ${
                theme === 'light' ? 'text-[#787486]' : 'text-gray-300'
              }`}
            >
              0 files
            </h2>
          </div>
        </div>
      </div>

      {/* Status Dropdown */}
      <select
        value={section}
        onChange={handleStatusChange}
        className={`mt-3 sm:mt-4 w-full sm:w-1/2 cursor-pointer rounded-lg border px-3 py-2 text-xs sm:text-sm shadow-sm transition focus:outline-none focus:ring-2 focus:ring-[#5030E5] focus:border-[#5030E5] hover:border-[#5030E5] ${
          theme === 'light'
            ? 'border-gray-300 text-gray-700 bg-white'
            : 'border-gray-600 text-white bg-gray-800'
        }`}
      >
        <option value="todo">To Do</option>
        <option value="inProgress">In Progress</option>
        <option value="done">Done</option>
      </select>
    </div>
  );
};

export default TaskCard;