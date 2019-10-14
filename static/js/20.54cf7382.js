(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"./src/components/Box/Box.tsx":function(e,t,o){"use strict";var r=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),n=o("./node_modules/react/index.js"),a=o.n(n),i=o("./node_modules/react-native-web/dist/exports/View/index.js"),s=o("./src/theme/Theme.tsx"),c=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),l=o("./node_modules/dlv/dist/dlv.umd.js"),u=o.n(l),d=o("./src/utils/Overrides.ts");"undefined"!==typeof SpacingProps&&SpacingProps&&SpacingProps===Object(SpacingProps)&&Object.isExtensible(SpacingProps)&&Object.defineProperty(SpacingProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SpacingProps",filename:"src/components/Spacing/Spacing.tsx"}}),"undefined"!==typeof SpacingOverride&&SpacingOverride&&SpacingOverride===Object(SpacingOverride)&&Object.isExtensible(SpacingOverride)&&Object.defineProperty(SpacingOverride,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SpacingOverride",filename:"src/components/Spacing/Spacing.tsx"}});var m=function(e,t){return"number"===typeof e?e:t.spacing[e]};m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getSpacing",filename:"src/components/Spacing/Spacing.tsx"}});var b=function(e){var t=e.size,o=void 0===t?"medium":t,n=e.orientation,l=void 0===n?"vertical":n,b=e.style,p=Object(r.a)(e,["size","orientation","style"]),f=Object(s.a)();return a.a.createElement(i.a,Object(c.a)({style:["vertical"===l?{height:m(o,f)}:{width:m(o,f)},Object(d.b)(e,b),Object(d.b)(e,u()(f,"overrides.Spacing.style"))]},p,{__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Spacing/Spacing.tsx",lineNumber:44}}))};b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Spacing",filename:"src/components/Spacing/Spacing.tsx"}}),o.d(t,"a",function(){return f});"undefined"!==typeof BoxProps&&BoxProps&&BoxProps===Object(BoxProps)&&Object.isExtensible(BoxProps)&&Object.defineProperty(BoxProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxProps",filename:"src/components/Box/Box.tsx"}});var p={backgroundColor:function(e,t){return t.colors.background[e]?{backgroundColor:t.colors.background[e]}:{backgroundColor:e}},elevation:function(e,t){return t.elevations[e]},shape:function(e,t){return t.containerShapes[e]},space:function(e,t){return{padding:m(e,t)}},spaceBottom:function(e,t){return{paddingBottom:m(e,t)}},spaceEnd:function(e,t){return{paddingEnd:m(e,t)}},spaceHorizontal:function(e,t){return{paddingHorizontal:m(e,t)}},spaceLeft:function(e,t){return{paddingLeft:m(e,t)}},spaceRight:function(e,t){return{paddingRight:m(e,t)}},spaceStart:function(e,t){return{paddingStart:m(e,t)}},spaceTop:function(e,t){return{paddingTop:m(e,t)}},spaceVertical:function(e,t){return{paddingVertical:m(e,t)}}},f=function(e){var t=e.children,o=e.testID,n=Object(r.a)(e,["children","testID"]),c=Object(s.a)(),l=[],u={};for(var d in n)if(d){var m=p[d];if(m){var b=m(n[d],c);l.push(b)}else u[d]=n[d]}return a.a.createElement(i.a,{testID:o,style:[u,l],__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Box/Box.tsx",lineNumber:106}},t)};"undefined"!==typeof f&&f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Box",filename:"src/components/Box/Box.tsx"}})},"./src/components/Button/Button.tsx":function(e,t,o){"use strict";var r=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),n=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),i=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),s=o("./node_modules/dlv/dist/dlv.umd.js"),c=o.n(s),l=o("./node_modules/react/index.js"),u=o.n(l),d=o("./node_modules/react-native-web/dist/exports/TouchableOpacity/index.js"),m=o("./src/theme/Theme.tsx"),b=o("./src/utils/ControlSize.ts"),p=o("./src/utils/Overrides.ts"),f=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js"),g=o.n(f),j=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),O=o("./node_modules/react-native-web/dist/exports/View/index.js"),_=o("./node_modules/react-spring/native.cjs.js"),x=function(e,t){return!e},v=function(){var e=u.a.useReducer(x,!0),t=Object(i.a)(e,2)[1];return u.a.useCallback(function(){t(null)},[t])};v&&v===Object(v)&&Object.isExtensible(v)&&Object.defineProperty(v,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useForceUpdate",filename:"src/hooks/useForceUpdate.ts"}});var y="/home/travis/build/WeTrustPlatform/paramount/src/components/LoadingIndicators/Dots.tsx",h=Object(_.animated)(O.a);"undefined"!==typeof DotsProps&&DotsProps&&DotsProps===Object(DotsProps)&&Object.isExtensible(DotsProps)&&Object.defineProperty(DotsProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DotsProps",filename:"src/components/LoadingIndicators/Dots.tsx"}});var P=function(e){var t=Object(m.a)(),o=e.size,r=void 0===o?10:o,n=e.color,a=void 0===n?t.colors.text.primary:n,i=v(),s=Object(_.useTrail)(3,{config:{duration:800},from:{opacity:0},onRest:i,reset:!0,to:function(){var e=Object(j.a)(g.a.mark(function e(t){return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t({opacity:1});case 2:return e.next=4,t({opacity:0});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()});return u.a.createElement(O.a,{style:{alignItems:"center",flexDirection:"row",justifyContent:"center"},__source:{fileName:y,lineNumber:34}},s.map(function(e,t){return u.a.createElement(h,{key:t,style:{backgroundColor:a,borderRadius:999,height:r,marginLeft:3,marginRight:3,opacity:e.opacity,width:r},__source:{fileName:y,lineNumber:42}})}))};P&&P===Object(P)&&Object.isExtensible(P)&&Object.defineProperty(P,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Dots",filename:"src/components/LoadingIndicators/Dots.tsx"}});var B=o("./src/components/Typography/Text.tsx");o.d(t,"a",function(){return T});var N="/home/travis/build/WeTrustPlatform/paramount/src/components/Button/Button.tsx";"undefined"!==typeof ButtonOverrides&&ButtonOverrides&&ButtonOverrides===Object(ButtonOverrides)&&Object.isExtensible(ButtonOverrides)&&Object.defineProperty(ButtonOverrides,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonOverrides",filename:"src/components/Button/Button.tsx"}}),"undefined"!==typeof ButtonProps&&ButtonProps&&ButtonProps===Object(ButtonProps)&&Object.isExtensible(ButtonProps)&&Object.defineProperty(ButtonProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonProps",filename:"src/components/Button/Button.tsx"}});var T=function(e){var t=e.appearance,o=void 0===t?"primary":t,r=e.color,n=void 0===r?"default":r,s=e.isDisabled,l=void 0!==s&&s,d=e.isLoading,b=void 0!==d&&d,f=e.size,g=void 0===f?"medium":f,j=e.onPress,O=void 0===j?function(){}:j,_=e.title,x=e.testID,v=e.overrides,y=void 0===v?{}:v,h=Object(m.a)(),P=Object(p.a)(C,e,{appearance:o,color:n,isDisabled:l,isLoading:b,size:g,onPress:O,testID:x},c()(h,"overrides.Button.Touchable"),y.Touchable),B=Object(i.a)(P,2),T=B[0],S=B[1],z=Object(p.a)(k,e,{appearance:o,color:n,isDisabled:l,size:g,title:_},c()(h,"overrides.Button.Title"),y.Title),L=Object(i.a)(z,2),w=L[0],H=L[1],R=Object(p.a)(D,e,{appearance:o,color:n},c()(h,"overrides.Button.Loading"),y.Loading),I=Object(i.a)(R,2),W=I[0],U=I[1],A=Object(p.a)(E,e,{appearance:o,color:n,isDisabled:l,isLoading:b,size:g},c()(h,"overrides.Button.IconBefore"),y.IconBefore),M=Object(i.a)(A,2),V=M[0],F=M[1],X=Object(p.a)(E,e,{appearance:o,color:n,isDisabled:l,isLoading:b,size:g},c()(h,"overrides.Button.IconAfter"),y.IconAfter),J=Object(i.a)(X,2),G=J[0],q=J[1];return u.a.createElement(T,Object(a.a)({},S,{__source:{fileName:N,lineNumber:151}}),u.a.createElement(V,Object(a.a)({},F,{__source:{fileName:N,lineNumber:152}})),b?u.a.createElement(W,Object(a.a)({},U,{__source:{fileName:N,lineNumber:153}})):u.a.createElement(w,Object(a.a)({},H,{__source:{fileName:N,lineNumber:153}})),u.a.createElement(G,Object(a.a)({},q,{__source:{fileName:N,lineNumber:154}})))};"undefined"!==typeof T&&T&&T===Object(T)&&Object.isExtensible(T)&&Object.defineProperty(T,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Button",filename:"src/components/Button/Button.tsx"}});var C=function(e){var t=e.appearance,o=e.color,i=e.isDisabled,s=e.isLoading,c=e.size,l=e.children,p=e.style,f=Object(n.a)(e,["appearance","color","isDisabled","isLoading","size","children","style"]),g=Object(m.a)(),j=function(e,t){return{minimal:{default:{backgroundColor:e.colors.background.content},danger:{backgroundColor:e.colors.background.content},primary:{backgroundColor:e.colors.background.content},secondary:{backgroundColor:e.colors.background.content}},primary:{default:{backgroundColor:t?e.colors.background.greyLight:e.colors.button.default},danger:{backgroundColor:t?e.colors.background.dangerLight:e.colors.button.danger},primary:{backgroundColor:t?e.colors.background.primaryLight:e.colors.button.primary},secondary:{backgroundColor:t?e.colors.background.secondaryLight:e.colors.button.secondary}},outline:{default:{backgroundColor:e.colors.background.content,borderColor:e.colors.text.default,borderWidth:3},danger:{backgroundColor:e.colors.background.content,borderColor:e.colors.border.danger,borderWidth:3},primary:{backgroundColor:e.colors.background.content,borderColor:e.colors.border.primary,borderWidth:3},secondary:{backgroundColor:e.colors.background.content,borderColor:e.colors.border.secondary,borderWidth:3}}}}(g,s),O=Object(b.a)(c)?{borderRadius:g.controlBorderRadius[c],minHeight:g.controlHeights[c],paddingLeft:g.controlPaddings[c]+8,paddingRight:g.controlPaddings[c]+8}:{borderRadius:g.controlBorderRadius.medium,minHeight:c,paddingLeft:g.controlPaddings.medium+8,paddingRight:g.controlPaddings.medium+8},_=O.borderRadius,x=O.minHeight,v=O.paddingLeft,y=O.paddingRight;return u.a.createElement(d.a,Object(a.a)({accessibilityRole:"button",disabled:!(!i&&!s),style:[Object(r.a)({borderRadius:_,minHeight:x,paddingLeft:v,paddingRight:y,flexDirection:"row",alignItems:"center",justifyContent:"center"},j[t][o],i&&{backgroundColor:g.colors.button.disabled}),p]},f,{__source:{fileName:N,lineNumber:277}}),l)},S=function(e){return{minimal:{default:e.colors.text.default,danger:e.colors.text.danger,primary:e.colors.text.primary,secondary:e.colors.text.secondary},primary:{default:e.colors.button.defaultText,danger:e.colors.button.dangerText,primary:e.colors.button.primaryText,secondary:e.colors.button.secondaryText},outline:{default:e.colors.text.default,danger:e.colors.text.danger,primary:e.colors.text.primary,secondary:e.colors.text.secondary}}},k=function(e){var t=e.appearance,o=e.color,i=e.isDisabled,s=e.size,c=e.title,l=e.style,d=Object(n.a)(e,["appearance","color","isDisabled","size","title","style"]),f=Object(m.a)(),g=Object(b.a)(s)?f.textSizes[s]:f.textSizes.medium;return c?u.a.createElement(B.a,Object(a.a)({weight:"bold",style:[Object(r.a)({alignItems:"center",color:i?f.colors.text.muted:S(f)[t][o],display:"flex",fontWeight:"600",justifyContent:"center",textAlign:"center",paddingHorizontal:8},g),Object(p.b)(e,l)]},d,{__source:{fileName:N,lineNumber:360}}),c):null},D=function(e){var t=e.appearance,o=e.color,r=Object(m.a)();return u.a.createElement(P,{color:S(r)[t][o],__source:{fileName:N,lineNumber:393}})},E=function(e){return u.a.createElement(u.a.Fragment,null)}},"./src/components/Toast/Toast.mdx":function(e,t,o){"use strict";o.r(t),o.d(t,"default",function(){return f});var r=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),n=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),a=(o("./node_modules/react/index.js"),o("./node_modules/@mdx-js/react/dist/index.es.js")),i=o("./node_modules/docz/dist/index.esm.js"),s=o("./src/components/Box/Box.tsx"),c=o("./src/components/Button/Button.tsx"),l=o("./src/components/Toast/ToastContext.ts"),u=o("./src/components/Toast/ToastProvider.tsx"),d=o("./src/components/Toast/Toast.tsx"),m="/home/travis/build/WeTrustPlatform/paramount/src/components/Toast/Toast.mdx",b={},p="wrapper";function f(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(a.b)(p,Object(n.a)({},b,o,{components:t,mdxType:"MDXLayout",__source:{fileName:m,lineNumber:21}}),Object(a.b)("h1",Object(n.a)({id:"toast"},{__source:{fileName:m,lineNumber:24}}),"Toast"),Object(a.b)("h2",Object(n.a)({id:"setup"},{__source:{fileName:m,lineNumber:27}}),"Setup"),Object(a.b)("p",{__source:{fileName:m,lineNumber:30}},"Make sure to use ",Object(a.b)("inlineCode",{parentName:"p",__source:{fileName:m,lineNumber:30}},"ThemeProvider")," at the top-level component."),Object(a.b)("pre",{__source:{fileName:m,lineNumber:31}},Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"},{__source:{fileName:m,lineNumber:31}}),"<ThemeProvider>{children}</ThemeProvider>\n")),Object(a.b)("h2",Object(n.a)({id:"usage"},{__source:{fileName:m,lineNumber:35}}),"Usage"),Object(a.b)("p",{__source:{fileName:m,lineNumber:38}},"Paramount exposes a convenience hook ",Object(a.b)("inlineCode",{parentName:"p",__source:{fileName:m,lineNumber:38}},"useToast")," you can use to create toasts from anywhere in the application."),Object(a.b)(i.c,{__position:0,__code:"<ToastProvider>\n  {/*\n    We use `ToastContext.Consumer` here due to limitations in docs\n    Use `const { notify } = useToast()` inside your function component\n   */}\n  <ToastContext.Consumer>\n    {({ notify }) => (\n      <Button\n        onPress={() =>\n          notify({\n            title: 'Title',\n            description: 'Description',\n            duration: 5000,\n          })\n        }\n        title=\"Open toast\"\n      />\n    )}\n  </ToastContext.Consumer>\n</ToastProvider>",__scope:{props:this?this.props:o,Playground:i.c,Props:i.d,Box:s.a,Button:c.a,ToastContext:l.a,ToastProvider:u.a,Toast:d.a},mdxType:"Playground",__source:{fileName:m,lineNumber:39}},Object(a.b)(u.a,{mdxType:"ToastProvider",__source:{fileName:m,lineNumber:49}},Object(a.b)(l.a.Consumer,{__source:{fileName:m,lineNumber:56}},function(e){var t=e.notify;return Object(a.b)(c.a,{onPress:function(){return t({title:"Title",description:"Description",duration:5e3})},title:"Open toast",mdxType:"Button",__source:{fileName:m,lineNumber:59}})}))),Object(a.b)("h2",Object(n.a)({id:"toast-options"},{__source:{fileName:m,lineNumber:67}}),"Toast Options"),Object(a.b)(i.d,{of:d.a,mdxType:"Props",__source:{fileName:m,lineNumber:70}}))}f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Toast/Toast.mdx"}}),f.isMDXComponent=!0},"./src/utils/ControlSize.ts":function(e,t,o){"use strict";o.d(t,"a",function(){return n}),o.d(t,"b",function(){return a});var r=o("./src/theme/Theme.tsx"),n=function(e){return"number"!==typeof e};"undefined"!==typeof n&&n&&n===Object(n)&&Object.isExtensible(n)&&Object.defineProperty(n,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"isControlSize",filename:"src/utils/ControlSize.ts"}});var a=function(){var e=Object(r.a)();return{getControlHeight:function(t){return"number"===typeof t?t:e.controlHeights[t]},getSmallerTextSize:function(t){switch(function(t){if("number"===typeof t){if(t>=e.controlHeights.large)return"large";if(t>=e.controlHeights.medium)return"medium";if(t>=e.controlHeights.small)return"small";if(t<e.controlHeights.small)return"xsmall"}return t}(t)){case"large":return"medium";case"medium":return"small";case"small":default:return"xsmall"}},getSmallerHeightControlSize:function(t){switch(function(t){if("number"===typeof t){if(t>=e.controlHeights.large)return"large";if(t>=e.controlHeights.medium)return"medium";if(t<e.controlHeights.medium)return"small"}return t}(t)){case"large":return"medium";case"medium":default:return"small"}}}};"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useControlSizeUtils",filename:"src/utils/ControlSize.ts"}})}}]);
//# sourceMappingURL=20.ee22def8b66aef7b4a31.js.map