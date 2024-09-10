/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./gutenberg/components/background-color/attributes.js":
/*!*************************************************************!*\
  !*** ./gutenberg/components/background-color/attributes.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Set the attributes to be displayed in the Spacing Options panel.
 * @type {Object}
 */

const BlockBackgroundColor = {
  type: 'string',
  default: ''
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockBackgroundColor);

/***/ }),

/***/ "./gutenberg/components/background-color/bundle.js":
/*!*********************************************************!*\
  !*** ./gutenberg/components/background-color/bundle.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BackgroundColorComponent: () => (/* binding */ BackgroundColorComponent)
/* harmony export */ });
/* harmony import */ var _components_background_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/background-color */ "./gutenberg/components/background-color/index.js");
/* harmony import */ var _components_background_color_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/background-color/options */ "./gutenberg/components/background-color/options.js");
// Import Background Color Component



const BackgroundColorComponent = {
  BlockBackgroundColor: {
    BlockBackgroundColor: _components_background_color__WEBPACK_IMPORTED_MODULE_0__.BlockBackgroundColor
  },
  renderBackgroundOptions: _components_background_color__WEBPACK_IMPORTED_MODULE_0__["default"],
  BACKGROUND_OPTIONS: _components_background_color_options__WEBPACK_IMPORTED_MODULE_1__["default"]
};

/***/ }),

/***/ "./gutenberg/components/background-color/index.js":
/*!********************************************************!*\
  !*** ./gutenberg/components/background-color/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlockBackgroundColor: () => (/* reexport safe */ _attributes__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attributes */ "./gutenberg/components/background-color/attributes.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
// WordPress dependencies
const {
  PanelBody,
  SelectControl
} = wp.components;

// Import localization library
const {
  __
} = wp.i18n;

// Internal dependencies


/**
 * Render Spacing Options Component
 * 
 * @param {Object} props - Block props Object
 * @param {String} domain - Block domain
 * @param {Array} backgroundOptions - Array of predefined background color options
 * 
 * @returns {ReactComponent} - Spacing Options React Component
 */

function renderBackgroundOptions(props, domain, backgroundOptions) {
  // Destructure props object to reach setAttributes function
  const {
    setAttributes
  } = props;

  // Destructure all spacing attributes
  let {
    BlockBackgroundColor
  } = props.attributes;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(PanelBody, {
      title: __('Background settings'),
      initialOpen: false,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "tr-settings-box",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SelectControl, {
          label: __('Chose background', domain),
          value: BlockBackgroundColor,
          options: backgroundOptions,
          onChange: value => setAttributes({
            BlockBackgroundColor: value
          })
        })
      })
    })
  });
}

// Export for ease of importing in individual blocks.

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderBackgroundOptions);

/***/ }),

/***/ "./gutenberg/components/background-color/options.js":
/*!**********************************************************!*\
  !*** ./gutenberg/components/background-color/options.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * All spacing options sorted by device
 * @type {Object}
 */
const BACKGROUND_OPTIONS = [{
  label: "--",
  value: ""
}, {
  label: "White",
  value: "bg-white"
}, {
  label: "Navy Blue",
  value: "bg-navy-blue"
}, {
  label: "Navy Light Blue",
  value: "bg-navy-light-blue"
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BACKGROUND_OPTIONS);

/***/ }),

/***/ "./gutenberg/components/global-functions/functions.js":
/*!************************************************************!*\
  !*** ./gutenberg/components/global-functions/functions.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getInnerBlocksContent: () => (/* binding */ getInnerBlocksContent),
/* harmony export */   getObjectValues: () => (/* binding */ getObjectValues),
/* harmony export */   getSpacingValues: () => (/* binding */ getSpacingValues)
/* harmony export */ });
/**
 * Get object values
 * 
 * @param {Object} object - Object which values will be returned
 * 
 * @returns {Array} - Array of all object values
 */
const getObjectValues = object => Object.values(object).map(item => item).join(' ');

