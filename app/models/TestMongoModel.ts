import mongoose from "mongoose"
const Schema = mongoose.Schema

const TestMongoSchema = new Schema({
    user: String,
    email:String
},{
    collection: 'test_user'
})

module.exports =  mongoose.model('TestMongoModel', TestMongoSchema)




