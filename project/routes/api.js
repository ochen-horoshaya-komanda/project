const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/best', (req, res) => {
  res.send([
  	 {name: "Dali", time: "2019-11-01"},
  	 {name: "Banksy", time: "2019-11-02"},
  	 {name: "Da Vinchi", time: "2019-11-03"}]);
});

module.exports = router;
