(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"./src/components/Dialog/Dialog.mdx":function(e,o,n){"use strict";n.r(o),n.d(o,"default",function(){return N});var t=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),a=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),l=n("./node_modules/docz/dist/index.esm.js"),r=n("./src/components/Box/Box.tsx"),s=n("./src/components/Button/Button.tsx"),c=n("./src/components/Dialog/Dialog.tsx"),m=n("./src/components/Typography/Heading.tsx"),b=n("./src/components/Icon/Icon.web.tsx"),u=n("./src/components/Typography/Text.tsx"),d=n("./src/components/Helpers/Toggle.tsx"),p="/home/travis/build/WeTrustPlatform/paramount/src/components/Dialog/Dialog.mdx",g={},_="wrapper";function N(e){var o=e.components,n=Object(t.a)(e,["components"]);return Object(a.b)(_,Object(i.a)({},g,n,{components:o,mdxType:"MDXLayout",__source:{fileName:p,lineNumber:21}}),Object(a.b)("h1",Object(i.a)({id:"dialog"},{__source:{fileName:p,lineNumber:24}}),"Dialog"),Object(a.b)("p",{__source:{fileName:p,lineNumber:27}},"Display centered window on the screen over a dark overlay"),Object(a.b)("h2",Object(i.a)({id:"usage"},{__source:{fileName:p,lineNumber:28}}),"Usage"),Object(a.b)(l.c,{__position:0,__code:'<Toggle initial={false}>\n  {({ on, toggle }) => (\n    <Box>\n      <Dialog\n        header={<Heading>Header</Heading>}\n        footer={<Heading>Footer</Heading>}\n        isVisible={on}\n        onRequestClose={toggle}\n      >\n        <Box height={1800}>\n          <Text>Put any content in the dialog</Text>\n        </Box>\n      </Dialog>\n      <Button onPress={toggle} title="Open dialog" />\n    </Box>\n  )}\n</Toggle>',__scope:{props:this?this.props:n,Playground:l.c,Props:l.d,Box:r.a,Button:s.a,Dialog:c.a,Heading:m.a,Icon:b.a,Text:u.a,Toggle:d.a},mdxType:"Playground",__source:{fileName:p,lineNumber:31}},Object(a.b)(d.a,{initial:!1,mdxType:"Toggle",__source:{fileName:p,lineNumber:43}},function(e){var o=e.on,n=e.toggle;return Object(a.b)(r.a,{mdxType:"Box",__source:{fileName:p,lineNumber:47}},Object(a.b)(c.a,{header:Object(a.b)(m.a,{mdxType:"Heading",__source:{fileName:p,lineNumber:48}},"Header"),footer:Object(a.b)(m.a,{mdxType:"Heading",__source:{fileName:p,lineNumber:48}},"Footer"),isVisible:o,onRequestClose:n,mdxType:"Dialog",__source:{fileName:p,lineNumber:48}},Object(a.b)(r.a,{height:1800,mdxType:"Box",__source:{fileName:p,lineNumber:49}},Object(a.b)(u.a,{mdxType:"Text",__source:{fileName:p,lineNumber:50}},"Put any content in the dialog"))),Object(a.b)(s.a,{onPress:n,title:"Open dialog",mdxType:"Button",__source:{fileName:p,lineNumber:53}}))})),Object(a.b)("h2",Object(i.a)({id:"props"},{__source:{fileName:p,lineNumber:57}}),"Props"),Object(a.b)(l.d,{of:c.a,mdxType:"Props",__source:{fileName:p,lineNumber:60}}),Object(a.b)("h2",Object(i.a)({id:"customization"},{__source:{fileName:p,lineNumber:61}}),"Customization"),Object(a.b)("p",{__source:{fileName:p,lineNumber:64}},"Using ",Object(a.b)("inlineCode",{parentName:"p",__source:{fileName:p,lineNumber:64}},"getStyles")," prop"),Object(a.b)("pre",{__source:{fileName:p,lineNumber:65}},Object(a.b)("code",Object(i.a)({parentName:"pre"},{},{__source:{fileName:p,lineNumber:65}}),"DialogStyles {\n  bodyStyle: ViewStyle;\n  containerStyle: ViewStyle;\n  modalContainerStyle: ViewStyle;\n  contentContainerStyle: ViewStyle;\n  overlayStyle: ViewStyle;\n}\n\ngetStyles={(DialogProps, Theme) => DialogStyles}\n")),Object(a.b)("p",{__source:{fileName:p,lineNumber:75}},"Markup"),Object(a.b)("pre",{__source:{fileName:p,lineNumber:76}},Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-tsx"},{__source:{fileName:p,lineNumber:76}}),"<View modalContainerStyle>\n  <View containerStyle>\n    {header}\n    <ScrollView contentContainerStyle bodyStyle>\n      {children}\n    </ScrollView>\n    {footer}\n  </View>\n  <Overlay overlayStyle />\n</View>\n")))}N&&N===Object(N)&&Object.isExtensible(N)&&Object.defineProperty(N,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Dialog/Dialog.mdx"}}),N.isMDXComponent=!0}}]);
//# sourceMappingURL=40.fda0a51c017c9ba0378c.js.map