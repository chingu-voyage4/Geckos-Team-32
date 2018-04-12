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
          <img onClick={(e) => this.handleAvatarClick(e)} className="avatars" src="http://webdesignbyraymond.com/gecho/025-woman.png" />
        </div>
      </div>
    );
  }
}

export default withRouter(AvatarSelection);