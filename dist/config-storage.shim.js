'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _webexCore = require('@webex/webex-core');

var _storageAdapterLocalStorage = require('@webex/storage-adapter-local-storage');

var _storageAdapterLocalStorage2 = _interopRequireDefault(_storageAdapterLocalStorage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*!
 * Copyright (c) 2015-2020 Cisco Systems, Inc. See LICENSE file.
 */

exports.default = {
  boundedAdapter: new _storageAdapterLocalStorage2.default('webex'),
  unboundedAdapter: _webexCore.MemoryStoreAdapter
};
//# sourceMappingURL=config-storage.shim.js.map
