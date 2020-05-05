import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./core/Home";
import AdminDashBoard from "./admin/AdminDashBoard";
import AdminRoute from "./auth/AdminRoute";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import PrivateRoute from "./auth/PrivateRoute";
import CreatePost from "./admin/createPost";
import SinglePost from "./admin/singlePost";
import ManagePost from "./admin/ManagePost";
import EditPost from "./admin/EditPost";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/admin/dashboard" exact component={AdminDashBoard} />
        <Route path="/post/create" exact component={CreatePost} />
        <Route path="/post/:postId" exact component={SinglePost} />
        <Route path="/post/update/:postId" exact component={EditPost} />

        <Route path="/admin/post" exact component={ManagePost} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
