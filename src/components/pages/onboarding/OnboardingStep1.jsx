import classes from './OnboardingLayout.module.css'
import { Formik } from 'formik';
import * as Yup from 'yup';
import Input from '../../common/Input';
import BlackSubmitButton from '../../common/BlackSubmitButton';
import CustomForm from '../../common/CustomForm';
import { useSetUserInfo } from '../../../utils/hooks';

const initialValues={
  country: '',
  age: '',
}
const validationSchema=Yup.object({
  country: Yup.string()
    .max(150, 'Must be 150 characters or less')
    .required('This field is required'),
    age: Yup.number().integer('Please enter a valid number.')
    .required('Please enter a number.'),

})

export default function OnboardingStep1(){
  const {handleSubmit} = useSetUserInfo('/onboarding/step2')

    return (
  
        <Formik
       initialValues={initialValues}
       validationSchema={validationSchema}
       onSubmit={handleSubmit}
     >
    <CustomForm className={classes.onboardingForm} >
        <h2>👋 Hi there! Let’s get started</h2>
        <p className={classes.subtext}>We’d love to know a little more about you.</p>
      <Input 
      label="🌍 Where do you come from ?" type='text'
      id="country" name="country" placeholder="e.g. Germany" ></Input>
      
      <Input label="🎂 How old are you?" type="text"
      id="age" name="age" placeholder="e.g. 18"></Input>
      

      <BlackSubmitButton type="submit">Next</BlackSubmitButton>
    </CustomForm>
    </Formik>

    )
}