QUnit.test("picolog", function( assert ) {
	assert.ok(typeof log == 'object', '`log` exists and is an object');
	assert.ok(typeof log.level == 'number', '`log.level` exists and is a number');
	assert.ok(log.TRACE === 6, '`log.TRACE` exists and is 6');
	assert.ok(log.DEBUG === 5, '`log.DEBUG` exists and is 5');
	assert.ok(log.LOG === 4, '`log.LOG` exists and is 4');
	assert.ok(log.INFO === 3, '`log.INFO` exists and is 3');
	assert.ok(log.WARN === 2, '`log.WARN` exists and is 2');
	assert.ok(log.ERROR === 1, '`log.ERROR` exists and is 1');
	assert.ok(log.NONE === 0, '`log.NONE` exists and is 0');
	assert.ok(typeof log.trace == 'function', '`log.trace` exists and is a function');
	assert.ok(typeof log.debug == 'function', '`log.debug` exists and is a function');
	assert.ok(typeof log.log == 'function', '`log.log` exists and is a function');
	assert.ok(typeof log.info == 'function', '`log.info` exists and is a function');
	assert.ok(typeof log.warn == 'function', '`log.warn` exists and is a function');
	assert.ok(typeof log.error == 'function', '`log.error` exists and is a function');
	assert.ok(log.level === log.WARN, 'log level defaults to WARN');
	log.info('This info message should NOT appear in the logs.');
	assert.ok(true, 'Console should show NO info messages yet');
	log.warn('Setting log level to DEBUG...');
	assert.ok(true, 'Console should show a warning message about changing the log level');
	log.level = log.DEBUG;
	assert.ok(log.level === log.DEBUG, 'log level set to DEBUG');
	log.info('This info message SHOULD appear in the logs.');
	assert.ok(true, 'Console should now show ONE info message.');
	log.debug('This debug message SHOULD appear in the logs.');
	assert.ok(true, 'Console should now show ONE debug message.');
	log.trace('This trace message should NOT appear in the logs.');
	assert.ok(true, 'Console should not show any trace messages yet.');
	log.level = log.TRACE;
	log.error('Setting log level to TRACE...');
	assert.ok(true, 'Console should show an error message about changing the log level');
	assert.ok(log.level === log.TRACE, 'log level set to TRACE');
	log.trace('This trace message SHOULD appear in the logs.');
});

