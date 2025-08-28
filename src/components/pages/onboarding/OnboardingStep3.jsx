import classes from './OnboardingLayout.module.css'
import { Formik } from 'formik';
import * as Yup from 'yup';
import Input from '../../common/Input';
import { useNavigate } from "react-router-dom";
import { useMutation } from '@tanstack/react-query';
import { createNewRegistration } from '../../../utils/http';
import BlackSubmitButton from '../../common/BlackSubmitButton';
import CustomForm from '../../common/CustomForm';

const initialValues={
  nickname: '',
  age: '',
}
const validationSchema=Yup.object({
  nickname: Yup.string()
    .max(150, 'Must be 150 characters or less')
    .required('This field is required'),
    age: Yup.number().integer('Please enter a valid number.')
    .required('Please enter a number.'),

})

export default function OnboardingStep3(){
    function handleSubmit(values, { setSubmitting, setErrors, setStatus }){
    
      }

    return (
  
        <Formik
       initialValues={initialValues}
       validationSchema={validationSchema}
       onSubmit={handleSubmit}
     >
    <CustomForm className={classes.onboardingForm} >
        <h2>📖 What are you learning?</h2>
        <p className={classes.subtext}>List your main subjects and what you want help with.</p>
      
      <Input 
      label="💬 What should we call you?" type='text'
      id="nickname" name="nickname" placeholder="e.g. Sarah" ></Input>
      
      <Input label="📝 Subjects you're studying" type="text"
      id="subjects" name="subjects" placeholder="e.g. Math, History, Physics"></Input>
      
    <label for="goals">🎯 What are your learning goals?</label>
    <textarea id="goals" name="goals" placeholder="e.g. Prepare for exams, understand lectures better, etc." rows="4" required></textarea>

      <BlackSubmitButton type="submit">Next</BlackSubmitButton>
    </CustomForm>
    </Formik>


    )
}