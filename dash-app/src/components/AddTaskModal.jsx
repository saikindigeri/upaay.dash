import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions/taskActions';
import { useTheme } from '../context/ThemeContext';
import { v4 as uuidv4 } from 'uuid';

const AddTaskModal = ({ section, onClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Work');
  const [priority, setPriority] = useState('Medium');
  const [dueDate, setDueDate] = useState('');
  const dispatch = useDispatch();
  const { theme } = useTheme();

  const inputBase =
    'w-full p-3 mb-4 rounded-lg transition focus:outline-none focus:ring-2 focus:ring-indigo-400';

  const inputClass =
    theme === 'light'
      ? `${inputBase} bg-white border border-gray-200 focus:border-indigo-400`
      : `${inputBase} bg-gray-700 border border-gray-600 text-white focus:border-indigo-400`;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !dueDate) return;
    const task = { id: uuidv4(), title, description, category, priority, dueDate };
    dispatch(addTask(task, section));
    setTitle('');
    setDescription('');
    setCategory('Work');
    setPriority('Medium');
    setDueDate('');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm 
                 animate-fadeIn"
    >
      <div
        className={`relative w-full max-w-md p-6 sm:p-8 rounded-2xl shadow-2xl transform transition-all 
                    scale-100 sm:scale-105
          ${theme === 'light' ? 'bg-white' : 'bg-gray-800'}`}
      >
        {/* Close Button (optional top-right X) */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
        >
          ✕
        </button>

        <h2
          className={`text-2xl font-semibold mb-6 text-center
            ${theme === 'light' ? 'text-gray-900' : 'text-gray-100'}`}
        >
          Add a  Task ✨
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={inputClass}
            required
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={`${inputClass} resize-none h-24`}
            required
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className={inputClass}
          >
            <option>Work</option>
            <option>Personal</option>
            <option>Urgent</option>
          </select>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className={inputClass}
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className={inputClass}
            required
          />

          <div className="flex justify-end space-x-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className={`px-4 py-2 rounded-lg transition shadow-sm hover:shadow
                ${theme === 'light'
                  ? 'bg-pink-100 text-pink-700 hover:bg-pink-200'
                  : 'bg-pink-600/30 text-pink-200 hover:bg-pink-600/50'}`}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-indigo-500 text-white shadow-sm
                         hover:bg-indigo-600 transition hover:shadow"
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTaskModal;
