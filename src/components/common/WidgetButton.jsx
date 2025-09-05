import { useFormikContext } from "formik";
import { FaPaperPlane, FaSpinner } from "react-icons/fa";
import classes from './WidgetButton.module.css'

function WidgetButton() {
    const { isSubmitting } = useFormikContext();
  
    return (
      <button className={classes.chatFormButton} type="submit" disabled={isSubmitting}>
        {isSubmitting ? <FaSpinner className={`${classes.spinIcon} ${classes.icon}`} /> : 
        <FaPaperPlane className={classes.icon}/>}
      </button>
    );
  }
  export default WidgetButton;