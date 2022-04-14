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

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = require('semantic-ui-react');

var _factory = require('../../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\LE C\\kickstart\\pages\\campaigns\\new.js?entry';
// Router : redireger par programme les gens d'une page à une autre page de l'application.  

var CampaignNew = function (_Component) {
    (0, _inherits3.default)(CampaignNew, _Component);

    function CampaignNew() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, CampaignNew);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignNew.__proto__ || (0, _getPrototypeOf2.default)(CampaignNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            minimumContribution: '',
            errorMessage: '', // " " = initialisation chaine de caractère. 
            loading: false // Nouveau propriété, spinners
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var accounts;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                // Gestionnaire d'événements. Qui va être transféré au formulaire. 
                                event.preventDefault(); // chaque fois que nous appelons une fonction dans un smart contrat, celle-ci sera ASYNCHRONE

                                _this.setState({ loading: true, errorMessage: '' }); // Dès que l'utilisateur clique sur Create, le spinner commence automatiquement à tourner. Et le message d'erreur est supprimé". 

                                _context.prev = 2;
                                _context.next = 5;
                                return _web2.default.eth.getAccounts();

                            case 5:
                                accounts = _context.sent;
                                _context.next = 8;
                                return _factory2.default.methods // Tous les fonctions du smart contract. Création de la campagne
                                .createCampaign(_this.state.minimumContribution).send({
                                    from: accounts[0]
                                });

                            case 8:

                                _routes.Router.pushRoute("/"); // rediriger l'utilisateur à la campagne créé. Listes de tout les campagnes  
                                _context.next = 14;
                                break;

                            case 11:
                                _context.prev = 11;
                                _context.t0 = _context['catch'](2);

                                _this.setState({ errorMessage: _context.t0.message });

                            case 14:

                                _this.setState({ loading: false }); // Le spinner du loading est désactivé.  

                            case 15:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[2, 11]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(CampaignNew, [{
        key: 'render',

        //render() : Fonction affichage. 
        value: function render() {
            var _this3 = this;

            return (// Récupération INFORMATIONS de "OnSubmit" Gestionnaire d'événements. 
                _react2.default.createElement(_Layout2.default, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 41
                    }
                }, _react2.default.createElement('h3', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 42
                    }
                }, ' Create Campaign !'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 44
                    }
                }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 45
                    }
                }, _react2.default.createElement('label', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 46
                    }
                }, 'Minimum contribution'), _react2.default.createElement(_semanticUiReact.Input, { label: 'wei',
                    placeholder: 'minimum contribution',
                    labelPosition: 'right',
                    value: this.state.minimumContribution,
                    onChange: function onChange(event) {
                        return _this3.setState({ minimumContribution: event.target.value });
                    } // Valeur seulement en chiffre. Nous mettons ensuite à jour l'élément de contribution minimale qui entraîne la réexécution de la total de la fonction. Nous transférons cette nouvelle valleur dans l'entrée. 
                    , __source: {
                        fileName: _jsxFileName,
                        lineNumber: 47
                    }
                })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 54
                    }
                }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, type: 'submit', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 55
                    }
                }, 'Create')))
            );
        }
    }]);

    return CampaignNew;
}(_react.Component);

