import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { editUser, deleteUser } from '../../../actions/authenticate';

class EditProfile extends Component {
  handleEditData(e) {
    e.preventDefault();

    // Add profile details here
    let req = {
      ...this.props.auth.creds,
      email: e.target.elements.email.value,
      displayName: e.target.elements.displayName.value,
      username: e.target.elements.username.value,
      location: e.target.elements.location.value
    };
    axios.post(`/routes/user/${this.props.auth.creds._id}/edit`, req)
      .then((results) => {
        results.data.response === 'taken' ?
        this.openModalDuplicate() :
        this.props.dispatch(editUser(results.data.response));
      });
  }

  openModalDelete() {
    let modal = document.getElementById('deleteModal');
    modal.style.display = "block";

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = (event) => {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }
  closeModalDelete() {
    let modal = document.getElementById('deleteModal');
    modal.style.display = "none";
  }

  openModalDuplicate() {
    let modal = document.getElementById('duplicateUserModal');
    modal.style.display = "block";

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = (event) => {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }
  closeModalDuplicate() {
    let modal = document.getElementById('duplicateUserModal');
    modal.style.display = "none";
  }

  render() {
    console.log('this is from edit profile: ', this.props);
    const { username, email, location, displayName, _id } = this.props.auth.creds;

    return (
      <div>
        <div className="edit-form">
          <form onSubmit={this.handleEditData.bind(this)}>
            <label htmlFor="displayName">
              Name: <input className="form__input" type="text" name="displayName" defaultValue={displayName || null} onChange={(e) =>this.handleEditData.bind(this)} />
            </label>
            <label htmlFor="email">
              Email: <input className="form__input" type="email" name="email" defaultValue={email || null} onChange={(e) =>this.handleEditData.bind(this)} />
            </label>
            <label htmlFor="username">
              Username: <input className="form__input" type="text" name="username" defaultValue={username} onChange={(e) =>this.handleEditData.bind(this)} required/>
            </label>
            <label htmlFor="location">
              Location: <input className="form__input" type="text" name="location" defaultValue={location || null} onChange={(e) =>this.handleEditData.bind(this)} />
            </label>
            <button className="button profile-button submit">Submit</button>
          </form>
          <button className="button profile-button delete" onClick={this.openModalDelete}>Delete Account</button>
        </div>
        <br />

        <div className="warning-window" id="deleteModal">
          <div className="modal-content">
            <span className="close-modal" onClick={this.closeModalDelete}>&times;</span>
            <h3>Are you sure you want to do this? Deleting your account will permanently erase all user data including: saved preferences, videos, and playlists.</h3>
            <button className="button profile-button" onClick={this.closeModalDelete}>NO! Go back.</button>
            <button className="delete button profile-button twopercent-spacing" onClick={() => this.props.dispatch(deleteUser(_id, this.props.history))}>Yes, Delete account</button>
          </div>
        </div>

        <div className="warning-window" id="duplicateUserModal">
          <div className="modal-content">
            <span className="close-modal" onClick={this.closeModalDuplicate}>&times;</span>
            <h3>The username you have chosen is unavailable. Please try another username.</h3>
            <button className="button profile-button" onClick={this.closeModalDuplicate}>Ok, go back.</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
};

export default withRouter(connect(mapStateToProps)(EditProfile));