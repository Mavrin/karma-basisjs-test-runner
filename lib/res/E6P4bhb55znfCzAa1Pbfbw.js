if(typeof importScripts != 'undefined') {
  importScripts("xvG7IfmrZmFU3-ur_icA9w.js", "f_QWGkv3OQgYdxmMb5ifnA.js");

  onmessage = function(event) {
    postMessage(event.data.map(function(data) {
      var source = data.source;
      var breakPointAt = data.breakPointAt;
      var fnInfo = getFunctionInfo(source);
      var args = fnInfo.args;
      var body = fnInfo.body;
      return {
        source: source,
        args: args,
        body: body,
        wrapped: wrapSource(body, breakPointAt)
      };
    }));
  };
}
