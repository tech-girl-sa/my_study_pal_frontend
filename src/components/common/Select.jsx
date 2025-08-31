import {  useField } from 'formik';
import classes from './Select.module.css'


export default function Select({ label, ...props }){
    const [field, meta] = useField(props);
    return (
      <div>
        <label className={classes.selectLabel}  htmlFor={props.id || props.name}>{label}</label>
        <select className={`${classes.customSelect} ${meta.touched && meta.error ? classes.error:''}`} {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className={classes.errorMessage}>{meta.error}</div>
        ) : null}
      </div>
    );
  };