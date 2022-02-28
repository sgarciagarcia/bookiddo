import {createContext} from 'react'

export const Context = createContext({});

const ContextProvider = ({ children }) => {

    return (
        <ContextProvider >
        {children}
        </ContextProvider>
    )
};

export default ContextProvider;