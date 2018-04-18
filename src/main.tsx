import * as React from 'react'
import { render } from 'react-dom'
import TodoList from './components/Todo/index'
import * as constants from './constants/global'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'font-awesome/css/font-awesome.min.css';

render(
    <TodoList />,
    document.getElementById('root') as Element
)

if (process && process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept
    console.log('je passe par la')
}
