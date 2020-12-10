// import axios from 'axios'
import { size } from 'lodash'

export const modifyFiles = (existingFiles, files) => {
  let fileToUpload = {}

  for (let i = 0; i < files.length; i++) {
    const id = size(existingFiles) + i + 1
    // const CancelToken = axios.CancelToken  --> can be used for cancelling upload progress
    // const source = CancelToken.source()

    fileToUpload = {
      ...fileToUpload,
      [id]: {
        id,
        file: files[i],
        progress: 0,
        // cancelSource: source,
      },
    }
  }

  return fileToUpload
}
