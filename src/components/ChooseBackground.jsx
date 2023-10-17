import React, { useState } from 'react'
import '../styles/chooseBackground.css'

function ChooseBackground(props) {

    function toggleClose() {
        props.close(false)
    }

    return (
        <div className='choose-background-container' style={props.open ? { bottom: 0, background: "transparent" } : { background: props.backgroundColor }}>
            <div className='choose-background-options'>
                <button>White</button>
                <button>Black</button>
            </div>
            <button onClick={toggleClose}>Close</button>
        </ div >
    )
}

export default ChooseBackground