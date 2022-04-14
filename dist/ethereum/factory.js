'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _CampaignFactory = require('./build/CampaignFactory.json');

var _CampaignFactory2 = _interopRequireDefault(_CampaignFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _web2.default.eth.Contract(JSON.parse(_CampaignFactory2.default.interface), '0xFA7d8741E18324BBa0F4457D3eC16B1374bb2df4' // Adresse du smart contract
);

exports.default = instance;

// Instance préconfigurée pour le smartcontract CampaignFactory
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxmYWN0b3J5LmpzIl0sIm5hbWVzIjpbIndlYjMiLCJDYW1wYWlnbkZhY3RvcnkiLCJpbnN0YW5jZSIsImV0aCIsIkNvbnRyYWN0IiwiSlNPTiIsInBhcnNlIiwiaW50ZXJmYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFxQjs7Ozs7O0FBRTVCLElBQU0sZUFBZSxjQUFBLEFBQUssSUFBVCxBQUFhLFNBQzNCLEtBQUEsQUFBSyxNQUFNLDBCQURHLEFBQ2QsQUFBMkIsWUFEYixBQUVkLDZDQUZILEFBQWlCLEFBRStCLEFBR2hEO0FBTGlCOztrQkFLakIsQUFBZTs7QUFFZiIsImZpbGUiOiJmYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL0xFIEMva2lja3N0YXJ0In0=