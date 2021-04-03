import React, { useState } from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";

class SignUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }
    handleSubmit = async e => {
        e.preventDefault();
        
        fetch("http://localhost:8080/api/SignUp", {
            method: "post",
            headers: new Headers({
                "content-type": "application/json",
            }),
            mode: "cors",
            credentials: "include",
            body: JSON.stringify(this.state),
        }).then((res) => {
            res.json().then((result) => {
                if (result.success) {
                    this.props.submitSignUp();
                    alert("Register Success");
                } else {
                    alert("Username exists");
                }
            });
        });
    }

    render(){
        return (
            <div className="container">
            <div className="columns is-centered">
            <div className="column is-3-desktop">
                <form className="box" onSubmit={this.handleSubmit}>
                <h1 class="title has-text-centered">Register</h1>
                <div className="field">
                    <label className="label">Username</label>
                    <div className="control has-icons-left">
                    <input
                        type="text"
                        value={this.state.username}
                        placeholder="* required"
                        className="input"
                        name = "username"
                        onChange={this.handleChange}
                        required
                    />
                    <span className="icon is-small is-left">
                        <i className="fa fa-dollar"></i>
                    </span>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Password</label>
                    <div className="control has-icons-left">
                    <input
                        type="password"
                        value={this.state.password}
                        placeholder="* required"
                        className="input"
                        name="password"
                        onChange={this.handleChange} 
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
                    value="Submit"
                    />
                </div>
                </form>
            </div>
            </div>
        </div>

        );
    }
}

export default SignUp;