(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"./src/components/Dialog/Dialog.mdx":function(e,t,o){"use strict";o.r(t),o.d(t,"default",function(){return j});var n=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),r=(o("./node_modules/react/index.js"),o("./node_modules/@mdx-js/react/dist/index.es.js")),a=o("./node_modules/docz/dist/index.esm.js"),s=o("./src/components/Box/Box.tsx"),l=o("./src/components/Button/Button.tsx"),c=o("./src/components/Dialog/Dialog.tsx"),d=o("./src/components/Typography/Heading.tsx"),m=o("./src/components/Icon/Icon.web.tsx"),u=o("./src/components/Typography/Text.tsx"),b=o("./src/components/Helpers/Toggle.tsx"),p="/home/travis/build/WeTrustPlatform/paramount/src/components/Dialog/Dialog.mdx",g={},f="wrapper";function j(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(r.b)(f,Object(i.a)({},g,o,{components:t,mdxType:"MDXLayout",__source:{fileName:p,lineNumber:21}}),Object(r.b)("h1",Object(i.a)({id:"dialog"},{__source:{fileName:p,lineNumber:24}}),"Dialog"),Object(r.b)("p",{__source:{fileName:p,lineNumber:27}},"Display centered window on the screen over a dark overlay"),Object(r.b)("h2",Object(i.a)({id:"usage"},{__source:{fileName:p,lineNumber:28}}),"Usage"),Object(r.b)(a.c,{__position:0,__code:'<Toggle initial={false}>\n  {({ on, toggle }) => (\n    <Box>\n      <Dialog\n        isVisible={on}\n        onRequestClose={toggle}\n        overrides={{\n          Header: {\n            component: () => <Heading>Header</Heading>,\n          },\n          Footer: {\n            component: () => <Heading>Footer</Heading>,\n          },\n        }}\n      >\n        <Box height={1800}>\n          <Text>Put any content in the dialog</Text>\n        </Box>\n      </Dialog>\n      <Button onPress={toggle} title="Open dialog" />\n    </Box>\n  )}\n</Toggle>',__scope:{props:this?this.props:o,Playground:a.c,Props:a.d,Box:s.a,Button:l.a,Dialog:c.a,Heading:d.a,Icon:m.a,Text:u.a,Toggle:b.a},mdxType:"Playground",__source:{fileName:p,lineNumber:31}},Object(r.b)(b.a,{initial:!1,mdxType:"Toggle",__source:{fileName:p,lineNumber:43}},function(e){var t=e.on,o=e.toggle;return Object(r.b)(s.a,{mdxType:"Box",__source:{fileName:p,lineNumber:47}},Object(r.b)(c.a,{isVisible:t,onRequestClose:o,overrides:{Header:{component:function(){return Object(r.b)(d.a,{mdxType:"Heading",__source:{fileName:p,lineNumber:50}},"Header")}},Footer:{component:function(){return Object(r.b)(d.a,{mdxType:"Heading",__source:{fileName:p,lineNumber:53}},"Footer")}}},mdxType:"Dialog",__source:{fileName:p,lineNumber:48}},Object(r.b)(s.a,{height:1800,mdxType:"Box",__source:{fileName:p,lineNumber:56}},Object(r.b)(u.a,{mdxType:"Text",__source:{fileName:p,lineNumber:57}},"Put any content in the dialog"))),Object(r.b)(l.a,{onPress:o,title:"Open dialog",mdxType:"Button",__source:{fileName:p,lineNumber:60}}))})),Object(r.b)("h2",Object(i.a)({id:"props"},{__source:{fileName:p,lineNumber:64}}),"Props"),Object(r.b)(a.d,{of:c.a,mdxType:"Props",__source:{fileName:p,lineNumber:67}}))}j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Dialog/Dialog.mdx"}}),j.isMDXComponent=!0},"./src/components/Dialog/Dialog.tsx":function(e,t,o){"use strict";o.d(t,"a",function(){return f});var n=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),r=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),a=o("./node_modules/dlv/dist/dlv.umd.js"),s=o.n(a),l=o("./node_modules/react/index.js"),c=o("./node_modules/react-native-web/dist/exports/ScrollView/index.js"),d=o("./node_modules/react-native-web/dist/exports/View/index.js"),m=o("./src/theme/Theme.tsx"),u=o("./src/utils/overrides.ts"),b=o("./src/components/Modal/HistoryModal.web.tsx"),p=o("./src/components/Overlay/Overlay.tsx"),g="/home/travis/build/WeTrustPlatform/paramount/src/components/Dialog/Dialog.tsx";"undefined"!==typeof DialogOverrides&&DialogOverrides&&DialogOverrides===Object(DialogOverrides)&&Object.isExtensible(DialogOverrides)&&Object.defineProperty(DialogOverrides,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DialogOverrides",filename:"src/components/Dialog/Dialog.tsx"}}),"undefined"!==typeof DialogProps&&DialogProps&&DialogProps===Object(DialogProps)&&Object.isExtensible(DialogProps)&&Object.defineProperty(DialogProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DialogProps",filename:"src/components/Dialog/Dialog.tsx"}});var f=function(e){var t=e.children,o=e.shouldLockBodyScroll,n=void 0===o||o,a=e.isVisible,c=void 0!==a&&a,d=e.onRequestClose,f=void 0===d?function(){return null}:d,v=e.useHistory,h=void 0!==v&&v,N=e.overrides,D=void 0===N?{}:N,H=Object(m.b)(),P=Object(u.a)(j,e,s()(H,"overrides.Dialog.Root"),D.Root),T=Object(r.a)(P,2),w=T[0],E=T[1],B=Object(u.a)(_,e,s()(H,"overrides.Dialog.Content"),D.Content),C=Object(r.a)(B,2),R=C[0],W=C[1],F=Object(u.a)(y,e,s()(H,"overrides.Dialog.Body"),D.Body),S=Object(r.a)(F,2),z=S[0],k=S[1],q=Object(u.a)(p.a,e,s()(H,"overrides.Dialog.Overlay"),D.Overlay),I=Object(r.a)(q,2),L=I[0],M=I[1],V=Object(u.a)(x,e,s()(H,"overrides.Dialog.Header"),D.Header),X=Object(r.a)(V,2),A=X[0],J=X[1],U=Object(u.a)(O,e,s()(H,"overrides.Dialog.Footer"),D.Footer),G=Object(r.a)(U,2),K=G[0],Q=G[1];return l.createElement(b.a,{useHistory:h,visible:c,transparent:!0,animationType:"fade",onRequestClose:f,shouldLockBodyScroll:n,__source:{fileName:g,lineNumber:97}},l.createElement(w,Object(i.a)({},E,{__source:{fileName:g,lineNumber:105}}),l.createElement(R,Object(i.a)({},W,{__source:{fileName:g,lineNumber:106}}),l.createElement(A,Object(i.a)({onRequestClose:f},J,{__source:{fileName:g,lineNumber:107}})),l.createElement(z,Object(i.a)({},k,{__source:{fileName:g,lineNumber:108}}),t),l.createElement(K,Object(i.a)({onRequestClose:f},Q,{__source:{fileName:g,lineNumber:109}}))),l.createElement(L,Object(i.a)({onPress:f},M,{__source:{fileName:g,lineNumber:111}}))))};"undefined"!==typeof f&&f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Dialog",filename:"src/components/Dialog/Dialog.tsx"}});var j=function(e){var t=e.children,o=e.style,r=Object(n.a)(e,["children","style"]);return l.createElement(d.a,Object(i.a)({style:[{alignItems:"center",display:"flex",height:"100%",justifyContent:"center",width:"100%"},o]},r,{__source:{fileName:g,lineNumber:127}}),t)},_=function(e){var t=e.children,o=e.style,r=Object(n.a)(e,["children","style"]),a=Object(m.b)();return l.createElement(d.a,Object(i.a)({style:[{backgroundColor:"white",borderRadius:a.controlBorderRadius.medium,elevation:1,maxHeight:"80%",maxWidth:600,minWidth:280,position:"relative",zIndex:1},o]},r,{__source:{fileName:g,lineNumber:152}}),t)},O=function(e){return l.createElement(l.Fragment,null)},x=function(e){return l.createElement(l.Fragment,null)},y=function(e){var t=e.children,o=e.style,r=Object(n.a)(e,["children","style"]);return l.createElement(c.a,Object(i.a)({style:[{maxHeight:400},o]},r,{__source:{fileName:g,lineNumber:200}}),t)}},"./src/components/Typography/Heading.tsx":function(e,t,o){"use strict";o.d(t,"a",function(){return p});var n=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),i=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),r=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=o("./node_modules/dlv/dist/dlv.umd.js"),s=o.n(a),l=o("./node_modules/react/index.js"),c=o("./node_modules/react-native-web/dist/exports/Platform/index.js"),d=o("./node_modules/react-native-web/dist/exports/Text/index.js"),m=o("./src/theme/Theme.tsx"),u=o("./src/utils/overrides.ts"),b=o("./src/components/Typography/Text.tsx");"undefined"!==typeof HeadingProps&&HeadingProps&&HeadingProps===Object(HeadingProps)&&Object.isExtensible(HeadingProps)&&Object.defineProperty(HeadingProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HeadingProps",filename:"src/components/Typography/Heading.tsx"}}),"undefined"!==typeof HeadingOverride&&HeadingOverride&&HeadingOverride===Object(HeadingOverride)&&Object.isExtensible(HeadingOverride)&&Object.defineProperty(HeadingOverride,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HeadingOverride",filename:"src/components/Typography/Heading.tsx"}});var p=function(e){var t=e.children,o=e.accessibilityLevel,a=e.size,p=void 0===a?"medium":a,f=e.align,j=void 0===f?"left":f,_=e.color,O=void 0===_?"default":_,x=e.weight,y=e.style,v=Object(r.a)(e,["children","accessibilityLevel","size","align","color","weight","style"]),h=Object(m.b)(),N=g(h.headingSizes)(p);return l.createElement(d.a,Object(n.a)({accessibilityRole:"web"===c.a.OS?"heading":"none","aria-level":o,style:[Object(i.a)({},N,{color:Object(b.c)(h.colors.text)(O),fontFamily:h.fontFamilies.heading,fontWeight:Object(b.b)(h.fontWeights)(x)||N.fontWeight,textAlign:j}),Object(u.b)(e,y),Object(u.b)(e,s()(h,"overrides.Heading.style"))]},v,{__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Typography/Heading.tsx",lineNumber:77}}),t)};"undefined"!==typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Heading",filename:"src/components/Typography/Heading.tsx"}});var g=function(e){return function(t){return e[t]||{fontSize:t}}};"undefined"!==typeof g&&g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getHeadingSize",filename:"src/components/Typography/Heading.tsx"}})}}]);
//# sourceMappingURL=34.8f268ae8d65d7c0f3f9a.js.map