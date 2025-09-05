import classes from './WidgetInput.module.css'
import { useField } from 'formik';

function WidgetInput({...props}){
    const [field, meta] = useField(props);

    return(
        <>
        <textarea className={`${classes.chatFormInput} ${meta.touched && meta.error ? classes.error:''}`} 
         placeholder="Type your question..."  {...props} {...field} />
        {meta.touched && meta.error ? (
         <div className={classes.errorMessage}>{meta.error}</div>
       ) : null}
      </>
    )
}
export default WidgetInput;