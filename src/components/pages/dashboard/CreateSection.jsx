import { FaCirclePlus } from "react-icons/fa6";
import classes from "./CreateSubject.module.css";
import PageHeader from "../../common/PageHeader";
import CustomForm from "../../common/CustomForm";
import Input from "../../common/Input";
import RoundBlueButton from "../../common/RoundBlueButton";
import { Formik } from 'formik';
import * as Yup from 'yup';
import {  useGetCourse, useSetSection } from "../../../utils/hooks";
import create_section from "../../../assets/ai_desk.png";

const initialValues={
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
    
})

export default function CreateSection(){
    const {data:course} = useGetCourse()
    const {handleSubmit} = useSetSection("/dashboard/courses")

    return  (<>
    <PageHeader title="Create New Section" subtitle={`Add a new section for ${course?.title} course.`}/>
    <div className={classes.mainLayout}>
       <Formik
           initialValues={initialValues}
           validationSchema={validationSchema}
           onSubmit={handleSubmit}
         >
    <CustomForm className={classes.createForm} >
      <Input 
      label="📘 Title" type='text'
      id="title" name="title" placeholder="Enter section title..." ></Input>
      
      <Input textarea rows="4" label="📝 Description" type="text"
      id="description" name="description" placeholder="Enter a short description..."></Input>
      

      <RoundBlueButton type="submit"><FaCirclePlus /> Create Section</RoundBlueButton>
    </CustomForm>
    </Formik>
    <img  className={classes.sideImage} src={create_section} alt="Create section"/>
    </div>
    
  </>)
}