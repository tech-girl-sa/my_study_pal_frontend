import classes from './RoundBlueButton.module.css'


export default function RoundBlueButton({children, ...props}){

    return <button className={classes.actionButton} {...props} >{children}</button>
}