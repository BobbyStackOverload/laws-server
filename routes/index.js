const express = require('express');
const router = express.Router();
const lawsModel = require('../models/laws');

router.get('/', async function(req, res, next) {
  const resultData = await lawsModel.getAllLaws();
  console.log(resultData);
  res.json(resultData).status(200)
});

module.exports = router;
