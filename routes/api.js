'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      let translatePackage = req.body;
      console.log(translatePackage)
      if (translatePackage.locale === "american-to-british") {
        let trans = translator.americanToBritish(req.body.text);
        res.json({text: req.body.text, translation: trans})
      } else {
        let trans = translator.britishToAmerican(req.body.text);
        res.json({text: req.body.text, translation: trans})
      }
    });
};
