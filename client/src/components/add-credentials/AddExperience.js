import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addExperience } from '../../actions/profileActions';
import SelectListGroup from '../common/SelectListGroup';

class AddExperience extends Component {
  // constructor(props) {
  //   super(props);
    state = {
      team: '',
      errors: {},
      disabled: false
    };

    // this.onChange = this.onChange.bind(this);
  //   this.onSubmit = this.onSubmit.bind(this);
  // }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit = (e) => {
    e.preventDefault();

    const expData = {
      team: this.state.team
    };

    this.props.addExperience(expData, this.props.history);
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => console.log(this.state.team));
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="add-experience">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link to="/dashboard" className="btn btn-light">
                Go Back
              </Link>
              <h1 className="display-4 text-center">Pick Your Team</h1>
              <small className="d-block pb-3">* = required fields</small>
              <form onSubmit={this.onSubmit}>
                <SelectListGroup
                  placeholder=" Select Your Team"
                  name="team"
                  value={this.state.team}
                  onChange={this.onChange}
                  options={options}
                  error={errors.team}
                  info="Pick the team you are associated with"
                />
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

    // Select options for status
    const options = [
      {label: '* Select your Team', value: 0},
      {label: 'JAX', value: 'JAX'},
      {label: 'Tigers', value: 'Tigers'},
      {label: 'Benders', value: 'Benders'},
      {label: 'Kickers', value: 'Kickers'},
      {label: 'Strikers', value: 'Strikers'},
      {label: 'Arsenal', value: 'Arsenal'},
      {label: 'River City', value: 'River City'},
      {label: 'RVA FC', value: 'RVA FC'},
      {label: 'LOL', value: 'LOL'},
      {label: 'Runn!', value: 'Runn!'},
    ];

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(mapStateToProps, { addExperience })(
  withRouter(AddExperience)
);
