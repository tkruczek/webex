'use strict';

/*!
 * Copyright (c) 2015-2020 Cisco Systems, Inc. See LICENSE file.
 */

// Note: this file is written using commonjs instead of import/export to
// simplify consumption by those less familiar with the current state of
// JavaScript modularization

/* eslint camelcase: [0] */

require('@webex/plugin-authorization');
// explicitly load wdm, since we're relying on preDiscoveryServices and the
// url interceptor
require('@webex/internal-plugin-calendar');
require('@webex/internal-plugin-device');
require('@webex/internal-plugin-presence');
require('@webex/internal-plugin-support');
require('@webex/plugin-attachment-actions');
require('@webex/plugin-device-manager');
require('@webex/plugin-logger');
require('@webex/plugin-meetings');
require('@webex/plugin-messages');
require('@webex/plugin-memberships');
require('@webex/plugin-people');
require('@webex/plugin-rooms');
require('@webex/plugin-teams');
require('@webex/plugin-team-memberships');
require('@webex/plugin-webhooks');

var merge = require('lodash/merge');
var WebexCore = require('@webex/webex-core').default;

var config = require('./config');

// documentation.js puts hashes in relative urls, so need to specify full urls
// here
/**
 * See {@link https://webex.github.io/webex-js-sdk/example/browsers|Browser Guide} and
 * {@link https://webex.github.io/webex-js-sdk/example/servers|Server Guide}
 * @see {@link /example/browsers|Browser Guide}
 * @see {@link /example/servers|Server Guide}
 * @class Webex
 */
var Webex = WebexCore.extend({
  webex: true,
  version: '1.82.2'
});

/**
 * Create a new {@link Webex} instance
 *
 * @example
 * <caption>Create a new Webex instance configured for your OAuth client</caption>
 * const webex = Webex.init({
 *   config: {
 *     credentials: {
 *       authorizationString: `<AUTHORIZATION URL FROM DEVELOPER PORTAL>`
 *     }
 *   }
 * });
 *
 * @example
 * <caption>Create a new Webex instance configured for a Bot</caption>
 * const webex = Webex.init({
 *   credentials: `<BOT TOKEN FROM DEVELOPER PORTAL>`
 * });
 *
 *
 * @param {Object} attrs
 * @param {Object} attrs.config (optional)
 * @memberof Webex
 * @returns {Webex}
 */
Webex.init = function init() {
  var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  attrs.config = merge({}, config, attrs.config); // eslint-disable-line no-param-reassign

  return new Webex(attrs);
};

module.exports = Webex;
//# sourceMappingURL=webex.js.map
