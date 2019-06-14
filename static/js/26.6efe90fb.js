(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"./src/components/Avatar/Avatar.mdx":function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return u});var r=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),n=(a("./node_modules/react/index.js"),a("./node_modules/@mdx-js/react/dist/index.es.js")),l=a("./node_modules/docz/dist/index.esm.js"),i=a("./src/components/Avatar/Avatar.tsx"),s="/home/travis/build/WeTrustPlatform/paramount/src/components/Avatar/Avatar.mdx",c={},m="wrapper";function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(n.b)(m,Object(o.a)({},c,a,{components:t,mdxType:"MDXLayout",__source:{fileName:s,lineNumber:21}}),Object(n.b)("h1",Object(o.a)({id:"avatar"},{__source:{fileName:s,lineNumber:23}}),"Avatar"),Object(n.b)("h3",Object(o.a)({id:"usage"},{__source:{fileName:s,lineNumber:26}}),"Usage"),Object(n.b)(l.c,{__position:0,__code:"<Avatar\n  name=\"Bill Gates\"\n  source={{ uri: 'https://picsum.photos/200/200' }}\n  size={40}\n  isSolid={false}\n  color=\"automatic\"\n  getInitials={(name, fallback) =>\n    name ? `${name.charAt(0)}${name.charAt(5)}` : 'A'\n  }\n  getStyles={(props, theme) => ({\n    boxStyle: {},\n    textStyle: {},\n    imageStyle: {},\n  })}\n/>",__scope:{props:this?this.props:a,Playground:l.c,Props:l.d,Avatar:i.a},mdxType:"Playground",__source:{fileName:s,lineNumber:29}},Object(n.b)(i.a,{name:"Bill Gates",source:{uri:"https://picsum.photos/200/200"},size:40,isSolid:!1,color:"automatic",getInitials:function(e,t){return e?"".concat(e.charAt(0)).concat(e.charAt(5)):"A"},getStyles:function(e,t){return{boxStyle:{},textStyle:{},imageStyle:{}}},mdxType:"Avatar",__source:{fileName:s,lineNumber:35}})),Object(n.b)("h3",Object(o.a)({id:"automatic-name-usage"},{__source:{fileName:s,lineNumber:43}}),"Automatic name usage"),Object(n.b)(l.c,{__position:1,__code:'<Avatar name="Bill Gates" />',__scope:{props:this?this.props:a,Playground:l.c,Props:l.d,Avatar:i.a},mdxType:"Playground",__source:{fileName:s,lineNumber:46}},Object(n.b)(i.a,{name:"Bill Gates",mdxType:"Avatar",__source:{fileName:s,lineNumber:52}})),Object(n.b)("h3",Object(o.a)({id:"props"},{__source:{fileName:s,lineNumber:54}}),"Props"),Object(n.b)(l.d,{of:i.a,mdxType:"Props",__source:{fileName:s,lineNumber:57}}))}u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Avatar/Avatar.mdx"}}),u.isMDXComponent=!0},"./src/components/Avatar/Avatar.tsx":function(e,t,a){"use strict";var r=a("./node_modules/react/index.js"),o=a("./node_modules/react-native-web/dist/exports/Image/index.js"),n=a("./node_modules/react-native-web/dist/exports/View/index.js"),l=a("./src/theme/Theme.tsx"),i=a("./src/utils/mergeStyles.ts"),s=a("./src/components/Typography/Text.tsx"),c=function(e){var t=String(e),a=0;if(0===t.trim().length)return a;for(var r=0;r<t.length;r++)a=(a<<5)-a+t.charCodeAt(r),a&=a;return Math.abs(a)};c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"hashCode",filename:"src/components/Avatar/Avatar.styles.ts"}}),"undefined"!==typeof AvatarColor&&AvatarColor&&AvatarColor===Object(AvatarColor)&&Object.isExtensible(AvatarColor)&&Object.defineProperty(AvatarColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"AvatarColor",filename:"src/components/Avatar/Avatar.styles.ts"}}),"undefined"!==typeof AvatarStylesProps&&AvatarStylesProps&&AvatarStylesProps===Object(AvatarStylesProps)&&Object.isExtensible(AvatarStylesProps)&&Object.defineProperty(AvatarStylesProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"AvatarStylesProps",filename:"src/components/Avatar/Avatar.styles.ts"}}),"undefined"!==typeof AvatarStyles&&AvatarStyles&&AvatarStyles===Object(AvatarStyles)&&Object.isExtensible(AvatarStyles)&&Object.defineProperty(AvatarStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"AvatarStyles",filename:"src/components/Avatar/Avatar.styles.ts"}});var m=function(e,t){var a=t.isSolid,r=t.color,o=t.hashValue,n=e[a?"solid":"subtle"];if("automatic"===r){var l=Object.keys(n);return n[l[o%l.length]]}return n[r]};"undefined"!==typeof GetAvatarStyles&&GetAvatarStyles&&GetAvatarStyles===Object(GetAvatarStyles)&&Object.isExtensible(GetAvatarStyles)&&Object.defineProperty(GetAvatarStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetAvatarStyles",filename:"src/components/Avatar/Avatar.styles.ts"}});var u=function(e,t){var a,r=e.name,o=e.color,n=e.hashValue,l=e.isSolid,i=e.size,s=void 0===i?24:i,u=e.sizeLimitOneCharacter,b=void 0===u?20:u,f=t.fills;if("automatic"===o){var d=c(n||r);a=m(t.fills,{color:o,hashValue:d,isSolid:l})}else a=m(f,{color:o,isSolid:l,hashValue:0});var p=function(e,t){return e<=t?Math.ceil(e/2.2):Math.ceil(e/2.6)}(s,b);return{containerStyle:{alignItems:"center",backgroundColor:a.backgroundColor,borderRadius:9999,display:"flex",height:s,justifyContent:"center",overflow:"hidden",position:"relative",width:s},textStyle:{color:a.color,fontSize:p,lineHeight:p},imageStyle:{height:"100%",width:"100%"}}};u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getAvatarStyles",filename:"src/components/Avatar/Avatar.styles.ts"}}),a.d(t,"a",function(){return d});var b="/home/travis/build/WeTrustPlatform/paramount/src/components/Avatar/Avatar.tsx";"undefined"!==typeof GetInitialsType&&GetInitialsType&&GetInitialsType===Object(GetInitialsType)&&Object.isExtensible(GetInitialsType)&&Object.defineProperty(GetInitialsType,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetInitialsType",filename:"src/components/Avatar/Avatar.tsx"}});var f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"?";return e?e.replace(/\s+/," ").split(" ").slice(0,2).map(function(e){return e&&e[0].toUpperCase()}).join(""):t};"undefined"!==typeof AvatarProps&&AvatarProps&&AvatarProps===Object(AvatarProps)&&Object.isExtensible(AvatarProps)&&Object.defineProperty(AvatarProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"AvatarProps",filename:"src/components/Avatar/Avatar.tsx"}});var d=function(e){var t=e.source,a=e.size,c=void 0===a?48:a,m=e.name,d=e.isSolid,p=void 0!==d&&d,y=e.hashValue,g=e.getInitials,h=void 0===g?f:g,x=e.color,j=void 0===x?"automatic":x,O=e.forceShowInitials,v=void 0!==O&&O,_=e.sizeLimitOneCharacter,T=void 0===_?20:_,S=e.getStyles,P=e.testID,C=Object(l.a)(),k=!t||!1,F=h(m);c<=T&&(F=F.substring(0,1));var A=Object(i.a)(u,S,C.components.getAvatarStyles)({color:j,hashValue:y,isSolid:p,name:m,size:c,sizeLimitOneCharacter:T},C),E=A.containerStyle,z=A.textStyle,w=A.imageStyle;return r.createElement(n.a,{style:E,testID:P,__source:{fileName:b,lineNumber:127}},(k||v)&&r.createElement(s.a,{getStyles:function(){return{textStyle:z}},__source:{fileName:b,lineNumber:129}},F),!k&&!!t&&r.createElement(o.a,{source:t,style:w,__source:{fileName:b,lineNumber:138}}))};"undefined"!==typeof d&&d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Avatar",filename:"src/components/Avatar/Avatar.tsx"}})},"./src/components/Typography/Text.styles.ts":function(e,t,a){"use strict";a.d(t,"a",function(){return o}),a.d(t,"b",function(){return n}),a.d(t,"c",function(){return l}),a.d(t,"d",function(){return s});var r=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");"undefined"!==typeof TextStylesProps&&TextStylesProps&&TextStylesProps===Object(TextStylesProps)&&Object.isExtensible(TextStylesProps)&&Object.defineProperty(TextStylesProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextStylesProps",filename:"src/components/Typography/Text.styles.ts"}}),"undefined"!==typeof TextStyles&&TextStyles&&TextStyles===Object(TextStyles)&&Object.isExtensible(TextStyles)&&Object.defineProperty(TextStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextStyles",filename:"src/components/Typography/Text.styles.ts"}}),"undefined"!==typeof GetTextStyles&&GetTextStyles&&GetTextStyles===Object(GetTextStyles)&&Object.isExtensible(GetTextStyles)&&Object.defineProperty(GetTextStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetTextStyles",filename:"src/components/Typography/Text.styles.ts"}});var o=function(e){return function(t){return e[t]}};"undefined"!==typeof o&&o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getFontFamily",filename:"src/components/Typography/Text.styles.ts"}});var n=function(e){return function(t){if(t)return e[t]||t}};"undefined"!==typeof n&&n&&n===Object(n)&&Object.isExtensible(n)&&Object.defineProperty(n,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getFontWeight",filename:"src/components/Typography/Text.styles.ts"}});var l=function(e){return function(t){return e[t]||t}};"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTextColor",filename:"src/components/Typography/Text.styles.ts"}});var i=function(e){return function(t){return e[t]||{fontSize:t}}};i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTextSize",filename:"src/components/Typography/Text.styles.ts"}});var s=function(e,t){var a=e.size,s=e.color,c=e.fontFamily,m=e.isInline,u=e.isItalic,b=e.align,f=e.transform,d=e.weight,p=i(t.textSizes)(a);return{textStyle:Object(r.a)({},p,{color:l(t.colors.text)(s),fontFamily:o(t.fontFamilies)(c),fontWeight:n(t.fontWeights)(d)||p.fontWeight,textAlign:b},m?{alignSelf:"flex-start",flexDirection:"row"}:{},u&&{fontStyle:"italic"},f&&{textTransform:f})}};"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTextStyles",filename:"src/components/Typography/Text.styles.ts"}})},"./src/components/Typography/Text.tsx":function(e,t,a){"use strict";a.d(t,"a",function(){return m});var r=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),o=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),n=a("./node_modules/react/index.js"),l=a("./node_modules/react-native-web/dist/exports/Text/index.js"),i=a("./src/theme/Theme.tsx"),s=a("./src/utils/mergeStyles.ts"),c=a("./src/components/Typography/Text.styles.ts");"undefined"!==typeof TextStyleProps&&TextStyleProps&&TextStyleProps===Object(TextStyleProps)&&Object.isExtensible(TextStyleProps)&&Object.defineProperty(TextStyleProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextStyleProps",filename:"src/components/Typography/Text.tsx"}}),"undefined"!==typeof TextProps&&TextProps&&TextProps===Object(TextProps)&&Object.isExtensible(TextProps)&&Object.defineProperty(TextProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextProps",filename:"src/components/Typography/Text.tsx"}});var m=function(e){var t=e.children,a=e.color,m=void 0===a?"default":a,u=e.fontFamily,b=void 0===u?"text":u,f=e.size,d=void 0===f?"medium":f,p=e.align,y=void 0===p?"left":p,g=e.weight,h=e.isInline,x=void 0!==h&&h,j=e.getStyles,O=e.isItalic,v=void 0!==O&&O,_=e.transform,T=Object(o.a)(e,["children","color","fontFamily","size","align","weight","isInline","getStyles","isItalic","transform"]),S=Object(i.a)(),P=Object(s.a)(c.d,j,S.components.getTextStyles)({align:y,color:m,fontFamily:b,isInline:x,isItalic:v,size:d,transform:_,weight:g},S).textStyle;return n.createElement(l.a,Object(r.a)({style:P},T,{__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Typography/Text.tsx",lineNumber:64}}),t)};"undefined"!==typeof m&&m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Text",filename:"src/components/Typography/Text.tsx"}})},"./src/theme/Theme.tsx":function(e,t,a){"use strict";var r=a("./node_modules/deepmerge/dist/umd.js"),o=a.n(r),n=a("./node_modules/react/index.js"),l=a.n(n),i=a("./node_modules/react-native-web/dist/exports/Platform/index.js");"undefined"!==typeof ColorPalette&&ColorPalette&&ColorPalette===Object(ColorPalette)&&Object.isExtensible(ColorPalette)&&Object.defineProperty(ColorPalette,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ColorPalette",filename:"src/theme/palette.ts"}}),"undefined"!==typeof Palette&&Palette&&Palette===Object(Palette)&&Object.isExtensible(Palette)&&Object.defineProperty(Palette,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Palette",filename:"src/theme/palette.ts"}});var s={lightest:"#fafafa",light:"#eeeeee",base:"#cccccc",dark:"#a7a7a7",darkest:"#7e7e7e"},c={lightest:"#e5f5ff",light:"#ceecff",base:"#1ca5F7",dark:"#59a9de",darkest:"#33495f"},m={lightest:"#f9e1de",light:"#f9aa9f",base:"#d26557",dark:"#bb584e",darkest:"#b74033"},u={lightest:"#fce8cf",light:"#f2c58a",base:"#f3b058",dark:"#ec8e30",darkest:"#b26500"},b={lightest:"#fef8e7",light:"#fbe6a2",base:"#f7d154",dark:"#d1b047",darkest:"#7e6514"},f={lightest:"#eafff3",light:"#c2edd5",base:"#54bf84",dark:"#42a46e",darkest:"#16a054"},d={lightest:"#d6fcf7",light:"#c0f9f2",base:"#67c6bb",dark:"#3fa296",darkest:"#1b877a"},p={lightest:"#f8f7fc",light:"#eae7f8",base:"#735dd0",dark:"#37248f",darkest:"#37248f"};"undefined"!==typeof purple&&purple&&purple===Object(purple)&&Object.isExtensible(purple)&&Object.defineProperty(purple,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"purple",filename:"src/theme/palette.ts"}}),"undefined"!==typeof teal&&teal&&teal===Object(teal)&&Object.isExtensible(teal)&&Object.defineProperty(teal,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"teal",filename:"src/theme/palette.ts"}}),"undefined"!==typeof green&&green&&green===Object(green)&&Object.isExtensible(green)&&Object.defineProperty(green,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"green",filename:"src/theme/palette.ts"}}),"undefined"!==typeof yellow&&yellow&&yellow===Object(yellow)&&Object.isExtensible(yellow)&&Object.defineProperty(yellow,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"yellow",filename:"src/theme/palette.ts"}}),"undefined"!==typeof orange&&orange&&orange===Object(orange)&&Object.isExtensible(orange)&&Object.defineProperty(orange,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"orange",filename:"src/theme/palette.ts"}}),"undefined"!==typeof red&&red&&red===Object(red)&&Object.isExtensible(red)&&Object.defineProperty(red,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"red",filename:"src/theme/palette.ts"}}),"undefined"!==typeof blue&&blue&&blue===Object(blue)&&Object.isExtensible(blue)&&Object.defineProperty(blue,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"blue",filename:"src/theme/palette.ts"}}),"undefined"!==typeof neutral&&neutral&&neutral===Object(neutral)&&Object.isExtensible(neutral)&&Object.defineProperty(neutral,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"neutral",filename:"src/theme/palette.ts"}});var y={background:{base:"white",content:"white",overlay:"rgba(0,0,0,0.3)",greyLight:s.lightest,greyDefault:"#F5F6F7",greyDark:s.light,primaryLight:d.lightest,primaryDefault:d.base,primaryDark:d.dark,secondaryLight:u.lightest,secondaryDefault:u.base,secondaryDark:u.dark,dangerLight:m.lightest,dangerDefault:m.base,dangerDark:m.dark,infoLight:c.lightest,infoDefault:c.base,infoDark:c.dark,successLight:f.lightest,successDefault:f.base,successDark:f.dark,warningLight:u.lightest,warningDefault:u.base,warningDark:u.dark},border:{default:s.light,primary:d.darkest,secondary:u.darkest,danger:m.darkest,info:c.darkest,success:f.darkest,warning:u.darkest},button:{disabled:s.light,disabledText:s.darkest,default:s.lightest,defaultText:s.darkest,primary:d.base,primaryText:"white",secondary:u.base,secondaryText:"white",danger:m.base,dangerText:"white"},text:{link:s.darkest,default:s.darkest,muted:s.dark,white:"white",selected:"white",primary:d.darkest,secondary:u.darkest,danger:m.darkest,info:c.darkest,success:f.darkest,warning:u.darkest}},g=[{elevation:0,shadowColor:s.dark,shadowOffset:{width:0,height:0},shadowOpacity:0,shadowRadius:0},{elevation:1,shadowColor:s.dark,shadowOffset:{width:1,height:1},shadowOpacity:.15,shadowRadius:8},{elevation:2,shadowColor:s.dark,shadowOffset:{width:2,height:2},shadowOpacity:.2,shadowRadius:10},{elevation:3,shadowColor:s.dark,shadowOffset:{width:3,height:3},shadowOpacity:.25,shadowRadius:12},{elevation:4,shadowColor:s.dark,shadowOffset:{width:4,height:4},shadowOpacity:.3,shadowRadius:8},{elevation:5,shadowColor:s.dark,shadowOffset:{width:5,height:5},shadowOpacity:.35,shadowRadius:8}],h={colors:y,fills:{solid:{neutral:{backgroundColor:s.base,color:"white"},blue:{backgroundColor:c.base,color:"white"},red:{backgroundColor:m.base,color:"white"},orange:{backgroundColor:u.base,color:"white"},yellow:{backgroundColor:b.base,color:b.darkest},green:{backgroundColor:f.base,color:"white"},teal:{backgroundColor:d.base,color:"white"},purple:{backgroundColor:p.base,color:"white"}},subtle:{neutral:{backgroundColor:s.light,color:s.darkest},blue:{backgroundColor:c.light,color:c.darkest},red:{backgroundColor:m.light,color:m.darkest},orange:{backgroundColor:u.light,color:u.darkest},yellow:{backgroundColor:b.light,color:b.darkest},green:{backgroundColor:f.light,color:f.darkest},teal:{backgroundColor:d.light,color:d.darkest},purple:{backgroundColor:p.light,color:p.darkest}}},fontFamilies:"web"===i.a.OS?{heading:'"SF UI Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',mono:'"SF Mono", "Monaco", "Inconsolata", "Fira Mono", "Droid Sans Mono", "Source Code Pro", monospace',text:'"SF UI Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'}:{heading:void 0,mono:void 0,text:void 0},fontWeights:{bold:"bold",light:"300",normal:"normal"},headingSizes:{xxxlarge:{fontSize:35,letterSpacing:-.2,lineHeight:40},xxlarge:{fontSize:29,letterSpacing:-.2,lineHeight:32},xlarge:{fontSize:24,letterSpacing:-.07,lineHeight:28},large:{fontSize:20,letterSpacing:-.07,lineHeight:24},medium:{fontSize:16,letterSpacing:-.05,lineHeight:20},small:{fontSize:14,letterSpacing:-.05,lineHeight:20}},paragraphSizes:{small:{fontSize:14,lineHeight:24},medium:{fontSize:16,lineHeight:21},large:{fontSize:18,lineHeight:18}},textSizes:{large:{fontSize:20},medium:{fontSize:16},small:{fontSize:14}},elevations:g,controlBorderRadius:{small:4,medium:4,large:4},controlHeights:{small:40,medium:48,large:56},controlPaddings:{small:8,medium:16,large:24},components:{}};"undefined"!==typeof h&&h&&h===Object(h)&&Object.isExtensible(h)&&Object.defineProperty(h,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"defaultTheme",filename:"src/theme/defaultTheme.ts"}}),a.d(t,"a",function(){return v});"undefined"!==typeof TextSizes&&TextSizes&&TextSizes===Object(TextSizes)&&Object.isExtensible(TextSizes)&&Object.defineProperty(TextSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof TextSize&&TextSize&&TextSize===Object(TextSize)&&Object.isExtensible(TextSize)&&Object.defineProperty(TextSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof HeadingSizes&&HeadingSizes&&HeadingSizes===Object(HeadingSizes)&&Object.isExtensible(HeadingSizes)&&Object.defineProperty(HeadingSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HeadingSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof HeadingSize&&HeadingSize&&HeadingSize===Object(HeadingSize)&&Object.isExtensible(HeadingSize)&&Object.defineProperty(HeadingSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HeadingSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ParagraphSizes&&ParagraphSizes&&ParagraphSizes===Object(ParagraphSizes)&&Object.isExtensible(ParagraphSizes)&&Object.defineProperty(ParagraphSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ParagraphSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ParagraphSize&&ParagraphSize&&ParagraphSize===Object(ParagraphSize)&&Object.isExtensible(ParagraphSize)&&Object.defineProperty(ParagraphSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ParagraphSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontFamilies&&FontFamilies&&FontFamilies===Object(FontFamilies)&&Object.isExtensible(FontFamilies)&&Object.defineProperty(FontFamilies,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontFamilies",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontFamily&&FontFamily&&FontFamily===Object(FontFamily)&&Object.isExtensible(FontFamily)&&Object.defineProperty(FontFamily,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontFamily",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof RNFontWeight&&RNFontWeight&&RNFontWeight===Object(RNFontWeight)&&Object.isExtensible(RNFontWeight)&&Object.defineProperty(RNFontWeight,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"RNFontWeight",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontWeights&&FontWeights&&FontWeights===Object(FontWeights)&&Object.isExtensible(FontWeights)&&Object.defineProperty(FontWeights,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontWeights",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontWeight&&FontWeight&&FontWeight===Object(FontWeight)&&Object.isExtensible(FontWeight)&&Object.defineProperty(FontWeight,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontWeight",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof TextColors&&TextColors&&TextColors===Object(TextColors)&&Object.isExtensible(TextColors)&&Object.defineProperty(TextColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof TextColor&&TextColor&&TextColor===Object(TextColor)&&Object.isExtensible(TextColor)&&Object.defineProperty(TextColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ButtonColors&&ButtonColors&&ButtonColors===Object(ButtonColors)&&Object.isExtensible(ButtonColors)&&Object.defineProperty(ButtonColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ButtonColorsWithText&&ButtonColorsWithText&&ButtonColorsWithText===Object(ButtonColorsWithText)&&Object.isExtensible(ButtonColorsWithText)&&Object.defineProperty(ButtonColorsWithText,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColorsWithText",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ButtonColor&&ButtonColor&&ButtonColor===Object(ButtonColor)&&Object.isExtensible(ButtonColor)&&Object.defineProperty(ButtonColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BorderColors&&BorderColors&&BorderColors===Object(BorderColors)&&Object.isExtensible(BorderColors)&&Object.defineProperty(BorderColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BorderColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BorderColor&&BorderColor&&BorderColor===Object(BorderColor)&&Object.isExtensible(BorderColor)&&Object.defineProperty(BorderColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BorderColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BackgroundColors&&BackgroundColors&&BackgroundColors===Object(BackgroundColors)&&Object.isExtensible(BackgroundColors)&&Object.defineProperty(BackgroundColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BackgroundColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BackgroundColor&&BackgroundColor&&BackgroundColor===Object(BackgroundColor)&&Object.isExtensible(BackgroundColor)&&Object.defineProperty(BackgroundColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BackgroundColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Colors&&Colors&&Colors===Object(Colors)&&Object.isExtensible(Colors)&&Object.defineProperty(Colors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Colors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Elevations&&Elevations&&Elevations===Object(Elevations)&&Object.isExtensible(Elevations)&&Object.defineProperty(Elevations,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Elevations",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Elevation&&Elevation&&Elevation===Object(Elevation)&&Object.isExtensible(Elevation)&&Object.defineProperty(Elevation,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Elevation",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ControlSizes&&ControlSizes&&ControlSizes===Object(ControlSizes)&&Object.isExtensible(ControlSizes)&&Object.defineProperty(ControlSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ControlSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ControlSize&&ControlSize&&ControlSize===Object(ControlSize)&&Object.isExtensible(ControlSize)&&Object.defineProperty(ControlSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ControlSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FillColorProps&&FillColorProps&&FillColorProps===Object(FillColorProps)&&Object.isExtensible(FillColorProps)&&Object.defineProperty(FillColorProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FillColorProps",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FillColors&&FillColors&&FillColors===Object(FillColors)&&Object.isExtensible(FillColors)&&Object.defineProperty(FillColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FillColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FillColor&&FillColor&&FillColor===Object(FillColor)&&Object.isExtensible(FillColor)&&Object.defineProperty(FillColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FillColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Fills&&Fills&&Fills===Object(Fills)&&Object.isExtensible(Fills)&&Object.defineProperty(Fills,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Fills",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Theme&&Theme&&Theme===Object(Theme)&&Object.isExtensible(Theme)&&Object.defineProperty(Theme,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Theme",filename:"src/theme/Theme.tsx"}});var x=l.a.createContext(h);"undefined"!==typeof x&&x&&x===Object(x)&&Object.isExtensible(x)&&Object.defineProperty(x,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ThemeContext",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ThemeProviderProps&&ThemeProviderProps&&ThemeProviderProps===Object(ThemeProviderProps)&&Object.isExtensible(ThemeProviderProps)&&Object.defineProperty(ThemeProviderProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ThemeProviderProps",filename:"src/theme/Theme.tsx"}});var j=function(e){return e?o()(h,e):h};j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"createTheme",filename:"src/theme/Theme.tsx"}});var O=function(e){var t=e.children,a=e.value,r=j(void 0===a?h:a);return l.a.createElement(x.Provider,{value:r,__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/theme/Theme.tsx",lineNumber:296}},t)};O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ThemeProvider",filename:"src/theme/Theme.tsx"}});var v=function(){return l.a.useContext(x)};"undefined"!==typeof v&&v&&v===Object(v)&&Object.isExtensible(v)&&Object.defineProperty(v,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useTheme",filename:"src/theme/Theme.tsx"}})},"./src/utils/mergeStyles.ts":function(e,t,a){"use strict";a.d(t,"a",function(){return n});var r=a("./node_modules/deepmerge/dist/umd.js"),o=a.n(r);"undefined"!==typeof GetStyles&&GetStyles&&GetStyles===Object(GetStyles)&&Object.isExtensible(GetStyles)&&Object.defineProperty(GetStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetStyles",filename:"src/utils/mergeStyles.ts"}}),"undefined"!==typeof ArgumentTypes&&ArgumentTypes&&ArgumentTypes===Object(ArgumentTypes)&&Object.isExtensible(ArgumentTypes)&&Object.defineProperty(ArgumentTypes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ArgumentTypes",filename:"src/utils/mergeStyles.ts"}}),"undefined"!==typeof ReplaceReturnType&&ReplaceReturnType&&ReplaceReturnType===Object(ReplaceReturnType)&&Object.isExtensible(ReplaceReturnType)&&Object.defineProperty(ReplaceReturnType,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ReplaceReturnType",filename:"src/utils/mergeStyles.ts"}});var n=function(e,t,a){return function(r,n){var l=[e(r,n)];return a&&l.push(a(r,n)),t&&l.push(t(r,n)),o.a.all(l)}};"undefined"!==typeof n&&n&&n===Object(n)&&Object.isExtensible(n)&&Object.defineProperty(n,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"mergeStyles",filename:"src/utils/mergeStyles.ts"}})}}]);
//# sourceMappingURL=26.b8f475e7b30fb9f052b5.js.map