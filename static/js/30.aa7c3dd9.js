(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"./src/components/Box/Box.tsx":function(e,n,i){"use strict";var t=i("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=i("./node_modules/react/index.js"),r=i("./node_modules/react-native-web/dist/exports/View/index.js"),o=i("./src/theme/Theme.tsx"),s=i("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),c=i("./node_modules/dlv/dist/dlv.umd.js"),l=i.n(c),d=i("./src/utils/overrides.ts");"undefined"!==typeof SpacingProps&&SpacingProps&&SpacingProps===Object(SpacingProps)&&Object.isExtensible(SpacingProps)&&Object.defineProperty(SpacingProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SpacingProps",filename:"src/components/Spacing/Spacing.tsx"}}),"undefined"!==typeof SpacingOverride&&SpacingOverride&&SpacingOverride===Object(SpacingOverride)&&Object.isExtensible(SpacingOverride)&&Object.defineProperty(SpacingOverride,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SpacingOverride",filename:"src/components/Spacing/Spacing.tsx"}});var m=function(e,n){return"number"===typeof e?e:n.spacing[e]};m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getSpacing",filename:"src/components/Spacing/Spacing.tsx"}});var p=function(e){var n=e.size,i=void 0===n?"medium":n,c=e.orientation,p=void 0===c?"vertical":c,b=e.style,u=Object(t.a)(e,["size","orientation","style"]),g=Object(o.b)();return a.createElement(r.a,Object(s.a)({style:["vertical"===p?{height:m(i,g)}:{width:m(i,g)},Object(d.b)(e,b),Object(d.b)(e,l()(g,"overrides.Spacing.style"))]},u,{__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Spacing/Spacing.tsx",lineNumber:44}}))};p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Spacing",filename:"src/components/Spacing/Spacing.tsx"}}),i.d(n,"a",function(){return u});"undefined"!==typeof BoxProps&&BoxProps&&BoxProps===Object(BoxProps)&&Object.isExtensible(BoxProps)&&Object.defineProperty(BoxProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxProps",filename:"src/components/Box/Box.tsx"}});var b={backgroundColor:function(e,n){return n.colors.background[e]?{backgroundColor:n.colors.background[e]}:{backgroundColor:e}},elevation:function(e,n){return n.elevations[e]},shape:function(e,n){return n.containerShapes[e]},space:m,spaceBottom:m,spaceEnd:m,spaceHorizontal:m,spaceLeft:m,spaceRight:m,spaceStart:m,spaceTop:m,spaceVertical:m},u=function(e){var n=e.children,i=e.testID,s=Object(t.a)(e,["children","testID"]),c=Object(o.b)(),l=[],d={};for(var m in s)if(m){var p=b[m];if(p){var u=p(s[m],c);l.push(u)}else d[m]=s[m]}return a.createElement(r.a,{testID:i,style:[d,l],__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Box/Box.tsx",lineNumber:78}},n)};"undefined"!==typeof u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Box",filename:"src/components/Box/Box.tsx"}})},"./src/components/Typography/Heading.mdx":function(e,n,i){"use strict";i.r(n),i.d(n,"default",function(){return p});var t=i("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=i("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),r=(i("./node_modules/react/index.js"),i("./node_modules/@mdx-js/react/dist/index.es.js")),o=i("./node_modules/docz/dist/index.esm.js"),s=i("./src/components/Box/Box.tsx"),c=i("./src/components/Typography/Heading.tsx"),l="/home/travis/build/WeTrustPlatform/paramount/src/components/Typography/Heading.mdx",d={},m="wrapper";function p(e){var n=e.components,i=Object(t.a)(e,["components"]);return Object(r.b)(m,Object(a.a)({},d,i,{components:n,mdxType:"MDXLayout",__source:{fileName:l,lineNumber:21}}),Object(r.b)("h1",Object(a.a)({id:"heading"},{__source:{fileName:l,lineNumber:24}}),"Heading"),Object(r.b)("p",{__source:{fileName:l,lineNumber:27}},"Composes React Native's ",Object(r.b)("inlineCode",{parentName:"p",__source:{fileName:l,lineNumber:27}},"Text")," component"),Object(r.b)("h2",Object(a.a)({id:"usage"},{__source:{fileName:l,lineNumber:28}}),"Usage"),Object(r.b)(o.c,{__position:0,__code:'<Box>\n  <Heading size="xxxlarge">xxxlarge</Heading>\n  <Heading size="xxlarge">xxlarge</Heading>\n  <Heading size="xlarge">xlarge</Heading>\n  <Heading size="large">large</Heading>\n  <Heading size="medium">medium</Heading>\n  <Heading size="small">small</Heading>\n</Box>',__scope:{props:this?this.props:i,Playground:o.c,Props:o.d,Box:s.a,Heading:c.a},mdxType:"Playground",__source:{fileName:l,lineNumber:31}},Object(r.b)(s.a,{mdxType:"Box",__source:{fileName:l,lineNumber:38}},Object(r.b)(c.a,{size:"xxxlarge",mdxType:"Heading",__source:{fileName:l,lineNumber:39}},"xxxlarge"),Object(r.b)(c.a,{size:"xxlarge",mdxType:"Heading",__source:{fileName:l,lineNumber:40}},"xxlarge"),Object(r.b)(c.a,{size:"xlarge",mdxType:"Heading",__source:{fileName:l,lineNumber:41}},"xlarge"),Object(r.b)(c.a,{size:"large",mdxType:"Heading",__source:{fileName:l,lineNumber:42}},"large"),Object(r.b)(c.a,{size:"medium",mdxType:"Heading",__source:{fileName:l,lineNumber:43}},"medium"),Object(r.b)(c.a,{size:"small",mdxType:"Heading",__source:{fileName:l,lineNumber:44}},"small"))),Object(r.b)("h2",Object(a.a)({id:"props"},{__source:{fileName:l,lineNumber:47}}),"Props"),Object(r.b)(o.d,{of:c.a,mdxType:"Props",__source:{fileName:l,lineNumber:50}}))}p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Typography/Heading.mdx"}}),p.isMDXComponent=!0},"./src/components/Typography/Heading.tsx":function(e,n,i){"use strict";i.d(n,"a",function(){return u});var t=i("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),a=i("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),r=i("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=i("./node_modules/dlv/dist/dlv.umd.js"),s=i.n(o),c=i("./node_modules/react/index.js"),l=i("./node_modules/react-native-web/dist/exports/Platform/index.js"),d=i("./node_modules/react-native-web/dist/exports/Text/index.js"),m=i("./src/theme/Theme.tsx"),p=i("./src/utils/overrides.ts"),b=i("./src/components/Typography/Text.tsx");"undefined"!==typeof HeadingProps&&HeadingProps&&HeadingProps===Object(HeadingProps)&&Object.isExtensible(HeadingProps)&&Object.defineProperty(HeadingProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HeadingProps",filename:"src/components/Typography/Heading.tsx"}}),"undefined"!==typeof HeadingOverride&&HeadingOverride&&HeadingOverride===Object(HeadingOverride)&&Object.isExtensible(HeadingOverride)&&Object.defineProperty(HeadingOverride,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HeadingOverride",filename:"src/components/Typography/Heading.tsx"}});var u=function(e){var n=e.children,i=e.accessibilityLevel,o=e.size,u=void 0===o?"medium":o,f=e.align,x=void 0===f?"left":f,j=e.color,_=void 0===j?"default":j,O=e.weight,v=e.style,y=Object(r.a)(e,["children","accessibilityLevel","size","align","color","weight","style"]),h=Object(m.b)(),H=g(h.headingSizes)(u);return c.createElement(d.a,Object(t.a)({accessibilityRole:"web"===l.a.OS?"heading":"none","aria-level":i,style:[Object(a.a)({},H,{color:Object(b.c)(h.colors.text)(_),fontFamily:h.fontFamilies.heading,fontWeight:Object(b.b)(h.fontWeights)(O)||H.fontWeight,textAlign:x}),Object(p.b)(e,v),Object(p.b)(e,s()(h,"overrides.Heading.style"))]},y,{__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Typography/Heading.tsx",lineNumber:77}}),n)};"undefined"!==typeof u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Heading",filename:"src/components/Typography/Heading.tsx"}});var g=function(e){return function(n){return e[n]||{fontSize:n}}};"undefined"!==typeof g&&g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getHeadingSize",filename:"src/components/Typography/Heading.tsx"}})}}]);
//# sourceMappingURL=30.6242c88caa7b6481e64c.js.map