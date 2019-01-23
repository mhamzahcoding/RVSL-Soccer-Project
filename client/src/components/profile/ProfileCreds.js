import React, { Component } from 'react';

class ProfileCreds extends Component {
  render() {
    const { experience} = this.props;

    const expItems = experience.map(exp => (
      <li key={exp._id} className="list-group-item">
        <p>
          {exp.team === '' ? null : (
            <span>
              <strong>team: </strong> {exp.team}
            </span>
          )}
        </p>
      </li>
    ));
    return (
      <div className="row">
        <div className="col-md-6">
          <h3 className="text-center text-info">Experience</h3>
          {expItems.length > 0 ? (
            <ul className="list-group">{expItems}</ul>
          ) : (
            <p className="text-center">No Experience Listed</p>
          )}
        </div>
      </div>
    );
  }
}

export default ProfileCreds;
