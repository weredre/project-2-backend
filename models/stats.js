const mongoose = require('mongoose')
const {Schema, model} = mongoose

const statsSchema = new Schema(
    {
      STR:{type:Number},
      AGL:{type:Number},
      WIL:{type:Number},
      LOG:{type:Number},
      CHA:{type:Number},
      EDG:{type:Number}

    ,
        character:[
          {
            type: Schema.Types.ObjectId,
            ref: 'characters'
          }
        ]
    }
)

module.exports = mongoose.model('stats', statsSchema)
