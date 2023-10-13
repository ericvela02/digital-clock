import React, { useState } from 'react'
import ToggleSwitch from './ToggleSwitch'
import SelectField from './SelectField'
import TripleSelectButton from './TripleSelectButton'
import ChooseBackground from './ChooseBackground'
import '../styles/settingsFooter.css'

function SettingsFooter(props) {

    const devMode = 1 // REMOVE IN FINAL

    const [showBackgroundSettings, setShowBackgroundSettings] = useState(false)

    function handleShowAMPMToggle() {
        props.setShowAMPM(!props.showAMPM)
    }

    function handleShowSecondsToggle() {
        props.setShowSeconds(!props.showSeconds)
    }

    function handleShowDateToggle() {
        props.setShowDate(!props.showDate)
    }

    function handleChangeFont(font) {
        props.setFont(font)
    }

    function handleChangeFontColor(color) {
        props.setFontColor(color)
    }

    function handleChangeFontSize(size) {
        props.setFontSize(size)
    }

    function handleToggleBackgroundSettings() {
       setShowBackgroundSettings(!showBackgroundSettings)
    }

    const fontOptions = [
        {name: "Space Mono", value: "Space Mono, monospace"},
        {name: "Roboto Mono", value: "Roboto Mono, monospace"},
        {name: "IBM Plex Mono", value: "IBM Plex Mono, monospace"},
        {name: "Ubuntu Mono", value: "Ubuntu Mono, monospace"},
        {name: "Major Mono", value: "Major Mono Display, monospace"},
        {name: "Sono", value: "Sono, monospace"},
    ]

    const colorOptions = [
        {name: "White", value: "#E9E9E9"},
        {name: "Black", value: "#292929"},
        {name: "Red", value: "#D63D3D"},
        {name: "Orange", value: "#DE7B42"},
        {name: "Yellow", value: "#ECDF6D"},
        {name: "Green", value: "#6CC26A"},
        {name: "Cyan", value: "#6AE0E8"},
        {name: "Blue", value: "#3D59ED"},
        {name: "Magenta", value: "#7145B8"},
    ]

  return (
    <div className="settings-footer">
        <div className="settings-container" style={ devMode ? {bottom: "0"} : {} }>
            <div className="selects">
                <SelectField 
                    label={"Font"}
                    options={fontOptions}
                    type={"font"}
                    onChange={handleChangeFont}
                />
                <TripleSelectButton onChange={handleChangeFontSize}/>
                <SelectField 
                    label={"Font Color"}
                    options={colorOptions}
                    type={"color"}
                    onChange={handleChangeFontColor}
                />
            </div>
            <div className="toggles">
                <ToggleSwitch label={"AM/PM"} onChange={handleShowAMPMToggle} checked={props.showAMPM} width={"5rem"} height={"2rem"}/>
                <ToggleSwitch label={"Seconds"} onChange={handleShowSecondsToggle} checked={props.showSeconds} width={"5.5rem"} height={"2rem"}/>
                <ToggleSwitch label={"Date"} onChange={handleShowDateToggle} checked={props.showDate} width={"5rem"} height={"2rem"}/>
            </div>
            <div className="background-button-container">
                <button
                    className="background-button"
                    onClick={handleToggleBackgroundSettings}
                >
                    Background
                </button>
            </div>
            <ChooseBackground
                active={showBackgroundSettings}
                close={handleToggleBackgroundSettings}
            />
        </div>
    </div>
  )
}

export default SettingsFooter