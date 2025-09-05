import classes from './RoundBlueButton.module.css'


export default function RoundBlueButton({children}){

    return <button className={classes.actionButton}>{children}</button>
}