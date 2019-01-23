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
      {label: 'Team 1', value: 'Team 1'},
      {label: 'Team 2', value: 'Team 2'},
      {label: 'Team 3', value: 'Team 3'},
      {label: 'Team 4', value: 'Team 4'},
      {label: 'Team 5', value: 'Team 5'},
      {label: 'Team 6', value: 'Team 6'},
      {label: 'Team 7', value: 'Team 7'},
      {label: 'Team 8', value: 'Team 8'},
      {label: 'Team 9', value: 'Team 9'},
      {label: 'Team 10', value: 'Team 10'}
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
