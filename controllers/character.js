const db = require('../db/index.js')
const Character = require('../models/characters')

const findAllcharacters = async () => {
    const characters = await Character.find()
    return characters
}

const run = async () => {
    console.log(await findAllcharacters())
    db.close()
}

run()
