import { SET_MEDICAMENTS } from './AdminActions';


export default function medicaments(state=[], action={})  {


	switch(action.type){

		case SET_MEDICAMENTS:

			return action.medicaments;
			

		default: 
	
			return state;
			

	}

}