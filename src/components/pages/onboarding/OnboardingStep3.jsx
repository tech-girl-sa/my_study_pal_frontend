import classes from './OnboardingLayout.module.css'
import { Formik } from 'formik';
import * as Yup from 'yup';
import Input from '../../common/Input';
import BlackSubmitButton from '../../common/BlackSubmitButton';
import CustomForm from '../../common/CustomForm';
import { useSetUserInfo } from '../../../utils/hooks';


const initialValues={
  subjects: '',
  goals: '',
}
const validationSchema=Yup.object({
  subjects: Yup.string()
    .max(300, 'Must be 300 characters or less')
    .required('This field is required'),
    goals: Yup.string()
    .max(600, 'Must be 600 characters or less')
    .required('This field is required'),

})

export default function OnboardingStep3(){
    const {handleSubmit} = useSetUserInfo('/onboarding/step4')

    return (
  
        <Formik
       initialValues={initialValues}
       validationSchema={validationSchema}
       onSubmit={handleSubmit}
     >
    <CustomForm className={classes.onboardingForm} >
        <h2>📖 What are you learning?</h2>
        <p className={classes.subtext}>List your main subjects and what you want help with.</p>
 
      
      <Input label="📝 Subjects you're studying" type="text"
      id="subjects" name="subjects" placeholder="e.g. Math, History, Physics"></Input>
      
    <Input textarea id="goals" name="goals" 
    placeholder="e.g. Prepare for exams, understand lectures better, etc." 
    rows="4" label='🎯 What are your learning goals?'></Input>

      <BlackSubmitButton type="submit">Next</BlackSubmitButton>
    </CustomForm>
    </Formik>


    )
}