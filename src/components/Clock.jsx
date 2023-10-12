import React, { useState, useEffect } from 'react';
import '../styles/clock.css'

function Clock({ font, fontColor, fontSize, background, showDate, showAMPM, showSeconds }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="clock-container">
        <div className="clock" style={{ fontFamily: font, color: fontColor }}>
            {showSeconds
              ? time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: showAMPM })
              : time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: showAMPM})}
        </div>
    </div>
  );
}

export default Clock;
