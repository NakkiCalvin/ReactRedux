const initialState =  [];

export default function trackList(state = initialState, action){
    console.log(action);
    if(action.type === 'ADD_TRACK'){
        return [
            ...state,
            action.payload
        ];
    }
    else if (action.type === 'DELETE_TRACK'){
        return state;
    }
    return state;
}