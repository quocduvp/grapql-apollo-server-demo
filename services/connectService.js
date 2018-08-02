import azure from 'azure-storage'
import { accountName, accessKey, containername } from './keyStorage';

export let blobService = azure.createBlobService(accountName, accessKey);

//create container
export const createContainer = blobService.createContainerIfNotExists(containername,{
    publicAccessLevel: 'blob'
  }, function(error, result, response) {
    if (!error) {
      if(result) console.log('container was created') 
      else console.log('container already existed.')  
    }
})
