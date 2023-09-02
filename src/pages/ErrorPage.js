import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <h1>ERROR 101</h1>
            <div>Error Status: {error.statusText}</div>
            <div>Error Message: {error.message}</div>
        </div>
    );
}