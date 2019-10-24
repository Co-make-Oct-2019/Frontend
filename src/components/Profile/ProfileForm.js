import React from "react";
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import axiosWithAuth from '../Utils/axiosWithAuth';
import Navigation from '../DashBoard/Navigation';


// TODOS // 

// Remove image input field until backend functionality is added
// Make sure User Edit is posting to backend  - Work this out with the fellas
// Return a success message for your form
// Return to the Dashboard after submitting the form
// Styling

function ProfileForm ({errors, touched}) {

    const validate = value => {
        let errorMessage;
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
          errorMessage = 'Invalid email address';
        }
        return errorMessage;
      };

    return(

        <div>
        <Navigation/>
      
            <Form>
                <div>
                    <label>Name
                        <Field name='name' type='text' placeholder='name'/>
                        {touched.name && errors.name &&<p>{errors.name}</p>}
                    </label>
                </div>
                <div>
                    <label>Email Address
                        <Field validate={validate} name='email' type='email' placeholder='email address'/>
                        {touched.email && errors.email &&<p>{errors.email}</p>}
                    </label>
                </div>
                <div>
                        <label>
                        <Field component='select' name= 'location' placeholder='What city are you in?'>
                            <option value=''>Select Your City</option>
                            <option value='Boston'>Boston</option>
                            <option value='Chicago'>Chicago</option>
                            <option value='Miami'>Miami</option>
                            <option value='Portland'>Portland</option>
                        </Field>
                        <p>{errors.location}</p>
                        </label>
                </div>
                <div>
                    <label>Introduction
                        <Field name='description' type='text' placeholder='Pleased to meet you'/>
                        {touched.description && errors.description && 
                    <p>{errors.description}</p>}
                    </label>
                </div>

                <input type='submit'/>
            </Form>
            </div>
        )
    }
      
    const FormikProfileForm = withFormik({
        mapPropsToValues({ name, email, imageurl, location, description}) {
            return {
                name: name || '',
                email: email || '',
                imageurl: imageurl || '',
                location: location || '',
                description: description || '',
            };
        },

        validationSchema: Yup.object().shape ({
            name: Yup.string()
                .min(4, 'Name must be at least 4 characters')
                .required('Please add your name.'),
            email: Yup.string()
                .required('Co-maker profiles must contain a valid email address.'),
            imageurl: Yup.string()
                .max(300, 'Image must be less than 300px'),
            location: Yup.string()
                .required('Select a city to see Co-makes near you.'),
            description: Yup.string()
                .max(25)
                .required('Please tell us about yourself.')
        }),
            handleSubmit(values, {resetForm, setSubmitting}) {
                
               
                console.log(values);
                axiosWithAuth() 
                    .put('users/user/profile/edit', values)
                    .then(response => {
                        console.log(response.data);
                    })
                    .catch(err => {
                        console.log(err);
                    });

                
                setSubmitting();
                resetForm();
         
                // showSuccess('Refresh your page to see updated Profile')
                console.log(values);

              
                

                
        }

}) (ProfileForm);

export default FormikProfileForm;