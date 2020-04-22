const express = require('express');
const router = express.Router();
const lawsModel = require('../models/laws');

router.get('/state/:state?', async function(req, res, next) {
    const {state} = req.params
  const resultData = await lawsModel.getLawsByTypeId(state);
  console.log(resultData);
  res.json(resultData).status(200)
});

module.exports = router;