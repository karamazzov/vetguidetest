import React from 'react';

export default function MedicamentCard({ medicament }) {

	return(

		<div className='ui card'>

			<div className='content'>

				<div className='header'>{ medicament.name } </div>
				<div className='meta'> { medicament.manufacturer } </div>
				<div className='description'> { medicament.species } </div>

			</div>

		</div>

		)


}

MedicamentCard.propTypes = {

	medicament: React.PropTypes.object.isRequired

}