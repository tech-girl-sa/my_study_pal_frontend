import { useRouteError } from "react-router-dom";
import Error404 from "./Error404";
import Error500 from "./Error500";
import { useEffect } from "react";
import classes from './ErrorPage.module.css'

export default function ErrorPage(){

    const error = useRouteError();

    useEffect(() => {
      document.body.classList.add(classes.errorBody);
  
      return () => {
        document.body.classList.remove(classes.errorBody);
      };
    }, []);

    if (error?.status === 404) {
        return(
        <div className={classes.errorPage}>
        <Error404 />;
        </div>)
      }
    return (
    <div className={classes.errorPage}>
    <Error500 />
    </div>);
}