(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"./src/components/Alert/Alert.mdx":function(e,t,r){"use strict";r.r(t),r.d(t,"default",function(){return b});var n=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),l=(r("./node_modules/react/index.js"),r("./node_modules/@mdx-js/react/dist/index.es.js")),i=r("./node_modules/docz/dist/index.esm.js"),a=r("./src/components/Alert/Alert.tsx"),s=r("./src/components/Box/Box.tsx"),c="/home/travis/build/WeTrustPlatform/paramount/src/components/Alert/Alert.mdx",m={},u="wrapper";function b(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(l.b)(u,Object(o.a)({},m,r,{components:t,mdxType:"MDXLayout",__source:{fileName:c,lineNumber:21}}),Object(l.b)("h1",Object(o.a)({id:"alert"},{__source:{fileName:c,lineNumber:23}}),"Alert"),Object(l.b)("p",{__source:{fileName:c,lineNumber:26}},"Give feedback to the user about an action or state"),Object(l.b)("h2",Object(o.a)({id:"usage"},{__source:{fileName:c,lineNumber:27}}),"Usage"),Object(l.b)(i.c,{__position:0,__code:'<Box paddingVertical={8}>\n  <Alert title="Info" description="Message" />\n</Box>\n<Box paddingVertical={8}>\n  <Alert intent="success" title="Success" description="Message" />\n</Box>\n<Box paddingVertical={8}>\n  <Alert intent="warning" title="Warning" description="Message" />\n</Box>\n<Box paddingVertical={8}>\n  <Alert intent="danger" title="Danger" description="Message" />\n</Box>',__scope:{props:this?this.props:r,Playground:i.c,Props:i.d,Alert:a.a,Box:s.a},mdxType:"Playground",__source:{fileName:c,lineNumber:30}},Object(l.b)(s.a,{paddingVertical:8,mdxType:"Box",__source:{fileName:c,lineNumber:37}},Object(l.b)(a.a,{title:"Info",description:"Message",mdxType:"Alert",__source:{fileName:c,lineNumber:38}})),Object(l.b)(s.a,{paddingVertical:8,mdxType:"Box",__source:{fileName:c,lineNumber:40}},Object(l.b)(a.a,{intent:"success",title:"Success",description:"Message",mdxType:"Alert",__source:{fileName:c,lineNumber:41}})),Object(l.b)(s.a,{paddingVertical:8,mdxType:"Box",__source:{fileName:c,lineNumber:43}},Object(l.b)(a.a,{intent:"warning",title:"Warning",description:"Message",mdxType:"Alert",__source:{fileName:c,lineNumber:44}})),Object(l.b)(s.a,{paddingVertical:8,mdxType:"Box",__source:{fileName:c,lineNumber:46}},Object(l.b)(a.a,{intent:"danger",title:"Danger",description:"Message",mdxType:"Alert",__source:{fileName:c,lineNumber:47}}))),Object(l.b)("h2",Object(o.a)({id:"props"},{__source:{fileName:c,lineNumber:50}}),"Props"),Object(l.b)(i.d,{of:a.a,mdxType:"Props",__source:{fileName:c,lineNumber:53}}),Object(l.b)("h2",Object(o.a)({id:"customization"},{__source:{fileName:c,lineNumber:54}}),"Customization"),Object(l.b)("p",{__source:{fileName:c,lineNumber:57}},"Use ",Object(l.b)("inlineCode",{parentName:"p",__source:{fileName:c,lineNumber:57}},"getStyles")," prop"),Object(l.b)("pre",{__source:{fileName:c,lineNumber:58}},Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx"},{__source:{fileName:c,lineNumber:58}}),"AlertStyles {\n  containerStyle: ViewStyle;\n  bodyStyle: ViewStyle;\n  titleStyle: TextStyle;\n  descriptionStyle: TextStyle;\n}\n\ngetStyles={(AlertProps, Theme) => AlertStyles}\n")),Object(l.b)("p",{__source:{fileName:c,lineNumber:69}},"Markup"),Object(l.b)("pre",{__source:{fileName:c,lineNumber:70}},Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx"},{__source:{fileName:c,lineNumber:70}}),"<View containerStyle>\n  {icon}\n  <View bodyStyle>\n    <Text titleStyle>{title}</Text>\n    <Text descriptionStyle>{description}</Text>\n  </View>\n</View>\n")))}b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Alert/Alert.mdx"}}),b.isMDXComponent=!0},"./src/components/Alert/Alert.tsx":function(e,t,r){"use strict";var n=r("./node_modules/react/index.js"),o=r("./node_modules/react-native-web/dist/exports/View/index.js"),l=r("./src/theme/Theme.tsx"),i=r("./src/utils/mergeStyles.ts"),a=r("./src/components/Box/Box.tsx"),s=r("./src/components/Icon/Icon.web.tsx"),c=r("./src/components/Typography/Text.tsx"),m=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");"undefined"!==typeof AlertStyles&&AlertStyles&&AlertStyles===Object(AlertStyles)&&Object.isExtensible(AlertStyles)&&Object.defineProperty(AlertStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"AlertStyles",filename:"src/components/Alert/Alert.styles.ts"}}),"undefined"!==typeof GetAlertStyles&&GetAlertStyles&&GetAlertStyles===Object(GetAlertStyles)&&Object.isExtensible(GetAlertStyles)&&Object.defineProperty(GetAlertStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetAlertStyles",filename:"src/components/Alert/Alert.styles.ts"}});var u=function(e,t){var r=e.intent,n=void 0===r?"info":r;return{bodyStyle:{flex:1},containerStyle:Object(m.a)({backgroundColor:t.colors.background.content,borderLeftColor:t.colors.border[n],borderLeftWidth:5,borderRadius:t.controlBorderRadius.medium,display:"flex",flexDirection:"row",padding:16},t.elevations[2]),descriptionStyle:{},titleStyle:{}}};u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getAlertStyles",filename:"src/components/Alert/Alert.styles.ts"}}),r.d(t,"a",function(){return d});var b="/home/travis/build/WeTrustPlatform/paramount/src/components/Alert/Alert.tsx";"undefined"!==typeof AlertProps&&AlertProps&&AlertProps===Object(AlertProps)&&Object.isExtensible(AlertProps)&&Object.defineProperty(AlertProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"AlertProps",filename:"src/components/Alert/Alert.tsx"}});var d=function(e){var t=e.title,r=e.description,m=e.icon,d=e.intent,f=void 0===d?"info":d,p=e.getStyles,g=e.testID,h=Object(l.a)(),y=Object(i.a)(u,p,h.components.getAlertStyles)({intent:f},h),x=y.containerStyle,j=y.bodyStyle,O=y.descriptionStyle,_=y.titleStyle;return n.createElement(o.a,{style:x,testID:g,__source:{fileName:b,lineNumber:78}},null===m?null:m||n.createElement(a.a,{paddingRight:16,justifyContent:"center",__source:{fileName:b,lineNumber:82}},function(e){switch(e){case"success":return n.createElement(s.a,{name:"check-circle",size:24,color:"success",__source:{fileName:b,lineNumber:42}});case"warning":return n.createElement(s.a,{name:"alert-triangle",size:24,color:"warning",__source:{fileName:b,lineNumber:44}});case"danger":return n.createElement(s.a,{name:"alert-circle",size:24,color:"danger",__source:{fileName:b,lineNumber:46}});default:return n.createElement(s.a,{name:"info",size:24,color:"info",__source:{fileName:b,lineNumber:48}})}}(f)),n.createElement(o.a,{style:j,__source:{fileName:b,lineNumber:86}},n.createElement(c.a,{getStyles:function(){return{textStyle:_}},weight:"bold",__source:{fileName:b,lineNumber:87}},t),n.createElement(c.a,{getStyles:function(){return{textStyle:O}},__source:{fileName:b,lineNumber:90}},r)))};"undefined"!==typeof d&&d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Alert",filename:"src/components/Alert/Alert.tsx"}})},"./src/components/Box/Box.tsx":function(e,t,r){"use strict";r.d(t,"a",function(){return s});var n=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=r("./node_modules/react/index.js"),l=r("./node_modules/react-native-web/dist/exports/View/index.js"),i=r("./src/theme/Theme.tsx");"undefined"!==typeof BoxProps&&BoxProps&&BoxProps===Object(BoxProps)&&Object.isExtensible(BoxProps)&&Object.defineProperty(BoxProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxProps",filename:"src/components/Box/Box.tsx"}});var a={backgroundColor:function(e,t){return t.colors.background[e]?{backgroundColor:t.colors.background[e]}:{backgroundColor:e}},elevation:function(e,t){return t.elevations[e]},shape:function(e,t){return t.containerShapes[e]}},s=function(e){var t=e.children,r=e.testID,s=Object(n.a)(e,["children","testID"]),c=Object(i.a)(),m=[],u={};for(var b in s)if(b){var d=a[b];if(d){var f=d(s[b],c);m.push(f)}else u[b]=s[b]}return o.createElement(l.a,{testID:r,style:[u,m],__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Box/Box.tsx",lineNumber:53}},t)};"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Box",filename:"src/components/Box/Box.tsx"}})},"./src/components/Icon/Icon.web.tsx":function(e,t,r){"use strict";r.d(t,"a",function(){return a});var n=r("./node_modules/react/index.js"),o=r("./node_modules/react-icons/fi/index.esm.js"),l=r("./src/theme/Theme.tsx"),i=r("./src/components/Typography/Text.styles.ts");var a=function(e){var t=e.name,r=e.color,a=e.size,s=void 0===a?24:a,c=Object(l.a)(),m=o["Fi".concat(function(e){var t=e.replace(/(\-\w)/g,function(e){return e[1].toUpperCase()});return t.charAt(0).toUpperCase()+t.slice(1)}(t))];return n.createElement(m,{color:r?Object(i.b)(c.colors.text)(r):r,size:s,__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Icon/Icon.web.tsx",lineNumber:23}})};"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Icon",filename:"src/components/Icon/Icon.web.tsx"}})},"./src/components/Typography/Text.styles.ts":function(e,t,r){"use strict";r.d(t,"a",function(){return o}),r.d(t,"b",function(){return l}),r.d(t,"c",function(){return a});var n=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");"undefined"!==typeof TextStyles&&TextStyles&&TextStyles===Object(TextStyles)&&Object.isExtensible(TextStyles)&&Object.defineProperty(TextStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextStyles",filename:"src/components/Typography/Text.styles.ts"}}),"undefined"!==typeof GetTextStyles&&GetTextStyles&&GetTextStyles===Object(GetTextStyles)&&Object.isExtensible(GetTextStyles)&&Object.defineProperty(GetTextStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetTextStyles",filename:"src/components/Typography/Text.styles.ts"}});var o=function(e){return function(t){if(t)return e[t]||t}};"undefined"!==typeof o&&o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getFontWeight",filename:"src/components/Typography/Text.styles.ts"}});var l=function(e){return function(t){return e[t]||t}};"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTextColor",filename:"src/components/Typography/Text.styles.ts"}});var i=function(e){return function(t){return e[t]||{fontSize:t}}};i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTextSize",filename:"src/components/Typography/Text.styles.ts"}});var a=function(e,t){var r=e.color,a=void 0===r?"default":r,s=e.size,c=void 0===s?"medium":s,m=e.align,u=void 0===m?"left":m,b=e.weight,d=e.isItalic,f=void 0!==d&&d,p=e.transform,g=i(t.textSizes)(c);return{textStyle:Object(n.a)({},g,{color:l(t.colors.text)(a),fontFamily:t.fontFamilies.text,fontWeight:o(t.fontWeights)(b)||g.fontWeight,textAlign:u},f&&{fontStyle:"italic"},p&&{textTransform:p})}};"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTextStyles",filename:"src/components/Typography/Text.styles.ts"}})},"./src/components/Typography/Text.tsx":function(e,t,r){"use strict";r.d(t,"a",function(){return m});var n=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),o=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),l=r("./node_modules/react/index.js"),i=r("./node_modules/react-native-web/dist/exports/Text/index.js"),a=r("./src/theme/Theme.tsx"),s=r("./src/utils/mergeStyles.ts"),c=r("./src/components/Typography/Text.styles.ts");"undefined"!==typeof TextProps&&TextProps&&TextProps===Object(TextProps)&&Object.isExtensible(TextProps)&&Object.defineProperty(TextProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextProps",filename:"src/components/Typography/Text.tsx"}});var m=function(e){var t=e.children,r=(e.color,e.size,e.align,e.weight,e.getStyles),m=(e.isItalic,e.transform,Object(o.a)(e,["children","color","size","align","weight","getStyles","isItalic","transform"])),u=Object(a.a)(),b=Object(s.a)(c.c,r,u.components.getTextStyles)(e,u).textStyle;return l.createElement(i.a,Object(n.a)({style:b},m,{__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Typography/Text.tsx",lineNumber:75}}),t)};"undefined"!==typeof m&&m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Text",filename:"src/components/Typography/Text.tsx"}})},"./src/theme/Theme.tsx":function(e,t,r){"use strict";var n=r("./node_modules/deepmerge/dist/umd.js"),o=r.n(n),l=r("./node_modules/react/index.js"),i=r.n(l),a=r("./node_modules/react-native-web/dist/exports/Platform/index.js");"undefined"!==typeof ColorPalette&&ColorPalette&&ColorPalette===Object(ColorPalette)&&Object.isExtensible(ColorPalette)&&Object.defineProperty(ColorPalette,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ColorPalette",filename:"src/theme/palette.ts"}}),"undefined"!==typeof Palette&&Palette&&Palette===Object(Palette)&&Object.isExtensible(Palette)&&Object.defineProperty(Palette,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Palette",filename:"src/theme/palette.ts"}});var s={lightest:"#fafafa",light:"#eeeeee",base:"#cccccc",dark:"#a7a7a7",darkest:"#7e7e7e"},c={lightest:"#e5f5ff",light:"#ceecff",base:"#1ca5F7",dark:"#59a9de",darkest:"#33495f"},m={lightest:"#f9e1de",light:"#f9aa9f",base:"#d26557",dark:"#bb584e",darkest:"#b74033"},u={lightest:"#fce8cf",light:"#f2c58a",base:"#f3b058",dark:"#ec8e30",darkest:"#b26500"},b={lightest:"#fef8e7",light:"#fbe6a2",base:"#f7d154",dark:"#d1b047",darkest:"#7e6514"},d={lightest:"#eafff3",light:"#c2edd5",base:"#54bf84",dark:"#42a46e",darkest:"#16a054"},f={lightest:"#d6fcf7",light:"#c0f9f2",base:"#67c6bb",dark:"#3fa296",darkest:"#1b877a"},p={lightest:"#f8f7fc",light:"#eae7f8",base:"#735dd0",dark:"#37248f",darkest:"#37248f"};"undefined"!==typeof purple&&purple&&purple===Object(purple)&&Object.isExtensible(purple)&&Object.defineProperty(purple,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"purple",filename:"src/theme/palette.ts"}}),"undefined"!==typeof teal&&teal&&teal===Object(teal)&&Object.isExtensible(teal)&&Object.defineProperty(teal,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"teal",filename:"src/theme/palette.ts"}}),"undefined"!==typeof green&&green&&green===Object(green)&&Object.isExtensible(green)&&Object.defineProperty(green,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"green",filename:"src/theme/palette.ts"}}),"undefined"!==typeof yellow&&yellow&&yellow===Object(yellow)&&Object.isExtensible(yellow)&&Object.defineProperty(yellow,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"yellow",filename:"src/theme/palette.ts"}}),"undefined"!==typeof orange&&orange&&orange===Object(orange)&&Object.isExtensible(orange)&&Object.defineProperty(orange,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"orange",filename:"src/theme/palette.ts"}}),"undefined"!==typeof red&&red&&red===Object(red)&&Object.isExtensible(red)&&Object.defineProperty(red,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"red",filename:"src/theme/palette.ts"}}),"undefined"!==typeof blue&&blue&&blue===Object(blue)&&Object.isExtensible(blue)&&Object.defineProperty(blue,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"blue",filename:"src/theme/palette.ts"}}),"undefined"!==typeof neutral&&neutral&&neutral===Object(neutral)&&Object.isExtensible(neutral)&&Object.defineProperty(neutral,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"neutral",filename:"src/theme/palette.ts"}});var g={small:4,medium:4,large:4},h={background:{base:"white",content:"white",overlay:"rgba(0,0,0,0.3)",greyLight:s.lightest,greyDefault:"#F5F6F7",greyDark:s.light,primaryLight:f.lightest,primaryDefault:f.base,primaryDark:f.dark,secondaryLight:u.lightest,secondaryDefault:u.base,secondaryDark:u.dark,dangerLight:m.lightest,dangerDefault:m.base,dangerDark:m.dark,infoLight:c.lightest,infoDefault:c.base,infoDark:c.dark,successLight:d.lightest,successDefault:d.base,successDark:d.dark,warningLight:u.lightest,warningDefault:u.base,warningDark:u.dark},border:{default:s.light,primary:f.darkest,secondary:u.darkest,danger:m.darkest,info:c.darkest,success:d.darkest,warning:u.darkest},button:{disabled:s.light,disabledText:s.darkest,default:s.lightest,defaultText:s.darkest,primary:f.base,primaryText:"white",secondary:u.base,secondaryText:"white",danger:m.base,dangerText:"white"},text:{link:s.darkest,default:s.darkest,muted:s.dark,white:"white",selected:"white",primary:f.darkest,secondary:u.darkest,danger:m.darkest,info:c.darkest,success:d.darkest,warning:u.darkest}},y=[{elevation:0,shadowColor:s.dark,shadowOffset:{width:0,height:0},shadowOpacity:0,shadowRadius:0},{elevation:1,shadowColor:s.dark,shadowOffset:{width:1,height:1},shadowOpacity:.15,shadowRadius:8},{elevation:2,shadowColor:s.dark,shadowOffset:{width:2,height:2},shadowOpacity:.2,shadowRadius:10},{elevation:3,shadowColor:s.dark,shadowOffset:{width:3,height:3},shadowOpacity:.25,shadowRadius:12},{elevation:4,shadowColor:s.dark,shadowOffset:{width:4,height:4},shadowOpacity:.3,shadowRadius:8},{elevation:5,shadowColor:s.dark,shadowOffset:{width:5,height:5},shadowOpacity:.35,shadowRadius:8}],x={colors:h,fills:{solid:{neutral:{backgroundColor:s.base,color:"white"},blue:{backgroundColor:c.base,color:"white"},red:{backgroundColor:m.base,color:"white"},orange:{backgroundColor:u.base,color:"white"},yellow:{backgroundColor:b.base,color:b.darkest},green:{backgroundColor:d.base,color:"white"},teal:{backgroundColor:f.base,color:"white"},purple:{backgroundColor:p.base,color:"white"}},subtle:{neutral:{backgroundColor:s.light,color:s.darkest},blue:{backgroundColor:c.light,color:c.darkest},red:{backgroundColor:m.light,color:m.darkest},orange:{backgroundColor:u.light,color:u.darkest},yellow:{backgroundColor:b.light,color:b.darkest},green:{backgroundColor:d.light,color:d.darkest},teal:{backgroundColor:f.light,color:f.darkest},purple:{backgroundColor:p.light,color:p.darkest}}},fontFamilies:"web"===a.a.OS?{heading:'"SF UI Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',mono:'"SF Mono", "Monaco", "Inconsolata", "Fira Mono", "Droid Sans Mono", "Source Code Pro", monospace',text:'"SF UI Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'}:{heading:"System",mono:"System",text:"System"},fontWeights:{bold:"bold",light:"300",normal:"normal"},headingSizes:{xxxlarge:{fontSize:35,letterSpacing:-.2,lineHeight:40},xxlarge:{fontSize:29,letterSpacing:-.2,lineHeight:32},xlarge:{fontSize:24,letterSpacing:-.07,lineHeight:28},large:{fontSize:20,letterSpacing:-.07,lineHeight:24},medium:{fontSize:16,letterSpacing:-.05,lineHeight:20},small:{fontSize:14,letterSpacing:-.05,lineHeight:20}},paragraphSizes:{small:{fontSize:14,lineHeight:24},medium:{fontSize:16,lineHeight:21},large:{fontSize:18,lineHeight:18}},textSizes:{large:{fontSize:20},medium:{fontSize:16},small:{fontSize:14},xsmall:{fontSize:12}},elevations:y,controlBorderRadius:g,controlHeights:{small:40,medium:48,large:56},controlPaddings:{small:8,medium:16,large:24},containerShapes:{circle:{borderRadius:999},pill:{borderRadius:999},rounded:{borderRadius:g.medium},roundedBottom:{borderBottomLeftRadius:g.medium,borderBottomRightRadius:g.medium},roundedLeft:{borderBottomLeftRadius:g.medium,borderTopLeftRadius:g.medium},roundedRight:{borderBottomRightRadius:g.medium,borderTopRightRadius:g.medium},roundedTop:{borderTopLeftRadius:g.medium,borderTopRightRadius:g.medium},square:{borderRadius:0}},components:{}};"undefined"!==typeof x&&x&&x===Object(x)&&Object.isExtensible(x)&&Object.defineProperty(x,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"defaultTheme",filename:"src/theme/defaultTheme.ts"}}),r.d(t,"a",function(){return T});"undefined"!==typeof TextSizes&&TextSizes&&TextSizes===Object(TextSizes)&&Object.isExtensible(TextSizes)&&Object.defineProperty(TextSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof TextSize&&TextSize&&TextSize===Object(TextSize)&&Object.isExtensible(TextSize)&&Object.defineProperty(TextSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof HeadingSizes&&HeadingSizes&&HeadingSizes===Object(HeadingSizes)&&Object.isExtensible(HeadingSizes)&&Object.defineProperty(HeadingSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HeadingSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof HeadingSize&&HeadingSize&&HeadingSize===Object(HeadingSize)&&Object.isExtensible(HeadingSize)&&Object.defineProperty(HeadingSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HeadingSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ParagraphSizes&&ParagraphSizes&&ParagraphSizes===Object(ParagraphSizes)&&Object.isExtensible(ParagraphSizes)&&Object.defineProperty(ParagraphSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ParagraphSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ParagraphSize&&ParagraphSize&&ParagraphSize===Object(ParagraphSize)&&Object.isExtensible(ParagraphSize)&&Object.defineProperty(ParagraphSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ParagraphSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontFamilies&&FontFamilies&&FontFamilies===Object(FontFamilies)&&Object.isExtensible(FontFamilies)&&Object.defineProperty(FontFamilies,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontFamilies",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontFamily&&FontFamily&&FontFamily===Object(FontFamily)&&Object.isExtensible(FontFamily)&&Object.defineProperty(FontFamily,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontFamily",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof RNFontWeight&&RNFontWeight&&RNFontWeight===Object(RNFontWeight)&&Object.isExtensible(RNFontWeight)&&Object.defineProperty(RNFontWeight,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"RNFontWeight",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontWeights&&FontWeights&&FontWeights===Object(FontWeights)&&Object.isExtensible(FontWeights)&&Object.defineProperty(FontWeights,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontWeights",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontWeight&&FontWeight&&FontWeight===Object(FontWeight)&&Object.isExtensible(FontWeight)&&Object.defineProperty(FontWeight,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontWeight",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof TextColors&&TextColors&&TextColors===Object(TextColors)&&Object.isExtensible(TextColors)&&Object.defineProperty(TextColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof TextColor&&TextColor&&TextColor===Object(TextColor)&&Object.isExtensible(TextColor)&&Object.defineProperty(TextColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ButtonColors&&ButtonColors&&ButtonColors===Object(ButtonColors)&&Object.isExtensible(ButtonColors)&&Object.defineProperty(ButtonColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ButtonColorsWithText&&ButtonColorsWithText&&ButtonColorsWithText===Object(ButtonColorsWithText)&&Object.isExtensible(ButtonColorsWithText)&&Object.defineProperty(ButtonColorsWithText,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColorsWithText",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ButtonColor&&ButtonColor&&ButtonColor===Object(ButtonColor)&&Object.isExtensible(ButtonColor)&&Object.defineProperty(ButtonColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BorderColors&&BorderColors&&BorderColors===Object(BorderColors)&&Object.isExtensible(BorderColors)&&Object.defineProperty(BorderColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BorderColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BorderColor&&BorderColor&&BorderColor===Object(BorderColor)&&Object.isExtensible(BorderColor)&&Object.defineProperty(BorderColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BorderColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BackgroundColors&&BackgroundColors&&BackgroundColors===Object(BackgroundColors)&&Object.isExtensible(BackgroundColors)&&Object.defineProperty(BackgroundColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BackgroundColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BackgroundColor&&BackgroundColor&&BackgroundColor===Object(BackgroundColor)&&Object.isExtensible(BackgroundColor)&&Object.defineProperty(BackgroundColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BackgroundColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Colors&&Colors&&Colors===Object(Colors)&&Object.isExtensible(Colors)&&Object.defineProperty(Colors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Colors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Elevations&&Elevations&&Elevations===Object(Elevations)&&Object.isExtensible(Elevations)&&Object.defineProperty(Elevations,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Elevations",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Elevation&&Elevation&&Elevation===Object(Elevation)&&Object.isExtensible(Elevation)&&Object.defineProperty(Elevation,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Elevation",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ControlSizes&&ControlSizes&&ControlSizes===Object(ControlSizes)&&Object.isExtensible(ControlSizes)&&Object.defineProperty(ControlSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ControlSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ControlSize&&ControlSize&&ControlSize===Object(ControlSize)&&Object.isExtensible(ControlSize)&&Object.defineProperty(ControlSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ControlSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FillColorProps&&FillColorProps&&FillColorProps===Object(FillColorProps)&&Object.isExtensible(FillColorProps)&&Object.defineProperty(FillColorProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FillColorProps",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FillColors&&FillColors&&FillColors===Object(FillColors)&&Object.isExtensible(FillColors)&&Object.defineProperty(FillColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FillColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FillColor&&FillColor&&FillColor===Object(FillColor)&&Object.isExtensible(FillColor)&&Object.defineProperty(FillColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FillColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Fills&&Fills&&Fills===Object(Fills)&&Object.isExtensible(Fills)&&Object.defineProperty(Fills,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Fills",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ContainerShapes&&ContainerShapes&&ContainerShapes===Object(ContainerShapes)&&Object.isExtensible(ContainerShapes)&&Object.defineProperty(ContainerShapes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ContainerShapes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ContainerShape&&ContainerShape&&ContainerShape===Object(ContainerShape)&&Object.isExtensible(ContainerShape)&&Object.defineProperty(ContainerShape,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ContainerShape",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Theme&&Theme&&Theme===Object(Theme)&&Object.isExtensible(Theme)&&Object.defineProperty(Theme,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Theme",filename:"src/theme/Theme.tsx"}});var j=i.a.createContext(x);"undefined"!==typeof j&&j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ThemeContext",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ThemeProviderProps&&ThemeProviderProps&&ThemeProviderProps===Object(ThemeProviderProps)&&Object.isExtensible(ThemeProviderProps)&&Object.defineProperty(ThemeProviderProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ThemeProviderProps",filename:"src/theme/Theme.tsx"}});var O=function(e){return e?o()(x,e):x};O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"createTheme",filename:"src/theme/Theme.tsx"}});var _=function(e){var t=e.children,r=e.value,n=O(void 0===r?x:r);return i.a.createElement(j.Provider,{value:n,__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/theme/Theme.tsx",lineNumber:315}},t)};_&&_===Object(_)&&Object.isExtensible(_)&&Object.defineProperty(_,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ThemeProvider",filename:"src/theme/Theme.tsx"}});var T=function(){return i.a.useContext(j)};"undefined"!==typeof T&&T&&T===Object(T)&&Object.isExtensible(T)&&Object.defineProperty(T,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useTheme",filename:"src/theme/Theme.tsx"}})},"./src/utils/mergeStyles.ts":function(e,t,r){"use strict";r.d(t,"a",function(){return l});var n=r("./node_modules/deepmerge/dist/umd.js"),o=r.n(n);"undefined"!==typeof GetStyles&&GetStyles&&GetStyles===Object(GetStyles)&&Object.isExtensible(GetStyles)&&Object.defineProperty(GetStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetStyles",filename:"src/utils/mergeStyles.ts"}}),"undefined"!==typeof ArgumentTypes&&ArgumentTypes&&ArgumentTypes===Object(ArgumentTypes)&&Object.isExtensible(ArgumentTypes)&&Object.defineProperty(ArgumentTypes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ArgumentTypes",filename:"src/utils/mergeStyles.ts"}}),"undefined"!==typeof ReplaceReturnType&&ReplaceReturnType&&ReplaceReturnType===Object(ReplaceReturnType)&&Object.isExtensible(ReplaceReturnType)&&Object.defineProperty(ReplaceReturnType,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ReplaceReturnType",filename:"src/utils/mergeStyles.ts"}});var l=function(e,t,r){return function(n,l){var i=[e(n,l)];return r&&i.push(r(n,l)),t&&i.push(t(n,l)),o.a.all(i)}};"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"mergeStyles",filename:"src/utils/mergeStyles.ts"}})}}]);
//# sourceMappingURL=15.f1c3b6e697a5fb6b03af.js.map