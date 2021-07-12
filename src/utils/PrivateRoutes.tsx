import { Route, Redirect, RouteProps } from "react-router-dom";

interface PrivateRouteProps extends RouteProps {
  template: any;
  component: any;
  isSignedIn?: boolean;
}

export const PrivateRoute = (props: PrivateRouteProps) => {
  const {
    template: Template,
    component: Component,
    isSignedIn = true,
    ...rest
  } = props;
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        isSignedIn ? (
          <Template {...rest} props={props} PageContent={Component} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: routeProps.location },
            }}
          />
        )
      }
    />
  );
};
