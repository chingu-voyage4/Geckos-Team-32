import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import AvatarIcon from './AvatarIcon.jsx';
import { avatars } from '../../../../public/avatars.js';

class AvatarSelection extends React.Component {
// const AvatarSelection = ({ avatars }) => {
  constructor(props) {
    super(props);
    this.state = {
      addClass: false,
      avatars: []
    }
  }
  toggle() {
    this.setState({addClass: !this.state.addClass});
  }

  render () {
    const { avatars } = this.props;

    let imgClass = ["avatars"];
    if(this.state.addClass) {
      imgClass.push('activeavatar');
    }

    return (
      <div>
        <h2>Avatar Selection</h2>
        <div className="avatar-library">
          {
            avatars.map((i) => {
              return (
                <AvatarIcon className={imgClass.join(' ')} id={Avatars[i].id} />
              );
            })
          }
        </div>
      </div>
    );
  // selectAvatar = function () {
  //   let images = document.getElementsByClassName("avatars");
  //   for (i = 0; i < images.length; i++) {
  //   images.removeClass('activeavatar');
  //   }
  //   this.addClass('activeavatar');
  // }
  }
}

export default withRouter(AvatarSelection);