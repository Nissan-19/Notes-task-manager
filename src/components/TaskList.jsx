import React from 'react'

function TaskList  ({filteredTasks, handleDeleteTask, handleStartEdit, handleToggleComplete, handleClearCompleted})  {

    if (filteredTasks.length === 0) {
        return (
            <p className="mt-6 rounded-lg bg-slate-50 p-4 text-center text-slate-500">
            No tasks found.
            </p>
        )
    }
    
  return (
    <div>

      <div className="mt-6 flex justify-end">
      <button
        onClick={handleClearCompleted}
        className="rounded-md bg-slate-200 px-3 py-1 text-sm font-medium text-slate-700 hover:bg-slate-300"
      >
        Clear Completed
      </button>
    </div>
            

      <ul className="mt- space-y-3">
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
              
                <button
                  onClick={() => handleStartEdit(task)}
                  className="rounded-md bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-700 hover:bg-yellow-200"
                >
                  Edit
                </button>

            </li>
          ))}
        </ul>
    </div>
  )
}

export default TaskList
