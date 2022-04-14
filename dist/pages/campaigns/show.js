'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = require('../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _ContributeForm = require('../../components/ContributeForm');

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\LE C\\kickstart\\pages\\campaigns\\show.js?entry';
// montrer à nos utilisateurs les détails d'une campagne particulière
// Imporation du lien qui est lié au smartcontract

var CampaignShow = function (_Component) {
  (0, _inherits3.default)(CampaignShow, _Component);

  function CampaignShow() {
    (0, _classCallCheck3.default)(this, CampaignShow);

    return (0, _possibleConstructorReturn3.default)(this, (CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).apply(this, arguments));
  }

  (0, _createClass3.default)(CampaignShow, [{
    key: 'renderCards',
    value: function renderCards() {
      var _props = this.props,
          balance = _props.balance,
          manager = _props.manager,
          minimumContribution = _props.minimumContribution,
          requestsCount = _props.requestsCount,
          approversCount = _props.approversCount;

      // Information de la fonction Summary() retranscrit sur la carte. 

      var items = [{
        header: manager,
        meta: 'Adresse manager',
        description: 'Le porteur de projet a décidé de faire cette campagne pour faire un film',
        style: { overflowWrap: 'break-word' // Permet de divise la taille de l'adresse en deux. Un style CSS
        } }, {
        header: minimumContribution,
        meta: 'Minimum Contribution (wei)',
        description: "T'as intêret de mettre le minimum bro"
      }, {
        header: requestsCount,
        meta: 'Number of REQUESTS',
        description: "Oui oui oui"
      }, {
        header: approversCount,
        meta: 'Number of APPROVERS',
        description: "Nombre de personnes qui ont donné dans cette campagne"
      }, {
        header: _web2.default.utils.fromWei(balance, 'ether'),
        meta: 'Number of Ether',
        description: "Je te montre les Ethers"
      }];

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }); // Retourne les informations de la carte
    }

    // Les informations sur la carte sont visible sur le site. 

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, 'Campaign Show'), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, _react2.default.createElement(_ContributeForm2.default, { address: this.props.address, __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests', __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, 'View Requests')))))));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var campaign, summary;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                campaign = (0, _campaign2.default)(props.query.address); // Addresse de la campagne  que nous allons montrer ses stats. Nous accédons à la campagne. 

                _context.next = 3;
                return campaign.methods.getSummary().call();

              case 3:
                summary = _context.sent;
                return _context.abrupt('return', {
                  address: props.query.address, // Permettre de connaitre l'addresse à qui la contribution doit être envoyé. 
                  minimumContribution: summary[0],
                  balance: summary[1],
                  requestsCount: summary[2],
                  approversCount: summary[3],
                  manager: summary[4]

                });

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CampaignShow;
}(_react.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXHNob3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDYXJkIiwiR3JpZCIsIkJ1dHRvbiIsIkxheW91dCIsIkNhbXBhaWduIiwid2ViMyIsIkNvbnRyaWJ1dGVGb3JtIiwiTGluayIsIkNhbXBhaWduU2hvdyIsInByb3BzIiwiYmFsYW5jZSIsIm1hbmFnZXIiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwicmVxdWVzdHNDb3VudCIsImFwcHJvdmVyc0NvdW50IiwiaXRlbXMiLCJoZWFkZXIiLCJtZXRhIiwiZGVzY3JpcHRpb24iLCJzdHlsZSIsIm92ZXJmbG93V3JhcCIsInV0aWxzIiwiZnJvbVdlaSIsInJlbmRlckNhcmRzIiwiYWRkcmVzcyIsImNhbXBhaWduIiwicXVlcnkiLCJtZXRob2RzIiwiZ2V0U3VtbWFyeSIsImNhbGwiLCJzdW1tYXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTSxBQUFNOztBQUNyQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQW9COzs7O0EsQUFDM0IsQUFBUSxBQUFXOzs7OztBQVBuQjtBQU9tQzs7SSxBQUM3Qjs7Ozs7Ozs7Ozs7O21CQXdCTSxLQVJNLEFBUUQ7VUFSQyxBQUdOLGlCQUhNLEFBR047VUFITSxBQUlOLGlCQUpNLEFBSU47VUFKTSxBQUtOLDZCQUxNLEFBS047VUFMTSxBQU1OLHVCQU5NLEFBTU47VUFOTSxBQU9OLHdCQVBNLEFBT04sQUFHWjs7QUFDUTs7VUFBTTtnQkFDRixBQUNRLEFBQ1I7Y0FGQSxBQUVNLEFBQ047cUJBSEEsQUFHYSxBQUNiO2lCQUFRLGNBQUQsQUFBZSxhQUxaLEFBQ1YsQUFJTyxBQUE2QjtBQUE3QixTQUpQLEFBQ0E7Z0JBTUEsQUFDYSxBQUNUO2NBRkosQUFFVyxBQUNQO3FCQVhNLEFBUVYsQUFHaUI7QUFIakIsQUFDSSxPQVRNO2dCQWNWLEFBQ2EsQUFDVDtjQUZKLEFBRVcsQUFDUDtxQkFqQk0sQUFjVixBQUdrQjtBQUhsQixBQUNJO2dCQUtKLEFBQ2EsQUFDVDtjQUZKLEFBRVcsQUFDUDtxQkF2Qk0sQUFvQlYsQUFHa0I7QUFIbEIsQUFDSTtnQkFLUyxjQUFBLEFBQUssTUFBTCxBQUFXLFFBQVgsQUFBbUIsU0FEaEMsQUFDYSxBQUE0QixBQUNyQztjQUZKLEFBRVcsQUFDUDtxQkE1QlIsQUFBYyxBQXlCVixBQUdrQixBQU10QjtBQVRJLEFBQ0k7OzJDQVFELEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7b0JBQW5CO3NCQTdDRyxBQTZDVixBQUFPO0FBQUE7T0FBQSxFQTdDRyxDQTZDMEIsQUFDdkM7QUFHRDs7Ozs7OzZCQUNTLEFBQ0w7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0Esa0NBQUEsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9CO29CQUFwQjtzQkFBQSxBQUF5QjtBQUF6QjtjQURGLEFBQ0UsQUFBeUIsQUFBSyxBQUM5QixnQ0FBQyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9CO29CQUFwQjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQywwQ0FBZSxTQUFTLEtBQUEsQUFBSyxNQUE5QixBQUFvQztvQkFBcEM7c0JBSk4sQUFDRSxBQUVFLEFBQ0UsQUFJSjtBQUpJOzRCQUlILGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLDhCQUFLLHVCQUFxQixLQUFBLEFBQUssTUFBMUIsQUFBZ0MsVUFBdEM7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMseUNBQU8sU0FBUjtvQkFBQTtzQkFBQTtBQUFBO1NBZmQsQUFDRSxBQUVFLEFBUUUsQUFDRSxBQUNFLEFBQ0UsQUFDRSxBQVFmOzs7OzsyRyxBQXhGMEI7Ozs7O21CQUNyQjtBLDJCQUFXLHdCQUFTLE1BQUEsQUFBTSxNLEFBQWYsQUFBcUIsVUFBVTs7O3VCQUMxQixTQUFBLEFBQVMsUUFBVCxBQUFpQixhLEFBQWpCLEFBQThCOzttQkFBOUM7QTs7MkJBR1EsTUFBQSxBQUFNLE1BRGQsQUFDb0IsU0FBUyxBQUMvQjt1Q0FBc0IsUUFGcEIsQUFFb0IsQUFBUSxBQUM5QjsyQkFBVSxRQUhSLEFBR1EsQUFBUSxBQUNsQjtpQ0FBZSxRQUpiLEFBSWEsQUFBUSxBQUN2QjtrQ0FBZ0IsUUFMZCxBQUtjLEFBQVEsQUFDeEI7MkJBQVMsUSxBQU5QLEFBTU8sQUFBUTs7QUFOZixBQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0ZOLEEsQUE3RnVCOztrQkE2RnZCLEFBQWUiLCJmaWxlIjoic2hvdy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9MRSBDL2tpY2tzdGFydCJ9