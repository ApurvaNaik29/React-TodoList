import React, { createContext, useReducer } from 'react';
import data from '../data.json';
import AppReducer from './AppReducer';

const initialState = {
    tasklist: data,
    filtertasklist: data,
};


//Context
export const GlobalContext = createContext(initialState);

//Provider Component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    function insertTask(task) {
        dispatch({
            type: 'ADD-TASK',
            payload: task
        })
    }

    function deleteTask(id) {
        dispatch({
            type: 'DELETE-TASK',
            payload: id
        })
    }

    function displayAlllist() {
        dispatch({
            type: 'ALL-LIST',
            payload: ''
        })
    }

    function addFavTask(id) {
        dispatch({
            type: 'FAV-TASK',
            payload: id
        })
    }

    function searchTask(taskname) {
        dispatch({
            type: 'SEARCH-TASK',
            payload: taskname
        })
    }

    return (
        <GlobalContext.Provider value={{
            tasklist: state.tasklist,
            filtertasklist :state.filtertasklist,
            insertTask,
            deleteTask,
            displayAlllist,
            addFavTask,
            searchTask
        }}>
            {children}
        </GlobalContext.Provider>
    )

}

//Actions