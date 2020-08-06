const db = require('../db')
const Character = require('../models/characters')
const Stats = require('../models/stats')

const statsSeed = [
  {
    stats:
    [STR:2, AGL:4, WIL:6,LOG:4,CHA:7,EDG:1]
  ,character:"Coydog"},
  {
    stats:
    [STR:4, AGL:6, WIL:3,LOG:6,CHA:2,EDG:2],character:"Gentry"},
  {
    stats:
    [STR:5, AGL:6, WIL:3,LOG:6,CHA:3,EDG:1], character:"Hardpoint"}
  },
  { stats:
    [STR:9, AGL:5, WIL:6,LOG:4,CHA:2,EDG:4]
  ,character:"Bug Queen"} },
  { stats:
    [STR:7, AGL:4, WIL:3,LOG:1,CHA:1,EDG:1]
  , character:"Bug Spirt"} },
  {stats:
    [STR:4, AGL:4, WIL:3,LOG:3,CHA:2,EDG:2]
  , character:"Corporate Security"} }
]
const addStats = async () => {

  await Promise.all(statsSeed.map(async statsToAdd => {

        // find artist document with matching name
        let artist = await Character.findOne({name: recordToAdd.artist})

        // update object with artist ID
        recordToAdd.artist = artist._id

        // create record
        const stats = await Stats.create(statsToAdd)
        console.log(stats)

        await character.records.push(record._id)
        await character.save()
        console.log(character)
    }))

  db.close()

}

// invoke the async function
addStats()
