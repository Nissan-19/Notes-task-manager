import { useState } from "react"

function App() {
  const [taskText, setTaskText] = useState("")
  const [tasks, setTasks] = useState([])
  const [searchText, setSearchText] = useState("")

  function handleAddTask(event) {
    event.preventDefault()

    if (taskText.trim() === "") {
      return
    }

    const newTask = {
      id: crypto.randomUUID(),
      text: taskText.trim(),
      completed: false,
    }

    setTasks([...tasks, newTask])
    setTaskText("")
  }

  function handleDeleteTask(id) {
    const updatedTasks = tasks.filter((task) => task.id !== id)

    setTasks(updatedTasks)
  }

  function handleToggleComplete(id) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed }
      }

      return task
    })

    setTasks(updatedTasks)
  }

  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(searchText.toLowerCase())
  )

  return (
    <main className="min-h-screen bg-slate-100 p-6">
      <section className="mx-auto max-w-2xl rounded-xl bg-white p-6 shadow">
        <h1 className="text-3xl font-bold text-slate-800">
          Notes Task Manager
        </h1>

        <p className="mt-2 text-slate-500">
          Add, search, edit, delete, and save your tasks.
        </p>

        <form onSubmit={handleAddTask} className="mt-6 flex gap-3">
          <input
            type="text"
            placeholder="Enter a task..."
            value={taskText}
            onChange={(event) => setTaskText(event.target.value)}
            className="flex-1 rounded-lg border border-slate-300 px-4 py-2 outline-none focus:border-blue-500"
          />

          <button className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700">
            Add Task
          </button>
        </form>

        <input
          type="text"
          placeholder="Search tasks..."
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
          className="mt-4 w-full rounded-lg border border-slate-300 px-4 py-2 outline-none focus:border-blue-500"
        />

        <ul className="mt-6 space-y-3">
          {filteredTasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-left text-slate-700"
            >
              <span
                onClick={() => handleToggleComplete(task.id)}
                className={`cursor-pointer ${
                  task.completed
                    ? "line-through text-slate-400"
                    : "text-slate-700"
                }`}
              >
                {task.text}
              </span>

              <button
                onClick={() => handleDeleteTask(task.id)}
                className="rounded-md bg-red-100 px-3 py-1 text-sm font-medium text-red-600 hover:bg-red-200"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}

export default App