import React from 'react'
import Main from './components/Main'
import { Switch, Route } from 'react-router-dom';
import UserDetails from './components/UserDetails';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/user/:id" component={UserDetails} />
    </Switch>
  )
}
