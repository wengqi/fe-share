import React, { Component, Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { routerData } from './router'

class Routes extends Component {
  render() {
    return (
      <Suspense fallback={null}>
        <Router>
          <Switch>
            {
              routerData.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={true}
                  render={props => <route.component {...props}/>}
                />
              ))
            }
          </Switch>
        </Router>
      </Suspense>
    )
  }
}

export default Routes
