import { useState } from 'react'
import './App.css'
import Task from './componentes/Tasks.tsx'

// import { useState } from 'react'





function App() {


const [tasks, setTasks] = useState([
  { id: 1, title: 'Tarefa 1', completed: false },
  { id: 2, title: 'Tarefa 2', completed: false },
  { id: 3, title: 'Tarefa 3', completed: false },
])

  return (
    <>
      <div className='w-screen h-screen bg-slate-900 flex justify-center p-6 items-center'>
        
        <div className='w-[500px] '>
          <h1 className='text-3xl text-center text-slate-200 font-bold'>
            Gerenciador de tarefas
          </h1>
          <Task tasks={tasks}/>

        </div>
        

      </div>
    </>
  )
}

export default App
