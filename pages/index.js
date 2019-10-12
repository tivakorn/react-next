//  Libs
import React, { Component } from 'react'

// Components
import Profile from '../src/components/Profile'

class Index extends Component {
    render() {
        return (
            <div>

                <Profile />

                <div className="nes-container is-dark" style={{
                    marginTop: '30px',
                    marginBottom: '30px',
                    marginLeft: '70px',
                    marginRight: '70px'
                }}>
                    <p>This project is for starting to build a "Web Component" with react and next.</p>
                </div>
            </div>
        )
    }
}

export default Index