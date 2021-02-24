import React from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";

class WelcomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: true,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.goToSignUpPage = this.goToSignUpPage.bind(this);

      }

      handleSubmit(e) {
        e.preventDefault();
        this.props.submitWelcome()
      }

      goToSignUpPage(e){
        e.preventDefault();
        this.props.newUser()
      }



    render(){
        return (
                <div className="container">
                    <div className="columns is-centered">
                    <div className="column is-7-desktop">
                    <div class="box">
                    <h1 class="title has-text-centered">Welcome!</h1>
                        <div class="block has-text-centered">
                        Did you have an account with us?
                        </div>
                        <div class="block has-text-centered">
                          ---------------------------------------                    
                        </div>
                        <nav class="level">
                            <div class="level-item has-text-centered">
                                <div className="field has-text-centered">
                                    <input
                                    type="submit"
                                    className="button is-success"
                                    onClick={this.handleSubmit}
                                    value="Yes-Log in"
                                    />
                                </div>
                            </div>
                            <div class="level-item has-text-centered">
                                <div className="field has-text-centered">
                                    <input
                                    type="submit"
                                    className="button is-danger"
                                    onClick={this.goToSignUpPage}
                                    value="No-Sign up"
                                    />
                                </div>
                            </div>
                        </nav> 
                    </div>
                    </div>
                    </div>
                </div>
        );
    }
}

export default WelcomePage;