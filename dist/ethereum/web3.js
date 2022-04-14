"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require("web3");

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  // Nous sommes dans le navigateur et dans metamask
  window.ethereum.request({ method: "eth_requestAccounts" });
  web3 = new _web2.default(window.ethereum);
} else {
  // Nous sommes dans le serveur mais l'utilisateur n'utilise pas metamask. Création du prpore fournisseur. 
  var provider = new _web2.default.providers.HttpProvider("https://rinkeby.infura.io/v3/7575421d3f6d49489438d16a533fde60");
  web3 = new _web2.default(provider);
}

exports.default = web3;
// Configurer web3 pour le fournisseur metamask
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx3ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJ3ZWIzIiwid2luZG93IiwiZXRoZXJldW0iLCJyZXF1ZXN0IiwibWV0aG9kIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUDs7Ozs7O0FBRUEsSUFBSSxZQUFKOztBQUVBLElBQUksT0FBTyxBQUFQLFdBQWtCLEFBQWxCLGVBQWlDLE9BQU8sT0FBTyxBQUFkLGFBQTJCLEFBQWhFLGFBQTZFLEFBQzNFO0FBQ0E7U0FBTyxBQUFQLFNBQWdCLEFBQWhCLFFBQXdCLEVBQUUsUUFBUSxBQUFWLEFBQXhCLEFBQ0E7U0FBTyxBQUFJLEFBQUosa0JBQVMsT0FBTyxBQUFoQixBQUFQLEFBQ0Q7QUFKRCxPQU1LLEFBQ0g7QUFDQTtNQUFNLFdBQVcsSUFBSSxjQUFLLEFBQUwsVUFBZSxBQUFuQixhQUNmLEFBRGUsQUFBakIsQUFHQTtTQUFPLEFBQUksQUFBSixrQkFBUyxBQUFULEFBQVAsQUFDRDtBQUVEOztrQkFBZSxBQUFmO0FBQ0EiLCJmaWxlIjoid2ViMy5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9MRSBDL2tpY2tzdGFydCJ9