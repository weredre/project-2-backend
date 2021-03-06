const db = require('../db')
const Character = require('../models/characters.js')
const Stats = require('../models/stats.js')

const statsSeed = [
  {

    STR:2, AGL:4, WIL:6,LOG:4,CHA:7,EDG:1
  ,character:"Coydog"},
  {

    STR:4, AGL:6, WIL:3,LOG:6,CHA:2,EDG:2,character:"Gentry"},
  {
    STR:5, AGL:6, WIL:3,LOG:6,CHA:3,EDG:1, character:"Hardpoint"
  },
  {

    STR:9, AGL:5, WIL:6,LOG:4,CHA:2,EDG:4
  ,character:"Bug Queen"},
  {

    STR:7, AGL:4, WIL:3,LOG:1,CHA:1,EDG:1
  , character:"Bug Spirt"},
  {

    STR:4, AGL:4, WIL:3,LOG:3,CHA:2,EDG:2
  , character:"Corporate Security"}
]
const addStats = async () => {

  await Promise.all(statsSeed.map(async statsToAdd => {

        // find artist document with matching name
        let character = await Character.findOne({name: statsToAdd.character})

        // update object with artist ID
        statsToAdd.character = character._id

        // create record
        const stats = await Stats.create(statsToAdd)
        console.log(stats)

        await character.records.push(stats._id)
        await character.save()
        console.log(character)
    }))

  db.close()

}
module.exports = Stats

// invoke the async function
addStats()
