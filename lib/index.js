var path = require('path');

var createPattern = function(path) {
  return {pattern: path, included: true, served: true, watched: false};
};
var createPattern2 = function(path) {
    return {pattern: path, included: false};
};

var initRunner = function(files) {
  /*var basisjsPath = path.dirname(require.resolve('basisjs'));
  var basisjsRunnerPath = path.dirname(require.resolve('basisjs-test-runner'));

  files.unshift(createPattern(__dirname + '/adapter.js'));

  files.unshift(createPattern2('E:/user/Documents/work/sample-test-runner/node_modules/karma-basisjs-test-runner/node_modules/basisjs/src/basis.js'));
    console.log(basisjsRunnerPath + '*//**');
    files.unshift(createPattern2(basisjsPath + '*//*.js'));*/
//  files.unshift(createPattern(basisjsPath + '/basis.js'));
  files.unshift(createPattern(__dirname + '/res/*.js'));
  files.unshift(createPattern(__dirname + '/res/*.html'));
  files.unshift(createPattern(__dirname + '/adapter.js'));
  files.unshift(createPattern(__dirname + '/script.js'));
};
console.log('sdsds');
initRunner.$inject = ['config.files'];

module.exports = {
  'framework:karma-basisjs-test-runner': ['factory', initRunner]
};
