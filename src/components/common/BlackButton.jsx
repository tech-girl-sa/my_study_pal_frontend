import classes from './BlackButton.module.css'

function BlackButton({children, ...props}){

    return  <button  className={classes.blackButton} {...props}>{children}</button>
}

export default BlackButton;