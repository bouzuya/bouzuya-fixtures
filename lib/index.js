var fs = require('fs');
var path = require('path');
var q = require('q');

module.exports = function(options) {
  options = options || {};
  if (typeof options === 'string') {
    options = { name: options };
  }

  var dir = options.dir || path.resolve('test/fixtures');
  var ext = '.js';
  var data = fs.readdirSync(dir)
  .map(function(file) {
    return {
      ext: path.extname(file),
      name: path.basename(file, ext),
      path: path.resolve(dir, file),
    };
  })
  .filter(function(data) { return data.ext === ext; })
  .filter(function(data) {
    return !options.name || data.name === options.name;
  })
  .reduce(function(data, d) {
    data[d.name] = require(d.path);
    return data;
  }, {});

  var deferred = q.defer();
  deferred.resolve(options.name ? data[options.name] : data);
  return deferred.promise;
};

