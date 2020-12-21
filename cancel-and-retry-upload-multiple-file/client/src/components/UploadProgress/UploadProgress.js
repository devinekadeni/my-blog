import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { size, toArray } from 'lodash'

import { uploadFile, retryUpload } from '../../redux/uploadFile/uploadFile.actions'
import UploadItem from '../UploadItem/UploadItem'
import Styles from './UploadProgress.module.css'

const UploadProgress = props => {
  const { fileProgress, uploadFile, retryUpload } = props
  const uploadedFileAmount = size(fileProgress)

  useEffect(() => {
    const fileToUpload = toArray(fileProgress).filter(file => file.progress === 0)
    uploadFile(fileToUpload)
  }, [uploadedFileAmount])

  return uploadedFileAmount > 0 ? (
    <div className={Styles.wrapper}>
      <h4>Uploading File</h4>
      {size(fileProgress)
        ? toArray(fileProgress)
          .map(file => (
            <UploadItem
              key={file.id}
              file={file}
              retryUpload={() => retryUpload(file.id)}
            />
          ))
        : null}
    </div>
  ) : null
}

const mapStateToProps = state => ({
  fileProgress: state.UploadFile.fileProgress,
})

const mapDispatchToProps = dispatch => ({
  uploadFile: files => dispatch(uploadFile(files)),
  retryUpload: id => dispatch(retryUpload(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(UploadProgress)
