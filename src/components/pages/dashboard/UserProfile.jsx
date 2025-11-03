import classes from "./CreateSubject.module.css";
import PageHeader from "../../common/PageHeader";
import CustomForm from "../../common/CustomForm";
import Input from "../../common/Input";
import RoundBlueButton from "../../common/RoundBlueButton";
import { Formik } from 'formik';
import * as Yup from 'yup';
import {  useGetUserProfile, useSetUserInfo } from "../../../utils/hooks";
import Select from "../../common/Select";
import CheckBoxes from "../../common/CheckBoxes";
import CheckBox from "../../common/CheckBox";
import { FaPencilAlt} from "react-icons/fa";


const blankValues={
  age: null,
  country: "",
  academicLevel: null,
  institution: "",
  semester: "",
  subjects: "",
  goals: "",
  supportType: []
}


const validationSchema=Yup.object({
    academicLevel: Yup.string()
        .max(50, 'Must be 50 characters or less')
        .required('This field is required'),
    institution: Yup.string()
        .max(150, 'Must be 150 characters or less'),
    semester: Yup.string()
        .max(150, 'Must be 150 characters or less'),
    subjects: Yup.string()
        .max(300, 'Must be 300 characters or less')
        .required('This field is required'),
    goals: Yup.string()
        .max(600, 'Must be 600 characters or less')
        .required('This field is required'),
    country: Yup.string()
        .max(150, 'Must be 150 characters or less')
        .required('This field is required'),
    age: Yup.number().integer('Please enter a valid number.')
        .required('Please enter a number.'),
    supportType: Yup.array().of(Yup.string().max(150, 'Must be 150 characters or less'))
        .min(1, 'Pick at least one option')
        .required('This field is required'),

})

export default function UserProfile(){
    const {data:userInfo} = useGetUserProfile()
    const userInfoInitialValues = (({ academic_level, required_help, current_year,
        institution_name, ...rest }) => ({
        ...rest,
        academicLevel: academic_level,
        supportType: required_help,
        semester: current_year,
        institution: institution_name
      }))(userInfo||{});
    const {handleSubmit} = useSetUserInfo("/dashboard/userProfile/", "PUT")
   
  
    return  (<>
    <PageHeader title="Update Your Profile" subtitle="Keep your information up to date to personalize your Study Pal experience."/>
    <div className={classes.mainLayout}>
 <Formik
 initialValues={userInfoInitialValues || blankValues}
 validationSchema={validationSchema}
 enableReinitialize={true}
 onSubmit={handleSubmit}
>
<CustomForm className={classes.createForm} >
  
      <Input 
      label="🌍 Where do you come from ?" type='text'
      id="country" name="country" placeholder="e.g. Germany" ></Input>
      
      <Input label="🎂 How old are you?" type="text"
      id="age" name="age" placeholder="e.g. 18"></Input>
     
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
      
      <Input label="📝 Subjects you're studying" type="text"
      id="subjects" name="subjects" placeholder="e.g. Math, History, Physics"></Input>
      
    <Input textarea id="goals" name="goals" 
    placeholder="e.g. Prepare for exams, understand lectures better, etc." 
    rows="4" label='🎯 What are your learning goals?'></Input>
  
  <label>💡 What kind of help are you looking for?</label>
  <CheckBoxes name="supportType">
  
  <CheckBox  name="supportType" value="summarize_course" label='Summarize my courses '/>
  <CheckBox name="supportType" value="translate" label='Translate material '/>
  <CheckBox  name="supportType" value="explain" label='Explain difficult concepts'/>
  <CheckBox  name="supportType" value="ask" label='Ask questions via chat'/>
  <CheckBox name="supportType" value="generate_quizzes" label='Generate quizzes/tests'/>

  </CheckBoxes>

  <RoundBlueButton type="submit"><FaPencilAlt /> Update Profile Info</RoundBlueButton>
</CustomForm>
</Formik>
    
    </div>
    
  </>)
}