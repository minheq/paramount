(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"./src/components/Box/Box.tsx":function(e,o,r){"use strict";var n=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=r("./node_modules/react/index.js"),b=r.n(i),m=r("./node_modules/react-native-web/dist/exports/View/index.js"),t=r("./src/theme/Theme.tsx"),a=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),l=r("./node_modules/dlv/dist/dlv.umd.js"),u=r.n(l),c=r("./src/utils/Overrides.ts");"undefined"!==typeof SpacingProps&&SpacingProps&&SpacingProps===Object(SpacingProps)&&Object.isExtensible(SpacingProps)&&Object.defineProperty(SpacingProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SpacingProps",filename:"src/components/Spacing/Spacing.tsx"}}),"undefined"!==typeof SpacingOverride&&SpacingOverride&&SpacingOverride===Object(SpacingOverride)&&Object.isExtensible(SpacingOverride)&&Object.defineProperty(SpacingOverride,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SpacingOverride",filename:"src/components/Spacing/Spacing.tsx"}});var d=function(e,o){return"number"===typeof e?e:o.spacing[e]};d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getSpacing",filename:"src/components/Spacing/Spacing.tsx"}});var s=function(e){var o=e.size,r=void 0===o?"medium":o,i=e.orientation,l=void 0===i?"vertical":i,s=e.style,p=Object(n.a)(e,["size","orientation","style"]),_=Object(t.a)();return b.a.createElement(m.a,Object(a.a)({style:["vertical"===l?{height:d(r,_)}:{width:d(r,_)},Object(c.b)(e,s),Object(c.b)(e,u()(_,"overrides.Spacing.style"))]},p,{__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Spacing/Spacing.tsx",lineNumber:44}}))};s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Spacing",filename:"src/components/Spacing/Spacing.tsx"}}),r.d(o,"a",function(){return _});"undefined"!==typeof BoxProps&&BoxProps&&BoxProps===Object(BoxProps)&&Object.isExtensible(BoxProps)&&Object.defineProperty(BoxProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxProps",filename:"src/components/Box/Box.tsx"}});var p={backgroundColor:function(e,o){return o.colors.background[e]?{backgroundColor:o.colors.background[e]}:{backgroundColor:e}},elevation:function(e,o){return o.elevations[e]},shape:function(e,o){return o.containerShapes[e]},space:function(e,o){return{padding:d(e,o)}},spaceBottom:function(e,o){return{paddingBottom:d(e,o)}},spaceEnd:function(e,o){return{paddingEnd:d(e,o)}},spaceHorizontal:function(e,o){return{paddingHorizontal:d(e,o)}},spaceLeft:function(e,o){return{paddingLeft:d(e,o)}},spaceRight:function(e,o){return{paddingRight:d(e,o)}},spaceStart:function(e,o){return{paddingStart:d(e,o)}},spaceTop:function(e,o){return{paddingTop:d(e,o)}},spaceVertical:function(e,o){return{paddingVertical:d(e,o)}}},_=function(e){var o=e.children,r=e.testID,i=Object(n.a)(e,["children","testID"]),a=Object(t.a)(),l=[],u={};for(var c in i)if(c){var d=p[c];if(d){var s=d(i[c],a);l.push(s)}else u[c]=i[c]}return b.a.createElement(m.a,{testID:r,style:[u,l],__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Box/Box.tsx",lineNumber:106}},o)};"undefined"!==typeof _&&_&&_===Object(_)&&Object.isExtensible(_)&&Object.defineProperty(_,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Box",filename:"src/components/Box/Box.tsx"}})},"./src/components/Layout/RowAndColumn.mdx":function(e,o,r){"use strict";r.r(o),r.d(o,"default",function(){return N});var n=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),b=(r("./node_modules/react/index.js"),r("./node_modules/@mdx-js/react/dist/index.es.js")),m=r("./node_modules/docz/dist/index.esm.js"),t=r("./src/components/Box/Box.tsx"),a=r("./src/components/Layout/Container.tsx"),l=r("./src/components/Layout/Column.tsx"),u=r("./src/components/Layout/Row.tsx"),c=r("./src/components/Layout/LayoutProvider.tsx"),d=r("./src/components/Typography/Text.tsx"),s="/home/travis/build/WeTrustPlatform/paramount/src/components/Layout/RowAndColumn.mdx",p={},_="wrapper";function N(e){var o=e.components,r=Object(n.a)(e,["components"]);return Object(b.b)(_,Object(i.a)({},p,r,{components:o,mdxType:"MDXLayout",__source:{fileName:s,lineNumber:21}}),Object(b.b)("h1",Object(i.a)({id:"row-and-column"},{__source:{fileName:s,lineNumber:24}}),"Row and Column"),Object(b.b)("p",{__source:{fileName:s,lineNumber:27}},Object(b.b)("inlineCode",{parentName:"p",__source:{fileName:s,lineNumber:27}},"Column")," renders at the width of defined columns count. It will match nearest defined size that is smaller than or equal to current screen size.\n",Object(b.b)("inlineCode",{parentName:"p",__source:{fileName:s,lineNumber:28}},"Row")," wraps ",Object(b.b)("inlineCode",{parentName:"p",__source:{fileName:s,lineNumber:28}},"Column"),"s to keep them horizontal"),Object(b.b)("p",{__source:{fileName:s,lineNumber:29}},"Refer to ",Object(b.b)("inlineCode",{parentName:"p",__source:{fileName:s,lineNumber:29}},"Layout")," docs for setup"),Object(b.b)("h2",Object(i.a)({id:"usage"},{__source:{fileName:s,lineNumber:30}}),"Usage"),Object(b.b)(m.c,{__position:0,__code:'<Box>\n  <LayoutProvider>\n    <Box paddingVertical={16}>\n      <Container>\n        <Row>\n          <Column medium={1}>\n            <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n          </Column>\n          <Column medium={1}>\n            <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n          </Column>\n          <Column medium={1}>\n            <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n          </Column>\n          <Column medium={1}>\n            <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n          </Column>\n          <Column medium={1}>\n            <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n          </Column>\n          <Column medium={1}>\n            <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n          </Column>\n          <Column medium={1}>\n            <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n          </Column>\n          <Column medium={1}>\n            <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n          </Column>\n          <Column medium={1}>\n            <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n          </Column>\n          <Column medium={1}>\n            <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n          </Column>\n          <Column medium={1}>\n            <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n          </Column>\n          <Column medium={1}>\n            <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n          </Column>\n        </Row>\n      </Container>\n    </Box>\n    <Box paddingVertical={16}>\n      <Container>\n        <Row>\n          <Column medium={8}>\n            <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n          </Column>\n          <Column medium={4}>\n            <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n          </Column>\n        </Row>\n      </Container>\n    </Box>\n    <Box paddingVertical={16}>\n      <Container>\n        <Row>\n          <Column medium={4}>\n            <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n          </Column>\n          <Column medium={4}>\n            <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n          </Column>\n          <Column medium={4}>\n            <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n          </Column>\n        </Row>\n      </Container>\n    </Box>\n    <Box paddingVertical={16}>\n      <Container>\n        <Row>\n          <Column medium={6}>\n            <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n          </Column>\n          <Column medium={6}>\n            <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n          </Column>\n        </Row>\n      </Container>\n    </Box>\n  </LayoutProvider>\n</Box>',__scope:{props:this?this.props:r,Playground:m.c,Props:m.d,Box:t.a,Container:a.a,Column:l.a,Row:u.b,LayoutProvider:c.a,Text:d.a},mdxType:"Playground",__source:{fileName:s,lineNumber:33}},Object(b.b)(t.a,{mdxType:"Box",__source:{fileName:s,lineNumber:44}},Object(b.b)(c.a,{mdxType:"LayoutProvider",__source:{fileName:s,lineNumber:45}},Object(b.b)(t.a,{paddingVertical:16,mdxType:"Box",__source:{fileName:s,lineNumber:46}},Object(b.b)(a.a,{mdxType:"Container",__source:{fileName:s,lineNumber:47}},Object(b.b)(u.b,{mdxType:"Row",__source:{fileName:s,lineNumber:48}},Object(b.b)(l.a,{medium:1,mdxType:"Column",__source:{fileName:s,lineNumber:49}},Object(b.b)(t.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:s,lineNumber:50}})),Object(b.b)(l.a,{medium:1,mdxType:"Column",__source:{fileName:s,lineNumber:52}},Object(b.b)(t.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:s,lineNumber:53}})),Object(b.b)(l.a,{medium:1,mdxType:"Column",__source:{fileName:s,lineNumber:55}},Object(b.b)(t.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:s,lineNumber:56}})),Object(b.b)(l.a,{medium:1,mdxType:"Column",__source:{fileName:s,lineNumber:58}},Object(b.b)(t.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:s,lineNumber:59}})),Object(b.b)(l.a,{medium:1,mdxType:"Column",__source:{fileName:s,lineNumber:61}},Object(b.b)(t.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:s,lineNumber:62}})),Object(b.b)(l.a,{medium:1,mdxType:"Column",__source:{fileName:s,lineNumber:64}},Object(b.b)(t.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:s,lineNumber:65}})),Object(b.b)(l.a,{medium:1,mdxType:"Column",__source:{fileName:s,lineNumber:67}},Object(b.b)(t.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:s,lineNumber:68}})),Object(b.b)(l.a,{medium:1,mdxType:"Column",__source:{fileName:s,lineNumber:70}},Object(b.b)(t.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:s,lineNumber:71}})),Object(b.b)(l.a,{medium:1,mdxType:"Column",__source:{fileName:s,lineNumber:73}},Object(b.b)(t.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:s,lineNumber:74}})),Object(b.b)(l.a,{medium:1,mdxType:"Column",__source:{fileName:s,lineNumber:76}},Object(b.b)(t.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:s,lineNumber:77}})),Object(b.b)(l.a,{medium:1,mdxType:"Column",__source:{fileName:s,lineNumber:79}},Object(b.b)(t.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:s,lineNumber:80}})),Object(b.b)(l.a,{medium:1,mdxType:"Column",__source:{fileName:s,lineNumber:82}},Object(b.b)(t.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:s,lineNumber:83}}))))),Object(b.b)(t.a,{paddingVertical:16,mdxType:"Box",__source:{fileName:s,lineNumber:88}},Object(b.b)(a.a,{mdxType:"Container",__source:{fileName:s,lineNumber:89}},Object(b.b)(u.b,{mdxType:"Row",__source:{fileName:s,lineNumber:90}},Object(b.b)(l.a,{medium:8,mdxType:"Column",__source:{fileName:s,lineNumber:91}},Object(b.b)(t.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:s,lineNumber:92}})),Object(b.b)(l.a,{medium:4,mdxType:"Column",__source:{fileName:s,lineNumber:94}},Object(b.b)(t.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:s,lineNumber:95}}))))),Object(b.b)(t.a,{paddingVertical:16,mdxType:"Box",__source:{fileName:s,lineNumber:100}},Object(b.b)(a.a,{mdxType:"Container",__source:{fileName:s,lineNumber:101}},Object(b.b)(u.b,{mdxType:"Row",__source:{fileName:s,lineNumber:102}},Object(b.b)(l.a,{medium:4,mdxType:"Column",__source:{fileName:s,lineNumber:103}},Object(b.b)(t.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:s,lineNumber:104}})),Object(b.b)(l.a,{medium:4,mdxType:"Column",__source:{fileName:s,lineNumber:106}},Object(b.b)(t.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:s,lineNumber:107}})),Object(b.b)(l.a,{medium:4,mdxType:"Column",__source:{fileName:s,lineNumber:109}},Object(b.b)(t.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:s,lineNumber:110}}))))),Object(b.b)(t.a,{paddingVertical:16,mdxType:"Box",__source:{fileName:s,lineNumber:115}},Object(b.b)(a.a,{mdxType:"Container",__source:{fileName:s,lineNumber:116}},Object(b.b)(u.b,{mdxType:"Row",__source:{fileName:s,lineNumber:117}},Object(b.b)(l.a,{medium:6,mdxType:"Column",__source:{fileName:s,lineNumber:118}},Object(b.b)(t.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:s,lineNumber:119}})),Object(b.b)(l.a,{medium:6,mdxType:"Column",__source:{fileName:s,lineNumber:121}},Object(b.b)(t.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:s,lineNumber:122}})))))))),Object(b.b)("h3",Object(i.a)({id:"column-wrapping"},{__source:{fileName:s,lineNumber:130}}),"Column wrapping"),Object(b.b)(m.c,{__position:1,__code:'<LayoutProvider>\n  <Box paddingVertical={16}>\n    <Container>\n      <Row>\n        <Column xsmall={9}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n        <Column xsmall={4}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n        <Column xsmall={6}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n      </Row>\n    </Container>\n  </Box>\n</LayoutProvider>',__scope:{props:this?this.props:r,Playground:m.c,Props:m.d,Box:t.a,Container:a.a,Column:l.a,Row:u.b,LayoutProvider:c.a,Text:d.a},mdxType:"Playground",__source:{fileName:s,lineNumber:133}},Object(b.b)(c.a,{mdxType:"LayoutProvider",__source:{fileName:s,lineNumber:144}},Object(b.b)(t.a,{paddingVertical:16,mdxType:"Box",__source:{fileName:s,lineNumber:145}},Object(b.b)(a.a,{mdxType:"Container",__source:{fileName:s,lineNumber:146}},Object(b.b)(u.b,{mdxType:"Row",__source:{fileName:s,lineNumber:147}},Object(b.b)(l.a,{xsmall:9,mdxType:"Column",__source:{fileName:s,lineNumber:148}},Object(b.b)(t.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:s,lineNumber:149}})),Object(b.b)(l.a,{xsmall:4,mdxType:"Column",__source:{fileName:s,lineNumber:151}},Object(b.b)(t.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:s,lineNumber:152}})),Object(b.b)(l.a,{xsmall:6,mdxType:"Column",__source:{fileName:s,lineNumber:154}},Object(b.b)(t.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:s,lineNumber:155}}))))))),Object(b.b)("h3",Object(i.a)({id:"offsets"},{__source:{fileName:s,lineNumber:162}}),"Offsets"),Object(b.b)(m.c,{__position:2,__code:'<LayoutProvider>\n  <Box paddingVertical={16}>\n    <Container>\n      <Row>\n        <Column offsetXsmall={2} xsmall={6}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n      </Row>\n      <Row>\n        <Column offsetXsmall={4} xsmall={6}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n      </Row>\n      <Row>\n        <Column offsetXsmall={6} xsmall={6}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n      </Row>\n    </Container>\n  </Box>\n</LayoutProvider>',__scope:{props:this?this.props:r,Playground:m.c,Props:m.d,Box:t.a,Container:a.a,Column:l.a,Row:u.b,LayoutProvider:c.a,Text:d.a},mdxType:"Playground",__source:{fileName:s,lineNumber:165}},Object(b.b)(c.a,{mdxType:"LayoutProvider",__source:{fileName:s,lineNumber:176}},Object(b.b)(t.a,{paddingVertical:16,mdxType:"Box",__source:{fileName:s,lineNumber:177}},Object(b.b)(a.a,{mdxType:"Container",__source:{fileName:s,lineNumber:178}},Object(b.b)(u.b,{mdxType:"Row",__source:{fileName:s,lineNumber:179}},Object(b.b)(l.a,{offsetXsmall:2,xsmall:6,mdxType:"Column",__source:{fileName:s,lineNumber:180}},Object(b.b)(t.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:s,lineNumber:181}}))),Object(b.b)(u.b,{mdxType:"Row",__source:{fileName:s,lineNumber:184}},Object(b.b)(l.a,{offsetXsmall:4,xsmall:6,mdxType:"Column",__source:{fileName:s,lineNumber:185}},Object(b.b)(t.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:s,lineNumber:186}}))),Object(b.b)(u.b,{mdxType:"Row",__source:{fileName:s,lineNumber:189}},Object(b.b)(l.a,{offsetXsmall:6,xsmall:6,mdxType:"Column",__source:{fileName:s,lineNumber:190}},Object(b.b)(t.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:s,lineNumber:191}}))))))),Object(b.b)("h3",Object(i.a)({id:"without-gutter"},{__source:{fileName:s,lineNumber:198}}),"Without gutter"),Object(b.b)(m.c,{__position:3,__code:'<LayoutProvider>\n  <Box paddingVertical={16}>\n    <Container>\n      <Row hasGutter={false}>\n        <Column xsmall={6}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n        <Column xsmall={6}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n      </Row>\n    </Container>\n  </Box>\n</LayoutProvider>',__scope:{props:this?this.props:r,Playground:m.c,Props:m.d,Box:t.a,Container:a.a,Column:l.a,Row:u.b,LayoutProvider:c.a,Text:d.a},mdxType:"Playground",__source:{fileName:s,lineNumber:201}},Object(b.b)(c.a,{mdxType:"LayoutProvider",__source:{fileName:s,lineNumber:212}},Object(b.b)(t.a,{paddingVertical:16,mdxType:"Box",__source:{fileName:s,lineNumber:213}},Object(b.b)(a.a,{mdxType:"Container",__source:{fileName:s,lineNumber:214}},Object(b.b)(u.b,{hasGutter:!1,mdxType:"Row",__source:{fileName:s,lineNumber:215}},Object(b.b)(l.a,{xsmall:6,mdxType:"Column",__source:{fileName:s,lineNumber:216}},Object(b.b)(t.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:s,lineNumber:217}})),Object(b.b)(l.a,{xsmall:6,mdxType:"Column",__source:{fileName:s,lineNumber:219}},Object(b.b)(t.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:s,lineNumber:220}}))))))),Object(b.b)("h2",Object(i.a)({id:"row-props"},{__source:{fileName:s,lineNumber:227}}),"Row Props"),Object(b.b)(m.d,{of:u.b,mdxType:"Props",__source:{fileName:s,lineNumber:230}}),Object(b.b)("h2",Object(i.a)({id:"row-customization"},{__source:{fileName:s,lineNumber:231}}),"Row Customization"),Object(b.b)("p",{__source:{fileName:s,lineNumber:234}},"Using ",Object(b.b)("inlineCode",{parentName:"p",__source:{fileName:s,lineNumber:234}},"getStyles")," prop"),Object(b.b)("pre",{__source:{fileName:s,lineNumber:235}},Object(b.b)("code",Object(i.a)({parentName:"pre"},{},{__source:{fileName:s,lineNumber:235}}),"RowStyles {\n  rowStyle: ViewStyle;\n}\n\ngetStyles={(RowProps, Theme) => RowStyles}\n")),Object(b.b)("p",{__source:{fileName:s,lineNumber:241}},"Markup"),Object(b.b)("pre",{__source:{fileName:s,lineNumber:242}},Object(b.b)("code",Object(i.a)({parentName:"pre"},{className:"language-tsx"},{__source:{fileName:s,lineNumber:242}}),"<View rowStyle />\n")),Object(b.b)("h2",Object(i.a)({id:"column-props"},{__source:{fileName:s,lineNumber:246}}),"Column Props"),Object(b.b)(m.d,{of:l.a,mdxType:"Props",__source:{fileName:s,lineNumber:249}}),Object(b.b)("h2",Object(i.a)({id:"column-customization"},{__source:{fileName:s,lineNumber:250}}),"Column Customization"),Object(b.b)("p",{__source:{fileName:s,lineNumber:253}},"Using ",Object(b.b)("inlineCode",{parentName:"p",__source:{fileName:s,lineNumber:253}},"getStyles")," prop"),Object(b.b)("pre",{__source:{fileName:s,lineNumber:254}},Object(b.b)("code",Object(i.a)({parentName:"pre"},{},{__source:{fileName:s,lineNumber:254}}),"ColumnStyles {\n  columnStyle: ViewStyle;\n}\n\ngetStyles={(ColumnProps, Theme) => ColumnStyles}\n")),Object(b.b)("p",{__source:{fileName:s,lineNumber:260}},"Markup"),Object(b.b)("pre",{__source:{fileName:s,lineNumber:261}},Object(b.b)("code",Object(i.a)({parentName:"pre"},{className:"language-tsx"},{__source:{fileName:s,lineNumber:261}}),"<View columnStyle />\n")))}N&&N===Object(N)&&Object.isExtensible(N)&&Object.defineProperty(N,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Layout/RowAndColumn.mdx"}}),N.isMDXComponent=!0}}]);
//# sourceMappingURL=36.ee22def8b66aef7b4a31.js.map