import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Link } from 'react-router-dom';

const TaskList = () => {

    const { tasks, delTask, toggleTaskDone } = useContext(GlobalContext);

    return (
        <div className='flex justify-center'>
            <div className="w-6/12">
                {tasks.map((task) => (
                    <div key={task.id} className='bg-gray-900 px-20 py-5 text-white shadow-2x1 mb-4 flex justify-between'>
                        <div>
                            <h1>{task.title}</h1>
                            <p>{task.description}</p>

                            <button
                                className='bg-purple-600 hover:bg-purple-500 py-2 px-4 mt-2'
                                onClick={() => toggleTaskDone(task.id)}>
                                {task.done ? 'Undone' : 'Done'}
                            </button>
                        </div>
                        <div>
                            <Link
                                to={`/edit/${task.id}`}
                                className='bg-gray-600 hover:bg-gray500 py-2 px-4 mr-2'>
                                Edit
                            </Link>
                            <button
                                className='bg-red-600 hover:bg-red-500 py-2 px-4 mr-2'
                                onClick={() => delTask(task.id)}
                            >Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TaskList