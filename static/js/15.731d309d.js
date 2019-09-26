(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"./src/components/Helpers/CounterState.tsx":function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),r=n("./node_modules/react/index.js"),i=n.n(r);"undefined"!==typeof CounterStateRenderProps&&CounterStateRenderProps&&CounterStateRenderProps===Object(CounterStateRenderProps)&&Object.isExtensible(CounterStateRenderProps)&&Object.defineProperty(CounterStateRenderProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CounterStateRenderProps",filename:"src/components/Helpers/CounterState.tsx"}}),"undefined"!==typeof CounterStateProps&&CounterStateProps&&CounterStateProps===Object(CounterStateProps)&&Object.isExtensible(CounterStateProps)&&Object.defineProperty(CounterStateProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CounterStateProps",filename:"src/components/Helpers/CounterState.tsx"}});var o=function(e){var t=e.children,n=e.initial,r=void 0===n?0:n,o=i.a.useState(r),s=Object(a.a)(o,2),l=s[0],c=s[1],b=i.a.useCallback(function(e){c(l+e)},[l]),u=i.a.useCallback(function(e){c(l-e)},[l]),m=i.a.useCallback(function(){c(l+1)},[l]),f=i.a.useCallback(function(){c(l-1)},[l]),p=i.a.useCallback(function(e){c(e)},[l]);return t({count:l,decrement:f,decrementBy:u,increment:m,incrementBy:b,set:p})};"undefined"!==typeof o&&o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CounterState",filename:"src/components/Helpers/CounterState.tsx"}})},"./src/components/Rating/Rating.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return m});var a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),i=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),o=n("./node_modules/docz/dist/index.esm.js"),s=n("./src/components/Helpers/CounterState.tsx"),l=n("./src/components/Rating/Rating.tsx"),c="/home/travis/build/WeTrustPlatform/paramount/src/components/Rating/Rating.mdx",b={},u="wrapper";function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)(u,Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout",__source:{fileName:c,lineNumber:21}}),Object(i.b)("h1",Object(r.a)({id:"rating"},{__source:{fileName:c,lineNumber:24}}),"Rating"),Object(i.b)("h2",Object(r.a)({id:"usage"},{__source:{fileName:c,lineNumber:27}}),"Usage"),Object(i.b)(o.c,{__position:0,__code:'<CounterState initial={3}>\n  {({ count: rating, set }) => (\n    <Rating value={rating} size="small" onChange={value => set(value)} />\n  )}\n</CounterState>',__scope:{props:this?this.props:n,Playground:o.c,Props:o.d,CounterState:s.a,Rating:l.a},mdxType:"Playground",__source:{fileName:c,lineNumber:30}},Object(i.b)(s.a,{initial:3,mdxType:"CounterState",__source:{fileName:c,lineNumber:37}},function(e){var t=e.count,n=e.set;return Object(i.b)(l.a,{value:t,size:"small",onChange:function(e){return n(e)},mdxType:"Rating",__source:{fileName:c,lineNumber:41}})})),Object(i.b)("h2",Object(r.a)({id:"props"},{__source:{fileName:c,lineNumber:44}}),"Props"),Object(i.b)(o.d,{of:l.a,mdxType:"Props",__source:{fileName:c,lineNumber:47}}),Object(i.b)("h2",Object(r.a)({id:"customization"},{__source:{fileName:c,lineNumber:48}}),"Customization"),Object(i.b)("p",{__source:{fileName:c,lineNumber:51}},"Using ",Object(i.b)("inlineCode",{parentName:"p",__source:{fileName:c,lineNumber:51}},"getStyles")," prop"),Object(i.b)("pre",{__source:{fileName:c,lineNumber:52}},Object(i.b)("code",Object(r.a)({parentName:"pre"},{},{__source:{fileName:c,lineNumber:52}}),"RatingStyles {\n  touchableStyle: ViewStyle;\n  containerStyle: ViewStyle;\n  starColor: string;\n  starSize: number;\n}\n\ngetStyles={(RatingProps, Theme) => RatingStyles}\n")),Object(i.b)("p",{__source:{fileName:c,lineNumber:61}},"Markup"),Object(i.b)("pre",{__source:{fileName:c,lineNumber:62}},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"},{__source:{fileName:c,lineNumber:62}}),"<View containerStyle>\n  <TouchableOpacity touchableStyle>\n    <Star color={starColor} size={starSize} />\n  </TouchableOpacity>\n  // ...repeat\n</View>\n")))}m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Rating/Rating.mdx"}}),m.isMDXComponent=!0},"./src/components/Rating/Rating.tsx":function(e,t,n){"use strict";var a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),r=n("./node_modules/react/index.js"),i=n("./node_modules/react-native-web/dist/exports/TouchableOpacity/index.js"),o=n("./node_modules/react-native-web/dist/exports/View/index.js"),s=n("./src/theme/Theme.tsx"),l=n("./src/utils/mergeStyles.ts"),c=n("./src/utils/isControlSize.ts"),b=n("./src/components/Typography/Text.styles.ts");"undefined"!==typeof GetRatingStyles&&GetRatingStyles&&GetRatingStyles===Object(GetRatingStyles)&&Object.isExtensible(GetRatingStyles)&&Object.defineProperty(GetRatingStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetRatingStyles",filename:"src/components/Rating/Rating.styles.ts"}}),"undefined"!==typeof RatingStyles&&RatingStyles&&RatingStyles===Object(RatingStyles)&&Object.isExtensible(RatingStyles)&&Object.defineProperty(RatingStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"RatingStyles",filename:"src/components/Rating/Rating.styles.ts"}});var u=function(e,t){var n=e.size,a=void 0===n?"medium":n,r=e.color,i=void 0===r?"primary":r,o=Object(c.a)(a)?t.controlHeights[a]:a;return{containerStyle:{flexDirection:"row"},touchableStyle:{paddingRight:Object(c.a)(a)?t.controlPaddings[a]:t.controlPaddings.medium},starColor:Object(b.b)(t.colors.text)(i),starSize:o}};u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getRatingStyles",filename:"src/components/Rating/Rating.styles.ts"}});var m=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),f=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),p=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),d=n("./node_modules/react-native-web/dist/exports/createElement/index.js"),j=n("./node_modules/react-native-web/dist/exports/StyleSheet/index.js"),g=function(e){var t=e.translate,n=e.scale,a=e.rotation,r=e.skewX,i=e.skewY,o=e.originX,s=e.originY,l=e.fontFamily,c=e.fontSize,b=e.fontWeight,u=e.fontStyle,d=e.style,g=Object(m.a)(e,["translate","scale","rotation","skewX","skewY","originX","originY","fontFamily","fontSize","fontWeight","fontStyle","style"]),O=[];null==o&&null==s||O.push("translate(".concat(o||0,", ").concat(s||0,")")),null!=t&&O.push("translate(".concat(t,")")),null!=n&&O.push("scale(".concat(n,")")),null!=a&&O.push("rotate(".concat(a,")")),null!=r&&O.push("skewX(".concat(r,")")),null!=i&&O.push("skewY(".concat(i,")")),null==o&&null==s||O.push("translate(".concat(-o||0,", ").concat(-s||0,")")),O.length&&(g.transform=O.join(" "));var v,_,S={};return null!=l&&(S.fontFamily=l),null!=c&&(S.fontSize=c),null!=b&&(S.fontWeight=b),null!=u&&(S.fontStyle=u),g.style=(_=S,(v=d)?j.a?[v,_]:v[T.iterator]?Object.assign.apply(Object,[{}].concat(Object(p.a)(v),[_])):Object(f.a)({},v,_):_),g};g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"prepare",filename:"src/components/Svg/Svg.web.tsx"}});var O=function(e){return Object(d.a)("circle",g(e))};O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Circle",filename:"src/components/Svg/Svg.web.tsx"}});var v=function(e){return Object(d.a)("clipPath",g(e))};v&&v===Object(v)&&Object.isExtensible(v)&&Object.defineProperty(v,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ClipPath",filename:"src/components/Svg/Svg.web.tsx"}});var _=function(e){return Object(d.a)("defs",g(e))};_&&_===Object(_)&&Object.isExtensible(_)&&Object.defineProperty(_,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Defs",filename:"src/components/Svg/Svg.web.tsx"}});var S=function(e){return Object(d.a)("ellipse",g(e))};S&&S===Object(S)&&Object.isExtensible(S)&&Object.defineProperty(S,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Ellipse",filename:"src/components/Svg/Svg.web.tsx"}});var y=function(e){var t=e.x,n=e.y,a=Object(m.a)(e,["x","y"]);return!t&&!n||a.translate||(a.translate="".concat(t||0,", ").concat(n||0)),Object(d.a)("g",g(a))};y&&y===Object(y)&&Object.isExtensible(y)&&Object.defineProperty(y,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"G",filename:"src/components/Svg/Svg.web.tsx"}});var x=function(e){return Object(d.a)("image",g(e))};x&&x===Object(x)&&Object.isExtensible(x)&&Object.defineProperty(x,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Image",filename:"src/components/Svg/Svg.web.tsx"}});var P=function(e){return Object(d.a)("line",g(e))};P&&P===Object(P)&&Object.isExtensible(P)&&Object.defineProperty(P,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Line",filename:"src/components/Svg/Svg.web.tsx"}});var R=function(e){return Object(d.a)("linearGradient",g(e))};R&&R===Object(R)&&Object.isExtensible(R)&&Object.defineProperty(R,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"LinearGradient",filename:"src/components/Svg/Svg.web.tsx"}});var h=function(e){return Object(d.a)("path",g(e))};h&&h===Object(h)&&Object.isExtensible(h)&&Object.defineProperty(h,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Path",filename:"src/components/Svg/Svg.web.tsx"}});var w=function(e){return Object(d.a)("polygon",g(e))};w&&w===Object(w)&&Object.isExtensible(w)&&Object.defineProperty(w,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Polygon",filename:"src/components/Svg/Svg.web.tsx"}});var C=function(e){return Object(d.a)("polyline",g(e))};C&&C===Object(C)&&Object.isExtensible(C)&&Object.defineProperty(C,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Polyline",filename:"src/components/Svg/Svg.web.tsx"}});var N=function(e){return Object(d.a)("radialGradient",g(e))};N&&N===Object(N)&&Object.isExtensible(N)&&Object.defineProperty(N,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"RadialGradient",filename:"src/components/Svg/Svg.web.tsx"}});var E=function(e){return Object(d.a)("rect",g(e))};E&&E===Object(E)&&Object.isExtensible(E)&&Object.defineProperty(E,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Rect",filename:"src/components/Svg/Svg.web.tsx"}});var k=function(e){return Object(d.a)("stop",g(e))};k&&k===Object(k)&&Object.isExtensible(k)&&Object.defineProperty(k,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Stop",filename:"src/components/Svg/Svg.web.tsx"}});var z=function(e){return Object(d.a)("svg",g(e))};z&&z===Object(z)&&Object.isExtensible(z)&&Object.defineProperty(z,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Svg",filename:"src/components/Svg/Svg.web.tsx"}});var T=function(e){return Object(d.a)("symbol",g(e))};"undefined"!==typeof T&&T&&T===Object(T)&&Object.isExtensible(T)&&Object.defineProperty(T,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Symbol",filename:"src/components/Svg/Svg.web.tsx"}});var G=function(e){return Object(d.a)("text",g(e))};G&&G===Object(G)&&Object.isExtensible(G)&&Object.defineProperty(G,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Text",filename:"src/components/Svg/Svg.web.tsx"}});var W=function(e){return Object(d.a)("tspan",g(e))};W&&W===Object(W)&&Object.isExtensible(W)&&Object.defineProperty(W,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TSpan",filename:"src/components/Svg/Svg.web.tsx"}});var X=function(e){return Object(d.a)("textPath",g(e))};X&&X===Object(X)&&Object.isExtensible(X)&&Object.defineProperty(X,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextPath",filename:"src/components/Svg/Svg.web.tsx"}});var H=function(e){return Object(d.a)("use",g(e))};H&&H===Object(H)&&Object.isExtensible(H)&&Object.defineProperty(H,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Use",filename:"src/components/Svg/Svg.web.tsx"}});var D=function(e){return Object(d.a)("mask",g(e))};D&&D===Object(D)&&Object.isExtensible(D)&&Object.defineProperty(D,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Mask",filename:"src/components/Svg/Svg.web.tsx"}});var F=function(e){return Object(d.a)("pattern",g(e))};F&&F===Object(F)&&Object.isExtensible(F)&&Object.defineProperty(F,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Pattern",filename:"src/components/Svg/Svg.web.tsx"}});z&&z===Object(z)&&Object.isExtensible(z)&&Object.defineProperty(z,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Svg",filename:"src/components/Svg/Svg.web.tsx"}});var L="/home/travis/build/WeTrustPlatform/paramount/src/components/Rating/Star.tsx";"undefined"!==typeof StarProps&&StarProps&&StarProps===Object(StarProps)&&Object.isExtensible(StarProps)&&Object.defineProperty(StarProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"StarProps",filename:"src/components/Rating/Star.tsx"}});var M=function(e){var t=e.size,n=void 0===t?24:t,a=e.color,i=e.isFilled,o=void 0!==i&&i,l=Object(s.b)(),c=String(n),b=a||l.fills.subtle.yellow.backgroundColor;return r.createElement(z,{width:c,height:c,viewBox:"0 0 24 24",fill:o?b:"none",stroke:b,strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",__source:{fileName:L,lineNumber:21}},r.createElement(w,{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",__source:{fileName:L,lineNumber:31}}))};M&&M===Object(M)&&Object.isExtensible(M)&&Object.defineProperty(M,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Star",filename:"src/components/Rating/Star.tsx"}}),n.d(t,"a",function(){return Y});var V="/home/travis/build/WeTrustPlatform/paramount/src/components/Rating/Rating.tsx";"undefined"!==typeof RatingProps&&RatingProps&&RatingProps===Object(RatingProps)&&Object.isExtensible(RatingProps)&&Object.defineProperty(RatingProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"RatingProps",filename:"src/components/Rating/Rating.tsx"}});var Y=function(e){var t=e.value,n=void 0===t?0:t,c=e.maxRating,b=void 0===c?5:c,m=e.getStyles,f=e.onChange,p=void 0===f?function(){}:f,d=Object(s.b)(),j=Object(l.a)(u,m,d.components.getRatingStyles)(e,d),g=j.containerStyle,O=j.starColor,v=j.starSize,_=j.touchableStyle;return r.createElement(o.a,{style:g,__source:{fileName:V,lineNumber:58}},new Array(b).fill(0).map(function(e,t){var o=t+1,s=o<=n,l=o===b;return r.createElement(i.a,{key:o,style:Object(a.a)({},_,l?{paddingRight:0}:{}),onPress:function(){return p(o)},__source:{fileName:V,lineNumber:65}},r.createElement(M,{color:O,size:v,isFilled:s,__source:{fileName:V,lineNumber:73}}))}))};"undefined"!==typeof Y&&Y&&Y===Object(Y)&&Object.isExtensible(Y)&&Object.defineProperty(Y,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Rating",filename:"src/components/Rating/Rating.tsx"}})},"./src/utils/isControlSize.ts":function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a=function(e){return"number"!==typeof e};"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"isControlSize",filename:"src/utils/isControlSize.ts"}})}}]);
//# sourceMappingURL=15.fda0a51c017c9ba0378c.js.map