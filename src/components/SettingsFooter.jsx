import React from 'react'
import ToggleSwitch from './ToggleSwitch'
import '../styles/settingsFooter.css'

function SettingsFooter(props) {

    function handleShowAMPMToggle() {
        props.setShowAMPM(!props.showAMPM)
    }

    function handleShowSecondsToggle() {
        props.setShowSeconds(!props.showSeconds)
    }

    function handleShowDateToggle() {
        props.setShowDate(!props.showDate)
    }

  return (
    <div className="settings-footer">
        <ToggleSwitch label={"AM/PM"} onChange={handleShowAMPMToggle} checked={props.showAMPM} width={"5rem"} height={"2rem"}/>
        <ToggleSwitch label={"Seconds"} onChange={handleShowSecondsToggle} checked={props.showSeconds} width={"5.5rem"} height={"2rem"}/>
        <ToggleSwitch label={"Date"} onChange={handleShowDateToggle} checked={props.showDate} width={"5rem"} height={"2rem"}/>
    </div>
  )
}

export default SettingsFooter