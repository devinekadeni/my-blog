import axios from 'axios'
import uploadFileTypes from './uploadFile.types'

export const setUploadFile = data => ({
  type: uploadFileTypes.SET_UPLOAD_FILE,
  payload: data,
})

export const setUploadProgress = (id, progress) => ({
  type: uploadFileTypes.SET_UPLOAD_PROGRESS,
  payload: {
    id,
    progress,
  },
})

export const successUploadFile = id => ({
  type: uploadFileTypes.SUCCESS_UPLOAD_FILE,
  payload: id,
})

export const failureUploadFile = id => ({
  type: uploadFileTypes.FAILURE_UPLOAD_FILE,
  payload: id,
})

export const uploadFile = files => dispatch => {
  if (files.length) {
    files.forEach(async file => {
      const formPayload = new FormData()
      formPayload.append('file', file.file)

      try {
        await axios({
          baseURL: 'http://localhost:5000',
          url: '/file',
          method: 'post',
          data: formPayload,
          cancelToken: file.cancelSource.token,
          onUploadProgress: progress => {
            const { loaded, total } = progress

            const percentageProgress = Math.floor((loaded / total) * 100)
            dispatch(setUploadProgress(file.id, percentageProgress))
          },
        })
        dispatch(successUploadFile(file.id))
      } catch (error) {
        if (axios.isCancel(error)) {
          // Do something when user cancel upload
          console.log('cancelled by user')
        }
        dispatch(failureUploadFile(file.id))
      }
    })
  }
}

export const retryUpload = (id) => (dispatch, getState) => {
  dispatch({
    type: uploadFileTypes.RETRY_UPLOAD_FILE,
    payload: id,
  })

  const { fileProgress } = getState().UploadFile

  const reuploadFile = [fileProgress[id]]
  
  dispatch(uploadFile(reuploadFile))
}
