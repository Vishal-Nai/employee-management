import React from "react";
import { Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoutes";
import Home from "../pages/Home/Home";
import { MainTemplate } from "../templates/Main/MainTemplate";
import { DashboardTemplate } from "../templates/DashboardTemplate/DashboardTemplate";
import Users from "../pages/Dashboard/Users/Users";
import Contacts from "../pages/Dashboard/Contacts/Contacts";
import Messages from "../pages/Dashboard/Messages/Messages";
import { NotFound } from './../components/NotFound/NotFound';

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={(props: any) => {
          return <MainTemplate {...props} PageContent={Home} />;
        }}
      />
      <Route
        exact
        path="/login"
        render={(props: any) => {
          return <MainTemplate {...props} PageContent={Home} />;
        }}
      />
      <PrivateRoute
        exact
        path="/dashboard"
        template={DashboardTemplate}
        component={Users}
      />
      <PrivateRoute
        exact
        path="/dashboard/contacts"
        template={DashboardTemplate}
        component={Contacts}
      />
      <PrivateRoute
        exact
        path="/dashboard/messages"
        template={DashboardTemplate}
        component={Messages}
      />
      <Route component={NotFound} />
    </Switch>
  );
};
