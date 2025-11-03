import classes from './OnboardingLayout.module.css'
import { Formik } from 'formik';
import * as Yup from 'yup';
import Input from '../../common/Input';
import BlackSubmitButton from '../../common/BlackSubmitButton';
import CustomForm from '../../common/CustomForm';
import Select from '../../common/Select';
import { useSetUserInfo } from '../../../utils/hooks';

const initialValues={
  academicLevel: '',
  institution: '',
  semester:'',
}
const validationSchema=Yup.object({
  academicLevel: Yup.string()
    .max(50, 'Must be 50 characters or less')
    .required('This field is required'),
    institution: Yup.string()
    .max(150, 'Must be 150 characters or less'),
    semester: Yup.string()
    .max(150, 'Must be 150 characters or less'),

})

export default function OnboardingStep2(){
     const {handleSubmit} = useSetUserInfo('/onboarding/step3')

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
        
        
      <Select id="academicLevel" name="academicLevel" 
      label='📚 What’s your current academic level?'>
        <option value="">-- Choose one --</option>
        <option value="middle_school">Middle School</option>
        <option value="high_school">High School</option>
        <option value="university">University</option>
        <option value="vocational_formation">Vocational / Formation</option>
        <option value="self_learning">Self-learning</option>
        <option value="other">Other</option>

      </Select>
      
      <Input label="🏫 Institution name (optional)" type="text"
      id="institution" name="institution" placeholder="e.g. National University"></Input>
      
      <Input label="📅 Current year or semester (if applicable)" type="text"
      id="semester" name="semester" placeholder="e.g. 2nd year, Semester 1"></Input>

      <BlackSubmitButton >Next</BlackSubmitButton>
    </CustomForm>
    </Formik>
</>
    )
}