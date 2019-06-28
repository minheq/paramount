(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"./src/components/Helpers/State.tsx":function(e,t,r){"use strict";r.d(t,"a",function(){return l});var i=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),a=r("./node_modules/react/index.js"),n=r.n(a);"undefined"!==typeof StateRenderProps&&StateRenderProps&&StateRenderProps===Object(StateRenderProps)&&Object.isExtensible(StateRenderProps)&&Object.defineProperty(StateRenderProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"StateRenderProps",filename:"src/components/Helpers/State.tsx"}}),"undefined"!==typeof StateProps&&StateProps&&StateProps===Object(StateProps)&&Object.isExtensible(StateProps)&&Object.defineProperty(StateProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"StateProps",filename:"src/components/Helpers/State.tsx"}});var l=function(e){var t=e.children,r=e.initial,a=void 0!==r&&r,l=n.a.useState(a),o=Object(i.a)(l,2),s=o[0],c=o[1];return t({state:s,setState:n.a.useCallback(function(e){c(e)},[])})};"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"State",filename:"src/components/Helpers/State.tsx"}})},"./src/components/Icon/Icon.web.tsx":function(e,t,r){"use strict";r.d(t,"a",function(){return o});var i=r("./node_modules/react/index.js"),a=r("./node_modules/react-icons/fi/index.esm.js"),n=r("./src/theme/Theme.tsx"),l=r("./src/components/Typography/Text.styles.ts");var o=function(e){var t=e.name,r=e.color,o=e.size,s=void 0===o?24:o,c=Object(n.a)(),m=a["Fi".concat(function(e){var t=e.replace(/(\-\w)/g,function(e){return e[1].toUpperCase()});return t.charAt(0).toUpperCase()+t.slice(1)}(t))];return i.createElement(m,{color:r?Object(l.b)(c.colors.text)(r):r,size:s,__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Icon/Icon.web.tsx",lineNumber:23}})};"undefined"!==typeof o&&o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Icon",filename:"src/components/Icon/Icon.web.tsx"}})},"./src/components/Pickers/NativePicker.mdx":function(e,t,r){"use strict";r.r(t),r.d(t,"default",function(){return d});var i=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),n=(r("./node_modules/react/index.js"),r("./node_modules/@mdx-js/react/dist/index.es.js")),l=r("./node_modules/docz/dist/index.esm.js"),o=r("./src/components/Pickers/NativePicker.tsx"),s=r("./src/components/Pickers/NativePickerItem.tsx"),c=r("./src/components/Helpers/State.tsx"),m="/home/travis/build/WeTrustPlatform/paramount/src/components/Pickers/NativePicker.mdx",u={},b="wrapper";function d(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(n.b)(b,Object(a.a)({},u,r,{components:t,mdxType:"MDXLayout",__source:{fileName:m,lineNumber:21}}),Object(n.b)("h1",Object(a.a)({id:"nativepicker"},{__source:{fileName:m,lineNumber:24}}),"NativePicker"),Object(n.b)("h2",Object(a.a)({id:"usage"},{__source:{fileName:m,lineNumber:27}}),"Usage"),Object(n.b)("p",{__source:{fileName:m,lineNumber:30}},"Composes React Native's ",Object(n.b)("inlineCode",{parentName:"p",__source:{fileName:m,lineNumber:30}},"Picker")),Object(n.b)(l.c,{__position:0,__code:'<State initial={{ value: \'js\' }}>\n  {({ state, setState }) => (\n    <NativePicker\n      selectedValue={state.value}\n      onValueChange={(itemValue, itemIndex) => setState({ value: itemValue })}\n      size="large"\n    >\n      <NativePickerItem label="C" value="c" />\n      <NativePickerItem label="C#" value="c#" />\n      <NativePickerItem label="C++" value="c++" />\n      <NativePickerItem label="CSS" value="css" />\n      <NativePickerItem label="Elixir" value="elixir" />\n      <NativePickerItem label="Elm" value="elm" />\n      <NativePickerItem label="Erlang" value="erlang" />\n      <NativePickerItem label="Go" value="go" />\n      <NativePickerItem label="Haskell" value="haskell" />\n      <NativePickerItem label="HTML" value="html" />\n      <NativePickerItem label="Java" value="java" />\n      <NativePickerItem label="JavaScript" value="js" />\n      <NativePickerItem label="Lua" value="lua" />\n      <NativePickerItem label="Python" value="python" />\n      <NativePickerItem label="R" value="r" />\n      <NativePickerItem label="Ruby" value="ruby" />\n      <NativePickerItem label="Rust" value="rust" />\n      <NativePickerItem label="Switft" value="swift" />\n      <NativePickerItem label="Typescript" value="typescript" />\n    </NativePicker>\n  )}\n</State>',__scope:{props:this?this.props:r,Playground:l.c,Props:l.d,NativePicker:o.a,NativePickerItem:s.a,State:c.a},mdxType:"Playground",__source:{fileName:m,lineNumber:31}},Object(n.b)(c.a,{initial:{value:"js"},mdxType:"State",__source:{fileName:m,lineNumber:39}},function(e){var t=e.state,r=e.setState;return Object(n.b)(o.a,{selectedValue:t.value,onValueChange:function(e,t){return r({value:e})},size:"large",mdxType:"NativePicker",__source:{fileName:m,lineNumber:45}},Object(n.b)(s.a,{label:"C",value:"c",mdxType:"NativePickerItem",__source:{fileName:m,lineNumber:48}}),Object(n.b)(s.a,{label:"C#",value:"c#",mdxType:"NativePickerItem",__source:{fileName:m,lineNumber:49}}),Object(n.b)(s.a,{label:"C++",value:"c++",mdxType:"NativePickerItem",__source:{fileName:m,lineNumber:50}}),Object(n.b)(s.a,{label:"CSS",value:"css",mdxType:"NativePickerItem",__source:{fileName:m,lineNumber:51}}),Object(n.b)(s.a,{label:"Elixir",value:"elixir",mdxType:"NativePickerItem",__source:{fileName:m,lineNumber:52}}),Object(n.b)(s.a,{label:"Elm",value:"elm",mdxType:"NativePickerItem",__source:{fileName:m,lineNumber:53}}),Object(n.b)(s.a,{label:"Erlang",value:"erlang",mdxType:"NativePickerItem",__source:{fileName:m,lineNumber:54}}),Object(n.b)(s.a,{label:"Go",value:"go",mdxType:"NativePickerItem",__source:{fileName:m,lineNumber:55}}),Object(n.b)(s.a,{label:"Haskell",value:"haskell",mdxType:"NativePickerItem",__source:{fileName:m,lineNumber:56}}),Object(n.b)(s.a,{label:"HTML",value:"html",mdxType:"NativePickerItem",__source:{fileName:m,lineNumber:57}}),Object(n.b)(s.a,{label:"Java",value:"java",mdxType:"NativePickerItem",__source:{fileName:m,lineNumber:58}}),Object(n.b)(s.a,{label:"JavaScript",value:"js",mdxType:"NativePickerItem",__source:{fileName:m,lineNumber:59}}),Object(n.b)(s.a,{label:"Lua",value:"lua",mdxType:"NativePickerItem",__source:{fileName:m,lineNumber:60}}),Object(n.b)(s.a,{label:"Python",value:"python",mdxType:"NativePickerItem",__source:{fileName:m,lineNumber:61}}),Object(n.b)(s.a,{label:"R",value:"r",mdxType:"NativePickerItem",__source:{fileName:m,lineNumber:62}}),Object(n.b)(s.a,{label:"Ruby",value:"ruby",mdxType:"NativePickerItem",__source:{fileName:m,lineNumber:63}}),Object(n.b)(s.a,{label:"Rust",value:"rust",mdxType:"NativePickerItem",__source:{fileName:m,lineNumber:64}}),Object(n.b)(s.a,{label:"Switft",value:"swift",mdxType:"NativePickerItem",__source:{fileName:m,lineNumber:65}}),Object(n.b)(s.a,{label:"Typescript",value:"typescript",mdxType:"NativePickerItem",__source:{fileName:m,lineNumber:66}}))})),Object(n.b)("h2",Object(a.a)({id:"nativepickeritem-props"},{__source:{fileName:m,lineNumber:70}}),"NativePickerItem Props"),Object(n.b)("p",{__source:{fileName:m,lineNumber:73}},"Extends native ",Object(n.b)("inlineCode",{parentName:"p",__source:{fileName:m,lineNumber:73}},"Picker.Item")),Object(n.b)(l.d,{of:s.a,mdxType:"Props",__source:{fileName:m,lineNumber:74}}),Object(n.b)("h2",Object(a.a)({id:"nativepicker-props"},{__source:{fileName:m,lineNumber:75}}),"NativePicker Props"),Object(n.b)("p",{__source:{fileName:m,lineNumber:78}},"Extends native ",Object(n.b)("inlineCode",{parentName:"p",__source:{fileName:m,lineNumber:78}},"Picker")),Object(n.b)(l.d,{of:o.a,mdxType:"Props",__source:{fileName:m,lineNumber:79}}),Object(n.b)("h2",Object(a.a)({id:"customization"},{__source:{fileName:m,lineNumber:80}}),"Customization"),Object(n.b)("p",{__source:{fileName:m,lineNumber:83}},"Using ",Object(n.b)("inlineCode",{parentName:"p",__source:{fileName:m,lineNumber:83}},"getStyles")," prop"),Object(n.b)("pre",{__source:{fileName:m,lineNumber:84}},Object(n.b)("code",Object(a.a)({parentName:"pre"},{},{__source:{fileName:m,lineNumber:84}}),"NativePickerStyles {\n  containerStyle: ViewStyle;\n  rightContainerStyle: ViewStyle;\n  pickerStyle: ViewStyle;\n  itemStyle: ViewStyle;\n}\n\ngetStyles={(NativePickerProps, Theme) => NativePickerStyles}\n")),Object(n.b)("p",{__source:{fileName:m,lineNumber:93}},"Markup"),Object(n.b)("pre",{__source:{fileName:m,lineNumber:94}},Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"},{__source:{fileName:m,lineNumber:94}}),"<View style={containerStyle}>\n  <Picker itemStyle pickerStyle />\n  <View style={rightContainerStyle}>{icon}</View>\n</View>\n")))}d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Pickers/NativePicker.mdx"}}),d.isMDXComponent=!0},"./src/components/Pickers/NativePicker.tsx":function(e,t,r){"use strict";var i=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),a=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),n=r("./node_modules/react/index.js"),l=r("./node_modules/react-native-web/dist/exports/Picker/index.js"),o=r("./src/theme/Theme.tsx"),s=r("./src/utils/mergeStyles.ts"),c=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");"undefined"!==typeof PickerButtonStyles&&PickerButtonStyles&&PickerButtonStyles===Object(PickerButtonStyles)&&Object.isExtensible(PickerButtonStyles)&&Object.defineProperty(PickerButtonStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PickerButtonStyles",filename:"src/components/Pickers/PickerButton.styles.ts"}}),"undefined"!==typeof GetPickerButtonStyles&&GetPickerButtonStyles&&GetPickerButtonStyles===Object(GetPickerButtonStyles)&&Object.isExtensible(GetPickerButtonStyles)&&Object.defineProperty(GetPickerButtonStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetPickerButtonStyles",filename:"src/components/Pickers/PickerButton.styles.ts"}});var m=function(e,t){var r=e.size,i=void 0===r?"medium":r,a={small:{borderRadius:t.controlBorderRadius.small,height:t.controlHeights.small,paddingLeft:t.controlPaddings.small,paddingRight:40},medium:{borderRadius:t.controlBorderRadius.medium,height:t.controlHeights.medium,paddingLeft:t.controlPaddings.medium,paddingRight:40},large:{borderRadius:t.controlBorderRadius.large,height:t.controlHeights.large,paddingLeft:t.controlPaddings.large,paddingRight:40}}[i],n=t.textSizes[i];return{containerStyle:{backgroundColor:t.colors.background.content,position:"relative"},itemStyle:Object(c.a)({},n),pickerStyle:Object(c.a)({appearance:"none",backgroundColor:"transparent",borderColor:t.colors.border.default,borderWidth:1,color:t.colors.text.default,width:"100%"},n,a),rightContainerStyle:{alignItems:"center",display:"flex",height:"100%",justifyContent:"center",paddingHorizontal:8,position:"absolute",right:0,zIndex:-1}}};m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getPickerButtonStyles",filename:"src/components/Pickers/PickerButton.styles.ts"}});var u=r("./node_modules/react-native-web/dist/exports/View/index.js"),b=r("./src/components/Icon/Icon.web.tsx"),d="/home/travis/build/WeTrustPlatform/paramount/src/components/Pickers/PickerButtonWrapper.tsx";"undefined"!==typeof PickerButtonWrapperProps&&PickerButtonWrapperProps&&PickerButtonWrapperProps===Object(PickerButtonWrapperProps)&&Object.isExtensible(PickerButtonWrapperProps)&&Object.defineProperty(PickerButtonWrapperProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PickerButtonWrapperProps",filename:"src/components/Pickers/PickerButtonWrapper.tsx"}});var f=function(e){var t=e.getStyles,r=e.children,i=Object(o.a)(),a=Object(s.a)(m,t,i.components.getPickerButtonStyles)(e,i),l=a.containerStyle,c=a.rightContainerStyle;return n.createElement(u.a,{style:l,__source:{fileName:d,lineNumber:39}},r,n.createElement(u.a,{style:c,__source:{fileName:d,lineNumber:41}},n.createElement(b.a,{name:"chevron-down",size:32,color:i.colors.text.default,__source:{fileName:d,lineNumber:42}})))};f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PickerButtonWrapper",filename:"src/components/Pickers/PickerButtonWrapper.tsx"}}),r.d(t,"a",function(){return h});var p="/home/travis/build/WeTrustPlatform/paramount/src/components/Pickers/NativePicker.tsx";"undefined"!==typeof NativePickerProps&&NativePickerProps&&NativePickerProps===Object(NativePickerProps)&&Object.isExtensible(NativePickerProps)&&Object.defineProperty(NativePickerProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"NativePickerProps",filename:"src/components/Pickers/NativePicker.tsx"}});var g=function(e){e.size;var t=e.getStyles,r=e.innerRef,c=Object(a.a)(e,["size","getStyles","innerRef"]),u=Object(o.a)(),b=Object(s.a)(m,t)(e,u),d=b.pickerStyle,g=b.itemStyle;return n.createElement(f,{getStyles:t,__source:{fileName:p,lineNumber:40}},n.createElement(l.a,Object(i.a)({ref:r,itemStyle:g,style:d},c,{__source:{fileName:p,lineNumber:41}})))},h=n.forwardRef(function(e,t){return n.createElement(g,Object(i.a)({},e,{innerRef:t,__source:{fileName:p,lineNumber:53}}))});"undefined"!==typeof h&&h&&h===Object(h)&&Object.isExtensible(h)&&Object.defineProperty(h,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"NativePicker",filename:"src/components/Pickers/NativePicker.tsx"}})},"./src/components/Pickers/NativePickerItem.tsx":function(e,t,r){"use strict";r.d(t,"a",function(){return a});var i=r("./node_modules/react-native-web/dist/exports/Picker/index.js");"undefined"!==typeof NativePickerItemProps&&NativePickerItemProps&&NativePickerItemProps===Object(NativePickerItemProps)&&Object.isExtensible(NativePickerItemProps)&&Object.defineProperty(NativePickerItemProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"NativePickerItemProps",filename:"src/components/Pickers/NativePickerItem.tsx"}});var a=i.a.Item;"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"NativePickerItem",filename:"src/components/Pickers/NativePickerItem.tsx"}})},"./src/components/Typography/Text.styles.ts":function(e,t,r){"use strict";r.d(t,"a",function(){return a}),r.d(t,"b",function(){return n}),r.d(t,"c",function(){return o});var i=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");"undefined"!==typeof TextStyles&&TextStyles&&TextStyles===Object(TextStyles)&&Object.isExtensible(TextStyles)&&Object.defineProperty(TextStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextStyles",filename:"src/components/Typography/Text.styles.ts"}}),"undefined"!==typeof GetTextStyles&&GetTextStyles&&GetTextStyles===Object(GetTextStyles)&&Object.isExtensible(GetTextStyles)&&Object.defineProperty(GetTextStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetTextStyles",filename:"src/components/Typography/Text.styles.ts"}});var a=function(e){return function(t){if(t)return e[t]||t}};"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getFontWeight",filename:"src/components/Typography/Text.styles.ts"}});var n=function(e){return function(t){return e[t]||t}};"undefined"!==typeof n&&n&&n===Object(n)&&Object.isExtensible(n)&&Object.defineProperty(n,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTextColor",filename:"src/components/Typography/Text.styles.ts"}});var l=function(e){return function(t){return e[t]||{fontSize:t}}};l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTextSize",filename:"src/components/Typography/Text.styles.ts"}});var o=function(e,t){var r=e.color,o=void 0===r?"default":r,s=e.size,c=void 0===s?"medium":s,m=e.align,u=void 0===m?"left":m,b=e.weight,d=e.isItalic,f=void 0!==d&&d,p=e.transform,g=l(t.textSizes)(c);return{textStyle:Object(i.a)({},g,{color:n(t.colors.text)(o),fontFamily:t.fontFamilies.text,fontWeight:a(t.fontWeights)(b)||g.fontWeight,textAlign:u},f&&{fontStyle:"italic"},p&&{textTransform:p})}};"undefined"!==typeof o&&o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTextStyles",filename:"src/components/Typography/Text.styles.ts"}})},"./src/theme/Theme.tsx":function(e,t,r){"use strict";var i=r("./node_modules/deepmerge/dist/umd.js"),a=r.n(i),n=r("./node_modules/react/index.js"),l=r.n(n),o=r("./node_modules/react-native-web/dist/exports/Platform/index.js");"undefined"!==typeof ColorPalette&&ColorPalette&&ColorPalette===Object(ColorPalette)&&Object.isExtensible(ColorPalette)&&Object.defineProperty(ColorPalette,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ColorPalette",filename:"src/theme/palette.ts"}}),"undefined"!==typeof Palette&&Palette&&Palette===Object(Palette)&&Object.isExtensible(Palette)&&Object.defineProperty(Palette,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Palette",filename:"src/theme/palette.ts"}});var s={lightest:"#fafafa",light:"#eeeeee",base:"#cccccc",dark:"#a7a7a7",darkest:"#7e7e7e"},c={lightest:"#e5f5ff",light:"#ceecff",base:"#1ca5F7",dark:"#59a9de",darkest:"#33495f"},m={lightest:"#f9e1de",light:"#f9aa9f",base:"#d26557",dark:"#bb584e",darkest:"#b74033"},u={lightest:"#fce8cf",light:"#f2c58a",base:"#f3b058",dark:"#ec8e30",darkest:"#b26500"},b={lightest:"#fef8e7",light:"#fbe6a2",base:"#f7d154",dark:"#d1b047",darkest:"#7e6514"},d={lightest:"#eafff3",light:"#c2edd5",base:"#54bf84",dark:"#42a46e",darkest:"#16a054"},f={lightest:"#d6fcf7",light:"#c0f9f2",base:"#67c6bb",dark:"#3fa296",darkest:"#1b877a"},p={lightest:"#f8f7fc",light:"#eae7f8",base:"#735dd0",dark:"#37248f",darkest:"#37248f"};"undefined"!==typeof purple&&purple&&purple===Object(purple)&&Object.isExtensible(purple)&&Object.defineProperty(purple,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"purple",filename:"src/theme/palette.ts"}}),"undefined"!==typeof teal&&teal&&teal===Object(teal)&&Object.isExtensible(teal)&&Object.defineProperty(teal,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"teal",filename:"src/theme/palette.ts"}}),"undefined"!==typeof green&&green&&green===Object(green)&&Object.isExtensible(green)&&Object.defineProperty(green,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"green",filename:"src/theme/palette.ts"}}),"undefined"!==typeof yellow&&yellow&&yellow===Object(yellow)&&Object.isExtensible(yellow)&&Object.defineProperty(yellow,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"yellow",filename:"src/theme/palette.ts"}}),"undefined"!==typeof orange&&orange&&orange===Object(orange)&&Object.isExtensible(orange)&&Object.defineProperty(orange,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"orange",filename:"src/theme/palette.ts"}}),"undefined"!==typeof red&&red&&red===Object(red)&&Object.isExtensible(red)&&Object.defineProperty(red,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"red",filename:"src/theme/palette.ts"}}),"undefined"!==typeof blue&&blue&&blue===Object(blue)&&Object.isExtensible(blue)&&Object.defineProperty(blue,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"blue",filename:"src/theme/palette.ts"}}),"undefined"!==typeof neutral&&neutral&&neutral===Object(neutral)&&Object.isExtensible(neutral)&&Object.defineProperty(neutral,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"neutral",filename:"src/theme/palette.ts"}});var g={small:4,medium:4,large:4},h={background:{base:"white",content:"white",overlay:"rgba(0,0,0,0.3)",greyLight:s.lightest,greyDefault:"#F5F6F7",greyDark:s.light,primaryLight:f.lightest,primaryDefault:f.base,primaryDark:f.dark,secondaryLight:u.lightest,secondaryDefault:u.base,secondaryDark:u.dark,dangerLight:m.lightest,dangerDefault:m.base,dangerDark:m.dark,infoLight:c.lightest,infoDefault:c.base,infoDark:c.dark,successLight:d.lightest,successDefault:d.base,successDark:d.dark,warningLight:u.lightest,warningDefault:u.base,warningDark:u.dark},border:{default:s.light,primary:f.darkest,secondary:u.darkest,danger:m.darkest,info:c.darkest,success:d.darkest,warning:u.darkest},button:{disabled:s.light,disabledText:s.darkest,default:s.lightest,defaultText:s.darkest,primary:f.base,primaryText:"white",secondary:u.base,secondaryText:"white",danger:m.base,dangerText:"white"},text:{link:s.darkest,default:s.darkest,muted:s.dark,white:"white",selected:"white",primary:f.darkest,secondary:u.darkest,danger:m.darkest,info:c.darkest,success:d.darkest,warning:u.darkest}},y=[{elevation:0,shadowColor:s.dark,shadowOffset:{width:0,height:0},shadowOpacity:0,shadowRadius:0},{elevation:1,shadowColor:s.dark,shadowOffset:{width:1,height:1},shadowOpacity:.15,shadowRadius:8},{elevation:2,shadowColor:s.dark,shadowOffset:{width:2,height:2},shadowOpacity:.2,shadowRadius:10},{elevation:3,shadowColor:s.dark,shadowOffset:{width:3,height:3},shadowOpacity:.25,shadowRadius:12},{elevation:4,shadowColor:s.dark,shadowOffset:{width:4,height:4},shadowOpacity:.3,shadowRadius:8},{elevation:5,shadowColor:s.dark,shadowOffset:{width:5,height:5},shadowOpacity:.35,shadowRadius:8}],j={colors:h,fills:{solid:{neutral:{backgroundColor:s.base,color:"white"},blue:{backgroundColor:c.base,color:"white"},red:{backgroundColor:m.base,color:"white"},orange:{backgroundColor:u.base,color:"white"},yellow:{backgroundColor:b.base,color:b.darkest},green:{backgroundColor:d.base,color:"white"},teal:{backgroundColor:f.base,color:"white"},purple:{backgroundColor:p.base,color:"white"}},subtle:{neutral:{backgroundColor:s.light,color:s.darkest},blue:{backgroundColor:c.light,color:c.darkest},red:{backgroundColor:m.light,color:m.darkest},orange:{backgroundColor:u.light,color:u.darkest},yellow:{backgroundColor:b.light,color:b.darkest},green:{backgroundColor:d.light,color:d.darkest},teal:{backgroundColor:f.light,color:f.darkest},purple:{backgroundColor:p.light,color:p.darkest}}},fontFamilies:"web"===o.a.OS?{heading:'"SF UI Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',mono:'"SF Mono", "Monaco", "Inconsolata", "Fira Mono", "Droid Sans Mono", "Source Code Pro", monospace',text:'"SF UI Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'}:{heading:"System",mono:"System",text:"System"},fontWeights:{bold:"bold",light:"300",normal:"normal"},headingSizes:{xxxlarge:{fontSize:35,letterSpacing:-.2,lineHeight:40},xxlarge:{fontSize:29,letterSpacing:-.2,lineHeight:32},xlarge:{fontSize:24,letterSpacing:-.07,lineHeight:28},large:{fontSize:20,letterSpacing:-.07,lineHeight:24},medium:{fontSize:16,letterSpacing:-.05,lineHeight:20},small:{fontSize:14,letterSpacing:-.05,lineHeight:20}},paragraphSizes:{small:{fontSize:14,lineHeight:24},medium:{fontSize:16,lineHeight:21},large:{fontSize:18,lineHeight:18}},textSizes:{large:{fontSize:20},medium:{fontSize:16},small:{fontSize:14},xsmall:{fontSize:12}},elevations:y,controlBorderRadius:g,controlHeights:{small:40,medium:48,large:56},controlPaddings:{small:8,medium:16,large:24},containerShapes:{circle:{borderRadius:999},pill:{borderRadius:999},rounded:{borderRadius:g.medium},roundedBottom:{borderBottomLeftRadius:g.medium,borderBottomRightRadius:g.medium},roundedLeft:{borderBottomLeftRadius:g.medium,borderTopLeftRadius:g.medium},roundedRight:{borderBottomRightRadius:g.medium,borderTopRightRadius:g.medium},roundedTop:{borderTopLeftRadius:g.medium,borderTopRightRadius:g.medium},square:{borderRadius:0}},components:{}};"undefined"!==typeof j&&j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"defaultTheme",filename:"src/theme/defaultTheme.ts"}}),r.d(t,"a",function(){return x});"undefined"!==typeof TextSizes&&TextSizes&&TextSizes===Object(TextSizes)&&Object.isExtensible(TextSizes)&&Object.defineProperty(TextSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof TextSize&&TextSize&&TextSize===Object(TextSize)&&Object.isExtensible(TextSize)&&Object.defineProperty(TextSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof HeadingSizes&&HeadingSizes&&HeadingSizes===Object(HeadingSizes)&&Object.isExtensible(HeadingSizes)&&Object.defineProperty(HeadingSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HeadingSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof HeadingSize&&HeadingSize&&HeadingSize===Object(HeadingSize)&&Object.isExtensible(HeadingSize)&&Object.defineProperty(HeadingSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HeadingSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ParagraphSizes&&ParagraphSizes&&ParagraphSizes===Object(ParagraphSizes)&&Object.isExtensible(ParagraphSizes)&&Object.defineProperty(ParagraphSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ParagraphSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ParagraphSize&&ParagraphSize&&ParagraphSize===Object(ParagraphSize)&&Object.isExtensible(ParagraphSize)&&Object.defineProperty(ParagraphSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ParagraphSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontFamilies&&FontFamilies&&FontFamilies===Object(FontFamilies)&&Object.isExtensible(FontFamilies)&&Object.defineProperty(FontFamilies,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontFamilies",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontFamily&&FontFamily&&FontFamily===Object(FontFamily)&&Object.isExtensible(FontFamily)&&Object.defineProperty(FontFamily,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontFamily",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof RNFontWeight&&RNFontWeight&&RNFontWeight===Object(RNFontWeight)&&Object.isExtensible(RNFontWeight)&&Object.defineProperty(RNFontWeight,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"RNFontWeight",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontWeights&&FontWeights&&FontWeights===Object(FontWeights)&&Object.isExtensible(FontWeights)&&Object.defineProperty(FontWeights,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontWeights",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontWeight&&FontWeight&&FontWeight===Object(FontWeight)&&Object.isExtensible(FontWeight)&&Object.defineProperty(FontWeight,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontWeight",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof TextColors&&TextColors&&TextColors===Object(TextColors)&&Object.isExtensible(TextColors)&&Object.defineProperty(TextColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof TextColor&&TextColor&&TextColor===Object(TextColor)&&Object.isExtensible(TextColor)&&Object.defineProperty(TextColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ButtonColors&&ButtonColors&&ButtonColors===Object(ButtonColors)&&Object.isExtensible(ButtonColors)&&Object.defineProperty(ButtonColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ButtonColorsWithText&&ButtonColorsWithText&&ButtonColorsWithText===Object(ButtonColorsWithText)&&Object.isExtensible(ButtonColorsWithText)&&Object.defineProperty(ButtonColorsWithText,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColorsWithText",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ButtonColor&&ButtonColor&&ButtonColor===Object(ButtonColor)&&Object.isExtensible(ButtonColor)&&Object.defineProperty(ButtonColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BorderColors&&BorderColors&&BorderColors===Object(BorderColors)&&Object.isExtensible(BorderColors)&&Object.defineProperty(BorderColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BorderColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BorderColor&&BorderColor&&BorderColor===Object(BorderColor)&&Object.isExtensible(BorderColor)&&Object.defineProperty(BorderColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BorderColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BackgroundColors&&BackgroundColors&&BackgroundColors===Object(BackgroundColors)&&Object.isExtensible(BackgroundColors)&&Object.defineProperty(BackgroundColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BackgroundColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BackgroundColor&&BackgroundColor&&BackgroundColor===Object(BackgroundColor)&&Object.isExtensible(BackgroundColor)&&Object.defineProperty(BackgroundColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BackgroundColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Colors&&Colors&&Colors===Object(Colors)&&Object.isExtensible(Colors)&&Object.defineProperty(Colors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Colors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Elevations&&Elevations&&Elevations===Object(Elevations)&&Object.isExtensible(Elevations)&&Object.defineProperty(Elevations,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Elevations",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Elevation&&Elevation&&Elevation===Object(Elevation)&&Object.isExtensible(Elevation)&&Object.defineProperty(Elevation,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Elevation",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ControlSizes&&ControlSizes&&ControlSizes===Object(ControlSizes)&&Object.isExtensible(ControlSizes)&&Object.defineProperty(ControlSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ControlSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ControlSize&&ControlSize&&ControlSize===Object(ControlSize)&&Object.isExtensible(ControlSize)&&Object.defineProperty(ControlSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ControlSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FillColorProps&&FillColorProps&&FillColorProps===Object(FillColorProps)&&Object.isExtensible(FillColorProps)&&Object.defineProperty(FillColorProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FillColorProps",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FillColors&&FillColors&&FillColors===Object(FillColors)&&Object.isExtensible(FillColors)&&Object.defineProperty(FillColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FillColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FillColor&&FillColor&&FillColor===Object(FillColor)&&Object.isExtensible(FillColor)&&Object.defineProperty(FillColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FillColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Fills&&Fills&&Fills===Object(Fills)&&Object.isExtensible(Fills)&&Object.defineProperty(Fills,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Fills",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ContainerShapes&&ContainerShapes&&ContainerShapes===Object(ContainerShapes)&&Object.isExtensible(ContainerShapes)&&Object.defineProperty(ContainerShapes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ContainerShapes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ContainerShape&&ContainerShape&&ContainerShape===Object(ContainerShape)&&Object.isExtensible(ContainerShape)&&Object.defineProperty(ContainerShape,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ContainerShape",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Theme&&Theme&&Theme===Object(Theme)&&Object.isExtensible(Theme)&&Object.defineProperty(Theme,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Theme",filename:"src/theme/Theme.tsx"}});var P=l.a.createContext(j);"undefined"!==typeof P&&P&&P===Object(P)&&Object.isExtensible(P)&&Object.defineProperty(P,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ThemeContext",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ThemeProviderProps&&ThemeProviderProps&&ThemeProviderProps===Object(ThemeProviderProps)&&Object.isExtensible(ThemeProviderProps)&&Object.defineProperty(ThemeProviderProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ThemeProviderProps",filename:"src/theme/Theme.tsx"}});var v=function(e){return e?a()(j,e):j};v&&v===Object(v)&&Object.isExtensible(v)&&Object.defineProperty(v,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"createTheme",filename:"src/theme/Theme.tsx"}});var O=function(e){var t=e.children,r=e.value,i=v(void 0===r?j:r);return l.a.createElement(P.Provider,{value:i,__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/theme/Theme.tsx",lineNumber:315}},t)};O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ThemeProvider",filename:"src/theme/Theme.tsx"}});var x=function(){return l.a.useContext(P)};"undefined"!==typeof x&&x&&x===Object(x)&&Object.isExtensible(x)&&Object.defineProperty(x,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useTheme",filename:"src/theme/Theme.tsx"}})},"./src/utils/mergeStyles.ts":function(e,t,r){"use strict";r.d(t,"a",function(){return n});var i=r("./node_modules/deepmerge/dist/umd.js"),a=r.n(i);"undefined"!==typeof GetStyles&&GetStyles&&GetStyles===Object(GetStyles)&&Object.isExtensible(GetStyles)&&Object.defineProperty(GetStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetStyles",filename:"src/utils/mergeStyles.ts"}}),"undefined"!==typeof ArgumentTypes&&ArgumentTypes&&ArgumentTypes===Object(ArgumentTypes)&&Object.isExtensible(ArgumentTypes)&&Object.defineProperty(ArgumentTypes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ArgumentTypes",filename:"src/utils/mergeStyles.ts"}}),"undefined"!==typeof ReplaceReturnType&&ReplaceReturnType&&ReplaceReturnType===Object(ReplaceReturnType)&&Object.isExtensible(ReplaceReturnType)&&Object.defineProperty(ReplaceReturnType,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ReplaceReturnType",filename:"src/utils/mergeStyles.ts"}});var n=function(e,t,r){return function(i,n){var l=[e(i,n)];return r&&l.push(r(i,n)),t&&l.push(t(i,n)),a.a.all(l)}};"undefined"!==typeof n&&n&&n===Object(n)&&Object.isExtensible(n)&&Object.defineProperty(n,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"mergeStyles",filename:"src/utils/mergeStyles.ts"}})}}]);
//# sourceMappingURL=19.914343c54a6e55e07260.js.map