const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');

const translator = new Translator();
suite('Unit Tests', () => {
    test("test Mangoes are my favorite fruit.", () => {
        let result = translator.americanToBritish("Mangoes are my favorite fruit.")
        assert.equal(result, `Mangoes are my <span class="highlight">favourite</span> fruit.`)
    })
    test("test I ate yogurt for breakfast.", () => {
        let result = translator.americanToBritish("I ate yogurt for breakfast.")
        assert.equal(result, `I ate <span class="highlight">yoghurt</span> for breakfast.`)
    })
    test("We had a party at my friend's condo.", () => {
        let result = translator.americanToBritish("We had a party at my friend's condo.")
        assert.equal(result, `We had a party at my friend's condo.`)
    })
    test("Can you toss this in the trashcan for me?", () => {
        let result = translator.americanToBritish("Can you toss this in the trashcan for me?")
        assert.equal(result, `Can you toss this in the trashcan for me?`)
    })
    test("The parking lot was full.", () => {
        let result = translator.americanToBritish("The parking lot was full.")
        assert.equal(result, `The parking lot was full.`)
    })
    test("Like a high tech Rube Goldberg machine.", () => {
        let result = translator.americanToBritish("Like a high tech Rube Goldberg machine.")
        assert.equal(result, `Like a high tech Rube Goldberg machine.`)
    })
    test("To play hooky means to skip class or work.", () => {
        let result = translator.americanToBritish("To play hooky means to skip class or work.")
        assert.equal(result, `To play hooky means to skip class or work.`)
    })
    test("No Mr. Bond, I expect you to die.", () => {
        let result = translator.americanToBritish("No Mr. Bond, I expect you to die.")
        assert.equal(result, `No <span class="highlight">Mr</span> Bond, I expect you to die.`)
    })
    test("Dr. Grosh will see you now.", () => {
        let result = translator.americanToBritish("Dr. Grosh will see you now.")
        assert.equal(result, `<span class="highlight">Dr</span> Grosh will see you now.`)
    })
    test("Lunch is at 12:15 today.", () => {
        let result = translator.americanToBritish("Lunch is at 12:15 today.")
        assert.equal(result, `Lunch is at <span class="highlight">12.15</span> today.`)
    })
    test("We watched the footie match for a while.", () => {
        let result = translator.britishToAmerican("We watched the footie match for a while.")
        assert.equal(result, `We watched the <span class="highlight">soccer</span> match for a while.`)
    })
    test("Paracetamol takes up to an hour to work.", () => {
        let result = translator.britishToAmerican("Paracetamol takes up to an hour to work.")
        assert.equal(result, `<span class="highlight">Tylenol</span> takes up to an hour to work.`)
    })
    test("First, caramelise the onions.", () => {
        let result = translator.britishToAmerican("First, caramelise the onions.")
        assert.equal(result, `First, <span class="highlight">caramelize</span> the onions.`)
    })
    test("I spent the bank holiday at the funfair.", () => {
        let result = translator.britishToAmerican("I spent the bank holiday at the funfair.")
        assert.equal(result, `I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.`)
    })
    test("I had a bicky then went to the chippy.", () => {
        let result = translator.britishToAmerican("I had a bicky then went to the chippy.")
        assert.equal(result, `I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.`)
    })
    test("I've just got bits and bobs in my bum bag.", () => {
        let result = translator.britishToAmerican("I've just got bits and bobs in my bum bag.")
        assert.equal(result, `I've just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.`)
    })
    test("The car boot sale at Boxted Airfield was called off.", () => {
        let result = translator.britishToAmerican("The car boot sale at Boxted Airfield was called off.")
        assert.equal(result, `The <span class="highlight">swap meet</span> at Boxted Airfield was called off.`)
    })
    test("Have you met Mrs Kalyani?", () => {
        let result = translator.britishToAmerican("Have you met Mrs Kalyani?")
        assert.equal(result, `Have you met <span class="highlight">Mrs.</span> Kalyani?`)
    })
    test("Prof Joyner of King's College, London.", () => {
        let result = translator.britishToAmerican("Prof Joyner of King's College, London.")
        assert.equal(result, `<span class="highlight">Prof.</span> Joyner of King's College, London.`)
    })
    test("Tea time is usually around 4 or 4.30.", () => {
        let result = translator.britishToAmerican("Tea time is usually around 4 or 4.30.")
        assert.equal(result, `Tea time is usually around 4 or <span class="highlight">4:30</span>.`)
    })
    test("Mangoes are my favorite fruit.", () => {
        let result = translator.americanToBritish("Mangoes are my favorite fruit.")
        assert.include(result, `<span class="highlight">`)
    })
    test("I ate yogurt for breakfast.", () => {
        let result = translator.americanToBritish("I ate yogurt for breakfast.")
        assert.include(result, `<span class="highlight">`)
    })
    test("We watched the footie match for a while.", () => {
        let result = translator.britishToAmerican("We watched the footie match for a while.")
        assert.include(result, `<span class="highlight">`)
    })
    test("Paracetamol takes up to an hour to work.", () => {
        let result = translator.britishToAmerican("Paracetamol takes up to an hour to work.")
        assert.include(result, `<span class="highlight">`)
    })
});
