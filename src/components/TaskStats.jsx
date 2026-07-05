import React from 'react'

function TaskStats ({totalTasks, activeTasks, completedTasks})  {
  return (
    
      
    <div className="mt-4 grid grid-cols-3 gap-3 text-center">
  <div className="rounded-lg bg-slate-100 p-3">
    <p className="text-sm text-slate-500">Total</p>
    <p className="text-xl font-bold text-slate-800">{totalTasks}</p>
  </div>

  <div className="rounded-lg bg-slate-100 p-3">
    <p className="text-sm text-slate-500">Active</p>
    <p className="text-xl font-bold text-slate-800">{activeTasks}</p>
  </div>

  <div className="rounded-lg bg-slate-100 p-3">
    <p className="text-sm text-slate-500">Completed</p>
    <p className="text-xl font-bold text-slate-800">{completedTasks}</p>
  </div>
</div>
    
  )
}

export default TaskStats
