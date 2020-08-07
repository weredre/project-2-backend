const db = require('../db/index.js')
const Stats = require('../models/stats.js')
const characters = require('../models/characters.js')

const index = async (req, res) => {
    try{
        const findAllStats = await Stats.find({});
        res.status(200).json(findAllStats)
        }
        catch(error) {
        res.status(400).send(error)
    }
  };
  //CREATE - MAKES A NEW pizza
  const create = async (req, res) => {
      try{
          console.log(req.body)
          const newStats = await Stats.create(req.body)
          console.log(newStats)
          res.status(200).json(newStats)
      }
      catch(error){
          restart.status(400).send(error)
      }
  };

  //update - updates a pizza
  const update = async (req, res) => {
      try{
          const updatedStats = await Stats.findByIdAndUpdate(req.params.id, req.body, {new: true})
          res.status(200).json(updatedStats)
      }
      catch(error){
          res.status(400).send(error)
      }
  };

  //destroy - deletes a pizza
  const destroy = async (req, res) => {
      try{
          const deletedStats = await Stats.findByIdAndDelete(req.params.id);
          res.status(200).json(deletedStats);
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
