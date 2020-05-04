import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "../auth";

const AdminRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() && isAuthenticated().user.code === 2609 ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/signin",
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

export default AdminRoute;
