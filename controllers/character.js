const db = require('../db/index.js')
const characters = require('../models/characters.js')
const Stats = require('../models/stats.js')

const index = async (req, res) => {
    try{
        const findAllcharacters = await characters.find({});
        res.status(200).json(findAllcharacters)
        }
        catch(error) {
        res.status(400).send(error)
    }
  };
  //CREATE - MAKES A NEW pizza
  const create = async (req, res) => {
      try{
          console.log(req.body)
          const newCharacter = await characters.create(req.body)
          console.log(newCharacter)
          res.status(200).json(newCharacter)
      }
      catch(error){
          restart.status(400).send(error)
      }
  };

  //update - updates a pizza
  const update = async (req, res) => {
      try{
          const updatedCharacter = await characters.findByIdAndUpdate(req.params.id, req.body, {new: true})
          res.status(200).json(updatedCharacter)
      }
      catch(error){
          res.status(400).send(error)
      }
  };

  //destroy - deletes a pizza
  const destroy = async (req, res) => {
      try{
          const deletedCharacter = await characters.findByIdAndDelete(req.params.id);
          res.status(200).json(deletedCharacter);
      } catch(error) {
          res.status(400).send(error);
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
    index,
    create,
    update,
    destroy
}
