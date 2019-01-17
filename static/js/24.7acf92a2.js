(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"./src/components/Badge/Badge.mdx":function(e,t,l){var n=l("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(l("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),o=n(l("./node_modules/@babel/runtime/helpers/classCallCheck.js")),s=n(l("./node_modules/@babel/runtime/helpers/createClass.js")),d=n(l("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),r=n(l("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),i=n(l("./node_modules/@babel/runtime/helpers/inherits.js")),u=n(l("./node_modules/react/index.js")),c=l("./node_modules/@mdx-js/tag/dist/index.js"),p=l("./node_modules/docz/dist/index.m.js"),m=n(l("./src/components/Badge/Badge.tsx")),g=l("./src/theme/index.ts"),f=l("./src/components/Layout/index.ts"),y=function(e){function t(e){var l;return(0,o.default)(this,t),(l=(0,d.default)(this,(0,r.default)(t).call(this,e))).layout=null,l}return(0,i.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){var e=this.props,t=e.components,l=(0,a.default)(e,["components"]);return u.default.createElement(c.MDXTag,{name:"wrapper",components:t},u.default.createElement(c.MDXTag,{name:"h2",components:t,props:{id:"usage"}},"Usage"),u.default.createElement(c.MDXTag,{name:"p",components:t},u.default.createElement(c.MDXTag,{name:"strong",components:t,parentName:"p"},"Note")," Accessibility/Interactivity is a responsibility of a wrapping component"),u.default.createElement(c.MDXTag,{name:"h3",components:t,props:{id:"default"}},"Default"),u.default.createElement(p.Playground,{__position:0,__code:'<ThemeConsumer>\n  {theme => (\n    <Box>\n      {Object.keys(theme.fills.solid).map(color => (\n        <Box flexDirection="row" key={color}>\n          <Badge color={color}>{color}</Badge>\n          <Badge color={color} isSolid>\n            {color}\n          </Badge>\n        </Box>\n      ))}\n    </Box>\n  )}\n</ThemeConsumer>',__scope:{props:this?this.props:l,Badge:m.default,ThemeConsumer:g.ThemeConsumer,Box:f.Box}},u.default.createElement(g.ThemeConsumer,null,function(e){return u.default.createElement(f.Box,null,Object.keys(e.fills.solid).map(function(e){return u.default.createElement(f.Box,{flexDirection:"row",key:e},u.default.createElement(m.default,{color:e},e),u.default.createElement(m.default,{color:e,isSolid:!0},e))}))})),u.default.createElement(c.MDXTag,{name:"h3",components:t,props:{id:"pills"}},"Pills"),u.default.createElement(p.Playground,{__position:1,__code:'<ThemeConsumer>\n  {theme => (\n    <Box>\n      {Object.keys(theme.fills.solid).map(color => (\n        <Box flexDirection="row" key={color}>\n          <Badge shape="pill" color={color}>\n            {color}\n          </Badge>\n          <Badge shape="pill" color={color} isSolid>\n            {color}\n          </Badge>\n        </Box>\n      ))}\n    </Box>\n  )}\n</ThemeConsumer>',__scope:{props:this?this.props:l,Badge:m.default,ThemeConsumer:g.ThemeConsumer,Box:f.Box}},u.default.createElement(g.ThemeConsumer,null,function(e){return u.default.createElement(f.Box,null,Object.keys(e.fills.solid).map(function(e){return u.default.createElement(f.Box,{flexDirection:"row",key:e},u.default.createElement(m.default,{shape:"pill",color:e},e),u.default.createElement(m.default,{shape:"pill",color:e,isSolid:!0},e))}))})),u.default.createElement(c.MDXTag,{name:"h2",components:t,props:{id:"props"}},"Props"),u.default.createElement(p.PropsTable,{of:m.default}))}}]),t}(u.default.Component);t.default=y},"./src/components/Badge/Badge.styles.ts":function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.getBadgeStyles=t.getBadgeVariables=void 0;var l=function(e){return{fills:e.fills,sizes:{small:{height:e.controlHeights.small,paddingLeft:e.controlPaddings.small,paddingRight:e.controlPaddings.small},medium:{height:e.controlHeights.medium,paddingLeft:e.controlPaddings.medium,paddingRight:e.controlPaddings.medium},large:{height:e.controlHeights.large,paddingLeft:e.controlPaddings.large,paddingRight:e.controlPaddings.large}}}};t.getBadgeVariables=l;var n=function(e,t){var n=e.size,a=e.color,o=e.isSolid,s=l(t),d=(o?s.fills.solid:s.fills.subtle)[a],r=s.sizes[n],i=r.height,u=r.paddingLeft,c=r.paddingRight;return{boxStyle:{backgroundColor:d.backgroundColor,height:i,paddingLeft:u,paddingRight:c},textStyle:{color:d.color,textTransform:"uppercase"}}};t.getBadgeStyles=n;try{l.displayName="getBadgeVariables",l.__docgenInfo={description:"",displayName:"getBadgeVariables",props:{colors:{defaultValue:null,description:"",name:"colors",required:!0,type:{name:"Colors"}},fills:{defaultValue:null,description:"",name:"fills",required:!0,type:{name:"Fills"}},fontFamilies:{defaultValue:null,description:"",name:"fontFamilies",required:!0,type:{name:"FontFamilies"}},fontWeights:{defaultValue:null,description:"",name:"fontWeights",required:!0,type:{name:"FontWeights"}},headingSizes:{defaultValue:null,description:"",name:"headingSizes",required:!0,type:{name:"HeadingSizes"}},paragraphSizes:{defaultValue:null,description:"",name:"paragraphSizes",required:!0,type:{name:"ParagraphSizes"}},textSizes:{defaultValue:null,description:"",name:"textSizes",required:!0,type:{name:"TextSizes"}},elevations:{defaultValue:null,description:"",name:"elevations",required:!0,type:{name:"ViewStyle[]"}},controlPaddings:{defaultValue:null,description:"",name:"controlPaddings",required:!0,type:{name:"ControlSizes"}},controlHeights:{defaultValue:null,description:"",name:"controlHeights",required:!0,type:{name:"ControlSizes"}},controlBorderRadius:{defaultValue:null,description:"",name:"controlBorderRadius",required:!0,type:{name:"ControlSizes"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Badge/Badge.styles.ts#getBadgeVariables"]={docgenInfo:l.__docgenInfo,name:"getBadgeVariables",path:"src/components/Badge/Badge.styles.ts#getBadgeVariables"})}catch(a){}try{n.displayName="getBadgeStyles",n.__docgenInfo={description:"",displayName:"getBadgeStyles",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:'"small" | "medium" | "large"'}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:'"neutral" | "blue" | "red" | "orange" | "yellow" | "green" | "teal" | "purple"'}},isSolid:{defaultValue:null,description:"",name:"isSolid",required:!0,type:{name:"boolean"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Badge/Badge.styles.ts#getBadgeStyles"]={docgenInfo:n.__docgenInfo,name:"getBadgeStyles",path:"src/components/Badge/Badge.styles.ts#getBadgeStyles"})}catch(a){}},"./src/components/Badge/Badge.tsx":function(e,t,l){var n=l("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),a=l("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.Badge=void 0;var o=a(l("./node_modules/@babel/runtime/helpers/objectSpread.js")),s=n(l("./node_modules/react/index.js")),d=l("./src/theme/index.ts"),r=a(l("./src/components/Layout/Box.tsx")),i=l("./src/components/Typography/index.ts"),u=l("./src/components/Typography/Text.styles.ts"),c=l("./src/components/Badge/Badge.styles.ts"),p=(0,d.withTheme)(function(e){var t=e.children,l=e.color,n=void 0===l?"neutral":l,a=e.getStyles,d=void 0===a?c.getBadgeStyles:a,p=e.isSolid,m=void 0!==p&&p,g=e.shape,f=void 0===g?"rounded":g,y=e.size,h=void 0===y?"small":y,B=d({size:h,color:n,isSolid:m},e.theme),S=B.boxStyle,_=B.textStyle;return s.createElement(r.default,{shape:f,style:(0,o.default)({alignItems:"center",alignSelf:"flex-start",backgroundColor:S.backgroundColor,display:"flex",flexDirection:"row",height:S.height,justifyContent:"center",paddingLeft:S.paddingLeft,paddingRight:S.paddingRight},S)},s.createElement(i.Strong,{size:h,getStyles:function(){var e=u.getTextStyles.apply(void 0,arguments).textStyle;return{textStyle:(0,o.default)({},e,_)}}},t))});t.Badge=p;var m=p;t.default=m;try{p.displayName="Badge",p.__docgenInfo={description:"",displayName:"Badge",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:'"neutral" | "blue" | "red" | "orange" | "yellow" | "green" | "teal" | "purple"'}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"small" | "medium" | "large"'}},shape:{defaultValue:null,description:"",name:"shape",required:!1,type:{name:"Shape"}},isSolid:{defaultValue:null,description:"",name:"isSolid",required:!1,type:{name:"boolean"}},getStyles:{defaultValue:null,description:"",name:"getStyles",required:!1,type:{name:"GetBadgeStyles"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Badge/Badge.tsx#Badge"]={docgenInfo:p.__docgenInfo,name:"Badge",path:"src/components/Badge/Badge.tsx#Badge"})}catch(g){}try{__class.displayName="__class",__class.__docgenInfo={description:"",displayName:"__class",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:'"neutral" | "blue" | "red" | "orange" | "yellow" | "green" | "teal" | "purple"'}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"small" | "medium" | "large"'}},shape:{defaultValue:null,description:"",name:"shape",required:!1,type:{name:"Shape"}},isSolid:{defaultValue:null,description:"",name:"isSolid",required:!1,type:{name:"boolean"}},getStyles:{defaultValue:null,description:"",name:"getStyles",required:!1,type:{name:"GetBadgeStyles"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Badge/Badge.tsx#__class"]={docgenInfo:__class.__docgenInfo,name:"__class",path:"src/components/Badge/Badge.tsx#__class"})}catch(g){}}}]);
//# sourceMappingURL=24.96f722af9285aadbd0d4.js.map