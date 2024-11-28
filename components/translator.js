const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {
    americanToBritish(phrase) {
        const arrPhrase = phrase.split(" ");
        let britishPhrase = [];

        if (arrPhrase[arrPhrase.length - 1].indexOf(".")) {
            let idx = arrPhrase[arrPhrase.length - 1].indexOf(".")
            arrPhrase[arrPhrase.length - 1] = arrPhrase[arrPhrase.length -1].slice(0, idx)
        }
        arrPhrase.forEach((word, idx) => {

            if(americanToBritishSpelling[word]) {
                britishPhrase[idx] = americanToBritishSpelling[word];
            } else {
                britishPhrase[idx] = word;
            }
            
        })
        
        
        return britishPhrase;
    }
    britishToAmerican(phrase) {

    }
}

module.exports = Translator;