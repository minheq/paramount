(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"./src/components/Box/Box.tsx":function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"a",function(){return c});var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=n("./node_modules/react/index.js"),l=n("./node_modules/react-native-web/dist/exports/View/index.js"),a=n("./src/theme/Theme.tsx");4===Object(4)&&Object.isExtensible(4)&&Object.defineProperty(4,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BASE_BORDER_RADII",filename:"src/components/Box/Box.tsx"}}),"undefined"!==typeof Shape&&Shape&&Shape===Object(Shape)&&Object.isExtensible(Shape)&&Object.defineProperty(Shape,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Shape",filename:"src/components/Box/Box.tsx"}}),"undefined"!==typeof BoxProps&&BoxProps&&BoxProps===Object(BoxProps)&&Object.isExtensible(BoxProps)&&Object.defineProperty(BoxProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxProps",filename:"src/components/Box/Box.tsx"}});var i={circle:{borderRadius:999},pill:{borderRadius:999},rounded:{borderRadius:4},roundedBottom:{borderBottomLeftRadius:4,borderBottomRightRadius:4},roundedLeft:{borderBottomLeftRadius:4,borderTopLeftRadius:4},roundedRight:{borderBottomRightRadius:4,borderTopRightRadius:4},roundedTop:{borderTopLeftRadius:4,borderTopRightRadius:4},square:{borderRadius:0}};"undefined"!==typeof i&&i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"shapeMapping",filename:"src/components/Box/Box.tsx"}});var s={backgroundColor:function(e,t){return t.colors.background[e]?{backgroundColor:t.colors.background[e]}:{backgroundColor:e}},elevation:function(e,t){return t.elevations[e]},shape:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e){return i[e]})},c=function(e){var t=e.children,n=e.style,i=e.testID,c=Object(o.a)(e,["children","style","testID"]),u=Object(a.a)(),b=[],m={};for(var d in c)if(d){var f=s[d];if(f){var p=f(c[d],u);b.push(p)}else m[d]=c[d]}return r.createElement(l.a,{testID:i,style:[m,b,n],__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Box/Box.tsx",lineNumber:101}},t)};"undefined"!==typeof c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Box",filename:"src/components/Box/Box.tsx"}})},"./src/components/Helpers/State.tsx":function(e,t,n){"use strict";n.d(t,"a",function(){return a});var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),r=n("./node_modules/react/index.js"),l=n.n(r);"undefined"!==typeof StateRenderProps&&StateRenderProps&&StateRenderProps===Object(StateRenderProps)&&Object.isExtensible(StateRenderProps)&&Object.defineProperty(StateRenderProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"StateRenderProps",filename:"src/components/Helpers/State.tsx"}}),"undefined"!==typeof StateProps&&StateProps&&StateProps===Object(StateProps)&&Object.isExtensible(StateProps)&&Object.defineProperty(StateProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"StateProps",filename:"src/components/Helpers/State.tsx"}});var a=function(e){var t=e.children,n=e.initial,r=void 0!==n&&n,a=l.a.useState(r),i=Object(o.a)(a,2),s=i[0],c=i[1];return t({state:s,setState:l.a.useCallback(function(e){c(e)},[])})};"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"State",filename:"src/components/Helpers/State.tsx"}})},"./src/components/Icon/Icon.web.tsx":function(e,t,n){"use strict";n.d(t,"a",function(){return i});var o=n("./node_modules/react/index.js"),r=n("./node_modules/react-icons/fi/index.esm.js"),l=n("./src/theme/Theme.tsx"),a=n("./src/components/Typography/Text.styles.ts");var i=function(e){var t=e.name,n=e.color,i=e.size,s=Object(l.a)(),c=r["Fi".concat(function(e){var t=e.replace(/(\-\w)/g,function(e){return e[1].toUpperCase()});return t.charAt(0).toUpperCase()+t.slice(1)}(t))];return o.createElement(c,{color:n?Object(a.c)(s.colors.text)(n):n,size:i,__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Icon/Icon.web.tsx",lineNumber:23}})};"undefined"!==typeof i&&i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Icon",filename:"src/components/Icon/Icon.web.tsx"}})},"./src/components/Inputs/ClearableTextInput.tsx":function(e,t,n){"use strict";var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),l=n("./node_modules/react/index.js"),a=n("./node_modules/react-native-web/dist/exports/TouchableOpacity/index.js"),i=n("./src/theme/Theme.tsx"),s=n("./src/components/Icon/Icon.web.tsx"),c=n("./node_modules/react-native-web/dist/exports/View/index.js"),u=n("./src/utils/mergeStyles.ts"),b=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");"undefined"!==typeof IconTextInputStyles&&IconTextInputStyles&&IconTextInputStyles===Object(IconTextInputStyles)&&Object.isExtensible(IconTextInputStyles)&&Object.defineProperty(IconTextInputStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"IconTextInputStyles",filename:"src/components/Inputs/IconTextInput.styles.ts"}}),"undefined"!==typeof GetIconTextInputStylesProps&&GetIconTextInputStylesProps&&GetIconTextInputStylesProps===Object(GetIconTextInputStylesProps)&&Object.isExtensible(GetIconTextInputStylesProps)&&Object.defineProperty(GetIconTextInputStylesProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetIconTextInputStylesProps",filename:"src/components/Inputs/IconTextInput.styles.ts"}}),"undefined"!==typeof GetIconTextInputStyles&&GetIconTextInputStyles&&GetIconTextInputStyles===Object(GetIconTextInputStyles)&&Object.isExtensible(GetIconTextInputStyles)&&Object.defineProperty(GetIconTextInputStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetIconTextInputStyles",filename:"src/components/Inputs/IconTextInput.styles.ts"}});var m=function(e,t){var n=e.hasLeftIcon,o=e.hasRightIcon;return{containerStyle:{position:"relative"},inputStyle:Object(b.a)({},n&&{paddingLeft:48},o&&{paddingRight:48}),leftContainerStyle:{alignItems:"center",display:"flex",height:"100%",justifyContent:"center",left:0,paddingHorizontal:8,position:"absolute"},rightContainerStyle:{alignItems:"center",display:"flex",height:"100%",justifyContent:"center",paddingHorizontal:8,position:"absolute",right:0}}};m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getIconTextInputStyles",filename:"src/components/Inputs/IconTextInput.styles.ts"}});var d=n("./node_modules/react-native-web/dist/exports/TextInput/index.js");"undefined"!==typeof TextInputStyles&&TextInputStyles&&TextInputStyles===Object(TextInputStyles)&&Object.isExtensible(TextInputStyles)&&Object.defineProperty(TextInputStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextInputStyles",filename:"src/components/Inputs/TextInput.styles.ts"}}),"undefined"!==typeof TextInputStylesProps&&TextInputStylesProps&&TextInputStylesProps===Object(TextInputStylesProps)&&Object.isExtensible(TextInputStylesProps)&&Object.defineProperty(TextInputStylesProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextInputStylesProps",filename:"src/components/Inputs/TextInput.styles.ts"}}),"undefined"!==typeof GetTextInputStyles&&GetTextInputStyles&&GetTextInputStyles===Object(GetTextInputStyles)&&Object.isExtensible(GetTextInputStyles)&&Object.defineProperty(GetTextInputStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetTextInputStyles",filename:"src/components/Inputs/TextInput.styles.ts"}});var f=function(e,t){var n=e.size,o=e.isDisabled,r=e.isInvalid,l=e.numberOfLines,a=t.controlHeights[n];return{focusedStyle:{},inputStyle:Object(b.a)({backgroundColor:t.colors.background.content,borderColor:t.colors.border.default,borderRadius:t.controlBorderRadius[n],borderWidth:1,color:t.colors.text.default,height:t.controlHeights[n],paddingLeft:t.controlPaddings[n],paddingRight:t.controlPaddings[n],width:"100%"},t.textSizes[n],o?{backgroundColor:t.colors.background.greyDark}:{},r?{borderColor:t.colors.border.danger}:{},l?{height:l*a,paddingVertical:16}:{}),placeholderTextColor:t.colors.text.muted}};f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTextInputStyles",filename:"src/components/Inputs/TextInput.styles.ts"}});var p="/home/travis/build/WeTrustPlatform/paramount/src/components/Inputs/TextInput.tsx";"undefined"!==typeof TextInputProps&&TextInputProps&&TextInputProps===Object(TextInputProps)&&Object.isExtensible(TextInputProps)&&Object.defineProperty(TextInputProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextInputProps",filename:"src/components/Inputs/TextInput.tsx"}});var x=function(e){var t=e.isDisabled,n=void 0!==t&&t,a=e.isInvalid,s=void 0!==a&&a,c=e.size,b=void 0===c?"medium":c,m=e.getStyles,x=e.name,g=e.innerRef,y=e.numberOfLines,h=Object(r.a)(e,["isDisabled","isInvalid","size","getStyles","name","innerRef","numberOfLines"]),j=Object(i.a)(),O=Object(u.a)(f,m)({isDisabled:n,isInvalid:s,numberOfLines:y,size:b},j),T=O.inputStyle,_=O.placeholderTextColor;return l.createElement(d.a,Object(o.a)({ref:g,style:T,editable:!n,placeholderTextColor:_,name:x,numberOfLines:y},h,{__source:{fileName:p,lineNumber:57}}))},g=l.forwardRef(function(e,t){return l.createElement(x,Object(o.a)({},e,{innerRef:t,__source:{fileName:p,lineNumber:71}}))});"undefined"!==typeof g&&g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextInput",filename:"src/components/Inputs/TextInput.tsx"}});var y="/home/travis/build/WeTrustPlatform/paramount/src/components/Inputs/IconTextInput.tsx";"undefined"!==typeof IconTextInputProps&&IconTextInputProps&&IconTextInputProps===Object(IconTextInputProps)&&Object.isExtensible(IconTextInputProps)&&Object.defineProperty(IconTextInputProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"IconTextInputProps",filename:"src/components/Inputs/IconTextInput.tsx"}});var h=function(e){var t=e.leftIcon,n=void 0===t?null:t,a=e.rightIcon,s=void 0===a?null:a,b=e.getStyles,d=e.innerRef,f=Object(r.a)(e,["leftIcon","rightIcon","getStyles","innerRef"]),p=Object(i.a)(),x=Object(u.a)(m,b,p.components.getTextInputStyles)({hasLeftIcon:!!n,hasRightIcon:!!s},p),h=x.containerStyle,j=x.leftContainerStyle,O=x.rightContainerStyle,T=x.inputStyle;return l.createElement(c.a,{style:h,__source:{fileName:y,lineNumber:46}},l.createElement(c.a,{style:j,__source:{fileName:y,lineNumber:47}},n),l.createElement(g,Object(o.a)({ref:d,getStyles:function(){return{inputStyle:T}}},f,{__source:{fileName:y,lineNumber:48}})),l.createElement(c.a,{style:O,__source:{fileName:y,lineNumber:55}},s))},j=l.forwardRef(function(e,t){return l.createElement(h,Object(o.a)({},e,{innerRef:t,__source:{fileName:y,lineNumber:61}}))});"undefined"!==typeof j&&j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"IconTextInput",filename:"src/components/Inputs/IconTextInput.tsx"}}),n.d(t,"a",function(){return _});var O="/home/travis/build/WeTrustPlatform/paramount/src/components/Inputs/ClearableTextInput.tsx";"undefined"!==typeof ClearableTextInputProps&&ClearableTextInputProps&&ClearableTextInputProps===Object(ClearableTextInputProps)&&Object.isExtensible(ClearableTextInputProps)&&Object.defineProperty(ClearableTextInputProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ClearableTextInputProps",filename:"src/components/Inputs/ClearableTextInput.tsx"}});var T=function(e){var t=e.onClear,n=e.innerRef,c=e.onChangeText,u=e.value,b=e.isClearable,m=e.rightIcon,d=Object(r.a)(e,["onClear","innerRef","onChangeText","value","isClearable","rightIcon"]),f=Object(i.a)();return l.createElement(j,Object(o.a)({ref:n,onChangeText:c,value:u,rightIcon:u&&b?l.createElement(a.a,{onPress:function(){c&&c(""),t&&t()},__source:{fileName:O,lineNumber:32}},l.createElement(s.a,{name:"x",size:24,color:f.colors.text.default,__source:{fileName:O,lineNumber:38}})):m||null},d,{__source:{fileName:O,lineNumber:26}}))},_=l.forwardRef(function(e,t){return l.createElement(T,Object(o.a)({},e,{innerRef:t,__source:{fileName:O,lineNumber:52}}))});"undefined"!==typeof _&&_&&_===Object(_)&&Object.isExtensible(_)&&Object.defineProperty(_,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ClearableTextInput",filename:"src/components/Inputs/ClearableTextInput.tsx"}})},"./src/components/Inputs/TextInput.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return f});var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),l=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),a=n("./node_modules/docz/dist/index.esm.js"),i=n("./src/components/Box/Box.tsx"),s=n("./src/components/Helpers/State.tsx"),c=n("./src/components/Icon/Icon.web.tsx"),u=n("./src/components/Inputs/ClearableTextInput.tsx"),b="/home/travis/build/WeTrustPlatform/paramount/src/components/Inputs/TextInput.mdx",m={},d="wrapper";function f(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(l.b)(d,Object(r.a)({},m,n,{components:t,mdxType:"MDXLayout",__source:{fileName:b,lineNumber:21}}),Object(l.b)("h1",Object(r.a)({id:"textinput"},{__source:{fileName:b,lineNumber:24}}),"TextInput"),Object(l.b)("p",{__source:{fileName:b,lineNumber:27}},"Composes of React Native's ",Object(l.b)("inlineCode",{parentName:"p",__source:{fileName:b,lineNumber:27}},"TextInput")," component (i.e. you can pass its props). ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://facebook.github.io/react-native/docs/textinput"},{__source:{fileName:b,lineNumber:27}}),"See more details")),Object(l.b)("h3",Object(r.a)({id:"usage"},{__source:{fileName:b,lineNumber:30}}),"Usage"),Object(l.b)(a.c,{__position:0,__code:'<State initial={{ value: \'\' }}>\n  {({ state, setState }) => (\n    <TextInput\n      name="field"\n      value={state.value}\n      placeholder="Add your own placeholder"\n      size="large"\n      isDisabled={false}\n      isInvalid={false}\n      keyboardType="email-address"\n      onChangeText={text => setState({ value: text })}\n      onSubmitEditing={e => console.log(\'Submit on enter\')}\n      leftIcon={\n        <Box>\n          <Icon name="menu" size={24} />\n        </Box>\n      }\n      rightIcon={undefined}\n      isClearable={true} // Mutually exclusive with rightIcon\n      onClear={() => console.log(\'Cleared!\')} // Only triggered with `isClearable`\n      getStyles={(props, theme) => ({\n        inputStyle: {},\n        placeholderTextColor: theme.colors.text.muted,\n      })}\n    />\n  )}\n</State>',__scope:{props:this?this.props:n,Playground:a.c,Props:a.d,Box:i.a,State:s.a,Icon:c.a,TextInput:u.a},mdxType:"Playground",__source:{fileName:b,lineNumber:33}},Object(l.b)(s.a,{initial:{value:""},mdxType:"State",__source:{fileName:b,lineNumber:42}},function(e){var t=e.state,n=e.setState;return Object(l.b)(u.a,{name:"field",value:t.value,placeholder:"Add your own placeholder",size:"large",isDisabled:!1,isInvalid:!1,keyboardType:"email-address",onChangeText:function(e){return n({value:e})},onSubmitEditing:function(e){return console.log("Submit on enter")},leftIcon:Object(l.b)(i.a,{mdxType:"Box",__source:{fileName:b,lineNumber:50}},Object(l.b)(c.a,{name:"menu",size:24,mdxType:"Icon",__source:{fileName:b,lineNumber:51}})),rightIcon:void 0,isClearable:!0,onClear:function(){return console.log("Cleared!")},getStyles:function(e,t){return{inputStyle:{},placeholderTextColor:t.colors.text.muted}},mdxType:"TextInput",__source:{fileName:b,lineNumber:48}})})))}f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Inputs/TextInput.mdx"}}),f.isMDXComponent=!0},"./src/components/Typography/Text.styles.ts":function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return l}),n.d(t,"c",function(){return a}),n.d(t,"d",function(){return s});var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");"undefined"!==typeof TextStylesProps&&TextStylesProps&&TextStylesProps===Object(TextStylesProps)&&Object.isExtensible(TextStylesProps)&&Object.defineProperty(TextStylesProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextStylesProps",filename:"src/components/Typography/Text.styles.ts"}}),"undefined"!==typeof TextStyles&&TextStyles&&TextStyles===Object(TextStyles)&&Object.isExtensible(TextStyles)&&Object.defineProperty(TextStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextStyles",filename:"src/components/Typography/Text.styles.ts"}}),"undefined"!==typeof GetTextStyles&&GetTextStyles&&GetTextStyles===Object(GetTextStyles)&&Object.isExtensible(GetTextStyles)&&Object.defineProperty(GetTextStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetTextStyles",filename:"src/components/Typography/Text.styles.ts"}});var r=function(e){return function(t){return e[t]}};"undefined"!==typeof r&&r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getFontFamily",filename:"src/components/Typography/Text.styles.ts"}});var l=function(e){return function(t){if(t)return e[t]||t}};"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getFontWeight",filename:"src/components/Typography/Text.styles.ts"}});var a=function(e){return function(t){return e[t]||t}};"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTextColor",filename:"src/components/Typography/Text.styles.ts"}});var i=function(e){return function(t){return e[t]||{fontSize:t}}};i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTextSize",filename:"src/components/Typography/Text.styles.ts"}});var s=function(e,t){var n=e.size,s=e.color,c=e.fontFamily,u=e.isInline,b=e.isItalic,m=e.align,d=e.transform,f=e.weight,p=i(t.textSizes)(n);return{textStyle:Object(o.a)({},p,{color:a(t.colors.text)(s),fontFamily:r(t.fontFamilies)(c),fontWeight:l(t.fontWeights)(f)||p.fontWeight,textAlign:m},u?{alignSelf:"flex-start",flexDirection:"row"}:{},b&&{fontStyle:"italic"},d&&{textTransform:d})}};"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTextStyles",filename:"src/components/Typography/Text.styles.ts"}})},"./src/theme/Theme.tsx":function(e,t,n){"use strict";var o=n("./node_modules/deepmerge/dist/umd.js"),r=n.n(o),l=n("./node_modules/react/index.js"),a=n.n(l),i=n("./node_modules/react-native-web/dist/exports/Platform/index.js");"undefined"!==typeof ColorPalette&&ColorPalette&&ColorPalette===Object(ColorPalette)&&Object.isExtensible(ColorPalette)&&Object.defineProperty(ColorPalette,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ColorPalette",filename:"src/theme/palette.ts"}}),"undefined"!==typeof Palette&&Palette&&Palette===Object(Palette)&&Object.isExtensible(Palette)&&Object.defineProperty(Palette,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Palette",filename:"src/theme/palette.ts"}});var s={lightest:"#fafafa",light:"#eeeeee",base:"#cccccc",dark:"#a7a7a7",darkest:"#7e7e7e"},c={lightest:"#e5f5ff",light:"#ceecff",base:"#1ca5F7",dark:"#59a9de",darkest:"#33495f"},u={lightest:"#f9e1de",light:"#f9aa9f",base:"#d26557",dark:"#bb584e",darkest:"#b74033"},b={lightest:"#fce8cf",light:"#f2c58a",base:"#f3b058",dark:"#ec8e30",darkest:"#b26500"},m={lightest:"#fef8e7",light:"#fbe6a2",base:"#f7d154",dark:"#d1b047",darkest:"#7e6514"},d={lightest:"#eafff3",light:"#c2edd5",base:"#54bf84",dark:"#42a46e",darkest:"#16a054"},f={lightest:"#d6fcf7",light:"#c0f9f2",base:"#67c6bb",dark:"#3fa296",darkest:"#1b877a"},p={lightest:"#f8f7fc",light:"#eae7f8",base:"#735dd0",dark:"#37248f",darkest:"#37248f"};"undefined"!==typeof purple&&purple&&purple===Object(purple)&&Object.isExtensible(purple)&&Object.defineProperty(purple,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"purple",filename:"src/theme/palette.ts"}}),"undefined"!==typeof teal&&teal&&teal===Object(teal)&&Object.isExtensible(teal)&&Object.defineProperty(teal,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"teal",filename:"src/theme/palette.ts"}}),"undefined"!==typeof green&&green&&green===Object(green)&&Object.isExtensible(green)&&Object.defineProperty(green,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"green",filename:"src/theme/palette.ts"}}),"undefined"!==typeof yellow&&yellow&&yellow===Object(yellow)&&Object.isExtensible(yellow)&&Object.defineProperty(yellow,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"yellow",filename:"src/theme/palette.ts"}}),"undefined"!==typeof orange&&orange&&orange===Object(orange)&&Object.isExtensible(orange)&&Object.defineProperty(orange,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"orange",filename:"src/theme/palette.ts"}}),"undefined"!==typeof red&&red&&red===Object(red)&&Object.isExtensible(red)&&Object.defineProperty(red,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"red",filename:"src/theme/palette.ts"}}),"undefined"!==typeof blue&&blue&&blue===Object(blue)&&Object.isExtensible(blue)&&Object.defineProperty(blue,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"blue",filename:"src/theme/palette.ts"}}),"undefined"!==typeof neutral&&neutral&&neutral===Object(neutral)&&Object.isExtensible(neutral)&&Object.defineProperty(neutral,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"neutral",filename:"src/theme/palette.ts"}});var x={background:{base:"white",content:"white",overlay:"rgba(0,0,0,0.3)",greyLight:s.lightest,greyDefault:"#F5F6F7",greyDark:s.light,primaryLight:f.lightest,primaryDefault:f.base,primaryDark:f.dark,secondaryLight:b.lightest,secondaryDefault:b.base,secondaryDark:b.dark,dangerLight:u.lightest,dangerDefault:u.base,dangerDark:u.dark,infoLight:c.lightest,infoDefault:c.base,infoDark:c.dark,successLight:d.lightest,successDefault:d.base,successDark:d.dark,warningLight:b.lightest,warningDefault:b.base,warningDark:b.dark},border:{default:s.light,primary:f.darkest,secondary:b.darkest,danger:u.darkest,info:c.darkest,success:d.darkest,warning:b.darkest},button:{disabled:s.light,disabledText:s.darkest,default:s.lightest,defaultText:s.darkest,primary:f.base,primaryText:"white",secondary:b.base,secondaryText:"white",danger:u.base,dangerText:"white"},text:{link:s.darkest,default:s.darkest,muted:s.dark,white:"white",selected:"white",primary:f.darkest,secondary:b.darkest,danger:u.darkest,info:c.darkest,success:d.darkest,warning:b.darkest}},g=[{elevation:0,shadowColor:s.dark,shadowOffset:{width:0,height:0},shadowOpacity:0,shadowRadius:0},{elevation:1,shadowColor:s.dark,shadowOffset:{width:1,height:1},shadowOpacity:.15,shadowRadius:8},{elevation:2,shadowColor:s.dark,shadowOffset:{width:2,height:2},shadowOpacity:.2,shadowRadius:10},{elevation:3,shadowColor:s.dark,shadowOffset:{width:3,height:3},shadowOpacity:.25,shadowRadius:12},{elevation:4,shadowColor:s.dark,shadowOffset:{width:4,height:4},shadowOpacity:.3,shadowRadius:8},{elevation:5,shadowColor:s.dark,shadowOffset:{width:5,height:5},shadowOpacity:.35,shadowRadius:8}],y={colors:x,fills:{solid:{neutral:{backgroundColor:s.base,color:"white"},blue:{backgroundColor:c.base,color:"white"},red:{backgroundColor:u.base,color:"white"},orange:{backgroundColor:b.base,color:"white"},yellow:{backgroundColor:m.base,color:m.darkest},green:{backgroundColor:d.base,color:"white"},teal:{backgroundColor:f.base,color:"white"},purple:{backgroundColor:p.base,color:"white"}},subtle:{neutral:{backgroundColor:s.light,color:s.darkest},blue:{backgroundColor:c.light,color:c.darkest},red:{backgroundColor:u.light,color:u.darkest},orange:{backgroundColor:b.light,color:b.darkest},yellow:{backgroundColor:m.light,color:m.darkest},green:{backgroundColor:d.light,color:d.darkest},teal:{backgroundColor:f.light,color:f.darkest},purple:{backgroundColor:p.light,color:p.darkest}}},fontFamilies:"web"===i.a.OS?{heading:'"SF UI Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',mono:'"SF Mono", "Monaco", "Inconsolata", "Fira Mono", "Droid Sans Mono", "Source Code Pro", monospace',text:'"SF UI Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'}:{heading:void 0,mono:void 0,text:void 0},fontWeights:{bold:"bold",light:"300",normal:"normal"},headingSizes:{xxxlarge:{fontSize:35,letterSpacing:-.2,lineHeight:40},xxlarge:{fontSize:29,letterSpacing:-.2,lineHeight:32},xlarge:{fontSize:24,letterSpacing:-.07,lineHeight:28},large:{fontSize:20,letterSpacing:-.07,lineHeight:24},medium:{fontSize:16,letterSpacing:-.05,lineHeight:20},small:{fontSize:14,letterSpacing:-.05,lineHeight:20}},paragraphSizes:{small:{fontSize:14,lineHeight:24},medium:{fontSize:16,lineHeight:21},large:{fontSize:18,lineHeight:18}},textSizes:{large:{fontSize:20},medium:{fontSize:16},small:{fontSize:14}},elevations:g,controlBorderRadius:{small:4,medium:4,large:4},controlHeights:{small:40,medium:48,large:56},controlPaddings:{small:8,medium:16,large:24},components:{}};"undefined"!==typeof y&&y&&y===Object(y)&&Object.isExtensible(y)&&Object.defineProperty(y,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"defaultTheme",filename:"src/theme/defaultTheme.ts"}}),n.d(t,"a",function(){return T});"undefined"!==typeof TextSizes&&TextSizes&&TextSizes===Object(TextSizes)&&Object.isExtensible(TextSizes)&&Object.defineProperty(TextSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof TextSize&&TextSize&&TextSize===Object(TextSize)&&Object.isExtensible(TextSize)&&Object.defineProperty(TextSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof HeadingSizes&&HeadingSizes&&HeadingSizes===Object(HeadingSizes)&&Object.isExtensible(HeadingSizes)&&Object.defineProperty(HeadingSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HeadingSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof HeadingSize&&HeadingSize&&HeadingSize===Object(HeadingSize)&&Object.isExtensible(HeadingSize)&&Object.defineProperty(HeadingSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HeadingSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ParagraphSizes&&ParagraphSizes&&ParagraphSizes===Object(ParagraphSizes)&&Object.isExtensible(ParagraphSizes)&&Object.defineProperty(ParagraphSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ParagraphSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ParagraphSize&&ParagraphSize&&ParagraphSize===Object(ParagraphSize)&&Object.isExtensible(ParagraphSize)&&Object.defineProperty(ParagraphSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ParagraphSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontFamilies&&FontFamilies&&FontFamilies===Object(FontFamilies)&&Object.isExtensible(FontFamilies)&&Object.defineProperty(FontFamilies,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontFamilies",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontFamily&&FontFamily&&FontFamily===Object(FontFamily)&&Object.isExtensible(FontFamily)&&Object.defineProperty(FontFamily,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontFamily",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof RNFontWeight&&RNFontWeight&&RNFontWeight===Object(RNFontWeight)&&Object.isExtensible(RNFontWeight)&&Object.defineProperty(RNFontWeight,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"RNFontWeight",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontWeights&&FontWeights&&FontWeights===Object(FontWeights)&&Object.isExtensible(FontWeights)&&Object.defineProperty(FontWeights,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontWeights",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontWeight&&FontWeight&&FontWeight===Object(FontWeight)&&Object.isExtensible(FontWeight)&&Object.defineProperty(FontWeight,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontWeight",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof TextColors&&TextColors&&TextColors===Object(TextColors)&&Object.isExtensible(TextColors)&&Object.defineProperty(TextColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof TextColor&&TextColor&&TextColor===Object(TextColor)&&Object.isExtensible(TextColor)&&Object.defineProperty(TextColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ButtonColors&&ButtonColors&&ButtonColors===Object(ButtonColors)&&Object.isExtensible(ButtonColors)&&Object.defineProperty(ButtonColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ButtonColorsWithText&&ButtonColorsWithText&&ButtonColorsWithText===Object(ButtonColorsWithText)&&Object.isExtensible(ButtonColorsWithText)&&Object.defineProperty(ButtonColorsWithText,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColorsWithText",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ButtonColor&&ButtonColor&&ButtonColor===Object(ButtonColor)&&Object.isExtensible(ButtonColor)&&Object.defineProperty(ButtonColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BorderColors&&BorderColors&&BorderColors===Object(BorderColors)&&Object.isExtensible(BorderColors)&&Object.defineProperty(BorderColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BorderColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BorderColor&&BorderColor&&BorderColor===Object(BorderColor)&&Object.isExtensible(BorderColor)&&Object.defineProperty(BorderColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BorderColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BackgroundColors&&BackgroundColors&&BackgroundColors===Object(BackgroundColors)&&Object.isExtensible(BackgroundColors)&&Object.defineProperty(BackgroundColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BackgroundColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BackgroundColor&&BackgroundColor&&BackgroundColor===Object(BackgroundColor)&&Object.isExtensible(BackgroundColor)&&Object.defineProperty(BackgroundColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BackgroundColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Colors&&Colors&&Colors===Object(Colors)&&Object.isExtensible(Colors)&&Object.defineProperty(Colors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Colors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Elevations&&Elevations&&Elevations===Object(Elevations)&&Object.isExtensible(Elevations)&&Object.defineProperty(Elevations,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Elevations",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Elevation&&Elevation&&Elevation===Object(Elevation)&&Object.isExtensible(Elevation)&&Object.defineProperty(Elevation,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Elevation",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ControlSizes&&ControlSizes&&ControlSizes===Object(ControlSizes)&&Object.isExtensible(ControlSizes)&&Object.defineProperty(ControlSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ControlSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ControlSize&&ControlSize&&ControlSize===Object(ControlSize)&&Object.isExtensible(ControlSize)&&Object.defineProperty(ControlSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ControlSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FillColorProps&&FillColorProps&&FillColorProps===Object(FillColorProps)&&Object.isExtensible(FillColorProps)&&Object.defineProperty(FillColorProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FillColorProps",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FillColors&&FillColors&&FillColors===Object(FillColors)&&Object.isExtensible(FillColors)&&Object.defineProperty(FillColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FillColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FillColor&&FillColor&&FillColor===Object(FillColor)&&Object.isExtensible(FillColor)&&Object.defineProperty(FillColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FillColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Fills&&Fills&&Fills===Object(Fills)&&Object.isExtensible(Fills)&&Object.defineProperty(Fills,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Fills",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Theme&&Theme&&Theme===Object(Theme)&&Object.isExtensible(Theme)&&Object.defineProperty(Theme,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Theme",filename:"src/theme/Theme.tsx"}});var h=a.a.createContext(y);"undefined"!==typeof h&&h&&h===Object(h)&&Object.isExtensible(h)&&Object.defineProperty(h,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ThemeContext",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ThemeProviderProps&&ThemeProviderProps&&ThemeProviderProps===Object(ThemeProviderProps)&&Object.isExtensible(ThemeProviderProps)&&Object.defineProperty(ThemeProviderProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ThemeProviderProps",filename:"src/theme/Theme.tsx"}});var j=function(e){return e?r()(y,e):y};j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"createTheme",filename:"src/theme/Theme.tsx"}});var O=function(e){var t=e.children,n=e.value,o=j(void 0===n?y:n);return a.a.createElement(h.Provider,{value:o,__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/theme/Theme.tsx",lineNumber:296}},t)};O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ThemeProvider",filename:"src/theme/Theme.tsx"}});var T=function(){return a.a.useContext(h)};"undefined"!==typeof T&&T&&T===Object(T)&&Object.isExtensible(T)&&Object.defineProperty(T,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useTheme",filename:"src/theme/Theme.tsx"}})},"./src/utils/mergeStyles.ts":function(e,t,n){"use strict";n.d(t,"a",function(){return l});var o=n("./node_modules/deepmerge/dist/umd.js"),r=n.n(o);"undefined"!==typeof GetStyles&&GetStyles&&GetStyles===Object(GetStyles)&&Object.isExtensible(GetStyles)&&Object.defineProperty(GetStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetStyles",filename:"src/utils/mergeStyles.ts"}}),"undefined"!==typeof ArgumentTypes&&ArgumentTypes&&ArgumentTypes===Object(ArgumentTypes)&&Object.isExtensible(ArgumentTypes)&&Object.defineProperty(ArgumentTypes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ArgumentTypes",filename:"src/utils/mergeStyles.ts"}}),"undefined"!==typeof ReplaceReturnType&&ReplaceReturnType&&ReplaceReturnType===Object(ReplaceReturnType)&&Object.isExtensible(ReplaceReturnType)&&Object.defineProperty(ReplaceReturnType,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ReplaceReturnType",filename:"src/utils/mergeStyles.ts"}});var l=function(e,t,n){return function(o,l){var a=[e(o,l)];return n&&a.push(n(o,l)),t&&a.push(t(o,l)),r.a.all(a)}};"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"mergeStyles",filename:"src/utils/mergeStyles.ts"}})}}]);
//# sourceMappingURL=21.b8f475e7b30fb9f052b5.js.map