(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"./src/components/Checkbox/Checkbox.mdx":function(e,o,t){var c=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(o,"__esModule",{value:!0}),o.default=u;var n=c(t("./node_modules/@babel/runtime/helpers/extends.js")),s=c(t("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),r=(c(t("./node_modules/react/index.js")),t("./node_modules/@mdx-js/react/dist/index.es.js")),l=t("./node_modules/react-powerplug/dist/react-powerplug.esm.js"),b=t("./node_modules/docz/dist/index.esm.js"),a=t("./src/components/Checkbox/index.ts"),i={},d="wrapper";function u(e){var o=e.components,t=(0,s.default)(e,["components"]);return(0,r.mdx)(d,(0,n.default)({},i,t,{components:o,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"usage"},"Usage"),(0,r.mdx)("h3",{id:"usage-1"},"Usage"),(0,r.mdx)(b.Playground,{__position:0,__code:'<Toggle initial={false}>\n  {({ on, toggle }) => (\n    <Checkbox\n      shape="square" // or "circle"\n      isChecked={on}\n      isDisabled={false}\n      isInteractive={true}\n      checkedIcon={null}\n      onChange={toggle}\n      getStyles={(props, theme) => ({\n        checkboxStyle: {},\n        checkboxFocusBackgroundColor: \'\',\n      })}\n      position="right"\n      label="Label"\n    />\n  )}\n</Toggle>',__scope:{props:this?this.props:t,Toggle:l.Toggle,Playground:b.Playground,Props:b.Props,Checkbox:a.Checkbox},mdxType:"Playground"},(0,r.mdx)(l.Toggle,{initial:!1,mdxType:"Toggle"},function(e){var o=e.on,t=e.toggle;return(0,r.mdx)(a.Checkbox,{shape:"square",isChecked:o,isDisabled:!1,isInteractive:!0,checkedIcon:null,onChange:t,getStyles:function(e,o){return{checkboxStyle:{},checkboxFocusBackgroundColor:""}},position:"right",label:"Label",mdxType:"Checkbox"})})),(0,r.mdx)("h3",{id:"props"},"Props"),(0,r.mdx)(b.Props,{of:a.Checkbox,mdxType:"Props"}))}u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Checkbox/Checkbox.mdx"}}),u.isMDXComponent=!0},"./src/components/Checkbox/Checkbox.styles.ts":function(e,o,t){var c=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(o,"__esModule",{value:!0}),o.getCheckboxStyles=o.getCheckboxVariables=void 0;var n=c(t("./node_modules/@babel/runtime/helpers/objectSpread.js"));"undefined"!==typeof ShapeStyle&&ShapeStyle&&ShapeStyle===Object(ShapeStyle)&&Object.isExtensible(ShapeStyle)&&Object.defineProperty(ShapeStyle,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ShapeStyle",filename:"src/components/Checkbox/Checkbox.styles.ts"}}),"undefined"!==typeof CheckboxVariables&&CheckboxVariables&&CheckboxVariables===Object(CheckboxVariables)&&Object.isExtensible(CheckboxVariables)&&Object.defineProperty(CheckboxVariables,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CheckboxVariables",filename:"src/components/Checkbox/Checkbox.styles.ts"}});var s=function(e){return{base:{backgroundColor:e.colors.background.white,borderColor:e.colors.border.default,borderWidth:1,height:32,width:32},checked:{backgroundColor:e.colors.background.primaryDefault,borderColor:"transparent"},checkedFocus:{backgroundColor:e.colors.background.primaryDark},disabled:{backgroundColor:e.colors.background.greyDark,borderColor:e.colors.border.default},shape:{circle:{borderRadius:999},square:{borderRadius:e.controlBorderRadius.small}},uncheckedFocus:{backgroundColor:e.colors.background.greyLight}}};o.getCheckboxVariables=s,s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getCheckboxVariables",filename:"src/components/Checkbox/Checkbox.styles.ts"}}),"undefined"!==typeof CheckboxStylesProps&&CheckboxStylesProps&&CheckboxStylesProps===Object(CheckboxStylesProps)&&Object.isExtensible(CheckboxStylesProps)&&Object.defineProperty(CheckboxStylesProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CheckboxStylesProps",filename:"src/components/Checkbox/Checkbox.styles.ts"}}),"undefined"!==typeof CheckboxStyles&&CheckboxStyles&&CheckboxStyles===Object(CheckboxStyles)&&Object.isExtensible(CheckboxStyles)&&Object.defineProperty(CheckboxStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CheckboxStyles",filename:"src/components/Checkbox/Checkbox.styles.ts"}}),"undefined"!==typeof GetCheckboxStyles&&GetCheckboxStyles&&GetCheckboxStyles===Object(GetCheckboxStyles)&&Object.isExtensible(GetCheckboxStyles)&&Object.defineProperty(GetCheckboxStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetCheckboxStyles",filename:"src/components/Checkbox/Checkbox.styles.ts"}});var r=function(e,o){var t=e.isChecked,c=e.isDisabled,r=e.shape,l=s(o);return{checkboxFocusBackgroundColor:t?l.checkedFocus.backgroundColor:l.uncheckedFocus.backgroundColor,checkboxStyle:(0,n.default)({},l.base,t?l.checked:{},c?l.disabled:{},l.shape[r])}};o.getCheckboxStyles=r,r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getCheckboxStyles",filename:"src/components/Checkbox/Checkbox.styles.ts"}})},"./src/components/Checkbox/Checkbox.tsx":function(e,o,t){var c=t("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),n=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(o,"__esModule",{value:!0}),o.Checkbox=void 0;var s=n(t("./node_modules/@babel/runtime/helpers/extends.js")),r=n(t("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),l=c(t("./node_modules/react/index.js")),b=t("./node_modules/react-native-web/dist/index.js"),a=t("./src/icons/index.ts"),i=t("./src/theme/index.ts"),d=t("./src/utils/mergeStyles.ts"),u=t("./src/components/Checkbox/Checkbox.styles.ts");"undefined"!==typeof CheckboxShape&&CheckboxShape&&CheckboxShape===Object(CheckboxShape)&&Object.isExtensible(CheckboxShape)&&Object.defineProperty(CheckboxShape,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CheckboxShape",filename:"src/components/Checkbox/Checkbox.tsx"}}),"undefined"!==typeof CheckboxProps&&CheckboxProps&&CheckboxProps===Object(CheckboxProps)&&Object.isExtensible(CheckboxProps)&&Object.defineProperty(CheckboxProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CheckboxProps",filename:"src/components/Checkbox/Checkbox.tsx"}});var h=function(e){var o=e.isChecked,t=void 0!==o&&o,c=e.isDisabled,n=void 0!==c&&c,h=e.isInteractive,x=void 0===h||h,p=e.checkedIcon,k=e.onChange,m=void 0===k?function(){return null}:k,C=e.shape,f=void 0===C?"square":C,y=e.getStyles,g=e.testID,j=(0,r.default)(e,["isChecked","isDisabled","isInteractive","checkedIcon","onChange","shape","getStyles","testID"]),_=(0,i.useTheme)(),P=(0,d.mergeStyles)(u.getCheckboxStyles,y)({isChecked:t,isDisabled:n,shape:f},_),v=P.checkboxStyle,O=P.checkboxFocusBackgroundColor;return l.createElement(b.TouchableHighlight,(0,s.default)({accessible:!0,style:v,underlayColor:O},x?{disabled:n,onPress:m}:{disabled:!0},{testID:g},j),l.createElement(b.View,{style:{alignItems:"center",display:"flex",height:"100%",justifyContent:"center"}},t?p||l.createElement(a.Icon,{name:"check",size:20,color:_.colors.text.white}):null))};o.Checkbox=h,h&&h===Object(h)&&Object.isExtensible(h)&&Object.defineProperty(h,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Checkbox",filename:"src/components/Checkbox/Checkbox.tsx"}})},"./src/components/Checkbox/LabeledCheckbox.tsx":function(e,o,t){var c=t("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),n=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(o,"__esModule",{value:!0}),o.LabeledCheckbox=void 0;var s=n(t("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),r=c(t("./node_modules/react/index.js")),l=t("./src/components/Checkbox/Checkbox.tsx"),b=t("./src/components/Layout/index.ts"),a=t("./src/components/Typography/index.ts");"undefined"!==typeof LabeledCheckboxProps&&LabeledCheckboxProps&&LabeledCheckboxProps===Object(LabeledCheckboxProps)&&Object.isExtensible(LabeledCheckboxProps)&&Object.defineProperty(LabeledCheckboxProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"LabeledCheckboxProps",filename:"src/components/Checkbox/LabeledCheckbox.tsx"}});var i=function(e){var o=e.label,t=e.position,c=void 0===t?"right":t,n=e.color,i=e.size,d=(0,s.default)(e,["label","position","color","size"]);return o?r.createElement(b.Box,{flexDirection:"row",alignItems:"center"},"left"===c&&r.createElement(a.Text,{size:i,color:n},o),r.createElement(b.Spacing,{paddingHorizontal:1},r.createElement(l.Checkbox,d)),"right"===c&&r.createElement(a.Text,{size:i,color:n},o)):r.createElement(l.Checkbox,d)};o.LabeledCheckbox=i,i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"LabeledCheckbox",filename:"src/components/Checkbox/LabeledCheckbox.tsx"}})},"./src/components/Checkbox/index.ts":function(e,o,t){Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"Checkbox",{enumerable:!0,get:function(){return c.LabeledCheckbox}}),Object.defineProperty(o,"CheckboxProps",{enumerable:!0,get:function(){return c.LabeledCheckboxProps}});var c=t("./src/components/Checkbox/LabeledCheckbox.tsx");"undefined"!==typeof CheckboxProps&&CheckboxProps&&CheckboxProps===Object(CheckboxProps)&&Object.isExtensible(CheckboxProps)&&Object.defineProperty(CheckboxProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CheckboxProps",filename:"src/components/Checkbox/index.ts"}}),"undefined"!==typeof Checkbox&&Checkbox&&Checkbox===Object(Checkbox)&&Object.isExtensible(Checkbox)&&Object.defineProperty(Checkbox,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Checkbox",filename:"src/components/Checkbox/index.ts"}})},"./src/icons/Icon.web.tsx":function(e,o,t){var c=t("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var n=c(t("./node_modules/react/index.js")),s=c(t("./node_modules/react-icons/fi/index.esm.js"));o.default=function(e){var o=e.name,t=e.color,c=e.size,r=s["Fi".concat(function(e){var o=e.replace(/(\-\w)/g,function(e){return e[1].toUpperCase()});return o.charAt(0).toUpperCase()+o.slice(1)}(o))];return n.createElement(r,{color:t,size:c})}},"./src/icons/index.ts":function(e,o,t){var c=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"Icon",{enumerable:!0,get:function(){return n.default}});var n=c(t("./src/icons/Icon.web.tsx"));"undefined"!==typeof Icon&&Icon&&Icon===Object(Icon)&&Object.isExtensible(Icon)&&Object.defineProperty(Icon,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Icon",filename:"src/icons/index.ts"}})}}]);
//# sourceMappingURL=21.fbd593c4d92f00afd73c.js.map