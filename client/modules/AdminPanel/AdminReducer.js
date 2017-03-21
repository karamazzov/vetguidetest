import { SET_MEDICAMENTS } from './AdminActions';

const initialState = { medicaments: [] };

export default function medicaments(state=initialState, action={})  {

	switch(action.type){

		case SET_MEDICAMENTS:
			return action.medicaments;

		default: return state;

	}

}