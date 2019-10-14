(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"./src/components/Box/Box.tsx":function(e,t,n){"use strict";var a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=n("./node_modules/react/index.js"),i=n.n(r),l=n("./node_modules/react-native-web/dist/exports/View/index.js"),o=n("./src/theme/Theme.tsx"),s=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),u=n("./node_modules/dlv/dist/dlv.umd.js"),c=n.n(u),m=n("./src/utils/Overrides.ts");"undefined"!==typeof SpacingProps&&SpacingProps&&SpacingProps===Object(SpacingProps)&&Object.isExtensible(SpacingProps)&&Object.defineProperty(SpacingProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SpacingProps",filename:"src/components/Spacing/Spacing.tsx"}}),"undefined"!==typeof SpacingOverride&&SpacingOverride&&SpacingOverride===Object(SpacingOverride)&&Object.isExtensible(SpacingOverride)&&Object.defineProperty(SpacingOverride,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SpacingOverride",filename:"src/components/Spacing/Spacing.tsx"}});var p=function(e,t){return"number"===typeof e?e:t.spacing[e]};p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getSpacing",filename:"src/components/Spacing/Spacing.tsx"}});var b=function(e){var t=e.size,n=void 0===t?"medium":t,r=e.orientation,u=void 0===r?"vertical":r,b=e.style,d=Object(a.a)(e,["size","orientation","style"]),f=Object(o.a)();return i.a.createElement(l.a,Object(s.a)({style:["vertical"===u?{height:p(n,f)}:{width:p(n,f)},Object(m.b)(e,b),Object(m.b)(e,c()(f,"overrides.Spacing.style"))]},d,{__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Spacing/Spacing.tsx",lineNumber:44}}))};b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Spacing",filename:"src/components/Spacing/Spacing.tsx"}}),n.d(t,"a",function(){return f});"undefined"!==typeof BoxProps&&BoxProps&&BoxProps===Object(BoxProps)&&Object.isExtensible(BoxProps)&&Object.defineProperty(BoxProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxProps",filename:"src/components/Box/Box.tsx"}});var d={backgroundColor:function(e,t){return t.colors.background[e]?{backgroundColor:t.colors.background[e]}:{backgroundColor:e}},elevation:function(e,t){return t.elevations[e]},shape:function(e,t){return t.containerShapes[e]},space:function(e,t){return{padding:p(e,t)}},spaceBottom:function(e,t){return{paddingBottom:p(e,t)}},spaceEnd:function(e,t){return{paddingEnd:p(e,t)}},spaceHorizontal:function(e,t){return{paddingHorizontal:p(e,t)}},spaceLeft:function(e,t){return{paddingLeft:p(e,t)}},spaceRight:function(e,t){return{paddingRight:p(e,t)}},spaceStart:function(e,t){return{paddingStart:p(e,t)}},spaceTop:function(e,t){return{paddingTop:p(e,t)}},spaceVertical:function(e,t){return{paddingVertical:p(e,t)}}},f=function(e){var t=e.children,n=e.testID,r=Object(a.a)(e,["children","testID"]),s=Object(o.a)(),u=[],c={};for(var m in r)if(m){var p=d[m];if(p){var b=p(r[m],s);u.push(b)}else c[m]=r[m]}return i.a.createElement(l.a,{testID:n,style:[c,u],__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Box/Box.tsx",lineNumber:106}},t)};"undefined"!==typeof f&&f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Box",filename:"src/components/Box/Box.tsx"}})},"./src/components/Pickers/ListPicker.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return b});var a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),i=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),l=n("./node_modules/docz/dist/index.esm.js"),o=n("./src/components/Box/Box.tsx"),s=n("./src/components/Pickers/ListPicker.tsx"),u=n("./src/components/Helpers/State.tsx"),c="/home/travis/build/WeTrustPlatform/paramount/src/components/Pickers/ListPicker.mdx",m={},p="wrapper";function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)(p,Object(r.a)({},m,n,{components:t,mdxType:"MDXLayout",__source:{fileName:c,lineNumber:21}}),Object(i.b)("h1",Object(r.a)({id:"listpicker"},{__source:{fileName:c,lineNumber:24}}),"ListPicker"),Object(i.b)("p",{__source:{fileName:c,lineNumber:27}},"ListPicker that supports single value or multiple values selected at the same item."),Object(i.b)("p",{__source:{fileName:c,lineNumber:28}},Object(i.b)("inlineCode",{parentName:"p",__source:{fileName:c,lineNumber:28}},"ListPicker")," composes ",Object(i.b)("inlineCode",{parentName:"p",__source:{fileName:c,lineNumber:28}},"FlatList"),". To use ",Object(i.b)("inlineCode",{parentName:"p",__source:{fileName:c,lineNumber:28}},"ref"),", import ",Object(i.b)("inlineCode",{parentName:"p",__source:{fileName:c,lineNumber:28}},"ListPickerWithRef")," instead"),Object(i.b)("h2",Object(r.a)({id:"usage"},{__source:{fileName:c,lineNumber:29}}),"Usage"),Object(i.b)(l.c,{__position:0,__code:"<State initial={{ value: ['c', 'js', 'go'] }}>\n  {({ state, setState }) => (\n    <Box height={300}>\n      <ListPicker\n        isMulti\n        value={state.value}\n        onValueChange={(newValue, itemIndex) => setState({ value: newValue })}\n        data={[\n          {\n            label: 'C',\n            value: 'c',\n            description:\n              'C is a general-purpose, procedural computer programming language. C is a general-purpose, procedural computer programming language.',\n          },\n          {\n            label: 'C#',\n            value: 'c#',\n            description:\n              'C# is a general-purpose, multi-paradigm programming language.',\n          },\n          { label: 'C++', value: 'c++', isDisabled: true },\n          { label: 'CSS', value: 'css' },\n          { label: 'Elixir', value: 'elixir' },\n          { label: 'Elm', value: 'elm' },\n          { label: 'Erlang', value: 'erlang' },\n          { label: 'Go', value: 'go' },\n          { label: 'Haskell', value: 'haskell' },\n          { label: 'HTML', value: 'html' },\n          { label: 'Java', value: 'java' },\n          { label: 'JavaScript', value: 'js' },\n          { label: 'Lua', value: 'lua' },\n          { label: 'Python', value: 'python' },\n          { label: 'R', value: 'r' },\n          { label: 'Ruby', value: 'ruby' },\n          { label: 'Rust', value: 'rust' },\n          { label: 'Switft', value: 'swift' },\n          { label: 'Typescript', value: 'typescript' },\n        ]}\n      />\n    </Box>\n  )}\n</State>",__scope:{props:this?this.props:n,Playground:l.c,Props:l.d,Box:o.a,ListPicker:s.a,State:u.a},mdxType:"Playground",__source:{fileName:c,lineNumber:32}},Object(i.b)(u.a,{initial:{value:["c","js","go"]},mdxType:"State",__source:{fileName:c,lineNumber:40}},function(e){var t=e.state,n=e.setState;return Object(i.b)(o.a,{height:300,mdxType:"Box",__source:{fileName:c,lineNumber:46}},Object(i.b)(s.a,{isMulti:!0,value:t.value,onValueChange:function(e,t){return n({value:e})},data:[{label:"C",value:"c",description:"C is a general-purpose, procedural computer programming language. C is a general-purpose, procedural computer programming language."},{label:"C#",value:"c#",description:"C# is a general-purpose, multi-paradigm programming language."},{label:"C++",value:"c++",isDisabled:!0},{label:"CSS",value:"css"},{label:"Elixir",value:"elixir"},{label:"Elm",value:"elm"},{label:"Erlang",value:"erlang"},{label:"Go",value:"go"},{label:"Haskell",value:"haskell"},{label:"HTML",value:"html"},{label:"Java",value:"java"},{label:"JavaScript",value:"js"},{label:"Lua",value:"lua"},{label:"Python",value:"python"},{label:"R",value:"r"},{label:"Ruby",value:"ruby"},{label:"Rust",value:"rust"},{label:"Switft",value:"swift"},{label:"Typescript",value:"typescript"}],mdxType:"ListPicker",__source:{fileName:c,lineNumber:47}}))})),Object(i.b)("h2",Object(r.a)({id:"listpicker-props"},{__source:{fileName:c,lineNumber:113}}),"ListPicker Props"),Object(i.b)(l.d,{of:s.a,mdxType:"Props",__source:{fileName:c,lineNumber:116}}))}b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Pickers/ListPicker.mdx"}}),b.isMDXComponent=!0},"./src/utils/ControlSize.ts":function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return i});var a=n("./src/theme/Theme.tsx"),r=function(e){return"number"!==typeof e};"undefined"!==typeof r&&r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"isControlSize",filename:"src/utils/ControlSize.ts"}});var i=function(){var e=Object(a.a)();return{getControlHeight:function(t){return"number"===typeof t?t:e.controlHeights[t]},getSmallerTextSize:function(t){switch(function(t){if("number"===typeof t){if(t>=e.controlHeights.large)return"large";if(t>=e.controlHeights.medium)return"medium";if(t>=e.controlHeights.small)return"small";if(t<e.controlHeights.small)return"xsmall"}return t}(t)){case"large":return"medium";case"medium":return"small";case"small":default:return"xsmall"}},getSmallerHeightControlSize:function(t){switch(function(t){if("number"===typeof t){if(t>=e.controlHeights.large)return"large";if(t>=e.controlHeights.medium)return"medium";if(t<e.controlHeights.medium)return"small"}return t}(t)){case"large":return"medium";case"medium":default:return"small"}}}};"undefined"!==typeof i&&i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useControlSizeUtils",filename:"src/utils/ControlSize.ts"}})}}]);
//# sourceMappingURL=30.ee22def8b66aef7b4a31.js.map