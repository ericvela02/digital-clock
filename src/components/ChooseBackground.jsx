import React, { useState } from 'react'
import '../styles/chooseBackground.css'

function ChooseBackground(props) {

    function toggleClose() {
        props.close(false)
    }

    function handlePickColor(color) {
        props.setBackgroundColor(color)
        console.log(color)
    }

    return (
        <div className='choose-background-container' style={props.open ? { bottom: 0, background: props.backgroundColor } : { background: props.backgroundColor }}>
            <div className='choose-background-options'>
                <button className="choose-background-button white" style={{background: "#CBC9BC", transition: "all 0.3s ease-in-out"}} onClick={() => handlePickColor("#CBC9BC")}/>
                <button className="choose-background-button black" style={{background: "#0D0D0D", transition: "all 0.3s ease-in-out"}} onClick={() => handlePickColor("#0D0D0D")}/>
            </div>
            <button className='choose-background-button' style={{ width: "5rem" }} onClick={toggleClose}>Close</button>
        </div>
    )
}

export default ChooseBackground