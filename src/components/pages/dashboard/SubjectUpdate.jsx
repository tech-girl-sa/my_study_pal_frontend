import { FaCirclePlus } from "react-icons/fa6";
import classes from "./CreateSubject.module.css";
import PageHeader from "../../common/PageHeader";
import CustomForm from "../../common/CustomForm";
import Input from "../../common/Input";
import RoundBlueButton from "../../common/RoundBlueButton";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useGetSubject, useSetSubject } from "../../../utils/hooks";
import create_subject from "../../../assets/robot_arm.png";

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

export default function SubjectUpdate(){
    const {data:initialValues} = useGetSubject()
    const {handleSubmit} = useSetSubject("/dashboard/subjects", "PUT")
    if (initialValues){
    initialValues.tags = initialValues.tags.toString()
    }

    return  (<>
    <PageHeader title="Update Subject" subtitle="Update subject in your study plan."/>
    <div className={classes.mainLayout}>
       <Formik
           initialValues={initialValues || blankValues}
           validationSchema={validationSchema}
           enableReinitialize={true}
           onSubmit={handleSubmit}
         >
    <CustomForm className={classes.createForm} >
        <Input id="id" name="id" hidden/>
      <Input 
      label="📘 Title" type='text'
      id="title" name="title" placeholder="Enter subject title..." ></Input>
      
      <Input textarea rows="4" label="📝 Description" type="text"
      id="description" name="description" placeholder="Enter a short description..."></Input>

    <Input label="🏷️ Tags" type="text"
      id="tags" name="tags" placeholder="e.g. math, science, programming"></Input>
      

      <RoundBlueButton type="submit"><FaCirclePlus /> Update Subject</RoundBlueButton>
    </CustomForm>
    </Formik>
    <img  className={classes.sideImage} src={create_subject} alt="Update subject"/>
    </div>
    
  </>)
}