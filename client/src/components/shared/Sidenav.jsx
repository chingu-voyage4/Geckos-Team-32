import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';

export default class SideNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }
    render() {
      if (this.state.open) {
        return (
          <div className="sideNav">
            This is a sidenav
        </div>
        )
      } else {
        return null;
      }

    }

    show() {
      this.setState({
        open: true
      })
    }
}