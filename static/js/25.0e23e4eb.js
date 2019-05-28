(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"./src/components/Box/Box.tsx":function(e,t,i){var r=i("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),n=i("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.Box=t.shapeMapping=t.BASE_BORDER_RADII=void 0;var o=n(i("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),s=r(i("./node_modules/react/index.js")),l=i("./node_modules/react-native-web/dist/index.js"),d=i("./src/theme/index.ts");t.BASE_BORDER_RADII=4,4===Object(4)&&Object.isExtensible(4)&&Object.defineProperty(4,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BASE_BORDER_RADII",filename:"src/components/Box/Box.tsx"}}),"undefined"!==typeof Shape&&Shape&&Shape===Object(Shape)&&Object.isExtensible(Shape)&&Object.defineProperty(Shape,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Shape",filename:"src/components/Box/Box.tsx"}}),"undefined"!==typeof BoxProps&&BoxProps&&BoxProps===Object(BoxProps)&&Object.isExtensible(BoxProps)&&Object.defineProperty(BoxProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxProps",filename:"src/components/Box/Box.tsx"}});var a={circle:{borderRadius:999},pill:{borderRadius:999},rounded:{borderRadius:4},roundedBottom:{borderBottomLeftRadius:4,borderBottomRightRadius:4},roundedLeft:{borderBottomLeftRadius:4,borderTopLeftRadius:4},roundedRight:{borderBottomRightRadius:4,borderTopRightRadius:4},roundedTop:{borderTopLeftRadius:4,borderTopRightRadius:4},square:{borderRadius:0}};t.shapeMapping=a,"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"shapeMapping",filename:"src/components/Box/Box.tsx"}});var u={elevation:function(e,t){return t.elevations[e]},shape:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e){return a[e]})},c=function(e){var t=e.children,i=e.style,r=e.testID,n=(0,o.default)(e,["children","style","testID"]),a=(0,d.useTheme)(),c=[],p={};for(var m in n)if(m){var b=u[m];if(b){var f=b(n[m],a);c.push(f)}else p[m]=n[m]}return s.createElement(l.View,{testID:r,style:[p,c,i]},t)};t.Box=c,c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Box",filename:"src/components/Box/Box.tsx"}})},"./src/components/Box/index.ts":function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});var r=i("./src/components/Box/Box.tsx");Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})})},"./src/components/Divider/Divider.mdx":function(e,t,i){var r=i("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=p;var n=r(i("./node_modules/@babel/runtime/helpers/extends.js")),o=r(i("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),s=(r(i("./node_modules/react/index.js")),i("./node_modules/@mdx-js/react/dist/index.es.js")),l=i("./node_modules/docz/dist/index.esm.js"),d=i("./src/components/Divider/Divider.tsx"),a=i("./src/components/Box/index.ts"),u={},c="wrapper";function p(e){var t=e.components,i=(0,o.default)(e,["components"]);return(0,s.mdx)(c,(0,n.default)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"divider"},"Divider"),(0,s.mdx)("h3",{id:"usage"},"Usage"),(0,s.mdx)(l.Playground,{__position:0,__code:'<Box paddingVertical={40}>\n  <Divider\n    size={3}\n    color="#67c6bb"\n    position="horizontal"\n    getStyles={(props, theme) => ({\n      dividerStyle: {},\n    })}\n  />\n</Box>',__scope:{props:this?this.props:i,Playground:l.Playground,Props:l.Props,Divider:d.Divider,Box:a.Box},mdxType:"Playground"},(0,s.mdx)(a.Box,{paddingVertical:40,mdxType:"Box"},(0,s.mdx)(d.Divider,{size:3,color:"#67c6bb",position:"horizontal",getStyles:function(e,t){return{dividerStyle:{}}},mdxType:"Divider"}))),(0,s.mdx)("h3",{id:"props"},"Props"),(0,s.mdx)(l.Props,{of:d.Divider,mdxType:"Props"}))}p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Divider/Divider.mdx"}}),p.isMDXComponent=!0},"./src/components/Divider/Divider.styles.ts":function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.getDividerStyles=t.getDividerColor=void 0,"undefined"!==typeof DividerStyles&&DividerStyles&&DividerStyles===Object(DividerStyles)&&Object.isExtensible(DividerStyles)&&Object.defineProperty(DividerStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DividerStyles",filename:"src/components/Divider/Divider.styles.ts"}}),"undefined"!==typeof DividerPosition&&DividerPosition&&DividerPosition===Object(DividerPosition)&&Object.isExtensible(DividerPosition)&&Object.defineProperty(DividerPosition,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DividerPosition",filename:"src/components/Divider/Divider.styles.ts"}}),"undefined"!==typeof DividerStylesProps&&DividerStylesProps&&DividerStylesProps===Object(DividerStylesProps)&&Object.isExtensible(DividerStylesProps)&&Object.defineProperty(DividerStylesProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DividerStylesProps",filename:"src/components/Divider/Divider.styles.ts"}}),"undefined"!==typeof GetDividerStyles&&GetDividerStyles&&GetDividerStyles===Object(GetDividerStyles)&&Object.isExtensible(GetDividerStyles)&&Object.defineProperty(GetDividerStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetDividerStyles",filename:"src/components/Divider/Divider.styles.ts"}});var i=function(e){return function(t){return e[t]||t}};t.getDividerColor=i,i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getDividerColor",filename:"src/components/Divider/Divider.styles.ts"}});var r=function(e,t){var r=e.size,n=e.color,o=e.position,s=i(t.colors.border)(n||t.colors.border.default),l={horizontal:{backgroundColor:s,height:r||1,width:"100%"},vertical:{backgroundColor:s,height:"100%",width:r||1}};return{dividerStyle:o?l[o]:l.horizontal}};t.getDividerStyles=r,r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getDividerStyles",filename:"src/components/Divider/Divider.styles.ts"}})},"./src/components/Divider/Divider.tsx":function(e,t,i){var r=i("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),t.Divider=void 0;var n=r(i("./node_modules/react/index.js")),o=i("./node_modules/react-native-web/dist/index.js"),s=i("./src/theme/index.ts"),l=i("./src/utils/mergeStyles.ts"),d=i("./src/components/Divider/Divider.styles.ts");"undefined"!==typeof DividerProps&&DividerProps&&DividerProps===Object(DividerProps)&&Object.isExtensible(DividerProps)&&Object.defineProperty(DividerProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DividerProps",filename:"src/components/Divider/Divider.tsx"}});var a=function(e){var t=e.size,i=e.color,r=e.position,a=void 0===r?"horizontal":r,u=e.getStyles,c=(0,s.useTheme)(),p=(0,l.mergeStyles)(d.getDividerStyles,u)({size:t,color:i,position:a},c).dividerStyle;return n.createElement(o.View,{style:p})};t.Divider=a,a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Divider",filename:"src/components/Divider/Divider.tsx"}})},"./src/utils/mergeStyles.ts":function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.mergeStyles=void 0;var r=i("./node_modules/deepmerge/dist/umd.js");"undefined"!==typeof GetStyles&&GetStyles&&GetStyles===Object(GetStyles)&&Object.isExtensible(GetStyles)&&Object.defineProperty(GetStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetStyles",filename:"src/utils/mergeStyles.ts"}}),"undefined"!==typeof GetStylesOptional&&GetStylesOptional&&GetStylesOptional===Object(GetStylesOptional)&&Object.isExtensible(GetStylesOptional)&&Object.defineProperty(GetStylesOptional,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetStylesOptional",filename:"src/utils/mergeStyles.ts"}}),"undefined"!==typeof ArgumentTypes&&ArgumentTypes&&ArgumentTypes===Object(ArgumentTypes)&&Object.isExtensible(ArgumentTypes)&&Object.defineProperty(ArgumentTypes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ArgumentTypes",filename:"src/utils/mergeStyles.ts"}}),"undefined"!==typeof ReplaceReturnType&&ReplaceReturnType&&ReplaceReturnType===Object(ReplaceReturnType)&&Object.isExtensible(ReplaceReturnType)&&Object.defineProperty(ReplaceReturnType,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ReplaceReturnType",filename:"src/utils/mergeStyles.ts"}});var n=function(e,t){return function(){var i=e.apply(void 0,arguments);return t?r(i,t.apply(void 0,arguments)):i}};t.mergeStyles=n,n&&n===Object(n)&&Object.isExtensible(n)&&Object.defineProperty(n,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"mergeStyles",filename:"src/utils/mergeStyles.ts"}})}}]);
//# sourceMappingURL=25.8b6a61fdb1e33ec38c04.js.map