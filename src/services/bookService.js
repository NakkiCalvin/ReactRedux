import {authorizeHeader} from '../Manager/headerAuthorize';
import {bookConstants} from '../constants/bookConst';
const host = 'https://localhost:3000';

export const bookService = {
    create,
    getAll,
    deleteBook,
    update,
}

function create(book) {
    let user = JSON.parse(localStorage.getItem('user'));
    if(user){
        var token = user.access_token;
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 
                       'Access-Control-Allow-Origin': '*',
                       'Authorization': 'Bearer ' + token },
            body: JSON.stringify(book)
        };

        return fetch(`${host}/Books/Create`,requestOptions).then(handleResponse);
    }
  }
  
  function deleteBook(id) {
    var user = JSON.parse(localStorage.getItem('user'));
    if(user){
        var token = user.access_token;
    
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Authorization': 'Bearer ' + token
                },
        body: JSON.stringify(id)
    };
    return fetch(`${host}/Books/Delete/${id}`,requestOptions).then(handleResponse);
        }
    }

    function update(book) {
        var user = JSON.parse(localStorage.getItem('user'));
        if (user) {
        var token = user.access_token;
        const requestOptions = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(book)
        };
        return fetch(`${host}/Books/Update`,requestOptions).then(handleResponse);
        }
      }
  
  function getAll(){
    var user = JSON.parse(localStorage.getItem('user'));
    if(user){
        var token = user.access_token;
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Bearer ' + token
      }
    };
    return fetch(`${host}/Books/GetAll`, requestOptions).then(handleResponse);
    }
}
  
  function handleResponse(response) {
      return response.text().then(text => {
          const data = text && JSON.parse(text);
          if (!response.ok) {
              if (response.status === 401) {
                  window.location.reload(true);
              }
  
              const error = (data && data.message) || response.statusText;
              return Promise.reject(error);
          }
  
          return data;
      });
  }
