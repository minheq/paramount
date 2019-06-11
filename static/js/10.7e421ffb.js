(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"./src/components/Icon/Icon.web.tsx":function(e,t,n){var l=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),t.Icon=void 0;var r=l(n("./node_modules/react/index.js")),o=l(n("./node_modules/react-icons/fi/index.esm.js")),a=n("./src/theme/index.ts"),i=n("./src/components/Typography/Text.styles.ts");var s=function(e){var t=e.name,n=e.color,l=e.size,s=(0,a.useTheme)(),u=o["Fi".concat(function(e){var t=e.replace(/(\-\w)/g,function(e){return e[1].toUpperCase()});return t.charAt(0).toUpperCase()+t.slice(1)}(t))];return r.createElement(u,{color:n?(0,i.getTextColor)(s.colors.text)(n):n,size:l})};t.Icon=s,s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Icon",filename:"src/components/Icon/Icon.web.tsx"}})},"./src/components/Icon/index.ts":function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var l=n("./src/components/Icon/Icon.web.tsx");Object.keys(l).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return l[e]}})})},"./src/components/Inputs/ClearableTextInput.tsx":function(e,t,n){var l=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.ClearableTextInput=void 0;var o=r(n("./node_modules/@babel/runtime/helpers/extends.js")),a=r(n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),i=l(n("./node_modules/react/index.js")),s=n("./node_modules/react-native-web/dist/index.js"),u=n("./src/theme/index.ts"),d=n("./src/components/Icon/index.ts"),c=n("./src/components/Inputs/IconTextInput.tsx");"undefined"!==typeof ClearableTextInputProps&&ClearableTextInputProps&&ClearableTextInputProps===Object(ClearableTextInputProps)&&Object.isExtensible(ClearableTextInputProps)&&Object.defineProperty(ClearableTextInputProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ClearableTextInputProps",filename:"src/components/Inputs/ClearableTextInput.tsx"}});var f=function(e){var t=e.onClear,n=e.innerRef,l=e.onChangeText,r=e.value,f=e.isClearable,m=e.rightIcon,p=(0,a.default)(e,["onClear","innerRef","onChangeText","value","isClearable","rightIcon"]),b=(0,u.useTheme)();return i.createElement(c.IconTextInput,(0,o.default)({ref:n,onChangeText:l,value:r,rightIcon:r&&f?i.createElement(s.TouchableOpacity,{onPress:function(){l&&l(""),t&&t()}},i.createElement(d.Icon,{name:"x",size:24,color:b.colors.text.default})):m||null},p))},m=i.forwardRef(function(e,t){return i.createElement(f,(0,o.default)({},e,{innerRef:t}))});t.ClearableTextInput=m,"undefined"!==typeof m&&m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ClearableTextInput",filename:"src/components/Inputs/ClearableTextInput.tsx"}})},"./src/components/Inputs/IconTextInput.styles.ts":function(e,t,n){var l=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.getIconTextInputStyles=void 0;var r=l(n("./node_modules/@babel/runtime/helpers/objectSpread.js"));"undefined"!==typeof IconTextInputStyles&&IconTextInputStyles&&IconTextInputStyles===Object(IconTextInputStyles)&&Object.isExtensible(IconTextInputStyles)&&Object.defineProperty(IconTextInputStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"IconTextInputStyles",filename:"src/components/Inputs/IconTextInput.styles.ts"}}),"undefined"!==typeof GetIconTextInputStylesProps&&GetIconTextInputStylesProps&&GetIconTextInputStylesProps===Object(GetIconTextInputStylesProps)&&Object.isExtensible(GetIconTextInputStylesProps)&&Object.defineProperty(GetIconTextInputStylesProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetIconTextInputStylesProps",filename:"src/components/Inputs/IconTextInput.styles.ts"}}),"undefined"!==typeof GetIconTextInputStyles&&GetIconTextInputStyles&&GetIconTextInputStyles===Object(GetIconTextInputStyles)&&Object.isExtensible(GetIconTextInputStyles)&&Object.defineProperty(GetIconTextInputStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetIconTextInputStyles",filename:"src/components/Inputs/IconTextInput.styles.ts"}});var o=function(e,t){var n=e.hasLeftIcon,l=e.hasRightIcon;return{containerStyle:{position:"relative"},inputStyle:(0,r.default)({},n&&{paddingLeft:48},l&&{paddingRight:48}),leftContainerStyle:{alignItems:"center",display:"flex",height:"100%",justifyContent:"center",left:0,paddingHorizontal:8,position:"absolute"},rightContainerStyle:{alignItems:"center",display:"flex",height:"100%",justifyContent:"center",paddingHorizontal:8,position:"absolute",right:0}}};t.getIconTextInputStyles=o,o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getIconTextInputStyles",filename:"src/components/Inputs/IconTextInput.styles.ts"}})},"./src/components/Inputs/IconTextInput.tsx":function(e,t,n){var l=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.IconTextInput=void 0;var o=r(n("./node_modules/@babel/runtime/helpers/extends.js")),a=r(n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),i=l(n("./node_modules/react/index.js")),s=n("./node_modules/react-native-web/dist/index.js"),u=n("./src/theme/index.ts"),d=n("./src/utils/mergeStyles.ts"),c=n("./src/components/Inputs/IconTextInput.styles.ts"),f=n("./src/components/Inputs/TextInput.tsx");"undefined"!==typeof IconTextInputProps&&IconTextInputProps&&IconTextInputProps===Object(IconTextInputProps)&&Object.isExtensible(IconTextInputProps)&&Object.defineProperty(IconTextInputProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"IconTextInputProps",filename:"src/components/Inputs/IconTextInput.tsx"}});var m=function(e){var t=e.leftIcon,n=void 0===t?null:t,l=e.rightIcon,r=void 0===l?null:l,m=e.getStyles,p=e.innerRef,b=(0,a.default)(e,["leftIcon","rightIcon","getStyles","innerRef"]),x=(0,u.useTheme)(),g=(0,d.mergeStyles)(c.getIconTextInputStyles,m,x.components.getTextInputStyles)({hasLeftIcon:!!n,hasRightIcon:!!r},x),y=g.containerStyle,h=g.leftContainerStyle,T=g.rightContainerStyle,j=g.inputStyle;return i.createElement(s.View,{style:y},i.createElement(s.View,{style:h},n),i.createElement(f.TextInput,(0,o.default)({ref:p,getStyles:function(){return{inputStyle:j}}},b)),i.createElement(s.View,{style:T},r))},p=i.forwardRef(function(e,t){return i.createElement(m,(0,o.default)({},e,{innerRef:t}))});t.IconTextInput=p,"undefined"!==typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"IconTextInput",filename:"src/components/Inputs/IconTextInput.tsx"}})},"./src/components/Inputs/TextInput.mdx":function(e,t,n){var l=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=p;var r=l(n("./node_modules/@babel/runtime/helpers/extends.js")),o=l(n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),a=(l(n("./node_modules/react/index.js")),n("./node_modules/@mdx-js/react/dist/index.es.js")),i=n("./node_modules/docz/dist/index.esm.js"),s=n("./node_modules/react-powerplug/dist/react-powerplug.esm.js"),u=n("./node_modules/react-native-web/dist/index.js"),d=n("./src/components/Icon/index.ts"),c=n("./src/components/Inputs/index.ts"),f={},m="wrapper";function p(e){var t=e.components,n=(0,o.default)(e,["components"]);return(0,a.mdx)(m,(0,r.default)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"textinput"},"TextInput"),(0,a.mdx)("p",null,"Composes of React Native's ",(0,a.mdx)("inlineCode",{parentName:"p"},"TextInput")," component (i.e. you can pass its props). ",(0,a.mdx)("a",(0,r.default)({parentName:"p"},{href:"https://facebook.github.io/react-native/docs/textinput"}),"See more details")),(0,a.mdx)("h3",{id:"usage"},"Usage"),(0,a.mdx)(i.Playground,{__position:0,__code:'<State initial={{ value: \'\' }}>\n  {({ state, setState }) => (\n    <TextInput\n      name="field"\n      value={state.value}\n      placeholder="Add your own placeholder"\n      size="large"\n      isDisabled={false}\n      isInvalid={false}\n      keyboardType="email-address"\n      onChangeText={text => setState({ value: text })}\n      onSubmitEditing={e => console.log(\'Submit on enter\')}\n      leftIcon={\n        <View>\n          <Icon name="menu" size={24} />\n        </View>\n      }\n      rightIcon={undefined}\n      isClearable={true} // Mutually exclusive with rightIcon\n      onClear={() => console.log(\'Cleared!\')} // Only triggered with `isClearable`\n      getStyles={(props, theme) => ({\n        inputStyle: {},\n        placeholderTextColor: theme.colors.text.muted,\n      })}\n    />\n  )}\n</State>',__scope:{props:this?this.props:n,Playground:i.Playground,Props:i.Props,State:s.State,View:u.View,Icon:d.Icon,TextInput:c.TextInput},mdxType:"Playground"},(0,a.mdx)(s.State,{initial:{value:""},mdxType:"State"},function(e){var t=e.state,n=e.setState;return(0,a.mdx)(c.TextInput,{name:"field",value:t.value,placeholder:"Add your own placeholder",size:"large",isDisabled:!1,isInvalid:!1,keyboardType:"email-address",onChangeText:function(e){return n({value:e})},onSubmitEditing:function(e){return console.log("Submit on enter")},leftIcon:(0,a.mdx)(u.View,{mdxType:"View"},(0,a.mdx)(d.Icon,{name:"menu",size:24,mdxType:"Icon"})),rightIcon:void 0,isClearable:!0,onClear:function(){return console.log("Cleared!")},getStyles:function(e,t){return{inputStyle:{},placeholderTextColor:t.colors.text.muted}},mdxType:"TextInput"})})))}p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Inputs/TextInput.mdx"}}),p.isMDXComponent=!0},"./src/components/Inputs/TextInput.styles.ts":function(e,t,n){var l=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.getTextInputStyles=void 0;var r=l(n("./node_modules/@babel/runtime/helpers/objectSpread.js"));"undefined"!==typeof TextInputStyles&&TextInputStyles&&TextInputStyles===Object(TextInputStyles)&&Object.isExtensible(TextInputStyles)&&Object.defineProperty(TextInputStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextInputStyles",filename:"src/components/Inputs/TextInput.styles.ts"}}),"undefined"!==typeof TextInputStylesProps&&TextInputStylesProps&&TextInputStylesProps===Object(TextInputStylesProps)&&Object.isExtensible(TextInputStylesProps)&&Object.defineProperty(TextInputStylesProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextInputStylesProps",filename:"src/components/Inputs/TextInput.styles.ts"}}),"undefined"!==typeof GetTextInputStyles&&GetTextInputStyles&&GetTextInputStyles===Object(GetTextInputStyles)&&Object.isExtensible(GetTextInputStyles)&&Object.defineProperty(GetTextInputStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetTextInputStyles",filename:"src/components/Inputs/TextInput.styles.ts"}});var o=function(e,t){var n=e.size,l=e.isDisabled,o=e.isInvalid,a=e.numberOfLines,i=t.controlHeights[n];return{focusedStyle:{},inputStyle:(0,r.default)({backgroundColor:t.colors.background.content,borderColor:t.colors.border.default,borderRadius:t.controlBorderRadius[n],borderWidth:1,color:t.colors.text.default,height:t.controlHeights[n],paddingLeft:t.controlPaddings[n],paddingRight:t.controlPaddings[n],width:"100%"},t.textSizes[n],l?{backgroundColor:t.colors.background.greyDark}:{},o?{borderColor:t.colors.border.danger}:{},a?{height:a*i,paddingVertical:16}:{}),placeholderTextColor:t.colors.text.muted}};t.getTextInputStyles=o,o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTextInputStyles",filename:"src/components/Inputs/TextInput.styles.ts"}})},"./src/components/Inputs/TextInput.tsx":function(e,t,n){var l=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.TextInput=void 0;var o=r(n("./node_modules/@babel/runtime/helpers/extends.js")),a=r(n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),i=l(n("./node_modules/react/index.js")),s=n("./node_modules/react-native-web/dist/index.js"),u=n("./src/theme/index.ts"),d=n("./src/utils/mergeStyles.ts"),c=n("./src/components/Inputs/TextInput.styles.ts");"undefined"!==typeof TextInputProps&&TextInputProps&&TextInputProps===Object(TextInputProps)&&Object.isExtensible(TextInputProps)&&Object.defineProperty(TextInputProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextInputProps",filename:"src/components/Inputs/TextInput.tsx"}});var f=function(e){var t=e.isDisabled,n=void 0!==t&&t,l=e.isInvalid,r=void 0!==l&&l,f=e.size,m=void 0===f?"medium":f,p=e.getStyles,b=e.name,x=e.innerRef,g=e.numberOfLines,y=(0,a.default)(e,["isDisabled","isInvalid","size","getStyles","name","innerRef","numberOfLines"]),h=(0,u.useTheme)(),T=(0,d.mergeStyles)(c.getTextInputStyles,p)({isDisabled:n,isInvalid:r,numberOfLines:g,size:m},h),j=T.inputStyle,O=T.placeholderTextColor;return i.createElement(s.TextInput,(0,o.default)({ref:x,style:j,editable:!n,placeholderTextColor:O,name:b,numberOfLines:g},y))},m=i.forwardRef(function(e,t){return i.createElement(f,(0,o.default)({},e,{innerRef:t}))});t.TextInput=m,"undefined"!==typeof m&&m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextInput",filename:"src/components/Inputs/TextInput.tsx"}})},"./src/components/Inputs/index.ts":function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"TextInput",{enumerable:!0,get:function(){return l.ClearableTextInput}}),Object.defineProperty(t,"TextInputProps",{enumerable:!0,get:function(){return l.ClearableTextInputProps}});var l=n("./src/components/Inputs/ClearableTextInput.tsx");"undefined"!==typeof TextInputProps&&TextInputProps&&TextInputProps===Object(TextInputProps)&&Object.isExtensible(TextInputProps)&&Object.defineProperty(TextInputProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextInputProps",filename:"src/components/Inputs/index.ts"}}),"undefined"!==typeof TextInput&&TextInput&&TextInput===Object(TextInput)&&Object.isExtensible(TextInput)&&Object.defineProperty(TextInput,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextInput",filename:"src/components/Inputs/index.ts"}})},"./src/components/Typography/Text.styles.ts":function(e,t,n){var l=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.getTextStyles=t.getTextSize=t.getTextColor=t.getFontWeight=t.getFontFamily=void 0;var r=l(n("./node_modules/@babel/runtime/helpers/objectSpread.js"));"undefined"!==typeof TextStylesProps&&TextStylesProps&&TextStylesProps===Object(TextStylesProps)&&Object.isExtensible(TextStylesProps)&&Object.defineProperty(TextStylesProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextStylesProps",filename:"src/components/Typography/Text.styles.ts"}}),"undefined"!==typeof TextStyles&&TextStyles&&TextStyles===Object(TextStyles)&&Object.isExtensible(TextStyles)&&Object.defineProperty(TextStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextStyles",filename:"src/components/Typography/Text.styles.ts"}}),"undefined"!==typeof GetTextStyles&&GetTextStyles&&GetTextStyles===Object(GetTextStyles)&&Object.isExtensible(GetTextStyles)&&Object.defineProperty(GetTextStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetTextStyles",filename:"src/components/Typography/Text.styles.ts"}});var o=function(e){return function(t){return e[t]}};t.getFontFamily=o,o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getFontFamily",filename:"src/components/Typography/Text.styles.ts"}});var a=function(e){return function(t){if(t)return e[t]||t}};t.getFontWeight=a,a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getFontWeight",filename:"src/components/Typography/Text.styles.ts"}});var i=function(e){return function(t){return e[t]||t}};t.getTextColor=i,i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTextColor",filename:"src/components/Typography/Text.styles.ts"}});var s=function(e){return function(t){return e[t]||{fontSize:t}}};t.getTextSize=s,s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTextSize",filename:"src/components/Typography/Text.styles.ts"}});var u=function(e,t){var n=e.size,l=e.color,u=e.fontFamily,d=e.isInline,c=e.isItalic,f=e.align,m=e.transform,p=e.weight,b=s(t.textSizes)(n);return{textStyle:(0,r.default)({},b,{color:i(t.colors.text)(l),fontFamily:o(t.fontFamilies)(u),fontWeight:a(t.fontWeights)(p)||b.fontWeight,textAlign:f},d?{alignSelf:"flex-start",flexDirection:"row"}:{},c&&{fontStyle:"italic"},m&&{textTransform:m})}};t.getTextStyles=u,u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTextStyles",filename:"src/components/Typography/Text.styles.ts"}})},"./src/theme/Theme.tsx":function(e,t,n){var l=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.useTheme=t.ThemeProvider=t.createTheme=t.ThemeContext=void 0;var r=l(n("./node_modules/deepmerge/dist/umd.js")),o=l(n("./node_modules/react/index.js")),a=n("./src/theme/defaultTheme.ts");"undefined"!==typeof TextSizes&&TextSizes&&TextSizes===Object(TextSizes)&&Object.isExtensible(TextSizes)&&Object.defineProperty(TextSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof TextSize&&TextSize&&TextSize===Object(TextSize)&&Object.isExtensible(TextSize)&&Object.defineProperty(TextSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof HeadingSizes&&HeadingSizes&&HeadingSizes===Object(HeadingSizes)&&Object.isExtensible(HeadingSizes)&&Object.defineProperty(HeadingSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HeadingSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof HeadingSize&&HeadingSize&&HeadingSize===Object(HeadingSize)&&Object.isExtensible(HeadingSize)&&Object.defineProperty(HeadingSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HeadingSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ParagraphSizes&&ParagraphSizes&&ParagraphSizes===Object(ParagraphSizes)&&Object.isExtensible(ParagraphSizes)&&Object.defineProperty(ParagraphSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ParagraphSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ParagraphSize&&ParagraphSize&&ParagraphSize===Object(ParagraphSize)&&Object.isExtensible(ParagraphSize)&&Object.defineProperty(ParagraphSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ParagraphSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontFamilies&&FontFamilies&&FontFamilies===Object(FontFamilies)&&Object.isExtensible(FontFamilies)&&Object.defineProperty(FontFamilies,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontFamilies",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontFamily&&FontFamily&&FontFamily===Object(FontFamily)&&Object.isExtensible(FontFamily)&&Object.defineProperty(FontFamily,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontFamily",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof RNFontWeight&&RNFontWeight&&RNFontWeight===Object(RNFontWeight)&&Object.isExtensible(RNFontWeight)&&Object.defineProperty(RNFontWeight,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"RNFontWeight",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontWeights&&FontWeights&&FontWeights===Object(FontWeights)&&Object.isExtensible(FontWeights)&&Object.defineProperty(FontWeights,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontWeights",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontWeight&&FontWeight&&FontWeight===Object(FontWeight)&&Object.isExtensible(FontWeight)&&Object.defineProperty(FontWeight,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontWeight",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof TextColors&&TextColors&&TextColors===Object(TextColors)&&Object.isExtensible(TextColors)&&Object.defineProperty(TextColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof TextColor&&TextColor&&TextColor===Object(TextColor)&&Object.isExtensible(TextColor)&&Object.defineProperty(TextColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ButtonColors&&ButtonColors&&ButtonColors===Object(ButtonColors)&&Object.isExtensible(ButtonColors)&&Object.defineProperty(ButtonColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ButtonColorsWithText&&ButtonColorsWithText&&ButtonColorsWithText===Object(ButtonColorsWithText)&&Object.isExtensible(ButtonColorsWithText)&&Object.defineProperty(ButtonColorsWithText,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColorsWithText",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ButtonColor&&ButtonColor&&ButtonColor===Object(ButtonColor)&&Object.isExtensible(ButtonColor)&&Object.defineProperty(ButtonColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BorderColors&&BorderColors&&BorderColors===Object(BorderColors)&&Object.isExtensible(BorderColors)&&Object.defineProperty(BorderColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BorderColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BorderColor&&BorderColor&&BorderColor===Object(BorderColor)&&Object.isExtensible(BorderColor)&&Object.defineProperty(BorderColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BorderColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BackgroundColors&&BackgroundColors&&BackgroundColors===Object(BackgroundColors)&&Object.isExtensible(BackgroundColors)&&Object.defineProperty(BackgroundColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BackgroundColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BackgroundColor&&BackgroundColor&&BackgroundColor===Object(BackgroundColor)&&Object.isExtensible(BackgroundColor)&&Object.defineProperty(BackgroundColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BackgroundColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Colors&&Colors&&Colors===Object(Colors)&&Object.isExtensible(Colors)&&Object.defineProperty(Colors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Colors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Elevations&&Elevations&&Elevations===Object(Elevations)&&Object.isExtensible(Elevations)&&Object.defineProperty(Elevations,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Elevations",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Elevation&&Elevation&&Elevation===Object(Elevation)&&Object.isExtensible(Elevation)&&Object.defineProperty(Elevation,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Elevation",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ControlSizes&&ControlSizes&&ControlSizes===Object(ControlSizes)&&Object.isExtensible(ControlSizes)&&Object.defineProperty(ControlSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ControlSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ControlSize&&ControlSize&&ControlSize===Object(ControlSize)&&Object.isExtensible(ControlSize)&&Object.defineProperty(ControlSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ControlSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FillColorProps&&FillColorProps&&FillColorProps===Object(FillColorProps)&&Object.isExtensible(FillColorProps)&&Object.defineProperty(FillColorProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FillColorProps",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FillColors&&FillColors&&FillColors===Object(FillColors)&&Object.isExtensible(FillColors)&&Object.defineProperty(FillColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FillColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FillColor&&FillColor&&FillColor===Object(FillColor)&&Object.isExtensible(FillColor)&&Object.defineProperty(FillColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FillColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Fills&&Fills&&Fills===Object(Fills)&&Object.isExtensible(Fills)&&Object.defineProperty(Fills,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Fills",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Theme&&Theme&&Theme===Object(Theme)&&Object.isExtensible(Theme)&&Object.defineProperty(Theme,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Theme",filename:"src/theme/Theme.tsx"}});var i=o.default.createContext(a.defaultTheme);t.ThemeContext=i,"undefined"!==typeof i&&i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ThemeContext",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ThemeProviderProps&&ThemeProviderProps&&ThemeProviderProps===Object(ThemeProviderProps)&&Object.isExtensible(ThemeProviderProps)&&Object.defineProperty(ThemeProviderProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ThemeProviderProps",filename:"src/theme/Theme.tsx"}});var s=function(e){return e?(0,r.default)(a.defaultTheme,e):a.defaultTheme};t.createTheme=s,s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"createTheme",filename:"src/theme/Theme.tsx"}});var u=function(e){var t=e.children,n=e.value,l=void 0===n?a.defaultTheme:n,r=s(l);return o.default.createElement(i.Provider,{value:r},t)};t.ThemeProvider=u,u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ThemeProvider",filename:"src/theme/Theme.tsx"}});var d=function(){return o.default.useContext(i)};t.useTheme=d,d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useTheme",filename:"src/theme/Theme.tsx"}})},"./src/theme/defaultTheme.ts":function(e,t,n){var l=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.defaultTheme=void 0;var r=n("./node_modules/react-native-web/dist/index.js"),o=l(n("./src/theme/palette.ts")),a={background:{base:"white",content:"white",overlay:"rgba(0,0,0,0.3)",greyLight:o.default.neutral.lightest,greyDefault:"#F5F6F7",greyDark:o.default.neutral.light,primaryLight:o.default.teal.lightest,primaryDefault:o.default.teal.base,primaryDark:o.default.teal.dark,secondaryLight:o.default.orange.lightest,secondaryDefault:o.default.orange.base,secondaryDark:o.default.orange.dark,dangerLight:o.default.red.lightest,dangerDefault:o.default.red.base,dangerDark:o.default.red.dark,infoLight:o.default.blue.lightest,infoDefault:o.default.blue.base,infoDark:o.default.blue.dark,successLight:o.default.green.lightest,successDefault:o.default.green.base,successDark:o.default.green.dark,warningLight:o.default.orange.lightest,warningDefault:o.default.orange.base,warningDark:o.default.orange.dark},border:{default:o.default.neutral.light,primary:o.default.teal.darkest,secondary:o.default.orange.darkest,danger:o.default.red.darkest,info:o.default.blue.darkest,success:o.default.green.darkest,warning:o.default.orange.darkest},button:{disabled:o.default.neutral.light,disabledText:o.default.neutral.darkest,default:o.default.neutral.lightest,defaultText:o.default.neutral.darkest,primary:o.default.teal.base,primaryText:"white",secondary:o.default.orange.base,secondaryText:"white",danger:o.default.red.base,dangerText:"white"},text:{link:o.default.neutral.darkest,default:o.default.neutral.darkest,muted:o.default.neutral.dark,white:"white",selected:"white",primary:o.default.teal.darkest,secondary:o.default.orange.darkest,danger:o.default.red.darkest,info:o.default.blue.darkest,success:o.default.green.darkest,warning:o.default.orange.darkest}},i=[{elevation:0,shadowColor:o.default.neutral.dark,shadowOffset:{width:0,height:0},shadowOpacity:0,shadowRadius:0},{elevation:1,shadowColor:o.default.neutral.dark,shadowOffset:{width:1,height:1},shadowOpacity:.15,shadowRadius:8},{elevation:2,shadowColor:o.default.neutral.dark,shadowOffset:{width:2,height:2},shadowOpacity:.2,shadowRadius:10},{elevation:3,shadowColor:o.default.neutral.dark,shadowOffset:{width:3,height:3},shadowOpacity:.25,shadowRadius:12},{elevation:4,shadowColor:o.default.neutral.dark,shadowOffset:{width:4,height:4},shadowOpacity:.3,shadowRadius:8},{elevation:5,shadowColor:o.default.neutral.dark,shadowOffset:{width:5,height:5},shadowOpacity:.35,shadowRadius:8}],s={colors:a,fills:{solid:{neutral:{backgroundColor:o.default.neutral.base,color:"white"},blue:{backgroundColor:o.default.blue.base,color:"white"},red:{backgroundColor:o.default.red.base,color:"white"},orange:{backgroundColor:o.default.orange.base,color:"white"},yellow:{backgroundColor:o.default.yellow.base,color:o.default.yellow.darkest},green:{backgroundColor:o.default.green.base,color:"white"},teal:{backgroundColor:o.default.teal.base,color:"white"},purple:{backgroundColor:o.default.purple.base,color:"white"}},subtle:{neutral:{backgroundColor:o.default.neutral.light,color:o.default.neutral.darkest},blue:{backgroundColor:o.default.blue.light,color:o.default.blue.darkest},red:{backgroundColor:o.default.red.light,color:o.default.red.darkest},orange:{backgroundColor:o.default.orange.light,color:o.default.orange.darkest},yellow:{backgroundColor:o.default.yellow.light,color:o.default.yellow.darkest},green:{backgroundColor:o.default.green.light,color:o.default.green.darkest},teal:{backgroundColor:o.default.teal.light,color:o.default.teal.darkest},purple:{backgroundColor:o.default.purple.light,color:o.default.purple.darkest}}},fontFamilies:"web"===r.Platform.OS?{heading:'"SF UI Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',mono:'"SF Mono", "Monaco", "Inconsolata", "Fira Mono", "Droid Sans Mono", "Source Code Pro", monospace',text:'"SF UI Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'}:{heading:void 0,mono:void 0,text:void 0},fontWeights:{bold:"bold",light:"300",normal:"normal"},headingSizes:{xxxlarge:{fontSize:35,letterSpacing:-.2,lineHeight:40},xxlarge:{fontSize:29,letterSpacing:-.2,lineHeight:32},xlarge:{fontSize:24,letterSpacing:-.07,lineHeight:28},large:{fontSize:20,letterSpacing:-.07,lineHeight:24},medium:{fontSize:16,letterSpacing:-.05,lineHeight:20},small:{fontSize:14,letterSpacing:-.05,lineHeight:20}},paragraphSizes:{small:{fontSize:14,lineHeight:24},medium:{fontSize:16,lineHeight:21},large:{fontSize:18,lineHeight:18}},textSizes:{large:{fontSize:20},medium:{fontSize:16},small:{fontSize:14}},elevations:i,controlBorderRadius:{small:4,medium:4,large:4},controlHeights:{small:40,medium:48,large:56},controlPaddings:{small:8,medium:16,large:24},components:{}};t.defaultTheme=s,"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"defaultTheme",filename:"src/theme/defaultTheme.ts"}})},"./src/theme/index.ts":function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var l=n("./src/theme/defaultTheme.ts");Object.keys(l).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return l[e]}})});var r=n("./src/theme/Theme.tsx");Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})})},"./src/theme/palette.ts":function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,"undefined"!==typeof ColorPalette&&ColorPalette&&ColorPalette===Object(ColorPalette)&&Object.isExtensible(ColorPalette)&&Object.defineProperty(ColorPalette,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ColorPalette",filename:"src/theme/palette.ts"}}),"undefined"!==typeof Palette&&Palette&&Palette===Object(Palette)&&Object.isExtensible(Palette)&&Object.defineProperty(Palette,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Palette",filename:"src/theme/palette.ts"}});t.default={neutral:{lightest:"#fafafa",light:"#eeeeee",base:"#cccccc",dark:"#a7a7a7",darkest:"#7e7e7e"},blue:{lightest:"#e5f5ff",light:"#ceecff",base:"#1ca5F7",dark:"#59a9de",darkest:"#33495f"},red:{lightest:"#f9e1de",light:"#f9aa9f",base:"#d26557",dark:"#bb584e",darkest:"#b74033"},orange:{lightest:"#fce8cf",light:"#f2c58a",base:"#f3b058",dark:"#ec8e30",darkest:"#b26500"},yellow:{lightest:"#fef8e7",light:"#fbe6a2",base:"#f7d154",dark:"#d1b047",darkest:"#7e6514"},green:{lightest:"#eafff3",light:"#c2edd5",base:"#54bf84",dark:"#42a46e",darkest:"#16a054"},teal:{lightest:"#d6fcf7",light:"#c0f9f2",base:"#67c6bb",dark:"#3fa296",darkest:"#1b877a"},purple:{lightest:"#f8f7fc",light:"#eae7f8",base:"#735dd0",dark:"#37248f",darkest:"#37248f"}},"undefined"!==typeof purple&&purple&&purple===Object(purple)&&Object.isExtensible(purple)&&Object.defineProperty(purple,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"purple",filename:"src/theme/palette.ts"}}),"undefined"!==typeof teal&&teal&&teal===Object(teal)&&Object.isExtensible(teal)&&Object.defineProperty(teal,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"teal",filename:"src/theme/palette.ts"}}),"undefined"!==typeof green&&green&&green===Object(green)&&Object.isExtensible(green)&&Object.defineProperty(green,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"green",filename:"src/theme/palette.ts"}}),"undefined"!==typeof yellow&&yellow&&yellow===Object(yellow)&&Object.isExtensible(yellow)&&Object.defineProperty(yellow,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"yellow",filename:"src/theme/palette.ts"}}),"undefined"!==typeof orange&&orange&&orange===Object(orange)&&Object.isExtensible(orange)&&Object.defineProperty(orange,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"orange",filename:"src/theme/palette.ts"}}),"undefined"!==typeof red&&red&&red===Object(red)&&Object.isExtensible(red)&&Object.defineProperty(red,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"red",filename:"src/theme/palette.ts"}}),"undefined"!==typeof blue&&blue&&blue===Object(blue)&&Object.isExtensible(blue)&&Object.defineProperty(blue,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"blue",filename:"src/theme/palette.ts"}}),"undefined"!==typeof neutral&&neutral&&neutral===Object(neutral)&&Object.isExtensible(neutral)&&Object.defineProperty(neutral,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"neutral",filename:"src/theme/palette.ts"}})},"./src/utils/mergeStyles.ts":function(e,t,n){var l=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.mergeStyles=void 0;var r=l(n("./node_modules/deepmerge/dist/umd.js"));"undefined"!==typeof GetStyles&&GetStyles&&GetStyles===Object(GetStyles)&&Object.isExtensible(GetStyles)&&Object.defineProperty(GetStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetStyles",filename:"src/utils/mergeStyles.ts"}}),"undefined"!==typeof ArgumentTypes&&ArgumentTypes&&ArgumentTypes===Object(ArgumentTypes)&&Object.isExtensible(ArgumentTypes)&&Object.defineProperty(ArgumentTypes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ArgumentTypes",filename:"src/utils/mergeStyles.ts"}}),"undefined"!==typeof ReplaceReturnType&&ReplaceReturnType&&ReplaceReturnType===Object(ReplaceReturnType)&&Object.isExtensible(ReplaceReturnType)&&Object.defineProperty(ReplaceReturnType,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ReplaceReturnType",filename:"src/utils/mergeStyles.ts"}});var o=function(e,t,n){return function(l,o){var a=[e(l,o)];return n&&a.push(n(l,o)),t&&a.push(t(l,o)),r.default.all(a)}};t.mergeStyles=o,o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"mergeStyles",filename:"src/utils/mergeStyles.ts"}})}}]);
//# sourceMappingURL=10.58d4baec849292285fb2.js.map