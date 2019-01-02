import React from 'react';
import CryptoJS from "crypto-js";
import RouteAction from "../common/actions/RouteAction";
import LoginAction from "../login/actions/LoginAction";
import UsernameChangedAction from "../login/actions/UsernameChangedAction";
import ToggleSaveInLocalStorageAction from "../login/actions/ToggleSaveInLocalStorageAction";

export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            password: ""
        };
        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onLogin = this.onLogin.bind(this);
        this.onToggleSaveInLocalStorage = this.onToggleSaveInLocalStorage.bind(this);
    }

    onUsernameChange(event) {
        const username = event.target.value;
        new UsernameChangedAction(username).apply();
    }

    onPasswordChange(event) {
        const password = CryptoJS.MD5(event.target.value).toString();
        this.setState({password});
    }

    onToggleSaveInLocalStorage() {
        new ToggleSaveInLocalStorageAction(this.props.data.saveInLocalStorage).apply();
    }

    onLogin() {
        new LoginAction(this.state.password).apply();
    }

    render() {
        return (
            <div className="center">
                <div className="form">
                    <h1>{this.props.texts.login.title[this.props.language]}</h1>
                    <div className="line">
                        <label>{this.props.texts.login.username[this.props.language]}</label>
                        <input
                            type={"text"}
                            onChange={this.onUsernameChange}
                            value={this.props.data.username}
                        />
                        <a onClick={() => new RouteAction("#registration").apply()}>{this.props.texts.login.registration[this.props.language]}</a>
                    </div>
                    <div className="line">
                        <label>{this.props.texts.login.password[this.props.language]}</label>
                        <input
                            type={"password"}
                            onChange={this.onPasswordChange}
                        />
                        <a onClick={() => new RouteAction("#forgotpassword").apply()}>{this.props.texts.login.forgotPassword[this.props.language]}</a>
                    </div>
                    <div className="line">
                        <input
                            id="saveInLocalStorage"
                            type={"checkbox"}
                            onChange={this.onToggleSaveInLocalStorage}
                            checked={this.props.data.saveInLocalStorage}
                        />
                        <label htmlFor="saveInLocalStorage">
                            {this.props.texts.login.saveInLocalStorage[this.props.language]}
                        </label>
                        <div
                            className="small-font">{this.props.texts.login.saveInLocalStorageHint[this.props.language]}</div>
                    </div>
                    <div className="moreMarginLine hCenter">
                        <button className="primary"
                                onClick={this.onLogin}>{this.props.texts.login.signin[this.props.language]}</button>
                    </div>
                </div>
            </div>
        );
    }
}

