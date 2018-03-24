import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';


// class AvatarIcon extends React.Component {
  const AvatarIcon = ({id}) => {
  // render() {
  //   let imgClass = ["avatars"];
  //   if(this.state.addClass) {
  //     imgClass.push('activeavatar');
  //   }
    return (
      <div>
        <img alt='avatars' src={`https://s9.postimg.org/${id}.png`} />
      </div>
    )
  // }
}
//className={imgClass.join(' ')}
export default withRouter(AvatarIcon);