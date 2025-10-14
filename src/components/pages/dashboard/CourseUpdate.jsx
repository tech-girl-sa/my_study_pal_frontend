import { FaCirclePlus } from "react-icons/fa6";
import classes from "./CreateSubject.module.css";
import PageHeader from "../../common/PageHeader";
import CustomForm from "../../common/CustomForm";
import Input from "../../common/Input";
import RoundBlueButton from "../../common/RoundBlueButton";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useGetCourse, useGetSubject, useGetSubjects, useSetCourse, useSetSubject } from "../../../utils/hooks";
import create_course from "../../../assets/create_course.png";
import Select from "../../common/Select";

const blankValues={
    id:'',
    title: '',
    description: '',
    tags:''
  }
const validationSchema=Yup.object({
    title: Yup.string()
    .max(150, 'Must be 150 characters or less')
    .required('This field is required'),
    description: Yup.string()
    .max(3000, 'Must be 3000 characters or less'),
    tags: Yup.string()
    .max(300, 'Must be 300 characters or less'),

})

export default function CourseUpdate(){
    const {data:subjects} = useGetSubjects([])
        console.log(subjects)
        const subjectChoices=[
            {key:"",label:"Select Subject"},
            ...(subjects?.map(subject=>({key:subject.id, label:subject.title})) || [])   
        ]
    const {data:initialValues} = useGetCourse()
    const {handleSubmit} = useSetCourse("/dashboard/courses", "PUT")
    if (initialValues){
    initialValues.tags = initialValues.tags.toString()
    }
    console.log(initialValues)
    return  (<>
    <PageHeader title="Update course" subtitle="Update course in your study plan."/>
    <div className={classes.mainLayout}>
       <Formik
           initialValues={initialValues || blankValues}
           validationSchema={validationSchema}
           enableReinitialize={true}
           onSubmit={handleSubmit}
         >
    <CustomForm className={classes.createForm} >
      <Input 
      label="📘 Title" type='text'
      id="title" name="title" placeholder="Enter course title..." ></Input>
      
      <Input textarea rows="4" label="📝 Description" type="text"
      id="description" name="description" placeholder="Enter a short description..."></Input>
    
    <Select id="subject" name="subject" 
          label='📚 Subject'>
            {subjectChoices.map(choice=><option value={choice.key}>{choice.label}</option>)}
            
          </Select>
    <Input label="🏷️ Tags" type="text"
      id="tags" name="tags" placeholder="e.g. math, science, programming"></Input>
      

      <RoundBlueButton type="submit"><FaCirclePlus /> Update Course</RoundBlueButton>
    </CustomForm>
    </Formik>
    <img  className={classes.sideImage} src={create_course} alt="Update course"/>
    </div>
    
  </>)
}