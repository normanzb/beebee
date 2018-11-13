# This is logger that logs with...

* shortened uuid: each instance will logs with its own uuid as prefix.
* time stamp: er... time stamp is a time stamp
* and with some colours

```javascript
const BB = require('beebee');
const bbWithAName = new BB('name-goes-here');
const bbWithRandomId = new BB();

bbWithAName.log('I don\'t mean to be a pest.');
// name-goes-here 2018-11-09T15:59:31.472Z: I don't mean to be a pest.

bbWithRandomId.warn('but you are warned this will be annoy.');
// kPQo3XVbU2qqJsK8bmxtjh 2018-11-09T16:03:31.472Z: but you are warned I will be annoy.

bbWithRandomId.verbose('and I will bug you again');
// kPQo3XVbU2qqJsK8bmxtjh 2018-11-09T16:15:31.472Z: and I will bug you again

bbWithRandomId.error('when there is an error happens');
// kPQo3XVbU2qqJsK8bmxtjh 2018-11-09T16:17:31.472Z: when there is an error happen
```