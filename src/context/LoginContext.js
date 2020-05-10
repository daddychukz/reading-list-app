import React, { useState, createContext, useContext } from 'react';
import { NotificationContext } from './Notification';

export const LoginContext = createContext();

const LoginContextProvider = ({children}) => {
    const [profile, setProfile] = useState({
        name: "", 
        email: "", 
        imageUrl: "", 
        isAuthenticated: false 
    });
    const { dispatchNotification } = useContext(NotificationContext);

    const responseGoogle = (response) => {
        if (!response.error) {
          localStorage.setItem('email', response.profileObj.email)
            setProfile({
                name: response.profileObj.name,
                email: response.profileObj.email,
                imageUrl: response.profileObj.imageUrl,
                isAuthenticated: true
            });
        } else {
            dispatchNotification({ type: 'ERROR', message: response.error })
        }
    }
    
    

      return (
        <LoginContext.Provider value={{profile, setProfile, responseGoogle}}>
            {children}
        </LoginContext.Provider>
      )
}

export default LoginContextProvider;