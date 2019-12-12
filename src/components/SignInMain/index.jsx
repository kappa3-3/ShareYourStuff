import React, {Component} from "react";
import decoration from "../../assets/icons/Decoration.svg"
import './style.scss';
import {NavLink} from "react-router-dom";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {setUserStatus} from "../../actions/index";


class SignInMain extends Component {

    state = {
        email: '',
        password: '',
        isEmailValid: true,
        isPasswordValid: true,
        isLoggedIn: false,
        toRoute: true
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.props);
        this.props.authentication === true && this.props.history.push('/donate');
    }

    onInputChange = e => {
        this.setState({[e.target.name]: e.target.value})
    };

    onClickSubmit = e => {
        e.preventDefault();
        if (this.isFormValid()) {
            this.props.setUserStatus(this.state.email, this.state.password)
            this.props.history.push("/donate")

        }
    };

    isFormValid = () => {
        const {email, password} = this.state;

        const isEmailValid = email.includes("@");
        const isPasswordValid = password.length >= 6;

        this.setState({isEmailValid, isPasswordValid});
        return isEmailValid && isPasswordValid
    };

    render() {
        return (
            <form className='sign-in-container' onSubmit={this.onClickSubmit}>
                <h1>Sign In</h1>
                <img src={decoration} alt='/////////'/>
                <div className='sign-in-credentials'>
                    <div className='sign-in-credentials-email'>
                        <label htmlFor='sign_in_email'>Email:</label>
                        <input
                            type="email"
                            id="sign_in_email"
                            name="email"
                            placeholder="type your email address"
                            value={this.state.email}
                            onChange={this.onInputChange}
                        />
                        {!this.state.isEmailValid && <span>Incorrect e-mail address</span>}
                    </div>
                    <div className='sign-in-credentials-password'>
                        <label htmlFor='sign_in_password'>Password:</label>
                        <input
                            type="password"
                            id="sign_in_password"
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
                    <button type="submit" className='sign-in-button'>Sign in</button>
                </div>
            </form>
        );
    }
}

function mapStateToProps(state) {
    return {
        authentication: state.authentication
    }
}

export default withRouter(connect(mapStateToProps, {setUserStatus})(SignInMain));

