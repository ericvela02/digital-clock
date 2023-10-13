import React, { useState } from 'react'
import Clock from './components/Clock'
import SettingsFooter from './components/SettingsFooter'
import './App.css'

function App() {

  const [font, setFont] = useState("Space Mono, monospace")
  const [fontColor, setFontColor] = useState("white")
  const [fontSize, setFontSize] = useState(10)
  const [backgroundColor, setBackgroundColor] = useState("#0D0D0D")
  const [backgroundImage, setBackgroundImage] = useState("")
  const [background, setBackground] = useState("color")
  const [showDate, setShowDate] = useState(false)
  const [showAMPM, setShowAMPM] = useState(true)
  const [showSeconds, setShowSeconds] = useState(true)

  return (
    <>
      <div className="background" style={{ background: background }}>
        {background === "color"
          ? <div className="background-color" style={{ backgroundColor: backgroundColor }}></div>
          : <img className="background-image" src={backgroundImage} alt="background" />
        }
      </div>
      <Clock
        font={font}
        fontColor={fontColor}
        fontSize={fontSize}
        showDate={showDate}
        showAMPM={showAMPM}
        showSeconds={showSeconds}
      />
      <SettingsFooter
        font={font} 
        setFont={setFont} 
        fontColor={fontColor} 
        setFontColor={setFontColor} 
        fontSize={fontSize} 
        setFontSize={setFontSize} 
        background={background} 
        setBackground={setBackground} 
        showDate={showDate} 
        setShowDate={setShowDate} 
        showAMPM={showAMPM} 
        setShowAMPM={setShowAMPM} 
        showSeconds={showSeconds} 
        setShowSeconds={setShowSeconds}
      />
    </>
  )
}

export default App
