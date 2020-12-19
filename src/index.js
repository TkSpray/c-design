import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import './mock/login'
import Login from './pages/login'
import Home from './pages/home'
ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/home" component={Home} />
            <Redirect from="/" to="/login" exact />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
)
