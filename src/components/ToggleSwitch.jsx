import React from 'react'
import '../styles/toggleSwitch.css'

function ToggleSwitch(props) {
    return (
        <div className="toggle-switch">
            <input type="checkbox" checked={props.checked} onChange={props.onChange} />
            <div className="label-container">
                <label>{props.label}</label>
            </div>
        </div>
    )
}

export default ToggleSwitch