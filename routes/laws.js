const express = require('express');
const router = express.Router();
const lawsModel = require('../models/laws');

router.get('/', async function (req, res, next) {
  const s = await lawsModel.getAllLaws();
  res.json(s).status(200);
});

router.get('/:statesId?', async function (req, res, next) {
    const { statesId } = req.params
    const lawsData = await lawsModel.getLawTypes(statesId);
    res.json(lawsData).status(200);
});


module.exports = router;