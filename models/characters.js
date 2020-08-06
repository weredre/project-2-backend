const mongoose = require('mongoose');
const {Schema, model} = mongoose

const charactersSchema = new Schema (
    {
    name:{type:String},
    isNPC:{type:Boolean},
    stats: [
      {
        type: Schema.Types.ObjectId,
        ref: 'stats'
      }
    ]
    });

const character = model('characters', charactersSchema)

module.exports = character
