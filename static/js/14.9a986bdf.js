(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"./src/components/Box/Box.tsx":function(e,t,n){"use strict";var r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=n("./node_modules/react/index.js"),a=n("./node_modules/react-native-web/dist/exports/View/index.js"),i=n("./src/theme/Theme.tsx"),s=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),l=n("./node_modules/dlv/dist/dlv.umd.js"),c=n.n(l),b=n("./src/utils/overrides.ts");"undefined"!==typeof SpacingProps&&SpacingProps&&SpacingProps===Object(SpacingProps)&&Object.isExtensible(SpacingProps)&&Object.defineProperty(SpacingProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SpacingProps",filename:"src/components/Spacing/Spacing.tsx"}}),"undefined"!==typeof SpacingOverride&&SpacingOverride&&SpacingOverride===Object(SpacingOverride)&&Object.isExtensible(SpacingOverride)&&Object.defineProperty(SpacingOverride,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SpacingOverride",filename:"src/components/Spacing/Spacing.tsx"}});var u=function(e,t){return"number"===typeof e?e:t.spacing[e]};u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getSpacing",filename:"src/components/Spacing/Spacing.tsx"}});var d=function(e){var t=e.size,n=void 0===t?"medium":t,l=e.orientation,d=void 0===l?"vertical":l,p=e.style,m=Object(r.a)(e,["size","orientation","style"]),f=Object(i.b)();return o.createElement(a.a,Object(s.a)({style:["vertical"===d?{height:u(n,f)}:{width:u(n,f)},Object(b.b)(e,p),Object(b.b)(e,c()(f,"overrides.Spacing.style"))]},m,{__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Spacing/Spacing.tsx",lineNumber:44}}))};d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Spacing",filename:"src/components/Spacing/Spacing.tsx"}}),n.d(t,"a",function(){return m});"undefined"!==typeof BoxProps&&BoxProps&&BoxProps===Object(BoxProps)&&Object.isExtensible(BoxProps)&&Object.defineProperty(BoxProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxProps",filename:"src/components/Box/Box.tsx"}});var p={backgroundColor:function(e,t){return t.colors.background[e]?{backgroundColor:t.colors.background[e]}:{backgroundColor:e}},elevation:function(e,t){return t.elevations[e]},shape:function(e,t){return t.containerShapes[e]},space:u,spaceBottom:u,spaceEnd:u,spaceHorizontal:u,spaceLeft:u,spaceRight:u,spaceStart:u,spaceTop:u,spaceVertical:u},m=function(e){var t=e.children,n=e.testID,s=Object(r.a)(e,["children","testID"]),l=Object(i.b)(),c=[],b={};for(var u in s)if(u){var d=p[u];if(d){var m=d(s[u],l);c.push(m)}else b[u]=s[u]}return o.createElement(a.a,{testID:n,style:[b,c],__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Box/Box.tsx",lineNumber:78}},t)};"undefined"!==typeof m&&m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Box",filename:"src/components/Box/Box.tsx"}})},"./src/components/Inputs/TextInput.tsx":function(e,t,n){"use strict";n.d(t,"a",function(){return g});var r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),i=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),s=n("./node_modules/dlv/dist/dlv.umd.js"),l=n.n(s),c=n("./node_modules/react/index.js"),b=n("./node_modules/react-native-web/dist/exports/TextInput/index.js"),u=n("./node_modules/react-native-web/dist/exports/TouchableOpacity/index.js"),d=n("./node_modules/react-native-web/dist/exports/View/index.js"),p=n("./src/theme/Theme.tsx"),m=n("./src/utils/isControlSize.ts"),f=n("./src/utils/overrides.ts"),x=n("./src/components/Icon/Icon.web.tsx"),j="/home/travis/build/WeTrustPlatform/paramount/src/components/Inputs/TextInput.tsx";"undefined"!==typeof TextInputOverrides&&TextInputOverrides&&TextInputOverrides===Object(TextInputOverrides)&&Object.isExtensible(TextInputOverrides)&&Object.defineProperty(TextInputOverrides,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextInputOverrides",filename:"src/components/Inputs/TextInput.tsx"}}),"undefined"!==typeof TextInputProps&&TextInputProps&&TextInputProps===Object(TextInputProps)&&Object.isExtensible(TextInputProps)&&Object.defineProperty(TextInputProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextInputProps",filename:"src/components/Inputs/TextInput.tsx"}});var g=function(e){var t=e.size,n=void 0===t?"medium":t,r=e.isClearable,s=void 0!==r&&r,b=e.isDisabled,u=void 0!==b&&b,d=e.isInvalid,m=void 0!==d&&d,x=e.onClear,g=void 0===x?function(){}:x,I=e.onValueChange,N=void 0===I?function(){}:I,P=e.onChangeText,L=void 0===P?function(){}:P,C=e.value,S=e.overrides,E=void 0===S?{}:S,B=Object(i.a)(e,["size","isClearable","isDisabled","isInvalid","onClear","onValueChange","onChangeText","value","overrides"]),R=Object(p.b)(),w=Object(f.a)(O,e,l()(R,"overrides.TextInput.Root"),E.Root),z=Object(a.a)(w,2),k=z[0],W=z[1],D=Object(f.a)(_,e,l()(R,"overrides.TextInput.Input"),E.Input),V=Object(a.a)(D,2),H=V[0],M=V[1],X=Object(f.a)(h,e,l()(R,"overrides.TextInput.LeftIconWrapper"),E.LeftIconWrapper),A=Object(a.a)(X,2),J=A[0],F=A[1],U=Object(f.a)(y,e,l()(R,"overrides.TextInput.LeftIcon"),E.LeftIcon),q=Object(a.a)(U,2),G=q[0],K=q[1],Q=Object(f.a)(v,e,l()(R,"overrides.TextInput.RightIconWrapper"),E.RightIconWrapper),Y=Object(a.a)(Q,2),Z=Y[0],$=Y[1],ee=Object(f.a)(T,e,l()(R,"overrides.TextInput.RightIcon"),E.RightIcon),te=Object(a.a)(ee,2),ne=te[0],re=te[1];return c.createElement(k,Object(o.a)({},W,{__source:{fileName:j,lineNumber:120}}),c.createElement(J,Object(o.a)({},F,{__source:{fileName:j,lineNumber:121}}),c.createElement(G,Object(o.a)({isClearable:s,onClear:g,onValueChange:N,value:C,onChangeText:L},K,{__source:{fileName:j,lineNumber:122}}))),c.createElement(H,Object(o.a)({hasLeftIcon:!!E.LeftIcon,hasRightIcon:!(!s&&!E.RightIcon),size:n,isDisabled:u,isInvalid:m,onValueChange:N,value:C,onChangeText:L},B,M,{__source:{fileName:j,lineNumber:131}})),c.createElement(Z,Object(o.a)({},$,{__source:{fileName:j,lineNumber:143}}),c.createElement(ne,Object(o.a)({isClearable:s,onClear:g,onValueChange:N,value:C,onChangeText:L},re,{__source:{fileName:j,lineNumber:144}}))))};"undefined"!==typeof g&&g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextInput",filename:"src/components/Inputs/TextInput.tsx"}});var O=function(e){var t=e.children,n=e.style,r=Object(i.a)(e,["children","style"]);return c.createElement(d.a,Object(o.a)({style:[n]},r,{__source:{fileName:j,lineNumber:167}}),t)},_=function(e){var t=e.isDisabled,n=e.isInvalid,a=e.onValueChange,s=e.onChangeText,l=e.size,u=e.style,d=e.numberOfLines,f=e.textContentType,x=e.hasLeftIcon,g=e.hasRightIcon,O=e.placeholderTextColor,_=Object(i.a)(e,["isDisabled","isInvalid","onValueChange","onChangeText","size","style","numberOfLines","textContentType","hasLeftIcon","hasRightIcon","placeholderTextColor"]),h=Object(p.b)(),v=Object(m.a)(l)?{borderRadius:h.controlBorderRadius[l],height:h.controlHeights[l],paddingLeft:h.controlPaddings[l],paddingRight:h.controlPaddings[l],textSize:h.textSizes[l]}:{borderRadius:h.controlBorderRadius.medium,height:l,paddingLeft:h.controlPaddings.medium,paddingRight:h.controlPaddings.medium,textSize:h.textSizes.medium},y=v.borderRadius,T=v.height,I=v.paddingLeft,N=v.paddingRight,P=v.textSize;return c.createElement(b.a,Object(o.a)({style:[Object(r.a)({backgroundColor:h.colors.background.content,borderColor:h.colors.border.default,borderRadius:y,borderWidth:1,color:h.colors.text.default,height:T,paddingLeft:I,paddingRight:N,width:"100%"},P,t?{backgroundColor:h.colors.background.greyDark}:{},n?{borderColor:h.colors.border.danger}:{},d?{height:d*T,paddingVertical:16}:{},x&&{paddingLeft:40},g&&{paddingRight:40}),u],editable:!t,placeholderTextColor:O||h.colors.text.muted,name:f,numberOfLines:d,textContentType:f,onChangeText:function(e){a(e),s(e)}},_,{__source:{fileName:j,lineNumber:224}}))},h=function(e){var t=e.children,n=e.style,r=Object(i.a)(e,["children","style"]);return c.createElement(d.a,Object(o.a)({style:[{alignItems:"center",display:"flex",height:"100%",justifyContent:"center",left:0,paddingHorizontal:8,position:"absolute",zIndex:1},n]},r,{__source:{fileName:j,lineNumber:272}}),t)},v=function(e){var t=e.children,n=e.style,r=Object(i.a)(e,["children","style"]);return c.createElement(d.a,Object(o.a)({style:[{alignItems:"center",display:"flex",height:"100%",justifyContent:"center",paddingHorizontal:8,position:"absolute",right:0,zIndex:1},n]},r,{__source:{fileName:j,lineNumber:299}}),t)},y=function(e){return c.createElement(c.Fragment,null)},T=function(e){var t=e.isClearable,n=e.onClear,r=e.onValueChange,o=e.onChangeText,a=e.value,i=Object(p.b)();return a&&t?c.createElement(u.a,{onPress:function(){o(""),r(""),n()},__source:{fileName:j,lineNumber:339}},c.createElement(x.a,{name:"x",color:i.colors.text.default,__source:{fileName:j,lineNumber:346}})):null}},"./src/components/Typography/Label.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return p});var r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),a=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),i=n("./node_modules/docz/dist/index.esm.js"),s=n("./src/components/Box/Box.tsx"),l=n("./src/components/Inputs/TextInput.tsx"),c=n("./src/components/Typography/Label.tsx"),b="/home/travis/build/WeTrustPlatform/paramount/src/components/Typography/Label.mdx",u={},d="wrapper";function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)(d,Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout",__source:{fileName:b,lineNumber:21}}),Object(a.b)("h1",Object(o.a)({id:"label"},{__source:{fileName:b,lineNumber:24}}),"Label"),Object(a.b)("p",{__source:{fileName:b,lineNumber:27}},"Composes ",Object(a.b)("inlineCode",{parentName:"p",__source:{fileName:b,lineNumber:27}},"Text")),Object(a.b)("h2",Object(o.a)({id:"usage"},{__source:{fileName:b,lineNumber:28}}),"Usage"),Object(a.b)(i.c,{__position:0,__code:'<Box>\n  <Label label="Lorem ipsum dolar set amet">\n    <TextInput />\n  </Label>\n</Box>',__scope:{props:this?this.props:n,Playground:i.c,Props:i.d,Box:s.a,TextInput:l.a,Label:c.a},mdxType:"Playground",__source:{fileName:b,lineNumber:31}},Object(a.b)(s.a,{mdxType:"Box",__source:{fileName:b,lineNumber:39}},Object(a.b)(c.a,{label:"Lorem ipsum dolar set amet",mdxType:"Label",__source:{fileName:b,lineNumber:40}},Object(a.b)(l.a,{mdxType:"TextInput",__source:{fileName:b,lineNumber:41}})))),Object(a.b)("h2",Object(o.a)({id:"props"},{__source:{fileName:b,lineNumber:45}}),"Props"),Object(a.b)(i.d,{of:c.a,mdxType:"Props",__source:{fileName:b,lineNumber:48}}))}p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Typography/Label.mdx"}}),p.isMDXComponent=!0},"./src/components/Typography/Label.tsx":function(e,t,n){"use strict";n.d(t,"a",function(){return f});var r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),i=n("./node_modules/dlv/dist/dlv.umd.js"),s=n.n(i),l=n("./node_modules/react/index.js"),c=n("./node_modules/react-native-web/dist/exports/Platform/index.js"),b=n("./node_modules/react-native-web/dist/exports/View/index.js"),u=n("./src/theme/Theme.tsx"),d=n("./src/utils/overrides.ts"),p=n("./src/components/Typography/Text.tsx"),m="/home/travis/build/WeTrustPlatform/paramount/src/components/Typography/Label.tsx";"undefined"!==typeof LabelOverrides&&LabelOverrides&&LabelOverrides===Object(LabelOverrides)&&Object.isExtensible(LabelOverrides)&&Object.defineProperty(LabelOverrides,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"LabelOverrides",filename:"src/components/Typography/Label.tsx"}}),"undefined"!==typeof LabelProps&&LabelProps&&LabelProps===Object(LabelProps)&&Object.isExtensible(LabelProps)&&Object.defineProperty(LabelProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"LabelProps",filename:"src/components/Typography/Label.tsx"}});var f=function(e){var t=e.children,n=e.position,r=void 0===n?"top":n,i=e.overrides,c=void 0===i?{}:i,b=e.label,p=Object(u.b)(),f=Object(d.a)(x,e,s()(p,"overrides.Label.Root"),c.Root),O=Object(a.a)(f,2),_=O[0],h=O[1],v=Object(d.a)(j,e,s()(p,"overrides.Label.Wrapper"),c.Wrapper),y=Object(a.a)(v,2),T=y[0],I=y[1],N=Object(d.a)(g,e,s()(p,"overrides.Label.LabelText"),c.LabelText),P=Object(a.a)(N,2),L=P[0],C=P[1];return l.createElement(_,Object(o.a)({},h,{__source:{fileName:m,lineNumber:61}}),"top"===r&&l.createElement(L,Object(o.a)({position:r,label:b},C,{__source:{fileName:m,lineNumber:63}})),l.createElement(T,Object(o.a)({position:r},I,{__source:{fileName:m,lineNumber:65}}),"left"===r&&l.createElement(L,Object(o.a)({position:r,label:b},C,{__source:{fileName:m,lineNumber:67}})),t,"right"===r&&l.createElement(L,Object(o.a)({position:r,label:b},C,{__source:{fileName:m,lineNumber:71}}))))};"undefined"!==typeof f&&f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Label",filename:"src/components/Typography/Label.tsx"}});var x=function(e){var t=e.children,n=e.style,a=Object(r.a)(e,["children","style"]);return l.createElement(b.a,Object(o.a)({style:[n]},a,{__source:{fileName:m,lineNumber:88}}),t)},j=function(e){var t=e.children,n=e.style,a=e.position,i=Object(r.a)(e,["children","style","position"]),s={};switch(a){case"left":s={flexDirection:"row",alignItems:"center",paddingRight:8};break;case"right":s={flexDirection:"row",alignItems:"center",paddingLeft:8};break;case"top":default:s={paddingBottom:4}}return l.createElement(b.a,Object(o.a)({style:[s,n]},i,{__source:{fileName:m,lineNumber:127}}),t)},g=function(e){var t=e.label,n=e.position,a=e.style,i=Object(r.a)(e,["label","position","style"]);if(!t)return null;var s={};switch(n){case"left":s={paddingRight:8};break;case"right":s={paddingLeft:8};break;case"top":default:s={paddingBottom:4}}return l.createElement(p.a,Object(o.a)({style:[s,Object(d.b)(e,a)],accessibilityRole:"web"===c.a.OS?"label":"none"},i,{__source:{fileName:m,lineNumber:161}}),t)}},"./src/utils/isControlSize.ts":function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r=function(e){return"number"!==typeof e};"undefined"!==typeof r&&r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"isControlSize",filename:"src/utils/isControlSize.ts"}})}}]);
//# sourceMappingURL=14.6242c88caa7b6481e64c.js.map