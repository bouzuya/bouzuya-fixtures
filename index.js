module.exports = process.env.BOUZUYA_FIXTURES_COV ?
  require('./lib-cov/') :
  require('./lib/');
