import { createContext, useReducer } from 'react'

export const themeContext = createContext(null as any)

const initialState = { darkMode: false }

const themeReducer = (state:any, action:any) => {
    switch (action.type) {
        case 'toggle':
            return { darkMode: !state.darkMode }
        default:
            return state
    }
}

export const ThemeProvider = (props:any) => {
    const [state, dispatch] = useReducer(themeReducer, initialState)
    return (
        <themeContext.Provider value={{ state, dispatch }}>
            {' '}
            {props.children}{' '}
        </themeContext.Provider>
    )
}