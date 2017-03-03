export const SET_MEDICAMENTS = 'SET_MEDICAMENTS';

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

	return dispatch => {

		return fetch('/medications', {

			method: 'post',
			body: JSON.stringify(data),
			headers: {
        		"Content-Type": "application/json"
      		}

		}).then(handleResponse)

		.catch((err) => console.log(err));

	}

}