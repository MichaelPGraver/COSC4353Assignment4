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
            Delivery_address: localStorage.getItem("address"),
            margin: 0,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.calculatePrice = this.calculatePrice.bind(this);
    }

      handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
      }

      handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:8080/api/fuelquote", {
            method: "post",
            headers: new Headers({
                "content-type": "application/json",
            }),
            mode: "cors",
            credentials: "include",
            body: JSON.stringify(this.state),
        }).then((res)=> {
            res.json().then((result) => {
                this.props.submitForm();
            });
        });
      }

      calculatePrice(e){
          e.preventDefault();

          if (this.state.Delivery_date != undefined && this.state.Gallons_requested >= 1){
              this.setState({ disabled: !this.state.disabled });
              alert("Calculating price");
              if (this.state.Gallons_requested > 1000){
                  let calcMargin = (this.state.margin + .02 + .1) * 1.5 + 1.5;
                  this.setState({ margin: calcMargin });
                  let totalAmount = calcMargin * this.state.Gallons_requested;
                  this.setState({ Total_amount_due: totalAmount });
              }
              else {
                  let calcMargin = (this.state.margin + .02 + .1) * 1.5 + 1.5;
                  this.setState({ margin: calcMargin });
                  let totalAmount = calcMargin * this.state.Gallons_requested;
                  this.setState({ Total_amount_due: totalAmount });
              }
          } else {
              alert("Invalid delivery date or gallons requested");
          }
      }

      componentDidMount() {
          fetch("http://localhost:8080/api/priceMargin", {
              method: "get",
              credentials: "include",
              mode: "cors",
          }).then((res) => res.json()).then((margin) =>
          this.setState({ margin }, () => 
          console.log("Margin fetched...", margin)
          )
        );
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
                                value = {this.state.margin}
                                name="Suggested_price"
                                disabled
                                onChange={this.handleChange}
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
                                onChange={this.handleChange}
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
                            onClick={this.calculatePrice}
                            disabled={this.state.disabled}
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