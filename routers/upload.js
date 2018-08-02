import express from 'express'
import multer from 'multer'
import { uploadFileStream } from '../services/uploadFile';
const routerUpload = express.Router()
//setup multer
const inMemoryStorage = multer.memoryStorage()
const uploadStrategy = multer({ storage: inMemoryStorage }).single('image')
routerUpload.post('/upload/image',uploadStrategy,(req,res)=>{
    uploadFileStream(req.file)
        .then(r=>{
            console.log(r)
        }).catch(err=>{
            console.log(err)
        })
        res.send('Ok')
})

export default routerUpload