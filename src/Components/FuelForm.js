import React from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";

class FuelForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: localStorage.getItem('username'),
            Gallons_requested: 0,
            Suggested_price: 0,
            Delivery_date: new Date(),
            Total_amount_due: 0,
            Delivery_address: localStorage.getItem("address")
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
                            <div className="control has-icons-left">
                            <input
                                type="number"
                                className="input"
                                value = {this.state.Gallons_requested}
                                onChange = {this.handleChange}
                                name="Gallons_requested" 
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
                                value = {this.state.Delivery_address}
                                name="Delivery_address" 
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
                                name="Delivery_date" 
                                value={this.state.Delivery_date} 
                                onChange={this.handleChange}
                                required
                            />
                            <span className="icon is-small is-left">
                                <i className="fa fa-calendar"></i>
                            </span>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Suggessted Price/Gallon</label>
                            <div className="control has-icons-left">
                            <input
                                type="number"
                                className="input"
                                value = {this.state.Suggested_price}
                                name="Suggested_price"
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
                                value = {this.state.Total_amount_due}
                                name="Total_amount_due" 
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