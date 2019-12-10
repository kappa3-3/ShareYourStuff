import React, {Component} from "react";
import decoration from "../../assets/icons/Decoration.svg"
import './style.scss';
import {NavLink} from "react-router-dom";
import {withRouter} from "react-router-dom";


class SignInMain extends Component {


    state = {
        email: '',
        password: '',
        isEmailValid: true,
        isPasswordValid: true,
        toRoute: true
    };

    onInputChange = e => {
        this.setState({[e.target.name]: e.target.value})
    };

    onClickSubmit = e => {
        e.preventDefault();
        if ( this.isFormValid()) {
            this.props.history.push("/donate")
        }
    };

    isFormValid = () => {
        const {email, password} = this.state;

        const isEmailValid = email.includes("@");
        const isPasswordValid = password.length > 6;

        this.setState({isEmailValid, isPasswordValid});
        return isEmailValid && isPasswordValid
    };

    render() {
        return (
            <div className='sign-in-container'>
                <h1>Sign In</h1>
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
                </div>
                <div className='sign-in-actions'>
                    <NavLink to="/register" className='create-account-button'>Create Account</NavLink>
                    <NavLink to={this.state.toRoute && "/donate"} onClick={this.onClickSubmit} className='sign-in-button'>Sign in</NavLink>
                    {/*<NavLink to={this.state.toRoute && "/donate"} className='sign-in-button'>Sign in</NavLink>*/}
                </div>
            </div>
        );
    }
}

export default withRouter(SignInMain);