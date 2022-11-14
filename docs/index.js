const basicInfo = require('./basicInfo');
const server = require('./server');
const tags = require('./tags');
const components = require('./components');
const calls = require('./calls');

module.exports = {
	...basicInfo,
	...server,
	...tags,
	...components,
	...calls,
};
