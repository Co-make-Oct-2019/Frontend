import React, { useState } from "react";
import { Formik, Form, Field, withFormik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';


// need to require an email address and make sure emails don't match: https://jaredpalmer.com/formik/docs/api/field#validate

function ProfileForm ({errors, touched}) {

    return(
    
            <Form>
                <div>
                    {touched.username && errors.username && 
                    <p>{errors.username}</p>}
                        <Field name= 'username' type='text' placeholder='Username'/>
                </div>
                <div>
                    {/* {touched.image && errors.image && 
                    <p>{image.username}</p>} */}
                        <Field  name= 'image' type='image' placeholder='Change photo'/>
                </div>
                <div>
                    {/* going to map through city names and put them in a dropdown list - https://coderanch.com/t/696183/languages/Populating-React-dropdown-list-data */}
                    {touched.location && errors.location && 
                    <p>{errors.location}</p>}
                        <Field component='select' name= 'location' placeholder='What city are you in?'>
                            <option value = 'list'></option>
                        </Field>
                </div>
                <div>
                    {touched.description && errors.description && 
                    <p>{errors.description}</p>}
                        <Field name='description' type='text' placeholder='Introduce yourself!'/>
                </div>

                <input type='submit'/>
            </Form>
        )
    }
      
    const FormikProfileForm = withFormik({
        mapPropsToValues({username, image, location, description}) {
            return {
                username: username || '',
                image: image || '',
                location: location || '',
                description: description || '',
            };
        },

        validationSchema: Yup.object().shape ({
            username: Yup.string()
                .min(4, 'Username must be at least 4 characters')
                .required('Username is required'),
            image: Yup.string()
                .min(500, 'image must be at least 500px'),
             location: Yup.string()
                .required('Location must be selected'),
            description: Yup.string()
                .max(25)
                .required()
        }),
            handleSubmit(values, {resetForm, setErrors, setSubmitting}) {
                console.log(values);

        const userData = {data: "Hello World!"};

        axios 
            .post('http: post thingss', userData)
            .then(response => {
                console.log(response.data);
            })
            .catch(err => {
                console.log(err);
            });
        }

}) (ProfileForm);

export default FormikProfileForm;