/**
 * Get spacing object values
 * 
 * @param {Object} object - Get Spacing values from object
 * 
 * @returns {Array} - Array of all spacing values extracted from the object
 */
const getSpacingValues = object => {
  // Fields to keep from original object
  const fieldsToKeep = ["BlockMarginBottomDesktop", "BlockMarginBottomMobile", "BlockMarginBottomTablet", "BlockMarginTopDesktop", "BlockMarginTopMobile", "BlockMarginTopTablet", "BlockPaddingBottomDesktop", "BlockPaddingBottomMobile", "BlockPaddingBottomTablet", "BlockPaddingTopDesktop", "BlockPaddingTopMobile", "BlockPaddingTopTablet"];

  // Reduce the original object to a new object containing only the specified fields
  const spacingObject = fieldsToKeep.reduce((filteredObj, key) => {
    if (object.hasOwnProperty(key)) filteredObj[key] = object[key];
    return filteredObj;
  }, {});
  return getObjectValues(spacingObject);
};

/**
 * Get Content Of All Inner Blocks inside Single Block
 * 
 * @param {String} clientID - ID of Block in which inner blocks are
 * 
 * @return {String} - Inner Blocks Content
 */
function getInnerBlocksContent(clientID) {
  // Inner Blocks Content
  let innerBlocksContent;

  // Import WordPress functions
  const {
    useSelect
  } = wp.data;

  // Get ALL Inner Blocks
  const innerBlocks = useSelect(select => {
    const {
      getBlocks
    } = select('core/block-editor');
    return getBlocks(clientID);
  }, [clientID]);

  // Get content of all inner blocks
  innerBlocks.forEach(block => innerBlocksContent += block.attributes.content);
  return innerBlocksContent;
}


/***/ }),

/***/ "./gutenberg/components/spacings/attributes.js":
/*!*****************************************************!*\
  !*** ./gutenberg/components/spacings/attributes.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Set the attributes to be displayed in the Spacing Options panel.
 * @type {Object}
 */

const BlockSpacingAttributes = {
  BlockMarginTopMobile: {
    type: 'string',
    default: ''
  },
  BlockMarginTopTablet: {
    type: 'string',
    default: ''
  },
  BlockMarginTopDesktop: {
    type: 'string',
    default: ''
  },
  BlockMarginBottomMobile: {
    type: 'string',
    default: ''
  },
  BlockMarginBottomTablet: {
    type: 'string',
    default: ''
  },
  BlockMarginBottomDesktop: {
    type: 'string',
    default: ''
  },
  BlockPaddingTopMobile: {
    type: 'string',
    default: ''
  },
  BlockPaddingTopTablet: {
    type: 'string',
    default: ''
  },
  BlockPaddingTopDesktop: {
    type: 'string',
    default: ''
  },
  BlockPaddingBottomMobile: {
    type: 'string',
    default: ''
  },
  BlockPaddingBottomTablet: {
    type: 'string',
    default: ''
  },
  BlockPaddingBottomDesktop: {
    type: 'string',
    default: ''
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockSpacingAttributes);

/***/ }),

/***/ "./gutenberg/components/spacings/index.js":
/*!************************************************!*\
  !*** ./gutenberg/components/spacings/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlockSpacingAttributes: () => (/* reexport safe */ _attributes__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attributes */ "./gutenberg/components/spacings/attributes.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
// WordPress dependencies
const {
  PanelBody,
  TabPanel,
  SelectControl
} = wp.components;

// Import localization library
const {
  __
} = wp.i18n;

// Internal dependencies


/**
 * Render Spacing Options Component
 * 
 * @param {Object} props - Block props Object
 * @param {String} domain - Block domain
 * @param {Array} spacingOptions - Array of predefined spacing options
 * 
 * @returns {ReactComponent} - Spacing Options React Component
 */

