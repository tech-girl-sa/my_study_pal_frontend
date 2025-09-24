import WidgetButton from "./WidgetButton";
import WidgetInput from "./WidgetInput";
import classes from './ChatWidget.module.css'
import CustomForm from './CustomForm'
import { Formik } from "formik";
import * as Yup from 'yup';
import { useSetUserMessage } from "../../utils/hooks";



const initialValues={
  message: '',
}
const validationSchema=Yup.object({
  message: Yup.string()
    .max(1500, 'Must be 150 characters or less')
    .required('This field is required')

})


export default function ChatWidget(){
  const [handleSubmit] = useSetUserMessage()

    return <Formik
           initialValues={initialValues}
           validationSchema={validationSchema}
           onSubmit={handleSubmit}
           validateOnChange={false}
        validateOnBlur={false}
         >
    <CustomForm class={classes.chatForm} >
    <WidgetInput name='message' id='message'></WidgetInput>
    <WidgetButton></WidgetButton>
  </CustomForm>
  </Formik>
}