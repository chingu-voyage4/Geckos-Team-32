import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Footer extends Component {
	
  render() {
		return (
			<div>

      <footer>
			<div class="two">
			  Images courtesy of <a href="#">Youtube API</a>
			</div>
			<div class="icons one">
        <a href="#">
          <span class="fa-layers fa-fw" id="circle1">
            <i class="far fa-circle fa-4x" data-fa-transform="0"></i>
            <i class="fab fa-inverse fa-facebook-f fa-3x" data-fa-transform="shrink-7"></i>
          </span>
        </a>
        <a href="#">
          <span class="fa-layers fa-fw" id="circle2">
            <i class="far fa-circle fa-4x" data-fa-transform="0"></i>
            <i class="fab fa-inverse fa-linkedin fa-3x" data-fa-transform="shrink-7"></i>
          </span>
        </a>
        <a href="#">
          <span class="fa-layers fa-fw" id="circle3">
            <i class="far fa-circle fa-4x" data-fa-transform="0"></i>
            <i class="fab fa-inverse fa-github fa-3x" data-fa-transform="shrink-7"></i>
          </span>
        </a>
        <a href="#">
          <span class="fa-layers fa-fw" id="circle4">
            <i class="far fa-circle fa-4x" data-fa-transform="0"></i>
            <i class="fab fa-inverse fa-instagram fa-3x" data-fa-transform="shrink-7"></i>
          </span>
      </a>
			</div>
			<div class="three">
				Copyright <span class="span">&copy</span> <a href="#">gecko-team-32</a>
			</div>
		  </footer>
        
			</div>
		);
  }
}