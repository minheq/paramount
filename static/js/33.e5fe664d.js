(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"./src/components/Layout/Box.tsx":function(e,n,o){var t=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),i=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(n,"__esModule",{value:!0}),n.Box=n.shapeMapping=n.BASE_BORDER_RADII=void 0;var a=i(o("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),r=t(o("./node_modules/react/index.js")),d=o("./node_modules/react-native-web/dist/index.js"),s=o("./src/theme/index.ts");n.BASE_BORDER_RADII=4,4===Object(4)&&Object.isExtensible(4)&&Object.defineProperty(4,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BASE_BORDER_RADII",filename:"src/components/Layout/Box.tsx"}}),"undefined"!==typeof Shape&&Shape&&Shape===Object(Shape)&&Object.isExtensible(Shape)&&Object.defineProperty(Shape,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Shape",filename:"src/components/Layout/Box.tsx"}}),"undefined"!==typeof BoxProps&&BoxProps&&BoxProps===Object(BoxProps)&&Object.isExtensible(BoxProps)&&Object.defineProperty(BoxProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxProps",filename:"src/components/Layout/Box.tsx"}});var p={circle:{borderRadius:999},pill:{borderRadius:999},rounded:{borderRadius:4},roundedBottom:{borderBottomLeftRadius:4,borderBottomRightRadius:4},roundedLeft:{borderBottomLeftRadius:4,borderTopLeftRadius:4},roundedRight:{borderBottomRightRadius:4,borderTopRightRadius:4},roundedTop:{borderTopLeftRadius:4,borderTopRightRadius:4},square:{borderRadius:0}};n.shapeMapping=p,"undefined"!==typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"shapeMapping",filename:"src/components/Layout/Box.tsx"}});var l={elevation:function(e,n){return n.elevations[e]},shape:function(e){function n(n){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}(function(e){return p[e]})},c=function(e){var n=e.children,o=e.style,t=e.testID,i=(0,a.default)(e,["children","style","testID"]),p=(0,s.useTheme)(),c=[],u={};for(var m in i)if(m){var b=l[m];if(b){var g=b(i[m],p);c.push(g)}else u[m]=i[m]}return r.createElement(d.View,{testID:t,style:[u,c,o]},n)};n.Box=c,c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Box",filename:"src/components/Layout/Box.tsx"}})},"./src/components/Layout/Spacing.mdx":function(e,n,o){var t=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(n,"__esModule",{value:!0}),n.default=c;var i=t(o("./node_modules/@babel/runtime/helpers/extends.js")),a=t(o("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),r=(t(o("./node_modules/react/index.js")),o("./node_modules/@mdx-js/react/dist/index.es.js")),d=o("./node_modules/docz/dist/index.esm.js"),s=o("./src/components/Layout/Spacing.tsx"),p={},l="wrapper";function c(e){var n=e.components,o=(0,a.default)(e,["components"]);return(0,r.mdx)(l,(0,i.default)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"spacing"},"Spacing"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"Spacing")," is the same as ",(0,r.mdx)("inlineCode",{parentName:"p"},"Box"),"; The difference are in numeric props which are multiplied by 8 to provide consistent 8px grid spacing: ",(0,r.mdx)("inlineCode",{parentName:"p"},"8px"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"16px"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"24px"),"..."),(0,r.mdx)("h3",{id:"usage"},"Usage"),(0,r.mdx)(d.Playground,{__position:0,__code:'<Spacing\n  paddingVertical={10}\n  paddingHorizontal={10}\n  height={33}\n  width={33}\n  backgroundColor="#67c6bb"\n/>',__scope:{props:this?this.props:o,Playground:d.Playground,Props:d.Props,Spacing:s.Spacing},mdxType:"Playground"},(0,r.mdx)(s.Spacing,{paddingVertical:10,paddingHorizontal:10,height:33,width:33,backgroundColor:"#67c6bb",mdxType:"Spacing"})))}c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Layout/Spacing.mdx"}}),c.isMDXComponent=!0},"./src/components/Layout/Spacing.tsx":function(e,n,o){var t=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),i=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(n,"__esModule",{value:!0}),n.Spacing=void 0;var a=i(o("./node_modules/@babel/runtime/helpers/objectSpread.js")),r=t(o("./node_modules/react/index.js")),d=o("./src/components/Layout/Box.tsx");"undefined"!==typeof GridScale&&GridScale&&GridScale===Object(GridScale)&&Object.isExtensible(GridScale)&&Object.defineProperty(GridScale,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GridScale",filename:"src/components/Layout/Spacing.tsx"}});"undefined"!==typeof SpacingProps&&SpacingProps&&SpacingProps===Object(SpacingProps)&&Object.isExtensible(SpacingProps)&&Object.defineProperty(SpacingProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SpacingProps",filename:"src/components/Layout/Spacing.tsx"}});var s={height:!0,margin:!0,marginBottom:!0,marginEnd:!0,marginHorizontal:!0,marginLeft:!0,marginRight:!0,marginStart:!0,marginTop:!0,marginVertical:!0,padding:!0,paddingBottom:!0,paddingEnd:!0,paddingHorizontal:!0,paddingLeft:!0,paddingRight:!0,paddingStart:!0,paddingTop:!0,paddingVertical:!0},p=function(e){var n=(0,a.default)({},e);for(var o in e)s[o]&&(n[o]=e[o]*(e.gridPointMultiplier||8));return r.createElement(d.Box,n)};n.Spacing=p,p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Spacing",filename:"src/components/Layout/Spacing.tsx"}})}}]);
//# sourceMappingURL=33.fbd593c4d92f00afd73c.js.map