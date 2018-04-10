import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Footer extends Component {
	
  render() {
		return (
      <div>
        <div className={this.props.theme}>
          <footer>
            <div className="footer-bottom">
              <div className="footer-social-media">
                <a className="social-media-footer" href="#"><i className="fab fa-facebook-f"></i></a>
                <a className="social-media-footer" href="#"><i className="fab fa-instagram"></i></a>
                <a className="social-media-footer" href="#"><i className="fab fa-twitter"></i></a>
                <a className="social-media-footer" href="#"><i className="fab fa-github"></i></a>
              </div>
              <div className="footer-credits">
                <p className="yt-credit">API provided by: <a className="dashboard__link" href="https://developers.google.com/youtube/">YouTube <i className="fab fa-youtube"></i></a></p>
                <p className="geckos-credit">Copyright &copy; 2018<a className="dashboard__link" href="https://github.com/chingu-voyage4/Geckos-Team-32"> Geckos-32</a></p>
              </div>
            </div>
          </footer>
        </div>
			</div>
		);
  }
}