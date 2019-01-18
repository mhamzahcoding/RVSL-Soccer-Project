import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
// import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { AddFreeAgent } from '../../actions/profileActions';
import SelectListGroup from '../common/SelectListGroup';

class FreeAgent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: '',
      description: '',
      errors: {},
      disabled: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCheck = this.onCheck.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const expData = {
      skills: this.state.skills,
      description: this.state.description
    };

    this.props.addAgent(expData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onCheck(e) {
    this.setState({
      disabled: !this.state.disabled,
      current: !this.state.current
    });
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="add-agent">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link to="/dashboard" className="btn btn-light">
                Go Back
              </Link>
              <h1 className="display-4 text-center">Add Free Agent Post</h1>
              <p className="lead text-center">
                Shoot your SHOT!
              </p>
              <small className="d-block pb-3">* = required fields</small>
              <form onSubmit={this.onSubmit}>
              <SelectListGroup
                  placeholder="Skills"
                  name="skills"
                  value={this.state.skills}
                  onChange={this.onChange}
                  options={options}
                  error={errors.skills}
                  info="Give us an idea of where you are at in your career"
                />
                <TextAreaFieldGroup
                  placeholder="Description"
                  name="description"
                  value={this.state.description}
                  onChange={this.onChange}
                  error={errors.description}
                  info="Tell us more about your soccer skills"
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

    // Select options for skills
    const options = [
        {label: '* Select your Soccer Skills', value: 0},
        {label: 'GoalKeeper', value: 'Defense'},
        {label: 'Right Fullback', value: 'Defense'},
        {label: 'Left Fullback', value: 'Defense'},
        {label: 'Center Back', value: 'Defense'},
        {label: 'Sweeper', value: 'Defense'},
        {label: 'Defending/Holding', value: 'Midfielder'},
        {label: 'Central/Box-to-Box', value: 'Midfielder'},
        {label: 'Right Midfielder', value: 'Wingers'},
        {label: 'Left Midfielder', value: 'Wingers'},
        {label: 'Striker', value: 'Offense'},
        {label: 'Other', value: 'Other'}
      ];

FreeAgent.propTypes = {
  addAgent: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(mapStateToProps, { AddFreeAgent })(
  withRouter(FreeAgent)
);