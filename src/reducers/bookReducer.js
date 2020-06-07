
export const bookReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_BOOK':
            return [...state, {
                Title: action.book.Title,
                Author: action.book.Author,
                ID: action.book.ID
            }]
        case 'GET_BOOKS':
            return action.books;
        case 'REMOVE_BOOK':
            return state.filter(book => book.ID !== action.ID)
        default:
            throw new Error()
    }
}