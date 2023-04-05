import { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from './AuthContext';
import { getUser } from './api';

function ProtectedRoute({ component: Component, ...rest }) {

  useEffect(() => {
    // dispatch({ type: 'FETCH_REQUEST' });
    getUser(state.jwt)
      .then((data) => {
        // dispatch({ type: 'FETCH_SUCCESS', payload: data });
      })
      .catch((error) => {
        // dispatch({ type: 'FETCH_FAILURE', payload: error.message });
      });
  }, []);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        authenticated ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default ProtectedRoute;
