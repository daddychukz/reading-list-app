import React, { createContext, useReducer } from 'react';
import { notificationReducer } from '../reducers/notificationReducer';

export const NotificationContext = createContext();

const NotificationContextProvider = ({ children }) => {
    // eslint-disable-next-line
    const [state, dispatchNotification] = useReducer(notificationReducer, '');

    return (
        <NotificationContext.Provider value={{dispatchNotification}}>
            {children}
        </NotificationContext.Provider>
    )
}

export default NotificationContextProvider;