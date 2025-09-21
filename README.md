# Dash-App

A modern, responsive dashboard application built with React, Tailwind CSS, Redux, and `@hello-pangea/dnd`. The app features a collapsible sidebar (`Leftbar`) and a task management board (`Board`) with drag-and-drop functionality, task filtering, and light/dark theme switching.



## Features


- **Task Management Board (`Board`)**: Displays tasks in columns (To Do, In Progress, Done) with drag-and-drop support using `@hello-pangea/dnd`.
- **Task Filtering**: Filter tasks by category, priority, and due date via the `FilterBar` component.
- **Theme Switching**: Supports light and dark modes with consistent styling across components.
- **Responsive Design**: Optimized for mobile (`< 640px`), tablet (`≥ 640px`), and desktop (`≥ 1024px`) using Tailwind CSS.
- **Error Handling**: Includes an `ErrorBoundary` component to handle rendering errors gracefully.
- **Task Creation**: Add new tasks via the `AddTaskModal` component, integrated with Redux.

## Tech Stack

- **React**: Frontend JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Redux**: State management for tasks and filters.
- **@hello-pangea/dnd**: Drag-and-drop functionality for task reordering.
- **React Icons**: Icon library for UI elements.
- **Vite**: Build tool and development server (assumed; replace with Create React App if applicable).

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/dash-app.git
   cd dash-app
   npm install --force
   npm run dev

   
