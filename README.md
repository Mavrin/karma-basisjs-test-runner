## karma-yatra

Adapter for the [Yatra](http://github.com/basisjs/yatra) testing framework.

## Installation

The easiest way is to keep `karma-yatra` as a `devDependency` in your `package.json`.

```json
{
  "devDependencies": {
    "karma": "~0.12.0",
    "karma-yatra": "~1.0.0"
  }
}
```

You can simply do it by:

```bash
npm install karma-yatra --save-dev
```

## Configuration

```js
// karma.conf.js
module.exports = function(config) {
  config.set({
    frameworks: ['yatra'],

    files: [
      { pattern:'test/**', included: false },
      { pattern:'src/**', included: false }
    ]
  });
};
```

----

For more information on Karma see the [homepage].

[homepage]: http://karma-runner.github.com
