/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    let chain = new Map()
    for(let i=0; i<this.words.length; i++) {
      let nextWord = this.words[i+1] || null
      let word = this.words[i]
      if(chain.has(word)) {
        chain.get(word).push(nextWord)
      } else {
        chain.set(word, [nextWord])
      }

    }
    this.chain = chain
  }
  /** return random text from chains */

  makeText(numWords = 100) {
    const keys = Array.from(this.chain.keys())
    let key = MarkovMachine.makeRandom(keys)
    let returnArr = []
    
    while(returnArr.length < numWords &&  key !== null) {
      returnArr.push(key)
      key = MarkovMachine.makeRandom(keys)
    }
    console.log(returnArr)
    return returnArr.join(' ')
  }

static makeRandom(array) {
    return array[Math.floor(Math.random() * array.length)]
  }
}
// let mm = new MarkovMachine(`the cat in the hat`);

// console.log(mm.makeText(numWords = 10))
// mm.makeText(numWords = 5);


module.exports = {MarkovMachine}