(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"./src/components/Checkbox/Checkbox.mdx":function(e,n,t){var o=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var l=o(t("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),a=o(t("./node_modules/@babel/runtime/helpers/classCallCheck.js")),s=o(t("./node_modules/@babel/runtime/helpers/createClass.js")),d=o(t("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),c=o(t("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),i=o(t("./node_modules/@babel/runtime/helpers/inherits.js")),r=o(t("./node_modules/react/index.js")),u=t("./node_modules/@mdx-js/tag/dist/index.js"),p=t("./node_modules/docz/dist/index.m.js"),h=o(t("./src/components/Checkbox/Checkbox.tsx")),m=function(e){function n(e){var t;return(0,a.default)(this,n),(t=(0,d.default)(this,(0,c.default)(n).call(this,e))).layout=null,t}return(0,i.default)(n,e),(0,s.default)(n,[{key:"render",value:function(){var e=this.props,n=e.components,t=(0,l.default)(e,["components"]);return r.default.createElement(u.MDXTag,{name:"wrapper",components:n},r.default.createElement(u.MDXTag,{name:"h2",components:n,props:{id:"usage"}},"Usage"),r.default.createElement(u.MDXTag,{name:"h3",components:n,props:{id:"labeled-checkboxes"}},"Labeled Checkboxes"),r.default.createElement(p.Playground,{__position:0,__code:'<Checkbox label="Default" />\n<Checkbox label="Checked" isChecked />\n<Checkbox label="Disabled" isDisabled />\n<Checkbox label="Checked and disabled" isChecked isDisabled />',__scope:{props:this?this.props:t,Checkbox:h.default}},r.default.createElement(h.default,{label:"Default"}),r.default.createElement(h.default,{label:"Checked",isChecked:!0}),r.default.createElement(h.default,{label:"Disabled",isDisabled:!0}),r.default.createElement(h.default,{label:"Checked and disabled",isChecked:!0,isDisabled:!0})),r.default.createElement(u.MDXTag,{name:"h2",components:n,props:{id:"props"}},"Props"),r.default.createElement(p.PropsTable,{of:h.default}))}}]),n}(r.default.Component);n.default=m},"./src/components/Checkbox/Checkbox.tsx":function(e,n,t){var o=t("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(n,"__esModule",{value:!0}),n.default=n.Checkbox=void 0;var l=o(t("./node_modules/react/index.js")),a=t("./node_modules/react-icons/fi/index.js"),s=t("./node_modules/react-native-web/dist/index.js"),d=(0,t("./src/theme/index.ts").withTheme)(function(e){var n=e.theme,t=e.isChecked,o=void 0!==t&&t,d=e.isDisabled,c=void 0!==d&&d,i=e.checkedIcon,r=void 0===i?l.createElement(a.FiCheck,{size:20,color:n.themeVariables.colors.text.plain}):i,u=e.testID,p=e.onChange,h=void 0===p?function(){return null}:p,m=n.getCheckboxStyles(o,c),b=m.checkboxStyle,f=m.checkboxFocusBackgroundColor;return l.createElement(s.TouchableHighlight,{style:b,underlayColor:f,onPress:h,testID:u,disabled:c},l.createElement(s.View,{style:{alignItems:"center",display:"flex",justifyContent:"center"}},o&&r))});n.Checkbox=d;var c=d;n.default=c;try{d.displayName="Checkbox",d.__docgenInfo={description:"",displayName:"Checkbox",props:{isChecked:{defaultValue:null,description:"",name:"isChecked",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},checkedIcon:{defaultValue:null,description:"",name:"checkedIcon",required:!1,type:{name:"ReactNode"}},testID:{defaultValue:null,description:"",name:"testID",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(e: GestureResponderEvent) => void"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox/Checkbox.tsx#Checkbox"]={docgenInfo:d.__docgenInfo,name:"Checkbox",path:"src/components/Checkbox/Checkbox.tsx#Checkbox"})}catch(i){}try{__class.displayName="__class",__class.__docgenInfo={description:"",displayName:"__class",props:{isChecked:{defaultValue:null,description:"",name:"isChecked",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},checkedIcon:{defaultValue:null,description:"",name:"checkedIcon",required:!1,type:{name:"ReactNode"}},testID:{defaultValue:null,description:"",name:"testID",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(e: GestureResponderEvent) => void"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox/Checkbox.tsx#__class"]={docgenInfo:__class.__docgenInfo,name:"__class",path:"src/components/Checkbox/Checkbox.tsx#__class"})}catch(i){}}}]);
//# sourceMappingURL=15.c8a45eb5e48cedb71421.js.map