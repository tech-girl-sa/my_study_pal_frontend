import classes from './RoundBlueButton.module.css'


export default function RoundBlueButton({children,className, ...props}){

    return <button className={`${className || ""} ${classes.actionButton}`} {...props} >{children}</button>
}