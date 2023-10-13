import React, {  useState } from 'react'
import '../styles/toggleSwitch.css'

function ToggleSwitch(props) {

    const [checked, setChecked] = useState(props.checked)

    function handleClick() {
        setChecked(prev => !prev)
        if (props.onChange) {
            props.onChange(!checked)
        }
    }
    return (
        <div className="toggle-switch" onClick={handleClick} >
            <input type="checkbox" checked={checked} readOnly />
            <div className="label-container" style={{ width: props.width, height: props.height }}>
                <label className='label'>{props.label}</label>
            </div>
        </div>
    )
}

export default ToggleSwitch