(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"./src/components/Divider/Divider.mdx":function(e,i,t){"use strict";t.r(i),t.d(i,"default",function(){return m});var r=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),n=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),s=(t("./node_modules/react/index.js"),t("./node_modules/@mdx-js/react/dist/index.es.js")),o=t("./node_modules/docz/dist/index.esm.js"),l=t("./src/components/Box/Box.tsx"),d=t("./src/components/Divider/Divider.tsx"),c="/home/travis/build/WeTrustPlatform/paramount/src/components/Divider/Divider.mdx",a={},b="wrapper";function m(e){var i=e.components,t=Object(r.a)(e,["components"]);return Object(s.b)(b,Object(n.a)({},a,t,{components:i,mdxType:"MDXLayout",__source:{fileName:c,lineNumber:21}}),Object(s.b)("h1",Object(n.a)({id:"divider"},{__source:{fileName:c,lineNumber:24}}),"Divider"),Object(s.b)("h2",Object(n.a)({id:"usage"},{__source:{fileName:c,lineNumber:27}}),"Usage"),Object(s.b)(o.c,{__position:0,__code:"<Box paddingVertical={40}>\n  <Divider />\n</Box>",__scope:{props:this?this.props:t,Playground:o.c,Props:o.d,Box:l.a,Divider:d.a},mdxType:"Playground",__source:{fileName:c,lineNumber:30}},Object(s.b)(l.a,{paddingVertical:40,mdxType:"Box",__source:{fileName:c,lineNumber:37}},Object(s.b)(d.a,{mdxType:"Divider",__source:{fileName:c,lineNumber:38}}))),Object(s.b)("h2",Object(n.a)({id:"props"},{__source:{fileName:c,lineNumber:41}}),"Props"),Object(s.b)(o.d,{of:d.a,mdxType:"Props",__source:{fileName:c,lineNumber:44}}),Object(s.b)("h2",Object(n.a)({id:"customization"},{__source:{fileName:c,lineNumber:45}}),"Customization"),Object(s.b)("p",{__source:{fileName:c,lineNumber:48}},"Using ",Object(s.b)("inlineCode",{parentName:"p",__source:{fileName:c,lineNumber:48}},"getStyles")," prop"),Object(s.b)("pre",{__source:{fileName:c,lineNumber:49}},Object(s.b)("code",Object(n.a)({parentName:"pre"},{},{__source:{fileName:c,lineNumber:49}}),"DividerStyles {\n  dividerStyle: TextStyle;\n}\n\ngetStyles={(DividerProps, Theme) => DividerStyles}\n")),Object(s.b)("p",{__source:{fileName:c,lineNumber:55}},"Markup"),Object(s.b)("pre",{__source:{fileName:c,lineNumber:56}},Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"},{__source:{fileName:c,lineNumber:56}}),"<View dividerStyle />\n")))}m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Divider/Divider.mdx"}}),m.isMDXComponent=!0},"./src/components/Divider/Divider.tsx":function(e,i,t){"use strict";var r=t("./node_modules/react/index.js"),n=t("./node_modules/react-native-web/dist/exports/View/index.js"),s=t("./src/theme/Theme.tsx"),o=t("./src/utils/mergeStyles.ts"),l=t("./src/utils/isControlSize.ts");"undefined"!==typeof DividerStyles&&DividerStyles&&DividerStyles===Object(DividerStyles)&&Object.isExtensible(DividerStyles)&&Object.defineProperty(DividerStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DividerStyles",filename:"src/components/Divider/Divider.styles.ts"}}),"undefined"!==typeof DividerPosition&&DividerPosition&&DividerPosition===Object(DividerPosition)&&Object.isExtensible(DividerPosition)&&Object.defineProperty(DividerPosition,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DividerPosition",filename:"src/components/Divider/Divider.styles.ts"}}),"undefined"!==typeof GetDividerStyles&&GetDividerStyles&&GetDividerStyles===Object(GetDividerStyles)&&Object.isExtensible(GetDividerStyles)&&Object.defineProperty(GetDividerStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetDividerStyles",filename:"src/components/Divider/Divider.styles.ts"}});var d=function(e){return function(i){return e[i]||i}};d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getDividerColor",filename:"src/components/Divider/Divider.styles.ts"}});var c={large:3,medium:2,small:1},a=function(e,i){var t=e.size,r=void 0===t?"small":t,n=e.color,s=e.position,o=void 0===s?"horizontal":s,a=d(i.colors.border)(n||i.colors.border.default),b=Object(l.a)(r)?c[r]:r,m={horizontal:{backgroundColor:a,height:b,width:"100%"},vertical:{backgroundColor:a,height:"100%",width:b}};return{dividerStyle:o?m[o]:m.horizontal}};a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getDividerStyles",filename:"src/components/Divider/Divider.styles.ts"}}),t.d(i,"a",function(){return b});"undefined"!==typeof DividerProps&&DividerProps&&DividerProps===Object(DividerProps)&&Object.isExtensible(DividerProps)&&Object.defineProperty(DividerProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DividerProps",filename:"src/components/Divider/Divider.tsx"}});var b=function(e){var i=e.getStyles,t=Object(s.b)(),l=Object(o.a)(a,i,t.components.getDividerStyles)(e,t).dividerStyle;return r.createElement(n.a,{style:l,__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Divider/Divider.tsx",lineNumber:45}})};"undefined"!==typeof b&&b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Divider",filename:"src/components/Divider/Divider.tsx"}})},"./src/utils/isControlSize.ts":function(e,i,t){"use strict";t.d(i,"a",function(){return r});var r=function(e){return"number"!==typeof e};"undefined"!==typeof r&&r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"isControlSize",filename:"src/utils/isControlSize.ts"}})}}]);
//# sourceMappingURL=28.fda0a51c017c9ba0378c.js.map