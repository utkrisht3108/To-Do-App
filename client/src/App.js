import React, { useState } from 'react';

function App() {
  setInterval(updateTime, 500);

  const now = new Date().toLocaleTimeString();
  const [time, setTime] = useState(now);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }
  return (
    <div>
      <h1>HIIIII THIS IS UT</h1>
      <div className="container">
        <h1>{time}</h1>
        <button onClick={updateTime}>Get Time</button>
      </div>
    </div>
  );
}

export default App;
