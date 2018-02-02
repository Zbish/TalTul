import ImagePicker from 'react-native-image-picker'

// image picker options
const options = {
    title: 'Select',
    customButtons: [
    ],
    storageOptions: {
      skipBackup: true,
      path: 'images'
    }
  };

export const addImage = function () {
    return new Promise((resolve, reject)=>{
      ImagePicker.showImagePicker(options, (response) => {
        if (response.didCancel) {
          resolve()
        }
        else if (response.error) {
          resolve()
        }
        else {
          resolve(response)
              }
      })
    })
  }