module.exports = {
  // this is the default connection
  localDiskDb: {
    adapter: 'sails-disk'
  },

  // custom connection for production
  productionMongo: {
    adapter: 'sails-mongo',
    url: process.env.MONGODB_URI
  }
}
