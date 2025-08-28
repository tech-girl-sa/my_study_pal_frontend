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

export default function OnboardingStep4(){
    function handleSubmit(values, { setSubmitting, setErrors, setStatus }){
    
      }

    return (
  
        <Formik
       initialValues={initialValues}
       validationSchema={validationSchema}
       onSubmit={handleSubmit}
     >
    <CustomForm className={classes.onboardingForm} >
        <h2>🔧 How can we help you best?</h2>
        <p className={classes.subtext}>Choose how you'd like to use Study Pal.</p>
        
        <label>💡 What kind of help are you looking for?</label>
        <div className={classes.checkboxGroup }>
          <div className={classes.optionGroup }>
          <input type="checkbox" name="support-type" value="summarize"/>
          <label> Summarize my courses </label>
        </div>

        <div className={classes.optionGroup }>
          <input type="checkbox" name="support-type" value="translate"/>
          <label> Translate material </label>
        </div>

        <div className={classes.optionGroup }>
          <input type="checkbox" name="support-type" value="explain"/>
          <label> Explain difficult concepts </label>
        </div>

        <div className={classes.optionGroup }>
          <input type="checkbox" name="support-type" value="chat"/>
          <label> Ask questions via chat </label>
        </div>

        <div className={classes.optionGroup }>
          <input type="checkbox" name="support-type" value="quiz"/>
          <label> Generate quizzes/tests </label>
        </div>
        </div>
      

      <BlackSubmitButton type="submit">Next</BlackSubmitButton>
    </CustomForm>
    </Formik>

    )
}