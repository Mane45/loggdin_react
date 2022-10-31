import React from "react";
import Greeting from "./Greeting";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import './Control.css';

class Control extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = { isLoggedIn: false };
    }

    handleLoginClick() {
        this.setState({ isLoggedIn: true });
    }

    handleLogoutClick() {
        this.setState({ isLoggedIn: false });
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;

        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />
        }

        return (
            <div className="container">
                <div className="header">
                    logo
                    {button}
                </div>
                <div className="body">
                    <Greeting isLoggedIn={isLoggedIn} />
                </div>
            </div>
        );
    }
}

export default Control;