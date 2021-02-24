import React from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";

class SignUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            fullName: '',
            Address1: '',
            Address2: '',
            City: '',
            State: '',
            Zipcode: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.submitCompleteProfileManagement()
    }

    render(){
        return (
            <div className="container">
            <div className="columns is-centered">
            <div className="column is-3-desktop">
                <form className="box" onSubmit={this.handleSubmit}>
                <h1 class="title has-text-centered">Complete Registration</h1>
                <div className="field">
                    <label className="label">Full Name</label>
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
                    <label className="label">Address 1</label>
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
                    <label className="label">Address 2</label>
                    <div className="control has-icons-left">
                    <input
                        type="text"
                        className="input"
                    />
                    <span className="icon is-small is-left">
                        <i className="fa fa-dollar"></i>
                    </span>
                    </div>
                </div>
                <div className="field">
                    <label className="label">City</label>
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
                            <label className="label">State</label>
                            <div className="select">
                            <select name="State" value={this.state.State}>
                                <option>TX</option>
                                <option>FL</option>
                                <option>NY</option>
                                <option>SD</option>
                                <option>MI</option>
                            </select>
                            </div>
                </div>
                <div className="field">
                    <label className="label">Zipcode</label>
                    <div className="control has-icons-left">
                    <input
                        type="number"
                        className="input"
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