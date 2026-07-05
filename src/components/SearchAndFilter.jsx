import React from 'react'

function SearchAndFilter  ({searchText, setSearchText,filterStatus, setFilterStatus})  {
  return (
    <div>
      <input
          type="text"
          placeholder="Search tasks..."
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
          className="mt-4 w-full rounded-lg border border-slate-300 px-4 py-2 outline-none focus:border-blue-500"
        />

        <div className="mt-4 flex gap-2">
            <button
              onClick={() => setFilterStatus("all")}
              className={`rounded-md px-3 py-1 text-sm font-medium ${
                filterStatus === "all"
                  ? "bg-blue-600 text-white"
                  : "bg-slate-200 text-slate-700 hover:bg-slate-300"
              }`}
            >
              All
            </button>

            <button
              onClick={() => setFilterStatus("active")}
              className={`rounded-md px-3 py-1 text-sm font-medium ${
                filterStatus === "active"
                  ? "bg-blue-600 text-white"
                  : "bg-slate-200 text-slate-700 hover:bg-slate-300"
              }`}
            >
              Active
            </button>

            <button
              onClick={() => setFilterStatus("completed")}
              className={`rounded-md px-3 py-1 text-sm font-medium ${
                filterStatus === "completed"
                  ? "bg-blue-600 text-white"
                  : "bg-slate-200 text-slate-700 hover:bg-slate-300"
              }`}
            >
              Completed
          </button>
</div>
    </div>
  )
}

export default SearchAndFilter
