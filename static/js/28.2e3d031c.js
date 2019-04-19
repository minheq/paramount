(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"./src/components/Divider/Divider.mdx":function(e,i,n){var t=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var r=t(n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),a=t(n("./node_modules/@babel/runtime/helpers/classCallCheck.js")),d=t(n("./node_modules/@babel/runtime/helpers/createClass.js")),o=t(n("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),l=t(n("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),u=t(n("./node_modules/@babel/runtime/helpers/inherits.js")),s=t(n("./node_modules/react/index.js")),p=n("./node_modules/@mdx-js/tag/dist/index.js"),c=n("./node_modules/docz/dist/index.m.js"),m=n("./src/components/Divider/Divider.tsx"),g=n("./src/components/Layout/index.ts"),f=function(e){function i(e){var n;return(0,a.default)(this,i),(n=(0,o.default)(this,(0,l.default)(i).call(this,e))).layout=null,n}return(0,u.default)(i,e),(0,d.default)(i,[{key:"render",value:function(){var e=this.props,i=e.components,n=(0,r.default)(e,["components"]);return s.default.createElement(p.MDXTag,{name:"wrapper",components:i},s.default.createElement(p.MDXTag,{name:"h1",components:i,props:{id:"divider"}},"Divider"),s.default.createElement(p.MDXTag,{name:"h3",components:i,props:{id:"usage"}},"Usage"),s.default.createElement(c.Playground,{__position:0,__code:'<Box paddingVertical={40}>\n  <Divider\n    size={3}\n    color="#67c6bb"\n    position="horizontal"\n    getStyles={(props, theme) => ({\n      dividerStyle: {},\n    })}\n  />\n</Box>',__scope:{props:this?this.props:n,Divider:m.Divider,Box:g.Box}},s.default.createElement(g.Box,{paddingVertical:40},s.default.createElement(m.Divider,{size:3,color:"#67c6bb",position:"horizontal",getStyles:function(e,i){return{dividerStyle:{}}}}))),s.default.createElement(p.MDXTag,{name:"h3",components:i,props:{id:"props"}},"Props"),s.default.createElement(c.PropsTable,{of:m.Divider}))}}]),i}(s.default.Component);i.default=f},"./src/components/Divider/Divider.styles.ts":function(e,i){Object.defineProperty(i,"__esModule",{value:!0}),i.getDividerStyles=void 0;i.getDividerStyles=function(e,i){var n=e.size,t=e.color,r=e.position,a={horizontal:{backgroundColor:t||i.colors.border.default,height:n||1,width:"100%"},vertical:{backgroundColor:t||i.colors.border.default,height:"100%",width:n||1}};return{dividerStyle:r?a[r]:a.horizontal}}},"./src/components/Divider/Divider.tsx":function(e,i,n){var t=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(i,"__esModule",{value:!0}),i.Divider=void 0;var r=t(n("./node_modules/react/index.js")),a=n("./node_modules/react-native-web/dist/index.js"),d=n("./src/theme/index.ts"),o=n("./src/utils/mergeStyles.ts"),l=n("./src/components/Divider/Divider.styles.ts"),u=function(e){var i=e.size,n=e.color,t=e.position,u=void 0===t?"horizontal":t,s=e.getStyles,p=(0,d.useTheme)(),c=(0,o.mergeStyles)(l.getDividerStyles,s)({size:i,color:n,position:u},p).dividerStyle;return r.createElement(a.View,{style:c})};i.Divider=u;try{u.displayName="Divider",u.__docgenInfo={description:"",displayName:"Divider",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:"DividerPosition"}},getStyles:{defaultValue:null,description:"",name:"getStyles",required:!1,type:{name:"ReplaceReturnType<GetDividerStyles, DeepPartial<DividerStyles>>"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Divider/Divider.tsx#Divider"]={docgenInfo:u.__docgenInfo,name:"Divider",path:"src/components/Divider/Divider.tsx#Divider"})}catch(s){}},"./src/components/Layout/Spacing.tsx":function(e,i,n){var t=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(i,"__esModule",{value:!0}),i.Spacing=void 0;var a=r(n("./node_modules/@babel/runtime/helpers/objectSpread.js")),d=t(n("./node_modules/react/index.js")),o=n("./src/components/Layout/Box.tsx"),l={height:!0,margin:!0,marginBottom:!0,marginEnd:!0,marginHorizontal:!0,marginLeft:!0,marginRight:!0,marginStart:!0,marginTop:!0,marginVertical:!0,padding:!0,paddingBottom:!0,paddingEnd:!0,paddingHorizontal:!0,paddingLeft:!0,paddingRight:!0,paddingStart:!0,paddingTop:!0,paddingVertical:!0},u=function(e){var i=(0,a.default)({},e);for(var n in e)l[n]&&(i[n]=e[n]*(e.gridPointMultiplier||8));return d.createElement(o.Box,i)};i.Spacing=u;try{u.displayName="Spacing",u.__docgenInfo={description:"",displayName:"Spacing",props:{gridPointMultiplier:{defaultValue:null,description:"",name:"gridPointMultiplier",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"GridScale"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"GridScale"}},marginBottom:{defaultValue:null,description:"",name:"marginBottom",required:!1,type:{name:"GridScale"}},marginEnd:{defaultValue:null,description:"",name:"marginEnd",required:!1,type:{name:"GridScale"}},marginHorizontal:{defaultValue:null,description:"",name:"marginHorizontal",required:!1,type:{name:"GridScale"}},marginLeft:{defaultValue:null,description:"",name:"marginLeft",required:!1,type:{name:"GridScale"}},marginRight:{defaultValue:null,description:"",name:"marginRight",required:!1,type:{name:"GridScale"}},marginStart:{defaultValue:null,description:"",name:"marginStart",required:!1,type:{name:"GridScale"}},marginTop:{defaultValue:null,description:"",name:"marginTop",required:!1,type:{name:"GridScale"}},marginVertical:{defaultValue:null,description:"",name:"marginVertical",required:!1,type:{name:"GridScale"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"GridScale"}},paddingBottom:{defaultValue:null,description:"",name:"paddingBottom",required:!1,type:{name:"GridScale"}},paddingEnd:{defaultValue:null,description:"",name:"paddingEnd",required:!1,type:{name:"GridScale"}},paddingHorizontal:{defaultValue:null,description:"",name:"paddingHorizontal",required:!1,type:{name:"GridScale"}},paddingLeft:{defaultValue:null,description:"",name:"paddingLeft",required:!1,type:{name:"GridScale"}},paddingRight:{defaultValue:null,description:"",name:"paddingRight",required:!1,type:{name:"GridScale"}},paddingStart:{defaultValue:null,description:"",name:"paddingStart",required:!1,type:{name:"GridScale"}},paddingTop:{defaultValue:null,description:"",name:"paddingTop",required:!1,type:{name:"GridScale"}},paddingVertical:{defaultValue:null,description:"",name:"paddingVertical",required:!1,type:{name:"GridScale"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Layout/Spacing.tsx#Spacing"]={docgenInfo:u.__docgenInfo,name:"Spacing",path:"src/components/Layout/Spacing.tsx#Spacing"})}catch(s){}},"./src/components/Layout/index.ts":function(e,i,n){Object.defineProperty(i,"__esModule",{value:!0});var t=n("./src/components/Layout/Box.tsx");Object.keys(t).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(i,e,{enumerable:!0,get:function(){return t[e]}})});var r=n("./src/components/Layout/Spacing.tsx");Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(i,e,{enumerable:!0,get:function(){return r[e]}})})},"./src/utils/mergeStyles.ts":function(e,i,n){Object.defineProperty(i,"__esModule",{value:!0}),i.mergeStyles=void 0;var t=n("./node_modules/deepmerge/dist/umd.js");i.mergeStyles=function(e,i){return function(){var n=e.apply(void 0,arguments);return i?t(n,i.apply(void 0,arguments)):n}}}}]);
//# sourceMappingURL=28.9c5844844be652539b6a.js.map