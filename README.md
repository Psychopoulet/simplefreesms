# simplefreesms
A basic way to send SMS with Free API


## Installation

```bash
$ npm install simplefreesms
```

## Features

  * just send free sms with your Free account (https://mobile.free.fr/moncompte/)

## Doc

   * static sendStatic(string login, string secretKey, string message) // return Promise
   * login(string login) // return this
   * key(string secretKey) // return this
   * send(string message) // return Promise

## Examples

```js

// sync

const SMS = require('simplefreesms');

// send message without object instanciation
SMS.sendStatic('XXXXXXXX', 'XXXXXXXXXXXXXX', 'message').then(function() {
   console.log('sended');
}).catch(function(err) {
   console.log(err);
});

// send message with object instanciation

let mySMS = new SMS();

// register login & secret key for this instance
mySMS.login('XXXXXXXX').key('XXXXXXXXXXXXXX');

// send message with registered login & secret key
mySMS.send('message').then(function() {
   console.log('sended');
}).catch(function(err) {
   console.log(err);
});

```


## Tests

```bash
$ node tests/tests.js
```

## License

  [ISC](LICENSE)
