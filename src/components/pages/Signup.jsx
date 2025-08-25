import classes from './Signup.module.css'
import { useFormik, Formik, Form } from 'formik';
import * as Yup from 'yup';
import Card from '../common/Card';
import Input from '../common/Input';
import BlackButton from '../common/BlackButton';

const initialValues={
  fullName: '',
  email: '',
  password: '',
  confirmPassword: '',
}
const validationSchema=Yup.object({
  fullName: Yup.string()
    .max(150, 'Must be 150 characters or less')
    .required('This field is required'),
  email: Yup.string().email('Invalid email address').required('This field is required'),
  password: Yup.string().min(6, 'Must be at least 6 chars').required('This field is required'),
  confirmPassword: Yup.string().min(6, 'Must be at least 6 chars')
  .required('This field is required')
  .when("password", (password, schema) => {
    return schema.test({
      test: (value) => password === value,
      message: "Passwords must match",
    });
  }),
})


function Signup(){

    return(
        <Card>
    <h1>Create Your Study Pal Account</h1>
    <Formik
       initialValues={initialValues}
       validationSchema={validationSchema}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
    <Form className={classes.signupForm} >
      <Input 
      label="Full Name" type="text" id="fullName" name="fullName" ></Input>
      
      <Input label="Email" type="email" id="email" name="email" ></Input>
      <Input label="Password" type="password" id="password" name="password" ></Input>
      <Input label="Confirm Password" type="password"
      id="confirmPassword" name="confirmPassword"></Input>

      <BlackButton type="submit">Create Account</BlackButton>
      <p className={classes.loginLink}>Already have an account? <a href="#">Log in</a></p>
    </Form>
    </Formik>
    </Card>
    )
};

export default Signup;