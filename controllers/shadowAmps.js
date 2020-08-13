const db = require('../db/index.js')
const shadowAmps = require('../models/shadowAmps.js')

const index = async (req, res) => {
    try{
        const findAllShadowAmps = await shadowAmps.find({});
        res.status(200).json(findAllShadowAmps)
        }
        catch(error) {
        res.status(400).send(error)
    }
  };
  //CREATE - MAKES A NEW pizza
  const create = async (req, res) => {
      try{
          console.log(req.body)
          const newShadowAmps = await shadowAmps.create(req.body)
          console.log(newShadowAmps)
          res.status(200).json(newShadowAmps)
      }
      catch(error){
          restart.status(400).send(error)
      }
  };

  //update - updates a pizza
  const update = async (req, res) => {
      try{
          const updatedShadowAmps = await shadowAmps.findByIdAndUpdate(req.params.id, req.body, {new: true})
          res.status(200).json(updatedShadowAmps)
      }
      catch(error){
          res.status(400).send(error)
      }
  };

  //destroy - deletes a pizza
  const destroy = async (req, res) => {
      try{
          const deletedShadowAmps = await shadowAmps.findByIdAndDelete(req.params.id);
          res.status(200).json(deletedShadowAmps);
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
