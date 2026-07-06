import { useEffect, useState } from "react"
import TaskStats from "./components/TaskStats"
import TaskForm from "./components/TaskForm"
import SearchAndFilter from "./components/SearchAndFilter"
import TaskList from "./components/TaskList"

function App() {
  const [taskText, setTaskText] = useState("")
  const [tasks, setTasks] = useState(()=>{
    const storedTasks = localStorage.getItem("tasks")

    if (storedTasks){
      return JSON.parse(storedTasks)
    } else{
      return[]
    }
  })
  const [searchText, setSearchText] = useState("")
  const [filterStatus, setFilterStatus] =  useState("all")
  const [isEditing, setIsEditing] = useState(false)
  const [editingTaskId, setEditingTaskId] = useState(null)




  useEffect(()=>{
    localStorage.setItem("tasks", JSON.stringify(tasks) )
  },[tasks])

  function handleAddTask(event) {
        event.preventDefault()

        if (taskText.trim() === "") {
          return
        }

        if (isEditing) {
          const updatedTasks = tasks.map((task) => {
            if (task.id === editingTaskId) {
              return { ...task, text: taskText.trim() }
            }

            return task
          })

            setTasks(updatedTasks)
            setTaskText("")
            setEditingTaskId(null)
            setIsEditing(false)

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

  function handleStartEdit(task){
    setTaskText(task.text)
    setEditingTaskId(task.id)
    setIsEditing(true)
  }

  function handleCancelEdit (){
    setTaskText("")
    setEditingTaskId(null)
    setIsEditing(false)
  }

  function handleClearCompleted(){
    const activeTasksOnly = tasks.filter((task)=> task.completed===false)
    setTasks(activeTasksOnly)
  }

  const filteredTasks = tasks.filter((task) =>{

    const matchesSearch = task.text.toLowerCase().includes(searchText.toLowerCase())

    if(filterStatus === "active"){
      return matchesSearch && task.completed === false
    }

    if (filterStatus ==="completed"){
      return matchesSearch && task.completed === true
    }

    return matchesSearch
})

  const totalTasks = tasks.length
  const completedTasks = tasks.filter((task)=>task.completed ===true).length
  const activeTasks = tasks.filter((task)=> task.completed === false).length


  return (
    <main className="min-h-screen bg-slate-100 p-6">
      <section className="mx-auto max-w-2xl rounded-xl bg-white p-6 shadow">
        <h1 className="text-3xl font-bold text-slate-800">
          Notes Task Manager
        </h1>

        <p className="mt-2 text-slate-500">
          Add, search, edit, delete, and save your tasks.
        </p>

        <TaskStats
          totalTasks={totalTasks}
          activeTasks={activeTasks}
          completedTasks={completedTasks}
          />
  
        <TaskForm
          taskText={taskText}
          setTaskText={setTaskText}
          isEditing={isEditing}
          handleAddTask={handleAddTask}
          handleCancelEdit={handleCancelEdit}
        />
        
        <SearchAndFilter
          searchText={searchText}
          setSearchText={setSearchText}
          filterStatus={filterStatus}
          setFilterStatus={setFilterStatus}
        />
      <TaskList
        filteredTasks={filteredTasks}
        handleDeleteTask={handleDeleteTask}
        handleToggleComplete={handleToggleComplete}
        handleStartEdit={handleStartEdit}
        handleClearCompleted={handleClearCompleted}
        />


      
        
      </section>
    </main>
  )
}

export default App