import { useField } from "formik";
import classes from './CheckBox.module.css'

export default function CheckBox ({ label, ...props }){
    // React treats radios and checkbox inputs differently from other input types: select and textarea.
    // Formik does this too! When you specify `type` to useField(), it will
    // return the correct bag of props for you -- a `checked` prop will be included
    // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
    const [field] = useField({ ...props, type: 'checkbox' });
    return (
       <div className={classes.optionGroup }>
            <input type="checkbox" {...field} {...props}/>
            <label> {label} </label>
        </div>
        
    );
  };
