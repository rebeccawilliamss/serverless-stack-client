import React from "react";
import { Route, Redirect, useLocation } from "react-router-dom";
import { useAppContext } from "../libs/contextLib";

export default function AuthenticatedRoute({ children, ...rest }) {
    const { pathname, search } = useLocation();
    const { isAuthenticated } = useAppContext(); //check user is authenticated
    return (
        <Route { ...rest}>
            {isAuthenticated ? (
                children
            ) : (
                <Redirect to={
                    `/login?redirect=${pathname}${search}`
                } />
            )}
        </Route>
    );
}

/* If the user is authenticated, then we simply render the children component.
And if the user is not authenticated, then we use the Redirect React Router
component to redirect the user to the login page. */