import {createContext} from 'react'

const Context = createContext({});

const ContextProvider = ({ children }) => {

    return (
        <ContextProvider >
        {children}
        </ContextProvider>
    )
};

export default ContextProvider;