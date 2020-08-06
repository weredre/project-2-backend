const mongoose = require('mongoose')
const Schema = mongoose.Schema

const recordSchema = new Schema(
    {
      stats:[
      STR:{type:Number},
      AGL:{type:Number},
      WIL:{type:Number},
      LOG:{type:Number},
      CHA:{type:Number},
      EDG:{type:Number}

    ],
        character:[
          {
            type: Schema.Types.ObjectId,
            ref: 'characters'
          }
        ]
    },
    { timestamps: false } // You'll use timestamps for a lot of things, but they're not needed here.
)

module.exports = mongoose.model('stats', recordSchema)
