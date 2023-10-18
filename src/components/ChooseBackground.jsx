import React, { useState } from 'react'
import '../styles/chooseBackground.css'

function ChooseBackground(props) {

    function toggleClose() {
        props.close(false)
    }

    function handleChooseTheme(newTheme) {
        document.documentElement.setAttribute('data-theme', newTheme)
    }

    return (
        <div className='choose-background-container' style={props.open ? { bottom: 0 } : {}}>
            <div className='choose-background-options'>
                <div className='choose-background-button-container'>
                    <p className='choose-background-button-label'>Light</p>
                    <button className="choose-background-button white" style={{background: "#CBC9BC"}} onClick={() => handleChooseTheme("light")} />
                </div>
                <div className='choose-background-button-container'>
                    <p className='choose-background-button-label'>Dark</p>
                    <button className="choose-background-button black" style={{background: "#0D0D0D"}} onClick={() => handleChooseTheme("dark")} />
                </div>
            </div>
            <button className='choose-background-button' style={{ width: "5rem" }} onClick={toggleClose}>Close</button>
        </div>
    )
}

export default ChooseBackground