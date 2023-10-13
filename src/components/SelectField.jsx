import React, { useState, useEffect } from 'react'
import '../styles/selectField.css'

function SelectField(props) {

    const [option, setOption] = useState(0)

    useEffect(() => {
        if (props.onChange) {
            props.onChange(props.options[option].value)
        }
    }, [option])

    function increment() {
        if (option < props.options.length - 1) {
            setOption(prev => prev + 1)
        } else {
            setOption(0)
        }
    }

    return (
        <div className="select-field">
            <span className="select-field-label">{props.label}</span>
            <div
                className="select-field-button" onClick={increment} 
                style={ props.type === "font"
                    ? {fontFamily: props.options[option].value}
                    : {color: props.options[option].value} }
            >
                {props.options[option].name}
            </div>
        </div>
    )
}

export default SelectField