# A logger that logs with shortened uuid and time stamp and with some colours

```javascript
const BB = require('beebee');
const b1 = new BB();

b1.log('I don\'t mean to be a pest.');
// kPQo3XVbU2qqJsK8bmxtjh 2018-11-09T15:59:31.472Z: I don't mean to be a pest.

b1.warn('But you are warned this will be annoy.');
// kPQo3XVbU2qqJsK8bmxtjh 2018-11-09T16:03:31.472Z: But you are warned I will be annoy.

b1.verbose('and I will to bug you again');
// kPQo3XVbU2qqJsK8bmxtjh 2018-11-09T16:15:31.472Z: and I want to bug you again

b1.error('when there is an error happens');
// kPQo3XVbU2qqJsK8bmxtjh 2018-11-09T16:17:31.472Z: when there is an error happen
```