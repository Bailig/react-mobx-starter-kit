import React from 'react'
import { observer } from 'mobx-react'

import Header from './Header'
import Body from './Body'
import Footer from './Footer'

@observer
export default class Layout extends React.Component{
    render() {
        return (
            <div>
                <Header />
                <Body store={this.props.store}/>
                <Footer />
            </div>
        )
    }
}