(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"./src/components/Box/Box.tsx":function(e,t,r){"use strict";r.d(t,"a",function(){return i});var n=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=r("./node_modules/react/index.js"),a=r("./node_modules/react-native-web/dist/exports/View/index.js"),s=r("./src/theme/Theme.tsx");"undefined"!==typeof BoxProps&&BoxProps&&BoxProps===Object(BoxProps)&&Object.isExtensible(BoxProps)&&Object.defineProperty(BoxProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxProps",filename:"src/components/Box/Box.tsx"}});var l={backgroundColor:function(e,t){return t.colors.background[e]?{backgroundColor:t.colors.background[e]}:{backgroundColor:e}},elevation:function(e,t){return t.elevations[e]},shape:function(e,t){return t.containerShapes[e]}},i=function(e){var t=e.children,r=e.testID,i=Object(n.a)(e,["children","testID"]),c=Object(s.a)(),u=[],m={};for(var b in i)if(b){var d=l[b];if(d){var f=d(i[b],c);u.push(f)}else m[b]=i[b]}return o.createElement(a.a,{testID:r,style:[m,u],__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Box/Box.tsx",lineNumber:53}},t)};"undefined"!==typeof i&&i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Box",filename:"src/components/Box/Box.tsx"}})},"./src/components/Counter/Counter.tsx":function(e,t,r){"use strict";var n=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),o=r("./node_modules/react/index.js"),a=r("./node_modules/react-native-web/dist/exports/TouchableOpacity/index.js"),s=r("./node_modules/react-native-web/dist/exports/View/index.js"),l=r("./src/theme/Theme.tsx"),i=r("./src/utils/mergeStyles.ts"),c=r("./src/components/Icon/Icon.web.tsx"),u=r("./src/components/Typography/Text.tsx");"undefined"!==typeof CounterStyles&&CounterStyles&&CounterStyles===Object(CounterStyles)&&Object.isExtensible(CounterStyles)&&Object.defineProperty(CounterStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CounterStyles",filename:"src/components/Counter/Counter.styles.ts"}}),"undefined"!==typeof GetCounterStyles&&GetCounterStyles&&GetCounterStyles===Object(GetCounterStyles)&&Object.isExtensible(GetCounterStyles)&&Object.defineProperty(GetCounterStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetCounterStyles",filename:"src/components/Counter/Counter.styles.ts"}});var m=function(e,t){return{containerStyle:{display:"flex",flexDirection:"row"},countStyle:{justifyContent:"center",minWidth:24},counterStyle:{alignItems:"center",borderColor:t.colors.border.primary,borderRadius:999,borderWidth:1,display:"flex",height:40,justifyContent:"center",width:40},decrementWrapperStyle:{paddingRight:16},disabledStyle:{borderColor:t.colors.border.default},incrementWrapperStyle:{paddingLeft:16},textStyle:{}}};m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getCounterStyles",filename:"src/components/Counter/Counter.styles.ts"}}),r.d(t,"a",function(){return d});var b="/home/travis/build/WeTrustPlatform/paramount/src/components/Counter/Counter.tsx";"undefined"!==typeof CounterProps&&CounterProps&&CounterProps===Object(CounterProps)&&Object.isExtensible(CounterProps)&&Object.defineProperty(CounterProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CounterProps",filename:"src/components/Counter/Counter.tsx"}});var d=function(e){var t=e.count,r=void 0===t?0:t,d=e.component,f=e.max,p=e.min,g=e.onIncrement,y=e.onDecrement,h=e.getStyles,x=Object(l.a)(),j=Object(i.a)(m,h,x.components.getCounterStyles)(e,x),O=j.containerStyle,_=j.counterStyle,S=j.countStyle,P=j.decrementWrapperStyle,C=j.disabledStyle,T=j.incrementWrapperStyle,v=j.textStyle,B=p===r,k=f===r;return o.createElement(s.a,{style:O,__source:{fileName:b,lineNumber:71}},o.createElement(s.a,{style:P,__source:{fileName:b,lineNumber:72}},o.createElement(a.a,{style:Object(n.a)({},_,B&&C),disabled:B,onPress:B?void 0:y,__source:{fileName:b,lineNumber:73}},o.createElement(c.a,{name:"minus",size:16,color:B?x.colors.text.muted:x.colors.text.primary,__source:{fileName:b,lineNumber:81}}))),d||o.createElement(s.a,{style:S,__source:{fileName:b,lineNumber:93}},o.createElement(u.a,{align:"center",getStyles:function(){return{textStyle:v}},__source:{fileName:b,lineNumber:94}},"".concat(r))),o.createElement(s.a,{style:T,__source:{fileName:b,lineNumber:100}},o.createElement(a.a,{style:Object(n.a)({},_,k&&C),disabled:k,onPress:k?void 0:g,__source:{fileName:b,lineNumber:101}},o.createElement(c.a,{name:"plus",size:16,color:k?x.colors.text.muted:x.colors.text.primary,__source:{fileName:b,lineNumber:109}}))))};"undefined"!==typeof d&&d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Counter",filename:"src/components/Counter/Counter.tsx"}})},"./src/components/Helpers/CounterState.tsx":function(e,t,r){"use strict";r.d(t,"a",function(){return s});var n=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),o=r("./node_modules/react/index.js"),a=r.n(o);"undefined"!==typeof CounterStateRenderProps&&CounterStateRenderProps&&CounterStateRenderProps===Object(CounterStateRenderProps)&&Object.isExtensible(CounterStateRenderProps)&&Object.defineProperty(CounterStateRenderProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CounterStateRenderProps",filename:"src/components/Helpers/CounterState.tsx"}}),"undefined"!==typeof CounterStateProps&&CounterStateProps&&CounterStateProps===Object(CounterStateProps)&&Object.isExtensible(CounterStateProps)&&Object.defineProperty(CounterStateProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CounterStateProps",filename:"src/components/Helpers/CounterState.tsx"}});var s=function(e){var t=e.children,r=e.initial,o=void 0===r?0:r,s=a.a.useState(o),l=Object(n.a)(s,2),i=l[0],c=l[1],u=a.a.useCallback(function(e){c(i+e)},[i]),m=a.a.useCallback(function(e){c(i-e)},[i]),b=a.a.useCallback(function(){c(i+1)},[i]),d=a.a.useCallback(function(){c(i-1)},[i]),f=a.a.useCallback(function(e){c(e)},[i]);return t({count:i,decrement:d,decrementBy:m,increment:b,incrementBy:u,set:f})};"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CounterState",filename:"src/components/Helpers/CounterState.tsx"}})},"./src/components/Icon/Icon.web.tsx":function(e,t,r){"use strict";r.d(t,"a",function(){return l});var n=r("./node_modules/react/index.js"),o=r("./node_modules/react-icons/fi/index.esm.js"),a=r("./src/theme/Theme.tsx"),s=r("./src/components/Typography/Text.styles.ts");var l=function(e){var t=e.name,r=e.color,l=e.size,i=Object(a.a)(),c=o["Fi".concat(function(e){var t=e.replace(/(\-\w)/g,function(e){return e[1].toUpperCase()});return t.charAt(0).toUpperCase()+t.slice(1)}(t))];return n.createElement(c,{color:r?Object(s.b)(i.colors.text)(r):r,size:l,__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Icon/Icon.web.tsx",lineNumber:23}})};"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Icon",filename:"src/components/Icon/Icon.web.tsx"}})},"./src/components/ProgressBar/ProgressBar.mdx":function(e,t,r){"use strict";r.r(t),r.d(t,"default",function(){return f});var n=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),a=(r("./node_modules/react/index.js"),r("./node_modules/@mdx-js/react/dist/index.es.js")),s=r("./node_modules/docz/dist/index.esm.js"),l=r("./src/components/Box/Box.tsx"),i=r("./src/components/Counter/Counter.tsx"),c=r("./src/components/Helpers/CounterState.tsx"),u=r("./src/components/ProgressBar/ProgressBar.tsx"),m="/home/travis/build/WeTrustPlatform/paramount/src/components/ProgressBar/ProgressBar.mdx",b={},d="wrapper";function f(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(a.b)(d,Object(o.a)({},b,r,{components:t,mdxType:"MDXLayout",__source:{fileName:m,lineNumber:21}}),Object(a.b)("h1",Object(o.a)({id:"progressbar"},{__source:{fileName:m,lineNumber:24}}),"ProgressBar"),Object(a.b)("h3",Object(o.a)({id:"usage"},{__source:{fileName:m,lineNumber:27}}),"Usage"),Object(a.b)(s.c,{__position:0,__code:'<CounterState initial={0}>\n  {({ count, incrementBy, decrementBy }) => (\n    <Box>\n      <ProgressBar\n        percent={count}\n        size="large"\n        getStyles={(props, theme) => ({\n          containerStyle: {},\n          progressStyle: {},\n        })}\n      />\n      <Counter\n        count={count}\n        onDecrement={() => decrementBy(10)}\n        onIncrement={() => incrementBy(10)}\n        min={0}\n        max={100}\n      />\n    </Box>\n  )}\n</CounterState>',__scope:{props:this?this.props:r,Playground:s.c,Props:s.d,Box:l.a,Counter:i.a,CounterState:c.a,ProgressBar:u.a},mdxType:"Playground",__source:{fileName:m,lineNumber:30}},Object(a.b)(c.a,{initial:0,mdxType:"CounterState",__source:{fileName:m,lineNumber:39}},function(e){var t=e.count,r=e.incrementBy,n=e.decrementBy;return Object(a.b)(l.a,{mdxType:"Box",__source:{fileName:m,lineNumber:44}},Object(a.b)(u.a,{percent:t,size:"large",getStyles:function(e,t){return{containerStyle:{},progressStyle:{}}},mdxType:"ProgressBar",__source:{fileName:m,lineNumber:45}}),Object(a.b)(i.a,{count:t,onDecrement:function(){return n(10)},onIncrement:function(){return r(10)},min:0,max:100,mdxType:"Counter",__source:{fileName:m,lineNumber:49}}))})),Object(a.b)("h3",Object(o.a)({id:"props"},{__source:{fileName:m,lineNumber:53}}),"Props"),Object(a.b)(s.d,{of:u.a,mdxType:"Props",__source:{fileName:m,lineNumber:56}}),Object(a.b)("h3",Object(o.a)({id:"customization"},{__source:{fileName:m,lineNumber:57}}),"Customization"),Object(a.b)("p",{__source:{fileName:m,lineNumber:60}},"Using ",Object(a.b)("inlineCode",{parentName:"p",__source:{fileName:m,lineNumber:60}},"getStyles")," prop"),Object(a.b)("pre",{__source:{fileName:m,lineNumber:61}},Object(a.b)("code",Object(o.a)({parentName:"pre"},{},{__source:{fileName:m,lineNumber:61}}),"ProgressBarStyles {\n  progressStyle: ViewStyle;\n  containerStyle: ViewStyle;\n}\n\ngetStyles={(ProgressBarProps, Theme) => ProgressBarStyles}\n")),Object(a.b)("p",{__source:{fileName:m,lineNumber:68}},"Markup"),Object(a.b)("pre",{__source:{fileName:m,lineNumber:69}},Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx"},{__source:{fileName:m,lineNumber:69}}),"<View containerStyle>\n  <View progressStyle />\n</View>\n")))}f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/ProgressBar/ProgressBar.mdx"}}),f.isMDXComponent=!0},"./src/components/ProgressBar/ProgressBar.tsx":function(e,t,r){"use strict";var n=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),o=r("./node_modules/react/index.js"),a=r("./node_modules/react-native-web/dist/exports/Platform/index.js"),s=r("./node_modules/react-native-web/dist/exports/View/index.js"),l=r("./node_modules/react-spring/native.cjs.js"),i=r("./src/constants/Animation.ts"),c=r("./src/theme/Theme.tsx"),u=r("./src/utils/mergeStyles.ts");"undefined"!==typeof GetProgressBarStyles&&GetProgressBarStyles&&GetProgressBarStyles===Object(GetProgressBarStyles)&&Object.isExtensible(GetProgressBarStyles)&&Object.defineProperty(GetProgressBarStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetProgressBarStyles",filename:"src/components/ProgressBar/ProgressBar.styles.ts"}}),"undefined"!==typeof ProgressBarStyles&&ProgressBarStyles&&ProgressBarStyles===Object(ProgressBarStyles)&&Object.isExtensible(ProgressBarStyles)&&Object.defineProperty(ProgressBarStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ProgressBarStyles",filename:"src/components/ProgressBar/ProgressBar.styles.ts"}});var m=function(e,t){var r=e.size,n=void 0===r?"medium":r,o=t.controlHeights[n]-16;return{containerStyle:{backgroundColor:t.colors.background.greyDefault,borderRadius:999,height:o,overflow:"hidden"},progressStyle:{backgroundColor:t.colors.background.primaryDefault,borderRadius:999,height:"100%"}}};m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getProgressBarStyles",filename:"src/components/ProgressBar/ProgressBar.styles.ts"}}),r.d(t,"a",function(){return f});var b="/home/travis/build/WeTrustPlatform/paramount/src/components/ProgressBar/ProgressBar.tsx",d=Object(l.animated)(s.a);"undefined"!==typeof ProgressBarProps&&ProgressBarProps&&ProgressBarProps===Object(ProgressBarProps)&&Object.isExtensible(ProgressBarProps)&&Object.defineProperty(ProgressBarProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ProgressBarProps",filename:"src/components/ProgressBar/ProgressBar.tsx"}});var f=function(e){var t=e.percent,r=void 0===t?0:t,f=e.getStyles,p=e.testID,g=Object(c.a)(),y=Object(u.a)(m,f,g.components.getProgressBarStyles)(e,g),h=y.containerStyle,x=y.progressStyle,j=Math.max(Math.min(r,100),0),O=Object(l.useSpring)({config:i.a,from:{width:j},width:j}).width;return o.createElement(s.a,{style:h,testID:p,__source:{fileName:b,lineNumber:58}},o.createElement(d,{accessibilityRole:"web"===a.a.OS?"progress":"none",style:Object(n.a)({},x,{width:O.interpolate(function(e){return"".concat(e,"%")})}),__source:{fileName:b,lineNumber:59}}))};"undefined"!==typeof f&&f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ProgressBar",filename:"src/components/ProgressBar/ProgressBar.tsx"}})},"./src/components/Typography/Text.styles.ts":function(e,t,r){"use strict";r.d(t,"a",function(){return o}),r.d(t,"b",function(){return a}),r.d(t,"c",function(){return l});var n=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");"undefined"!==typeof TextStyles&&TextStyles&&TextStyles===Object(TextStyles)&&Object.isExtensible(TextStyles)&&Object.defineProperty(TextStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextStyles",filename:"src/components/Typography/Text.styles.ts"}}),"undefined"!==typeof GetTextStyles&&GetTextStyles&&GetTextStyles===Object(GetTextStyles)&&Object.isExtensible(GetTextStyles)&&Object.defineProperty(GetTextStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetTextStyles",filename:"src/components/Typography/Text.styles.ts"}});var o=function(e){return function(t){if(t)return e[t]||t}};"undefined"!==typeof o&&o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getFontWeight",filename:"src/components/Typography/Text.styles.ts"}});var a=function(e){return function(t){return e[t]||t}};"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTextColor",filename:"src/components/Typography/Text.styles.ts"}});var s=function(e){return function(t){return e[t]||{fontSize:t}}};s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTextSize",filename:"src/components/Typography/Text.styles.ts"}});var l=function(e,t){var r=e.color,l=void 0===r?"default":r,i=e.size,c=void 0===i?"medium":i,u=e.align,m=void 0===u?"left":u,b=e.weight,d=e.isItalic,f=void 0!==d&&d,p=e.transform,g=s(t.textSizes)(c);return{textStyle:Object(n.a)({},g,{color:a(t.colors.text)(l),fontFamily:t.fontFamilies.text,fontWeight:o(t.fontWeights)(b)||g.fontWeight,textAlign:m},f&&{fontStyle:"italic"},p&&{textTransform:p})}};"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTextStyles",filename:"src/components/Typography/Text.styles.ts"}})},"./src/components/Typography/Text.tsx":function(e,t,r){"use strict";r.d(t,"a",function(){return u});var n=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),o=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=r("./node_modules/react/index.js"),s=r("./node_modules/react-native-web/dist/exports/Text/index.js"),l=r("./src/theme/Theme.tsx"),i=r("./src/utils/mergeStyles.ts"),c=r("./src/components/Typography/Text.styles.ts");"undefined"!==typeof TextProps&&TextProps&&TextProps===Object(TextProps)&&Object.isExtensible(TextProps)&&Object.defineProperty(TextProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextProps",filename:"src/components/Typography/Text.tsx"}});var u=function(e){var t=e.children,r=(e.color,e.size,e.align,e.weight,e.getStyles),u=(e.isItalic,e.transform,Object(o.a)(e,["children","color","size","align","weight","getStyles","isItalic","transform"])),m=Object(l.a)(),b=Object(i.a)(c.c,r,m.components.getTextStyles)(e,m).textStyle;return a.createElement(s.a,Object(n.a)({style:b},u,{__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Typography/Text.tsx",lineNumber:75}}),t)};"undefined"!==typeof u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Text",filename:"src/components/Typography/Text.tsx"}})},"./src/constants/Animation.ts":function(e,t,r){"use strict";r.d(t,"a",function(){return n});var n={friction:40,tension:450};"undefined"!==typeof n&&n&&n===Object(n)&&Object.isExtensible(n)&&Object.defineProperty(n,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"springDefaultConfig",filename:"src/constants/Animation.ts"}})},"./src/theme/Theme.tsx":function(e,t,r){"use strict";var n=r("./node_modules/deepmerge/dist/umd.js"),o=r.n(n),a=r("./node_modules/react/index.js"),s=r.n(a),l=r("./node_modules/react-native-web/dist/exports/Platform/index.js");"undefined"!==typeof ColorPalette&&ColorPalette&&ColorPalette===Object(ColorPalette)&&Object.isExtensible(ColorPalette)&&Object.defineProperty(ColorPalette,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ColorPalette",filename:"src/theme/palette.ts"}}),"undefined"!==typeof Palette&&Palette&&Palette===Object(Palette)&&Object.isExtensible(Palette)&&Object.defineProperty(Palette,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Palette",filename:"src/theme/palette.ts"}});var i={lightest:"#fafafa",light:"#eeeeee",base:"#cccccc",dark:"#a7a7a7",darkest:"#7e7e7e"},c={lightest:"#e5f5ff",light:"#ceecff",base:"#1ca5F7",dark:"#59a9de",darkest:"#33495f"},u={lightest:"#f9e1de",light:"#f9aa9f",base:"#d26557",dark:"#bb584e",darkest:"#b74033"},m={lightest:"#fce8cf",light:"#f2c58a",base:"#f3b058",dark:"#ec8e30",darkest:"#b26500"},b={lightest:"#fef8e7",light:"#fbe6a2",base:"#f7d154",dark:"#d1b047",darkest:"#7e6514"},d={lightest:"#eafff3",light:"#c2edd5",base:"#54bf84",dark:"#42a46e",darkest:"#16a054"},f={lightest:"#d6fcf7",light:"#c0f9f2",base:"#67c6bb",dark:"#3fa296",darkest:"#1b877a"},p={lightest:"#f8f7fc",light:"#eae7f8",base:"#735dd0",dark:"#37248f",darkest:"#37248f"};"undefined"!==typeof purple&&purple&&purple===Object(purple)&&Object.isExtensible(purple)&&Object.defineProperty(purple,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"purple",filename:"src/theme/palette.ts"}}),"undefined"!==typeof teal&&teal&&teal===Object(teal)&&Object.isExtensible(teal)&&Object.defineProperty(teal,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"teal",filename:"src/theme/palette.ts"}}),"undefined"!==typeof green&&green&&green===Object(green)&&Object.isExtensible(green)&&Object.defineProperty(green,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"green",filename:"src/theme/palette.ts"}}),"undefined"!==typeof yellow&&yellow&&yellow===Object(yellow)&&Object.isExtensible(yellow)&&Object.defineProperty(yellow,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"yellow",filename:"src/theme/palette.ts"}}),"undefined"!==typeof orange&&orange&&orange===Object(orange)&&Object.isExtensible(orange)&&Object.defineProperty(orange,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"orange",filename:"src/theme/palette.ts"}}),"undefined"!==typeof red&&red&&red===Object(red)&&Object.isExtensible(red)&&Object.defineProperty(red,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"red",filename:"src/theme/palette.ts"}}),"undefined"!==typeof blue&&blue&&blue===Object(blue)&&Object.isExtensible(blue)&&Object.defineProperty(blue,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"blue",filename:"src/theme/palette.ts"}}),"undefined"!==typeof neutral&&neutral&&neutral===Object(neutral)&&Object.isExtensible(neutral)&&Object.defineProperty(neutral,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"neutral",filename:"src/theme/palette.ts"}});var g={small:4,medium:4,large:4},y={background:{base:"white",content:"white",overlay:"rgba(0,0,0,0.3)",greyLight:i.lightest,greyDefault:"#F5F6F7",greyDark:i.light,primaryLight:f.lightest,primaryDefault:f.base,primaryDark:f.dark,secondaryLight:m.lightest,secondaryDefault:m.base,secondaryDark:m.dark,dangerLight:u.lightest,dangerDefault:u.base,dangerDark:u.dark,infoLight:c.lightest,infoDefault:c.base,infoDark:c.dark,successLight:d.lightest,successDefault:d.base,successDark:d.dark,warningLight:m.lightest,warningDefault:m.base,warningDark:m.dark},border:{default:i.light,primary:f.darkest,secondary:m.darkest,danger:u.darkest,info:c.darkest,success:d.darkest,warning:m.darkest},button:{disabled:i.light,disabledText:i.darkest,default:i.lightest,defaultText:i.darkest,primary:f.base,primaryText:"white",secondary:m.base,secondaryText:"white",danger:u.base,dangerText:"white"},text:{link:i.darkest,default:i.darkest,muted:i.dark,white:"white",selected:"white",primary:f.darkest,secondary:m.darkest,danger:u.darkest,info:c.darkest,success:d.darkest,warning:m.darkest}},h=[{elevation:0,shadowColor:i.dark,shadowOffset:{width:0,height:0},shadowOpacity:0,shadowRadius:0},{elevation:1,shadowColor:i.dark,shadowOffset:{width:1,height:1},shadowOpacity:.15,shadowRadius:8},{elevation:2,shadowColor:i.dark,shadowOffset:{width:2,height:2},shadowOpacity:.2,shadowRadius:10},{elevation:3,shadowColor:i.dark,shadowOffset:{width:3,height:3},shadowOpacity:.25,shadowRadius:12},{elevation:4,shadowColor:i.dark,shadowOffset:{width:4,height:4},shadowOpacity:.3,shadowRadius:8},{elevation:5,shadowColor:i.dark,shadowOffset:{width:5,height:5},shadowOpacity:.35,shadowRadius:8}],x={colors:y,fills:{solid:{neutral:{backgroundColor:i.base,color:"white"},blue:{backgroundColor:c.base,color:"white"},red:{backgroundColor:u.base,color:"white"},orange:{backgroundColor:m.base,color:"white"},yellow:{backgroundColor:b.base,color:b.darkest},green:{backgroundColor:d.base,color:"white"},teal:{backgroundColor:f.base,color:"white"},purple:{backgroundColor:p.base,color:"white"}},subtle:{neutral:{backgroundColor:i.light,color:i.darkest},blue:{backgroundColor:c.light,color:c.darkest},red:{backgroundColor:u.light,color:u.darkest},orange:{backgroundColor:m.light,color:m.darkest},yellow:{backgroundColor:b.light,color:b.darkest},green:{backgroundColor:d.light,color:d.darkest},teal:{backgroundColor:f.light,color:f.darkest},purple:{backgroundColor:p.light,color:p.darkest}}},fontFamilies:"web"===l.a.OS?{heading:'"SF UI Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',mono:'"SF Mono", "Monaco", "Inconsolata", "Fira Mono", "Droid Sans Mono", "Source Code Pro", monospace',text:'"SF UI Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'}:{heading:"System",mono:"System",text:"System"},fontWeights:{bold:"bold",light:"300",normal:"normal"},headingSizes:{xxxlarge:{fontSize:35,letterSpacing:-.2,lineHeight:40},xxlarge:{fontSize:29,letterSpacing:-.2,lineHeight:32},xlarge:{fontSize:24,letterSpacing:-.07,lineHeight:28},large:{fontSize:20,letterSpacing:-.07,lineHeight:24},medium:{fontSize:16,letterSpacing:-.05,lineHeight:20},small:{fontSize:14,letterSpacing:-.05,lineHeight:20}},paragraphSizes:{small:{fontSize:14,lineHeight:24},medium:{fontSize:16,lineHeight:21},large:{fontSize:18,lineHeight:18}},textSizes:{large:{fontSize:20},medium:{fontSize:16},small:{fontSize:14},xsmall:{fontSize:12}},elevations:h,controlBorderRadius:g,controlHeights:{small:40,medium:48,large:56},controlPaddings:{small:8,medium:16,large:24},containerShapes:{circle:{borderRadius:999},pill:{borderRadius:999},rounded:{borderRadius:g.medium},roundedBottom:{borderBottomLeftRadius:g.medium,borderBottomRightRadius:g.medium},roundedLeft:{borderBottomLeftRadius:g.medium,borderTopLeftRadius:g.medium},roundedRight:{borderBottomRightRadius:g.medium,borderTopRightRadius:g.medium},roundedTop:{borderTopLeftRadius:g.medium,borderTopRightRadius:g.medium},square:{borderRadius:0}},components:{}};"undefined"!==typeof x&&x&&x===Object(x)&&Object.isExtensible(x)&&Object.defineProperty(x,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"defaultTheme",filename:"src/theme/defaultTheme.ts"}}),r.d(t,"a",function(){return S});"undefined"!==typeof TextSizes&&TextSizes&&TextSizes===Object(TextSizes)&&Object.isExtensible(TextSizes)&&Object.defineProperty(TextSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof TextSize&&TextSize&&TextSize===Object(TextSize)&&Object.isExtensible(TextSize)&&Object.defineProperty(TextSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof HeadingSizes&&HeadingSizes&&HeadingSizes===Object(HeadingSizes)&&Object.isExtensible(HeadingSizes)&&Object.defineProperty(HeadingSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HeadingSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof HeadingSize&&HeadingSize&&HeadingSize===Object(HeadingSize)&&Object.isExtensible(HeadingSize)&&Object.defineProperty(HeadingSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HeadingSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ParagraphSizes&&ParagraphSizes&&ParagraphSizes===Object(ParagraphSizes)&&Object.isExtensible(ParagraphSizes)&&Object.defineProperty(ParagraphSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ParagraphSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ParagraphSize&&ParagraphSize&&ParagraphSize===Object(ParagraphSize)&&Object.isExtensible(ParagraphSize)&&Object.defineProperty(ParagraphSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ParagraphSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontFamilies&&FontFamilies&&FontFamilies===Object(FontFamilies)&&Object.isExtensible(FontFamilies)&&Object.defineProperty(FontFamilies,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontFamilies",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontFamily&&FontFamily&&FontFamily===Object(FontFamily)&&Object.isExtensible(FontFamily)&&Object.defineProperty(FontFamily,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontFamily",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof RNFontWeight&&RNFontWeight&&RNFontWeight===Object(RNFontWeight)&&Object.isExtensible(RNFontWeight)&&Object.defineProperty(RNFontWeight,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"RNFontWeight",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontWeights&&FontWeights&&FontWeights===Object(FontWeights)&&Object.isExtensible(FontWeights)&&Object.defineProperty(FontWeights,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontWeights",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontWeight&&FontWeight&&FontWeight===Object(FontWeight)&&Object.isExtensible(FontWeight)&&Object.defineProperty(FontWeight,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontWeight",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof TextColors&&TextColors&&TextColors===Object(TextColors)&&Object.isExtensible(TextColors)&&Object.defineProperty(TextColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof TextColor&&TextColor&&TextColor===Object(TextColor)&&Object.isExtensible(TextColor)&&Object.defineProperty(TextColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ButtonColors&&ButtonColors&&ButtonColors===Object(ButtonColors)&&Object.isExtensible(ButtonColors)&&Object.defineProperty(ButtonColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ButtonColorsWithText&&ButtonColorsWithText&&ButtonColorsWithText===Object(ButtonColorsWithText)&&Object.isExtensible(ButtonColorsWithText)&&Object.defineProperty(ButtonColorsWithText,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColorsWithText",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ButtonColor&&ButtonColor&&ButtonColor===Object(ButtonColor)&&Object.isExtensible(ButtonColor)&&Object.defineProperty(ButtonColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BorderColors&&BorderColors&&BorderColors===Object(BorderColors)&&Object.isExtensible(BorderColors)&&Object.defineProperty(BorderColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BorderColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BorderColor&&BorderColor&&BorderColor===Object(BorderColor)&&Object.isExtensible(BorderColor)&&Object.defineProperty(BorderColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BorderColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BackgroundColors&&BackgroundColors&&BackgroundColors===Object(BackgroundColors)&&Object.isExtensible(BackgroundColors)&&Object.defineProperty(BackgroundColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BackgroundColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BackgroundColor&&BackgroundColor&&BackgroundColor===Object(BackgroundColor)&&Object.isExtensible(BackgroundColor)&&Object.defineProperty(BackgroundColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BackgroundColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Colors&&Colors&&Colors===Object(Colors)&&Object.isExtensible(Colors)&&Object.defineProperty(Colors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Colors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Elevations&&Elevations&&Elevations===Object(Elevations)&&Object.isExtensible(Elevations)&&Object.defineProperty(Elevations,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Elevations",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Elevation&&Elevation&&Elevation===Object(Elevation)&&Object.isExtensible(Elevation)&&Object.defineProperty(Elevation,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Elevation",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ControlSizes&&ControlSizes&&ControlSizes===Object(ControlSizes)&&Object.isExtensible(ControlSizes)&&Object.defineProperty(ControlSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ControlSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ControlSize&&ControlSize&&ControlSize===Object(ControlSize)&&Object.isExtensible(ControlSize)&&Object.defineProperty(ControlSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ControlSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FillColorProps&&FillColorProps&&FillColorProps===Object(FillColorProps)&&Object.isExtensible(FillColorProps)&&Object.defineProperty(FillColorProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FillColorProps",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FillColors&&FillColors&&FillColors===Object(FillColors)&&Object.isExtensible(FillColors)&&Object.defineProperty(FillColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FillColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FillColor&&FillColor&&FillColor===Object(FillColor)&&Object.isExtensible(FillColor)&&Object.defineProperty(FillColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FillColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Fills&&Fills&&Fills===Object(Fills)&&Object.isExtensible(Fills)&&Object.defineProperty(Fills,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Fills",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ContainerShapes&&ContainerShapes&&ContainerShapes===Object(ContainerShapes)&&Object.isExtensible(ContainerShapes)&&Object.defineProperty(ContainerShapes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ContainerShapes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ContainerShape&&ContainerShape&&ContainerShape===Object(ContainerShape)&&Object.isExtensible(ContainerShape)&&Object.defineProperty(ContainerShape,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ContainerShape",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Theme&&Theme&&Theme===Object(Theme)&&Object.isExtensible(Theme)&&Object.defineProperty(Theme,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Theme",filename:"src/theme/Theme.tsx"}});var j=s.a.createContext(x);"undefined"!==typeof j&&j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ThemeContext",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ThemeProviderProps&&ThemeProviderProps&&ThemeProviderProps===Object(ThemeProviderProps)&&Object.isExtensible(ThemeProviderProps)&&Object.defineProperty(ThemeProviderProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ThemeProviderProps",filename:"src/theme/Theme.tsx"}});var O=function(e){return e?o()(x,e):x};O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"createTheme",filename:"src/theme/Theme.tsx"}});var _=function(e){var t=e.children,r=e.value,n=O(void 0===r?x:r);return s.a.createElement(j.Provider,{value:n,__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/theme/Theme.tsx",lineNumber:315}},t)};_&&_===Object(_)&&Object.isExtensible(_)&&Object.defineProperty(_,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ThemeProvider",filename:"src/theme/Theme.tsx"}});var S=function(){return s.a.useContext(j)};"undefined"!==typeof S&&S&&S===Object(S)&&Object.isExtensible(S)&&Object.defineProperty(S,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useTheme",filename:"src/theme/Theme.tsx"}})},"./src/utils/mergeStyles.ts":function(e,t,r){"use strict";r.d(t,"a",function(){return a});var n=r("./node_modules/deepmerge/dist/umd.js"),o=r.n(n);"undefined"!==typeof GetStyles&&GetStyles&&GetStyles===Object(GetStyles)&&Object.isExtensible(GetStyles)&&Object.defineProperty(GetStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetStyles",filename:"src/utils/mergeStyles.ts"}}),"undefined"!==typeof ArgumentTypes&&ArgumentTypes&&ArgumentTypes===Object(ArgumentTypes)&&Object.isExtensible(ArgumentTypes)&&Object.defineProperty(ArgumentTypes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ArgumentTypes",filename:"src/utils/mergeStyles.ts"}}),"undefined"!==typeof ReplaceReturnType&&ReplaceReturnType&&ReplaceReturnType===Object(ReplaceReturnType)&&Object.isExtensible(ReplaceReturnType)&&Object.defineProperty(ReplaceReturnType,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ReplaceReturnType",filename:"src/utils/mergeStyles.ts"}});var a=function(e,t,r){return function(n,a){var s=[e(n,a)];return r&&s.push(r(n,a)),t&&s.push(t(n,a)),o.a.all(s)}};"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"mergeStyles",filename:"src/utils/mergeStyles.ts"}})}}]);
//# sourceMappingURL=5.92bc92f5af061cafaa67.js.map