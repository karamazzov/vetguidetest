export const SET_MEDICAMENTS = 'SET_MEDICAMENTS';

import callApi from '../../util/apiCaller';

function handleResponse(response) {

	if(response.ok){

		return response.json() 

	}
	else {

		let error = new Error(response.statusText);
		error.response = response;
		throw error;

	}

}

export function setMedicaments(medicaments) {

	return {

		type: SET_MEDICAMENTS,
		medicaments

	}

}

export function fetchMedicaments() {

	return dispatch => {

		fetch('/medications')
		.then(res => res.json())
		.then(data => dispatch(setMedicaments(data.medicaments)))

		.catch((err) => console.log(err));

	}

}

export function addMedicament(data) {

	console.log(data)

  return (dispatch) => {

  	console.log(data)

    return callApi('posts', 'post', {
      post: {
        name: data.name,
        title: data.title,
        content: data.content,
      },
    }).then(res => dispatch(addPost(res.post)));
  };
}

//