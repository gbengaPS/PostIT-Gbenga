import React from 'react';
import UserSideNav from '../navigation/UserSideNav.jsx';

const groupModal = props => (
  (
    <div className="row">
      <UserSideNav />
      <div className="col s12 m6 component-container">
        <div className="modal-content">
          <form onSubmit={props.handleSubmit.bind(this)}>
          <div className="input-field">
            <input type="text" name="groupName" id="groupName"
            onChange={props.handleChange} required/>
            <label htmlFor="groupName" >Group Name</label>
          </div>
          <div className="input-field">
            <input type="text" name="groupDescription" id="groupDescription"
            onChange={props.handleChange} required/>
            <label htmlFor="password">Group Description</label>
          </div>
          <p className="row"> <input type="submit" value="Create Group"
          className="btn light-blue darken-4 col s8 offset-s2" />
          </p>
          </form>
          <p> &nbsp; </p>
        </div>
      </div>
    </div>
  )
);
export default groupModal;
