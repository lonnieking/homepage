const process = require('process')

const assetLocationMap = {
  development: '..',
  staging:     'https://s3-ap-southeast-2.amazonaws.com/lkcool-homepage-staging-assets',
  production:  'https://s3-ap-southeast-2.amazonaws.com/lkcool-homepage-production-assets'
}

const environment = process.env.NODE_ENV || 'development'

module.exports = {
  favicon:         `${assetLocationMap[environment]}/favicon.png`,
  backgroundImage: `${assetLocationMap[environment]}/bg.png`
}
