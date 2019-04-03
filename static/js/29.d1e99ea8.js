(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"./docs/CustomizeTheme.mdx":function(e,n,t){var a=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=a(t("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),l=a(t("./node_modules/@babel/runtime/helpers/classCallCheck.js")),r=a(t("./node_modules/@babel/runtime/helpers/createClass.js")),s=a(t("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),d=a(t("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),p=a(t("./node_modules/@babel/runtime/helpers/inherits.js")),i=a(t("./node_modules/react/index.js")),u=t("./node_modules/@mdx-js/tag/dist/index.js"),c=function(e){function n(e){var t;return(0,l.default)(this,n),(t=(0,s.default)(this,(0,d.default)(n).call(this,e))).layout=null,t}return(0,p.default)(n,e),(0,r.default)(n,[{key:"render",value:function(){var e=this.props,n=e.components;(0,o.default)(e,["components"]);return i.default.createElement(u.MDXTag,{name:"wrapper",components:n},i.default.createElement(u.MDXTag,{name:"h1",components:n,props:{id:"customization"}},"Customization"),i.default.createElement(u.MDXTag,{name:"h2",components:n,props:{id:"use-themeprovider"}},"Use ThemeProvider"),i.default.createElement(u.MDXTag,{name:"p",components:n},"You can customize the theme using the ",i.default.createElement(u.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Theme")," object ",i.default.createElement(u.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/WeTrustPlatform/paramount/blob/master/src/theme/ThemeInterface.ts"}},"See Themeinterface")," and passing it to ",i.default.createElement(u.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ThemeProvider")),i.default.createElement(u.MDXTag,{name:"pre",components:n},i.default.createElement(u.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"import { ThemeProvider, createTheme } from 'paramount-ui'\n\nconst theme = createTheme({\n  colors: {\n    background: {\n        overlay: 'rgba(0,0,0,0.3)',\n        plain: 'white',\n        disabled: palette.neutral.light,\n        tint1: palette.neutral.lightest,\n        tint2: '#F5F6F7',\n\n        // Brand colors\n        primary: {\n          default: palette.teal.base,\n          focus: palette.teal.dark,\n          focusLight: palette.teal.lightest,\n        },\n        secondary: {\n          default: palette.orange.base,\n          focus: palette.orange.dark,\n          focusLight: palette.orange.lightest,\n        },\n\n        // Intent.\n        danger: {\n          default: palette.red.base,\n          focus: palette.red.dark,\n          focusLight: palette.red.lightest,\n        },\n        info: {\n          default: palette.blue.base,\n          focus: palette.blue.dark,\n          focusLight: palette.blue.lightest,\n        },\n        success: {\n          default: palette.green.base,\n          focus: palette.green.dark,\n          focusLight: palette.green.lightest,\n        },\n        warning: {\n          default: palette.orange.base,\n          focus: palette.orange.dark,\n          focusLight: palette.orange.lightest,\n        },\n      },\n\n      border: {\n        default: palette.neutral.light,\n        muted: '#EDF0F2',\n\n        // Brand colors\n        primary: palette.teal.darkest,\n        secondary: palette.orange.darkest,\n\n        // Intent.\n        danger: palette.red.darkest,\n        info: palette.blue.darkest,\n        success: palette.green.darkest,\n        warning: palette.orange.darkest,\n      },\n\n      text: {\n        dark: palette.neutral.darkest,\n        default: palette.neutral.darkest,\n        muted: palette.neutral.dark,\n        plain: 'white',\n        selected: 'white',\n\n        // Brand colors\n        primary: palette.teal.darkest,\n        secondary: palette.orange.darkest,\n\n        // Intent.\n        danger: palette.red.darkest,\n        info: palette.blue.darkest,\n        success: palette.green.darkest,\n        warning: palette.orange.darkest,\n      },\n    }\n  },\n\n  textSizes: {\n    large: 20,\n    medium: 16,\n    small: 14,\n  },\n\n  fills: {\n    solid: {\n        neutral: {\n          backgroundColor: palette.neutral.base,\n          color: 'white',\n        },\n\n        blue: {\n          backgroundColor: palette.blue.base,\n          color: 'white',\n        },\n\n        red: {\n          backgroundColor: palette.red.base,\n          color: 'white',\n        },\n\n        orange: {\n          backgroundColor: palette.orange.base,\n          color: 'white',\n        },\n\n        yellow: {\n          backgroundColor: palette.yellow.base,\n          color: palette.yellow.darkest,\n        },\n\n        green: {\n          backgroundColor: palette.green.base,\n          color: 'white',\n        },\n\n        teal: {\n          backgroundColor: palette.teal.base,\n          color: 'white',\n        },\n\n        purple: {\n          backgroundColor: palette.purple.base,\n          color: 'white',\n        },\n      },\n\n      subtle: {\n        neutral: {\n          backgroundColor: palette.neutral.light,\n          color: palette.neutral.darkest,\n        },\n\n        blue: {\n          backgroundColor: palette.blue.light,\n          color: palette.blue.darkest,\n        },\n\n        red: {\n          backgroundColor: palette.red.light,\n          color: palette.red.darkest,\n        },\n\n        orange: {\n          backgroundColor: palette.orange.light,\n          color: palette.orange.darkest,\n        },\n\n        yellow: {\n          backgroundColor: palette.yellow.light,\n          color: palette.yellow.darkest,\n        },\n\n        green: {\n          backgroundColor: palette.green.light,\n          color: palette.green.darkest,\n        },\n\n        teal: {\n          backgroundColor: palette.teal.light,\n          color: palette.teal.darkest,\n        },\n\n        purple: {\n          backgroundColor: palette.purple.light,\n          color: palette.purple.darkest,\n        },\n      },\n    },\n  },\n\n  fontFamilies: {\n    heading: `\"SF UI Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"`,\n    mono: `\"SF Mono\", \"Monaco\", \"Inconsolata\", \"Fira Mono\", \"Droid Sans Mono\", \"Source Code Pro\", monospace`,\n    text: `\"SF UI Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"`,\n  },\n\n  fontWeights: {\n    bold: '700',\n    light: '300',\n    normal: '600',\n  },\n\n  headingSizes: {\n    xxxlarge: 35,\n\n    xxlarge: 29,\n\n    xlarge: 24,\n\n    large: 20,\n\n    medium: 16,\n\n    small: 14,\n  },\n\n  paragraphSizes: {\n    large: 20,\n    medium: 16,\n    small: 14,\n  },\n\n\n  elevations: [\n    {\n      elevation: 0,\n      shadowColor: palette.neutral.dark,\n      shadowOffset: { width: 0, height: 0 },\n      shadowOpacity: 0,\n      shadowRadius: 0,\n    },\n    {\n      elevation: 1,\n      shadowColor: palette.neutral.dark,\n      shadowOffset: { width: 1, height: 1 },\n      shadowOpacity: 0.15,\n      shadowRadius: 8,\n    },\n    {\n      elevation: 2,\n      shadowColor: palette.neutral.dark,\n      shadowOffset: { width: 2, height: 2 },\n      shadowOpacity: 0.2,\n      shadowRadius: 10,\n    },\n    // ...add more elevations\n  ],\n\n  controlBorderRadius: {\n    small: 4,\n\n    medium: 4,\n\n    large: 4,\n  },\n  controlHeights: {\n    small: 40,\n\n    medium: 48,\n\n    large: 56,\n  },\n  controlPaddings: {\n    small: 8,\n\n    medium: 16,\n\n    large: 24,\n  }\n})\n\n// in the outmost component insert the provider and pass Theme Object as value\n<ThemeProvider value={theme}>\n  ...\n</ThemeProvider>\n")),i.default.createElement(u.MDXTag,{name:"h2",components:n,props:{id:"override-component-styles"}},"Override Component Styles"),i.default.createElement(u.MDXTag,{name:"p",components:n},"Each component exposes ",i.default.createElement(u.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"getStyles")," callback, which can be used to override component styles."),i.default.createElement(u.MDXTag,{name:"pre",components:n},i.default.createElement(u.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},'import { Button } from \'paramount-ui\'\n\nconst CustomButton = () => {\n  return (\n    <Button\n      color="primary"\n      title="Example"\n      getStyles={(buttonProps, theme) => {\n        const { color } = buttonProps;\n\n        // Each Component may use multiple style objects. The API enables to override each node\'s style\n        // VSCode intellisense would autofill available style fields; however, you can view the style spec of each component in their `Component*.styles.ts`\n        return {\n          buttonStyle: { ... },\n          textStyle: { ... },\n          focusColor: color\n        }\n      }}\n    >\n  )\n}\n')))}}]),n}(i.default.Component);n.default=c}}]);
//# sourceMappingURL=29.7f755688ca90fdcbef44.js.map