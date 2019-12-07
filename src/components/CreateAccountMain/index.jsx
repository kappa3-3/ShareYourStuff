import React, {Component} from "react";
import decoration from "../../assets/icons/Decoration.svg"
import './style.scss';
import {NavLink} from "react-router-dom";

class CreateAccountMain extends Component {
    state = {
        email: '',
        password: '',
        password_copy: '',
        isEmailValid: true,
        isPasswordValid: true,
        isPasswordCopyValid: true,
        isFormClicked:false,
    };

    onInputChange = e => {
        this.setState({[e.target.name]: e.target.value})
    };

    onClickSubmit = e => {
        e.preventDefault();
        const isFormValid = this.isFormValid();
        if (isFormValid === true) {
            this.setState({isFormClicked:true});
        }
    };

    isFormValid = () => {
        const { email, password, password_copy } = this.state;

        const isEmailValid = email.includes("@");
        const isPasswordValid = password.length > 6;
        const isPasswordCopyValid = password === password_copy;

        this.setState({isEmailValid, isPasswordValid, isPasswordCopyValid});
        return isEmailValid && isPasswordValid && isPasswordCopyValid
    };

    render() {
        return (
            <div className='sign-in-container'>
                <h1>Create Account</h1>
                <img src={decoration}/>
                <div className='sign-in-credentials'>
                    <div className='sign-in-credentials-email'>
                        <label>Email:</label>
                        <input
                            type="email"
                            id="credentials_email"
                            name="email"
                            placeholder="type your email address"
                            value={this.state.email}
                            onChange={this.onInputChange}
                        />
                        {!this.state.isEmailValid && <span>Incorrect e-mail address</span>}
                    </div>
                    <div className='sign-in-credentials-password'>
                        <label>Password:</label>
                        <input
                            type="password"
                            id="credentials_password"
                            name="password"
                            placeholder="type your password"
                            value={this.state.password}
                            onChange={this.onInputChange}
                        />
                        {!this.state.isPasswordValid && <span>Password requires at least 6 characters</span>}
                    </div>
                    <div className='sign-in-credentials-password'>
                        <label>Repeat password:</label>
                        <input
                            type="password"
                            id="credentials_password_copy"
                            name="password_copy"
                            placeholder="retype your password"
                            value={this.state.passwordCopy}
                            onChange={this.onInputChange}
                        />
                        {!this.state.isPasswordCopyValid && <span>Passwords are not the same</span>}
                    </div>
                </div>
                <div className='sign-in-actions'>
                    <NavLink to="/login" className='create-account-button'>Sign in</NavLink>
                    <NavLink to="/register" onClick={this.onClickSubmit} className='sign-in-button'>Create account</NavLink>
                </div>
            </div>
        );
    }
}

export default CreateAccountMain;