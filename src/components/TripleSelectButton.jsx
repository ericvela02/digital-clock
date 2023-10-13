import React, { useState } from 'react'
import '../styles/tripleSelectButton.css'

function TripleSelectButton(props) {

    const [option, setOption] = useState(0)

    function handleChangeOption(index) {
        setOption(index)
    }

    return (
        <div className="triple-select-button-container">
            <span className="select-field-label">Font Size</span>
            <div className="triple-select-button">
                <div
                    className={"triple-select-button-option small" + (option === 0 ? " selected" : "")}
                    onClick={() => handleChangeOption(0)}
                >
                    Small
                </div>
                <div
                    className={"triple-select-button-option med" + (option === 1 ? " selected" : "")}
                    onClick={() => handleChangeOption(1)}
                >
                    Med
                </div>
                <div
                    className={"triple-select-button-option big" + (option === 2 ? " selected" : "")}
                    onClick={() => handleChangeOption(2)}
                >
                    Big
                </div>
            </div>
        </div>
    )
}

export default TripleSelectButton