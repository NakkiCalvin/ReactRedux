import {authorizeHeader} from '../Manager/headerAuthorize';
const host = 'https://localhost:44326';


export const bookService = {
    create,
    getAll,
    deleteBook
}

function create(book) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 
                   'Access-Control-Allow-Origin' : '*'},
        body: JSON.stringify(book)
    };
    return fetch(`${host}/Books/Create`,requestOptions).then(handleResponse);
  }
  
  function deleteBook(id) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(id)
    };
    return fetch(`${host}/Books/Delete`,requestOptions).then(handleResponse);
  }
  
  function getAll(){
    const requestOptions = {
      method: 'GET',
      headers: authorizeHeader()
    };
    return fetch(`${host}/Books/GetAll`, requestOptions).then(handleResponse);
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
