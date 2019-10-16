import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ReactDataHomework from '../src/components/ReadDataHomework'

const HomeWork = (props) => {

    const [fristName, setFristName] = useState('')
    const [lastName, setLastName] = useState('')

    const show = useSelector(state => state.showReducer)

    const dispatch = useDispatch()

    const handleDispath = () => {

        const data = {
            fristName: fristName,
            lastName: lastName
        }

        dispatch({ type: 'ADD_DATA', data: data })
        dispatch({ type: 'SHOW', show: true })
    }

    const dispatchDontShow = () => {
        dispatch({ type: 'SHOW', show: false })
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
                    <button className="nes-btn is-error is-centered" onClick={dispatchDontShow}>Don't Show</button>
                </div>
                <br />

                <div className="nes-container with-title">
                    <p className="title">List member</p>
                    <ul className="nes-list is-disc">
                        {show === true ? <ReactDataHomework /> : ''}
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default HomeWork