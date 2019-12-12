import React, { useRef } from 'react'

import logo from './logo.svg'
import './App.css'

function App(props) {
  const inputEl = useRef(null)

  const handleAttachFIle = e => {
    // could do some validation for the attached file here
  }

  const handleButtonClick = () => inputEl.current.click()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={handleButtonClick}>Upload File</button>
        <input
          style={{ display: 'none' }}
          ref={inputEl}
          type="file"
          multiple
          onChange={handleAttachFIle}
        />
      </header>
    </div>
  )
}

export default App
