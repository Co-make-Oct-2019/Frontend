import React from 'react';

// * FORMIK IMPORT
import { withFormik, Form, Field, ErrorMessage, yupToFormErrors, Formik } from 'formik';
// * YUP IMPORT
import * as Yup from 'yup';

// * STYLED COMPONENT IMPORT
import style from './StyledComponrnts';

const Login = ({values}) => {

    return (
        <Formik
            onSubmit={(values, tools) => {
                console.log(values, tools);
                tools.resetForm();
            } }
            initialvalues={{name: '', password: '', username:''}}
            render = {props => {
                return(
                    <Form>

                        <label>Username </label>
                        <Field name='terms' type='text' placeholder='username'/>
                        <ErrorMessage name='terms' component='div' className='warning'/>
                        
                        <label>Password </label>
                        <Field name='password' type='text' placeholder='enter password'/>
                        <ErrorMessage name='password' component='div' className='warning'/>
                        
                        <label>Location </label>
                        <Field name='location' type='text' placeholder='What area are you in?'/>
                        <ErrorMessage name='location' component='div' className='warning'/>
                        
                        <input type='submit' />
                    </Form>
                )
            }}
        />
    )
  };
    

  const FormikLogin = withFormik({
    mapPropsToValues(username, password, location) {
      return {
        username: username || "",
        password: password || "",
        location: location || "",
      };
    },
   
// ========================    VALIDATION SCHEMA    =============================//
   validationSchema: Yup.object().shape({
     username: Yup.string()
      .required("Please enter your name"),
     password: Yup.string("Please enter your password")
      .min(8)
      .required("Password is required")
   }),
    handleSubmit(values) {
      console.log(values);
    }
  })(Login)
  
  export default FormikLogin;
  