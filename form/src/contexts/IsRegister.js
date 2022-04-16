import React, { useContext, useState } from 'react';

const RegisterContext = React.createContext(null);

const RegisterProvider = ({children}) => {

    const [registerUsername, setRegisterUsername] = useState('');

    const setName = (x) => {
        setRegisterUsername(x);
    }

    return(
        <RegisterContext.Provider
        value = {
            {registerUsername, setName}
        }>
            {children}
        </RegisterContext.Provider>
    )
}

function useRegister() {
    return useContext(RegisterContext);
}

export {RegisterContext, RegisterProvider, useRegister};