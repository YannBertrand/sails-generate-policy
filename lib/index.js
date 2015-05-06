/**
 * sails-generate-policy
 *
 * Usage:
 * `sails generate policy`
 *
 * @type {Object}
 */

module.exports = {

	templatesDirectory: require('path').resolve(__dirname,'../templates'),

	before: require('./before'),

	targets: {
		'./api/policies/:filename': { template: './policy.template' }
	}
};

