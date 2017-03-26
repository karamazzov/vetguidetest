import React from 'react';
import MedicamentCard from './MedicamentCard'

export default function MedicamentsList({ medicaments }) {

    const emptyMessage = ( <p>There are no added medicaments yet.</p> );

    const medicamentsList = (

    	<div className='ui four cards'>

    	{ medicaments.map(medicament => <MedicamentCard medicament={medicament} key={medicament._id} />) }

    	</div>

    	)

    return (

        <div>

            { medicaments.length === 0 ? emptyMessage : medicamentsList }

        </div>

    )

}

MedicamentsList.propTypes = {



}
