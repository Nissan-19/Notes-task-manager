import React from 'react'

function TaskForm  ({taskText, isEditing, handleAddTask, setTaskText, handleCancelEdit})  {
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
          {isEditing && (
          <button
            type="button"
            onClick={handleCancelEdit}
            className="rounded-lg bg-slate-200 px-4 py-2 font-medium text-slate-700 hover:bg-slate-300"
          >
            Cancel
          </button>
        )}
        </form>
    </div>
  )
}

export default TaskForm
