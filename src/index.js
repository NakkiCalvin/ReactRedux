import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


import App from './App';
import reducer from './reducers';
//import './index.css';

/* const initialState = {
	tracks: [
		'Smells like teen spirit',
		'LimpBizkit'
	],
	playlists: [
		'MyPlayList',
		'FriendPlayList'
	]
}
*/

/*const initialState = [
	'Smells like teen spirit',
	'LimpBizkit'
]; */

/*function trackList(state = initialState, action){
		console.log(action);
		if(action.type === 'ADD_TRACK'){
			return {
				...state,
				tracks: [...state.tracks, action.payload]
			};

			return [
			...state,
			action.payload
			]
		}
		else if (action.type === 'DELETE_TRACK'){
			return state;
		}
		else if (action.type === 'ADD_PLAYLIST'){
			return state;
		}
		else if (action.type === 'DELETE_PLAYLIST'){
			return state;
		}
		return state;
} */

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
	<Provider store={store}>
	<App />
	</Provider>,
	document.getElementById('root')
);



/// 1) step

/*
function trackList(state = [], action){
		console.log(action);
		if(action.type === 'ADD_TRACK'){
			return [
			...state,
			action.payload
			]
		}
		return state;
}

const store = createStore(trackList);

const addTrackBtn = document.querySelectorAll('.addTrack')[0];
const trackInput = document.querySelectorAll('.trackInput')[0];
const list = document.querySelectorAll('.list')[0];

store.subscribe(() =>{
	//console.log('subscribe', store.getState());
	
	list.innerHTML = '';
	trackInput.value = '';
	store.getState().forEach(track => {
		const li = document.createElement('li');
		li.textContent = track;
		list.appendChild(li);
	});
})



addTrackBtn.addEventListener('click', () => {
	const trackName = trackInput.value;
	//console.log('trackName', trackName)
	store.dispatch({type: 'ADD_TRACK', payload: trackName});
})

*/