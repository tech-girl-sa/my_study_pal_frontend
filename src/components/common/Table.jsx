
import classes from './Table.module.css'

export default function Table({children,headers}){
    return <table className={classes.table}>
      <thead>
        <tr>
            {headers.map(header => <th>{header}</th>)}
        </tr>
      </thead>
      <tbody>
        
        {children}
        
      </tbody>
    </table>
}