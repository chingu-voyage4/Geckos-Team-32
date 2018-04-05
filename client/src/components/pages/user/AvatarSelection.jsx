import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class AvatarSelection extends React.Component {
  handleAvatarClick(e) {
    e.preventDefault();
    const img = e.target.src;

    this.props.handleUpdateAvatar(img);
  }

  render() {
    return (
      <div className="avatar-wrapper">
        <h2>Avatar Selection</h2>
        <div className="avatar-library">
          <img onClick={(e) => this.handleAvatarClick(e)} className="avatars" src="https://s9.postimg.org/6254t3onj/001-boy-1.png" />
          <img onClick={(e) => this.handleAvatarClick(e)} className="avatars" src="https://s9.postimg.org/98zocqgtb/002-girl-1.png" />
          <img onClick={(e) => this.handleAvatarClick(e)} className="avatars" src="https://s9.postimg.org/hr94h3i73/003-boy.png" />
          <img onClick={(e) => this.handleAvatarClick(e)} className="avatars" src="https://s9.postimg.org/hr94h3pwv/004-man-4.png" />
          <img onClick={(e) => this.handleAvatarClick(e)} className="avatars" src="https://s9.postimg.org/goyxyjjy7/005-man-3.png" />
          <img onClick={(e) => this.handleAvatarClick(e)} className="avatars" src="https://s9.postimg.org/lav26x0cf/006-man-2.png" />
          <img onClick={(e) => this.handleAvatarClick(e)} className="avatars" src="https://s9.postimg.org/8w8a6klov/007-girl.png" />
          <img onClick={(e) => this.handleAvatarClick(e)} className="avatars" src="https://s9.postimg.org/3ktdluk6n/008-man.png" />
          <img onClick={(e) => this.handleAvatarClick(e)} className="avatars" src="https://s9.postimg.org/ky3o0qpsf/009-man-1.png" />
        </div>
      </div>
    );
  }
}

export default withRouter(AvatarSelection);