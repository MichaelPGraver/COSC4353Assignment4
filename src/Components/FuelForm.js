import React from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";

class FuelForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current_user:[],
            Gallons_requested: 0,
            Suggested_price: 0,
            Delivery_date: new Date(),
            Total_amount_due: 0,
            Delivery_address: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        //this.backButton = this.backButton.bind(this);
    }

      handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
      }

      handleSubmit(e) {
        e.preventDefault();
        this.props.handleSubmit()
        this.props.submitForm()
      }
    

      render() {
        return (
                <div className="container">
                    <div className="columns is-centered">
                    <div className="column is-3-desktop">
                        <form className="box" onSubmit={this.handleSubmit}>
                        <h1 class="title has-text-centered">Fuel Quote Form</h1>
                        <div className="field">
                            <label className="label">Gallons Requested</label>
                            <div className="control">
                            <input
                                type="number"
                                className="input"
                                name="gallons" 
                                onChange={this.handleChange}
                                required
                            />
                            <span className="icon is-small is-left">
                                <i className="fa fa-dollar"></i>
                            </span>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Delivery Address</label>
                            <div className="control has-icons-left">
                            <input
                                type="text"
                                className="input"
                                name="address" 
                                onChange={this.handleChange}
                                disabled
                            />
                            <span className="icon is-small is-left">
                                <i className="fa fa-dollar"></i>
                            </span>
                            </div>
                        </div>
                        <div>
                            <label className="label">Delivery Date</label>
                            <div className="control has-icons-left">
                            <input
                                type="date"
                                className="input"
                                name="date" 
                                value={this.state.date} 
                                onChange={this.handleChange}
                                required
                            />
                            <span className="icon is-small is-left">
                                <i className="fa fa-calendar"></i>
                            </span>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Suggested Price/Gallon</label>
                            <div className="control has-icons-left">
                            <input
                                type="number"
                                className="input"
                                onChange={this.handleChange}
                                disabled
                            />
                            <span className="icon is-small is-left">
                                <i className="fa fa-dollar"></i>
                            </span>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Amount Due</label>
                            <div className="control has-icons-left">
                            <input
                                type="number"
                                className="input"
                                name="amount" 
                                onChange={this.handleChange}
                                disabled
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

export default FuelForm;