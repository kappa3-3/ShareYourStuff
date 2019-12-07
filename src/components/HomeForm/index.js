import React, {Component} from "react";
import './style.scss';

class HomeForm extends Component {

    state = {
        name: '',
        email: '',
        message: '',
    };
    handleFormSubmit( event ) {
        event.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div id='form-container'>
                <form action="#">
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
                        onClick={e=>this.handleFormSubmit(e)}
                    >Send</button>

                </form>
            </div>
        );
    }
}

export default HomeForm;