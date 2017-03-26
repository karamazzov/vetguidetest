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

	console.log(medicaments + ' set medicaments action creator')

	return {

		type: SET_MEDICAMENTS,
		medicaments

	}

}

export function fetchMedicaments() {

	return dispatch => {

		fetch('/api/medications')
		.then(res => res.json())
		.then(data => dispatch(setMedicaments(data.medicaments)))

		.catch((err) => console.log(err));

	}

}

export function addMedicament(data) {


  return (dispatch) => {

    return callApi('medications', 'post', {
      medication: {
        brand: data.brand,
        manufacturer: data.manufacturer,
        form: data.form,
      },
    }).then(res => console.log(res + ' add medicament action creator (POST)'))
    .catch((err) => console.log(err));
  };
}

export function getMedicaments(data) {

	if(!data) { console.log('nemadata') }
		console.log(data + '<-- undefined????')

  return (dispatch) => {

  	console.log('after')

    return callApi('medications')
    .then(res => console.log(res.medications + ' get response '))
     .catch((err) => console.log(err));
  };
}

//