webpackHotUpdate("static\\development\\pages\\admin.js",{

/***/ "./components/product-page.js":
/*!************************************!*\
  !*** ./components/product-page.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _product_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-card */ "./components/product-card.js");
/* harmony import */ var _services_ProductService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/ProductService */ "./services/ProductService.js");
/* harmony import */ var _product_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product-form */ "./components/product-form.js");





var _jsxFileName = "C:\\apache\\ecommerce\\front\\components\\product-page.js";





var ProductPage =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ProductPage, _React$Component);

  function ProductPage(props, productService) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ProductPage);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ProductPage).call(this));
    _this.productService = productService;
    _this.state = {
      products: [],
      isOpenProductForm: false
    };

    _this.refreshProducts();

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ProductPage, [{
    key: "refreshProducts",
    value: function refreshProducts() {
      var _this2 = this;

      this.productService.getList().then(function (data) {
        _this2.setState({
          products: data
        });
      });
    }
  }, {
    key: "getProducts",
    value: function getProducts() {
      return this.state.products;
    }
  }, {
    key: "handleCreateProductClick",
    value: function handleCreateProductClick() {
      this.setState({
        isOpenProductForm: true
      });
    }
  }, {
    key: "getProductForm",
    value: function getProductForm() {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_product_form__WEBPACK_IMPORTED_MODULE_8__["default"], {
        handleForm: function handleForm(e) {
          _this3.handleForm(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }));
    }
  }, {
    key: "handleForm",
    value: function handleForm(e) {
      var _this4 = this;

      if (e.isSubmit) {
        _services_ProductService__WEBPACK_IMPORTED_MODULE_7__["default"].create(e.data).then(function (data) {
          _this4.setState({
            isOpenProductForm: false
          });

          if (data.id) {
            var products = _this4.state.products.slice();

            products.push(data);

            _this4.setState({
              products: products
            });
          }
        });
      } else {
        this.setState({
          isOpenProductForm: false
        });
      }
    }
  }, {
    key: "getProductsOverview",
    value: function getProductsOverview() {
      var _this5 = this;

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "button-list pb-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        className: "btn btn-info",
        onClick: function onClick() {
          return _this5.handleCreateProductClick();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "Create product")), this.getProducts().map(function (value, index) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_product_card__WEBPACK_IMPORTED_MODULE_6__["default"], {
          key: value.id,
          name: value.name,
          description: value.description,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          },
          __self: this
        });
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var view;

      if (this.state.isOpenProductForm) {
        view = this.getProductForm();
      } else {
        view = this.getProductsOverview();
      }

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, view);
    }
  }]);

  return ProductPage;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ProductPage);

/***/ })

})
//# sourceMappingURL=admin.js.e42f209061a55ed33b35.hot-update.js.map