(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"./src/components/Box/Box.mdx":function(e,o,n){var t=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(o,"__esModule",{value:!0}),o.default=u;var r=t(n("./node_modules/@babel/runtime/helpers/extends.js")),i=t(n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),s=(t(n("./node_modules/react/index.js")),n("./node_modules/@mdx-js/react/dist/index.es.js")),a=n("./node_modules/docz/dist/index.esm.js"),d=n("./src/components/Box/Box.tsx"),p={},l="wrapper";function u(e){var o=e.components,n=(0,i.default)(e,["components"]);return(0,s.mdx)(l,(0,r.default)({},p,n,{components:o,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"box"},"Box"),(0,s.mdx)("p",null,"Box is a primitive component for convenient layout of components. All style properties are passed as props and has some convenient props such as ",(0,s.mdx)("inlineCode",{parentName:"p"},"paddingHorizontal"),", ",(0,s.mdx)("inlineCode",{parentName:"p"},"marginVertical"),", ",(0,s.mdx)("inlineCode",{parentName:"p"},"shape")," for styling"),(0,s.mdx)("h3",{id:"usage"},"Usage"),(0,s.mdx)(a.Playground,{__position:0,__code:'<Box\n  paddingVertical={40}\n  paddingHorizontal={40}\n  height={200}\n  width={200}\n  backgroundColor="#67c6bb"\n/>',__scope:{props:this?this.props:n,Playground:a.Playground,Props:a.Props,Box:d.Box},mdxType:"Playground"},(0,s.mdx)(d.Box,{paddingVertical:40,paddingHorizontal:40,height:200,width:200,backgroundColor:"#67c6bb",mdxType:"Box"})))}u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Box/Box.mdx"}}),u.isMDXComponent=!0},"./src/components/Box/Box.tsx":function(e,o,n){var t=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(o,"__esModule",{value:!0}),o.Box=o.shapeMapping=o.BASE_BORDER_RADII=void 0;var i=r(n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),s=t(n("./node_modules/react/index.js")),a=n("./node_modules/react-native-web/dist/index.js"),d=n("./src/theme/index.ts");o.BASE_BORDER_RADII=4,4===Object(4)&&Object.isExtensible(4)&&Object.defineProperty(4,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BASE_BORDER_RADII",filename:"src/components/Box/Box.tsx"}}),"undefined"!==typeof Shape&&Shape&&Shape===Object(Shape)&&Object.isExtensible(Shape)&&Object.defineProperty(Shape,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Shape",filename:"src/components/Box/Box.tsx"}}),"undefined"!==typeof BoxProps&&BoxProps&&BoxProps===Object(BoxProps)&&Object.isExtensible(BoxProps)&&Object.defineProperty(BoxProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxProps",filename:"src/components/Box/Box.tsx"}});var p={circle:{borderRadius:999},pill:{borderRadius:999},rounded:{borderRadius:4},roundedBottom:{borderBottomLeftRadius:4,borderBottomRightRadius:4},roundedLeft:{borderBottomLeftRadius:4,borderTopLeftRadius:4},roundedRight:{borderBottomRightRadius:4,borderTopRightRadius:4},roundedTop:{borderTopLeftRadius:4,borderTopRightRadius:4},square:{borderRadius:0}};o.shapeMapping=p,"undefined"!==typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"shapeMapping",filename:"src/components/Box/Box.tsx"}});var l={elevation:function(e,o){return o.elevations[e]},shape:function(e){function o(o){return e.apply(this,arguments)}return o.toString=function(){return e.toString()},o}(function(e){return p[e]})},u=function(e){var o=e.children,n=e.style,t=e.testID,r=(0,i.default)(e,["children","style","testID"]),p=(0,d.useTheme)(),u=[],c={};for(var m in r)if(m){var b=l[m];if(b){var x=b(r[m],p);u.push(x)}else c[m]=r[m]}return s.createElement(a.View,{testID:t,style:[c,u,n]},o)};o.Box=u,u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Box",filename:"src/components/Box/Box.tsx"}})}}]);
//# sourceMappingURL=33.76eade9a8b38486f696c.js.map