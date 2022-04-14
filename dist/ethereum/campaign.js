'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _Campaign = require('./build/Campaign.json');

var _Campaign2 = _interopRequireDefault(_Campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Prendre les données ABI Du smart contract.
// le premier argument sera l'interface de notre campagne

exports.default = function (address) {

    return new _web2.default.eth.Contract(JSON.parse(_Campaign2.default.interface), address // ADRESSE DE LA CAMPAGNE. Smart contract prêt à fonctionner pour la campagne. 
    );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxjYW1wYWlnbi5qcyJdLCJuYW1lcyI6WyJ3ZWIzIiwiQ2FtcGFpZ24iLCJhZGRyZXNzIiwiZXRoIiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBVTs7OztBLEFBQ2pCLEFBQVEsQUFBYzs7Ozs7O0FBQXlCO0FBQy9DLEFBRUE7O2tCQUFlLFVBQUEsQUFBQyxTQUFZLEFBRXhCOztlQUFXLGNBQUEsQUFBSyxJQUFULEFBQWEsU0FDaEIsS0FBQSxBQUFLLE1BQU0sbUJBRFIsQUFDSCxBQUFvQixZQURqQixBQUM2QixRQURwQyxBQUFPLEFBQ3FDLEFBRS9DO0FBSFU7QUFGWCIsImZpbGUiOiJjYW1wYWlnbi5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9MRSBDL2tpY2tzdGFydCJ9