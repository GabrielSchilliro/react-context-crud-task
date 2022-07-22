import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const TaskList = () => {

    const { tasks } = useContext(GlobalContext);

    return (
        <div className='flex justify-center'>
            <div className="w-6/12">
                {tasks.map((task) => (
                    <div key={task.id} className='bg-gray-900 px-20 py-5 text-white shadow-2x1 mb-4 flex justify-between'>
                        <div>
                            <h1>{task.title}</h1>
                            <h6>{task.id}</h6>
                        </div>
                        <div>
                            <button>
                                Edit
                            </button>
                            <button>
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TaskList