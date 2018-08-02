import { blobService } from "./connectService";
import path from 'path'
import getStream from 'into-stream'
import { containername } from "./keyStorage";

//upload file
export const uploadFileLocal = (stringPath) => {
    const sourceFilePath = path.resolve(stringPath);
    const blobName = path.basename(sourceFilePath, path.extname(sourceFilePath));
    return new Promise((resolve,reject)=>{
        blobService.createBlockBlobFromLocalFile(containername, blobName, sourceFilePath, err => {
            if(err) {
                reject(err);
            } else {
                resolve({ message: `Upload of '${blobName}' complete` });
            }
        });
    })
}

//upload file stream
const getBlobName = originalName => {
    const identifier = Math.random().toString().replace(/0\./, ''); // remove "0." from start of string
    return `${originalName}-${identifier}.jpg`;
};
export const uploadFileStream = (file) => {
    const blobName = getBlobName(file.originalname)
    const stream = getStream(file.buffer)
    const streamLength = file.buffer.length;
    return new Promise((resolve,reject)=>{
        blobService.createBlockBlobFromStream(containername, blobName, stream, streamLength, err => {
            if(err) {
                reject(err);
            } else {
                resolve({ message: `Upload of '${blobName}' complete` });
            }
        });
    })
}
