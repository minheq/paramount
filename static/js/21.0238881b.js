(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"./src/components/Box/Box.tsx":function(e,n,t){"use strict";var o=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),l=t("./node_modules/react/index.js"),r=t.n(l),a=t("./node_modules/react-native-web/dist/exports/View/index.js"),s=t("./src/theme/Theme.tsx"),i=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),c=t("./node_modules/dlv/dist/dlv.umd.js"),p=t.n(c),b=t("./src/utils/Overrides.ts");"undefined"!==typeof SpacingProps&&SpacingProps&&SpacingProps===Object(SpacingProps)&&Object.isExtensible(SpacingProps)&&Object.defineProperty(SpacingProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SpacingProps",filename:"src/components/Spacing/Spacing.tsx"}}),"undefined"!==typeof SpacingOverride&&SpacingOverride&&SpacingOverride===Object(SpacingOverride)&&Object.isExtensible(SpacingOverride)&&Object.defineProperty(SpacingOverride,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SpacingOverride",filename:"src/components/Spacing/Spacing.tsx"}});var u=function(e,n){return"number"===typeof e?e:n.spacing[e]};u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getSpacing",filename:"src/components/Spacing/Spacing.tsx"}});var d=function(e){var n=e.size,t=void 0===n?"medium":n,l=e.orientation,c=void 0===l?"vertical":l,d=e.style,m=Object(o.a)(e,["size","orientation","style"]),f=Object(s.a)();return r.a.createElement(a.a,Object(i.a)({style:["vertical"===c?{height:u(t,f)}:{width:u(t,f)},Object(b.b)(e,d),Object(b.b)(e,p()(f,"overrides.Spacing.style"))]},m,{__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Spacing/Spacing.tsx",lineNumber:44}}))};d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Spacing",filename:"src/components/Spacing/Spacing.tsx"}}),t.d(n,"a",function(){return f});"undefined"!==typeof BoxProps&&BoxProps&&BoxProps===Object(BoxProps)&&Object.isExtensible(BoxProps)&&Object.defineProperty(BoxProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxProps",filename:"src/components/Box/Box.tsx"}});var m={backgroundColor:function(e,n){return n.colors.background[e]?{backgroundColor:n.colors.background[e]}:{backgroundColor:e}},elevation:function(e,n){return n.elevations[e]},shape:function(e,n){return n.containerShapes[e]},space:function(e,n){return{padding:u(e,n)}},spaceBottom:function(e,n){return{paddingBottom:u(e,n)}},spaceEnd:function(e,n){return{paddingEnd:u(e,n)}},spaceHorizontal:function(e,n){return{paddingHorizontal:u(e,n)}},spaceLeft:function(e,n){return{paddingLeft:u(e,n)}},spaceRight:function(e,n){return{paddingRight:u(e,n)}},spaceStart:function(e,n){return{paddingStart:u(e,n)}},spaceTop:function(e,n){return{paddingTop:u(e,n)}},spaceVertical:function(e,n){return{paddingVertical:u(e,n)}}},f=function(e){var n=e.children,t=e.testID,l=Object(o.a)(e,["children","testID"]),i=Object(s.a)(),c=[],p={};for(var b in l)if(b){var u=m[b];if(u){var d=u(l[b],i);c.push(d)}else p[b]=l[b]}return r.a.createElement(a.a,{testID:t,style:[p,c],__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Box/Box.tsx",lineNumber:106}},n)};"undefined"!==typeof f&&f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Box",filename:"src/components/Box/Box.tsx"}})},"./src/components/Collapsible/Collapsible.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return d});var o=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),l=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),r=(t("./node_modules/react/index.js"),t("./node_modules/@mdx-js/react/dist/index.es.js")),a=t("./node_modules/docz/dist/index.esm.js"),s=t("./src/components/Box/Box.tsx"),i=t("./src/components/Collapsible/Collapsible.tsx"),c=t("./src/components/Helpers/Toggle.tsx"),p="/home/travis/build/WeTrustPlatform/paramount/src/components/Collapsible/Collapsible.mdx",b={},u="wrapper";function d(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)(u,Object(l.a)({},b,t,{components:n,mdxType:"MDXLayout",__source:{fileName:p,lineNumber:21}}),Object(r.b)("h1",Object(l.a)({id:"collapsible"},{__source:{fileName:p,lineNumber:23}}),"Collapsible"),Object(r.b)("p",{__source:{fileName:p,lineNumber:26}},"Component to reveal and hide content"),Object(r.b)("h2",Object(l.a)({id:"usage"},{__source:{fileName:p,lineNumber:27}}),"Usage"),Object(r.b)(a.c,{__position:0,__code:'<Toggle initial={false}>\n  {({ on, toggle }) => (\n    <Collapsible\n      title={\n        on ? \'Close controlled collapsible\' : \'Open controlled collapsible\'\n      }\n      isOpen={on}\n      onOpen={toggle}\n      onClose={toggle}\n    >\n      <Box\n        marginVertical={16}\n        justifyContent="center"\n        alignItems="center"\n        height={300}\n        backgroundColor="#67c6bb"\n      />\n    </Collapsible>\n  )}\n</Toggle>\n<Collapsible title="Uncontrolled collapsible">\n  <Box\n    marginVertical={16}\n    justifyContent="center"\n    alignItems="center"\n    height={300}\n    backgroundColor="#67c6bb"\n  />\n</Collapsible>',__scope:{props:this?this.props:t,Playground:a.c,Props:a.d,Box:s.a,Collapsible:i.a,Toggle:c.a},mdxType:"Playground",__source:{fileName:p,lineNumber:30}},Object(r.b)(c.a,{initial:!1,mdxType:"Toggle",__source:{fileName:p,lineNumber:38}},function(e){var n=e.on,t=e.toggle;return Object(r.b)(i.a,{title:n?"Close controlled collapsible":"Open controlled collapsible",isOpen:n,onOpen:t,onClose:t,mdxType:"Collapsible",__source:{fileName:p,lineNumber:42}},Object(r.b)(s.a,{marginVertical:16,justifyContent:"center",alignItems:"center",height:300,backgroundColor:"#67c6bb",mdxType:"Box",__source:{fileName:p,lineNumber:43}}))}),Object(r.b)(i.a,{title:"Uncontrolled collapsible",mdxType:"Collapsible",__source:{fileName:p,lineNumber:46}},Object(r.b)(s.a,{marginVertical:16,justifyContent:"center",alignItems:"center",height:300,backgroundColor:"#67c6bb",mdxType:"Box",__source:{fileName:p,lineNumber:47}}))),Object(r.b)("h2",Object(l.a)({id:"props"},{__source:{fileName:p,lineNumber:50}}),"Props"),Object(r.b)(a.d,{of:i.a,mdxType:"Props",__source:{fileName:p,lineNumber:53}}))}d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Collapsible/Collapsible.mdx"}}),d.isMDXComponent=!0},"./src/components/Collapsible/Collapsible.tsx":function(e,n,t){"use strict";t.d(n,"a",function(){return O});var o=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),l=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),r=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),a=t("./node_modules/dlv/dist/dlv.umd.js"),s=t.n(a),i=t("./node_modules/react/index.js"),c=t.n(i),p=t("./node_modules/react-native-web/dist/exports/TouchableOpacity/index.js"),b=t("./node_modules/react-native-web/dist/exports/View/index.js"),u=t("./src/theme/Theme.tsx"),d=t("./src/utils/Overrides.ts"),m=t("./src/components/Icon/Icon.web.tsx"),f=t("./src/components/Typography/Text.tsx"),g="/home/travis/build/WeTrustPlatform/paramount/src/components/Collapsible/Collapsible.tsx";"undefined"!==typeof CollapsibleOverrides&&CollapsibleOverrides&&CollapsibleOverrides===Object(CollapsibleOverrides)&&Object.isExtensible(CollapsibleOverrides)&&Object.defineProperty(CollapsibleOverrides,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CollapsibleOverrides",filename:"src/components/Collapsible/Collapsible.tsx"}}),"undefined"!==typeof CollapsibleProps&&CollapsibleProps&&CollapsibleProps===Object(CollapsibleProps)&&Object.isExtensible(CollapsibleProps)&&Object.defineProperty(CollapsibleProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CollapsibleProps",filename:"src/components/Collapsible/Collapsible.tsx"}});var O=function(e){var n=e.title,t=e.children,o=e.initialIsOpen,a=void 0!==o&&o,i=e.isOpen,p=e.testID,b=e.onOpen,m=void 0===b?function(){}:b,f=e.onClose,O=void 0===f?function(){}:f,v=e.overrides,P=void 0===v?{}:v,h=Object(u.a)(),N=c.a.useState(a),T=Object(r.a)(N,2),S=T[0],E=T[1],B="boolean"===typeof i,w=B?i:S,I=c.a.useCallback(function(){B?i?O():m():S?(E(!1),O()):(E(!0),m())},[B,i,O,m,S]),k=Object(d.a)(j,e,{testID:p,onPress:I},s()(h,"overrides.Collapsible.Touchable"),P.Touchable),D=Object(r.a)(k,2),R=D[0],V=D[1],z=Object(d.a)(_,e,{title:n},s()(h,"overrides.Collapsible.Title"),P.Title),H=Object(r.a)(z,2),W=H[0],L=H[1],M=Object(d.a)(x,e,{isOpened:!!w},s()(h,"overrides.Collapsible.Content"),P.Content),U=Object(r.a)(M,2),X=U[0],A=U[1],J=Object(d.a)(C,e,{},s()(h,"overrides.Collapsible.IconOpen"),P.IconOpen),F=Object(r.a)(J,2),q=F[0],G=F[1],K=Object(d.a)(y,e,{},s()(h,"overrides.Collapsible.IconClose"),P.IconClose),Q=Object(r.a)(K,2),Y=Q[0],Z=Q[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(R,Object(l.a)({},V,{__source:{fileName:g,lineNumber:134}}),c.a.createElement(W,Object(l.a)({},L,{__source:{fileName:g,lineNumber:135}})),w?c.a.createElement(Y,Object(l.a)({},Z,{__source:{fileName:g,lineNumber:137}})):c.a.createElement(q,Object(l.a)({},G,{__source:{fileName:g,lineNumber:139}}))),c.a.createElement(X,Object(l.a)({},A,{__source:{fileName:g,lineNumber:142}}),t))};"undefined"!==typeof O&&O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Collapsible",filename:"src/components/Collapsible/Collapsible.tsx"}});var j=function(e){var n=e.style,t=e.children,r=Object(o.a)(e,["style","children"]);return c.a.createElement(p.a,Object(l.a)({style:[{alignItems:"center",display:"flex",flexDirection:"row"},n]},r,{__source:{fileName:g,lineNumber:155}}),t)},_=function(e){var n=e.title,t=e.style,r=Object(o.a)(e,["title","style"]);return n?c.a.createElement(f.a,Object(l.a)({size:"large",style:[{},Object(d.b)(e,t)]},r,{__source:{fileName:g,lineNumber:181}}),n):null},x=function(e){var n=e.children,t=e.style,r=e.isOpened,a=Object(o.a)(e,["children","style","isOpened"]);return c.a.createElement(b.a,Object(l.a)({style:[{paddingLeft:4},t]},a,{__source:{fileName:g,lineNumber:196}}),r&&n)},v=function(e){var n=e.showOpen,t=Object(u.a)();return c.a.createElement(b.a,{style:{paddingLeft:4},__source:{fileName:g,lineNumber:211}},c.a.createElement(m.a,{size:"large",name:n?"chevron-up":"chevron-down",color:t.colors.text.default,__source:{fileName:g,lineNumber:212}}))},C=function(){return c.a.createElement(v,{showOpen:!1,__source:{fileName:g,lineNumber:224}})},y=function(){return c.a.createElement(v,{showOpen:!0,__source:{fileName:g,lineNumber:226}})}},"./src/components/Helpers/Toggle.tsx":function(e,n,t){"use strict";t.d(n,"a",function(){return a});var o=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),l=t("./node_modules/react/index.js"),r=t.n(l);"undefined"!==typeof ToggleRenderProps&&ToggleRenderProps&&ToggleRenderProps===Object(ToggleRenderProps)&&Object.isExtensible(ToggleRenderProps)&&Object.defineProperty(ToggleRenderProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ToggleRenderProps",filename:"src/components/Helpers/Toggle.tsx"}}),"undefined"!==typeof ToggleProps&&ToggleProps&&ToggleProps===Object(ToggleProps)&&Object.isExtensible(ToggleProps)&&Object.defineProperty(ToggleProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ToggleProps",filename:"src/components/Helpers/Toggle.tsx"}});var a=function(e){var n=e.children,t=e.initial,l=void 0!==t&&t,a=r.a.useState(l),s=Object(o.a)(a,2),i=s[0],c=s[1],p=r.a.useCallback(function(){c(!i)},[i]),b=r.a.useCallback(function(e){c(e)},[]);return n({on:i,toggle:p,set:b})};"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Toggle",filename:"src/components/Helpers/Toggle.tsx"}})}}]);
//# sourceMappingURL=21.ee22def8b66aef7b4a31.js.map