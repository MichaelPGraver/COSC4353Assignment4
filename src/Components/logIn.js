import React from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";

class LogIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            Username: '',
            Password: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.submitLogIn()
    }

    render(){
        return (
            <div className="container">
            <div className="columns is-centered">
            <div className="column is-3-desktop">
                <form className="box" onSubmit={this.handleSubmit}>
                <h1 class="title has-text-centered">Log In</h1>
                <div className="field">
                    <label className="label">Username</label>
                    <div className="control">
                    <input
                        type="text"
                        className="input"
                        required
                    />
                    <span className="icon is-small is-left">
                        <i className="fa fa-dollar"></i>
                    </span>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                    <input
                        type="password"
                        className="input"
                        name="travelers" 
                        required
                    />
                    <span className="icon is-small is-left">
                        <i className="fa fa-dollar"></i>
                    </span>
                    </div>
                </div>
                <div className="field has-text-centered">
                    <input
                    type="submit"
                    className="button is-link"
                    value="Log in"
                    />
                </div>
                </form>
            </div>
            </div>
        </div>

        );
    }
}

export default LogIn;