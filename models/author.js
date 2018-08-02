import mongoose from 'mongoose'
import {v1} from 'node-uuid'

const schema = mongoose.Schema

const authorSchema = new schema({
    id : {type : String, default : v1},
    name : String,
    age : Number,
    books : [String]
})

const authorModel = mongoose.model('author',authorSchema)
export default authorModel