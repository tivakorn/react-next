// Libs
import React, { Component } from 'react'
import { connect } from 'react-redux'

// Components
import ReadDataRedux from '../src/components/ReadDataRedux'

class Redux extends Component {

    state = {
        fristName: '',
        lastName: ''
    }

    chageFristName = (e) => {
        let value = e.target.value
        this.setState({ fristName: value })
    }

    chageLastName = (e) => {
        let value = e.target.value
        this.setState({ lastName: value })
    }

    handleDispatch = () => {
        const { fristName, lastName } = this.state

        const data = {
            fristName: fristName,
            lastName: lastName
        }
        this.props.onChageName(data)
    }

    render() {
        const { fristName, lastName } = this.state
        console.log(this.props.dataStore)
        return (
            <div>
                <div className="nes-container with-title">
                    <p className="title">Please input data</p>
                    <div className="nes-field">
                        <label className="name_field">Your Fristname</label>
                        <input type="text" className="nes-input" value={fristName} onChange={this.chageFristName} />
                        <label className="name_field">Your Lastname</label>
                        <input type="text" className="nes-input" value={lastName} onChange={this.chageLastName} />
                    </div>
                    <br />
                    <button className="nes-btn is-error is-centered" onClick={this.handleDispatch}>Dispatch</button>
                </div>
                <br />

                <ReadDataRedux />
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

// ส่งค่าไป Store
const mapDispatchToProps = (dispatch) => {
    return {
        onChageName: (data) => {
            dispatch({ type: 'ADD_DATA', data: data })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Redux)

