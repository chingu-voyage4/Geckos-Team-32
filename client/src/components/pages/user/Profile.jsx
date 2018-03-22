import React from 'react';
import axios from 'axios';
import EditProfile from './EditProfile.jsx';

class Profile extends React.Component {
	componentDidMount() {
    this.props.state.user.loggedIn ? null : this.handleUserData();
	}

	// Only call if user is not already logged in
	handleUserData() {
		let id = this.props.userId.match.params.id;
		axios.get(`/routes/user/${id}`)
			.then((results) => {
				let creds = results.data.users;
				this.props.handleUpdateUser(creds);
			})
			.catch((err) => {
				console.log('There was an error: ', err);
			});
	}
  
  render() {
		// console.log('this is from profile: ', this.props);
		const { loggedIn, creds } = this.props.state.user;
		const { edit, editButton } = this.props.state.editUser;

    return (
			<div className="profile-page-wrapper">

				<div className="profile-banner">
					<h1 className="twopercent-spacing">Profile</h1> 
				</div>
				<hr />
				<div className="welcome twopercent-spacing">
					<h2>Welcome back</h2>
					
				</div>
				<div className="profile-username-edit twopercent-spacing">
					
					{loggedIn ? <h2>{creds.username}!</h2> : null}
					<button className="button" onClick={this.props.handleEditProfile}>{editButton}</button>
					{edit ? 
					<EditProfile 
					props={this.props} 
					creds={creds} 
					id={this.props.userId.match.params.id} 
					handleEditProfile={this.props.handleEditProfile.bind(this)}
					/> : 
					null}
				</div>
				<button className="modalbut" id="modalButton" onClick={this.deleteModal}>Open Modal</button>
				<div>
					
					<div className="warning-window" id="modal">
						<div className="modal-content">
							<span className="close-modal">&times;</span>
							<h3>testing</h3>
							<p>testing testing</p>
						</div>
					</div>
				</div>

      </div>
    );
	}
	
	deleteModal = function () {
		let modal = document.getElementById('modal');
		let btn = document.getElementById("modalButton");
		let span = document.getElementsByClassName("close-modal");

		// When the user clicks on the button, open the modal 
		btn.onclick = function () {
			modal.style.display = "block";
		}

		// When the user clicks on <span> (x), close the modal
		span.onclick = function () {
			modal.style.display = "none";
		}

		// When the user clicks anywhere outside of the modal, close it
		window.onclick = function (event) {
			if (event.target == modal) {
				modal.style.display = "none";
			}
		}
	}
}

export default Profile;