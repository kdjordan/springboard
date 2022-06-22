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
module.exports = slugify