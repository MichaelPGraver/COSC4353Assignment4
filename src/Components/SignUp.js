import React from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";

class SignUp extends React.Component {
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
        this.props.submitSignUp()
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
                    <div className="control has-icons-left">
                    <input
                        type="text"
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