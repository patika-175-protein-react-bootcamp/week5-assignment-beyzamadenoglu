import React, { useContext, useState } from 'react';


const ModeContext = React.createContext(null);

const ModeProvider = ({children}) => {
    const [mode, setMode] =  useState("dark");
   
    const toggleMode = () => {
        setMode((current) => current === "light" ? "dark" : "light")
    }

    return(
        <ModeContext.Provider
        value = {
            {mode, setMode, toggleMode}
        }>
            {children}
        </ModeContext.Provider>
    )
}

function useMode() {
    return useContext(ModeContext);
}

export {ModeContext, ModeProvider, useMode};