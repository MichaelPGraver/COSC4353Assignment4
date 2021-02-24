import React, {Component} from 'react';
import "react-bulma-components/dist/react-bulma-components.min.css";
import Navbar from '../Components/Navbar';
import FuelForm from '../Components/FuelForm';
import LogIn from '../Components/logIn';
import WelcomePage from '../Components/WelcomePage';
import SignUp from '../Components/SignUp';
import FuelQuoteHistory from '../Components/FuelQuoteHistory';
import ClientProfileManagement from '../Components/ClientProfileManagement';


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
                return <LogIn submitLogIn={this.submitLogIn}/>;

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
