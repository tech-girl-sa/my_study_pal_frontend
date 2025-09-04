import { Outlet } from "react-router-dom";
import Navbar from "../../common/Navbar";
import Sidebar from "../../common/Sidebar";
import classes from "./DashboardLayout.module.css"



export default function(){
    return <div className={classes.dashboardPage}>
        <Navbar></Navbar>
    
      <div className={classes.dashboardLayout}>
    
       <Sidebar></Sidebar>
       
       <main className={classes.mainContent}>
       <Outlet/>
       </main>
    
      </div>
    </div>
}