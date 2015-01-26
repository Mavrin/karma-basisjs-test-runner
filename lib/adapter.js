(function (window) {
    var createMochaStartFn = function (tc) {
        return function (config) {
            var runner = basis.require('./e.js');
            var rootTest = basis.require("./i.js").create(basis.require('./base/test/index.js'));
            runner.loadTests(basis.array(rootTest.childNodes));
            runner.on('start', function (event) {
                tc.info({
                    total: event.testCount
                });
            });
            runner.on('report', function (report) {
                tc.result({
                    id: '', // ?
                    description: report.name, // or report.path.join(' ') + ' ' + report.name
                    suite: report.path, // or report.path.join(' ')
                    success: report.success,
                    skipped: report.skipped,
                    time: report.time,
                    log: report.errors ? [JSON.stringify(report.errors)] : []
                });
            });

            runner.on('finish', function (event) {
                tc.complete({
                    coverage: window.__coverage__
                });
            });
            runner.run();
        };
    };

    window.__karma__.start = createMochaStartFn(window.__karma__);

}(window))