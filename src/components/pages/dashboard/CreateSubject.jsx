import { FaCirclePlus } from "react-icons/fa6";
import classes from "./CreateSubject.module.css";
import PageHeader from "../../common/PageHeader";
import CustomForm from "../../common/CustomForm";
import Input from "../../common/Input";
import RoundBlueButton from "../../common/RoundBlueButton";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useSetNewSubject } from "../../../utils/hooks";

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
    tags: Yup.string()
    .max(300, 'Must be 300 characters or less'),

})

export default function CreateSubject(){
    const {handleSubmit} = useSetNewSubject("/dashboard/subjects")
    
    return  (<>
    <PageHeader title="Create New Subject" subtitle="Add a new subject to your study plan."/>
       <Formik
           initialValues={initialValues}
           validationSchema={validationSchema}
           onSubmit={handleSubmit}
         >
    <CustomForm className={classes.createForm} >
      <Input 
      label="📘 Title" type='text'
      id="title" name="title" placeholder="Enter subject title..." ></Input>
      
      <Input textarea rows="4" label="📝 Description" type="text"
      id="description" name="description" placeholder="Enter a short description..."></Input>

    <Input label="🏷️ Tags" type="text"
      id="tags" name="tags" placeholder="e.g. math, science, programming"></Input>
      

      <RoundBlueButton type="submit"><FaCirclePlus /> Create Subject</RoundBlueButton>
    </CustomForm>
    </Formik>
    
  </>)
}