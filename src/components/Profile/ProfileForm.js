import React from "react";
import { Form, Field, withFormik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';


// TODOS // 
// Add required email address field with validation - https://jaredpalmer.com/formik/docs/api/field#validate
// Remove image input field until backend functionality is added
// Make sure User Edit is posting to backend
// Pull from Google city names API, map to location dropdown options 
// Improve form validations
// Styling

function ProfileForm ({errors, touched}) {

    return(
    
            <Form>
                
                <div>
                    {/* going to map through city names and put them in a dropdown list - https://coderanch.com/t/696183/languages/Populating-React-dropdown-list-data */}
                    {touched.location && errors.location && 
                    <p>{errors.location}</p>}
                        <label>Location
                        <Field component='select' name= 'location' placeholder='What city are you in?'>
                            <option value='Boston'>Boston</option>
                            <option value='Chicago'>Chicago</option>
                            <option value='Miami'>Miami</option>
                            <option value='Portland'>Portland</option>
                        </Field>
                        </label>
                </div>
                <div>
                    {touched.description && errors.description && 
                    <p>{errors.description}</p>}
                    <label>Introduction
                        <Field name='description' type='text' placeholder='Introduce yourself!'/>
                    </label>
                </div>

                <input type='submit'/>
            </Form>
        )
    }
      
    const FormikProfileForm = withFormik({
        mapPropsToValues({username, image, location, description}) {
            return {
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
                .max(300, 'Image must be less than 300px'),
             location: Yup.string()
                .required('Location must be selected'),
            description: Yup.string()
                .max(25)
                .required('Description is required.')
        }),
            handleSubmit(values, {resetForm, setErrors, setSubmitting}) {
                console.log(values);

        const userData = {data: "Hello World!"};

        axios 
            .post('users/user/profile/edit', userData)
            .then(response => {
                console.log(response.data);
            })
            .catch(err => {
                console.log(err);
            });
        }

}) (ProfileForm);

export default FormikProfileForm;