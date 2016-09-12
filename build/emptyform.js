/**
 * Empty Form ReactJS Component
 * @author Gonzalo Rubino gonzalo_rubino@artear.com
 * @version 1.0
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

var EmptyFormBase = _react2.default.createClass({
    displayName: "EmptyFormBase",

    mixins: [_formsyReactComponents2.default.ParentContextMixin],

    propTypes: {
        children: _react2.default.PropTypes.node
    },

    render: function render() {
        return _react2.default.createElement(
            _formsyReact2.default.Form,
            { className: this.props.className, ref: "empty_form", onSubmit: this.props.onSubmit },
            this.props.children
        );
    }
});

var EmptyForm = function (_React$Component) {
    _inherits(EmptyForm, _React$Component);

    function EmptyForm(props) {
        _classCallCheck(this, EmptyForm);

        // Default state
        var _this = _possibleConstructorReturn(this, (EmptyForm.__proto__ || Object.getPrototypeOf(EmptyForm)).call(this, props));

        _this.state = {
            getclass: 'tnylg-publish form-vertical'
        };
        return _this;
    }

    _createClass(EmptyForm, [{
        key: "changeOption",
        value: function changeOption(name, value) {
            var newState = {};
            newState[name] = value;
            this.setState(newState);
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                EmptyFormBase,
                { onSubmit: this.props.submitAction, ref: "empty_form", className: this.state.getclass },
                this.props.insideForm,
                _react2.default.createElement("input", { className: "btn btn-primary", type: "submit", defaultValue: this.props.submitValue })
            );
        }
    }]);

    return EmptyForm;
}(_react2.default.Component);

exports.default = EmptyForm;
;