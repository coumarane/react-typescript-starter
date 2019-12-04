import * as React from "react";
import { Redirect, Route, Switch } from "react-router";
import Dashboard from "./components/dashboard/dashboard";
import ContactCreation from "./components/contact/contact.creation";

export const AppRoutes: React.FC = () => (
  <Switch>
    <Redirect exact={true} from={`/`} to={"/dashboard"} />
    <Route exact={true} path={"/dashboard"} component={Dashboard} />
    <Route exact={true} path={"/contact/new"} component={ContactCreation} />
  </Switch>
);
