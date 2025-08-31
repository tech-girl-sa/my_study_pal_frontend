import { ErrorMessage } from "formik";
import classes from './CheckBoxes.module.css'

export default function CheckBoxes ({ children,name, ...props }){
    
    return (
        <>
       <div className={classes.checkboxGroup  }>
            {children}
        </div>
        <ErrorMessage
        name={name}
        component="div"
        className={classes.errorMessage}
      />
      </>
    );
  };