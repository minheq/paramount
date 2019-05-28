(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"./src/components/Form/FormField.mdx":function(e,t,n){var r=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=b;var o=r(n("./node_modules/@babel/runtime/helpers/extends.js")),l=r(n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),s=(r(n("./node_modules/react/index.js")),n("./node_modules/@mdx-js/react/dist/index.es.js")),i=n("./node_modules/react-native-web/dist/index.js"),a=n("./node_modules/react-powerplug/dist/react-powerplug.esm.js"),u=n("./src/components/Form/index.ts"),p=n("./node_modules/docz/dist/index.esm.js"),c=n("./src/components/Inputs/index.ts"),d={},m="wrapper";function b(e){var t=e.components,n=(0,l.default)(e,["components"]);return(0,s.mdx)(m,(0,o.default)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"formfield"},"FormField"),(0,s.mdx)("h3",{id:"usage"},"Usage"),(0,s.mdx)(p.Playground,{__position:0,__code:'<FormField\n  labelPosition="top"\n  label="Email"\n  description="Description for the field"\n  error="Error message"\n  getStyles={(props, theme) => ({\n    containerStyles: {},\n    descriptionTextStyle: {},\n    errorTextStyle: {},\n    errorWrapperStyle: {},\n    labelTextStyle: {},\n    labelWrapperStyle: {},\n    wrapperStyle: {},\n  })}\n>\n  <TextInput />\n</FormField>',__scope:{props:this?this.props:n,Text:i.Text,Toggle:a.Toggle,FormField:u.FormField,Playground:p.Playground,Props:p.Props,TextInput:c.TextInput},mdxType:"Playground"},(0,s.mdx)(u.FormField,{labelPosition:"top",label:"Email",description:"Description for the field",error:"Error message",getStyles:function(e,t){return{containerStyles:{},descriptionTextStyle:{},errorTextStyle:{},errorWrapperStyle:{},labelTextStyle:{},labelWrapperStyle:{},wrapperStyle:{}}},mdxType:"FormField"},(0,s.mdx)(c.TextInput,{mdxType:"TextInput"}))),(0,s.mdx)("h3",{id:"props"},"Props"),(0,s.mdx)(p.Props,{of:u.FormField,mdxType:"Props"}))}b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Form/FormField.mdx"}}),b.isMDXComponent=!0},"./src/components/Form/FormField.styles.tsx":function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.getFormFieldStyles=void 0,"undefined"!==typeof FormFieldStylesProps&&FormFieldStylesProps&&FormFieldStylesProps===Object(FormFieldStylesProps)&&Object.isExtensible(FormFieldStylesProps)&&Object.defineProperty(FormFieldStylesProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FormFieldStylesProps",filename:"src/components/Form/FormField.styles.tsx"}}),"undefined"!==typeof FormFieldStyles&&FormFieldStyles&&FormFieldStyles===Object(FormFieldStyles)&&Object.isExtensible(FormFieldStyles)&&Object.defineProperty(FormFieldStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FormFieldStyles",filename:"src/components/Form/FormField.styles.tsx"}}),"undefined"!==typeof GetFormFieldStyles&&GetFormFieldStyles&&GetFormFieldStyles===Object(GetFormFieldStyles)&&Object.isExtensible(GetFormFieldStyles)&&Object.defineProperty(GetFormFieldStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetFormFieldStyles",filename:"src/components/Form/FormField.styles.tsx"}});var n=function(e,t){var n={},r={};switch(e.labelPosition){case"left":n={paddingRight:8},r={flexDirection:"row",alignItems:"center"};break;case"right":n={paddingLeft:8},r={flexDirection:"row",alignItems:"center"};break;default:n={paddingBottom:4},r={paddingBottom:4}}return{containerStyles:{},descriptionTextStyle:{paddingBottom:4},errorTextStyle:{},errorWrapperStyle:{},labelTextStyle:{},labelWrapperStyle:n,wrapperStyle:r}};t.getFormFieldStyles=n,n&&n===Object(n)&&Object.isExtensible(n)&&Object.defineProperty(n,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getFormFieldStyles",filename:"src/components/Form/FormField.styles.tsx"}})},"./src/components/Form/FormField.tsx":function(e,t,n){var r=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),t.FormField=void 0;var o=r(n("./node_modules/react/index.js")),l=n("./node_modules/react-native-web/dist/index.js"),s=n("./src/theme/index.ts"),i=n("./src/utils/mergeStyles.ts"),a=n("./src/components/Typography/index.ts"),u=n("./src/components/Form/FormField.styles.tsx");"undefined"!==typeof FormFieldLabelPosition&&FormFieldLabelPosition&&FormFieldLabelPosition===Object(FormFieldLabelPosition)&&Object.isExtensible(FormFieldLabelPosition)&&Object.defineProperty(FormFieldLabelPosition,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FormFieldLabelPosition",filename:"src/components/Form/FormField.tsx"}}),"undefined"!==typeof FormFieldProps&&FormFieldProps&&FormFieldProps===Object(FormFieldProps)&&Object.isExtensible(FormFieldProps)&&Object.defineProperty(FormFieldProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FormFieldProps",filename:"src/components/Form/FormField.tsx"}});var p=function(e){var t=e.label,n=e.error,r=e.children,p=e.description,c=e.labelPosition,d=void 0===c?"top":c,m=e.getStyles,b=(0,s.useTheme)(),f=(0,i.mergeStyles)(u.getFormFieldStyles,m)({labelPosition:d},b),x=f.containerStyles,I=f.descriptionTextStyle,y=f.errorTextStyle,T=f.errorWrapperStyle,g=f.labelTextStyle,S=f.labelWrapperStyle,j=f.wrapperStyle,F=o.createElement(l.View,{style:S},o.createElement(a.Label,{getStyles:function(){return{textStyle:g}}},t));return o.createElement(l.View,{style:x},t&&"top"===d&&F,o.createElement(l.View,{style:j},t&&"left"===d&&F,r,t&&"right"===d&&F),p&&o.createElement(a.Text,{color:"muted",getStyles:function(){return{textStyle:I}}},p),n&&o.createElement(l.View,{style:T},o.createElement(a.Text,{color:"danger",getStyles:function(){return{textStyle:y}}},n)))};t.FormField=p,p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FormField",filename:"src/components/Form/FormField.tsx"}})},"./src/components/Form/index.ts":function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n("./src/components/Form/FormField.tsx");Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})})},"./src/components/Icon/Icon.web.tsx":function(e,t,n){var r=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),t.Icon=void 0;var o=r(n("./node_modules/react/index.js")),l=r(n("./node_modules/react-icons/fi/index.esm.js"));var s=function(e){var t=e.name,n=e.color,r=e.size,s=l["Fi".concat(function(e){var t=e.replace(/(\-\w)/g,function(e){return e[1].toUpperCase()});return t.charAt(0).toUpperCase()+t.slice(1)}(t))];return o.createElement(s,{color:n,size:r})};t.Icon=s,s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Icon",filename:"src/components/Icon/Icon.web.tsx"}})},"./src/components/Icon/index.ts":function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n("./src/components/Icon/Icon.web.tsx");Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})})},"./src/components/Inputs/ClearableTextInput.tsx":function(e,t,n){var r=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),o=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.ClearableTextInput=void 0;var l=o(n("./node_modules/@babel/runtime/helpers/extends.js")),s=o(n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),i=r(n("./node_modules/react/index.js")),a=n("./node_modules/react-native-web/dist/index.js"),u=n("./src/theme/index.ts"),p=n("./src/components/Icon/index.ts"),c=n("./src/components/Inputs/IconTextInput.tsx");"undefined"!==typeof ClearableTextInputProps&&ClearableTextInputProps&&ClearableTextInputProps===Object(ClearableTextInputProps)&&Object.isExtensible(ClearableTextInputProps)&&Object.defineProperty(ClearableTextInputProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ClearableTextInputProps",filename:"src/components/Inputs/ClearableTextInput.tsx"}});var d=function(e){var t=e.onClear,n=e.innerRef,r=e.onChangeText,o=e.value,d=e.isClearable,m=e.rightIcon,b=(0,s.default)(e,["onClear","innerRef","onChangeText","value","isClearable","rightIcon"]),f=(0,u.useTheme)();return i.createElement(c.IconTextInput,(0,l.default)({ref:n,onChangeText:r,value:o,rightIcon:o&&d?i.createElement(a.TouchableOpacity,{onPress:function(){r&&r(""),t&&t()}},i.createElement(p.Icon,{name:"x",size:24,color:f.colors.text.default})):m||null},b))},m=i.forwardRef(function(e,t){return i.createElement(d,(0,l.default)({},e,{innerRef:t}))});t.ClearableTextInput=m,"undefined"!==typeof m&&m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ClearableTextInput",filename:"src/components/Inputs/ClearableTextInput.tsx"}})},"./src/components/Inputs/IconTextInput.styles.ts":function(e,t,n){var r=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.getIconTextInputStyles=void 0;var o=r(n("./node_modules/@babel/runtime/helpers/objectSpread.js"));"undefined"!==typeof IconTextInputStyles&&IconTextInputStyles&&IconTextInputStyles===Object(IconTextInputStyles)&&Object.isExtensible(IconTextInputStyles)&&Object.defineProperty(IconTextInputStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"IconTextInputStyles",filename:"src/components/Inputs/IconTextInput.styles.ts"}}),"undefined"!==typeof GetIconTextInputStylesProps&&GetIconTextInputStylesProps&&GetIconTextInputStylesProps===Object(GetIconTextInputStylesProps)&&Object.isExtensible(GetIconTextInputStylesProps)&&Object.defineProperty(GetIconTextInputStylesProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetIconTextInputStylesProps",filename:"src/components/Inputs/IconTextInput.styles.ts"}}),"undefined"!==typeof GetIconTextInputStyles&&GetIconTextInputStyles&&GetIconTextInputStyles===Object(GetIconTextInputStyles)&&Object.isExtensible(GetIconTextInputStyles)&&Object.defineProperty(GetIconTextInputStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetIconTextInputStyles",filename:"src/components/Inputs/IconTextInput.styles.ts"}});var l=function(e,t){var n=e.hasLeftIcon,r=e.hasRightIcon;return{containerStyle:{position:"relative"},inputStyle:(0,o.default)({},n&&{paddingLeft:48},r&&{paddingRight:48}),leftContainerStyle:{alignItems:"center",display:"flex",height:"100%",justifyContent:"center",left:0,paddingHorizontal:8,position:"absolute"},rightContainerStyle:{alignItems:"center",display:"flex",height:"100%",justifyContent:"center",paddingHorizontal:8,position:"absolute",right:0}}};t.getIconTextInputStyles=l,l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getIconTextInputStyles",filename:"src/components/Inputs/IconTextInput.styles.ts"}})},"./src/components/Inputs/IconTextInput.tsx":function(e,t,n){var r=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),o=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.IconTextInput=void 0;var l=o(n("./node_modules/@babel/runtime/helpers/extends.js")),s=o(n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),i=r(n("./node_modules/react/index.js")),a=n("./node_modules/react-native-web/dist/index.js"),u=n("./src/theme/index.ts"),p=n("./src/utils/mergeStyles.ts"),c=n("./src/components/Inputs/IconTextInput.styles.ts"),d=n("./src/components/Inputs/TextInput.tsx");"undefined"!==typeof IconTextInputProps&&IconTextInputProps&&IconTextInputProps===Object(IconTextInputProps)&&Object.isExtensible(IconTextInputProps)&&Object.defineProperty(IconTextInputProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"IconTextInputProps",filename:"src/components/Inputs/IconTextInput.tsx"}});var m=function(e){var t=e.leftIcon,n=void 0===t?null:t,r=e.rightIcon,o=void 0===r?null:r,m=e.getStyles,b=e.innerRef,f=(0,s.default)(e,["leftIcon","rightIcon","getStyles","innerRef"]),x=(0,u.useTheme)(),I=(0,p.mergeStyles)(c.getIconTextInputStyles,m)({hasLeftIcon:!!n,hasRightIcon:!!o},x),y=I.containerStyle,T=I.leftContainerStyle,g=I.rightContainerStyle,S=I.inputStyle;return i.createElement(a.View,{style:y},i.createElement(a.View,{style:T},n),i.createElement(d.TextInput,(0,l.default)({ref:b,getStyles:function(){return{inputStyle:S}}},f)),i.createElement(a.View,{style:g},o))},b=i.forwardRef(function(e,t){return i.createElement(m,(0,l.default)({},e,{innerRef:t}))});t.IconTextInput=b,"undefined"!==typeof b&&b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"IconTextInput",filename:"src/components/Inputs/IconTextInput.tsx"}})},"./src/components/Inputs/TextInput.styles.ts":function(e,t,n){var r=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.getTextInputStyles=t.getTextInputVariables=void 0;var o=r(n("./node_modules/@babel/runtime/helpers/objectSpread.js"));"undefined"!==typeof TextInputVariables&&TextInputVariables&&TextInputVariables===Object(TextInputVariables)&&Object.isExtensible(TextInputVariables)&&Object.defineProperty(TextInputVariables,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextInputVariables",filename:"src/components/Inputs/TextInput.styles.ts"}});var l=function(e){return{base:{backgroundColor:e.colors.background.content,borderColor:e.colors.border.default,borderWidth:1,color:e.colors.text.default,width:"100%"},disabled:{backgroundColor:e.colors.background.greyDark},focus:{},invalid:{borderColor:e.colors.border.danger},placeholderTextColor:e.colors.text.muted,sizes:{small:{borderRadius:e.controlBorderRadius.small,fontSize:e.textSizes.small.fontSize||14,height:e.controlHeights.small,paddingLeft:e.controlPaddings.small,paddingRight:e.controlPaddings.small},medium:{borderRadius:e.controlBorderRadius.medium,fontSize:e.textSizes.medium.fontSize||16,height:e.controlHeights.medium,paddingLeft:e.controlPaddings.medium,paddingRight:e.controlPaddings.medium},large:{borderRadius:e.controlBorderRadius.large,fontSize:e.textSizes.large.fontSize||18,height:e.controlHeights.large,paddingLeft:e.controlPaddings.large,paddingRight:e.controlPaddings.large}}}};t.getTextInputVariables=l,l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTextInputVariables",filename:"src/components/Inputs/TextInput.styles.ts"}}),"undefined"!==typeof TextInputStyles&&TextInputStyles&&TextInputStyles===Object(TextInputStyles)&&Object.isExtensible(TextInputStyles)&&Object.defineProperty(TextInputStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextInputStyles",filename:"src/components/Inputs/TextInput.styles.ts"}}),"undefined"!==typeof TextInputStylesProps&&TextInputStylesProps&&TextInputStylesProps===Object(TextInputStylesProps)&&Object.isExtensible(TextInputStylesProps)&&Object.defineProperty(TextInputStylesProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextInputStylesProps",filename:"src/components/Inputs/TextInput.styles.ts"}}),"undefined"!==typeof GetTextInputStyles&&GetTextInputStyles&&GetTextInputStyles===Object(GetTextInputStyles)&&Object.isExtensible(GetTextInputStyles)&&Object.defineProperty(GetTextInputStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetTextInputStyles",filename:"src/components/Inputs/TextInput.styles.ts"}});var s=function(e,t){var n=e.size,r=e.isDisabled,s=e.isInvalid,i=e.numberOfLines,a=l(t),u=t.controlHeights[n],p=a.base,c=a.disabled,d=a.focus,m=a.invalid,b=a.placeholderTextColor,f=a.sizes[n];return{focusedStyle:d,inputStyle:(0,o.default)({},p,f,r?c:{},s?m:{},i?{height:i*u,paddingVertical:16}:{}),placeholderTextColor:b}};t.getTextInputStyles=s,s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTextInputStyles",filename:"src/components/Inputs/TextInput.styles.ts"}})},"./src/components/Inputs/TextInput.tsx":function(e,t,n){var r=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),o=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.TextInput=void 0;var l=o(n("./node_modules/@babel/runtime/helpers/extends.js")),s=o(n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),i=r(n("./node_modules/react/index.js")),a=n("./node_modules/react-native-web/dist/index.js"),u=n("./src/theme/index.ts"),p=n("./src/utils/mergeStyles.ts"),c=n("./src/components/Inputs/TextInput.styles.ts");"undefined"!==typeof TextInputProps&&TextInputProps&&TextInputProps===Object(TextInputProps)&&Object.isExtensible(TextInputProps)&&Object.defineProperty(TextInputProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextInputProps",filename:"src/components/Inputs/TextInput.tsx"}});var d=function(e){var t=e.isDisabled,n=void 0!==t&&t,r=e.isInvalid,o=void 0!==r&&r,d=e.size,m=void 0===d?"medium":d,b=e.getStyles,f=e.name,x=e.innerRef,I=e.numberOfLines,y=(0,s.default)(e,["isDisabled","isInvalid","size","getStyles","name","innerRef","numberOfLines"]),T=(0,u.useTheme)(),g=(0,p.mergeStyles)(c.getTextInputStyles,b)({isDisabled:n,isInvalid:o,numberOfLines:I,size:m},T),S=g.inputStyle,j=g.placeholderTextColor;return i.createElement(a.TextInput,(0,l.default)({ref:x,style:S,editable:!n,placeholderTextColor:j,name:f,numberOfLines:I},y))},m=i.forwardRef(function(e,t){return i.createElement(d,(0,l.default)({},e,{innerRef:t}))});t.TextInput=m,"undefined"!==typeof m&&m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextInput",filename:"src/components/Inputs/TextInput.tsx"}})},"./src/components/Inputs/index.ts":function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"TextInput",{enumerable:!0,get:function(){return r.ClearableTextInput}}),Object.defineProperty(t,"TextInputProps",{enumerable:!0,get:function(){return r.ClearableTextInputProps}});var r=n("./src/components/Inputs/ClearableTextInput.tsx");"undefined"!==typeof TextInputProps&&TextInputProps&&TextInputProps===Object(TextInputProps)&&Object.isExtensible(TextInputProps)&&Object.defineProperty(TextInputProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextInputProps",filename:"src/components/Inputs/index.ts"}}),"undefined"!==typeof TextInput&&TextInput&&TextInput===Object(TextInput)&&Object.isExtensible(TextInput)&&Object.defineProperty(TextInput,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextInput",filename:"src/components/Inputs/index.ts"}})}}]);
//# sourceMappingURL=12.8b6a61fdb1e33ec38c04.js.map