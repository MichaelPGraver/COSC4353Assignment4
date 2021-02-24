import React, {Component} from 'react'
import "react-bulma-components/dist/react-bulma-components.min.css";
import "../App.css";

class Navbar extends Component {
    constructor(props) {
      super(props);
      this.click = this.click.bind(this);
    }
  
    click = (e) => {
      this.props.nh(e.currentTarget.id);
    };
  
    render() {
        return (
          <nav className="navbar">
            <div className="navbar-menu">
              <div className="navbar-start">
              <div
                  id="Title"
                  className="navbar-item navbar-item-hover"
                  onClick={this.click}
                >
                  Assignment 2
                </div>
              </div>
    
              <div className="navbar-end">
              <div
                  id="LogIn"
                  className="navbar-item navbar-item-hover"
                  onClick={this.click}
                >
                  Log in
                </div>
                <div
                  id="SignUp"
                  className="navbar-item navbar-item-hover"
                  onClick={this.click}
                >
                  Sign up
                </div>
                <div
                  id="FuelForm"
                  className="navbar-item navbar-item-hover"
                  onClick={this.click}
                >
                  Fuel form
                </div>
                <div
                  id="ClientProfileManagement"
                  className="navbar-item navbar-item-hover"
                  onClick={this.click}
                >
                  Client profile management
                </div>
                <div
                  id="FuelQuoteHistory"
                  className="navbar-item navbar-item-hover"
                  onClick={this.click}
                >
                  Fuel quote history
                </div>
              </div>
            </div>
          </nav>
        );
      }



}

export default Navbar;
