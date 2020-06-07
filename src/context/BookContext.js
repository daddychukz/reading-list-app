import React, { createContext, useReducer, useEffect } from 'react';
import AWS from 'aws-sdk';
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();

/*
 * Configure the SDK to use anonymous identity 
 */
AWS.config.region = process.env.REACT_APP_AWS_REGION; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: process.env.REACT_APP_IDENTITY_POOL_ID,
    Logins: {
        'accounts.google.com': localStorage.getItem('tokenId')
     }
});

const docClient = new AWS.DynamoDB.DocumentClient();

const params = {
    TableName: "reading-list",
    ProjectionExpression: "ID, Author, Title"
};

const BookContextProvider = (props) => {
    const [books, dispatchBook] = useReducer(bookReducer, []);
    useEffect(() => {
        docClient.scan(params, function(err, result) {
            if (err) {
                console.log(err);
            } else {
                dispatchBook({type: 'GET_BOOKS', books: result.Items})
            }
        })
        
    }, []);

    return (
        <BookContext.Provider value={{books, dispatchBook, docClient}}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;
