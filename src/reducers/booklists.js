const initialState = [
	'MyPlayList',
	'FriendPlayList'
]; 

export default function smthList(state = initialState, action){
    console.log(action);
    if (action.type === 'ADD_PLAYLIST'){
        return state;
    }
    else if (action.type === 'DELETE_PLAYLIST'){
        return state;
    }
    return state;
}