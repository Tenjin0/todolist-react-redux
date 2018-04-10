import * as React from 'react'
import { render } from 'react-dom'
import TodoList from './components/Todo/index'

// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'font-awesome/css/font-awesome.min.css';

render(
    <TodoList />,
    document.getElementById('root') as Element
)

if (process && !process.env.production && module.hot) {
    module.hot.accept()
}
