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
                    </div>
                    </div>
                </div>
            );
        }
    }

    export default FuelQuoteHistory;

