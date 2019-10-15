// Libs
import React, { Component } from 'react'
import { connect } from 'react-redux'

class ReadDataRedux extends Component {

    renderList = () => {
        const { dataStore } = this.props
        return dataStore.map((item, key) => {
            return (
                <React.Fragment key={key}>
                    <li>{key + 1}) My name is {item.fristName} {item.lastName}</li>
                </React.Fragment>
            )
        })
    }

    render() {
        return (
            <div className="nes-container with-title">
                <p className="title">List member</p>
                <ul className="nes-list is-disc">
                    {this.renderList()}
                </ul>
            </div>
        )
    }
}

// รับค่าจาก Store
const mapStateToProps = (state) => {
    return {
        dataStore: state.dataStore
    }
}

export default connect(mapStateToProps)(ReadDataRedux)