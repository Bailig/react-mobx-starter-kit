// library
import $ from 'jquery'
import React from 'react'
import ReactDOM from 'react-dom'


// component
import Layout from './component/Layout'

// store
import store from './store/store'

const app = document.getElementById('app')
ReactDOM.render(<Layout store={store} />, app)