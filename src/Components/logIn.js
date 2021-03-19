import React from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";

class LogIn extends React.Component {
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
        this.setState({ [e.target.name]: e.target.value})
    }

    handleSubmit = async e => {
        e.preventDefault();
        
        if (this.state.username != "cosc4353" || this.state.password != "password123"){
            alert("Wrong username or password!")
        }
        else {
            alert("Successful log in!");
            this.props.submitLogIn();
        }
        /*
        let xhttp = new XMLHttpRequest();
        xhttp.open("POST", "http://localhost:8080/api/logIn");
        xhttp.setRequestHeader("Content-Type", "application/json");
        xhttp.withCredentials = true;
        xhttp.send(
            JSON.stringify({
                username: this.state.username,
                password: this.state.password,
            })
        );
        xhttp.onreadystatechange = (e) => {
            if (xhttp.readyState == XMLHttpRequest.DONE) {
                let body = JSON.parse(xhttp.response);
                if (body.success) {
                    this.props.logIn();
                } else {
                    console.log("wrong password!");
                }
            }
        };
        */
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
                    <div className="control has-icons-left">
                    <input
                        type="text"
                        value={this.state.username}
                        className="input"
                        name="username"
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