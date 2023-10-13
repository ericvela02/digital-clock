import React, { useState } from 'react'
import '../styles/chooseBackground.css'

function ChooseBackground(props) {

    return (
        <div className="choose-background" style={ props.active ? {top: 0} : {}}>
            <div className="background-color-options">
                <div className="color-option" style={{backgroundColor: "#CBC9BC"}}>{""}</div>
                <div className="color-option" style={{backgroundColor: "#0D0D0D"}}>{""}</div>
            </div>
            <div className="close-choose-background" onClick={props.close}>Close</div>
        </div>
    )
}

export default ChooseBackground