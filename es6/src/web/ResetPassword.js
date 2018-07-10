import React from 'react';
import RouteAction from "../common/actions/RouteAction";
import CryptoJS from "crypto-js";
import ResetPasswordAction from "../common/actions/ResetPasswordAction";

export default class ResetPassword extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            password: '',
            passwordRepetition: '',
            passwordMismatch: false
        };
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onPasswordRepetitionChange = this.onPasswordRepetitionChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onPasswordChange(event) {
        const password = CryptoJS.MD5(event.target.value).toString();
        this.setState(
            {
                password,
                passwordMismatch: password !== this.state.passwordRepetition
            }
        );
    }

    onPasswordRepetitionChange(event) {
        const passwordRepetition = CryptoJS.MD5(event.target.value).toString();
        this.setState({passwordRepetition});
        this.setState(
            {
                passwordRepetition,
                passwordMismatch: passwordRepetition !== this.state.password
            }
        );
    }

    onSubmit() {
        const data = {
            password: this.state.password,
            token: this.props.data.token
        };
        new ResetPasswordAction(data).apply();
    }

    render() {
        return (
            <div>
                <h1>{this.props.texts.resetPassword.title[this.props.language]}</h1>
                <div>
                    <div>
                        <label>{this.props.texts.resetPassword.password[this.props.language]}</label>
                        <input
                            type={"password"}
                            placeholder={this.props.texts.resetPassword.password[this.props.language]}
                            onChange={this.onPasswordChange}
                            autoComplete="off"
                        />
                    </div>
                    <div>
                        <label>{this.props.texts.resetPassword.passwordRepetition[this.props.language]}</label>
                        <input
                            type={"password"}
                            placeholder={this.props.texts.resetPassword.passwordRepetition[this.props.language]}
                            onChange={this.onPasswordRepetitionChange}
                            autoComplete="off"
                        />
                        {this.state.passwordMismatch === true &&
                        <label>{this.props.texts.resetPassword.passwordMismatch[this.props.language]}</label>}
                    </div>
                    <div>
                        <button onClick={this.onSubmit}
                                disabled={this.state.password.length === 0 ||
                                this.state.passwordMismatch === true
                                }>
                            {this.props.texts.resetPassword.submit[this.props.language]}
                        </button>
                        <button
                            onClick={() => new RouteAction({hash: "#"}).apply()}>{this.props.texts.resetPassword.cancel[this.props.language]}</button>
                    </div>
                </div>
            </div>
        );
    }
}

