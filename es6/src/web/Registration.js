import React from 'react';
import CryptoJS from "crypto-js";
import RouteAction from "../common/actions/RouteAction";
import RegisterUserAction from "../registration/actions/RegisterUserAction";
import AppUtils from "../app/AppUtils";
import UsernameChangedAction from "../registration/actions/UsernameChangedAction";
import PasswordChangedAction from "../registration/actions/PasswordChangedAction";
import EmailChangedAction from "../registration/actions/EmailChangedAction";

export default class Registration extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            password: '',
            passwordRepetition: ''
        };
        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onPasswordRepetitionChange = this.onPasswordRepetitionChange.bind(this);
        this.onRegister = this.onRegister.bind(this);
    }

    onUsernameChange(event) {
        const username = event.target.value;
        new UsernameChangedAction({username}).apply();
    }

    onEmailChange(event) {
        const email = event.target.value;
        new EmailChangedAction({email}).apply();
    }

    onPasswordChange(event) {
        const password = CryptoJS.MD5(event.target.value).toString();
        this.setState(
            {
                password
            }
        );
        new PasswordChangedAction({
            password,
            passwordRepetition: this.state.passwordRepetition
        }).apply();
    }

    onPasswordRepetitionChange(event) {
        const passwordRepetition = CryptoJS.MD5(event.target.value).toString();
        this.setState({passwordRepetition});
        this.setState(
            {
                passwordRepetition
            }
        );
        new PasswordChangedAction({
            passwordRepetition,
            password: this.state.password
        }).apply();
    }

    onRegister() {
        const data = {
            password: this.state.password,
            language: this.props.language,
            token: AppUtils.createUUID()
        };
        new RegisterUserAction(data).apply();
    }

    render() {
        return (
            <div className="center">
                <div className="form">
                    <h1>{this.props.texts.registration.title[this.props.language]}</h1>
                    <div className="line">
                        <label>{this.props.texts.registration.username[this.props.language]}</label>
                        <div className="inputContainer">
                            <input
                                type={"text"}
                                onChange={this.onUsernameChange}
                                autoComplete="off"
                                value={this.props.data.username}
                            />
                            {this.props.data.displayUsernameSpinner === true &&
                            <i className="fas fa-cog fa-spin inside"/>}
                            {this.props.data.usernameAvailable === true && this.props.data.username.length > 0 &&
                            <i className="fas fa-check outside success"/>}
                            {this.props.data.usernameAvailable === false && this.props.data.username.length > 0 &&
                            <i className="fas fa-times outside error"/>}
                        </div>
                    </div>
                    <div className="line">
                        <label>{this.props.texts.registration.password[this.props.language]}</label>
                        <div className="inputContainer">
                            <input
                                type={"password"}
                                onChange={this.onPasswordChange}
                                autoComplete="off"
                            />
                        </div>
                    </div>
                    <div className="line">
                        <label>{this.props.texts.registration.passwordRepetition[this.props.language]}</label>
                        <div className="inputContainer">
                            <input
                                type={"password"}
                                onChange={this.onPasswordRepetitionChange}
                                autoComplete="off"
                            />
                            {this.props.data.passwordMismatch === true &&
                            <i className="fas fa-times outside error"/>}
                        </div>
                    </div>
                    <div className="line">
                        <label>{this.props.texts.registration.email[this.props.language]}</label>
                        <div className="inputContainer">
                            <input
                                type={"text"}
                                onChange={this.onEmailChange}
                                autoComplete="off"
                                value={this.props.data.email}
                            />
                            {this.props.data.emailInvalid === true && this.props.data.email.length > 0 &&
                            <i className="fas fa-times outside error"/>}
                        </div>
                    </div>
                    <div className="moreMarginLine hCenter">
                        <button onClick={this.onRegister}
                                disabled={this.props.data.usernameAvailable === false ||
                                this.props.data.username.length === 0 ||
                                this.props.data.email.length === 0 ||
                                this.state.password.length === 0 ||
                                this.props.data.passwordMismatch === true
                                }>
                            {this.props.texts.registration.register[this.props.language]}
                        </button>
                        <button
                            onClick={() => new RouteAction({hash: "#"}).apply()}>{this.props.texts.registration.cancel[this.props.language]}</button>
                    </div>
                    <div className="line">
                        <div
                            className="small-font">{this.props.texts.registration.terms[this.props.language]}</div>
                    </div>
                </div>
            </div>
        );
    }
}

