const express = require('express');
const router = express.Router();
const lawsModel = require('../models/laws');
router.get('/', async function (req, res, next) {
  const s = await lawsModel.getAllLaws();
  console.log(lawsData);
  res.json(s).status(200);
});
router.get('/types/:type_of_law_id?', async function (req, res, next) {
  const { type_of_law_id } = req.params;
  const resultData = await lawsModel.getLawsByTypeId(type_of_law_id);
  console.log(resultData);
  res.json(resultData).status(200);
});
router.get('/types', async function (req, res, next) {
    const lawsData = await lawsModel.getLawTypes();
    console.log(lawsData);
    res.json(lawsData).status(200);
});
module.exports = router;

