(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"./src/components/Icon/Icon.web.tsx":function(e,t,n){var s=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),t.Icon=void 0;var o=s(n("./node_modules/react/index.js")),l=s(n("./node_modules/react-icons/fi/index.esm.js"));var r=function(e){var t=e.name,n=e.color,s=e.size,r=l["Fi".concat(function(e){var t=e.replace(/(\-\w)/g,function(e){return e[1].toUpperCase()});return t.charAt(0).toUpperCase()+t.slice(1)}(t))];return o.createElement(r,{color:n,size:s})};t.Icon=r,r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Icon",filename:"src/components/Icon/Icon.web.tsx"}})},"./src/components/Icon/index.ts":function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var s=n("./src/components/Icon/Icon.web.tsx");Object.keys(s).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return s[e]}})})},"./src/components/Inputs/ClearableTextInput.tsx":function(e,t,n){var s=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),o=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.ClearableTextInput=void 0;var l=o(n("./node_modules/@babel/runtime/helpers/extends.js")),r=o(n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),i=s(n("./node_modules/react/index.js")),u=n("./node_modules/react-native-web/dist/index.js"),a=n("./src/theme/index.ts"),p=n("./src/components/Icon/index.ts"),c=n("./src/components/Inputs/IconTextInput.tsx");"undefined"!==typeof ClearableTextInputProps&&ClearableTextInputProps&&ClearableTextInputProps===Object(ClearableTextInputProps)&&Object.isExtensible(ClearableTextInputProps)&&Object.defineProperty(ClearableTextInputProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ClearableTextInputProps",filename:"src/components/Inputs/ClearableTextInput.tsx"}});var d=function(e){var t=e.onClear,n=e.innerRef,s=e.onChangeText,o=e.value,d=e.isClearable,m=e.rightIcon,b=(0,r.default)(e,["onClear","innerRef","onChangeText","value","isClearable","rightIcon"]),f=(0,a.useTheme)();return i.createElement(c.IconTextInput,(0,l.default)({ref:n,onChangeText:s,value:o,rightIcon:o&&d?i.createElement(u.TouchableOpacity,{onPress:function(){s&&s(""),t&&t()}},i.createElement(p.Icon,{name:"x",size:24,color:f.colors.text.default})):m||null},b))},m=i.forwardRef(function(e,t){return i.createElement(d,(0,l.default)({},e,{innerRef:t}))});t.ClearableTextInput=m,"undefined"!==typeof m&&m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ClearableTextInput",filename:"src/components/Inputs/ClearableTextInput.tsx"}})},"./src/components/Inputs/IconTextInput.styles.ts":function(e,t,n){var s=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.getIconTextInputStyles=void 0;var o=s(n("./node_modules/@babel/runtime/helpers/objectSpread.js"));"undefined"!==typeof IconTextInputStyles&&IconTextInputStyles&&IconTextInputStyles===Object(IconTextInputStyles)&&Object.isExtensible(IconTextInputStyles)&&Object.defineProperty(IconTextInputStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"IconTextInputStyles",filename:"src/components/Inputs/IconTextInput.styles.ts"}}),"undefined"!==typeof GetIconTextInputStylesProps&&GetIconTextInputStylesProps&&GetIconTextInputStylesProps===Object(GetIconTextInputStylesProps)&&Object.isExtensible(GetIconTextInputStylesProps)&&Object.defineProperty(GetIconTextInputStylesProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetIconTextInputStylesProps",filename:"src/components/Inputs/IconTextInput.styles.ts"}}),"undefined"!==typeof GetIconTextInputStyles&&GetIconTextInputStyles&&GetIconTextInputStyles===Object(GetIconTextInputStyles)&&Object.isExtensible(GetIconTextInputStyles)&&Object.defineProperty(GetIconTextInputStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetIconTextInputStyles",filename:"src/components/Inputs/IconTextInput.styles.ts"}});var l=function(e,t){var n=e.hasLeftIcon,s=e.hasRightIcon;return{containerStyle:{position:"relative"},inputStyle:(0,o.default)({},n&&{paddingLeft:48},s&&{paddingRight:48}),leftContainerStyle:{alignItems:"center",display:"flex",height:"100%",justifyContent:"center",left:0,paddingHorizontal:8,position:"absolute"},rightContainerStyle:{alignItems:"center",display:"flex",height:"100%",justifyContent:"center",paddingHorizontal:8,position:"absolute",right:0}}};t.getIconTextInputStyles=l,l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getIconTextInputStyles",filename:"src/components/Inputs/IconTextInput.styles.ts"}})},"./src/components/Inputs/IconTextInput.tsx":function(e,t,n){var s=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),o=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.IconTextInput=void 0;var l=o(n("./node_modules/@babel/runtime/helpers/extends.js")),r=o(n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),i=s(n("./node_modules/react/index.js")),u=n("./node_modules/react-native-web/dist/index.js"),a=n("./src/theme/index.ts"),p=n("./src/utils/mergeStyles.ts"),c=n("./src/components/Inputs/IconTextInput.styles.ts"),d=n("./src/components/Inputs/TextInput.tsx");"undefined"!==typeof IconTextInputProps&&IconTextInputProps&&IconTextInputProps===Object(IconTextInputProps)&&Object.isExtensible(IconTextInputProps)&&Object.defineProperty(IconTextInputProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"IconTextInputProps",filename:"src/components/Inputs/IconTextInput.tsx"}});var m=function(e){var t=e.leftIcon,n=void 0===t?null:t,s=e.rightIcon,o=void 0===s?null:s,m=e.getStyles,b=e.innerRef,f=(0,r.default)(e,["leftIcon","rightIcon","getStyles","innerRef"]),I=(0,a.useTheme)(),x=(0,p.mergeStyles)(c.getIconTextInputStyles,m)({hasLeftIcon:!!n,hasRightIcon:!!o},I),y=x.containerStyle,T=x.leftContainerStyle,g=x.rightContainerStyle,j=x.inputStyle;return i.createElement(u.View,{style:y},i.createElement(u.View,{style:T},n),i.createElement(d.TextInput,(0,l.default)({ref:b,getStyles:function(){return{inputStyle:j}}},f)),i.createElement(u.View,{style:g},o))},b=i.forwardRef(function(e,t){return i.createElement(m,(0,l.default)({},e,{innerRef:t}))});t.IconTextInput=b,"undefined"!==typeof b&&b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"IconTextInput",filename:"src/components/Inputs/IconTextInput.tsx"}})},"./src/components/Inputs/TextInput.mdx":function(e,t,n){var s=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=b;var o=s(n("./node_modules/@babel/runtime/helpers/extends.js")),l=s(n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),r=(s(n("./node_modules/react/index.js")),n("./node_modules/@mdx-js/react/dist/index.es.js")),i=n("./node_modules/docz/dist/index.esm.js"),u=n("./node_modules/react-powerplug/dist/react-powerplug.esm.js"),a=n("./node_modules/react-native-web/dist/index.js"),p=n("./src/components/Icon/index.ts"),c=n("./src/components/Inputs/index.ts"),d={},m="wrapper";function b(e){var t=e.components,n=(0,l.default)(e,["components"]);return(0,r.mdx)(m,(0,o.default)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"textinput"},"TextInput"),(0,r.mdx)("p",null,"Composes of React Native's ",(0,r.mdx)("inlineCode",{parentName:"p"},"TextInput")," component (i.e. you can pass its props). ",(0,r.mdx)("a",(0,o.default)({parentName:"p"},{href:"https://facebook.github.io/react-native/docs/textinput"}),"See more details")),(0,r.mdx)("h3",{id:"usage"},"Usage"),(0,r.mdx)(i.Playground,{__position:0,__code:'<State initial={{ value: \'\' }}>\n  {({ state, setState }) => (\n    <TextInput\n      name="field"\n      value={state.value}\n      placeholder="Add your own placeholder"\n      size="large"\n      isDisabled={false}\n      isInvalid={false}\n      keyboardType="email-address"\n      onChangeText={text => setState({ value: text })}\n      onSubmitEditing={e => console.log(\'Submit on enter\')}\n      leftIcon={\n        <View>\n          <Icon name="menu" size={24} />\n        </View>\n      }\n      rightIcon={undefined}\n      isClearable={true} // Mutually exclusive with rightIcon\n      onClear={() => console.log(\'Cleared!\')} // Only triggered with `isClearable`\n      getStyles={(props, theme) => ({\n        inputStyle: {},\n        placeholderTextColor: theme.colors.text.muted,\n      })}\n    />\n  )}\n</State>',__scope:{props:this?this.props:n,Playground:i.Playground,Props:i.Props,State:u.State,View:a.View,Icon:p.Icon,TextInput:c.TextInput},mdxType:"Playground"},(0,r.mdx)(u.State,{initial:{value:""},mdxType:"State"},function(e){var t=e.state,n=e.setState;return(0,r.mdx)(c.TextInput,{name:"field",value:t.value,placeholder:"Add your own placeholder",size:"large",isDisabled:!1,isInvalid:!1,keyboardType:"email-address",onChangeText:function(e){return n({value:e})},onSubmitEditing:function(e){return console.log("Submit on enter")},leftIcon:(0,r.mdx)(a.View,{mdxType:"View"},(0,r.mdx)(p.Icon,{name:"menu",size:24,mdxType:"Icon"})),rightIcon:void 0,isClearable:!0,onClear:function(){return console.log("Cleared!")},getStyles:function(e,t){return{inputStyle:{},placeholderTextColor:t.colors.text.muted}},mdxType:"TextInput"})})))}b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Inputs/TextInput.mdx"}}),b.isMDXComponent=!0},"./src/components/Inputs/TextInput.styles.ts":function(e,t,n){var s=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.getTextInputStyles=t.getTextInputVariables=void 0;var o=s(n("./node_modules/@babel/runtime/helpers/objectSpread.js"));"undefined"!==typeof TextInputVariables&&TextInputVariables&&TextInputVariables===Object(TextInputVariables)&&Object.isExtensible(TextInputVariables)&&Object.defineProperty(TextInputVariables,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextInputVariables",filename:"src/components/Inputs/TextInput.styles.ts"}});var l=function(e){return{base:{backgroundColor:e.colors.background.content,borderColor:e.colors.border.default,borderWidth:1,color:e.colors.text.default,width:"100%"},disabled:{backgroundColor:e.colors.background.greyDark},focus:{},invalid:{borderColor:e.colors.border.danger},placeholderTextColor:e.colors.text.muted,sizes:{small:{borderRadius:e.controlBorderRadius.small,fontSize:e.textSizes.small.fontSize||14,height:e.controlHeights.small,paddingLeft:e.controlPaddings.small,paddingRight:e.controlPaddings.small},medium:{borderRadius:e.controlBorderRadius.medium,fontSize:e.textSizes.medium.fontSize||16,height:e.controlHeights.medium,paddingLeft:e.controlPaddings.medium,paddingRight:e.controlPaddings.medium},large:{borderRadius:e.controlBorderRadius.large,fontSize:e.textSizes.large.fontSize||18,height:e.controlHeights.large,paddingLeft:e.controlPaddings.large,paddingRight:e.controlPaddings.large}}}};t.getTextInputVariables=l,l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTextInputVariables",filename:"src/components/Inputs/TextInput.styles.ts"}}),"undefined"!==typeof TextInputStyles&&TextInputStyles&&TextInputStyles===Object(TextInputStyles)&&Object.isExtensible(TextInputStyles)&&Object.defineProperty(TextInputStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextInputStyles",filename:"src/components/Inputs/TextInput.styles.ts"}}),"undefined"!==typeof TextInputStylesProps&&TextInputStylesProps&&TextInputStylesProps===Object(TextInputStylesProps)&&Object.isExtensible(TextInputStylesProps)&&Object.defineProperty(TextInputStylesProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextInputStylesProps",filename:"src/components/Inputs/TextInput.styles.ts"}}),"undefined"!==typeof GetTextInputStyles&&GetTextInputStyles&&GetTextInputStyles===Object(GetTextInputStyles)&&Object.isExtensible(GetTextInputStyles)&&Object.defineProperty(GetTextInputStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetTextInputStyles",filename:"src/components/Inputs/TextInput.styles.ts"}});var r=function(e,t){var n=e.size,s=e.isDisabled,r=e.isInvalid,i=e.numberOfLines,u=l(t),a=t.controlHeights[n],p=u.base,c=u.disabled,d=u.focus,m=u.invalid,b=u.placeholderTextColor,f=u.sizes[n];return{focusedStyle:d,inputStyle:(0,o.default)({},p,f,s?c:{},r?m:{},i?{height:i*a,paddingVertical:16}:{}),placeholderTextColor:b}};t.getTextInputStyles=r,r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTextInputStyles",filename:"src/components/Inputs/TextInput.styles.ts"}})},"./src/components/Inputs/TextInput.tsx":function(e,t,n){var s=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),o=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.TextInput=void 0;var l=o(n("./node_modules/@babel/runtime/helpers/extends.js")),r=o(n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),i=s(n("./node_modules/react/index.js")),u=n("./node_modules/react-native-web/dist/index.js"),a=n("./src/theme/index.ts"),p=n("./src/utils/mergeStyles.ts"),c=n("./src/components/Inputs/TextInput.styles.ts");"undefined"!==typeof TextInputProps&&TextInputProps&&TextInputProps===Object(TextInputProps)&&Object.isExtensible(TextInputProps)&&Object.defineProperty(TextInputProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextInputProps",filename:"src/components/Inputs/TextInput.tsx"}});var d=function(e){var t=e.isDisabled,n=void 0!==t&&t,s=e.isInvalid,o=void 0!==s&&s,d=e.size,m=void 0===d?"medium":d,b=e.getStyles,f=e.name,I=e.innerRef,x=e.numberOfLines,y=(0,r.default)(e,["isDisabled","isInvalid","size","getStyles","name","innerRef","numberOfLines"]),T=(0,a.useTheme)(),g=(0,p.mergeStyles)(c.getTextInputStyles,b)({isDisabled:n,isInvalid:o,numberOfLines:x,size:m},T),j=g.inputStyle,S=g.placeholderTextColor;return i.createElement(u.TextInput,(0,l.default)({ref:I,style:j,editable:!n,placeholderTextColor:S,name:f,numberOfLines:x},y))},m=i.forwardRef(function(e,t){return i.createElement(d,(0,l.default)({},e,{innerRef:t}))});t.TextInput=m,"undefined"!==typeof m&&m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextInput",filename:"src/components/Inputs/TextInput.tsx"}})},"./src/components/Inputs/index.ts":function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"TextInput",{enumerable:!0,get:function(){return s.ClearableTextInput}}),Object.defineProperty(t,"TextInputProps",{enumerable:!0,get:function(){return s.ClearableTextInputProps}});var s=n("./src/components/Inputs/ClearableTextInput.tsx");"undefined"!==typeof TextInputProps&&TextInputProps&&TextInputProps===Object(TextInputProps)&&Object.isExtensible(TextInputProps)&&Object.defineProperty(TextInputProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextInputProps",filename:"src/components/Inputs/index.ts"}}),"undefined"!==typeof TextInput&&TextInput&&TextInput===Object(TextInput)&&Object.isExtensible(TextInput)&&Object.defineProperty(TextInput,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextInput",filename:"src/components/Inputs/index.ts"}})},"./src/utils/mergeStyles.ts":function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.mergeStyles=void 0;var s=n("./node_modules/deepmerge/dist/umd.js");"undefined"!==typeof GetStyles&&GetStyles&&GetStyles===Object(GetStyles)&&Object.isExtensible(GetStyles)&&Object.defineProperty(GetStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetStyles",filename:"src/utils/mergeStyles.ts"}}),"undefined"!==typeof GetStylesOptional&&GetStylesOptional&&GetStylesOptional===Object(GetStylesOptional)&&Object.isExtensible(GetStylesOptional)&&Object.defineProperty(GetStylesOptional,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetStylesOptional",filename:"src/utils/mergeStyles.ts"}}),"undefined"!==typeof ArgumentTypes&&ArgumentTypes&&ArgumentTypes===Object(ArgumentTypes)&&Object.isExtensible(ArgumentTypes)&&Object.defineProperty(ArgumentTypes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ArgumentTypes",filename:"src/utils/mergeStyles.ts"}}),"undefined"!==typeof ReplaceReturnType&&ReplaceReturnType&&ReplaceReturnType===Object(ReplaceReturnType)&&Object.isExtensible(ReplaceReturnType)&&Object.defineProperty(ReplaceReturnType,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ReplaceReturnType",filename:"src/utils/mergeStyles.ts"}});var o=function(e,t){return function(){var n=e.apply(void 0,arguments);return t?s(n,t.apply(void 0,arguments)):n}};t.mergeStyles=o,o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"mergeStyles",filename:"src/utils/mergeStyles.ts"}})}}]);
//# sourceMappingURL=18.8b6a61fdb1e33ec38c04.js.map