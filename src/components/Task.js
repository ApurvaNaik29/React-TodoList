import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { FaTrash, FaStar, FaRegStar } from "react-icons/fa";

export const Task = ({ task }) => {
    const list = task;
    const { deleteTask } = useContext(GlobalContext)
    const { addFavTask } = useContext(GlobalContext)

    return (
        <div className="tasklist">
            <ul>
                {list.sort((x, y) => { return (x.fav === y.fav) ? 0 : x.fav ? -1 : 1;} ).map((task) => (
                    <li key={task.id} className={task.fav ? 'fav' : ''} >
                        <span>
                            {task.task}
                        </span>
                        <span style={{ float: 'right' }} >

                            <span>
                                {task.fav ?
                                    <FaStar className="yellow-color mr10" onClick={() => { addFavTask(task.id) }} />
                                    :
                                    <FaRegStar className="yellow-color mr10" onClick={() => { addFavTask(task.id) }} />
                                }
                            </span>
                            <span>
                                <FaTrash className="red-color" onClick={() => { deleteTask(task.id) }} />
                            </span>
                        </span>
                    </li>
                ))}

            </ul>
        </div>
    )
}
