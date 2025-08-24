import classes from './Signup.module.css'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Card from '../common/Card';
import Input from '../common/Input';
import BlackButton from '../common/BlackButton';

function Signup(){

    return(
        <Card>
    <h1>Create Your Study Pal Account</h1>
    <form class={classes.signupForm}>
      <Input label="Full Name" type="text" id="name" name="name" required  ></Input>
      <Input label="Email" type="email" id="email" name="email" required  ></Input>
      <Input label="Password" type="password" id="password" name="password" required  ></Input>
      <Input label="Confirm Password" type="password" id="confirmPassword" name="confirmPassword" required  ></Input>

      <BlackButton type="submit">Create Account</BlackButton>
      <p class={classes.loginLink}>Already have an account? <a href="#">Log in</a></p>
    </form>
    </Card>
    )
};

export default Signup;