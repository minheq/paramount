(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"./src/components/Badge/Badge.mdx":function(e,t,l){var n=l("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(l("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),a=n(l("./node_modules/@babel/runtime/helpers/classCallCheck.js")),r=n(l("./node_modules/@babel/runtime/helpers/createClass.js")),s=n(l("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),d=n(l("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),i=n(l("./node_modules/@babel/runtime/helpers/inherits.js")),u=n(l("./node_modules/react/index.js")),c=l("./node_modules/@mdx-js/tag/dist/index.js"),m=l("./node_modules/docz/dist/index.m.js"),p=n(l("./src/components/Badge/Badge.tsx")),f=l("./src/theme/index.ts"),g=l("./src/components/Layout/index.ts"),h=function(e){function t(e){var l;return(0,a.default)(this,t),(l=(0,s.default)(this,(0,d.default)(t).call(this,e))).layout=null,l}return(0,i.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){var e=this.props,t=e.components,l=(0,o.default)(e,["components"]);return u.default.createElement(c.MDXTag,{name:"wrapper",components:t},u.default.createElement(c.MDXTag,{name:"h2",components:t,props:{id:"usage"}},"Usage"),u.default.createElement(c.MDXTag,{name:"p",components:t},u.default.createElement(c.MDXTag,{name:"strong",components:t,parentName:"p"},"Note")," Accessibility/Interactivity is a responsibility of a wrapping component"),u.default.createElement(c.MDXTag,{name:"h3",components:t,props:{id:"default"}},"Default"),u.default.createElement(m.Playground,{__position:0,__code:'<ThemeConsumer>\n  {theme => (\n    <Box>\n      {Object.keys(theme.themeVariables.fills.solid).map(color => (\n        <Box flexDirection="row" key={color}>\n          <Badge color={color}>{color}</Badge>\n          <Badge color={color} isSolid>\n            {color}\n          </Badge>\n        </Box>\n      ))}\n    </Box>\n  )}\n</ThemeConsumer>',__scope:{props:this?this.props:l,Badge:p.default,ThemeConsumer:f.ThemeConsumer,Box:g.Box}},u.default.createElement(f.ThemeConsumer,null,function(e){return u.default.createElement(g.Box,null,Object.keys(e.themeVariables.fills.solid).map(function(e){return u.default.createElement(g.Box,{flexDirection:"row",key:e},u.default.createElement(p.default,{color:e},e),u.default.createElement(p.default,{color:e,isSolid:!0},e))}))})),u.default.createElement(c.MDXTag,{name:"h3",components:t,props:{id:"pills"}},"Pills"),u.default.createElement(m.Playground,{__position:1,__code:'<ThemeConsumer>\n  {theme => (\n    <Box>\n      {Object.keys(theme.themeVariables.fills.solid).map(color => (\n        <Box flexDirection="row" key={color}>\n          <Badge shape="pill" color={color}>\n            {color}\n          </Badge>\n          <Badge shape="pill" color={color} isSolid>\n            {color}\n          </Badge>\n        </Box>\n      ))}\n    </Box>\n  )}\n</ThemeConsumer>',__scope:{props:this?this.props:l,Badge:p.default,ThemeConsumer:f.ThemeConsumer,Box:g.Box}},u.default.createElement(f.ThemeConsumer,null,function(e){return u.default.createElement(g.Box,null,Object.keys(e.themeVariables.fills.solid).map(function(e){return u.default.createElement(g.Box,{flexDirection:"row",key:e},u.default.createElement(p.default,{shape:"pill",color:e},e),u.default.createElement(p.default,{shape:"pill",color:e,isSolid:!0},e))}))})),u.default.createElement(c.MDXTag,{name:"h2",components:t,props:{id:"props"}},"Props"),u.default.createElement(m.PropsTable,{of:p.default}))}}]),t}(u.default.Component);t.default=h},"./src/components/Badge/Badge.tsx":function(e,t,l){var n=l("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),o=l("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.Badge=void 0;var a=o(l("./node_modules/@babel/runtime/helpers/extends.js")),r=o(l("./node_modules/@babel/runtime/helpers/objectSpread.js")),s=n(l("./node_modules/react/index.js")),d=l("./src/theme/index.ts"),i=l("./src/components/Layout/index.ts"),u=l("./src/components/Typography/index.ts"),c=(0,d.withTheme)(function(e){var t=e.children,l=e.color,n=void 0===l?"neutral":l,o=e.dangerouslySetInlineStyle,d=e.isSolid,c=void 0!==d&&d,m=e.shape,p=void 0===m?"rounded":m,f=e.size,g=void 0===f?"small":f,h=e.theme.getBadgeStyles(g,n,c),y=h.boxStyle,_=h.textStyle;return s.createElement(i.Box,(0,a.default)({backgroundColor:y.backgroundColor,height:y.height,paddingLeft:y.paddingLeft,paddingRight:y.paddingRight,shape:p,display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",alignSelf:"flex-start"},o&&o.boxStyle),s.createElement(u.Strong,{size:g,dangerouslySetInlineStyle:{textStyle:(0,r.default)({},_,o&&o.textStyle)}},t))});t.Badge=c;var m=c;t.default=m;try{c.displayName="Badge",c.__docgenInfo={description:"",displayName:"Badge",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:'"neutral" | "blue" | "red" | "orange" | "yellow" | "green" | "teal" | "purple"'}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"small" | "medium" | "large"'}},shape:{defaultValue:null,description:"",name:"shape",required:!1,type:{name:"Shape"}},isSolid:{defaultValue:null,description:"",name:"isSolid",required:!1,type:{name:"boolean"}},dangerouslySetInlineStyle:{defaultValue:null,description:"",name:"dangerouslySetInlineStyle",required:!1,type:{name:"{ boxStyle: BoxProps; textStyle: TextStyle; }"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Badge/Badge.tsx#Badge"]={docgenInfo:c.__docgenInfo,name:"Badge",path:"src/components/Badge/Badge.tsx#Badge"})}catch(p){}try{__class.displayName="__class",__class.__docgenInfo={description:"",displayName:"__class",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:'"neutral" | "blue" | "red" | "orange" | "yellow" | "green" | "teal" | "purple"'}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"small" | "medium" | "large"'}},shape:{defaultValue:null,description:"",name:"shape",required:!1,type:{name:"Shape"}},isSolid:{defaultValue:null,description:"",name:"isSolid",required:!1,type:{name:"boolean"}},dangerouslySetInlineStyle:{defaultValue:null,description:"",name:"dangerouslySetInlineStyle",required:!1,type:{name:"{ boxStyle: BoxProps; textStyle: TextStyle; }"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Badge/Badge.tsx#__class"]={docgenInfo:__class.__docgenInfo,name:"__class",path:"src/components/Badge/Badge.tsx#__class"})}catch(p){}}}]);
//# sourceMappingURL=22.65c5631a2b289611ac99.js.map