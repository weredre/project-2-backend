const db = require('../db')
const Character = require('../models/characters.js')
const shadowAmps = require('../models/shadowAmps.js')



const characterSeed = [
  { name: "Coydog", isNPC: false, STR:2,AGL:4,WIL:6,LOG:4,CHA:7,EDG:1},
  { name: "Gentry", isNPC: false,STR:4, AGL:6, WIL:3,LOG:6,CHA:2,EDG:2},
  { name: "Hardpoint", isNPC: false,STR:5, AGL:6, WIL:3,LOG:6,CHA:3,EDG:1},
  { name: "Bug Queen", isNPC: true,STR:9, AGL:5, WIL:6,LOG:4,CHA:2,EDG:4},
  { name: "Bug Spirt", isNPC: true,STR:7, AGL:4, WIL:3,LOG:1,CHA:1,EDG:1},
  { name: "Corporate Security", isNPC: true,STR:4, AGL:4, WIL:3,LOG:3,CHA:2,EDG:2}
]
Character.insertMany(characterSeed,
  (error, response) => {
      if (error) {
          console.log(error);
      } else {
          console.log(response);
      }
      db.close()
    })
module.exports = Character
