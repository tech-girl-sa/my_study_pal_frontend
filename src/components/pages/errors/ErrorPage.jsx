import { useRouteError } from "react-router-dom";
import Error404 from "./Error404";
import Error500 from "./Error500";


export default function ErrorPage(){
    const error = useRouteError();

    if (error?.status === 404) {
        return <Error404 />;
      }
    return <Error500 />;
}