// Libs
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

// Components
import ReadDataReduxHook from '../src/components/ReadDataReduxHook'

const ReduxHook = (props) => {

    const [fristName, setFristName] = useState('')
    const [lastName, setLastName] = useState('')

    const dispatch = useDispatch()

    const handleDispath = () => {

        const data = {
            fristName: fristName,
            lastName: lastName
        }

        dispatch({ type: 'ADD_DATA', data: data })
    }

    return (
        <div>
            <div>
                <div className="nes-container with-title">
                    <p className="title">Please input data</p>
                    <div className="nes-field">
                        <label className="name_field">Your Fristname</label>
                        <input type="text" className="nes-input" value={fristName} onChange={(e) => setFristName(e.target.value)} />
                        <label className="name_field">Your Lastname</label>
                        <input type="text" className="nes-input" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </div>
                    <br />
                    <button className="nes-btn is-error is-centered" onClick={handleDispath}>Dispatch</button>
                </div>
                <br />

                <ReadDataReduxHook />

            </div>
        </div>
    )
}

export default ReduxHook