function renderSpacingOptions(props, domain, spacingOptions) {
  // Destructure props object to reach setAttributes function
  const {
    setAttributes
  } = props;

  // Destructure all spacing attributes
  let {
    BlockMarginTopMobile,
    BlockMarginTopTablet,
    BlockMarginTopDesktop,
    BlockMarginBottomMobile,
    BlockMarginBottomTablet,
    BlockMarginBottomDesktop,
    BlockPaddingTopMobile,
    BlockPaddingTopTablet,
    BlockPaddingTopDesktop,
    BlockPaddingBottomMobile,
    BlockPaddingBottomTablet,
    BlockPaddingBottomDesktop
  } = props.attributes;

  /**
   * Construct options for <SelectControl> react components
   * 
   * @param {Array} values - Array of values that will be passed to SelectControl Component
   * @param {String} property - Property that will be used to construct values
   * @param {String} device  - Property that will be used to construct values
   * 
   * @returns {Array} - Array of select options
   */
  function constructSelectOptions(values, property, device) {
    // Initial value - will be always present as one of the options
    const options = [{
      label: '--',
      value: ''
    }];

    // Fill array of values
    values.forEach(value => options.push({
      label: value,
      value: `${property}-${value}--${device}`
    }));
    return options;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(PanelBody, {
      title: __('Spacing Settings', domain),
      initialOpen: false,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "tr-settings-box",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TabPanel, {
          className: "spacing-tab-panel",
          activeClass: "active-tab",
          tabs: [{
            name: 'mobile-spacing',
            title: 'Mobile',
            className: 'tab-one'
          }, {
            name: 'tablet-spacing',
            title: 'Tablet',
            className: 'tab-two'
          }, {
            name: 'desktop-spacing',
            title: 'Desktop',
            className: 'tab-three'
          }],
          children: tab => {
            var elementToDisplay;
            switch (tab.name) {
              case "mobile-spacing":
                elementToDisplay = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                    className: "tr-settings-box",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("strong", {
                        children: __('Margin', domain)
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SelectControl, {
                      label: __('Top', domain),
                      value: BlockMarginTopMobile,
                      options: constructSelectOptions(spacingOptions.mobile, "margin-top", "mobile"),
                      onChange: value => setAttributes({
                        BlockMarginTopMobile: value
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SelectControl, {
                      label: __('Bottom', domain),
                      value: BlockMarginBottomMobile,
                      options: constructSelectOptions(spacingOptions.mobile, "margin-bottom", "mobile"),
                      onChange: value => setAttributes({
                        BlockMarginBottomMobile: value
                      })
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                    className: "tr-settings-box",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("strong", {
                        children: __('Padding', domain)
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SelectControl, {
                      label: __('Top', domain),
                      value: BlockPaddingTopMobile,
                      options: constructSelectOptions(spacingOptions.mobile, "padding-top", "mobile"),
                      onChange: value => setAttributes({
                        BlockPaddingTopMobile: value
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SelectControl, {
                      label: __('Bottom', domain),
                      value: BlockPaddingBottomMobile,
                      options: constructSelectOptions(spacingOptions.mobile, "padding-bottom", "mobile"),
                      onChange: value => setAttributes({
                        BlockPaddingBottomMobile: value
                      })
                    })]
                  })]
                });
                break;
              case "tablet-spacing":
                elementToDisplay = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                    className: "tr-settings-box",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("strong", {
                        children: __('Margin', domain)
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SelectControl, {
                      label: __('Top', domain),
                      value: BlockMarginTopTablet,
                      options: constructSelectOptions(spacingOptions.tablet, "margin-top", "tablet"),
                      onChange: value => setAttributes({
                        BlockMarginTopTablet: value
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SelectControl, {
                      label: __('Bottom', domain),
                      value: BlockMarginBottomTablet,
                      options: constructSelectOptions(spacingOptions.tablet, "margin-bottom", "tablet"),
                      onChange: value => setAttributes({
                        BlockMarginBottomTablet: value
                      })
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                    className: "tr-settings-box",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("strong", {
                        children: __('Padding', domain)
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SelectControl, {
                      label: __('Top', domain),
                      value: BlockPaddingTopTablet,
                      options: constructSelectOptions(spacingOptions.tablet, "padding-top", "tablet"),
                      onChange: value => setAttributes({
                        BlockPaddingTopTablet: value
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SelectControl, {
                      label: __('Bottom', domain),
                      value: BlockPaddingBottomTablet,
                      options: constructSelectOptions(spacingOptions.tablet, "padding-bottom", "tablet"),
                      onChange: value => setAttributes({
                        BlockPaddingBottomTablet: value
                      })
                    })]
                  })]
                });
                break;
              case "desktop-spacing":
                elementToDisplay = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                    className: "tr-settings-box",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("strong", {
                        children: __('Margin', domain)
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SelectControl, {
                      label: __('Top', domain),
                      value: BlockMarginTopDesktop,
                      options: constructSelectOptions(spacingOptions.desktop, "margin-top", "desktop"),
                      onChange: value => setAttributes({
                        BlockMarginTopDesktop: value
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SelectControl, {
                      label: __('Bottom', domain),
                      value: BlockMarginBottomDesktop,
                      options: constructSelectOptions(spacingOptions.desktop, "margin-bottom", "desktop"),
                      onChange: value => setAttributes({
                        BlockMarginBottomDesktop: value
                      })
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                    className: "tr-settings-box",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("strong", {
                        children: __('Padding', domain)
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SelectControl, {
                      label: __('Top', domain),
                      value: BlockPaddingTopDesktop,
                      options: constructSelectOptions(spacingOptions.desktop, "padding-top", "desktop"),
                      onChange: value => setAttributes({
                        BlockPaddingTopDesktop: value
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SelectControl, {
                      label: __('Bottom', domain),
                      value: BlockPaddingBottomDesktop,
                      options: constructSelectOptions(spacingOptions.desktop, "padding-bottom", "desktop"),
                      onChange: value => setAttributes({
                        BlockPaddingBottomDesktop: value
                      })
                    })]
                  })]
                });
                break;
            }
            return elementToDisplay;
          }
        })
      })
    })
  });
}

// Export for ease of importing in individual blocks.

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderSpacingOptions);

/***/ }),

/***/ "./gutenberg/components/spacings/options.js":
/*!**************************************************!*\
  !*** ./gutenberg/components/spacings/options.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * All spacing options sorted by device
 * @type {Object}
 */
const SPACING_OPTIONS = {
  mobile: [0, 50, 100, 150, 200],
  tablet: [0, 50, 100, 150, 200],
  desktop: [0, 50, 100, 150, 200]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SPACING_OPTIONS);

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!***************************************!*\
  !*** ./gutenberg/blocks/text/text.js ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_spacings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/spacings */ "./gutenberg/components/spacings/index.js");
/* harmony import */ var _components_spacings_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/spacings/options */ "./gutenberg/components/spacings/options.js");
/* harmony import */ var _components_global_functions_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/global-functions/functions */ "./gutenberg/components/global-functions/functions.js");
/* harmony import */ var _components_background_color_bundle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/background-color/bundle */ "./gutenberg/components/background-color/bundle.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
// Import WordPress blocks library
const {
  registerBlockType
} = wp.blocks;

// Import localization library
const {
  __
} = wp.i18n;

// Import WordPress editor controls
const {
  InspectorControls,
  RichText,
  InnerBlocks,
  MediaUpload
} = wp.blockEditor;

// Import WordPress Components
const {
  PanelBody,
  SelectControl,
  ToggleControl,
  IconButton
} = wp.components;

// Define Allowed Blocks
const ALLOWED_BLOCKS = ['core/freeform'];

// Get custom attributes
const customAttributes = custom_attributes;

// Define template for nested blocks
const TEMPLATE = [['core/freeform', {
  fontSize: '1.25em',
  placeholder: 'Insert content.'
}]];
const domain = customAttributes.domain;

// Import Spacing Component





// Import Background Color Component


const {
  BlockBackgroundColor,
  renderBackgroundOptions,
  BACKGROUND_OPTIONS
} = _components_background_color_bundle__WEBPACK_IMPORTED_MODULE_3__.BackgroundColorComponent;
registerBlockType(`${customAttributes.domain}/${customAttributes.name}`, {
  title: customAttributes.title,
  description: customAttributes.description,
  icon: customAttributes.icon,
  category: customAttributes.category,
  attributes: {
    BlockTitleTag: {
      type: 'string',
      default: 'h2'
    },
    BlockTitle: {
      type: 'string',
      source: 'html',
      selector: '.rich-block-title'
    },
    BlockSubtitle: {
      type: 'string',
      source: 'html',
      selector: '.rich-block-subtitle'
    },
    BlockBackgroundColor,
    // Imported as a component
    BlockContainerWidth: {
      type: 'string',
      default: 'wide'
    },
    BlockDecorationImage: {
      type: 'object',
      default: null
    },
    BlockContentAligment: {
      type: 'string',
      default: ''
    },
    BlockCtaToggle: {
      type: 'boolean',
      default: false
    },
    BlockCtaLabel: {
      type: 'text'
    },
    BlockCtaUrl: {
      type: 'string'
    },
    BlockCtaTarget: {
      type: 'string',
      default: '_self'
    },
    BlockCtaRel: {
      type: 'string',
      default: null
    },
    BlockCtaCustomClass: {
      type: 'string',
      default: ''
    },
    BlockCtaClass: {
      type: 'string',
      default: 'button button--primary'
    },
    BlockCtaAligment: {
      type: 'string',
      default: ' text-left'
    },
    ..._components_spacings__WEBPACK_IMPORTED_MODULE_0__.BlockSpacingAttributes
  },
  /**
   * Edit custom block
   * 
   * @param {object} attributes
   * @param {method} setAttributes
   * 
   * @return {mixed}
   */
  edit: props => {
    const {
      attributes,
      setAttributes
    } = props;

    // Set attributes
    const {
      BlockContainerWidth,
      BlockBackgroundColor,
      BlockTitleTag,
      BlockTitle,
      BlockSubtitle,
      BlockDecorationImage,
      BlockContentAligment,
      BlockCtaToggle,
      BlockCtaLabel,
      BlockCtaUrl,
      BlockCtaTarget,
      BlockCtaRel,
      BlockCtaCustomClass,
      BlockCtaClass,
      BlockCtaAligment,
      ...BlockSpacingAttributes
    } = attributes;

    /* General */

    /**
     * Save BlockContainerWidth attribute
     *
     * @param {string}  newBlockContainerWidth
    * 
    * @return {void}
    */
    const onSelectBlockContainerWidth = newBlockContainerWidth => {
      setAttributes({
        BlockContainerWidth: newBlockContainerWidth
      });
    };

    /* Title */

    /**
     * Save BlockTitleTag attribute
     * 
     * @param {string} newBlockTitleTag
     * 
     * @return {void} 
     */
    const onSelectBlockTitleTag = newBlockTitleTag => {
      setAttributes({
        BlockTitleTag: newBlockTitleTag
      });
    };

    /**
    * Save BlockTitle attribute
    * 
    * @param {string} newBlockTitle
    * 
    * @return {void}
    */
    const onChangeBlockTitle = newBlockTitle => {
      // Check is only empty markup generated by RichText control
      if (newBlockTitle == '<p></p>') {
        setAttributes({
          BlockTitle: null
        });
      } else {
        setAttributes({
          BlockTitle: newBlockTitle
        });
      }
    };

    /**
     * Save BlockSubtitle attribute
     * 
     * @param {string} newBlockSubtitle
     * 
     * @return {void}
     */
    const onChangeBlockSubtitle = newBlockSubtitle => {
      // Check is only empty markup generated by RichText control
      if (newBlockSubtitle == '<p></p>') {
        setAttributes({
          BlockSubtitle: null
        });
      } else {
        setAttributes({
          BlockSubtitle: newBlockSubtitle
        });
      }
    };

    /* Media */

    /**
     * Save BlockDecorationImage attribute
     * 
     * @param {object} newBlockDecorationImage
     * 
     * @return {void} 
     */
    const onSelectBlockDecorationImage = newBlockDecorationImage => {
      setAttributes({
        BlockDecorationImage: newBlockDecorationImage
      });
    };

    /**
     * Create BlockDecorationImage preview
     * 
     * @param {object} BlockDecorationImage
     * 
     * @return {mixed}
     */
    const BlockDecorationImagePreview = BlockDecorationImage => {
      if (BlockDecorationImage) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "custom-block-main-image-preview",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
            src: BlockDecorationImage.url
          })
        });
      }
      return null;
    };

    /**
     * Create button for deleting BlockDecorationImage attribute
     * 
     * @param {object} BlockDecorationImage
     * 
     * @return {mixed}
     */
    const ButtonRemoveBlockDecorationImage = BlockDecorationImage => {
      if (BlockDecorationImage) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(IconButton, {
          onClick: onClickRemoveBlockDecorationImage,
          icon: "dismiss",
          className: "editor-media-placeholder__button is-button is-default is-large",
          children: __('Remove Block Image', domain)
        });
      }
      return null;
    };

    /**
     * Delete Image attribute
     * 
     * @return {void} 
     */
    const onClickRemoveBlockDecorationImage = () => {
      setAttributes({
        BlockDecorationImage: null
      });
    };

    /* Aligment */

    /**
     * Save BlockContentAligment attribute
     * 
     * @param {string} newBlockContentAligment
     * 
     * @return {void} 
     */
    const onSelectBlockContentAligment = newBlockContentAligment => {
      setAttributes({
        BlockContentAligment: newBlockContentAligment
      });
    };

    /* Navigation */

    /**
     * Save BlockCtaLabel attribute
     * 
     * @param {object} event
     * 
     * @return {void}
     */
    const onChangeBlockCtaLabel = event => {
      setAttributes({
        BlockCtaLabel: event.target.value
      });
    };

    /**
     * Save BlockCtaUrl attribute
     * 
     * @param {object} event
     * 
     * @return {void}
     */
    const onChangeBlockCtaUrl = event => {
      setAttributes({
        BlockCtaUrl: event.target.value
      });
    };

    /**
     * Save BlockCtaTarget attribute
     * 
     * @param {string}  BlockCtaTarget
     * 
     * @return {void}
     */
    const onSelectBlockCtaTarget = newBlockCtaTarget => {
      if (BlockCtaTarget === '_blank') {
        setAttributes({
          BlockCtaRel: 'noopener noreferrer'
        });
      }
      setAttributes({
        BlockCtaTarget: newBlockCtaTarget
      });
    };

    /**
     * Save BlockCtaCustomClass attribute
     * 
     * @param {object}
     * 
     * @return {void}
     */
    const onChangeBlockCtaCustomClass = event => {
      setAttributes({
        BlockCtaCustomClass: event.target.value
      });
    };

    /**
     * Save BlockCtaClass attribute
     * 
     * @param {string} newBlockCtaClass
     * 
     * @return {void}
     */
    const onSelectBlockCtaClass = newBlockCtaClass => {
      setAttributes({
        BlockCtaClass: newBlockCtaClass
      });
    };

    /**
     * Save BlockCtaAligment attribute
     * 
     * @param {string} newBlockCtaAligment
     * 
     * @return {void} 
     */
    const onSelectBlockCtaAligment = newBlockCtaAligment => {
      setAttributes({
        BlockCtaAligment: newBlockCtaAligment
      });
    };
    return [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(InspectorControls, {
      style: {
        marginBottom: '40px'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(PanelBody, {
        title: __('Heading Settings', domain),
        initialOpen: false,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "tr-settings-box",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(SelectControl, {
            label: __('Heading tag', domain),
            value: BlockTitleTag,
            options: [{
              label: __('h1', domain),
              value: 'h1'
            }, {
              label: __('h2', domain),
              value: 'h2'
            }, {
              label: __('h3', domain),
              value: 'h3'
            }, {
              label: __('h4', domain),
              value: 'h4'
            }, {
              label: __('h5', domain),
              value: 'h5'
            }, {
              label: __('h6', domain),
              value: 'h6'
            }],
            onChange: onSelectBlockTitleTag
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(PanelBody, {
        title: __('Layout Settings', domain),
        initialOpen: false,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "tr-settings-box",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(SelectControl, {
            label: __('Chose layout width', domain),
            value: BlockContainerWidth,
            options: [{
              label: __('Wide', domain),
              value: 'container-wide'
            }, {
              label: __('Narrow', domain),
              value: 'container-narrow'
            }, {
              label: __('Medium Narrow', domain),
              value: 'container-medium-narrow'
            }, {
              label: __('Extra Narrow', domain),
              value: 'container-extra-narrow'
            }],
            onChange: onSelectBlockContainerWidth
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(PanelBody, {
        title: __('Media', domain),
        initialOpen: false,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "tr-media-upload-box",
          style: {
            marginBottom: '40px'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(MediaUpload, {
            onSelect: onSelectBlockDecorationImage,
            type: "image",
            value: BlockDecorationImage,
            render: ({
              open
            }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(IconButton, {
              onClick: open,
              icon: "upload",
              className: "editor-media-placeholder__button is-button is-default is-large",
              children: __('Decoration Image', domain)
            })
          }), BlockDecorationImagePreview(BlockDecorationImage, BlockDecorationImage), ButtonRemoveBlockDecorationImage(BlockDecorationImage)]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(PanelBody, {
        title: __('Navigation settings', domain),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "tr-settings-box",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ToggleControl, {
            label: __('Show CTA button', domain),
            checked: BlockCtaToggle,
            onChange: () => setAttributes({
              BlockCtaToggle: !BlockCtaToggle
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "tr-settings-box",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("strong", {
              children: __('Set Label', domain)
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
            value: BlockCtaLabel,
            type: "text",
            onChange: onChangeBlockCtaLabel
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "tr-settings-box",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("strong", {
              children: __('Set URL', domain)
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
            value: BlockCtaUrl,
            type: "text",
            onChange: onChangeBlockCtaUrl
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "tr-settings-box",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(SelectControl, {
            label: __('Open in new window', domain),
            value: BlockCtaTarget,
            options: [{
              label: 'No',
              value: '_self'
            }, {
              label: 'Yes',
              value: '_blank'
            }],
            onChange: onSelectBlockCtaTarget
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "tr-settings-box",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("strong", {
              children: __('Set Custom Class', domain)
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
            value: BlockCtaCustomClass,
            type: "text",
            onChange: onChangeBlockCtaCustomClass
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "tr-settings-box",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(SelectControl, {
            label: __('Set Style', domain),
            value: BlockCtaClass,
            options: [{
              label: 'Primary',
              value: 'button button--primary'
            }, {
              label: 'Secondary',
              value: 'button button--secondary'
            }],
            onChange: onSelectBlockCtaClass
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "tr-settings-box",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(SelectControl, {
            label: __('Alignment', domain),
            value: BlockCtaAligment,
            options: [{
              label: 'Left',
              value: ' text-left'
            }, {
              label: 'Center',
              value: ' text-center'
            }, {
              label: 'Right',
              value: ' text-right'
            }],
            onChange: onSelectBlockCtaAligment
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(PanelBody, {
        title: __('Alignment settings', domain),
        initialOpen: false,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "tr-settings-box",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(SelectControl, {
            label: __('Content', domain),
            value: BlockContentAligment,
            options: [{
              label: 'Left',
              value: ''
            }, {
              label: 'Right',
              value: ' content-right'
            }],
            onChange: onSelectBlockContentAligment
          })
        })
      }), (0,_components_spacings__WEBPACK_IMPORTED_MODULE_0__["default"])(props, domain, _components_spacings_options__WEBPACK_IMPORTED_MODULE_1__["default"]), renderBackgroundOptions(props, domain, BACKGROUND_OPTIONS)]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "admin-control-box",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "admin-block-title",
        children: __(customAttributes.title, domain)
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "admin-block-description",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("label", {
          children: [" ", __(customAttributes.description, domain), " "]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "tr-form-row",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("label", {
          children: [__('Title', domain), ":"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(RichText, {
          tagName: BlockTitleTag,
          className: "rich-block-title",
          placeholder: __('Insert title', domain),
          format: "string",
          allowedFormats: [],
          value: BlockTitle,
          onChange: onChangeBlockTitle
        }, "editable")]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "tr-form-row",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("label", {
          children: [__('Subtitle', domain), ":"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(RichText, {
          tagName: "h4",
          className: "rich-block-subtitle",
          placeholder: __('Insert Subtitle', domain),
          format: "string",
          value: BlockSubtitle,
          onChange: onChangeBlockSubtitle
        }, "editable")]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "tr-form-row",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("label", {
          children: [__('Block Content', domain), ":"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(InnerBlocks, {
          allowedBlocks: ALLOWED_BLOCKS,
          template: TEMPLATE,
          templateLock: "all"
        })]
      })]
    })];
  },
  /**
   * Save custom block
   * 
   * @param {object} attribute
   * 
   * @return {mixed}
   */
  save: ({
    attributes
  }) => {
    const {
      BlockContainerWidth,
      BlockBackgroundColor,
      BlockTitleTag,
      BlockTitle,
      BlockSubtitle,
      BlockDecorationImage,
      BlockContentAligment,
      BlockCtaToggle,
      BlockCtaLabel,
      BlockCtaUrl,
      BlockCtaTarget,
      BlockCtaRel,
      BlockCtaCustomClass,
      BlockCtaClass,
      BlockCtaAligment,
      ...BlockSpacingAttributes
    } = attributes;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("section", {
        className: `text-and-heading ${BlockBackgroundColor} ${(0,_components_global_functions_functions__WEBPACK_IMPORTED_MODULE_2__.getSpacingValues)(BlockSpacingAttributes)} ${BlockContentAligment}`,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "container-fluid",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "wrapper",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: `container ${BlockContainerWidth}`,
              children: [BlockDecorationImage != null && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
                className: "decoration",
                src: BlockDecorationImage.url,
                alt: BlockDecorationImage.alt,
                width: BlockDecorationImage.sizes.full.width,
                height: BlockDecorationImage.sizes.full.height
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "text-and-heading__inner",
                children: [BlockTitle != null && BlockTitle.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: "title",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(RichText.Content, {
                    tagName: BlockTitleTag,
                    className: "rich-block-title",
                    format: "string",
                    value: BlockTitle
                  })
                }), BlockSubtitle != null && BlockSubtitle.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: "subtitle",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(RichText.Content, {
                    tagName: "span",
                    className: "rich-block-subtitle",
                    format: "string",
                    value: BlockSubtitle
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: `text`,
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(InnerBlocks.Content, {})
                })]
              }), BlockCtaToggle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
                children: BlockCtaUrl != null && BlockCtaUrl.length > 0 && BlockCtaLabel != null && BlockCtaLabel.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: `cta-wrapper  ${BlockCtaAligment}`,
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
                    href: BlockCtaUrl,
                    target: BlockCtaTarget,
                    rel: "noopener noreferrer",
                    className: `${BlockCtaClass} ${BlockCtaCustomClass}`,
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                      children: BlockCtaLabel
                    })
                  })
                })
              })]
            })
          })
        })
      })
    });
  }
});
/******/ })()
;
//# sourceMappingURL=text.js.map