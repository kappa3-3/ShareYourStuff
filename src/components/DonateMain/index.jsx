import React, {Component} from "react";
import './style.scss';
// import * as Yup from "yup";
import {Formik, Form, Field, FieldArray, ErrorMessage} from "formik";

import transport from '../../assets/icons/Icon-4.svg';
import bag from '../../assets/icons/Icon-2.svg';

import DonateHeader from "../DonateHeader";
import DonateRemember from "../DonateRemember";
import Contact from "../Contact";
import Footer from "../Footer";
import DonateEnd from "../DonateEnd";

import options from "../../commons/options"
import locations from "../../commons/locations"
import validationSchema from "../../commons/validationSchema"


class DonateMain extends Component {
    state = {
        active: 1,
        forward: 'Next',
        backwards: 'Back',
        isFormSubmitted: false
    };

    handleClickForwards = () => {
        this.setState({active: this.state.active + 1});
        console.log(this.state.active)
    };

    handleClickBackwards = () => {
        this.setState({active: this.state.active - 1});
        console.log(this.state.active)
    };

    render() {
        const {active, backwards, forward} = this.state;
        return (
            <div id='donate-container'>
                <DonateHeader/>
                <div id='donate-steps-container'>
                    <Formik
                        initialValues={{
                            //step 1//
                            items: ['clothing', 'used_clothing', 'toys', 'books', 'other'],
                            clothing: false,
                            used_clothing: false,
                            toys: false,
                            books: false,
                            other: false,
                            //step 2//
                            bags: '',
                            //step 3
                            location: '',
                            kids: false,
                            mothers: false,
                            homeless: false,
                            disabled: false,
                            elderly: false,
                            organization: '',
                            //step 4//
                            street: '',
                            city: '',
                            postcode: '',
                            phone: '',
                            date: '',
                            hour: '',
                            remarks: ''
                        }}

                        validationSchema={validationSchema}

                        onSubmit={(values, {setSubmitting}) => {
                            console.log('test');

                            setSubmitting(true);

                            fetch('http://localhost:3005/donations', {
                                method: 'POST',
                                headers: {"Content-Type": "application/json"},
                                body: JSON.stringify(values)
                            })
                                .then((data) => console.log(data))
                                .catch((err) => console.log(err));

                            // resetForm();
                            setSubmitting(false);
                            this.setState({isFormSubmitted: true});
                            this.setState({active: this.state.active + 1})
                        }}
                    >
                        {({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) => (

                            <Form onSubmit={handleSubmit}>
                                {active === 1 &&
                                <div className='donate-component-container'>
                                    <DonateRemember active={this.state.active}/>
                                    <div className='donate-component-choice-container'>
                                        <span>Step 1/4</span>
                                        <h1> Choose products you want to donate:</h1>
                                        <div className='donate-items-choice'>
                                            {errors.items && touched.items && <span className='form-error-message'><ErrorMessage name='items'/></span>}

                                            <FieldArray
                                                name="items"
                                                render={arrayHelpers => (
                                                    values.items.map((item, index) => (
                                                        <div className='donate-items-single'
                                                             key={index}>
                                                            <Field
                                                                name={`item.${index}`}
                                                                id={item}
                                                                type='checkbox'
                                                                value={item}
                                                                onChange={handleChange}
                                                            />
                                                            {index === 0 &&
                                                            <label htmlFor='clothing'>clothing suitable for
                                                                use</label>}
                                                            {index === 1 &&
                                                            <label htmlFor='used_clothing'>clothing to
                                                                recycle</label>}
                                                            {index === 2 && <label htmlFor='toys'>toys</label>}
                                                            {index === 3 &&
                                                            <label htmlFor='books'>books</label>}
                                                            {index === 4 &&
                                                            <label htmlFor='other'>other</label>}
                                                        </div>
                                                    )))}
                                            />
                                        </div>
                                    </div>
                                </div>
                                }
                                {active === 2 &&
                                <div className='donate-component-container'>
                                    <DonateRemember active={this.state.active}/>
                                    <div className='donate-bags-choice-container'>
                                        <span>Step 2/4</span>
                                        <h1>How many bags do you want to donate?</h1>
                                        <span className='form-error-message'><ErrorMessage name='bags'/></span>
                                        <div className='donate-component-choice select'>
                                            <label htmlFor="bags">Amount of the 60l bags:</label>
                                            <Field as='select'
                                                id='bags'
                                                value={values.bags}
                                                name='bags'
                                                onChange={handleChange}>
                                                <option value={null}>--choose--</option>
                                                {options.map(item => <option
                                                    key={item.value}
                                                    value={item.value}>
                                                    {item.label}
                                                </option>)}
                                            </Field>
                                        </div>
                                    </div>
                                </div>
                                }
                                {active === 3 &&
                                <div className='donate-component-container'>
                                    <DonateRemember active={this.state.active}/>
                                    <div className='donate-location-choice-container'>
                                        <span>Step 3/4</span>
                                        <h1>Location</h1>
                                        <span className='form-error-message'><ErrorMessage name='location'/></span>
                                        <div className='donate-component-choice'>
                                            <Field as='select'
                                                className='select'
                                                value={values.location}
                                                name='location'
                                                onChange={handleChange}
                                            >
                                                <option>--choose--</option>
                                                {locations.map(item => <option key={item.value} value={item.value}>
                                                    {item.label}
                                                </option>)}
                                            </Field>
                                        </div>
                                        <h3>Who do you want to help?</h3>
                                        <h3> Type in specific organization</h3>
                                        <textarea placeholder='organization name'/>
                                    </div>
                                </div>
                                }
                                {active === 4 &&
                                <div className='donate-component-container'>
                                    <DonateRemember active={this.state.active}/>
                                    <div className='donate-pick-up-choice-container'>
                                        <span>Step 4/4</span>
                                        <h1>Location and time of the pick-up</h1>
                                        <div className='donate-pick-up-form'>
                                            <div className='donate-pick-up-form-location'>
                                                <span className='form-error-message'><ErrorMessage name='street'/></span>
                                                <div className='form-location'>
                                                    <label htmlFor='street'>Street</label>
                                                    <Field
                                                        type='text'
                                                        name='street'
                                                        id='street'
                                                        placeholder='street name'
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.street}
                                                    />
                                                </div>

                                                <div className='form-location'>
                                                    <span>City</span>
                                                    <span>{values.location}</span>
                                                </div>
                                                <span className='form-error-message'><ErrorMessage name='postcode'/></span>
                                                <div className='form-location'>
                                                    <label htmlFor='postcode'>Postcode</label>
                                                    <Field
                                                        type='text'
                                                        name='postcode'
                                                        id='postcode'
                                                        placeholder='postcode'
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.postcode}
                                                    />
                                                </div>
                                                <span className='form-error-message'><ErrorMessage name='phone'/></span>
                                                <div className='form-location'>
                                                    <label htmlFor='telephone'>Phone number</label>
                                                    <Field
                                                        type='number'
                                                        name='phone'
                                                        id='phone'
                                                        placeholder='phone number'
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.phone}
                                                    />
                                                </div>

                                            </div>
                                            <div className='donate-pick-up-form-time'>
                                                <span className='form-error-message'><ErrorMessage name='date'/></span>
                                                <div className='form-time'>
                                                    <label htmlFor='date'>Date</label>
                                                    <Field
                                                        type='date'
                                                        name='date'
                                                        id='date'
                                                        placeholder='date'
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.date}
                                                    />
                                                </div>
                                                <span className='form-error-message'><ErrorMessage name='hour'/></span>
                                                <div className='form-time'>
                                                    <label htmlFor='hour'>The hour</label>
                                                    <Field
                                                        type='text'
                                                        name='hour'
                                                        id='hour'
                                                        placeholder='time'
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.hour}
                                                    />
                                                </div>
                                                <div className='form-time'>
                                                    <label htmlFor='remarks'>Remarks</label>
                                                    <textarea
                                                        name='remarks'
                                                        id='remarks'
                                                        placeholder='remarks for the courier'
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.remarks}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                }
                                {active === 5 &&
                                <div className='donate-component-container'>
                                    <div className='donate-component-choice-container'>
                                        <h1>Summary of your donation</h1>
                                        <h3>Items declared to donate:</h3>
                                        <table>
                                            <tbody className='donate-sum-up-item'>
                                            <tr>
                                                <th>
                                                    <img src={bag} alt=''/>
                                                </th>
                                                <td>{values.bags} bags of:</td>
                                                {values.clothing && <td> clothing suitable for use |</td>}
                                                {values.used_clothing && <td> clothing to recycle |</td>}
                                                {values.toys && <td> toys |</td>}
                                                {values.books && <td> books |</td>}
                                                {values.other && <td> not listed items |</td>}
                                            </tr>
                                            </tbody>
                                        </table>
                                        <table>
                                            <tbody className='donate-sum-up-location'>
                                            <tr>
                                                <th>
                                                    <img src={transport} alt=''/>
                                                </th>
                                                <td>location:</td>
                                                <td>{values.location}</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                        <div className='donate-sum-up-details'>
                                            <h3>Pick-up address:</h3>
                                            <table>
                                                <tbody>
                                                <tr>
                                                    <th>street:</th>
                                                    <td>{values.street}</td>
                                                </tr>
                                                <tr>
                                                    <th>city:</th>
                                                    <td>{values.location}</td>
                                                </tr>
                                                <tr>
                                                    <th>post-code:</th>
                                                    <td>{values.postcode}</td>
                                                </tr>
                                                <tr>
                                                    <th>phone number:</th>
                                                    <td>{values.phone}</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                            <table>
                                                <tbody>
                                                <tr>
                                                    <th>Pick-up time:</th>
                                                </tr>
                                                <tr>
                                                    <th>date:</th>
                                                    <td>{values.date}</td>
                                                </tr>
                                                <tr>
                                                    <th>time:</th>
                                                    <td>{values.hour}</td>
                                                </tr>
                                                <tr>
                                                    <th>remarks for the courier:</th>
                                                    <td>{values.remarks}</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                }
                                {active === 5
                                && <div className='donate-button-container'>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className='button-forward-visible'
                                    >Submit
                                    </button>
                                </div>
                                }
                            </Form>
                        )}
                    </Formik>
                    {(active === 6
                        // && this.state.isFormSubmitted
                    ) && <DonateEnd/>}
                    <div className='donate-button-container'>
                        <button
                            type="button"
                            className={(active === 1 || active === 6) ? 'button-display-none' : 'button-backward-visible'}
                            onClick={this.handleClickBackwards}>
                            {backwards}
                        </button>
                        <button
                            type="button"
                            className={active === 5 || active === 6 ? 'button-display-none' : 'button-forward-visible'}
                            onClick={this.handleClickForwards}>
                            {forward}
                        </button>
                    </div>
                </div>
                <Contact/>
                <div className='footer-wrapper'>
                    <Footer/>
                </div>
            </div>
        )
    }
}

export default DonateMain;