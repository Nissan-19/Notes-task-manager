import React from 'react'

function TaskForm  ({taskText, isEditing, handleAddTask, setTaskText})  {
  return (
    <div>
      <form onSubmit={handleAddTask} className="mt-6 flex gap-3">
          <input
            type="text"
            placeholder="Enter a task..."
            value={taskText}
            onChange={(event) => setTaskText(event.target.value)}
            className="flex-1 rounded-lg border border-slate-300 px-4 py-2 outline-none focus:border-blue-500"
          />

          <button className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700">
            {isEditing ? "Update Task":"Add task"}
          </button>
        </form>
    </div>
  )
}

export default TaskForm
