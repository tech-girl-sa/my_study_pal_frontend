import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../common/Navbar";
import Sidebar from "../../common/Sidebar";
import classes from "./DashboardLayout.module.css"



export default function(){
  const { pathname } = useLocation();

  // detect chat pages by path pattern
  const isChatPage = /^\/dashboard\/courses\/\d+\/\d+$/.test(pathname); 
    
    console.log(isChatPage)
    return <div className={classes.dashboardPage}>
        <Navbar></Navbar>
    
      <div className={classes.dashboardLayout}>
    
       <Sidebar></Sidebar>
       
       <main className={`${classes.mainContent} ${isChatPage ? classes.noPadding : ""}`}>
       <Outlet/>
       </main>
    
      </div>
    </div>
}