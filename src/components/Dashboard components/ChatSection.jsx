import { Formik } from "formik";
import WidgetInput from "../common/WidgetInput";
import classes from "./ChatSection.module.css"
import CustomForm from "../common/CustomForm";
import * as Yup from 'yup';
import ChatWidget from "../common/ChatWidget";
import { FaFileAlt,FaPenSquare } from "react-icons/fa";


const initialValues={
  message: '',
}
const validationSchema=Yup.object({
  message: Yup.string()
    .max(1500, 'Must be 150 characters or less')
    .required('This field is required')

})


export default function ChatSection(){
    function handleSubmit({values}){
        console.log(values)
    }
    return <div className={classes.chatSection}>
    <div className={classes.chatMessages}>
      <div className={classes.chatMessage}>
        <p><strong>AI:</strong> This section explains the basic concepts of derivatives.</p>
      </div>
      <div className={`${classes.chatMessage} ${classes.user}`}>
        <p><strong>You:</strong> Can you give me an example of a real-world application?</p>
      </div>
      <div className={classes.chatMessage}>
        <p><strong>AI:</strong> Sure! Derivatives are used in physics to describe motion...</p>
      </div>
    </div>

    <div className={classes.chatMeta}>
      <span><FaFileAlt/> <a href="#">Derivatives_Notes.pdf</a></span>
      <span><FaPenSquare/> <a href="#">Derivatives Quiz</a></span>
    </div>

    <div className={classes.chatActions}>
      <button>Summarize</button>
      <button>Explain More</button>
      <button>Translate</button>
    </div>
        <ChatWidget/>
  </div>

}