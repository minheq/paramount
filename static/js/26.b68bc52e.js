(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"./src/components/Badge/Badge.mdx":function(e,t,l){var n=l("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(l("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),o=n(l("./node_modules/@babel/runtime/helpers/classCallCheck.js")),s=n(l("./node_modules/@babel/runtime/helpers/createClass.js")),r=n(l("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),d=n(l("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),i=n(l("./node_modules/@babel/runtime/helpers/inherits.js")),u=n(l("./node_modules/react/index.js")),c=l("./node_modules/@mdx-js/tag/dist/index.js"),p=l("./node_modules/docz/dist/index.m.js"),m=n(l("./src/components/Badge/Badge.tsx")),g=l("./src/theme/index.ts"),f=l("./src/components/Layout/index.ts"),y=function(e){function t(e){var l;return(0,o.default)(this,t),(l=(0,r.default)(this,(0,d.default)(t).call(this,e))).layout=null,l}return(0,i.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){var e=this.props,t=e.components,l=(0,a.default)(e,["components"]);return u.default.createElement(c.MDXTag,{name:"wrapper",components:t},u.default.createElement(c.MDXTag,{name:"h2",components:t,props:{id:"usage"}},"Usage"),u.default.createElement(c.MDXTag,{name:"p",components:t},u.default.createElement(c.MDXTag,{name:"strong",components:t,parentName:"p"},"Note")," Accessibility/Interactivity is a responsibility of a wrapping component"),u.default.createElement(c.MDXTag,{name:"h3",components:t,props:{id:"default"}},"Default"),u.default.createElement(p.Playground,{__position:0,__code:'<ThemeContext.Consumer>\n  {theme => (\n    <Box>\n      {Object.keys(theme.fills.solid).map(color => (\n        <Box flexDirection="row" key={color}>\n          <Badge color={color}>{color}</Badge>\n          <Badge color={color} isSolid>\n            {color}\n          </Badge>\n        </Box>\n      ))}\n    </Box>\n  )}\n</ThemeContext.Consumer>',__scope:{props:this?this.props:l,Badge:m.default,ThemeContext:g.ThemeContext,Box:f.Box}},u.default.createElement(g.ThemeContext.Consumer,null,function(e){return u.default.createElement(f.Box,null,Object.keys(e.fills.solid).map(function(e){return u.default.createElement(f.Box,{flexDirection:"row",key:e},u.default.createElement(m.default,{color:e},e),u.default.createElement(m.default,{color:e,isSolid:!0},e))}))})),u.default.createElement(c.MDXTag,{name:"h3",components:t,props:{id:"pills"}},"Pills"),u.default.createElement(p.Playground,{__position:1,__code:'<ThemeContext.Consumer>\n  {theme => (\n    <Box>\n      {Object.keys(theme.fills.solid).map(color => (\n        <Box flexDirection="row" key={color}>\n          <Badge shape="pill" color={color}>\n            {color}\n          </Badge>\n          <Badge shape="pill" color={color} isSolid>\n            {color}\n          </Badge>\n        </Box>\n      ))}\n    </Box>\n  )}\n</ThemeContext.Consumer>',__scope:{props:this?this.props:l,Badge:m.default,ThemeContext:g.ThemeContext,Box:f.Box}},u.default.createElement(g.ThemeContext.Consumer,null,function(e){return u.default.createElement(f.Box,null,Object.keys(e.fills.solid).map(function(e){return u.default.createElement(f.Box,{flexDirection:"row",key:e},u.default.createElement(m.default,{shape:"pill",color:e},e),u.default.createElement(m.default,{shape:"pill",color:e,isSolid:!0},e))}))})),u.default.createElement(c.MDXTag,{name:"h2",components:t,props:{id:"props"}},"Props"),u.default.createElement(p.PropsTable,{of:m.default}))}}]),t}(u.default.Component);t.default=y},"./src/components/Badge/Badge.styles.ts":function(e,t,l){var n=l("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.getBadgeStyles=t.getBadgeVariables=void 0;var a=n(l("./node_modules/@babel/runtime/helpers/objectSpread.js")),o=l("./src/components/Layout/Box.tsx"),s=function(e){return{fills:e.fills,sizes:{small:{height:e.controlHeights.small,paddingLeft:e.controlPaddings.small,paddingRight:e.controlPaddings.small},medium:{height:e.controlHeights.medium,paddingLeft:e.controlPaddings.medium,paddingRight:e.controlPaddings.medium},large:{height:e.controlHeights.large,paddingLeft:e.controlPaddings.large,paddingRight:e.controlPaddings.large}}}};t.getBadgeVariables=s;var r=function(e,t){var l=e.size,n=e.color,r=e.isSolid,d=e.shape,i=s(t),u=o.shapeMapping[d],c=(r?i.fills.solid:i.fills.subtle)[n],p=i.sizes[l],m=p.height,g=p.paddingLeft,f=p.paddingRight;return{containerStyle:(0,a.default)({alignItems:"center",alignSelf:"flex-start",backgroundColor:c.backgroundColor,display:"flex",flexDirection:"row",height:m,justifyContent:"center",paddingLeft:g,paddingRight:f},u),textStyle:{color:c.color,textTransform:"uppercase"}}};t.getBadgeStyles=r;try{s.displayName="getBadgeVariables",s.__docgenInfo={description:"",displayName:"getBadgeVariables",props:{colors:{defaultValue:null,description:"",name:"colors",required:!0,type:{name:"Colors"}},fills:{defaultValue:null,description:"",name:"fills",required:!0,type:{name:"Fills"}},fontFamilies:{defaultValue:null,description:"",name:"fontFamilies",required:!0,type:{name:"FontFamilies"}},fontWeights:{defaultValue:null,description:"",name:"fontWeights",required:!0,type:{name:"FontWeights"}},headingSizes:{defaultValue:null,description:"",name:"headingSizes",required:!0,type:{name:"HeadingSizes"}},paragraphSizes:{defaultValue:null,description:"",name:"paragraphSizes",required:!0,type:{name:"ParagraphSizes"}},textSizes:{defaultValue:null,description:"",name:"textSizes",required:!0,type:{name:"TextSizes"}},elevations:{defaultValue:null,description:"",name:"elevations",required:!0,type:{name:"ViewStyle[]"}},controlPaddings:{defaultValue:null,description:"",name:"controlPaddings",required:!0,type:{name:"ControlSizes"}},controlHeights:{defaultValue:null,description:"",name:"controlHeights",required:!0,type:{name:"ControlSizes"}},controlBorderRadius:{defaultValue:null,description:"",name:"controlBorderRadius",required:!0,type:{name:"ControlSizes"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Badge/Badge.styles.ts#getBadgeVariables"]={docgenInfo:s.__docgenInfo,name:"getBadgeVariables",path:"src/components/Badge/Badge.styles.ts#getBadgeVariables"})}catch(d){}try{r.displayName="getBadgeStyles",r.__docgenInfo={description:"",displayName:"getBadgeStyles",props:{shape:{defaultValue:null,description:"",name:"shape",required:!0,type:{name:"Shape"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:'"small" | "medium" | "large"'}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:'"neutral" | "blue" | "red" | "orange" | "yellow" | "green" | "teal" | "purple"'}},isSolid:{defaultValue:null,description:"",name:"isSolid",required:!0,type:{name:"boolean"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Badge/Badge.styles.ts#getBadgeStyles"]={docgenInfo:r.__docgenInfo,name:"getBadgeStyles",path:"src/components/Badge/Badge.styles.ts#getBadgeStyles"})}catch(d){}},"./src/components/Badge/Badge.tsx":function(e,t,l){var n=l("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.Badge=void 0;var a=n(l("./node_modules/react/index.js")),o=l("./node_modules/react-native-web/dist/index.js"),s=l("./src/theme/index.ts"),r=l("./src/utils/mergeStyles.ts"),d=l("./src/components/Typography/index.ts"),i=l("./src/components/Badge/Badge.styles.ts"),u=(0,s.withTheme)(function(e){var t=e.children,l=e.color,n=void 0===l?"neutral":l,s=e.getStyles,u=e.isSolid,c=void 0!==u&&u,p=e.shape,m=void 0===p?"rounded":p,g=e.size,f=void 0===g?"small":g,y=e.theme,h=e.testID,B=(0,r.mergeStyles)(i.getBadgeStyles,s)({size:f,color:n,isSolid:c,shape:m},y),S=B.containerStyle,_=B.textStyle;return a.createElement(o.View,{style:S,testID:h},a.createElement(d.Text,{isBold:!0,size:f,getStyles:function(){return{textStyle:_}}},t))});t.Badge=u;var c=u;t.default=c;try{u.displayName="Badge",u.__docgenInfo={description:"",displayName:"Badge",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:'"neutral" | "blue" | "red" | "orange" | "yellow" | "green" | "teal" | "purple"'}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"small" | "medium" | "large"'}},shape:{defaultValue:null,description:"",name:"shape",required:!1,type:{name:"Shape"}},isSolid:{defaultValue:null,description:"",name:"isSolid",required:!1,type:{name:"boolean"}},getStyles:{defaultValue:null,description:"",name:"getStyles",required:!1,type:{name:"ReplaceReturnType<GetBadgeStyles, DeepPartial<BadgeStyles>>"}},testID:{defaultValue:null,description:"",name:"testID",required:!1,type:{name:"string"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Badge/Badge.tsx#Badge"]={docgenInfo:u.__docgenInfo,name:"Badge",path:"src/components/Badge/Badge.tsx#Badge"})}catch(p){}try{__class.displayName="__class",__class.__docgenInfo={description:"",displayName:"__class",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:'"neutral" | "blue" | "red" | "orange" | "yellow" | "green" | "teal" | "purple"'}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"small" | "medium" | "large"'}},shape:{defaultValue:null,description:"",name:"shape",required:!1,type:{name:"Shape"}},isSolid:{defaultValue:null,description:"",name:"isSolid",required:!1,type:{name:"boolean"}},getStyles:{defaultValue:null,description:"",name:"getStyles",required:!1,type:{name:"ReplaceReturnType<GetBadgeStyles, DeepPartial<BadgeStyles>>"}},testID:{defaultValue:null,description:"",name:"testID",required:!1,type:{name:"string"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Badge/Badge.tsx#__class"]={docgenInfo:__class.__docgenInfo,name:"__class",path:"src/components/Badge/Badge.tsx#__class"})}catch(p){}}}]);
//# sourceMappingURL=26.51ccd3e2fae743921911.js.map