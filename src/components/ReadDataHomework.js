import React from 'react'
import { useSelector } from 'react-redux'

const ReactDataHomework = (props) => {

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
        <React.Fragment>
            {renderList()}
        </React.Fragment>
    )

}

export default ReactDataHomework