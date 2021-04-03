import React, {Component} from 'react';
import "react-bulma-components/dist/react-bulma-components.min.css";
import Navbar from './Navbar';
import FuelForm from './FuelForm';
import LogIn from './logIn';
import WelcomePage from './WelcomePage';
import SignUp from './SignUp';
import FuelQuoteHistory from './FuelQuoteHistory';
import ClientProfileManagement from './ClientProfileManagement';


class HomePage extends Component {
    constructor(props){
        super(props);
        this.navHandler = this.navHandler.bind(this);
    }

    state = {
        page: "WelcomePage"
    }

    navHandler(tab) {
        this.setState({page: tab});
    }

    submitForm = () => {
        this.setState({ page: "FuelForm"});
    };


    submitClientProfileManagement = () => {
        this.setState({ page: "FuelForm"});
    };

    submitLogIn = () => {
        this.setState({ page: "FuelForm"});
    };

    submitFirstLogIn = () => {
        this.setState({ page: "ClientProfileManagement"})
    };

    submitSignUp = () => {
        this.setState({ page: "LogIn"});
    };

    newUser = () => {
        this.setState({ page: "SignUp"});
    };
    submitWelcome = () => {
        this.setState({ page: "LogIn"});
    };


    appletSwitch(s) {
        switch (s) {
            
            case "WelcomePage":
                return <WelcomePage submitWelcome={this.submitWelcome} newUser={this.newUser}/>;

            case "FuelQuoteHistory":
                return <FuelQuoteHistory/>;
            
            case "ClientProfileManagement":
                return <ClientProfileManagement submitClientProfileManagement={this.submitClientProfileManagement}/>;
                
            case "SignUp":
                return <SignUp submitSignUp={this.submitSignUp} />;
                
            case "FuelForm":
                return <FuelForm submitForm={this.submitForm} />;
                
            case "LogIn":
                return <LogIn submitLogIn={this.submitLogIn} submitFirstLogIn={this.submitFirstLogIn} setUsername={this.setUsername}/>;

            default:
                return <div></div>;
        }
    }

    render() {
        return(
            <div>
                <Navbar nh={this.navHandler}/>
                <section className="hero is-fullheight-with-navbar">
                    <div className="section">
                        {this.appletSwitch(this.state.page)}
                    </div>
                </section>
            </div>
        );
    }
}

export default HomePage;
