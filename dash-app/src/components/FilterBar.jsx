import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/actions/taskActions';
import { useTheme } from '../context/ThemeContext';

const FilterBar = () => {
  const dispatch = useDispatch();
  const { theme } = useTheme();
  const { category, priority, dueDate } = useSelector((state) => state.tasks.filter);

  const handleFilterChange = (type, value) => {
    dispatch(setFilter(type, value));
  };

  const selectClass = `w-full sm:w-auto p-2 sm:p-3 rounded-md text-sm sm:text-base font-inter ${
    theme === 'light'
      ? 'border-[#787486] text-[#787486] bg-white'
      : 'border-gray-500 text-white bg-gray-800'
  } border focus:outline-none focus:ring-2 focus:ring-[#5030E5] transition-colors`;

  return (
    <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mb-4 sm:mb-6">
      <select
        value={category}
        onChange={(e) => handleFilterChange('category', e.target.value)}
        className={selectClass}
      >
        <option value="">All Categories</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Urgent">Urgent</option>
      </select>

      <select
        value={priority}
        onChange={(e) => handleFilterChange('priority', e.target.value)}
        className={selectClass}
      >
        <option value="">All Priorities</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>

      <select
        value={dueDate}
        onChange={(e) => handleFilterChange('dueDate', e.target.value)}
        className={selectClass}
      >
        <option value="">All Dates</option>
        <option value="upcoming">Upcoming</option>
        <option value="overdue">Overdue</option>
      </select>
    </div>
  );
};

export default FilterBar;