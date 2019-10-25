import React from "react";
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import axiosWithAuth from '../Utils/axiosWithAuth';
import Navigation from '../DashBoard/Navigation';
import comake from '../images/comake.png';
import styled from 'styled-components';
import style from './StyledComponents';



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
        <>
        
        <style.Row>
          <style.FormDiv>
          <h1>Update Profile</h1>
                <style.Column>
                    <style.Title>Name
                        <style.Input name='name' type='text' placeholder='name'/>
                        {touched.name && errors.name &&<style.Err>{errors.name}</style.Err>}
                    </style.Title>
                </style.Column>
                <style.Column>
                    <style.Title>Add an Image
                        <style.Input name='imageurl' type='url' placeholder='photo'/>
                        {touched.imageurl && errors.imageurl &&<style.Err>{errors.imageurl}</style.Err>}
                    </style.Title>
                </style.Column>
                <style.Column>
                   <style.Title>Email Address
                        <style.Input validate={validate} name='email' type='email' placeholder='email address'/>
                        {touched.email && errors.email &&<style.Err>{errors.email}</style.Err>}
                    </style.Title>
                </style.Column>
                <style.Column>
                    <style.Title>Quote Me:
                        <style.Input name='description' type='text' placeholder='Pleased to meet you'/>
                        {touched.description && errors.description && 
                    <style.Err>{errors.description}</style.Err>}
                    </style.Title>
                </style.Column>
                <style.Column>
                        <style.Title>
                        <Field component='select' name= 'location' placeholder='What city are you in?'>
                            <option value=''>Select Your City</option>
                            <option value='Boston'>Boston</option>
                            <option value='Chicago'>Chicago</option>
                            <option value='Miami'>Miami</option>
                            <option value='Portland'>Portland</option>
                        </Field>
                        <style.Err>{errors.location}</style.Err>
                        </style.Title>
                </style.Column>

                <style.Button type='submit'></style.Button>
                <Navigation/>
            </style.FormDiv>
            <style.Logo src= {comake}></style.Logo>
            </style.Row>
            </>
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
                .email('Email not valid')
                .required('Co-maker profiles must contain a valid email address.'),
            imageurl: Yup.string()
                .max(300, 'Image must be less than 300px'),
            location: Yup.string()
                .required('Select a city to see Co-makes near you.'),
            description: Yup.string()
                .max(25)
                .required('Please tell us about yourself.')
        }),
            handleSubmit(values, {resetForm, setErrors, setSubmitting}) {

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