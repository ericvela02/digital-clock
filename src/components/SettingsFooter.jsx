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

    function toggleSwitch() {
        return 
    }

  return (
    <div className="settings-footer">
        <ToggleSwitch label={"AM/PM"} onChange={handleShowAMPMToggle} checked={props.showAMPM}/>
    </div>
  )
}

export default SettingsFooter