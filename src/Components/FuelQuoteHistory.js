import React from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";

class FuelQuoteHistory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          forms: [],
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }

      handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }

      handleSubmit(e) {
        e.preventDefault();
      }


      render() {
        return (
                <div className="container">
                    <div
                    class="is-overlay has-text-centered single-spaced"
                    >
                    <div class="container">
                    <form className="box" onSubmit={this.handleSubmit}>
                            <h1 class="title">Quote history</h1>
                    </form>
                    <table 
                      bgcolor="white"
                      border="1"
                      width="100%"
                      >
                        <tr >
                          <th align="center">Delivery Address</th>
                          <th align="center">Delivery Date</th>
                          <th align="center">Gallons Bought</th>
                          <th align="center" >Suggested Price</th>
                          <th align="center">Total Amount Due</th>
                        </tr>
                        <tr>
                          <td align="center">420 Izone Ln.</td>
                          <td align="center">10.29.2018</td>
                          <td align="center">2</td>
                          <td align="center">$50</td>
                          <td align="center">$100</td>
                        </tr>
                    </table>
                    </div>
                    </div>
                </div>

                
            );
        }
    }

    export default FuelQuoteHistory;

