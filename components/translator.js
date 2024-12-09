const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {
    americanToBritish(phrase) {
        const arrPhrase = phrase.split(" ");
        let britishPhrase = [];
        let endpart;

        if (arrPhrase[arrPhrase.length - 1].includes(".")) {
            endpart = "."
            let idx = arrPhrase[arrPhrase.length - 1].lastIndexOf(".")
            arrPhrase[arrPhrase.length - 1] = arrPhrase[arrPhrase.length -1].slice(0, idx)
        }

        if (arrPhrase[arrPhrase.length - 1].includes("?")) {
            endpart = "?"
            let idx = arrPhrase[arrPhrase.length - 1].lastIndexOf("?")
            arrPhrase[arrPhrase.length - 1] = arrPhrase[arrPhrase.length -1].slice(0, idx)
        }

        arrPhrase.forEach((word, idx) => {
            
            if(americanToBritishSpelling[word]) {
                let brWord = americanToBritishSpelling[word]
                console.log(brWord)
                britishPhrase[idx] = `<span class="highlight">${brWord}</span>`;
            } else {
                britishPhrase[idx] = word;
            }
            
        })

        // check for time
        const timeRegex = /\d{1,2}:\d{2}\s?/;
        
        britishPhrase.forEach((word, idx) => {
            const matches = word.match(timeRegex);

            if (matches) {
                
                let tempword = word.replace(":", ".")
                britishPhrase[idx] = `<span class="highlight">${tempword}</span>`;
            }
        })

        // check title
        britishPhrase.forEach((word, idx) => {
            let lowercase = word.toLowerCase()
            
            
            // let title = Object.keys(americanToBritishTitles).find((key) => {
            //     if (americanToBritishTitles[key] === lowercase) {
            //       return americanToBritishTitles[key] === lowercase;
            //     }
            //   })

            let title = americanToBritishTitles[lowercase]
            

            if (title) {
                console.log("title change")
                let s2 = title.charAt(0).toUpperCase() + title.slice(1);
                britishPhrase[idx] = `<span class="highlight">${s2}</span>`;
            }
        })

        if (endpart == "?") {
            britishPhrase[britishPhrase.length - 1] += "?";
        } else {
            britishPhrase[britishPhrase.length - 1] += "."; 
        }
        
        
        
        return britishPhrase.join(" ");
    }
    britishToAmerican(phrase) {
        const arrPhrase = phrase.split(" ");
        let americanPhrase = [];
        let britishTranslation = false;
        let fishPhrase = false;
        let endpart;

        if (arrPhrase[arrPhrase.length - 1].includes(".")) {
            let idx = arrPhrase[arrPhrase.length - 1].lastIndexOf(".");
            arrPhrase[arrPhrase.length - 1] = arrPhrase[arrPhrase.length -1].slice(0, idx);
            endpart = ".";
        }
        if (arrPhrase[arrPhrase.length - 1].includes("?")) {
            let idx = arrPhrase[arrPhrase.length - 1].lastIndexOf("?");
            arrPhrase[arrPhrase.length - 1] = arrPhrase[arrPhrase.length -1].slice(0, idx);
            endpart = "?";
        }


        arrPhrase.forEach((word, idx) => {
            
            let trWord = Object.keys(americanToBritishSpelling).find((key) => {
                if (americanToBritishSpelling[key] === word) {
                    return americanToBritishSpelling[key] === word
                }             
            })

            if (!trWord) {
                americanPhrase[idx] = word;
            } else {
                americanPhrase[idx] = `<span class="highlight">${trWord}</span>`
            }
            
        })

        // check for british word
        americanPhrase.forEach((word, idx) => {
            if (britishOnly[word.toLowerCase()]) {
                if (word == "chippy") {
                    fishPhrase = true;
                }
                let lowercaseWord = word.toLowerCase()
                let britishWord = britishOnly[lowercaseWord];
                americanPhrase[idx] = `<span class="highlight">${britishWord}</span>`;
            }
            britishTranslation = true;
        })

        // check for time
        const timeRegex = /\d{1,2}\.\d{2}\s?/;

        americanPhrase.forEach((word, idx) => {
            const matches = word.match(timeRegex);

            if (matches) {
                
                let tempword = word.replace(".", ":")
                
                americanPhrase[idx] = `<span class="highlight">${tempword}</span>`;
            }
        })

        // check for title
        americanPhrase.forEach((word, idx) => {
           let lowercase = word.toLowerCase()
           let title =  Object.keys(americanToBritishTitles).find((key) => {
              if (americanToBritishTitles[key] === lowercase) {
                return americanToBritishTitles[key] === lowercase;
              }
            })

            if (title) {
                let s2 = title.charAt(0).toUpperCase() + title.slice(1);
                americanPhrase[idx] = `<span class="highlight">${s2}</span>`;
            }
            
        })
        // check for british phrase
        let americanString = americanPhrase.join(" ");
        let britishPhrase = Object.keys(britishOnly);
        britishPhrase.forEach((phrase, idx) => {

            if (fishPhrase && phrase == "chip shop") {
                return;
            }
            if (americanString.includes(phrase) && phrase.split(" ").length > 1) {
                let value = britishOnly[phrase]
                
                let tempWord = americanString.replace(phrase, `<span class="highlight">${value}</span>`);
                americanString = tempWord;
              } 
        })

        americanPhrase = americanString.split(" ");
        if (endpart == "?") {
            americanPhrase[americanPhrase.length - 1] += "?";
        } else {
            americanPhrase[americanPhrase.length - 1] += "."; 
        }
        
        

        return americanPhrase.join(" ");
    }
}

module.exports = Translator;