exports.default = CampaignNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXG5ldy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIkJ1dHRvbiIsIkZvcm0iLCJJbnB1dCIsIk1lc3NhZ2UiLCJmYWN0b3J5Iiwid2ViMyIsIlJvdXRlciIsIkNhbXBhaWduTmV3Iiwic3RhdGUiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwiZXJyb3JNZXNzYWdlIiwibG9hZGluZyIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJjcmVhdGVDYW1wYWlnbiIsInNlbmQiLCJmcm9tIiwicHVzaFJvdXRlIiwibWVzc2FnZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQVEsQUFBTSxBQUFPOztBQUM5QixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFVOzs7O0EsQUFDakIsQUFBUSxBQUFhOzs7OztBQUFnQjs7SSxBQUUvQjs7Ozs7Ozs7Ozs7Ozs7OzBOLEFBRUY7aUNBQVEsQUFDaUIsQUFDckI7MEJBRkksQUFFVyxJQUFJLEFBQ25CO3FCQUhJLEFBR0ssTSxBQUhMLEFBR1c7QUFIWCxBQUNKLGlCLEFBS0o7aUdBQVcsaUJBQUEsQUFBTyxPQUFQO29CQUFBOzhFQUFBOzhCQUFBO3lEQUFBO2lDQUFvQjtBQUM1QjtzQ0FEUSxBQUNSLEFBQU0sa0JBQWtCLEFBRXhCOztzQ0FBQSxBQUFLLFNBQVMsRUFBQyxTQUFELEFBQVUsTUFBTSxjQUh0QixBQUdSLEFBQWMsQUFBOEIsT0FIcEMsQUFHMEM7O2dEQUgxQztnREFBQTt1Q0FNZ0IsY0FBQSxBQUFLLElBTnJCLEFBTWdCLEFBQVM7O2lDQUExQjtBQU5DLG9EQUFBO2dEQUFBO3lEQU9ELEFBQVEsUUFBUixBQUFnQjtBQUFoQixpQ0FBQSxBQUNMLGVBQWUsTUFBQSxBQUFLLE1BRGYsQUFDcUIscUJBRHJCLEFBRUw7MENBQ1ksU0FWTixBQU9ELEFBRUEsQUFDTyxBQUFTO0FBRGhCLEFBQ0E7O2lDQUdMOzsrQ0FBQSxBQUFPLFVBYkQsQUFhTixBQUFpQixNQWJYLEFBYWlCO2dEQWJqQjtBQUFBOztpQ0FBQTtnREFBQTtnRUFpQkY7O3NDQUFBLEFBQUssU0FBUyxFQUFDLGNBQWUsWUFqQjVCLEFBaUJGLEFBQWMsQUFBb0I7O2lDQUd6Qzs7c0NBQUEsQUFBSyxTQUFTLEVBQUMsU0FwQk4sQUFvQlQsQUFBYyxBQUFVLFVBcEJmLEFBb0J3Qjs7aUNBcEJ4QjtpQ0FBQTtnREFBQTs7QUFBQTt5Q0FBQTtBOzs7Ozs7Ozs7YUFzQlg7OztpQ0FDUTt5QkFDRDs7QUFBTyxtQkFDUDtnQ0FBQSxBQUFDOztrQ0FBRDtvQ0FBQSxBQUNBO0FBREE7QUFBQSxtQ0FDQSxjQUFBOztrQ0FBQTtvQ0FBQTtBQUFBO0FBQUEsbUJBREEsQUFDQSxBQUVILHVDQUFBLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQixVQUFVLE9BQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUE3QyxBQUFtRDtrQ0FBbkQ7b0NBQUEsQUFDSTtBQURKO21DQUNLLGNBQUQsc0JBQUEsQUFBTTs7a0NBQU47b0NBQUEsQUFDQTtBQURBO0FBQUEsbUNBQ0EsY0FBQTs7a0NBQUE7b0NBQUE7QUFBQTtBQUFBLG1CQURBLEFBQ0EsQUFDQSx5Q0FBQSxBQUFDLHdDQUFNLE9BQVAsQUFBYyxBQUNkO2lDQURBLEFBQ1ksQUFDWjttQ0FGQSxBQUVlLEFBQ2Y7MkJBQVEsS0FBQSxBQUFLLE1BSGIsQUFHbUIsQUFDbkI7OEJBQVUseUJBQUE7K0JBQVMsT0FBQSxBQUFLLFNBQVMsRUFBQyxxQkFBcUIsTUFBQSxBQUFNLE9BQW5ELEFBQVMsQUFBYyxBQUFtQztBQUpwRSxzQkFBQSxBQUk2RTs7a0NBSjdFO29DQUhKLEFBQ0ksQUFFQSxBQU9BO0FBUEE7cUNBT0EsQUFBQywwQ0FBUSxPQUFULE1BQWUsUUFBZixBQUF1QixTQUFRLFNBQVUsS0FBQSxBQUFLLE1BQTlDLEFBQW9EO2tDQUFwRDtvQ0FWSixBQVVJLEFBQ0E7QUFEQTtvQ0FDQSxBQUFDLHlDQUFPLFNBQVcsS0FBQSxBQUFLLE1BQXhCLEFBQThCLFNBQVMsU0FBdkMsTUFBK0MsTUFBL0MsQUFBb0Q7a0NBQXBEO29DQUFBO0FBQUE7bUJBZkQsQUFDQSxBQUdILEFBV0ksQUFNUDs7Ozs7O0FBRUwsQSxBQXZEMEI7O2tCQXVEMUIsQUFBZSIsImZpbGUiOiJuZXcuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvTEUgQy9raWNrc3RhcnQifQ==