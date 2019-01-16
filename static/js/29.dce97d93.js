(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"./docs/CustomizeTheme.mdx":function(e,t,n){var o=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),r=o(n("./node_modules/@babel/runtime/helpers/classCallCheck.js")),m=o(n("./node_modules/@babel/runtime/helpers/createClass.js")),s=o(n("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),l=o(n("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),u=o(n("./node_modules/@babel/runtime/helpers/inherits.js")),d=o(n("./node_modules/react/index.js")),p=n("./node_modules/@mdx-js/tag/dist/index.js"),c=function(e){function t(e){var n;return(0,r.default)(this,t),(n=(0,s.default)(this,(0,l.default)(t).call(this,e))).layout=null,n}return(0,u.default)(t,e),(0,m.default)(t,[{key:"render",value:function(){var e=this.props,t=e.components;(0,a.default)(e,["components"]);return d.default.createElement(p.MDXTag,{name:"wrapper",components:t},d.default.createElement(p.MDXTag,{name:"h1",components:t,props:{id:"customize-theme"}},"Customize Theme"),d.default.createElement(p.MDXTag,{name:"p",components:t},"You can customize the theme using the theme object, additionally components expose API to override styles"),d.default.createElement(p.MDXTag,{name:"h2",components:t,props:{id:"1-use-themeprovider"}},"1. Use ThemeProvider"),d.default.createElement(p.MDXTag,{name:"p",components:t},"First and foremost, in order to theme the library you need to use React Context's Provider"),d.default.createElement(p.MDXTag,{name:"pre",components:t},d.default.createElement(p.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},"import { ThemeProvider, createTheme } from 'paramount-ui'\n\nconst theme = createTheme()\n\n// in the outmost component insert the provider and pass Theme Object as value\n<ThemeProvider value={theme}>\n  ...\n</ThemeProvider>\n")),d.default.createElement(p.MDXTag,{name:"h2",components:t,props:{id:"2-theme-object"}},"2. Theme Object"),d.default.createElement(p.MDXTag,{name:"p",components:t},"Theme object ",d.default.createElement(p.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"theme/ThemeInterface.ts"}},"See Theme interface"),". You can choose to customize whichever part you want"))}}]),t}(d.default.Component);t.default=c}}]);
//# sourceMappingURL=29.759dbc44072619a392c9.js.map