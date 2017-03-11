import axios from 'axios'

export const SET_CURRENT_USER = 'SET_CURRENT_USER';

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}

export function login(data) {

	console.log(data)

  return (dispatch) => {

    return callApi('auth', 'post', {

      user: {
        identifier: data.identifier,
        password: data.password,
      },

    }).then(res => {

      const token = res.data.token;
      localStorage.setItem('jwtToken', token);
      setAuthorizationToken(token);
      dispatch(setCurrentUser(jwtDecode(token)));

    });
  };
}

export function logout() {

  return dispatch => {

    localStorage.removeItem('jwtToken');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));

  }
}

/* export function login(data) {

  return dispatch => {

    return axios.post('/api/auth', data).then(res => {

      const token = res.data.token;
      localStorage.setItem('jwtToken', token);
      setAuthorizationToken(token);
      dispatch(setCurrentUser(jwtDecode(token)));

    });

  }

 */
