import { FaCirclePlus } from "react-icons/fa6";
import classes from "./CreateSubject.module.css";
import PageHeader from "../../common/PageHeader";
import CustomForm from "../../common/CustomForm";
import Input from "../../common/Input";
import RoundBlueButton from "../../common/RoundBlueButton";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useGetSection, useGetSubject, useSetSection, useSetSubject } from "../../../utils/hooks";
import create_section from "../../../assets/ai_desk.png";

const blankValues={
    id:'',
    title: '',
    description: '',
  }
const validationSchema=Yup.object({
    title: Yup.string()
    .max(150, 'Must be 150 characters or less')
    .required('This field is required'),
    description: Yup.string()
    .max(3000, 'Must be 3000 characters or less'),

})

export default function SectionUpdate(){
    const {data:initialValues} = useGetSection()
    const {handleSubmit} = useSetSection("/dashboard/courses", "PUT")

    return  (<>
    <PageHeader title="Update Section" subtitle="Update section in your study plan."/>
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
      

      <RoundBlueButton type="submit"><FaCirclePlus /> Update Section</RoundBlueButton>
    </CustomForm>
    </Formik>
     <img  className={classes.sideImage} src={create_section} alt="Create section"/>
    </div>
    
  </>)
}