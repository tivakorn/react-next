// Libs
import React from 'react'
import { useSelector } from 'react-redux'

const ReactDataReduxHook = (props) => {

    const renderList = () => {

        const state = useSelector(state => state.dataStore)

        return state.map((item, key) => {
            return (
                <React.Fragment key={key}>
                    <li>{key + 1}) My name is {item.fristName} {item.lastName}</li>
                </React.Fragment>
            )
        })
    }

    return (
        <div className="nes-container with-title">
            <p className="title">List member</p>
            <ul className="nes-list is-disc">
                {renderList()}
            </ul>
        </div>
    )

}

export default ReactDataReduxHook