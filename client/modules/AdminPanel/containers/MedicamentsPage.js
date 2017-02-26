import React from 'react';
import { connect } from 'react-redux';
import MedicamentsList from '.././presentational/MedicamentsList';
import { fetchMedicaments } from '.././AdminActions';

class MedicamentsPage extends React.Component {

  componentDidMount() {

    this.props.fetchMedicaments()

  }

  render() {

    return (

        <div>

    	       <h3>Here is a list:</h3>
             <MedicamentsList medicaments={this.props.medicaments} />

        </div>

    );

  }
}

MedicamentsPage.propTypes = {

    medicaments: React.PropTypes.array.isRequired,
    fetchMedicaments: React.PropTypes.func.isRequired

}

function mapStateToProps(state) {

    return {medicaments: state.medicaments}

  }



export default connect(mapStateToProps, { fetchMedicaments })(MedicamentsPage);
