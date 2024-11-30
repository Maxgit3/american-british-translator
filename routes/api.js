'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      let translatePackage = req.body;
      console.log(translatePackage)
      if (translatePackage.locale === "american-to-british") {
        let trans1 = translator.americanToBritish(req.body.text);
        console.log(trans1)
        res.json({text: req.body.text, translation: trans1})
        return;
      } else {
        let trans2 = translator.britishToAmerican(req.body.text);
        console.log(trans2)
        res.json({text: req.body.text, translation: trans2})
        return;
      }
    });
};
