import classes from './Input.module.css'
import { useField } from 'formik';

function Input({label, ...props}){
    const [field, meta] = useField(props);
    const Tag = props.textarea? "textarea":"input";
    return(
        <>
        <label className={classes.customInputLabel} htmlFor={props.name}>{label}</label>
        <Tag className={`${classes.customInput} ${meta.touched && meta.error ? classes.error:''}`} 
        {...props} {...field} />
        {meta.touched && meta.error ? (
         <div className={classes.errorMessage}>{meta.error}</div>
       ) : null}
      </>
    )
}
export default Input;