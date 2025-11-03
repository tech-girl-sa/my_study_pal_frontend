import classes from './OnboardingLayout.module.css'
import { Formik } from 'formik';
import * as Yup from 'yup';
import BlackSubmitButton from '../../common/BlackSubmitButton';
import CustomForm from '../../common/CustomForm';
import CheckBox from '../../common/CheckBox';
import CheckBoxes from '../../common/CheckBoxes';
import { useSetUserInfo } from '../../../utils/hooks';



const initialValues={
  supportType: [],
}
const validationSchema=Yup.object({
    supportType: Yup.array().of(Yup.string().max(150, 'Must be 150 characters or less'))
    .min(1, 'Pick at least one option')
    .required('This field is required'),
})

export default function OnboardingStep4(){
    
   const {handleSubmit} = useSetUserInfo('/')

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
        <CheckBoxes name="supportType">
        
        <CheckBox  name="supportType" value="summarize_course" label='Summarize my courses '/>
        <CheckBox name="supportType" value="translate" label='Translate material '/>
        <CheckBox  name="supportType" value="explain" label='Explain difficult concepts'/>
        <CheckBox  name="supportType" value="ask" label='Ask questions via chat'/>
        <CheckBox name="supportType" value="generate_quizzes" label='Generate quizzes/tests'/>

        </CheckBoxes>

      <BlackSubmitButton >Next</BlackSubmitButton>
    </CustomForm>
    </Formik>

    )
}