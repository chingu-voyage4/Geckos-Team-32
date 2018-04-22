import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { editUser } from '../../../actions/authenticate';

class AvatarSelection extends Component {  
  componentDidMount() {
    let editBox = document.getElementById('edit-avatar-box');
    let editButton = document.getElementById('edit-avatar-toggle');
    
    window.onclick = (event) => {
      if (!editBox.contains(event.target) && event.target !== editButton) {
        this.props.showAvatars();
      }
    }
  }

  componentWillUnmount() {
    window.onclick = (event) => { null }
  }

  handleAvatarClick(e) {
    e.preventDefault();
    const img = e.target.src;
    let req = {
      ...this.props.auth.creds,
      img: img
    };
    axios.post(`/routes/user/${this.props.auth.creds._id}/edit`, req)
      .then((results) => {
        this.props.dispatch(editUser(results.data.response));
      });

    this.props.showAvatars();
  }

  render() {
    // console.log('avatar props: ', this.props);

    return (
      <div className="avatar-wrapper" id="edit-avatar-box">
        <h2>Avatar Selection</h2>
        <div className="avatar-library">
          <img onClick={(e) => this.handleAvatarClick(e)} className="avatars" src="http://webdesignbyraymond.com/gecho/001-boy-1.png" />
          <img onClick={(e) => this.handleAvatarClick(e)} className="avatars" src="http://webdesignbyraymond.com/gecho/002-girl-2.png" />
          <img onClick={(e) => this.handleAvatarClick(e)} className="avatars" src="http://webdesignbyraymond.com/gecho/003-boy.png" />
          <img onClick={(e) => this.handleAvatarClick(e)} className="avatars" src="http://webdesignbyraymond.com/gecho/004-man-12.png" />
          <img onClick={(e) => this.handleAvatarClick(e)} className="avatars" src="http://webdesignbyraymond.com/gecho/005-man-11.png" />
          <img onClick={(e) => this.handleAvatarClick(e)} className="avatars" src="http://webdesignbyraymond.com/gecho/006-man-10.png" />
          <img onClick={(e) => this.handleAvatarClick(e)} className="avatars" src="http://webdesignbyraymond.com/gecho/007-girl-1.png" />
          <img onClick={(e) => this.handleAvatarClick(e)} className="avatars" src="http://webdesignbyraymond.com/gecho/008-man-9.png" />
          <img onClick={(e) => this.handleAvatarClick(e)} className="avatars" src="http://webdesignbyraymond.com/gecho/009-man-8.png" />
          <img onClick={(e) => this.handleAvatarClick(e)} className="avatars" src="http://webdesignbyraymond.com/gecho/010-woman-5.png" />
          <img onClick={(e) => this.handleAvatarClick(e)} className="avatars" src="http://webdesignbyraymond.com/gecho/011-man-7.png" />
          <img onClick={(e) => this.handleAvatarClick(e)} className="avatars" src="http://webdesignbyraymond.com/gecho/012-man-6.png" />
          <img onClick={(e) => this.handleAvatarClick(e)} className="avatars" src="http://webdesignbyraymond.com/gecho/013-man-5.png" />
          <img onClick={(e) => this.handleAvatarClick(e)} className="avatars" src="http://webdesignbyraymond.com/gecho/014-man-4.png" />
          <img onClick={(e) => this.handleAvatarClick(e)} className="avatars" src="http://webdesignbyraymond.com/gecho/015-man-3.png" />
          <img onClick={(e) => this.handleAvatarClick(e)} className="avatars" src="http://webdesignbyraymond.com/gecho/016-man-2.png" />
          <img onClick={(e) => this.handleAvatarClick(e)} className="avatars" src="http://webdesignbyraymond.com/gecho/017-hippie.png" />
          <img onClick={(e) => this.handleAvatarClick(e)} className="avatars" src="http://webdesignbyraymond.com/gecho/018-man-1.png" />
          <img onClick={(e) => this.handleAvatarClick(e)} className="avatars" src="http://webdesignbyraymond.com/gecho/019-woman-4.png" />
          <img onClick={(e) => this.handleAvatarClick(e)} className="avatars" src="http://webdesignbyraymond.com/gecho/020-man.png" />
          <img onClick={(e) => this.handleAvatarClick(e)} className="avatars" src="http://webdesignbyraymond.com/gecho/021-woman-3.png" />
          <img onClick={(e) => this.handleAvatarClick(e)} className="avatars" src="http://webdesignbyraymond.com/gecho/022-woman-2.png" />
          <img onClick={(e) => this.handleAvatarClick(e)} className="avatars" src="http://webdesignbyraymond.com/gecho/023-woman-1.png" />
          <img onClick={(e) => this.handleAvatarClick(e)} className="avatars" src="http://webdesignbyraymond.com/gecho/024-girl.png" />
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

export default withRouter(connect(mapStateToProps)(AvatarSelection));