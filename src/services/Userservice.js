const host = 'https://localhost:44326';

export const userService = {
      register,
      login,
      logout
}


function login(email, password){
    const requestOption = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({email, password})
    };

    return fetch(`${host}/Account/Login`, requestOption)
      .then(handleResponse)
      .then(user => {
        localStorage.setItem('user', JSON.stringify(user));
        return user;
      });
}

function register(user){
    const requestOption = {
      method: 'POST',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify(user)
    }
    return fetch(`${host}/Account/Register`, requestOption).then(handleResponse);
}

function logout(){
    localStorage.removeItem('user');
    return fetch(`${host}/Account/LogOut`).then(handleResponse);  
}

function handleResponse(response){
    return response.text().then(text => {
      const data = text && JSON.parse(text);
      if(!response.ok){
          if(response.status === 401){
              logout();
              window.location.reload(true);
          }

          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
      }

      return data;
      
    });
}




