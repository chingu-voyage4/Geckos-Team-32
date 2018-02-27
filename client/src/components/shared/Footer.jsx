import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Footer extends Component {
	
  render() {
		return (
			<div>
        <footer>
          <div className="two">
            Images courtesy of <a href="https://developers.google.com/youtube/">Youtube API</a>
          </div>
          <div className="icons one">
            <a href="#">
              <span className="fa-layers fa-fw" id="circle1">
                <i className="far fa-circle fa-4x" data-fa-transform="0"></i>
                <i className="fab fa-inverse fa-facebook-f fa-3x" data-fa-transform="shrink-7"></i>
              </span>
            </a>
            <a href="#">
              <span className="fa-layers fa-fw" id="circle2">
                <i className="far fa-circle fa-4x" data-fa-transform="0"></i>
                <i className="fab fa-inverse fa-linkedin fa-3x" data-fa-transform="shrink-7"></i>
              </span>
            </a>
            <a href="#">
              <span className="fa-layers fa-fw" id="circle3">
                <i className="far fa-circle fa-4x" data-fa-transform="0"></i>
                <i className="fab fa-inverse fa-github fa-3x" data-fa-transform="shrink-7"></i>
              </span>
            </a>
            <a href="#">
              <span className="fa-layers fa-fw" id="circle4">
                <i className="far fa-circle fa-4x" data-fa-transform="0"></i>
                <i className="fab fa-inverse fa-instagram fa-3x" data-fa-transform="shrink-7"></i>
              </span>
          </a>
          </div>
          <div className="three">
            Copyright <span className="span">&copy;</span> <a href="https://github.com/chingu-voyage4/Geckos-Team-32">gecko-team-32</a>
          </div>
        </footer>
			</div>
		);
  }
}