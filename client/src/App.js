import React, { useRef } from 'react'
import { connect } from 'react-redux'

import { setUploadFile } from './redux/uploadFile/uploadFile.actions'

import UploadProgress from './components/UploadProgress/UploadProgress'
import logo from './logo.svg'
import './App.css'

function App(props) {
  const inputEl = useRef(null)

  const handleAttachFIle = e => {
    // could do some validation for the attached file here
    props.setUploadFile(e.target.files)
    e.target.value = '' // to clear the current file
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
      <UploadProgress />
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  setUploadFile: files => dispatch(setUploadFile(files)),
})

export default connect(null, mapDispatchToProps)(App)
