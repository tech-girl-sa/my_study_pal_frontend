import classes from './Input.module.css'

function Input({label,id, ...props}){

    return(
        <>
        <label className={classes.customInputLabel} htmlFor={id}>{label}</label>
        <input className={classes.customInput} id={id} {...props} />
      </>
    )
}
export default Input;