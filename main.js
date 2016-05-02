
"use strict";

// deps

	const https = require('https');

// module

module.exports = class SimpleFreeSMS {

	constructor() {

		this._login = '';
		this._key = '';

	}

	login(login) {
		this._login = login; return this;
	}

	key(key) {
		this._key = key; return this;
	}

	send(message) {
		return SimpleFreeSMS.sendStatic(this._login, this._key, message);
	}

	static sendStatic(login, key, msg) {

		return new Promise(function(resolve, reject) {

			if ('string' !== typeof login || '' == login.trim()) {
				reject('Missing login.');
			}
			else if ('string' !== typeof key || '' == key.trim()) {
				reject('Missing key.');
			}
			else if ('string' !== typeof msg || '' == msg.trim()) {
				reject('Missing message.');
			}
			else {

				login = login.trim(); key = key.trim();
				msg = encodeURIComponent(msg).trim();

				https.get('https://smsapi.free-mobile.fr/sendmsg?user=' + login + '&pass=' + key + '&msg=' + msg, function(res) {

					switch(res.statusCode) {

						case 400:
							reject('Missing mandatory parameter.');
						break;
						case 402:
							reject('Too many message sended in too few time.');
						break;
						case 403:
							reject('Service not activated or wrong login/key.');
						break;
						case 500:
							reject('API error. Please try again later.');
						break;

						case 200:
							resolve();
						break;

						default:
							reject('Unknown return (' + res.statusCode + ').');
						break;

					}

				}).on('error', function(e) {
					reject((e.message) ? e.message : e);
				});
				
			}

		});

	}

};
