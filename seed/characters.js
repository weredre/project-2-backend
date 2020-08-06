const db = require('../db')
const Character = require('../models/characters')


const characterSeed = [
  { name: "Coydog", isNPC: false },
  { name: "Gentry", isNPC: false },
  { name: "Hardpoint", isNPC: false },
  { name: "Bug Queen", isNPC: true },
  { name: "Bug Spirt", isNPC: true },
  { name: "Corporate Security", isNPC: true }
]
Character.insertMany(artistSeed,
  (error, response) => {
      if (error) {
          console.log(error);
      } else {
          console.log(response);
      }
      db.close()
