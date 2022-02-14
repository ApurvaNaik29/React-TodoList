import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { Task } from '../components/Task';
export const TaskList = () => {
    const { filtertasklist } = useContext(GlobalContext)

    useEffect(() => {
    }, [filtertasklist]);


    return (
        <div>
            {filtertasklist.length ? <Task task={filtertasklist} /> : <div className="notask">No tasks available</div>}
        </div>
    )
}
