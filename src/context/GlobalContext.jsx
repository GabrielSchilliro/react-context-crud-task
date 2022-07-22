import { createContext, useReducer } from "react";
import AppReducer from './AppReducer';

const initialState = {
    tasks: [
        {
            id: "1",
            title: 'title one',
            description: 'some description',
            done: false
        },
        {
            id: "2",
            title: 'title two',
            description: 'some description 2',
            done: false
        }
    ],
}

export const GlobalContext = createContext(initialState);

export const ContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialState)

    const addTask = (task) => {

        dispatch({ type: 'ADD:TASK', payload: { id: 1, title: "nuevo" } })
    }

    return (
        <GlobalContext.Provider value={{ ...state, addTask }}>
            <div>
                {children}
            </div>
        </GlobalContext.Provider>
    );
}