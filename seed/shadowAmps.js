const db = require('../db')
const shadowAmps = require('../models/shadowAmps.js')

const shadowAmpsSeed = [
  {name: "Lightening Bolt",damage:6},
  {name:"Acid Spit", damage:7}
]
shadowAmps.insertMany(shadowAmpsSeed,
  (error, response) => {
      if (error) {
          console.log(error);
      } else {
          console.log(response);
      }
      db.close()
    })

module.exports = shadowAmps
