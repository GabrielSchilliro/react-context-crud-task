import { createContext, useReducer } from "react";
import appReducer from './AppReducer';
import { v4 } from "uuid";

const initialState = {
    tasks: []
}

export const GlobalContext = createContext(initialState);

export const ContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(appReducer, initialState)

    const addTask = (task) => {
        dispatch({ type: 'ADD_TASK', payload: { ...task, id: v4() } })
    }

    const updateTask = (task) => {
        dispatch({ type: 'UPDATE_TASK', payload: task })
    }

    const delTask = (id) => {
        dispatch({ type: 'DELETE_TASK', payload: id })
    }

    const toggleTaskDone = (id) => {
        dispatch({ type: 'TOGGLE_TASK_DONE', payload: id })
    }

    return (
        <GlobalContext.Provider value={{ ...state, addTask, updateTask, delTask, toggleTaskDone }}>
            <div>
                {children}
            </div>
        </GlobalContext.Provider>
    );
}