const db = require('../db/index.js')
const Character = require('../models/characters')
const Stats = require('../models/stats')

const index = async (req, res) => {
    try{
        const findAllcharacters = await Character.find({});
        res.status(200).json(allPizza)
        }
        catch(error) {
        res.status(400).send(error)
    }
  };
//
// const run = async () => {
//     console.log(await findAllcharacters())
//     db.close()
// }
//
// run()
module.exports = {
    index
    // create,
    // update,
    // destroy
}
