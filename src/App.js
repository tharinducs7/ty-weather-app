import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import _ from 'lodash'
import { routeList } from './routes'
import PublicRoute from './routes/public.routes'

const App = () => {
  return (
    <Router>
      <Switch>
        {
          /* we cannot use dynamic key value here, dynamic 'key' will cause the app to
            re-render as key changes its value. To avoid that, we are here using static value
            */
          _.map(routeList, (route) => (
            <PublicRoute
              key="publicRoute"
              exact
              path={route.path}
              component={route.component}
            />
          ))
        }
      </Switch>
    </Router>
  )
}

export default App