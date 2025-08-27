import { Form, useFormikContext } from 'formik';
import classes from './CustomForm.module.css'

function CustomForm({children, ...props}){
    const { status } = useFormikContext();
    
    return <Form {...props}>
        {status && <div className={classes.formError}>{status}</div>}
        {children}
    </Form>
}
export default CustomForm;