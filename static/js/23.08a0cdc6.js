(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"./src/components/Checkbox/Checkbox.mdx":function(e,o,t){var n=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(o,"__esModule",{value:!0}),o.default=u;var c=n(t("./node_modules/@babel/runtime/helpers/extends.js")),s=n(t("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),r=(n(t("./node_modules/react/index.js")),t("./node_modules/@mdx-js/react/dist/index.es.js")),l=t("./node_modules/react-powerplug/dist/react-powerplug.esm.js"),i=t("./node_modules/docz/dist/index.esm.js"),b=t("./src/components/Checkbox/index.ts"),a={},d="wrapper";function u(e){var o=e.components,t=(0,s.default)(e,["components"]);return(0,r.mdx)(d,(0,c.default)({},a,t,{components:o,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"checkbox"},"Checkbox"),(0,r.mdx)("h3",{id:"usage"},"Usage"),(0,r.mdx)(i.Playground,{__position:0,__code:'<Toggle initial={false}>\n  {({ on, toggle }) => (\n    <Checkbox\n      shape="square" // or "circle"\n      isChecked={on}\n      isDisabled={false}\n      isInteractive={true}\n      onChange={toggle}\n      size="medium"\n      getStyles={(props, theme) => ({\n        checkboxStyle: {},\n        checkboxFocusBackgroundColor: \'\',\n      })}\n      labelPosition="right" // or left\n      label="Label"\n    />\n  )}\n</Toggle>',__scope:{props:this?this.props:t,Toggle:l.Toggle,Playground:i.Playground,Props:i.Props,Checkbox:b.Checkbox},mdxType:"Playground"},(0,r.mdx)(l.Toggle,{initial:!1,mdxType:"Toggle"},function(e){var o=e.on,t=e.toggle;return(0,r.mdx)(b.Checkbox,{shape:"square",isChecked:o,isDisabled:!1,isInteractive:!0,onChange:t,size:"medium",getStyles:function(e,o){return{checkboxStyle:{},checkboxFocusBackgroundColor:""}},labelPosition:"right",label:"Label",mdxType:"Checkbox"})})),(0,r.mdx)("h3",{id:"props"},"Props"),(0,r.mdx)(i.Props,{of:b.Checkbox,mdxType:"Props"}))}u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Checkbox/Checkbox.mdx"}}),u.isMDXComponent=!0},"./src/components/Checkbox/Checkbox.styles.ts":function(e,o,t){var n=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(o,"__esModule",{value:!0}),o.getCheckboxStyles=void 0;var c=n(t("./node_modules/@babel/runtime/helpers/objectSpread.js"));"undefined"!==typeof CheckboxStylesProps&&CheckboxStylesProps&&CheckboxStylesProps===Object(CheckboxStylesProps)&&Object.isExtensible(CheckboxStylesProps)&&Object.defineProperty(CheckboxStylesProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CheckboxStylesProps",filename:"src/components/Checkbox/Checkbox.styles.ts"}}),"undefined"!==typeof CheckboxStyles&&CheckboxStyles&&CheckboxStyles===Object(CheckboxStyles)&&Object.isExtensible(CheckboxStyles)&&Object.defineProperty(CheckboxStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CheckboxStyles",filename:"src/components/Checkbox/Checkbox.styles.ts"}}),"undefined"!==typeof GetCheckboxStyles&&GetCheckboxStyles&&GetCheckboxStyles===Object(GetCheckboxStyles)&&Object.isExtensible(GetCheckboxStyles)&&Object.defineProperty(GetCheckboxStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetCheckboxStyles",filename:"src/components/Checkbox/Checkbox.styles.ts"}});var s=function(e,o){var t=e.isChecked,n=e.isDisabled,s=e.shape,r=e.hasLabel,l=e.labelPosition,i=e.checkColor,b=e.size,a=o.controlHeights[b]-16;return{checkboxFocusBackgroundColor:t?o.colors.background.primaryDark:o.colors.background.greyLight,checkboxStyle:(0,c.default)({alignItems:"center",backgroundColor:o.colors.background.content,borderColor:o.colors.border.default,borderWidth:1,height:a,justifyContent:"center",width:a},r?"right"===l?{marginRight:8}:{marginLeft:8}:{},t?{backgroundColor:o.colors.background.primaryDefault,borderColor:"transparent"}:{},n?{backgroundColor:o.colors.background.greyDark,borderColor:o.colors.border.default}:{},{circle:{borderRadius:999},square:{borderRadius:o.controlBorderRadius.small}}[s]),iconColor:i||o.colors.text.white,outerWrapperStyle:{alignItems:"center",flexDirection:"row"},textStyle:{},touchableStyle:{}}};o.getCheckboxStyles=s,s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getCheckboxStyles",filename:"src/components/Checkbox/Checkbox.styles.ts"}})},"./src/components/Checkbox/Checkbox.tsx":function(e,o,t){var n=t("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),c=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(o,"__esModule",{value:!0}),o.Checkbox=void 0;var s=c(t("./node_modules/@babel/runtime/helpers/extends.js")),r=c(t("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),l=n(t("./node_modules/react/index.js")),i=t("./node_modules/react-native-web/dist/index.js"),b=t("./src/icons/index.ts"),a=t("./src/theme/index.ts"),d=t("./src/utils/mergeStyles.ts"),u=t("./src/components/Typography/index.ts"),h=t("./src/components/Checkbox/Checkbox.styles.ts");"undefined"!==typeof CheckboxShape&&CheckboxShape&&CheckboxShape===Object(CheckboxShape)&&Object.isExtensible(CheckboxShape)&&Object.defineProperty(CheckboxShape,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CheckboxShape",filename:"src/components/Checkbox/Checkbox.tsx"}}),"undefined"!==typeof CheckboxLabelPosition&&CheckboxLabelPosition&&CheckboxLabelPosition===Object(CheckboxLabelPosition)&&Object.isExtensible(CheckboxLabelPosition)&&Object.defineProperty(CheckboxLabelPosition,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CheckboxLabelPosition",filename:"src/components/Checkbox/Checkbox.tsx"}}),"undefined"!==typeof CheckboxProps&&CheckboxProps&&CheckboxProps===Object(CheckboxProps)&&Object.isExtensible(CheckboxProps)&&Object.defineProperty(CheckboxProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CheckboxProps",filename:"src/components/Checkbox/Checkbox.tsx"}});var x=function(e){var o=e.isChecked,t=void 0!==o&&o,n=e.isDisabled,c=void 0!==n&&n,x=e.isInteractive,p=void 0===x||x,m=e.onChange,k=void 0===m?function(){return null}:m,C=e.shape,f=void 0===C?"square":C,y=e.labelPosition,g=void 0===y?"right":y,j=e.size,P=void 0===j?"medium":j,_=e.label,S=e.checkColor,v=e.getStyles,O=e.testID,D=(0,r.default)(e,["isChecked","isDisabled","isInteractive","onChange","shape","labelPosition","size","label","checkColor","getStyles","testID"]),I=(0,a.useTheme)(),E=(0,d.mergeStyles)(h.getCheckboxStyles,v)({checkColor:S,hasLabel:!!_,isChecked:t,isDisabled:c,labelPosition:g,shape:f,size:P},I),w=E.touchableStyle,T=E.outerWrapperStyle,L=E.checkboxStyle,z=E.textStyle,q=E.iconColor,R=E.checkboxFocusBackgroundColor;return l.createElement(i.TouchableHighlight,(0,s.default)({accessible:p,style:w,underlayColor:R},p?{disabled:c,onPress:k}:{disabled:!0},{testID:O},D),l.createElement(i.View,{style:T},"left"===g&&l.createElement(u.Text,{size:P,getStyles:function(){return{textStyle:z}}},_),l.createElement(i.View,{style:L},t?l.createElement(b.Icon,{name:"check",size:20,color:q}):null),"right"===g&&l.createElement(u.Text,{size:P,getStyles:function(){return{textStyle:z}}},_)))};o.Checkbox=x,x&&x===Object(x)&&Object.isExtensible(x)&&Object.defineProperty(x,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Checkbox",filename:"src/components/Checkbox/Checkbox.tsx"}})},"./src/components/Checkbox/index.ts":function(e,o,t){Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"Checkbox",{enumerable:!0,get:function(){return n.Checkbox}}),Object.defineProperty(o,"CheckboxProps",{enumerable:!0,get:function(){return n.CheckboxProps}});var n=t("./src/components/Checkbox/Checkbox.tsx");"undefined"!==typeof CheckboxProps&&CheckboxProps&&CheckboxProps===Object(CheckboxProps)&&Object.isExtensible(CheckboxProps)&&Object.defineProperty(CheckboxProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CheckboxProps",filename:"src/components/Checkbox/index.ts"}}),"undefined"!==typeof Checkbox&&Checkbox&&Checkbox===Object(Checkbox)&&Object.isExtensible(Checkbox)&&Object.defineProperty(Checkbox,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Checkbox",filename:"src/components/Checkbox/index.ts"}})},"./src/icons/Icon.web.tsx":function(e,o,t){var n=t("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var c=n(t("./node_modules/react/index.js")),s=n(t("./node_modules/react-icons/fi/index.esm.js"));o.default=function(e){var o=e.name,t=e.color,n=e.size,r=s["Fi".concat(function(e){var o=e.replace(/(\-\w)/g,function(e){return e[1].toUpperCase()});return o.charAt(0).toUpperCase()+o.slice(1)}(o))];return c.createElement(r,{color:t,size:n})}},"./src/icons/index.ts":function(e,o,t){var n=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"Icon",{enumerable:!0,get:function(){return c.default}});var c=n(t("./src/icons/Icon.web.tsx"));"undefined"!==typeof Icon&&Icon&&Icon===Object(Icon)&&Object.isExtensible(Icon)&&Object.defineProperty(Icon,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Icon",filename:"src/icons/index.ts"}})}}]);
//# sourceMappingURL=23.a1bf02e3a640e6a3fe1c.js.map