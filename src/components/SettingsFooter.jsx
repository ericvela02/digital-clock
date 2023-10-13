import React, { useState } from 'react'
import ToggleSwitch from './ToggleSwitch'
import SelectField from './SelectField'
import TripleSelectButton from './TripleSelectButton'
import '../styles/settingsFooter.css'

function SettingsFooter(props) {

    const devMode = true // REMOVE IN FINAL

    function handleShowAMPMToggle() {
        props.setShowAMPM(!props.showAMPM)
    }

    function handleShowSecondsToggle() {
        props.setShowSeconds(!props.showSeconds)
    }

    function handleShowDateToggle() {
        props.setShowDate(!props.showDate)
    }

    const fontOptions = [
        {name: "Space Mono", value: "Space Mono, monospace"},
        {name: "Roboto Mono", value: "Roboto Mono, monospace"},
        {name: "IBM Plex Mono", value: "IBM Plex Mono, monospace"},
        {name: "Fira Mono", value: "Fira Mono, monospace"},
    ]

    const colorOptions = [
        {name: "White", value: "white"},
        {name: "Black", value: "black"},
        {name: "Red", value: "red"},
        {name: "Orange", value: "orange"},
        {name: "Yellow", value: "yellow"},
        {name: "Green", value: "green"},
        {name: "Blue", value: "blue"},
        {name: "Purple", value: "purple"},
        {name: "Pink", value: "pink"},
    ]

  return (
    <div className="settings-footer">
        <div className="settings-container" style={ devMode ? {bottom: "0"} : {} }>
            <div className="selects">
                <SelectField 
                    label={"Font"}
                    options={fontOptions}
                    type={"font"}
                />
                <TripleSelectButton />
                <SelectField 
                    label={"Font Color"}
                    options={colorOptions}
                    type={"color"}
                />
            </div>
            <div className="toggles">
                <ToggleSwitch label={"AM/PM"} onChange={handleShowAMPMToggle} checked={props.showAMPM} width={"5rem"} height={"2rem"}/>
                <ToggleSwitch label={"Seconds"} onChange={handleShowSecondsToggle} checked={props.showSeconds} width={"5.5rem"} height={"2rem"}/>
                <ToggleSwitch label={"Date"} onChange={handleShowDateToggle} checked={props.showDate} width={"5rem"} height={"2rem"}/>
            </div>
            <div className="background-button-container">
                <button className="background-button">Background</button>
            </div>
        </div>
    </div>
  )
}

export default SettingsFooter