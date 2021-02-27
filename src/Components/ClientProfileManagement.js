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
                    <div className="control">
                    <input
                        type="text"
                        maxlength="50"
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
                    <div className="control">
                    <input
                        type="text"
                        maxlength="100"
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
                    <div className="control">
                    <input
                        type="text"
                        maxlength="100"
                        className="input"
                    />
                    <span className="icon is-small is-left">
                        <i className="fa fa-dollar"></i>
                    </span>
                    </div>
                </div>
                <div className="field">
                    <label className="label">City</label>
                    <div className="control">
                    <input
                        type="text"
                        maxlength="100"
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
                                <option>AL</option>
                                <option>AK</option>
                                <option>AZ</option>
                                <option>AR</option>
                                <option>CA</option>
                                <option>AL</option>
                                <option>AK</option>
                                <option>AZ</option>
                                <option>AR</option>
                                <option>CA</option>
                                <option>CO</option>
                                <option>CT</option>
                                <option>DE</option>
                                <option>FL</option>
                                <option>GA</option>
                                <option>HI</option>
                                <option>ID</option>
                                <option>IL</option>
                                <option>IN</option>
                                <option>IA</option>
                                <option>KS</option>
                                <option>KY</option>
                                <option>LA</option>
                                <option>ME</option>
                                <option>MD</option>
                                <option>MA</option>
                                <option>MI</option>
                                <option>MN</option>
                                <option>MS</option>
                                <option>MO</option>
                                <option>MT</option>
                                <option>NE</option>
                                <option>NV</option>
                                <option>NH</option>
                                <option>NJ</option>
                                <option>NM</option>
                                <option>NY</option>
                                <option>NC</option>
                                <option>ND</option>
                                <option>OH</option>
                                <option>OK</option>
                                <option>OR</option>
                                <option>PA</option>
                                <option>RI</option>
                                <option>SC</option>
                                <option>SD</option>
                                <option>TN</option>
                                <option>TX</option>
                                <option>UT</option>
                                <option>VT</option>
                                <option>VA</option>
                                <option>WA</option>
                                <option>WV</option>
                                <option>WI</option>
                                <option>WY</option>
                            </select>
                            </div>
                </div>
                <div className="field">
                    <label className="label">Zipcode</label>
                    <div className="control">
                    <input
                        type="number"
                        minlength="5"
                        maxlength="9"
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