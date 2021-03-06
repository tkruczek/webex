'use strict';

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*!
 * Copyright (c) 2015-2020 Cisco Systems, Inc. See LICENSE file.
 */

// Disable eslint because this file needs to be es5 compatible
/* eslint-disable */

var testUsers = require('@webex/test-helper-test-users');
var Webex = require('webex');

before(function () {
  this.timeout(60000);

  if (global.webex) {
    return _promise2.default.resolve();
  }

  return testUsers.create({ count: 1 }).then(function (users) {
    /* eslint camelcase: [0] */
    global.webex = new Webex({ credentials: users[0].token });
  });
});
//# sourceMappingURL=_setup.js.map
