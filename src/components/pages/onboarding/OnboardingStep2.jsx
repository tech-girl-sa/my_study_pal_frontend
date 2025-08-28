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

export default function OnboardingStep2(){
    function handleSubmit(values, { setSubmitting, setErrors, setStatus }){
    
      }

    return (
        <>
        <Formik
       initialValues={initialValues}
       validationSchema={validationSchema}
       onSubmit={handleSubmit}
     >
    <CustomForm className={classes.onboardingForm} >
        <h2>🎓 Tell us about your studies</h2>
        <p className={classes.subtext}>So we can help you stay organized.</p>
        
        
        <label for="academic-level">📚 What’s your current academic level?</label>
      <select id="academic-level" name="academic-level" required>
        <option value="">-- Choose one --</option>
        <option value="middle">Middle School</option>
        <option value="high">High School</option>
        <option value="university">University</option>
        <option value="vocational">Vocational / Formation</option>
        <option value="self">Self-learning</option>
        <option value="other">Other</option>
      </select>
      
      <Input label="🏫 Institution name (optional)" type="text"
      id="institution" name="institution" placeholder="e.g. National University"></Input>
      
      <Input label="📅 Current year or semester (if applicable)" type="text"
      id="semester" name="semester" placeholder="e.g. 2nd year, Semester 1"></Input>

      <BlackSubmitButton type="submit">Next</BlackSubmitButton>
    </CustomForm>
    </Formik>
</>
    )
}