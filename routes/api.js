'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      let translatePackage = req.body;
      console.log(translatePackage)

      if (translatePackage.text === "") {
        return res.json({ error: 'No text to translate' });
      }

      if (!translatePackage.locale || !translatePackage.text) {
        return res.json({ error: 'Required field(s) missing' });
      }

      if (translatePackage.locale === "american-to-british") {
        let trans1 = translator.americanToBritish(req.body.text);
        console.log(trans1)
        if (trans1 === translatePackage.text) {
          return res.json({text: req.body.text, translation: "Everything looks good to me!"})
        }
        res.json({text: req.body.text, translation: trans1})
        return;
      } else if (translatePackage.locale === "british-to-american") {
        let trans2 = translator.britishToAmerican(req.body.text);
        console.log(trans2)
        if (trans2 === translatePackage.text) {
          return res.json({text: req.body.text, translation: "Everything looks good to me!"})
        }
        res.json({text: req.body.text, translation: trans2})
        return;
      } else {
        return res.json({ error: 'Invalid value for locale field' })
      }
    });
};
