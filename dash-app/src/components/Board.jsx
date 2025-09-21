import React, { useState, Component } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { IoToggleOutline } from 'react-icons/io5';
import TaskCard from './TaskCard';
import AddTaskModal from './AddTaskModal';
import FilterBar from './FilterBar';
import { moveTask } from '../redux/actions/taskActions';
import { useTheme } from '../context/ThemeContext';
import Leftbar from './Leftbar';

// Simple Error Boundary Component
class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong. Please try refreshing the page.</div>;
    }
    return this.props.children;
  }
}

const Board = () => {
  const [modalSection, setModalSection] = useState(null);
  const tasks = useSelector((state) => state.tasks.tasks);
  const filter = useSelector((state) => state.tasks.filter);

  const dispatch = useDispatch();
  const { theme, toggleTheme } = useTheme();

  const filterTasks = (sectionTasks) => {
    const { category, priority, dueDate } = filter;
    const today = new Date().toISOString().split('T')[0];

    return sectionTasks.filter((task) => {
      if (category && task.category !== category) return false;
      if (priority && task.priority !== priority) return false;
      if (dueDate) {
        if (!task.dueDate) return false;
        if (dueDate === 'upcoming' && task.dueDate < today) return false;
        if (dueDate === 'overdue' && task.dueDate >= today) return false;
      }
      return true;
    });
  };

  const onDragEnd = (result) => {
    const { source, destination, draggableId } = result;
    if (!destination) return;
    if (source.droppableId === destination.droppableId && source.index === destination.index) return;
    dispatch(moveTask(draggableId, source.droppableId, destination.droppableId));
  };

  return (
    <div className={`min-h-screen ${theme === 'light' ? 'bg-[#FFFFFF]' : 'bg-gray-900'} p-4 sm:p-6 flex flex-col md:flex-row w-full`}>
    
      <Leftbar   />
      <div className="w-full md:w-[calc(100%-16rem)] lg:w-[calc(100%-20%)] md:ml-4 lg:ml-8 mt-4 md:mt-0">
        {/* Initial div with header kinda */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
          <div className="w-full sm:w-[40%] bg-[#F5F5F5] h-11 flex rounded-md items-center gap-2 p-2">
            <svg width="20" height="20" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.3417 19.25C16.1512 19.25 20.0501 15.3512 20.0501 10.5417C20.0501 5.7322 16.1512 1.83334 11.3417 1.83334C6.53225 1.83334 2.63339 5.7322 2.63339 10.5417C2.63339 15.3512 6.53225 19.25 11.3417 19.25Z"
                stroke={theme === 'light' ? '#787486' : '#FFFFFF'}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20.9667 20.1667L19.1334 18.3333"
                stroke={theme === 'light' ? '#787486' : '#FFFFFF'}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className={`text-sm ${theme === 'light' ? 'text-[#787486]' : 'text-white'} font-inter font-normal leading-tight tracking-normal`}>
              Search for anything...
            </p>
          </div>
          {/* Right side div notifications and metadata */}
          <div className="w-full sm:w-[40%] bg-white h-11 flex items-center justify-between mt-4 sm:mt-0">
            <div className="flex items-center gap-3 sm:gap-4 ml-4 sm:ml-8">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8 2V5"
                  stroke={theme === 'light' ? '#787486' : '#FFFFFF'}
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 2V5"
                  stroke={theme === 'light' ? '#787486' : '#FFFFFF'}
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.5 9.09H20.5"
                  stroke={theme === 'light' ? '#787486' : '#FFFFFF'}
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
                  stroke={theme === 'light' ? '#787486' : '#FFFFFF'}
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.9955 13.7H12.0045"
                  stroke={theme === 'light' ? '#787486' : '#FFFFFF'}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.29431 13.7H8.30329"
                  stroke={theme === 'light' ? '#787486' : '#FFFFFF'}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.29431 16.7H8.30329"
                  stroke={theme === 'light' ? '#787486' : '#FFFFFF'}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M17 18.4301H13L8.54999 21.39C7.88999 21.83 7 21.3601 7 20.5601V18.4301C4 18.4301 2 16.4301 2 13.4301V7.42999C2 4.42999 4 2.42999 7 2.42999H17C20 2.42999 22 4.42999 22 7.42999V13.4301C22 16.4301 20 18.4301 17 18.4301Z"
                  stroke={theme === 'light' ? '#787486' : '#FFFFFF'}
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 11.36V11.15C12 10.47 12.42 10.11 12.84 9.82001C13.25 9.54001 13.66 9.18002 13.66 8.52002C13.66 7.60002 12.92 6.85999 12 6.85999C11.08 6.85999 10.34 7.60002 10.34 8.52002"
                  stroke={theme === 'light' ? '#787486' : '#FFFFFF'}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.9955 13.75H12.0045"
                  stroke={theme === 'light' ? '#787486' : '#FFFFFF'}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12.02 2.91C8.71 2.91 6.02 5.6 6.02 8.91V11.8C6.02 12.41 5.76 13.34 5.45 13.86L4.3 15.77C3.59 16.95 4.08 18.26 5.38 18.7C9.69 20.14 14.34 20.14 18.65 18.7C19.86 18.3 20.39 16.87 19.73 15.77L18.58 13.86C18.28 13.34 18.02 12.41 18.02 11.8V8.91C18.02 5.61 15.32 2.91 12.02 2.91Z"
                  stroke={theme === 'light' ? '#787486' : '#FFFFFF'}
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                />
                <path
                  d="M13.87 3.2C13.56 3.11 13.24 3.04 12.91 3C11.95 2.88 11.03 2.95 10.17 3.2C10.46 2.46 11.18 1.94 12.02 1.94C12.86 1.94 13.58 2.46 13.87 3.2Z"
                  stroke={theme === 'light' ? '#787486' : '#FFFFFF'}
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.02 19.06C15.02 20.71 13.67 22.06 12.02 22.06C11.2 22.06 10.44 21.72 9.89999 21.18C9.35999 20.64 9.01999 19.88 9.01999 19.06"
                  stroke={theme === 'light' ? '#787486' : '#FFFFFF'}
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                />
                <circle cx="18" cy="4" r="3" fill="#D8727D" />
              </svg>
              <button
                onClick={toggleTheme}
                className={`px-3 py-1 rounded ${theme === 'light' ? 'bg-gray-200 text-gray-900' : 'bg-gray-700 text-white'}`}
              >
                <IoToggleOutline className="text-xl" />
              </button>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="space-y-1">
                <h1 className={`font-inter font-normal text-sm sm:text-base ${theme === 'light' ? 'text-black' : 'text-white'} tracking-normal leading-none`}>
                  Palak Jain
                </h1>
                <h1 className={`text-sm ${theme === 'light' ? 'text-[#787486]' : 'text-white'} font-normal leading-none tracking-normal`}>
                  Rajasthan, India
                </h1>
              </div>
              <div className="flex items-center gap-2 mr-4">
                <img src="./public/profile.png" alt="profile" className="w-8 sm:w-10 h-8 sm:h-10 rounded-full object-cover" />
                <svg width="12" height="6" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.00002 6.60001C6.47502 6.60001 5.95002 6.39751 5.55252 6.00001L0.662515 1.11001C0.445015 0.892511 0.445015 0.532511 0.662515 0.315011C0.880015 0.097511 1.24001 0.097511 1.45751 0.315011L6.34752 5.20501C6.70752 5.56501 7.29252 5.56501 7.65252 5.20501L12.5425 0.315011C12.76 0.097511 13.12 0.097511 13.3375 0.315011C13.555 0.532511 13.555 0.892511 13.3375 1.11001L8.44752 6.00001C8.05002 6.39751 7.52502 6.60001 7.00002 6.60001Z"
                    fill={theme === 'light' ? '#292D32' : '#FFFFFF'}
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-1 border-[#DBDBDB] my-3 sm:my-4" />

        <div className="mb-4 sm:mb-5 flex flex-col sm:flex-row items-start sm:items-center justify-between">
          <div className="flex flex-col gap-4 sm:gap-8 w-full sm:w-auto">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <h1 className={`font-inter font-semibold text-2xl sm:text-4xl md:text-[46px] leading-none tracking-normal ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                Mobile App
              </h1>
              <svg width="24" height="24" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.25 27.5H18.75C25 27.5 27.5 25 27.5 18.75V11.25C27.5 5 25 2.5 18.75 2.5H11.25C5 2.5 2.5 5 2.5 11.25V18.75C2.5 25 5 27.5 11.25 27.5Z"
                  fill="#5030E5"
                  fillOpacity="0.2"
                />
                <path
                  d="M16.1375 9.80001L9.64998 16.2875C9.39998 16.5375 9.16249 17.025 9.11249 17.375L8.76249 19.85C8.63749 20.75 9.26249 21.375 10.1625 21.25L12.6375 20.9C12.9875 20.85 13.475 20.6125 13.725 20.3625L20.2125 13.875C21.325 12.7625 21.8625 11.4625 20.2125 9.81251C18.5625 8.15001 17.2625 8.67501 16.1375 9.80001Z"
                  stroke="#5030E5"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.2125 10.725C15.7625 12.6875 17.3 14.2375 19.275 14.7875"
                  stroke="#5030E5"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <svg width="24" height="24" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.25 27.5H18.75C25 27.5 27.5 25 27.5 18.75V11.25C27.5 5 25 2.5 18.75 2.5H11.25C5 2.5 2.5 5 2.5 11.25V18.75C2.5 25 5 27.5 11.25 27.5Z"
                  fill="#5030E5"
                  fillOpacity="0.2"
                />
                <path
                  d="M18.0002 10.683C20.3829 10.683 22.3166 12.6175 22.3166 15.0003C22.3164 17.383 20.3828 19.3167 18.0002 19.3167H16.9933C16.6372 19.3167 16.3429 19.0225 16.3429 18.6664C16.3431 18.3103 16.6373 18.0169 16.9933 18.0169H18.0002C19.6638 18.0168 21.0166 16.664 21.0168 15.0003C21.0168 13.3366 19.6639 11.9838 18.0002 11.9837H17.0002C16.644 11.9837 16.3498 11.6895 16.3498 11.3333C16.3498 10.9785 16.636 10.683 17.0002 10.683H18.0002Z"
                  fill="#5030E5"
                  stroke="#5030E5"
                  strokeWidth="0.3"
                />
                <path
                  d="M13.0003 10.683C13.3564 10.6831 13.6497 10.9773 13.6497 11.3333C13.6497 11.6894 13.3564 11.9836 13.0003 11.9837H12.0003C10.3365 11.9837 8.98373 13.3365 8.98373 15.0003C8.9839 16.664 10.3366 18.0169 12.0003 18.0169H13.0003C13.3562 18.0171 13.6496 18.3104 13.6497 18.6664C13.6497 19.0224 13.3564 19.3166 13.0003 19.3167H12.0003C9.61759 19.3167 7.68312 17.383 7.68295 15.0003C7.68295 12.6175 9.61749 10.683 12.0003 10.683H13.0003Z"
                  fill="#5030E5"
                  stroke="#5030E5"
                  strokeWidth="0.3"
                />
                <path
                  d="M17.6663 14.3496C18.0225 14.3496 18.3167 14.6438 18.3167 15C18.3167 15.3562 18.0225 15.6504 17.6663 15.6504H12.3333C11.9772 15.6504 11.6829 15.3562 11.6829 15C11.6829 14.6438 11.9772 14.3496 12.3333 14.3496H17.6663Z"
                  fill="#5030E5"
                  stroke="#5030E5"
                  strokeWidth="0.3"
                />
              </svg>
            </div>
            <div>
              <FilterBar />
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:gap-8 w-full sm:w-auto mt-4 sm:mt-0">
            <div className="flex items-center gap-2 sm:gap-3">
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6 9H12"
                  stroke="#5030E5"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 12V6"
                  stroke="#5030E5"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.75 16.5H11.25C15 16.5 16.5 15 16.5 11.25V6.75C16.5 3 15 1.5 11.25 1.5H6.75C3 1.5 1.5 3 1.5 6.75V11.25C1.5 15 3 16.5 6.75 16.5Z"
                  fill="#5030E5"
                  fillOpacity="0.2"
                />
              </svg>
              <h2 className={`font-inter font-medium text-sm sm:text-base tracking-normal leading-none ${theme === 'light' ? 'text-[#5030E5]' : 'text-white'}`}>
                Invite
              </h2>
              <div className="flex">
                <img src="./public/first.png" alt="profile" className="w-6 sm:w-8 h-6 sm:h-8 rounded-full object-cover border-2 border-white -ml-2" />
                <img src="./public/second.png" alt="profile" className="w-6 sm:w-8 h-6 sm:h-8 rounded-full object-cover border-2 border-white -ml-2" />
                <img src="./public/third.png" alt="profile" className="w-6 sm:w-8 h-6 sm:h-8 rounded-full object-cover border-2 border-white -ml-2" />
                <img src="./public/fourth.png" alt="profile" className="w-6 sm:w-8 h-6 sm:h-8 rounded-full object-cover border-2 border-white -ml-2" />
                <img src="./public/profile.png" alt="profile" className="w-6 sm:w-8 h-6 sm:h-8 rounded-full object-cover border-2 border-white -ml-2" />
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 sm:gap-4">
              <div className="flex items-center justify-center gap-2 cursor-pointer border border-[#787486] h-8 sm:h-10 w-20 sm:w-24 rounded-md">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.1064 7.74666C6.0864 7.74666 6.07307 7.74666 6.05307 7.74666C6.01973 7.73999 5.97307 7.73999 5.93307 7.74666C3.99973 7.68666 2.53973 6.16666 2.53973 4.29333C2.53973 2.38666 4.09307 0.833328 5.99973 0.833328C7.9064 0.833328 9.45973 2.38666 9.45973 4.29333C9.45307 6.16666 7.9864 7.68666 6.1264 7.74666C6.11973 7.74666 6.11307 7.74666 6.1064 7.74666ZM5.99973 1.83333C4.6464 1.83333 3.53973 2.93999 3.53973 4.29333C3.53973 5.62666 4.57973 6.69999 5.9064 6.74666C5.9464 6.73999 6.03307 6.73999 6.11973 6.74666C7.4264 6.68666 8.45307 5.61333 8.45973 4.29333C8.45973 2.93999 7.35307 1.83333 5.99973 1.83333Z"
                    fill={theme === 'light' ? '#787486' : '#FFFFFF'}
                  />
                  <path
                    d="M11.0264 7.83334C11.0064 7.83334 10.9864 7.83334 10.9664 7.82667C10.6931 7.85334 10.4131 7.66001 10.3864 7.38667C10.3597 7.11334 10.5264 6.86667 10.7997 6.83334C10.8797 6.82667 10.9664 6.82667 11.0397 6.82667C12.0131 6.77334 12.7731 5.97334 12.7731 4.99334C12.7731 3.98001 11.9531 3.16 10.9397 3.16C10.6664 3.16667 10.4397 2.94001 10.4397 2.66667C10.4397 2.39334 10.6664 2.16667 10.9397 2.16667C12.4997 2.16667 13.7731 3.44001 13.7731 5.00001C13.7731 6.53334 12.5731 7.77334 11.0464 7.83334C11.0397 7.83334 11.0331 7.83334 11.0264 7.83334Z"
                    fill={theme === 'light' ? '#787486' : '#FFFFFF'}
                  />
                  <path
                    d="M6.11307 15.0333C4.80641 15.0333 3.49307 14.7 2.49974 14.0333C1.57307 13.42 1.06641 12.58 1.06641 11.6667C1.06641 10.7533 1.57307 9.90667 2.49974 9.28667C4.49974 7.96001 7.73974 7.96001 9.72641 9.28667C10.6464 9.90001 11.1597 10.74 11.1597 11.6533C11.1597 12.5667 10.6531 13.4133 9.72641 14.0333C8.72641 14.7 7.41974 15.0333 6.11307 15.0333ZM3.05307 10.1267C2.41307 10.5533 2.06641 11.1 2.06641 11.6733C2.06641 12.24 2.41974 12.7867 3.05307 13.2067C4.71307 14.32 7.51307 14.32 9.17307 13.2067C9.81307 12.78 10.1597 12.2333 10.1597 11.66C10.1597 11.0933 9.80641 10.5467 9.17307 10.1267C7.51307 9.02 4.71307 9.02 3.05307 10.1267Z"
                    fill={theme === 'light' ? '#787486' : '#FFFFFF'}
                  />
                  <path
                    d="M12.2264 13.8333C11.9931 13.8333 11.7864 13.6733 11.7397 13.4333C11.6864 13.16 11.8597 12.9 12.1264 12.84C12.5464 12.7533 12.9331 12.5867 13.2331 12.3533C13.6131 12.0667 13.8197 11.7067 13.8197 11.3267C13.8197 10.9467 13.6131 10.5867 13.2397 10.3067C12.9464 10.08 12.5797 9.92 12.1464 9.82C11.8797 9.76 11.7064 9.49333 11.7664 9.22C11.8264 8.95333 12.0931 8.78 12.3664 8.84C12.9397 8.96666 13.4397 9.19333 13.8464 9.50666C14.4664 9.97333 14.8197 10.6333 14.8197 11.3267C14.8197 12.02 14.4597 12.68 13.8397 13.1533C13.4264 13.4733 12.9064 13.7067 12.3331 13.82C12.2931 13.8333 12.2597 13.8333 12.2264 13.8333Z"
                    fill={theme === 'light' ? '#787486' : '#FFFFFF'}
                  />
                </svg>
                <h2 className={`text-sm sm:text-base font-inter font-medium leading-none ${theme === 'light' ? 'text-[#787486]' : 'text-white'}`}>
                  Share
                </h2>
              </div>
              <div className="w-px h-8 sm:h-10 bg-[#787486]"></div>
              <svg
                width="36"
                height="36"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="40" height="40" rx="6" fill="#5030E5" />
                <path
                  d="M25.925 21.125H14.075C12.95 21.125 12.5 21.6 12.5 22.8V25.825C12.5 27.025 12.95 27.5 14.075 27.5H25.925C27.05 27.5 27.5 27.025 27.5 25.825V22.8C27.5 21.6 27.05 21.125 25.925 21.125Z"
                  fill="white"
                />
                <path
                  d="M25.925 12.5H14.075C12.95 12.5 12.5 12.975 12.5 14.175V17.2C12.5 18.3917 12.95 18.875 14.075 18.875H25.925C27.05 18.875 27.5 18.4 27.5 17.2V14.175C27.5 12.975 27.05 12.5 25.925 12.5Z"
                  fill="white"
                />
              </svg>
              <svg
                width="18"
                height="18"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.1949 7.99994C16.5756 7.99994 17.6949 6.88065 17.6949 5.49994C17.6949 4.11923 16.5756 2.99994 15.1949 2.99994C13.8142 2.99994 12.6949 4.11923 12.6949 5.49994C12.6949 6.88065 13.8142 7.99994 15.1949 7.99994Z"
                  stroke={theme === 'light' ? '#787486' : '#FFFFFF'}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.5 7.99994C6.88072 7.99994 8 6.88065 8 5.49994C8 4.11923 6.88072 2.99994 5.5 2.99994C4.11929 2.99994 3 4.11923 3 5.49994C3 6.88065 4.11929 7.99994 5.5 7.99994Z"
                  stroke={theme === 'light' ? '#787486' : '#FFFFFF'}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.1949 17.9999C16.5756 17.9999 17.6949 16.8807 17.6949 15.4999C17.6949 14.1192 16.5756 12.9999 15.1949 12.9999C13.8142 12.9999 12.6949 14.1192 12.6949 15.4999C12.6949 16.8807 13.8142 17.9999 15.1949 17.9999Z"
                  stroke={theme === 'light' ? '#787486' : '#FFFFFF'}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.5 17.9999C6.88072 17.9999 8 16.8807 8 15.4999C8 14.1192 6.88072 12.9999 5.5 12.9999C4.11929 12.9999 3 14.1192 3 15.4999C3 16.8807 4.11929 17.9999 5.5 17.9999Z"
                  stroke={theme === 'light' ? '#787486' : '#FFFFFF'}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        <ErrorBoundary>
          <DragDropContext onDragEnd={onDragEnd}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {['todo', 'inProgress', 'done'].map((section) => {
                const colors = {
                  todo: { dot: 'bg-[#5030E5]', border: 'border-[#5030E5]' },
                  inProgress: { dot: 'bg-[#FFA500]', border: 'border-[#FFA500]' },
                  done: { dot: 'bg-[#76A5EA]', border: 'border-[#8BC48A]' },
                };

                return (
                  <Droppable droppableId={section} key={section}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className={`p-3 sm:p-4 rounded-2xl min-h-[250px] sm:min-h-[300px] ${
                          theme === 'light' ? 'bg-[#F5F5F5]' : 'bg-gray-800'
                        } ${snapshot.isDraggingOver ? 'bg-blue-100' : ''}`}
                      >
                        <div
                          className={`flex items-center justify-between mb-3 sm:mb-4 border-b-4 ${colors[section].border}`}
                        >
                          <div className="flex items-center gap-2 mb-3 sm:mb-4">
                            <div className={`w-2 h-2 rounded-full ${colors[section].dot}`}></div>
                            <h2
                              className={`text-sm sm:text-base font-medium tracking-normal leading-none ${
                                theme === 'light' ? 'text-black' : 'text-white'
                              }`}
                            >
                              {section === 'todo'
                                ? 'To Do'
                                : section === 'inProgress'
                                ? 'On Progress'
                                : 'Done'}
                            </h2>
                            <div className="w-5 flex items-center justify-center h-5 rounded-full bg-[#E0E0E0] text-xs font-normal leading-none tracking-normal">
                              4
                            </div>
                          </div>
                          <button
                            className="flex items-baseline justify-center mb-3 sm:mb-4"
                            onClick={() => setModalSection(section)}
                          >
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                opacity="0.2"
                                d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z"
                                fill="#5030E5"
                              />
                              <path
                                d="M16 11.25H12.75V8C12.75 7.59 12.41 7.25 12 7.25C11.59 7.25 11.25 7.59 11.25 8V11.25H8C7.59 11.25 7.25 11.59 7.25 12C7.25 12.41 7.59 12.75 8 12.75H11.25V16C11.25 16.41 11.59 16.75 12 16.75C12.41 16.75 12.75 16.41 12.75 16V12.75H16C16.41 12.75 16.75 12.41 16.75 12C16.75 11.59 16.41 11.25 16 11.25Z"
                                fill="#5030E5"
                              />
                            </svg>
                          </button>
                        </div>
                        {filterTasks(tasks[section]).map((task, index) => (
                          <Draggable key={task.id} draggableId={task.id} index={index}>
                            {(provided, snapshot) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className={`mb-2 ${snapshot.isDragging ? 'opacity-75' : ''}`}
                              >
                                <TaskCard task={task} section={section} />
                              </div>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                );
              })}
            </div>
          </DragDropContext>
        </ErrorBoundary>

        {modalSection && (
          <AddTaskModal section={modalSection} onClose={() => setModalSection(null)} />
        )}
      </div>
    </div>
  );
};

export default Board;