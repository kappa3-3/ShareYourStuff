import React, {Component} from "react";
import './style.scss';
import * as Yup from "yup";
import {Formik, Field} from "formik";

import DonateHeader from "../DonateHeader";
import DonateRemember from "../DonateRemember";
import Contact from "../Contact";
import Footer from "../Footer";

import options from "../../commons/options"
import locations from "../../commons/locations"
import validationSchema from "../../commons/validationSchema"
import DonateEnd from "../DonateEnd";



class DonateMain extends Component {
    state = {
        active: 1,
        forward: 'Next',
        backwards: 'Back',
    };

    handleClickForwards = () => {
        this.setState({active: this.state.active + 1})
    };

    handleClickBackwards = () => {
        this.setState({active: this.state.active - 1})
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
                        onSubmit={(values, {setSubmitting, resetForm}) => {
                            setSubmitting(true);
                            resetForm();
                            setSubmitting(false);
                        }}
                    >
                        {({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) => (

                            <form onSubmit={handleSubmit}>
                                {active === 1 &&
                                <div className='donate-component-container'>
                                    <DonateRemember active={this.state.active}/>
                                    <div className='donate-component-choice-container'>
                                        <span>Step 1/4</span>
                                        <h1> Choose products you want to donate:</h1>
                                        <tbody>
                                        <tr className='donate-items-choice'>
                                            <td><input
                                                type='checkbox'
                                                name='clothing'
                                                value={values.clothing}
                                                onChange={handleChange}
                                            /> clothing still to wear
                                            </td>
                                            <td><input
                                                type='checkbox'
                                                name='used_clothing'
                                                value={values.used_clothing}
                                                onChange={handleChange}
                                            /> clothing to throw away
                                            </td>
                                            <td><input
                                                type='checkbox'
                                                name='toys'
                                                value={values.toys}
                                                onChange={handleChange}
                                            /> toys
                                            </td>
                                            <td><input
                                                type='checkbox'
                                                name='books'
                                                value={values.books}
                                                onChange={handleChange}
                                            /> books
                                            </td>
                                            <td><input
                                                type='checkbox'
                                                name='other'
                                                value={values.other}
                                                onChange={handleChange}
                                            /> other
                                            </td>
                                        </tr>
                                        </tbody>
                                    </div>
                                </div>}
                                {active === 2 &&
                                <div className='donate-component-container'>
                                    <DonateRemember active={this.state.active}/>
                                    <div className='donate-bags-choice-container'>
                                        <span>Step 2/4</span>
                                        <h1>How many bags do you want to donate?</h1>
                                        <h3>Amount of the 60l bags:</h3>
                                        <div className='donate-component-choice'>
                                            <select
                                                className='select'
                                                value={values.bags}
                                                name='bags'
                                                onChange={handleChange}>
                                                {options.map(item => <option
                                                    value={item.value}>
                                                    {item.label}
                                                </option>)}
                                            </select>
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
                                        <div className='donate-component-choice'>
                                            <select
                                                className='select'
                                                value={values.location}
                                                name='location'
                                                onChange={handleChange}
                                            >
                                                {locations.map(item => <option

                                                    value={item.value}
                                                >
                                                    {item.label}
                                                </option>)}
                                            </select>
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
                                                <div className='form-location'>
                                                    <label htmlFor='street'>Street</label>
                                                    <input
                                                        type='text'
                                                        name='street'
                                                        id='street'
                                                        placeholder='street name'
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.street}
                                                        className={touched.street && errors.street ? "has-error" : null}
                                                    />
                                                    {/*<FormError touched={touched.street} message={errors.street}/>*/}
                                                </div>
                                                <div className='form-location'>
                                                    <label htmlFor='city'>City</label>
                                                    <input
                                                        type='text'
                                                        name='city'
                                                        id='city'
                                                        placeholder='city name'
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.city}
                                                        className={touched.city && errors.city ? "has-error" : null}
                                                    />
                                                    {/*<FormError touched={touched.city} message={errors.city}/>*/}
                                                </div>
                                                <div className='form-location'>
                                                    <label htmlFor='postcode'>Postcode</label>
                                                    <input
                                                        type='text'
                                                        name='postcode'
                                                        id='postcode'
                                                        placeholder='postcode'
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.postcode}
                                                        className={touched.postcode && errors.postcode ? "has-error" : null}
                                                    />
                                                    {/*<FormError touched={touched.postcode} message={errors.postcode}/>*/}
                                                </div>
                                                <div className='form-location'>
                                                    <label htmlFor='telephone'>Phone number</label>
                                                    <input
                                                        type='number'
                                                        name='phone'
                                                        id='phone'
                                                        placeholder='phone number'
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.phone}
                                                        className={touched.phone && errors.phone ? "has-error" : null}
                                                    />
                                                    {/*<FormError touched={touched.telephone} message={errors.telephone}/>*/}
                                                </div>

                                            </div>
                                            <div className='donate-pick-up-form-time'>
                                                <div className='form-time'>
                                                    <label htmlFor='date'>Date</label>
                                                    <input
                                                        type='date'
                                                        name='date'
                                                        id='date'
                                                        placeholder='date'
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.date}
                                                        className={touched.date && errors.date ? "has-error" : null}
                                                    />
                                                    {/*<FormError touched={touched.street} message={errors.street}/>*/}
                                                </div>
                                                <div className='form-time'>
                                                    <label htmlFor='hour'>The hour</label>
                                                    <input
                                                        type='text'
                                                        name='hour'
                                                        id='hour'
                                                        placeholder='time'
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.hour}
                                                        className={touched.hour && errors.hour ? "has-error" : null}
                                                    />
                                                    {/*<FormError touched={touched.city} message={errors.city}/>*/}
                                                </div>
                                                <div className='form-time'>
                                                    <label htmlFor='postcode'>Remarks</label>
                                                    <textarea
                                                        name='remarks'
                                                        id='remarks'
                                                        placeholder='remarks for the courier'
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.remarks}
                                                        className={touched.remarks && errors.remarks ? "has-error" : null}
                                                    />
                                                    {/*<FormError touched={touched.postcode} message={errors.postcode}/>*/}
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
                                        <ul>
                                            <li>{values.bags} bags of:</li>
                                            {values.clothing && <li>clothing to wear</li>}
                                            {values.used_clothing && <li> clothing to throw away</li>}
                                            {values.toys && <li>toys</li>}
                                            {values.books && <li>books</li>}
                                            {values.other && <li>not listed items</li>}
                                        </ul>
                                        <p>location:{values.location}</p>
                                        <div className='donate-sum-up-details'>
                                            <div>
                                                <h3>Pick-up address:</h3>
                                                <p>street:{values.street}</p>
                                                <p>city:{values.city}</p>
                                                <p>post-code:{values.postcode}</p>
                                                <p>phone number:{values.phone}</p>
                                            </div>
                                            <div>
                                                <h3>Pick-up time:</h3>
                                                <p>date:{values.date}</p>
                                                <p>time:{values.hour}</p>
                                                <p>remarks for the courier:{values.remarks}</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>}
                                {active === 6 && <DonateEnd />
                                }
                                {active === 5
                                && <div className='donate-button-container'>
                                    <button
                                        type='submit'
                                        disabled={isSubmitting}
                                        className='button-forward-visible'
                                        onClick={this.handleClickForwards}
                                    >Submit</button>
                                </div>
                                }
                            </form>
                        )}
                    </Formik>
                    < div className='donate-button-container'>
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
                            {active === 5 ? 'Confirm' : forward}
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