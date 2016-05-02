"use strict";

// deps

	const SMS = require('../main.js');

// tests

	function testArgs() {

		return new Promise(function(resolve, reject) {

			try {

				console.log("");
				console.log("----------------");
				console.log("tests args");
				console.log("----------------");
				console.log("");

				console.log("must be == 4 :", process.argv.length);

				if (4 != process.argv.length) {
					reject();
				}
				else {

					console.log("");
					console.log("----------------");
					console.log("");

					resolve();

				}

			}
			catch(e) {
				reject((e.message) ? e.message : e);
			}

		});

	}

	function testStatic() {

		return new Promise(function(resolve, reject) {

			try {

				console.log("");
				console.log("----------------");
				console.log("test static");
				console.log("----------------");
				console.log("");

				console.log("must be == 'sended' :");
				SMS.sendStatic(process.argv[2], process.argv[3], 'SimpleFreeSMS testStatic').then(function() {

					console.log("sended");

					console.log("");
					console.log("----------------");
					console.log("");

					resolve();

				}).catch(reject);

			}
			catch(e) {
				reject((e.message) ? e.message : e);
			}

		});

	}

	function testInstance() {

		return new Promise(function(resolve, reject) {

			try {

				console.log("");
				console.log("----------------");
				console.log("test instance");
				console.log("----------------");
				console.log("");

				console.log("must be == 'sended' :");
				new SMS().login(process.argv[2]).key(process.argv[3]).send('SimpleFreeSMS testInstance').then(function() {

					console.log("sended");

					console.log("");
					console.log("----------------");
					console.log("");

					resolve();

				}).catch(reject);

			}
			catch(e) {
				reject((e.message) ? e.message : e);
			}

		});

	}

// run

	testArgs().then(function() {
		return testStatic();
	}).then(function() {
		return testInstance();
	}).catch(function(err) {
		console.log('tests interruption', err);
	});
