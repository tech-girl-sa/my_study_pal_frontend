import { Formik } from 'formik';
import * as Yup from 'yup';
import Input from '../common/Input';
import BlackSubmitButton from '../common/BlackSubmitButton';
import CustomForm from '../common/CustomForm';
import { useAuthenticate} from '../../utils/hooks';
import Card from '../common/Card';
import classes from './Login.module.css';
import { NavLink } from 'react-router-dom';

const initialValues={
  email: '',
  password: '',
}
const validationSchema=Yup.object({

  email: Yup.string().email('Invalid email address').required('This field is required'),
  password: Yup.string().min(8, 'Must be at least 8 chars').required('This field is required'),
})


export default function Login(){
    const [handleSubmit] = useAuthenticate("login")

    return <div className={classes.loginPage}>
    <Card>
      <h2 className={classes.loginTitle}>Welcome Back</h2>
      <p className={classes.loginSubtitle}>Login to continue your smart learning journey</p>
        <Formik
               initialValues={initialValues}
               validationSchema={validationSchema}
               onSubmit={handleSubmit}
             >
            <CustomForm className={classes.signupForm} >
              <Input 
              label="email" type="text" id="email" name="email" ></Input>
              
              <Input label="Password" type="password" id="password" name="password" ></Input>
        
              <BlackSubmitButton type="submit">Login</BlackSubmitButton>
            </CustomForm>
            </Formik>
            <div className={classes.loginFooter}>
        <NavLink to="/signup">Forgot password?</NavLink>
        <p>Don’t have an account? <a href="#">Sign up</a></p>
      </div>
            </Card>
</div>
}