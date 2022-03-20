"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Profile_Dashboard_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Profile/Dashboard.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Profile/Dashboard.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      data: {
        nama_sekolah: null,
        visi: null,
        misi: null,
        alamat: null,
        email: null,
        website: null,
        no_tlp: null
      },
      id_data: 1
    };
  },
  methods: {
    loadProfile: function loadProfile() {
      var _this = this;

      this.$store.dispatch("profile/public", this.id_data).then(function (result) {
        _this.data.nama_sekolah = result.nama_sekolah;
        _this.data.visi = result.visi;
        _this.data.misi = result.misi;
        _this.data.alamat = result.alamat;
        _this.data.email = result.email;
        _this.data.website = result.website;
        _this.data.no_tlp = result.no_tlp;
        console.log("profile:", result);
      })["catch"](function (e) {
        return console.log(e);
      });
    }
  },
  beforeMount: function beforeMount() {
    this.loadProfile();
  },
  computed: {
    user: function user() {
      return JSON.parse(localStorage.getItem("user")) || null;
    }
  }
});

/***/ }),

/***/ "./resources/js/views/Profile/Dashboard.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/Profile/Dashboard.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Dashboard_vue_vue_type_template_id_ca4c6902___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=ca4c6902& */ "./resources/js/views/Profile/Dashboard.vue?vue&type=template&id=ca4c6902&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/views/Profile/Dashboard.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_ca4c6902___WEBPACK_IMPORTED_MODULE_0__.render,
  _Dashboard_vue_vue_type_template_id_ca4c6902___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Profile/Dashboard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Profile/Dashboard.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/Profile/Dashboard.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Profile/Dashboard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Profile/Dashboard.vue?vue&type=template&id=ca4c6902&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/Profile/Dashboard.vue?vue&type=template&id=ca4c6902& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_ca4c6902___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_ca4c6902___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_ca4c6902___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=template&id=ca4c6902& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Profile/Dashboard.vue?vue&type=template&id=ca4c6902&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Profile/Dashboard.vue?vue&type=template&id=ca4c6902&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Profile/Dashboard.vue?vue&type=template&id=ca4c6902& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "nav",
      {
        staticClass: "navbar navbar-expand-lg navbar-dark",
        staticStyle: { "background-color": "#1eaaf1" },
      },
      [
        _c(
          "div",
          { staticClass: "container-fluid" },
          [
            _c(
              "a",
              { staticClass: "navbar-brand", attrs: { href: "index.html" } },
              [_vm._v(_vm._s(_vm.data.nama_sekolah))]
            ),
            _vm._v(" "),
            _c(
              "b-collapse",
              { attrs: { id: "nav-collapse", "is-nav": "" } },
              [
                _c(
                  "b-navbar-nav",
                  { staticClass: "ml-auto" },
                  [
                    _c(
                      "b-nav-item-dropdown",
                      {
                        attrs: { right: "", "no-caret": "" },
                        scopedSlots: _vm._u([
                          {
                            key: "button-content",
                            fn: function () {
                              return [
                                _c("span", {
                                  staticClass: "navbar-toggler-icon",
                                }),
                              ]
                            },
                            proxy: true,
                          },
                        ]),
                      },
                      [
                        _vm._v(" "),
                        _vm.user
                          ? _c(
                              "b-dropdown-item",
                              {
                                staticClass: "d-flex align-items-center",
                                attrs: { to: "/dashboard" },
                              },
                              [
                                _vm._v(
                                  "\n              Dashboard\n            "
                                ),
                              ]
                            )
                          : _c(
                              "b-dropdown-item",
                              {
                                staticClass: "d-flex align-items-center",
                                attrs: { to: "/login" },
                              },
                              [_vm._v("\n              Login\n            ")]
                            ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
          ],
          1
        ),
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "container-fluid" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-sm bg-white" }, [
          _c("div", { staticClass: "media-body p-4 mt-2 text-center" }, [
            _c("h4", { staticClass: "heading" }, [
              _vm._v("VISI dan MISI SEKOLAH"),
            ]),
            _vm._v(" "),
            _c("img", {
              attrs: { src: "asset/image/icon/LOGO-SMA.png", alt: "" },
            }),
            _c("br"),
            _c("br"),
            _vm._v(" "),
            _c("div", { staticClass: "container mt-3" }, [
              _c("div", { staticClass: "d-flex justify-content-center mb-3" }, [
                _c("div", { staticClass: "p-2" }, [
                  _c("h4", { staticClass: "heading text-info" }, [
                    _vm._v(
                      "\n                  Visi " +
                        _vm._s(_vm.data.nama_sekolah) +
                        "\n                "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("p", [_vm._v("“ " + _vm._s(_vm.data.visi) + " ”")]),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "d-flex justify-content-center mb-3" }, [
                _c("div", { staticClass: "p-2" }, [
                  _c("h4", { staticClass: "heading text-info" }, [
                    _vm._v(
                      "\n                  Misi " +
                        _vm._s(_vm.data.nama_sekolah) +
                        "\n                "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("p", [_vm._v("“ " + _vm._s(_vm.data.misi) + " ”")]),
                ]),
              ]),
            ]),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm bg-light" }, [
          _c("div", { staticClass: "media-body p-4 mt-2 text-center" }, [
            _c("h4", { staticClass: "heading" }, [
              _vm._v(_vm._s(_vm.data.nama_sekolah)),
            ]),
            _vm._v(" "),
            _vm._m(0),
          ]),
        ]),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "container-fluid" }, [
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          {
            staticClass: "col-sm",
            staticStyle: { "background-color": "#1e45f1" },
          },
          [
            _c(
              "div",
              { staticClass: "media-body p-4 mt-2 text-center text-light" },
              [
                _c("h4", { staticClass: "heading" }, [_vm._v("Alamat")]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "\n            " + _vm._s(_vm.data.alamat) + "\n          "
                  ),
                ]),
              ]
            ),
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "col-sm",
            staticStyle: { "background-color": "#8cc152" },
          },
          [
            _c(
              "div",
              { staticClass: "media-body p-4 mt-2 text-center text-light" },
              [
                _c("h4", { staticClass: "heading" }, [_vm._v("Nomor Telp")]),
                _vm._v(" "),
                _c("p", [_vm._v(_vm._s(_vm.data.no_tlp))]),
              ]
            ),
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "col-sm",
            staticStyle: { "background-color": "#5d50c6" },
          },
          [
            _c(
              "div",
              { staticClass: "media-body p-4 mt-2 text-center text-light" },
              [
                _c("h4", { staticClass: "heading" }, [_vm._v("Email Sekolah")]),
                _vm._v(" "),
                _c("p", [_vm._v(_vm._s(_vm.data.email))]),
              ]
            ),
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "col-sm",
            staticStyle: { "background-color": "#f1453d" },
          },
          [
            _c(
              "div",
              { staticClass: "media-body p-4 mt-2 text-center text-light" },
              [
                _c("h4", { staticClass: "heading" }, [_vm._v("Website")]),
                _vm._v(" "),
                _c("p", [_vm._v(_vm._s(_vm.data.website))]),
              ]
            ),
          ]
        ),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "container-fluid" }, [
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          {
            staticClass: "col-sm",
            staticStyle: { "background-color": "#1eaaf1" },
          },
          [
            _c(
              "div",
              { staticClass: "media-body p-4 mt-2 text-center text-light" },
              [_c("p", [_vm._v(_vm._s(_vm.data.nama_sekolah))])]
            ),
          ]
        ),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container-fluid" }, [
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          {
            staticClass: "col-sm",
            staticStyle: { "background-color": "#1eaaf1" },
          },
          [
            _c(
              "div",
              { staticClass: "media-body p-4 mt-2 text-center text-light" },
              [
                _c("img", {
                  staticClass: "rounded",
                  staticStyle: { width: "100px", height: "100px" },
                  attrs: {
                    src: "https://raw.githubusercontent.com/wahyupambudi/simple-school-web/master/asset/image/icon/guru.png",
                    alt: "...",
                  },
                }),
                _vm._v(" "),
                _c("h4", { staticClass: "heading" }, [
                  _vm._v("Guru Profesional"),
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "\n                    Guru yang mampu mendidik anak muridnya menjadi generasi\n                    yang mampu bersaing dan memiliki moral yang baik.\n                  "
                  ),
                ]),
              ]
            ),
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "col-sm",
            staticStyle: { "background-color": "#8cc152" },
          },
          [
            _c(
              "div",
              { staticClass: "media-body p-4 mt-2 text-center text-light" },
              [
                _c("img", {
                  staticClass: "rounded",
                  staticStyle: { width: "100px", height: "100px" },
                  attrs: {
                    src: "https://raw.githubusercontent.com/wahyupambudi/simple-school-web/master/asset/image/icon/belajar.png",
                    alt: "...",
                  },
                }),
                _vm._v(" "),
                _c("h4", { staticClass: "heading" }, [
                  _vm._v("Pembelajaran Khusus"),
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "\n                    Penerapan secara khusus suatu metode pembelajaran yang\n                    telah disesuaikan dengan kemampuan dan kebiasaan siswa.\n                  "
                  ),
                ]),
              ]
            ),
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "col-sm",
            staticStyle: { "background-color": "#5d50c6" },
          },
          [
            _c(
              "div",
              { staticClass: "media-body p-4 mt-2 text-center text-light" },
              [
                _c("img", {
                  staticClass: "rounded",
                  staticStyle: { width: "100px", height: "100px" },
                  attrs: {
                    src: "https://raw.githubusercontent.com/wahyupambudi/simple-school-web/master/asset/image/icon/Buku.png",
                    alt: "...",
                  },
                }),
                _vm._v(" "),
                _c("h4", { staticClass: "heading" }, [
                  _vm._v("Buku & Perpustakaan"),
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "\n                    Buku merupakan bentuk cetakan yang tidak bisa dijauhkan\n                    dari aktivitas belajar mengajar.\n                  "
                  ),
                ]),
              ]
            ),
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "col-sm",
            staticStyle: { "background-color": "#f1453d" },
          },
          [
            _c(
              "div",
              { staticClass: "media-body p-4 mt-2 text-center text-light" },
              [
                _c("img", {
                  staticClass: "rounded",
                  staticStyle: { width: "100px", height: "100px" },
                  attrs: {
                    src: "https://raw.githubusercontent.com/wahyupambudi/simple-school-web/master/asset/image/icon/Akreditasi.png",
                    alt: "...",
                  },
                }),
                _vm._v(" "),
                _c("h4", { staticClass: "heading" }, [_vm._v("Akreditasi")]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "\n                    Terakreditasi A oleh BAN-SM. Suatu bentuk pengakuan\n                    pemerintah terhadap lembaga pendidikan negeri dan swasta.\n                  "
                  ),
                ]),
              ]
            ),
          ]
        ),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);