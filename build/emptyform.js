/**
 * Empty Form ReactJS Component
 * @author Gonzalo Rubino gonzalo_rubino@artear.com
 * @version 1.0.12
 *
 * Use as: <EmptyForm insideForm={<ContentInside />} invalidFormAction="" submitValue="Publish it!" submitAction={this.submit}/>
 *
 * @param {String} formClass The desired class for the form
 * @param {Object} <ContentInside /> A class of ReactJS containing the elements that will be inside the form.
 * @param {Function} submitAction The method to call as a callback, when Submit button is pressed.
 * @param {Function} invalidFormAction When form is invalid, will call this action. Usefull to deactivate a submit button, for example.
 * @param {Function} validFormAction When form is valid, will call this action. Usefull to activate a submit button, for example.
 * @param {String} submitValue The label for the Submit button
 */
/* Based on: https://github.com/twisty/formsy-react-components/blob/gh-pages/playground/src/app.js */
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _formsyReact = require("formsy-react");

var _formsyReact2 = _interopRequireDefault(_formsyReact);

var _formsyReactComponents = require("formsy-react-components");

var _formsyReactComponents2 = _interopRequireDefault(_formsyReactComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EmptyForm = function (_React$Component) {
    _inherits(EmptyForm, _React$Component);

    function EmptyForm(props) {
        _classCallCheck(this, EmptyForm);

        return _possibleConstructorReturn(this, (EmptyForm.__proto__ || Object.getPrototypeOf(EmptyForm)).call(this, props));
    }

    _createClass(EmptyForm, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                _formsyReact2.default.Form,
                {
                    className: this.props.formClass,
                    ref: "emptyform",
                    onSubmit: this.props.submitAction,
                    onInvalid: this.props.invalidFormAction,
                    onValid: this.props.validFormAction },
                this.props.insideForm
            );
        }
    }]);

    return EmptyForm;
}(_react2.default.Component);

exports.default = EmptyForm;
;