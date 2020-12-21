import axios from 'axios'
import { size } from 'lodash'
import { STATUS_UPLOAD } from '../../constants'

export const modifyFiles = (existingFiles, files) => {
  let fileToUpload = {}

  for (let i = 0; i < files.length; i++) {
    const id = size(existingFiles) + i + 1
    const CancelToken = axios.CancelToken
    const source = CancelToken.source()

    fileToUpload = {
      ...fileToUpload,
      [id]: {
        id,
        file: files[i],
        progress: 0,
        cancelSource: source,
        status: STATUS_UPLOAD.uploading,
      },
    }
  }

  return fileToUpload
}
