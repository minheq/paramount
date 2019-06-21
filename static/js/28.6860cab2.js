(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"./src/components/Helpers/CounterState.tsx":function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),r=n("./node_modules/react/index.js"),i=n.n(r);"undefined"!==typeof CounterStateRenderProps&&CounterStateRenderProps&&CounterStateRenderProps===Object(CounterStateRenderProps)&&Object.isExtensible(CounterStateRenderProps)&&Object.defineProperty(CounterStateRenderProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CounterStateRenderProps",filename:"src/components/Helpers/CounterState.tsx"}}),"undefined"!==typeof CounterStateProps&&CounterStateProps&&CounterStateProps===Object(CounterStateProps)&&Object.isExtensible(CounterStateProps)&&Object.defineProperty(CounterStateProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CounterStateProps",filename:"src/components/Helpers/CounterState.tsx"}});var o=function(e){var t=e.children,n=e.initial,r=void 0===n?0:n,o=i.a.useState(r),l=Object(a.a)(o,2),s=l[0],c=l[1],b=i.a.useCallback(function(e){c(s+e)},[s]),u=i.a.useCallback(function(e){c(s-e)},[s]),m=i.a.useCallback(function(){c(s+1)},[s]),f=i.a.useCallback(function(){c(s-1)},[s]),d=i.a.useCallback(function(e){c(e)},[s]);return t({count:s,decrement:f,decrementBy:u,increment:m,incrementBy:b,set:d})};"undefined"!==typeof o&&o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CounterState",filename:"src/components/Helpers/CounterState.tsx"}})},"./src/components/Rating/Rating.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return m});var a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),i=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),o=n("./node_modules/docz/dist/index.esm.js"),l=n("./src/components/Helpers/CounterState.tsx"),s=n("./src/components/Rating/Rating.tsx"),c="/home/travis/build/WeTrustPlatform/paramount/src/components/Rating/Rating.mdx",b={},u="wrapper";function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)(u,Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout",__source:{fileName:c,lineNumber:21}}),Object(i.b)("h1",Object(r.a)({id:"rating"},{__source:{fileName:c,lineNumber:24}}),"Rating"),Object(i.b)("h2",Object(r.a)({id:"usage"},{__source:{fileName:c,lineNumber:27}}),"Usage"),Object(i.b)(o.c,{__position:0,__code:'<CounterState initial={3}>\n  {({ count: rating, set }) => (\n    <Rating value={rating} size="small" onChange={value => set(value)} />\n  )}\n</CounterState>',__scope:{props:this?this.props:n,Playground:o.c,Props:o.d,CounterState:l.a,Rating:s.a},mdxType:"Playground",__source:{fileName:c,lineNumber:30}},Object(i.b)(l.a,{initial:3,mdxType:"CounterState",__source:{fileName:c,lineNumber:37}},function(e){var t=e.count,n=e.set;return Object(i.b)(s.a,{value:t,size:"small",onChange:function(e){return n(e)},mdxType:"Rating",__source:{fileName:c,lineNumber:41}})})),Object(i.b)("h2",Object(r.a)({id:"props"},{__source:{fileName:c,lineNumber:44}}),"Props"),Object(i.b)(o.d,{of:s.a,mdxType:"Props",__source:{fileName:c,lineNumber:47}}),Object(i.b)("h2",Object(r.a)({id:"customization"},{__source:{fileName:c,lineNumber:48}}),"Customization"),Object(i.b)("p",{__source:{fileName:c,lineNumber:51}},"Using ",Object(i.b)("inlineCode",{parentName:"p",__source:{fileName:c,lineNumber:51}},"getStyles")," prop"),Object(i.b)("pre",{__source:{fileName:c,lineNumber:52}},Object(i.b)("code",Object(r.a)({parentName:"pre"},{},{__source:{fileName:c,lineNumber:52}}),"RatingStyles {\n  touchableStyle: ViewStyle;\n  containerStyle: ViewStyle;\n  starColor: string;\n  starSize: number;\n}\n\ngetStyles={(RatingProps, Theme) => RatingStyles}\n")),Object(i.b)("p",{__source:{fileName:c,lineNumber:61}},"Markup"),Object(i.b)("pre",{__source:{fileName:c,lineNumber:62}},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"},{__source:{fileName:c,lineNumber:62}}),"<View containerStyle>\n  <TouchableOpacity touchableStyle>\n    <Star color={starColor} size={starSize} />\n  </TouchableOpacity>\n  // ...repeat\n</View>\n")))}m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Rating/Rating.mdx"}}),m.isMDXComponent=!0},"./src/components/Rating/Rating.tsx":function(e,t,n){"use strict";var a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),r=n("./node_modules/react/index.js"),i=n("./node_modules/react-native-web/dist/exports/TouchableOpacity/index.js"),o=n("./node_modules/react-native-web/dist/exports/View/index.js"),l=n("./src/theme/Theme.tsx"),s=n("./src/utils/mergeStyles.ts"),c=n("./src/components/Typography/Text.styles.ts");"undefined"!==typeof GetRatingStyles&&GetRatingStyles&&GetRatingStyles===Object(GetRatingStyles)&&Object.isExtensible(GetRatingStyles)&&Object.defineProperty(GetRatingStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetRatingStyles",filename:"src/components/Rating/Rating.styles.ts"}}),"undefined"!==typeof RatingStyles&&RatingStyles&&RatingStyles===Object(RatingStyles)&&Object.isExtensible(RatingStyles)&&Object.defineProperty(RatingStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"RatingStyles",filename:"src/components/Rating/Rating.styles.ts"}});var b=function(e,t){var n=e.size,a=void 0===n?"medium":n,r=e.color,i=void 0===r?"primary":r,o=t.controlHeights[a];return{containerStyle:{flexDirection:"row"},touchableStyle:{paddingRight:t.controlPaddings[a]},starColor:Object(c.b)(t.colors.text)(i),starSize:o}};b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getRatingStyles",filename:"src/components/Rating/Rating.styles.ts"}});var u=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),m=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),f=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),d=n("./node_modules/react-native-web/dist/exports/createElement/index.js"),p=n("./node_modules/react-native-web/dist/exports/StyleSheet/index.js"),g=function(e){var t=e.translate,n=e.scale,a=e.rotation,r=e.skewX,i=e.skewY,o=e.originX,l=e.originY,s=e.fontFamily,c=e.fontSize,b=e.fontWeight,d=e.fontStyle,g=e.style,j=Object(u.a)(e,["translate","scale","rotation","skewX","skewY","originX","originY","fontFamily","fontSize","fontWeight","fontStyle","style"]),h=[];null==o&&null==l||h.push("translate(".concat(o||0,", ").concat(l||0,")")),null!=t&&h.push("translate(".concat(t,")")),null!=n&&h.push("scale(".concat(n,")")),null!=a&&h.push("rotate(".concat(a,")")),null!=r&&h.push("skewX(".concat(r,")")),null!=i&&h.push("skewY(".concat(i,")")),null==o&&null==l||h.push("translate(".concat(-o||0,", ").concat(-l||0,")")),h.length&&(j.transform=h.join(" "));var O,y,x={};return null!=s&&(x.fontFamily=s),null!=c&&(x.fontSize=c),null!=b&&(x.fontWeight=b),null!=d&&(x.fontStyle=d),j.style=(y=x,(O=g)?p.a?[O,y]:O[F.iterator]?Object.assign.apply(Object,[{}].concat(Object(f.a)(O),[y])):Object(m.a)({},O,y):y),j};g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"prepare",filename:"src/components/Svg/Svg.web.tsx"}});var j=function(e){return Object(d.a)("circle",g(e))};j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Circle",filename:"src/components/Svg/Svg.web.tsx"}});var h=function(e){return Object(d.a)("clipPath",g(e))};h&&h===Object(h)&&Object.isExtensible(h)&&Object.defineProperty(h,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ClipPath",filename:"src/components/Svg/Svg.web.tsx"}});var O=function(e){return Object(d.a)("defs",g(e))};O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Defs",filename:"src/components/Svg/Svg.web.tsx"}});var y=function(e){return Object(d.a)("ellipse",g(e))};y&&y===Object(y)&&Object.isExtensible(y)&&Object.defineProperty(y,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Ellipse",filename:"src/components/Svg/Svg.web.tsx"}});var x=function(e){var t=e.x,n=e.y,a=Object(u.a)(e,["x","y"]);return!t&&!n||a.translate||(a.translate="".concat(t||0,", ").concat(n||0)),Object(d.a)("g",g(a))};x&&x===Object(x)&&Object.isExtensible(x)&&Object.defineProperty(x,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"G",filename:"src/components/Svg/Svg.web.tsx"}});var S=function(e){return Object(d.a)("image",g(e))};S&&S===Object(S)&&Object.isExtensible(S)&&Object.defineProperty(S,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Image",filename:"src/components/Svg/Svg.web.tsx"}});var v=function(e){return Object(d.a)("line",g(e))};v&&v===Object(v)&&Object.isExtensible(v)&&Object.defineProperty(v,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Line",filename:"src/components/Svg/Svg.web.tsx"}});var _=function(e){return Object(d.a)("linearGradient",g(e))};_&&_===Object(_)&&Object.isExtensible(_)&&Object.defineProperty(_,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"LinearGradient",filename:"src/components/Svg/Svg.web.tsx"}});var C=function(e){return Object(d.a)("path",g(e))};C&&C===Object(C)&&Object.isExtensible(C)&&Object.defineProperty(C,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Path",filename:"src/components/Svg/Svg.web.tsx"}});var P=function(e){return Object(d.a)("polygon",g(e))};P&&P===Object(P)&&Object.isExtensible(P)&&Object.defineProperty(P,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Polygon",filename:"src/components/Svg/Svg.web.tsx"}});var T=function(e){return Object(d.a)("polyline",g(e))};T&&T===Object(T)&&Object.isExtensible(T)&&Object.defineProperty(T,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Polyline",filename:"src/components/Svg/Svg.web.tsx"}});var E=function(e){return Object(d.a)("radialGradient",g(e))};E&&E===Object(E)&&Object.isExtensible(E)&&Object.defineProperty(E,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"RadialGradient",filename:"src/components/Svg/Svg.web.tsx"}});var k=function(e){return Object(d.a)("rect",g(e))};k&&k===Object(k)&&Object.isExtensible(k)&&Object.defineProperty(k,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Rect",filename:"src/components/Svg/Svg.web.tsx"}});var R=function(e){return Object(d.a)("stop",g(e))};R&&R===Object(R)&&Object.isExtensible(R)&&Object.defineProperty(R,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Stop",filename:"src/components/Svg/Svg.web.tsx"}});var w=function(e){return Object(d.a)("svg",g(e))};w&&w===Object(w)&&Object.isExtensible(w)&&Object.defineProperty(w,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Svg",filename:"src/components/Svg/Svg.web.tsx"}});var F=function(e){return Object(d.a)("symbol",g(e))};"undefined"!==typeof F&&F&&F===Object(F)&&Object.isExtensible(F)&&Object.defineProperty(F,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Symbol",filename:"src/components/Svg/Svg.web.tsx"}});var z=function(e){return Object(d.a)("text",g(e))};z&&z===Object(z)&&Object.isExtensible(z)&&Object.defineProperty(z,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Text",filename:"src/components/Svg/Svg.web.tsx"}});var B=function(e){return Object(d.a)("tspan",g(e))};B&&B===Object(B)&&Object.isExtensible(B)&&Object.defineProperty(B,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TSpan",filename:"src/components/Svg/Svg.web.tsx"}});var N=function(e){return Object(d.a)("textPath",g(e))};N&&N===Object(N)&&Object.isExtensible(N)&&Object.defineProperty(N,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextPath",filename:"src/components/Svg/Svg.web.tsx"}});var W=function(e){return Object(d.a)("use",g(e))};W&&W===Object(W)&&Object.isExtensible(W)&&Object.defineProperty(W,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Use",filename:"src/components/Svg/Svg.web.tsx"}});var H=function(e){return Object(d.a)("mask",g(e))};H&&H===Object(H)&&Object.isExtensible(H)&&Object.defineProperty(H,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Mask",filename:"src/components/Svg/Svg.web.tsx"}});var G=function(e){return Object(d.a)("pattern",g(e))};G&&G===Object(G)&&Object.isExtensible(G)&&Object.defineProperty(G,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Pattern",filename:"src/components/Svg/Svg.web.tsx"}});w&&w===Object(w)&&Object.isExtensible(w)&&Object.defineProperty(w,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Svg",filename:"src/components/Svg/Svg.web.tsx"}});var D="/home/travis/build/WeTrustPlatform/paramount/src/components/Rating/Star.tsx";"undefined"!==typeof StarProps&&StarProps&&StarProps===Object(StarProps)&&Object.isExtensible(StarProps)&&Object.defineProperty(StarProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"StarProps",filename:"src/components/Rating/Star.tsx"}});var L=function(e){var t=e.size,n=void 0===t?24:t,a=e.color,i=e.isFilled,o=void 0!==i&&i,s=Object(l.a)(),c=String(n),b=a||s.fills.subtle.yellow.backgroundColor;return r.createElement(w,{width:c,height:c,viewBox:"0 0 24 24",fill:o?b:"none",stroke:b,strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",__source:{fileName:D,lineNumber:21}},r.createElement(P,{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",__source:{fileName:D,lineNumber:31}}))};L&&L===Object(L)&&Object.isExtensible(L)&&Object.defineProperty(L,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Star",filename:"src/components/Rating/Star.tsx"}}),n.d(t,"a",function(){return I});var A="/home/travis/build/WeTrustPlatform/paramount/src/components/Rating/Rating.tsx";"undefined"!==typeof RatingProps&&RatingProps&&RatingProps===Object(RatingProps)&&Object.isExtensible(RatingProps)&&Object.defineProperty(RatingProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"RatingProps",filename:"src/components/Rating/Rating.tsx"}});var I=function(e){var t=e.value,n=void 0===t?0:t,c=e.maxRating,u=void 0===c?5:c,m=e.getStyles,f=e.onChange,d=void 0===f?function(){}:f,p=Object(l.a)(),g=Object(s.a)(b,m,p.components.getRatingStyles)(e,p),j=g.containerStyle,h=g.starColor,O=g.starSize,y=g.touchableStyle;return r.createElement(o.a,{style:j,__source:{fileName:A,lineNumber:63}},new Array(u).fill(0).map(function(e,t){var o=t+1,l=o<=n,s=o===u;return r.createElement(i.a,{key:o,style:Object(a.a)({},y,s?{paddingRight:0}:{}),onPress:function(){return d(o)},__source:{fileName:A,lineNumber:70}},r.createElement(L,{color:h,size:O,isFilled:l,__source:{fileName:A,lineNumber:78}}))}))};"undefined"!==typeof I&&I&&I===Object(I)&&Object.isExtensible(I)&&Object.defineProperty(I,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Rating",filename:"src/components/Rating/Rating.tsx"}})},"./src/components/Typography/Text.styles.ts":function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return i}),n.d(t,"c",function(){return l});var a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");"undefined"!==typeof TextStyles&&TextStyles&&TextStyles===Object(TextStyles)&&Object.isExtensible(TextStyles)&&Object.defineProperty(TextStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextStyles",filename:"src/components/Typography/Text.styles.ts"}}),"undefined"!==typeof GetTextStyles&&GetTextStyles&&GetTextStyles===Object(GetTextStyles)&&Object.isExtensible(GetTextStyles)&&Object.defineProperty(GetTextStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetTextStyles",filename:"src/components/Typography/Text.styles.ts"}});var r=function(e){return function(t){if(t)return e[t]||t}};"undefined"!==typeof r&&r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getFontWeight",filename:"src/components/Typography/Text.styles.ts"}});var i=function(e){return function(t){return e[t]||t}};"undefined"!==typeof i&&i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTextColor",filename:"src/components/Typography/Text.styles.ts"}});var o=function(e){return function(t){return e[t]||{fontSize:t}}};o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTextSize",filename:"src/components/Typography/Text.styles.ts"}});var l=function(e,t){var n=e.color,l=void 0===n?"default":n,s=e.size,c=void 0===s?"medium":s,b=e.align,u=void 0===b?"left":b,m=e.weight,f=e.isItalic,d=void 0!==f&&f,p=e.transform,g=o(t.textSizes)(c);return{textStyle:Object(a.a)({},g,{color:i(t.colors.text)(l),fontFamily:t.fontFamilies.text,fontWeight:r(t.fontWeights)(m)||g.fontWeight,textAlign:u},d&&{fontStyle:"italic"},p&&{textTransform:p})}};"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTextStyles",filename:"src/components/Typography/Text.styles.ts"}})},"./src/theme/Theme.tsx":function(e,t,n){"use strict";var a=n("./node_modules/deepmerge/dist/umd.js"),r=n.n(a),i=n("./node_modules/react/index.js"),o=n.n(i),l=n("./node_modules/react-native-web/dist/exports/Platform/index.js");"undefined"!==typeof ColorPalette&&ColorPalette&&ColorPalette===Object(ColorPalette)&&Object.isExtensible(ColorPalette)&&Object.defineProperty(ColorPalette,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ColorPalette",filename:"src/theme/palette.ts"}}),"undefined"!==typeof Palette&&Palette&&Palette===Object(Palette)&&Object.isExtensible(Palette)&&Object.defineProperty(Palette,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Palette",filename:"src/theme/palette.ts"}});var s={lightest:"#fafafa",light:"#eeeeee",base:"#cccccc",dark:"#a7a7a7",darkest:"#7e7e7e"},c={lightest:"#e5f5ff",light:"#ceecff",base:"#1ca5F7",dark:"#59a9de",darkest:"#33495f"},b={lightest:"#f9e1de",light:"#f9aa9f",base:"#d26557",dark:"#bb584e",darkest:"#b74033"},u={lightest:"#fce8cf",light:"#f2c58a",base:"#f3b058",dark:"#ec8e30",darkest:"#b26500"},m={lightest:"#fef8e7",light:"#fbe6a2",base:"#f7d154",dark:"#d1b047",darkest:"#7e6514"},f={lightest:"#eafff3",light:"#c2edd5",base:"#54bf84",dark:"#42a46e",darkest:"#16a054"},d={lightest:"#d6fcf7",light:"#c0f9f2",base:"#67c6bb",dark:"#3fa296",darkest:"#1b877a"},p={lightest:"#f8f7fc",light:"#eae7f8",base:"#735dd0",dark:"#37248f",darkest:"#37248f"};"undefined"!==typeof purple&&purple&&purple===Object(purple)&&Object.isExtensible(purple)&&Object.defineProperty(purple,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"purple",filename:"src/theme/palette.ts"}}),"undefined"!==typeof teal&&teal&&teal===Object(teal)&&Object.isExtensible(teal)&&Object.defineProperty(teal,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"teal",filename:"src/theme/palette.ts"}}),"undefined"!==typeof green&&green&&green===Object(green)&&Object.isExtensible(green)&&Object.defineProperty(green,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"green",filename:"src/theme/palette.ts"}}),"undefined"!==typeof yellow&&yellow&&yellow===Object(yellow)&&Object.isExtensible(yellow)&&Object.defineProperty(yellow,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"yellow",filename:"src/theme/palette.ts"}}),"undefined"!==typeof orange&&orange&&orange===Object(orange)&&Object.isExtensible(orange)&&Object.defineProperty(orange,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"orange",filename:"src/theme/palette.ts"}}),"undefined"!==typeof red&&red&&red===Object(red)&&Object.isExtensible(red)&&Object.defineProperty(red,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"red",filename:"src/theme/palette.ts"}}),"undefined"!==typeof blue&&blue&&blue===Object(blue)&&Object.isExtensible(blue)&&Object.defineProperty(blue,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"blue",filename:"src/theme/palette.ts"}}),"undefined"!==typeof neutral&&neutral&&neutral===Object(neutral)&&Object.isExtensible(neutral)&&Object.defineProperty(neutral,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"neutral",filename:"src/theme/palette.ts"}});var g={small:4,medium:4,large:4},j={background:{base:"white",content:"white",overlay:"rgba(0,0,0,0.3)",greyLight:s.lightest,greyDefault:"#F5F6F7",greyDark:s.light,primaryLight:d.lightest,primaryDefault:d.base,primaryDark:d.dark,secondaryLight:u.lightest,secondaryDefault:u.base,secondaryDark:u.dark,dangerLight:b.lightest,dangerDefault:b.base,dangerDark:b.dark,infoLight:c.lightest,infoDefault:c.base,infoDark:c.dark,successLight:f.lightest,successDefault:f.base,successDark:f.dark,warningLight:u.lightest,warningDefault:u.base,warningDark:u.dark},border:{default:s.light,primary:d.darkest,secondary:u.darkest,danger:b.darkest,info:c.darkest,success:f.darkest,warning:u.darkest},button:{disabled:s.light,disabledText:s.darkest,default:s.lightest,defaultText:s.darkest,primary:d.base,primaryText:"white",secondary:u.base,secondaryText:"white",danger:b.base,dangerText:"white"},text:{link:s.darkest,default:s.darkest,muted:s.dark,white:"white",selected:"white",primary:d.darkest,secondary:u.darkest,danger:b.darkest,info:c.darkest,success:f.darkest,warning:u.darkest}},h=[{elevation:0,shadowColor:s.dark,shadowOffset:{width:0,height:0},shadowOpacity:0,shadowRadius:0},{elevation:1,shadowColor:s.dark,shadowOffset:{width:1,height:1},shadowOpacity:.15,shadowRadius:8},{elevation:2,shadowColor:s.dark,shadowOffset:{width:2,height:2},shadowOpacity:.2,shadowRadius:10},{elevation:3,shadowColor:s.dark,shadowOffset:{width:3,height:3},shadowOpacity:.25,shadowRadius:12},{elevation:4,shadowColor:s.dark,shadowOffset:{width:4,height:4},shadowOpacity:.3,shadowRadius:8},{elevation:5,shadowColor:s.dark,shadowOffset:{width:5,height:5},shadowOpacity:.35,shadowRadius:8}],O={colors:j,fills:{solid:{neutral:{backgroundColor:s.base,color:"white"},blue:{backgroundColor:c.base,color:"white"},red:{backgroundColor:b.base,color:"white"},orange:{backgroundColor:u.base,color:"white"},yellow:{backgroundColor:m.base,color:m.darkest},green:{backgroundColor:f.base,color:"white"},teal:{backgroundColor:d.base,color:"white"},purple:{backgroundColor:p.base,color:"white"}},subtle:{neutral:{backgroundColor:s.light,color:s.darkest},blue:{backgroundColor:c.light,color:c.darkest},red:{backgroundColor:b.light,color:b.darkest},orange:{backgroundColor:u.light,color:u.darkest},yellow:{backgroundColor:m.light,color:m.darkest},green:{backgroundColor:f.light,color:f.darkest},teal:{backgroundColor:d.light,color:d.darkest},purple:{backgroundColor:p.light,color:p.darkest}}},fontFamilies:"web"===l.a.OS?{heading:'"SF UI Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',mono:'"SF Mono", "Monaco", "Inconsolata", "Fira Mono", "Droid Sans Mono", "Source Code Pro", monospace',text:'"SF UI Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'}:{heading:"System",mono:"System",text:"System"},fontWeights:{bold:"bold",light:"300",normal:"normal"},headingSizes:{xxxlarge:{fontSize:35,letterSpacing:-.2,lineHeight:40},xxlarge:{fontSize:29,letterSpacing:-.2,lineHeight:32},xlarge:{fontSize:24,letterSpacing:-.07,lineHeight:28},large:{fontSize:20,letterSpacing:-.07,lineHeight:24},medium:{fontSize:16,letterSpacing:-.05,lineHeight:20},small:{fontSize:14,letterSpacing:-.05,lineHeight:20}},paragraphSizes:{small:{fontSize:14,lineHeight:24},medium:{fontSize:16,lineHeight:21},large:{fontSize:18,lineHeight:18}},textSizes:{large:{fontSize:20},medium:{fontSize:16},small:{fontSize:14},xsmall:{fontSize:12}},elevations:h,controlBorderRadius:g,controlHeights:{small:40,medium:48,large:56},controlPaddings:{small:8,medium:16,large:24},containerShapes:{circle:{borderRadius:999},pill:{borderRadius:999},rounded:{borderRadius:g.medium},roundedBottom:{borderBottomLeftRadius:g.medium,borderBottomRightRadius:g.medium},roundedLeft:{borderBottomLeftRadius:g.medium,borderTopLeftRadius:g.medium},roundedRight:{borderBottomRightRadius:g.medium,borderTopRightRadius:g.medium},roundedTop:{borderTopLeftRadius:g.medium,borderTopRightRadius:g.medium},square:{borderRadius:0}},components:{}};"undefined"!==typeof O&&O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"defaultTheme",filename:"src/theme/defaultTheme.ts"}}),n.d(t,"a",function(){return v});"undefined"!==typeof TextSizes&&TextSizes&&TextSizes===Object(TextSizes)&&Object.isExtensible(TextSizes)&&Object.defineProperty(TextSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof TextSize&&TextSize&&TextSize===Object(TextSize)&&Object.isExtensible(TextSize)&&Object.defineProperty(TextSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof HeadingSizes&&HeadingSizes&&HeadingSizes===Object(HeadingSizes)&&Object.isExtensible(HeadingSizes)&&Object.defineProperty(HeadingSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HeadingSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof HeadingSize&&HeadingSize&&HeadingSize===Object(HeadingSize)&&Object.isExtensible(HeadingSize)&&Object.defineProperty(HeadingSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HeadingSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ParagraphSizes&&ParagraphSizes&&ParagraphSizes===Object(ParagraphSizes)&&Object.isExtensible(ParagraphSizes)&&Object.defineProperty(ParagraphSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ParagraphSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ParagraphSize&&ParagraphSize&&ParagraphSize===Object(ParagraphSize)&&Object.isExtensible(ParagraphSize)&&Object.defineProperty(ParagraphSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ParagraphSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontFamilies&&FontFamilies&&FontFamilies===Object(FontFamilies)&&Object.isExtensible(FontFamilies)&&Object.defineProperty(FontFamilies,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontFamilies",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontFamily&&FontFamily&&FontFamily===Object(FontFamily)&&Object.isExtensible(FontFamily)&&Object.defineProperty(FontFamily,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontFamily",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof RNFontWeight&&RNFontWeight&&RNFontWeight===Object(RNFontWeight)&&Object.isExtensible(RNFontWeight)&&Object.defineProperty(RNFontWeight,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"RNFontWeight",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontWeights&&FontWeights&&FontWeights===Object(FontWeights)&&Object.isExtensible(FontWeights)&&Object.defineProperty(FontWeights,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontWeights",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontWeight&&FontWeight&&FontWeight===Object(FontWeight)&&Object.isExtensible(FontWeight)&&Object.defineProperty(FontWeight,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontWeight",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof TextColors&&TextColors&&TextColors===Object(TextColors)&&Object.isExtensible(TextColors)&&Object.defineProperty(TextColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof TextColor&&TextColor&&TextColor===Object(TextColor)&&Object.isExtensible(TextColor)&&Object.defineProperty(TextColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ButtonColors&&ButtonColors&&ButtonColors===Object(ButtonColors)&&Object.isExtensible(ButtonColors)&&Object.defineProperty(ButtonColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ButtonColorsWithText&&ButtonColorsWithText&&ButtonColorsWithText===Object(ButtonColorsWithText)&&Object.isExtensible(ButtonColorsWithText)&&Object.defineProperty(ButtonColorsWithText,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColorsWithText",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ButtonColor&&ButtonColor&&ButtonColor===Object(ButtonColor)&&Object.isExtensible(ButtonColor)&&Object.defineProperty(ButtonColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BorderColors&&BorderColors&&BorderColors===Object(BorderColors)&&Object.isExtensible(BorderColors)&&Object.defineProperty(BorderColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BorderColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BorderColor&&BorderColor&&BorderColor===Object(BorderColor)&&Object.isExtensible(BorderColor)&&Object.defineProperty(BorderColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BorderColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BackgroundColors&&BackgroundColors&&BackgroundColors===Object(BackgroundColors)&&Object.isExtensible(BackgroundColors)&&Object.defineProperty(BackgroundColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BackgroundColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BackgroundColor&&BackgroundColor&&BackgroundColor===Object(BackgroundColor)&&Object.isExtensible(BackgroundColor)&&Object.defineProperty(BackgroundColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BackgroundColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Colors&&Colors&&Colors===Object(Colors)&&Object.isExtensible(Colors)&&Object.defineProperty(Colors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Colors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Elevations&&Elevations&&Elevations===Object(Elevations)&&Object.isExtensible(Elevations)&&Object.defineProperty(Elevations,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Elevations",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Elevation&&Elevation&&Elevation===Object(Elevation)&&Object.isExtensible(Elevation)&&Object.defineProperty(Elevation,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Elevation",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ControlSizes&&ControlSizes&&ControlSizes===Object(ControlSizes)&&Object.isExtensible(ControlSizes)&&Object.defineProperty(ControlSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ControlSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ControlSize&&ControlSize&&ControlSize===Object(ControlSize)&&Object.isExtensible(ControlSize)&&Object.defineProperty(ControlSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ControlSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FillColorProps&&FillColorProps&&FillColorProps===Object(FillColorProps)&&Object.isExtensible(FillColorProps)&&Object.defineProperty(FillColorProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FillColorProps",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FillColors&&FillColors&&FillColors===Object(FillColors)&&Object.isExtensible(FillColors)&&Object.defineProperty(FillColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FillColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FillColor&&FillColor&&FillColor===Object(FillColor)&&Object.isExtensible(FillColor)&&Object.defineProperty(FillColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FillColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Fills&&Fills&&Fills===Object(Fills)&&Object.isExtensible(Fills)&&Object.defineProperty(Fills,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Fills",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ContainerShapes&&ContainerShapes&&ContainerShapes===Object(ContainerShapes)&&Object.isExtensible(ContainerShapes)&&Object.defineProperty(ContainerShapes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ContainerShapes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ContainerShape&&ContainerShape&&ContainerShape===Object(ContainerShape)&&Object.isExtensible(ContainerShape)&&Object.defineProperty(ContainerShape,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ContainerShape",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Theme&&Theme&&Theme===Object(Theme)&&Object.isExtensible(Theme)&&Object.defineProperty(Theme,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Theme",filename:"src/theme/Theme.tsx"}});var y=o.a.createContext(O);"undefined"!==typeof y&&y&&y===Object(y)&&Object.isExtensible(y)&&Object.defineProperty(y,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ThemeContext",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ThemeProviderProps&&ThemeProviderProps&&ThemeProviderProps===Object(ThemeProviderProps)&&Object.isExtensible(ThemeProviderProps)&&Object.defineProperty(ThemeProviderProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ThemeProviderProps",filename:"src/theme/Theme.tsx"}});var x=function(e){return e?r()(O,e):O};x&&x===Object(x)&&Object.isExtensible(x)&&Object.defineProperty(x,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"createTheme",filename:"src/theme/Theme.tsx"}});var S=function(e){var t=e.children,n=e.value,a=x(void 0===n?O:n);return o.a.createElement(y.Provider,{value:a,__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/theme/Theme.tsx",lineNumber:315}},t)};S&&S===Object(S)&&Object.isExtensible(S)&&Object.defineProperty(S,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ThemeProvider",filename:"src/theme/Theme.tsx"}});var v=function(){return o.a.useContext(y)};"undefined"!==typeof v&&v&&v===Object(v)&&Object.isExtensible(v)&&Object.defineProperty(v,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useTheme",filename:"src/theme/Theme.tsx"}})},"./src/utils/mergeStyles.ts":function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a=n("./node_modules/deepmerge/dist/umd.js"),r=n.n(a);"undefined"!==typeof GetStyles&&GetStyles&&GetStyles===Object(GetStyles)&&Object.isExtensible(GetStyles)&&Object.defineProperty(GetStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetStyles",filename:"src/utils/mergeStyles.ts"}}),"undefined"!==typeof ArgumentTypes&&ArgumentTypes&&ArgumentTypes===Object(ArgumentTypes)&&Object.isExtensible(ArgumentTypes)&&Object.defineProperty(ArgumentTypes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ArgumentTypes",filename:"src/utils/mergeStyles.ts"}}),"undefined"!==typeof ReplaceReturnType&&ReplaceReturnType&&ReplaceReturnType===Object(ReplaceReturnType)&&Object.isExtensible(ReplaceReturnType)&&Object.defineProperty(ReplaceReturnType,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ReplaceReturnType",filename:"src/utils/mergeStyles.ts"}});var i=function(e,t,n){return function(a,i){var o=[e(a,i)];return n&&o.push(n(a,i)),t&&o.push(t(a,i)),r.a.all(o)}};"undefined"!==typeof i&&i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"mergeStyles",filename:"src/utils/mergeStyles.ts"}})}}]);
//# sourceMappingURL=28.f1c3b6e697a5fb6b03af.js.map