import React, {Component} from "react";
import {Formik} from "formik";
import * as Yup from "yup";
// import FormError from "../FormError";

import './style.scss';
import DonateItems from "../DonateItems";
import DonateBags from "../DonateBags";
import Select from "react-dropdown-select";
import DonateLocation from "../DonateLocation";

const options = [
    {value: '1', label: '1'},
    {value: '2', label: '2'},
    {value: '3', label: '3'},
    {value: '4', label: '4'},
    {value: '5', label: '5'}
];

const validationSchema = Yup.object().shape({
    street: Yup.string()
        .min(3, "Too short")
        .max(55, "Too long")
        .required("Must enter a street name"),
    city: Yup.string()
        .min(3, "Too short")
        .max(55, "Too long")
        .required("Must enter a city name"),
});

class FormikForm extends Component {
    state = {
        //step 1//
        clothing: false,
        used_clothing: false,
        toys: false,
        books: false,
        other: false,
        //step 2//
        bags:'',
        //step 3
        location:'',
        kids: false,
        mothers: false,
        homeless: false,
        disabled: false,
        elderly: false,
        organization: '',
        //step 4//
        street:'',
        city: '',
        postcode: '',
        phone: '',
        date:'',
        hour:'',
        remarks:''
    };
    render() {
        return (
            <Formik
                initialValues={{
                    //step 1//
                    clothing: false,
                    used_clothing: false,
                    toys: false,
                    books: false,
                    other: false,
                    //step 2//
                    bags:'',
                    //step 3
                    location:'',
                    kids: false,
                    mothers: false,
                    homeless: false,
                    disabled: false,
                    elderly: false,
                    organization: '',
                    //step 4//
                    street:'',
                    city: '',
                    postcode: '',
                    phone: '',
                    date:'',
                    hour:'',
                    remarks:''}}
                validationSchema={validationSchema}
                onSubmit={(values, {setSubmitting, resetForm}) => {
                    setSubmitting(true);
                    // this.setState({values: values.target.values};
                    resetForm();
                    setSubmitting(false);
                }}
            >
                {({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) => (

                    <form onSubmit={handleSubmit} >
                        { active === 1 &&
                        <div id='step1'>
                            <DonateItems />
                            <tbody>
                            <tr className='donate-items-choice'>
                                <td><input
                                    type='checkbox'
                                    name='clothing'
                                    value={values.clothing}
                                /> clothing still to wear</td>
                                <td><input
                                    type='checkbox'
                                    name='used_clothing'
                                    value={values.used_clothing}
                                /> clothing to throw away</td>
                                <td><input
                                    type='checkbox'
                                    name='toys'
                                    value={values.toys}
                                /> toys</td>
                                <td><input
                                    type='checkbox'
                                    name='books'
                                    value={values.books}
                                /> books</td>
                                <td><input
                                    type='checkbox'
                                    name='other'
                                    value={values.other}
                                /> other</td>
                            </tr>
                            </tbody>
                        </div> }
                        { active === 2 &&
                        <div id='step2'>
                            <DonateBags />
                            <div className='donate-bags-choice'>
                                <Select
                                    option={options}
                                    value={values.bags}
                                    dropdownPosition="auto"
                                    className='select'/>
                            </div>
                        </div>
                        }
                        { active === 3 &&
                        <div id='step3'>
                            <DonateLocation />
                            <div className='donate-location-choice'>
                                <Select options={options}
                                        dropdownPosition="bottom"
                                />
                            </div>
                            <h3>Who do you want to help?</h3>
                            <h3> Type in specific organization</h3>
                            <textarea placeholder='organization name' />
                        </div>
                        }

                        <div className='donate-pick-up-form' id='step4'>
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

                        <div className='donate-location-submit'>
                            <button type='submit' disabled={isSubmitting}>Submit</button>
                        </div>
                    </form>
                )}
            </Formik>
        );
    }
    }
