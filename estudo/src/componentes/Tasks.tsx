import AddTask from './AddTasks.tsx'




function Task(props: any) {

    console.log(props)

    return (
        <ul className=' block bg-amber-50  text-3xl text-center text-slate-200 font-bold space-y-4 rounded-md'>

            <div className='justify-between items-center p-2'>
                {props.tasks.map((task: any) => {
                    return (
                        <li key={task.id} className='bg-slate-800 p-2 my-2 rounded-md flex justify-between items-center'>
                            <li className='text-slate-200 font-bold'>
                                {task.title}
                            </li>

                            <li className='bg-slate-600 p-2 rounded-md'>
                                {task.completed ? 'Concluída' : 'Pendente'}
                            </li>
                        </li>
                    )
                })}
            </div>
        </ul>
    )
}


export default Task