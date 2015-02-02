var path = require('path');

var includedPattern = function(path) {
    return { pattern: path, included: true, served: true, watched: false };
};
var servedPattern = function(path) {
    return { pattern: path, included: false, served: true, watched: false };
};

var initRunner = function(files, preprocessors) {
    var testRunnerDir = path.dirname(require.resolve('yatra'));

    files.unshift.apply(files, [
        servedPattern(testRunnerDir + '/res/*.js'),
        servedPattern(testRunnerDir + '/res/*.html'),
        includedPattern(testRunnerDir + '/runner.js'),
        includedPattern(__dirname + '/adapter.js')
    ]);
};

initRunner.$inject = ['config.files'];

module.exports = {
    'framework:yatra': ['factory', initRunner]
};
