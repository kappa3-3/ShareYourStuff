import React, {Component} from "react";
import {connect} from "react-redux";
import {NavLink, withRouter} from "react-router-dom";

import decoration from "../../assets/icons/Decoration.svg"
import {setUserStatus} from "../../actions";
import './style.scss';

class CreateAccountMain extends Component {
    state = {
        email: '',
        password: '',
        password_copy: '',
        isEmailValid: true,
        isPasswordValid: true,
        isPasswordCopyValid: true,
        isFormClicked: false,
    };

    onInputChange = e => {
        this.setState({[e.target.name]: e.target.value})
    };
    onClickSubmit = e => {
        e.preventDefault();

        if (this.isFormValid()) {
            const {email, password} = this.state;
            fetch('http://localhost:3004/users', {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({email: email, password: password})
            })
                .then((data) => (data))
                .catch((err) => console.log(err));
            this.props.setUserStatus(this.state.email, this.state.password);
            setTimeout(() => this.props.history.push("/donate"), 2200);
        }


    };

    isFormValid = () => {
        const {email, password, password_copy} = this.state;

        const isEmailValid = email.includes("@");
        const isPasswordValid = password.length >= 6;
        const isPasswordCopyValid = password === password_copy;

        this.setState({isEmailValid, isPasswordValid, isPasswordCopyValid});
        return isEmailValid && isPasswordValid && isPasswordCopyValid
    };

    render() {
        return (
            <>
                {this.props.authentication &&
                <div className='header-logout-container'>
                    <div className='header-logout-prompt'>
                        <h1>The account have been created successfully</h1>
                        <img src={decoration} alt='/////////'/>
                        <h4>You are have been automatically signed in</h4>
                    </div>
                </div>}
                <div className='sign-in-container'>
                    <h1 className='sign-in-headline'>Create Account</h1>
                    <img src={decoration} alt=''/>
                    <div className='sign-in-credentials'>
                        <div className='sign-in-credentials-email'>
                            <label htmlFor='credentials-email'>Email:</label>
                            <input
                                type="email"
                                id="credentials_email"
                                name="email"
                                placeholder="type your email address"
                                value={this.state.email}
                                onChange={this.onInputChange}
                            />
                            {!this.state.isEmailValid
                            && <span className='sign-in-error-message'>
                                Incorrect e-mail address
                            </span>}
                        </div>
                        <div className='sign-in-credentials-password'>
                            <label htmlFor='credentials_password'>Password:</label>
                            <input
                                type="password"
                                id="credentials_password"
                                name="password"
                                placeholder="type your password"
                                value={this.state.password}
                                onChange={this.onInputChange}
                            />
                            {!this.state.isPasswordValid
                            && <span className='sign-in-error-message'>
                                Password requires at least 6 characters
                            </span>}
                        </div>
                        <div className='sign-in-credentials-password'>
                            <label>Repeat password:</label>
                            <input
                                type="password"
                                id="credentials_password_copy"
                                name="password_copy"
                                placeholder="retype your password"
                                value={this.state.password_copy}
                                onChange={this.onInputChange}
                            />
                            {!this.state.isPasswordCopyValid
                            && <span className='sign-in-error-message'>
                                Passwords are not the same
                            </span>}
                        </div>
                    </div>
                    <div className='sign-in-actions'>
                        <NavLink to="/login" className='sign-in-button'>Sign in</NavLink>
                        <button onClick={this.onClickSubmit} className='create-account-button'>Create
                            account</button>
                    </div>
                </div>
            </>
        );
    }
}


function mapStateToProps(state) {
    return {
        authentication: state.authentication
    }
}

export default withRouter(connect(mapStateToProps, {setUserStatus})(CreateAccountMain));