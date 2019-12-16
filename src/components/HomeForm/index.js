import React, {Component} from "react";
import Link from "react-dom"
import './style.scss';

class HomeForm extends Component {

    state = {
        name: '',
        email: '',
        message: '',
        isEmailValid: true,
        isFormClicked: false,
    };

    isFormValid = () => {
        const {email} = this.state;
        const isEmailValid = email.includes("@");
        this.setState({isEmailValid});
        return isEmailValid
    };

    onClickSubmit = e => {
        e.preventDefault();

        if (this.isFormValid()) {
            const {email, name, message} = this.state;
            fetch('http://localhost:3006/contact', {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({name: name, email: email, message: message})
            })
                .then((data) => console.log(data))
                .catch((err) => console.log(err));
            this.setState({isFormClicked: true});
            setTimeout(() => this.setState({isFormClicked: false, name: '', email: '', message: ''}), 2200)
        }
    };

    render() {
        return (
            <div id='form-container'>

                {this.state.isFormClicked ?
                    <div className='form-info-end'>
                        <h1>Thank you for your message</h1>
                        <span>We will contact you as soon as possible</span>
                    </div>
                    : <form action="#">
                    <div className='form-info'>
                        <div className='form-info-details form-name'>
                            <label>First Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="type your name"
                                value={this.state.name}
                                onChange={e=>this.setState({ name:e.target.value})}
                            />
                        </div>
                       <div className='form-info-details form-email'>
                           <label>Email</label>
                           <input
                               type="email"
                               id="email"
                               name="email"
                               placeholder="type your email address"
                               value={this.state.email}
                               onChange={e=>this.setState({ email:e.target.value})}
                           />
                       </div>
                    </div>
                    <div className='form-info-textarea'>
                        <label>Your message</label>
                        <textarea
                            id="form-text-area"
                            name="subject"
                            placeholder="Lorem ipsum..."
                            value={this.state.message}
                            onChange={e=>this.setState({ message:e.target.value})}
                        />
                    </div>
                    <button
                        type="submit"
                        value="Submit"
                        onClick={this.onClickSubmit}
                    >Send</button>

                </form> }
            </div>
        );
    }
}

export default HomeForm;