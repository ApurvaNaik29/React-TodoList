import React, { useContext, useState, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const AddTask = () => {
    const [task, addTask] = useState('')
    const { insertTask } = useContext(GlobalContext)
    const { searchTask } = useContext(GlobalContext)
    const [searchKey, setSearchKey] = useState('')
    const { tasklist } = useContext(GlobalContext)


    useEffect(() => {
    }, [tasklist])

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (task !== "") {
                const taskobj = {
                    id: Math.floor(Math.random() * 100000),
                    task,
                    complete: false
                }

                insertTask(taskobj)
                addTask('')
                return;
            }
        }

    }

    const handleSearch = (e) => {
        setSearchKey(e.target.value)
        searchTask(e.target.value)
    }

    return (
        <div className="data-container">
            <span className="headerTxt" >Todo List</span>
            <div className="formContainer">

                <form>
                    <input type="text" className="inputCont" value={task} placeholder="Enter Task" onChange={(e) => addTask(e.target.value)} onKeyPress={(e) => handleKeyDown(e)} />
                    <input type="text" className="inputCont" value={searchKey} placeholder="Search Task" onChange={(e) => handleSearch(e)}  />
                </form>

            </div>
        </div>

    )
}
