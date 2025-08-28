import classes from './Signup.module.css'
import { Formik } from 'formik';
import * as Yup from 'yup';
import Card from '../common/Card';
import Input from '../common/Input';
import { useNavigate } from "react-router-dom";
import { useMutation } from '@tanstack/react-query';
import { createNewRegistration } from '../../utils/http';
import BlackSubmitButton from '../common/BlackSubmitButton';
import CustomForm from '../common/CustomForm';
import { setAuthToken } from '../../utils/authentication';


const initialValues={
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
}
const validationSchema=Yup.object({
  username: Yup.string()
    .max(150, 'Must be 150 characters or less')
    .required('This field is required'),
  email: Yup.string().email('Invalid email address').required('This field is required'),
  password: Yup.string().min(8, 'Must be at least 8 chars').required('This field is required'),
  confirmPassword: Yup.string().min(8, 'Must be at least 8 chars')
  .required('This field is required')
  .when("password", ([password], schema) => {
    return schema.test({
      test: (value) => password === value,
      message: "Passwords must match",
    });
  }),
})


function Signup(){
  const navigate = useNavigate();
  const {mutate, isPending, isError, error} = useMutation({
    mutationFn: createNewRegistration
  })


  function handleSubmit(values, { setSubmitting, setErrors, setStatus }){
    mutate(values, {
      onSuccess: (data) => {
        setAuthToken(data.key)
        setSubmitting(false);
        navigate("/")
      },
      onError: async (err) => {
        if (err?.code === 400 && err?.info) {
          const fieldErrors = Object.fromEntries(
            Object.entries(err.info).map(([key, value]) => [key, value[0]])
          );
          setErrors(fieldErrors); 
        }else{setStatus(err.message)
        }
        setSubmitting(false);
      },
    });
  }
    
  
  return(
        <Card>
    <h1>Create Your Study Pal Account</h1>
    <Formik
       initialValues={initialValues}
       validationSchema={validationSchema}
       onSubmit={handleSubmit}
     >
    <CustomForm className={classes.signupForm} >
      <Input 
      label="Username" type="text" id="username" name="username" ></Input>
      
      <Input label="Email" type="email" id="email" name="email" ></Input>
      <Input label="Password" type="password" id="password" name="password" ></Input>
      <Input label="Confirm Password" type="password"
      id="confirmPassword" name="confirmPassword"></Input>

      <BlackSubmitButton type="submit">Create Account</BlackSubmitButton>
      <p className={classes.loginLink}>Already have an account? <a href="#">Log in</a></p>
    </CustomForm>
    </Formik>
    </Card>
    )
};

export default Signup;