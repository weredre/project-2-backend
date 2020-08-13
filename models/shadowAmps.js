const mongoose = require('mongoose')
const {Schema, model} = mongoose

const shadowAmpsSchema = new Schema(
    {
      name:{type:String},
      damage:{type:Number},
    }
)
module.exports = mongoose.model('shadowAmps', shadowAmpsSchema)
