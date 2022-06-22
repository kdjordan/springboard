const slugify = require('slugify')


// Slugify config options
const options = {
  replacement: '-',
  remove: undefined,
  lower: true,
  strict: false,
  locale: 'en',
  trim: true,
}

// Node Convert Title to Slug Example
// const myTitle1 =
//   'The only way to learn a new programming language is by writing programs'
// const newSlug1 = slugify(myTitle1)
// console.log(newSlug1)


// const myTitle2 =
//   'Sometimes it is better to leave something alone, to pause, and that is very true of programming'
// const newSlug2 = slugify(myTitle2, options)
// console.log(newSlug2)

// const myTitle3 = 'Just keep your cool and your sense of humor'
// const newSlug3 = slugify(myTitle3, options)
// console.log(newSlug3)

module.exports = slugify