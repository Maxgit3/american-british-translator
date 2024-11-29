const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {
    americanToBritish(phrase) {
        const arrPhrase = phrase.split(" ");
        let britishPhrase = [];

        if (arrPhrase[arrPhrase.length - 1].includes(".")) {
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
        
        
        return britishPhrase.join(" ");
    }
    britishToAmerican(phrase) {
        const arrPhrase = phrase.split(" ");
        let americanPhrase = [];

        arrPhrase.forEach((word, idx) => {
            americanPhrase[idx] = Object.keys(americanToBritishSpelling).find((key) => {
                if (americanToBritishSpelling[key] === word) {
                    return americanToBritishSpelling[key] === word
                }             
            })

            if (americanPhrase[idx] === undefined) {
                americanPhrase[idx] = word;
            }
        })

        return americanPhrase.join(" ");
    }
}

module.exports = Translator;