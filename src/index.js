import React, { useReducer } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Login from './pages/login'
import Home from './pages/home'
//mock数据
// import './mock'

export const UserContext = React.createContext({})

const App = props => {
    const reducer = (state, action) => {
        switch (action.type) {
            case 'SUCCESS':
                return action.data
            case 'RELOAD':
                return action.data
            default:
                break
        }
        return state
    }

    const [userState, dispatch] = useReducer(
        reducer,
        JSON.parse(sessionStorage.getItem('user')) ?? { uid: '', name: '', role: false }
    )

    window.addEventListener('beforeunload', () => {
        sessionStorage.setItem('user', JSON.stringify(userState))
    })
    return (
        <BrowserRouter>
            <UserContext.Provider value={{ userState, stateDispatch: dispatch }}>
                <Switch>
                    <Route path="/login" exact component={Login} />
                    <Route path="/home" component={Home} />
                    <Redirect from="/" to="/login" exact />
                </Switch>
            </UserContext.Provider>
        </BrowserRouter>
    )
}
ReactDOM.render(<App />, document.getElementById('root'))
