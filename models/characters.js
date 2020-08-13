const mongoose = require('mongoose');
const {Schema, model} = mongoose

const charactersSchema = new Schema (
    {
    name:{type:String},
    isNPC:{type:Boolean},
    STR:{type:Number},
    AGL:{type:Number},
    WIL:{type:Number},
    LOG:{type:Number},
    CHA:{type:Number},
    EDG:{type:Number},
    shadowAmps:String
    });

const character = model('characters', charactersSchema)

module.exports = character
