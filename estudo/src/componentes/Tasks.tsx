import { ChevronRightCircle, ChevronRightIcon } from "lucide-react"





function Task(props: any) {



    return (
        <ul className=' bg-amber-50  text-2xl p-2 font-bold  rounded-md shadow'>
                {props.tasks.map((task: any) => {
                    return (
                        <div className="flex  items-center gap-2">   

                            <li key={task.id} className='bg-slate-800  p-2 my-2 w-full rounded-md flex justify-between items-center'>
                                <li className='text-slate-200 font-bold text-center'>
                                    {task.title}
                                </li>

                                <li className="bg-slate-600 text-slate-200 text-center p-2 my-1 rounded-md">
                                    <button onClick={() => props.onClick_task(task.id)}  >
                                        {task.completed ? 'Concluída' : 'Pendente'}

                                    </button>
                                </li>


                            </li>

                            <button className='bg-slate-800 text-slate-200 text-center p-4 my-1 rounded-md'>
                               <ChevronRightIcon  />
                            </button>
                        </div>


                    )
                })}
        </ul>
    )
}


export default Task