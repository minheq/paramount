(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"./src/components/Helpers/State.tsx":function(e,t,r){"use strict";r.d(t,"a",function(){return n});var i=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),a=r("./node_modules/react/index.js"),l=r.n(a);"undefined"!==typeof StateRenderProps&&StateRenderProps&&StateRenderProps===Object(StateRenderProps)&&Object.isExtensible(StateRenderProps)&&Object.defineProperty(StateRenderProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"StateRenderProps",filename:"src/components/Helpers/State.tsx"}}),"undefined"!==typeof StateProps&&StateProps&&StateProps===Object(StateProps)&&Object.isExtensible(StateProps)&&Object.defineProperty(StateProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"StateProps",filename:"src/components/Helpers/State.tsx"}});var n=function(e){var t=e.children,r=e.initial,a=void 0!==r&&r,n=l.a.useState(a),o=Object(i.a)(n,2),s=o[0],c=o[1];return t({state:s,setState:l.a.useCallback(function(e){c(e)},[])})};"undefined"!==typeof n&&n&&n===Object(n)&&Object.isExtensible(n)&&Object.defineProperty(n,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"State",filename:"src/components/Helpers/State.tsx"}})},"./src/components/Icon/Icon.web.tsx":function(e,t,r){"use strict";r.d(t,"a",function(){return o});var i=r("./node_modules/react/index.js"),a=r("./node_modules/react-icons/fi/index.esm.js"),l=r("./src/theme/Theme.tsx"),n=r("./src/components/Typography/Text.styles.ts");var o=function(e){var t=e.name,r=e.color,o=e.size,s=Object(l.a)(),c=a["Fi".concat(function(e){var t=e.replace(/(\-\w)/g,function(e){return e[1].toUpperCase()});return t.charAt(0).toUpperCase()+t.slice(1)}(t))];return i.createElement(c,{color:r?Object(n.c)(s.colors.text)(r):r,size:o,__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Icon/Icon.web.tsx",lineNumber:23}})};"undefined"!==typeof o&&o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Icon",filename:"src/components/Icon/Icon.web.tsx"}})},"./src/components/Pickers/NativePicker.mdx":function(e,t,r){"use strict";r.r(t),r.d(t,"default",function(){return d});var i=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),l=(r("./node_modules/react/index.js"),r("./node_modules/@mdx-js/react/dist/index.es.js")),n=r("./node_modules/docz/dist/index.esm.js"),o=r("./src/components/Pickers/NativePicker.tsx"),s=r("./src/components/Pickers/NativePickerItem.tsx"),c=r("./src/components/Helpers/State.tsx"),m="/home/travis/build/WeTrustPlatform/paramount/src/components/Pickers/NativePicker.mdx",u={},b="wrapper";function d(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(l.b)(b,Object(a.a)({},u,r,{components:t,mdxType:"MDXLayout",__source:{fileName:m,lineNumber:21}}),Object(l.b)("h1",Object(a.a)({id:"nativepicker"},{__source:{fileName:m,lineNumber:24}}),"NativePicker"),Object(l.b)(n.c,{__position:0,__code:'<State initial={{ value: \'js\' }}>\n  {({ state, setState }) => (\n    <NativePicker\n      selectedValue={state.value}\n      onValueChange={(itemValue, itemIndex) => setState({ value: itemValue })}\n      size="large"\n      getStyles={(props, theme) => ({\n        pickerStyle: {},\n        itemStyle: {},\n      })}\n    >\n      <NativePickerItem label="C" value="c" />\n      <NativePickerItem label="C#" value="c#" />\n      <NativePickerItem label="C++" value="c++" />\n      <NativePickerItem label="CSS" value="css" />\n      <NativePickerItem label="Elixir" value="elixir" />\n      <NativePickerItem label="Elm" value="elm" />\n      <NativePickerItem label="Erlang" value="erlang" />\n      <NativePickerItem label="Go" value="go" />\n      <NativePickerItem label="Haskell" value="haskell" />\n      <NativePickerItem label="HTML" value="html" />\n      <NativePickerItem label="Java" value="java" />\n      <NativePickerItem label="JavaScript" value="js" />\n      <NativePickerItem label="Lua" value="lua" />\n      <NativePickerItem label="Python" value="python" />\n      <NativePickerItem label="R" value="r" />\n      <NativePickerItem label="Ruby" value="ruby" />\n      <NativePickerItem label="Rust" value="rust" />\n      <NativePickerItem label="Switft" value="swift" />\n      <NativePickerItem label="Typescript" value="typescript" />\n    </NativePicker>\n  )}\n</State>',__scope:{props:this?this.props:r,Playground:n.c,Props:n.d,NativePicker:o.a,NativePickerItem:s.a,State:c.a},mdxType:"Playground",__source:{fileName:m,lineNumber:27}},Object(l.b)(c.a,{initial:{value:"js"},mdxType:"State",__source:{fileName:m,lineNumber:35}},function(e){var t=e.state,r=e.setState;return Object(l.b)(o.a,{selectedValue:t.value,onValueChange:function(e,t){return r({value:e})},size:"large",getStyles:function(e,t){return{pickerStyle:{},itemStyle:{}}},mdxType:"NativePicker",__source:{fileName:m,lineNumber:41}},Object(l.b)(s.a,{label:"C",value:"c",mdxType:"NativePickerItem",__source:{fileName:m,lineNumber:47}}),Object(l.b)(s.a,{label:"C#",value:"c#",mdxType:"NativePickerItem",__source:{fileName:m,lineNumber:48}}),Object(l.b)(s.a,{label:"C++",value:"c++",mdxType:"NativePickerItem",__source:{fileName:m,lineNumber:49}}),Object(l.b)(s.a,{label:"CSS",value:"css",mdxType:"NativePickerItem",__source:{fileName:m,lineNumber:50}}),Object(l.b)(s.a,{label:"Elixir",value:"elixir",mdxType:"NativePickerItem",__source:{fileName:m,lineNumber:51}}),Object(l.b)(s.a,{label:"Elm",value:"elm",mdxType:"NativePickerItem",__source:{fileName:m,lineNumber:52}}),Object(l.b)(s.a,{label:"Erlang",value:"erlang",mdxType:"NativePickerItem",__source:{fileName:m,lineNumber:53}}),Object(l.b)(s.a,{label:"Go",value:"go",mdxType:"NativePickerItem",__source:{fileName:m,lineNumber:54}}),Object(l.b)(s.a,{label:"Haskell",value:"haskell",mdxType:"NativePickerItem",__source:{fileName:m,lineNumber:55}}),Object(l.b)(s.a,{label:"HTML",value:"html",mdxType:"NativePickerItem",__source:{fileName:m,lineNumber:56}}),Object(l.b)(s.a,{label:"Java",value:"java",mdxType:"NativePickerItem",__source:{fileName:m,lineNumber:57}}),Object(l.b)(s.a,{label:"JavaScript",value:"js",mdxType:"NativePickerItem",__source:{fileName:m,lineNumber:58}}),Object(l.b)(s.a,{label:"Lua",value:"lua",mdxType:"NativePickerItem",__source:{fileName:m,lineNumber:59}}),Object(l.b)(s.a,{label:"Python",value:"python",mdxType:"NativePickerItem",__source:{fileName:m,lineNumber:60}}),Object(l.b)(s.a,{label:"R",value:"r",mdxType:"NativePickerItem",__source:{fileName:m,lineNumber:61}}),Object(l.b)(s.a,{label:"Ruby",value:"ruby",mdxType:"NativePickerItem",__source:{fileName:m,lineNumber:62}}),Object(l.b)(s.a,{label:"Rust",value:"rust",mdxType:"NativePickerItem",__source:{fileName:m,lineNumber:63}}),Object(l.b)(s.a,{label:"Switft",value:"swift",mdxType:"NativePickerItem",__source:{fileName:m,lineNumber:64}}),Object(l.b)(s.a,{label:"Typescript",value:"typescript",mdxType:"NativePickerItem",__source:{fileName:m,lineNumber:65}}))})))}d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Pickers/NativePicker.mdx"}}),d.isMDXComponent=!0},"./src/components/Pickers/NativePicker.tsx":function(e,t,r){"use strict";var i=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),a=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),l=r("./node_modules/react/index.js"),n=r("./node_modules/react-native-web/dist/exports/Picker/index.js"),o=r("./src/theme/Theme.tsx"),s=r("./src/utils/mergeStyles.ts"),c=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");"undefined"!==typeof PickerButtonStyles&&PickerButtonStyles&&PickerButtonStyles===Object(PickerButtonStyles)&&Object.isExtensible(PickerButtonStyles)&&Object.defineProperty(PickerButtonStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PickerButtonStyles",filename:"src/components/Pickers/PickerButton.styles.ts"}}),"undefined"!==typeof PickerButtonStylesProps&&PickerButtonStylesProps&&PickerButtonStylesProps===Object(PickerButtonStylesProps)&&Object.isExtensible(PickerButtonStylesProps)&&Object.defineProperty(PickerButtonStylesProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PickerButtonStylesProps",filename:"src/components/Pickers/PickerButton.styles.ts"}}),"undefined"!==typeof GetPickerButtonStyles&&GetPickerButtonStyles&&GetPickerButtonStyles===Object(GetPickerButtonStyles)&&Object.isExtensible(GetPickerButtonStyles)&&Object.defineProperty(GetPickerButtonStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetPickerButtonStyles",filename:"src/components/Pickers/PickerButton.styles.ts"}});var m=function(e,t){var r=e.size,i={small:{borderRadius:t.controlBorderRadius.small,height:t.controlHeights.small,paddingLeft:t.controlPaddings.small,paddingRight:40},medium:{borderRadius:t.controlBorderRadius.medium,height:t.controlHeights.medium,paddingLeft:t.controlPaddings.medium,paddingRight:40},large:{borderRadius:t.controlBorderRadius.large,height:t.controlHeights.large,paddingLeft:t.controlPaddings.large,paddingRight:40}}[r],a=t.textSizes[r];return{containerStyle:{backgroundColor:t.colors.background.content,position:"relative"},itemStyle:Object(c.a)({},a),pickerStyle:Object(c.a)({appearance:"none",backgroundColor:"transparent",borderColor:t.colors.border.default,borderWidth:1,color:t.colors.text.default,width:"100%"},a,i),rightContainerStyle:{alignItems:"center",display:"flex",height:"100%",justifyContent:"center",paddingHorizontal:8,position:"absolute",right:0,zIndex:-1}}};m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getPickerButtonStyles",filename:"src/components/Pickers/PickerButton.styles.ts"}});var u=r("./node_modules/react-native-web/dist/exports/View/index.js"),b=r("./src/components/Icon/Icon.web.tsx"),d="/home/travis/build/WeTrustPlatform/paramount/src/components/Pickers/PickerButtonWrapper.tsx";"undefined"!==typeof PickerButtonWrapperProps&&PickerButtonWrapperProps&&PickerButtonWrapperProps===Object(PickerButtonWrapperProps)&&Object.isExtensible(PickerButtonWrapperProps)&&Object.defineProperty(PickerButtonWrapperProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PickerButtonWrapperProps",filename:"src/components/Pickers/PickerButtonWrapper.tsx"}});var f=function(e){var t=e.getStyles,r=e.children,i=e.size,a=void 0===i?"medium":i,n=Object(o.a)(),c=Object(s.a)(m,t,n.components.getPickerButtonStyles)({size:a},n),f=c.containerStyle,p=c.rightContainerStyle;return l.createElement(u.a,{style:f,__source:{fileName:d,lineNumber:27}},r,l.createElement(u.a,{style:p,__source:{fileName:d,lineNumber:29}},l.createElement(b.a,{name:"chevron-down",size:32,color:n.colors.text.default,__source:{fileName:d,lineNumber:30}})))};f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PickerButtonWrapper",filename:"src/components/Pickers/PickerButtonWrapper.tsx"}}),r.d(t,"a",function(){return y});var p="/home/travis/build/WeTrustPlatform/paramount/src/components/Pickers/NativePicker.tsx";"undefined"!==typeof NativePickerProps&&NativePickerProps&&NativePickerProps===Object(NativePickerProps)&&Object.isExtensible(NativePickerProps)&&Object.defineProperty(NativePickerProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"NativePickerProps",filename:"src/components/Pickers/NativePicker.tsx"}});var g=function(e){var t=e.size,r=void 0===t?"medium":t,c=e.getStyles,u=e.innerRef,b=Object(a.a)(e,["size","getStyles","innerRef"]),d=Object(o.a)(),g=Object(s.a)(m,c)({size:r},d),y=g.pickerStyle,h=g.itemStyle;return l.createElement(f,{__source:{fileName:p,lineNumber:31}},l.createElement(n.a,Object(i.a)({ref:u,itemStyle:h,style:y},b,{__source:{fileName:p,lineNumber:32}})))},y=l.forwardRef(function(e,t){return l.createElement(g,Object(i.a)({},e,{innerRef:t,__source:{fileName:p,lineNumber:44}}))});"undefined"!==typeof y&&y&&y===Object(y)&&Object.isExtensible(y)&&Object.defineProperty(y,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"NativePicker",filename:"src/components/Pickers/NativePicker.tsx"}})},"./src/components/Pickers/NativePickerItem.tsx":function(e,t,r){"use strict";r.d(t,"a",function(){return a});var i=r("./node_modules/react-native-web/dist/exports/Picker/index.js");"undefined"!==typeof NativePickerItemProps&&NativePickerItemProps&&NativePickerItemProps===Object(NativePickerItemProps)&&Object.isExtensible(NativePickerItemProps)&&Object.defineProperty(NativePickerItemProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"NativePickerItemProps",filename:"src/components/Pickers/NativePickerItem.tsx"}});var a=i.a.Item;"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"NativePickerItem",filename:"src/components/Pickers/NativePickerItem.tsx"}})},"./src/components/Typography/Text.styles.ts":function(e,t,r){"use strict";r.d(t,"a",function(){return a}),r.d(t,"b",function(){return l}),r.d(t,"c",function(){return n}),r.d(t,"d",function(){return s});var i=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");"undefined"!==typeof TextStylesProps&&TextStylesProps&&TextStylesProps===Object(TextStylesProps)&&Object.isExtensible(TextStylesProps)&&Object.defineProperty(TextStylesProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextStylesProps",filename:"src/components/Typography/Text.styles.ts"}}),"undefined"!==typeof TextStyles&&TextStyles&&TextStyles===Object(TextStyles)&&Object.isExtensible(TextStyles)&&Object.defineProperty(TextStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextStyles",filename:"src/components/Typography/Text.styles.ts"}}),"undefined"!==typeof GetTextStyles&&GetTextStyles&&GetTextStyles===Object(GetTextStyles)&&Object.isExtensible(GetTextStyles)&&Object.defineProperty(GetTextStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetTextStyles",filename:"src/components/Typography/Text.styles.ts"}});var a=function(e){return function(t){return e[t]}};"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getFontFamily",filename:"src/components/Typography/Text.styles.ts"}});var l=function(e){return function(t){if(t)return e[t]||t}};"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getFontWeight",filename:"src/components/Typography/Text.styles.ts"}});var n=function(e){return function(t){return e[t]||t}};"undefined"!==typeof n&&n&&n===Object(n)&&Object.isExtensible(n)&&Object.defineProperty(n,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTextColor",filename:"src/components/Typography/Text.styles.ts"}});var o=function(e){return function(t){return e[t]||{fontSize:t}}};o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTextSize",filename:"src/components/Typography/Text.styles.ts"}});var s=function(e,t){var r=e.size,s=e.color,c=e.fontFamily,m=e.isInline,u=e.isItalic,b=e.align,d=e.transform,f=e.weight,p=o(t.textSizes)(r);return{textStyle:Object(i.a)({},p,{color:n(t.colors.text)(s),fontFamily:a(t.fontFamilies)(c),fontWeight:l(t.fontWeights)(f)||p.fontWeight,textAlign:b},m?{alignSelf:"flex-start",flexDirection:"row"}:{},u&&{fontStyle:"italic"},d&&{textTransform:d})}};"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTextStyles",filename:"src/components/Typography/Text.styles.ts"}})},"./src/theme/Theme.tsx":function(e,t,r){"use strict";var i=r("./node_modules/deepmerge/dist/umd.js"),a=r.n(i),l=r("./node_modules/react/index.js"),n=r.n(l),o=r("./node_modules/react-native-web/dist/exports/Platform/index.js");"undefined"!==typeof ColorPalette&&ColorPalette&&ColorPalette===Object(ColorPalette)&&Object.isExtensible(ColorPalette)&&Object.defineProperty(ColorPalette,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ColorPalette",filename:"src/theme/palette.ts"}}),"undefined"!==typeof Palette&&Palette&&Palette===Object(Palette)&&Object.isExtensible(Palette)&&Object.defineProperty(Palette,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Palette",filename:"src/theme/palette.ts"}});var s={lightest:"#fafafa",light:"#eeeeee",base:"#cccccc",dark:"#a7a7a7",darkest:"#7e7e7e"},c={lightest:"#e5f5ff",light:"#ceecff",base:"#1ca5F7",dark:"#59a9de",darkest:"#33495f"},m={lightest:"#f9e1de",light:"#f9aa9f",base:"#d26557",dark:"#bb584e",darkest:"#b74033"},u={lightest:"#fce8cf",light:"#f2c58a",base:"#f3b058",dark:"#ec8e30",darkest:"#b26500"},b={lightest:"#fef8e7",light:"#fbe6a2",base:"#f7d154",dark:"#d1b047",darkest:"#7e6514"},d={lightest:"#eafff3",light:"#c2edd5",base:"#54bf84",dark:"#42a46e",darkest:"#16a054"},f={lightest:"#d6fcf7",light:"#c0f9f2",base:"#67c6bb",dark:"#3fa296",darkest:"#1b877a"},p={lightest:"#f8f7fc",light:"#eae7f8",base:"#735dd0",dark:"#37248f",darkest:"#37248f"};"undefined"!==typeof purple&&purple&&purple===Object(purple)&&Object.isExtensible(purple)&&Object.defineProperty(purple,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"purple",filename:"src/theme/palette.ts"}}),"undefined"!==typeof teal&&teal&&teal===Object(teal)&&Object.isExtensible(teal)&&Object.defineProperty(teal,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"teal",filename:"src/theme/palette.ts"}}),"undefined"!==typeof green&&green&&green===Object(green)&&Object.isExtensible(green)&&Object.defineProperty(green,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"green",filename:"src/theme/palette.ts"}}),"undefined"!==typeof yellow&&yellow&&yellow===Object(yellow)&&Object.isExtensible(yellow)&&Object.defineProperty(yellow,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"yellow",filename:"src/theme/palette.ts"}}),"undefined"!==typeof orange&&orange&&orange===Object(orange)&&Object.isExtensible(orange)&&Object.defineProperty(orange,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"orange",filename:"src/theme/palette.ts"}}),"undefined"!==typeof red&&red&&red===Object(red)&&Object.isExtensible(red)&&Object.defineProperty(red,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"red",filename:"src/theme/palette.ts"}}),"undefined"!==typeof blue&&blue&&blue===Object(blue)&&Object.isExtensible(blue)&&Object.defineProperty(blue,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"blue",filename:"src/theme/palette.ts"}}),"undefined"!==typeof neutral&&neutral&&neutral===Object(neutral)&&Object.isExtensible(neutral)&&Object.defineProperty(neutral,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"neutral",filename:"src/theme/palette.ts"}});var g={background:{base:"white",content:"white",overlay:"rgba(0,0,0,0.3)",greyLight:s.lightest,greyDefault:"#F5F6F7",greyDark:s.light,primaryLight:f.lightest,primaryDefault:f.base,primaryDark:f.dark,secondaryLight:u.lightest,secondaryDefault:u.base,secondaryDark:u.dark,dangerLight:m.lightest,dangerDefault:m.base,dangerDark:m.dark,infoLight:c.lightest,infoDefault:c.base,infoDark:c.dark,successLight:d.lightest,successDefault:d.base,successDark:d.dark,warningLight:u.lightest,warningDefault:u.base,warningDark:u.dark},border:{default:s.light,primary:f.darkest,secondary:u.darkest,danger:m.darkest,info:c.darkest,success:d.darkest,warning:u.darkest},button:{disabled:s.light,disabledText:s.darkest,default:s.lightest,defaultText:s.darkest,primary:f.base,primaryText:"white",secondary:u.base,secondaryText:"white",danger:m.base,dangerText:"white"},text:{link:s.darkest,default:s.darkest,muted:s.dark,white:"white",selected:"white",primary:f.darkest,secondary:u.darkest,danger:m.darkest,info:c.darkest,success:d.darkest,warning:u.darkest}},y=[{elevation:0,shadowColor:s.dark,shadowOffset:{width:0,height:0},shadowOpacity:0,shadowRadius:0},{elevation:1,shadowColor:s.dark,shadowOffset:{width:1,height:1},shadowOpacity:.15,shadowRadius:8},{elevation:2,shadowColor:s.dark,shadowOffset:{width:2,height:2},shadowOpacity:.2,shadowRadius:10},{elevation:3,shadowColor:s.dark,shadowOffset:{width:3,height:3},shadowOpacity:.25,shadowRadius:12},{elevation:4,shadowColor:s.dark,shadowOffset:{width:4,height:4},shadowOpacity:.3,shadowRadius:8},{elevation:5,shadowColor:s.dark,shadowOffset:{width:5,height:5},shadowOpacity:.35,shadowRadius:8}],h={colors:g,fills:{solid:{neutral:{backgroundColor:s.base,color:"white"},blue:{backgroundColor:c.base,color:"white"},red:{backgroundColor:m.base,color:"white"},orange:{backgroundColor:u.base,color:"white"},yellow:{backgroundColor:b.base,color:b.darkest},green:{backgroundColor:d.base,color:"white"},teal:{backgroundColor:f.base,color:"white"},purple:{backgroundColor:p.base,color:"white"}},subtle:{neutral:{backgroundColor:s.light,color:s.darkest},blue:{backgroundColor:c.light,color:c.darkest},red:{backgroundColor:m.light,color:m.darkest},orange:{backgroundColor:u.light,color:u.darkest},yellow:{backgroundColor:b.light,color:b.darkest},green:{backgroundColor:d.light,color:d.darkest},teal:{backgroundColor:f.light,color:f.darkest},purple:{backgroundColor:p.light,color:p.darkest}}},fontFamilies:"web"===o.a.OS?{heading:'"SF UI Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',mono:'"SF Mono", "Monaco", "Inconsolata", "Fira Mono", "Droid Sans Mono", "Source Code Pro", monospace',text:'"SF UI Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'}:{heading:void 0,mono:void 0,text:void 0},fontWeights:{bold:"bold",light:"300",normal:"normal"},headingSizes:{xxxlarge:{fontSize:35,letterSpacing:-.2,lineHeight:40},xxlarge:{fontSize:29,letterSpacing:-.2,lineHeight:32},xlarge:{fontSize:24,letterSpacing:-.07,lineHeight:28},large:{fontSize:20,letterSpacing:-.07,lineHeight:24},medium:{fontSize:16,letterSpacing:-.05,lineHeight:20},small:{fontSize:14,letterSpacing:-.05,lineHeight:20}},paragraphSizes:{small:{fontSize:14,lineHeight:24},medium:{fontSize:16,lineHeight:21},large:{fontSize:18,lineHeight:18}},textSizes:{large:{fontSize:20},medium:{fontSize:16},small:{fontSize:14}},elevations:y,controlBorderRadius:{small:4,medium:4,large:4},controlHeights:{small:40,medium:48,large:56},controlPaddings:{small:8,medium:16,large:24},components:{}};"undefined"!==typeof h&&h&&h===Object(h)&&Object.isExtensible(h)&&Object.defineProperty(h,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"defaultTheme",filename:"src/theme/defaultTheme.ts"}}),r.d(t,"a",function(){return x});"undefined"!==typeof TextSizes&&TextSizes&&TextSizes===Object(TextSizes)&&Object.isExtensible(TextSizes)&&Object.defineProperty(TextSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof TextSize&&TextSize&&TextSize===Object(TextSize)&&Object.isExtensible(TextSize)&&Object.defineProperty(TextSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof HeadingSizes&&HeadingSizes&&HeadingSizes===Object(HeadingSizes)&&Object.isExtensible(HeadingSizes)&&Object.defineProperty(HeadingSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HeadingSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof HeadingSize&&HeadingSize&&HeadingSize===Object(HeadingSize)&&Object.isExtensible(HeadingSize)&&Object.defineProperty(HeadingSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HeadingSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ParagraphSizes&&ParagraphSizes&&ParagraphSizes===Object(ParagraphSizes)&&Object.isExtensible(ParagraphSizes)&&Object.defineProperty(ParagraphSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ParagraphSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ParagraphSize&&ParagraphSize&&ParagraphSize===Object(ParagraphSize)&&Object.isExtensible(ParagraphSize)&&Object.defineProperty(ParagraphSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ParagraphSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontFamilies&&FontFamilies&&FontFamilies===Object(FontFamilies)&&Object.isExtensible(FontFamilies)&&Object.defineProperty(FontFamilies,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontFamilies",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontFamily&&FontFamily&&FontFamily===Object(FontFamily)&&Object.isExtensible(FontFamily)&&Object.defineProperty(FontFamily,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontFamily",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof RNFontWeight&&RNFontWeight&&RNFontWeight===Object(RNFontWeight)&&Object.isExtensible(RNFontWeight)&&Object.defineProperty(RNFontWeight,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"RNFontWeight",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontWeights&&FontWeights&&FontWeights===Object(FontWeights)&&Object.isExtensible(FontWeights)&&Object.defineProperty(FontWeights,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontWeights",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontWeight&&FontWeight&&FontWeight===Object(FontWeight)&&Object.isExtensible(FontWeight)&&Object.defineProperty(FontWeight,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontWeight",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof TextColors&&TextColors&&TextColors===Object(TextColors)&&Object.isExtensible(TextColors)&&Object.defineProperty(TextColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof TextColor&&TextColor&&TextColor===Object(TextColor)&&Object.isExtensible(TextColor)&&Object.defineProperty(TextColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ButtonColors&&ButtonColors&&ButtonColors===Object(ButtonColors)&&Object.isExtensible(ButtonColors)&&Object.defineProperty(ButtonColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ButtonColorsWithText&&ButtonColorsWithText&&ButtonColorsWithText===Object(ButtonColorsWithText)&&Object.isExtensible(ButtonColorsWithText)&&Object.defineProperty(ButtonColorsWithText,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColorsWithText",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ButtonColor&&ButtonColor&&ButtonColor===Object(ButtonColor)&&Object.isExtensible(ButtonColor)&&Object.defineProperty(ButtonColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BorderColors&&BorderColors&&BorderColors===Object(BorderColors)&&Object.isExtensible(BorderColors)&&Object.defineProperty(BorderColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BorderColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BorderColor&&BorderColor&&BorderColor===Object(BorderColor)&&Object.isExtensible(BorderColor)&&Object.defineProperty(BorderColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BorderColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BackgroundColors&&BackgroundColors&&BackgroundColors===Object(BackgroundColors)&&Object.isExtensible(BackgroundColors)&&Object.defineProperty(BackgroundColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BackgroundColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BackgroundColor&&BackgroundColor&&BackgroundColor===Object(BackgroundColor)&&Object.isExtensible(BackgroundColor)&&Object.defineProperty(BackgroundColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BackgroundColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Colors&&Colors&&Colors===Object(Colors)&&Object.isExtensible(Colors)&&Object.defineProperty(Colors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Colors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Elevations&&Elevations&&Elevations===Object(Elevations)&&Object.isExtensible(Elevations)&&Object.defineProperty(Elevations,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Elevations",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Elevation&&Elevation&&Elevation===Object(Elevation)&&Object.isExtensible(Elevation)&&Object.defineProperty(Elevation,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Elevation",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ControlSizes&&ControlSizes&&ControlSizes===Object(ControlSizes)&&Object.isExtensible(ControlSizes)&&Object.defineProperty(ControlSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ControlSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ControlSize&&ControlSize&&ControlSize===Object(ControlSize)&&Object.isExtensible(ControlSize)&&Object.defineProperty(ControlSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ControlSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FillColorProps&&FillColorProps&&FillColorProps===Object(FillColorProps)&&Object.isExtensible(FillColorProps)&&Object.defineProperty(FillColorProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FillColorProps",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FillColors&&FillColors&&FillColors===Object(FillColors)&&Object.isExtensible(FillColors)&&Object.defineProperty(FillColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FillColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FillColor&&FillColor&&FillColor===Object(FillColor)&&Object.isExtensible(FillColor)&&Object.defineProperty(FillColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FillColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Fills&&Fills&&Fills===Object(Fills)&&Object.isExtensible(Fills)&&Object.defineProperty(Fills,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Fills",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Theme&&Theme&&Theme===Object(Theme)&&Object.isExtensible(Theme)&&Object.defineProperty(Theme,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Theme",filename:"src/theme/Theme.tsx"}});var P=n.a.createContext(h);"undefined"!==typeof P&&P&&P===Object(P)&&Object.isExtensible(P)&&Object.defineProperty(P,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ThemeContext",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ThemeProviderProps&&ThemeProviderProps&&ThemeProviderProps===Object(ThemeProviderProps)&&Object.isExtensible(ThemeProviderProps)&&Object.defineProperty(ThemeProviderProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ThemeProviderProps",filename:"src/theme/Theme.tsx"}});var j=function(e){return e?a()(h,e):h};j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"createTheme",filename:"src/theme/Theme.tsx"}});var v=function(e){var t=e.children,r=e.value,i=j(void 0===r?h:r);return n.a.createElement(P.Provider,{value:i,__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/theme/Theme.tsx",lineNumber:296}},t)};v&&v===Object(v)&&Object.isExtensible(v)&&Object.defineProperty(v,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ThemeProvider",filename:"src/theme/Theme.tsx"}});var x=function(){return n.a.useContext(P)};"undefined"!==typeof x&&x&&x===Object(x)&&Object.isExtensible(x)&&Object.defineProperty(x,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useTheme",filename:"src/theme/Theme.tsx"}})},"./src/utils/mergeStyles.ts":function(e,t,r){"use strict";r.d(t,"a",function(){return l});var i=r("./node_modules/deepmerge/dist/umd.js"),a=r.n(i);"undefined"!==typeof GetStyles&&GetStyles&&GetStyles===Object(GetStyles)&&Object.isExtensible(GetStyles)&&Object.defineProperty(GetStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetStyles",filename:"src/utils/mergeStyles.ts"}}),"undefined"!==typeof ArgumentTypes&&ArgumentTypes&&ArgumentTypes===Object(ArgumentTypes)&&Object.isExtensible(ArgumentTypes)&&Object.defineProperty(ArgumentTypes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ArgumentTypes",filename:"src/utils/mergeStyles.ts"}}),"undefined"!==typeof ReplaceReturnType&&ReplaceReturnType&&ReplaceReturnType===Object(ReplaceReturnType)&&Object.isExtensible(ReplaceReturnType)&&Object.defineProperty(ReplaceReturnType,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ReplaceReturnType",filename:"src/utils/mergeStyles.ts"}});var l=function(e,t,r){return function(i,l){var n=[e(i,l)];return r&&n.push(r(i,l)),t&&n.push(t(i,l)),a.a.all(n)}};"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"mergeStyles",filename:"src/utils/mergeStyles.ts"}})}}]);
//# sourceMappingURL=22.f84bde09aba1a1967739.js.map