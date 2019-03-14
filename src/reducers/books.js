const initialState =  [];

export default function bookList(state = initialState, action){
    console.log(action);
    if(action.type === 'ADD_BOOK'){
        return [
            ...state,
            action.payload
        ];
    }
    else if (action.type === 'FETCH_BOOKS_SUCCESS'){
        return action.payload;
    }
    return state;
}
