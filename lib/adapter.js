var createStartFn = function (karma) {
    function formatError(error){
        return (
            error.type + ' on line ' + error.line + '\n' +
            '    Expected: ' + error.expected + '\n' +
            '    Actual:   ' + error.actual
        );
    }

    return function () {
        // TODO: make path settable via config
        yatra.loadTests('./base/test/index.js');

        yatra.on('start', function (event) {
            karma.info({
                total: event.testCount
            });
        });

        yatra.on('report', function (report) {
            karma.result({
                id: '',
                description: report.name,
                suite: [report.path.join(' / ') + ' / '],
                success: report.success,
                skipped: report.skipped,
                time: report.time,
                log: report.errors
                    ? report.errors.map(formatError)
                    : report.exception
                        ? [report.exception.replace(/:\s*/, '\n    ')]
                        : []
            });
        });

        yatra.on('finish', function (event) {
            karma.complete({
                coverage: window.__coverage__
            });
        });

        yatra.run();
    };
};

window.__karma__.start = createStartFn(window.__karma__);
