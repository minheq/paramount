(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"./docs/CustomizeTheme.mdx":function(e,n,t){var a=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=a(t("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),r=a(t("./node_modules/@babel/runtime/helpers/classCallCheck.js")),s=a(t("./node_modules/@babel/runtime/helpers/createClass.js")),l=a(t("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),m=a(t("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),c=a(t("./node_modules/@babel/runtime/helpers/inherits.js")),p=a(t("./node_modules/react/index.js")),i=t("./node_modules/@mdx-js/tag/dist/index.js"),d=function(e){function n(e){var t;return(0,r.default)(this,n),(t=(0,l.default)(this,(0,m.default)(n).call(this,e))).layout=null,t}return(0,c.default)(n,e),(0,s.default)(n,[{key:"render",value:function(){var e=this.props,n=e.components;(0,o.default)(e,["components"]);return p.default.createElement(i.MDXTag,{name:"wrapper",components:n},p.default.createElement(i.MDXTag,{name:"h1",components:n,props:{id:"customize-theme"}},"Customize Theme"),p.default.createElement(i.MDXTag,{name:"p",components:n},"Paramount uses three-tier theming system. It means you can customize the styles at three layers, with each level being more granular"),p.default.createElement(i.MDXTag,{name:"h2",components:n,props:{id:"1-use-themeprovider"}},"1. Use ThemeProvider"),p.default.createElement(i.MDXTag,{name:"p",components:n},"First and foremost, in order to theme the library you need to use React Context's Provider"),p.default.createElement(i.MDXTag,{name:"pre",components:n},p.default.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"import { ThemeProvider, createTheme } from 'paramount-ui'\n\nconst theme = createTheme()\n\n// in the outmost component insert the provider and pass Theme Object as value\n<ThemeProvider value={theme}>\n  ...\n</ThemeProvider>\n")),p.default.createElement(i.MDXTag,{name:"h2",components:n,props:{id:"2-theme-object"}},"2. Theme Object"),p.default.createElement(i.MDXTag,{name:"p",components:n},"Theme object has 3 parts. ",p.default.createElement(i.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"theme/ThemeInterface.ts"}},"See Theme interface"),". You can choose to customize whichever part you want"),p.default.createElement(i.MDXTag,{name:"pre",components:n},p.default.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"const theme = createTheme(themeVariables, componentVariables)\n\n// or\n\nconst theme = {\n  themeVariables: customThemeVariables,\n  componentVariables: customComponentVariables,\n  ...styleGetters\n}\n")),p.default.createElement(i.MDXTag,{name:"h3",components:n,props:{id:"theme-variables-tier-1"}},"Theme variables (Tier 1)"),p.default.createElement(i.MDXTag,{name:"p",components:n},"Those are variables that define overall look of the design system. These high level variables should be enough to provide basic style changes such as color, font sizes, control paddings/heights etc. ",p.default.createElement(i.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"theme/ThemeInterface.ts"}},"See ThemeVariables interface")),p.default.createElement(i.MDXTag,{name:"pre",components:n},p.default.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"const themeVariables = {\n  ...defaultThemeVariables,\n  colors: {\n    background: { ... },\n    border: { ... },\n    icon: { ... },\n    intent: { ... },\n    text: { ... },\n    brand: { ... },\n  }\n}\n")),p.default.createElement(i.MDXTag,{name:"h3",components:n,props:{id:"component-variables-tier-2"}},"Component variables (Tier 2)"),p.default.createElement(i.MDXTag,{name:"p",components:n},"Those are variables applied to individual components. They inherit some variables from tier-1 theme variables but can be overriden specifically for each component. These variables usually provide styling for different component states, look etc."),p.default.createElement(i.MDXTag,{name:"pre",components:n},p.default.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"const buttonVariables = {\n  appearances: {\n    minimal: {\n      default: {\n        backgroundColor: 'blue',\n        ...\n      },\n      danger: { ... },\n      primary: { ... },\n      secondary: { ... },\n    },\n    primary: {\n      default: { ... },\n      danger: { ... },\n      primary: { ... },\n      secondary: { ... },\n    },\n    outline: {\n      default: { ... },\n      danger: { ... },\n      primary: { ... },\n      secondary: { ... }\n    },\n  },\n  disabled: { ... },\n  sizes: {\n    small: { ... },\n    medium: { ... },\n    large: { ... },\n  },\n}\n\nconst theme = {\n  ...createTheme(themeVariables, {\n    ...componentVariables,\n    button: buttonVariables, // <= Insert here\n  }),\n  ...styleGetters,\n}\n")),p.default.createElement(i.MDXTag,{name:"h3",components:n,props:{id:"component-style-getters-tier-3"}},"Component style getters (Tier 3)"),p.default.createElement(i.MDXTag,{name:"p",components:n},"These are functions that return style for components. This allows for complete control over how a component looks depending on given props. They inherit component variables."),p.default.createElement(i.MDXTag,{name:"pre",components:n},p.default.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"const getButtonStyles = buttonVariables => (appearance, color, ...componentProps) => {\n  return {\n    buttonStyle: {\n      backgroundColor: buttonVariables[appearance],\n    },\n    focusColor: { ... },\n    textStyle: { ... },\n  }\n}\n\nconst theme = {\n  ...createTheme(themeVariables, componentVariables),\n  ...styleGetters,\n  getButtonStyles, // <= Insert here\n}\n")),p.default.createElement(i.MDXTag,{name:"h2",components:n,props:{id:"use-dangerouslysetinlinestyle"}},"Use dangerouslySetInlineStyle"),p.default.createElement(i.MDXTag,{name:"p",components:n},"All components also expose a prop ",p.default.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"dangerouslySetInlineStyle")," which you can use to style individual children of a component. Using these is equivalent to tier-2 component variables; however style getters cannot access these styles. It is recommended that you only use theme, so that your components are consistent"),p.default.createElement(i.MDXTag,{name:"pre",components:n},p.default.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"  <Text\n    dangerouslySetInlineStyle={{\n      textStyle: {\n        ...textStyle,\n      },\n    }}\n  >\n    {children}\n  </Text>\n")))}}]),n}(p.default.Component);n.default=d}}]);
//# sourceMappingURL=25.c7433c0a7a2d3f7836cb.js.map