var mockApiData = [
    {
        id: 1,
        name: 'asfasf'
    },
    {
        id: 2,
        name: 'Cakes'
    }
];

export const getBooks = () => dispatch => {
        setTimeout(() => {
            console.log('I got books');
            dispatch({type: 'FETCH_BOOKS_SUCCESS', payload: mockApiData })
        }, 2000)
}