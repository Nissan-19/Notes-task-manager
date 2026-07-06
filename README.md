# Notes Task Manager

A React + Tailwind CSS task management app where users can add, edit, delete, search, filter, complete, and save tasks using localStorage.

## Features

- Add new tasks
- Edit existing tasks
- Delete tasks
- Mark tasks as complete or incomplete
- Search tasks
- Filter tasks by:
  - All
  - Active
  - Completed
- Show task counts:
  - Total tasks
  - Active tasks
  - Completed tasks
- Clear completed tasks
- Clear all tasks
- Save tasks to localStorage
- Responsive design using Tailwind CSS
- Component-based React structure

## Tech Stack

- React
- JavaScript
- Tailwind CSS
- Vite
- localStorage

## What I Learned

While building this project, I practiced:

- React state management with `useState`
- Side effects with `useEffect`
- Controlled inputs
- Adding, editing, deleting, and updating items in an array
- Using `map()`, `filter()`, and conditional rendering
- Saving and loading data with localStorage
- Splitting UI into reusable components
- Passing data and functions through props
- Styling with Tailwind CSS
- Creating responsive layouts

## Project Structure

```txt
src/
├── components/
│   ├── TaskStats.jsx
│   ├── TaskForm.jsx
│   ├── SearchAndFilter.jsx
│   └── TaskList.jsx
├── App.jsx
├── main.jsx
└── index.css

Future Improvements
Add task priority
Add due dates
Add categories
Add dark mode
Add drag-and-drop task sorting
