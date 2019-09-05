



const prop = require('../../properties/properties').prop;
const express = require('express');
const router = express.Router();
var axios = require("axios");

 


/**
 * AXIOS EXAMPLE
   return new Promise(resolve => {
    axios
      .get(
        GLP_Logistica_API + `salida/${p.brnc}/${p.strtDate}/${p.endDate} `
      )
      .then(answer => {
        if (answer.status === 200) {
          res.json(answer.data.body.response)
        } else {
          res.writeHead(answer.status)
          res.end()
        }
      })
      .catch(err => {
        res.writeHead(503)
        res.end()
      });
  });
*/
router.get("/hello", async function (req, res) { 
  res.send("mercado") 
  res.end() 

});
  

function cleanJsonResponse(response) {
  var resp = response;
  resp = resp.substring(resp.indexOf("(") + 1)
  resp = resp.substring(0, resp.length - 1);
  resp = JSON.parse(resp)
  return resp
}
module.exports = router;
