import React from 'react'
import Styles from './UploadItem.module.css'

const UploadItem = props => {
  const { file, progress } = props.file

  return (
    <div className={Styles.wrapperItem}>
      <div className={Styles.leftSide}>
        <div className={Styles.progressBar}>
          <div style={{ width: `${progress}%` }} />
        </div>
        <label>{file.name}</label>
      </div>
      <span className={Styles.percentage}>{progress}%</span>
    </div>
  )
}

export default UploadItem
