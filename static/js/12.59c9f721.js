(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"./src/components/Layout/Box.tsx":function(e,t,n){var o=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),i=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.Box=t.shapeMapping=t.BASE_BORDER_RADII=void 0;var r=i(n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),c=o(n("./node_modules/react/index.js")),s=n("./node_modules/react-native-web/dist/index.js"),l=n("./src/theme/index.ts");t.BASE_BORDER_RADII=4,4===Object(4)&&Object.isExtensible(4)&&Object.defineProperty(4,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BASE_BORDER_RADII",filename:"src/components/Layout/Box.tsx"}}),"undefined"!==typeof Shape&&Shape&&Shape===Object(Shape)&&Object.isExtensible(Shape)&&Object.defineProperty(Shape,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Shape",filename:"src/components/Layout/Box.tsx"}}),"undefined"!==typeof BoxProps&&BoxProps&&BoxProps===Object(BoxProps)&&Object.isExtensible(BoxProps)&&Object.defineProperty(BoxProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxProps",filename:"src/components/Layout/Box.tsx"}});var a={circle:{borderRadius:999},pill:{borderRadius:999},rounded:{borderRadius:4},roundedBottom:{borderBottomLeftRadius:4,borderBottomRightRadius:4},roundedLeft:{borderBottomLeftRadius:4,borderTopLeftRadius:4},roundedRight:{borderBottomRightRadius:4,borderTopRightRadius:4},roundedTop:{borderTopLeftRadius:4,borderTopRightRadius:4},square:{borderRadius:0}};t.shapeMapping=a,"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"shapeMapping",filename:"src/components/Layout/Box.tsx"}});var u={elevation:function(e,t){return t.elevations[e]},shape:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e){return a[e]})},d=function(e){var t=e.children,n=e.style,o=e.testID,i=(0,r.default)(e,["children","style","testID"]),a=(0,l.useTheme)(),d=[],p={};for(var f in i)if(f){var b=u[f];if(b){var m=b(i[f],a);d.push(m)}else p[f]=i[f]}return c.createElement(s.View,{testID:o,style:[p,d,n]},t)};t.Box=d,d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Box",filename:"src/components/Layout/Box.tsx"}})},"./src/components/Layout/Spacing.tsx":function(e,t,n){var o=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),i=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.Spacing=void 0;var r=i(n("./node_modules/@babel/runtime/helpers/objectSpread.js")),c=o(n("./node_modules/react/index.js")),s=n("./src/components/Layout/Box.tsx");"undefined"!==typeof GridScale&&GridScale&&GridScale===Object(GridScale)&&Object.isExtensible(GridScale)&&Object.defineProperty(GridScale,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GridScale",filename:"src/components/Layout/Spacing.tsx"}});"undefined"!==typeof SpacingProps&&SpacingProps&&SpacingProps===Object(SpacingProps)&&Object.isExtensible(SpacingProps)&&Object.defineProperty(SpacingProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SpacingProps",filename:"src/components/Layout/Spacing.tsx"}});var l={height:!0,margin:!0,marginBottom:!0,marginEnd:!0,marginHorizontal:!0,marginLeft:!0,marginRight:!0,marginStart:!0,marginTop:!0,marginVertical:!0,padding:!0,paddingBottom:!0,paddingEnd:!0,paddingHorizontal:!0,paddingLeft:!0,paddingRight:!0,paddingStart:!0,paddingTop:!0,paddingVertical:!0},a=function(e){var t=(0,r.default)({},e);for(var n in e)l[n]&&(t[n]=e[n]*(e.gridPointMultiplier||8));return c.createElement(s.Box,t)};t.Spacing=a,a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Spacing",filename:"src/components/Layout/Spacing.tsx"}})},"./src/components/Layout/index.ts":function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var o=n("./src/components/Layout/Box.tsx");Object.keys(o).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})});var i=n("./src/components/Layout/Spacing.tsx");Object.keys(i).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}})})},"./src/components/Switch/Switch.mdx":function(e,t,n){var o=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=f;var i=o(n("./node_modules/@babel/runtime/helpers/extends.js")),r=o(n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),c=(o(n("./node_modules/react/index.js")),n("./node_modules/@mdx-js/react/dist/index.es.js")),s=n("./node_modules/docz/dist/index.esm.js"),l=n("./node_modules/react-powerplug/dist/react-powerplug.esm.js"),a=n("./src/components/Switch/index.ts"),u=n("./src/components/Layout/index.ts"),d={},p="wrapper";function f(e){var t=e.components,n=(0,r.default)(e,["components"]);return(0,c.mdx)(p,(0,i.default)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,c.mdx)("h1",{id:"switch"},"Switch"),(0,c.mdx)("h3",{id:"usage"},"Usage"),(0,c.mdx)(s.Playground,{__position:0,__code:"<Box>\n  <Toggle initial={true}>\n    {({ on, toggle }) => (\n      <Switch\n        isSwitchedOn={on}\n        onChange={toggle}\n        isDisabled={false}\n        onIcon={null}\n        offIcon={null}\n        duration={300}\n        getStyles={(props, theme) => ({\n          circleStyle: {},\n          containerStyle: {},\n          backgroundColorOff: '#F5F6F7',\n          backgroundColorOn: '#67c6bb',\n          circleColorOff: 'white',\n          circleColorOn: 'white',\n        })}\n      />\n    )}\n  </Toggle>\n</Box>",__scope:{props:this?this.props:n,Playground:s.Playground,Props:s.Props,Toggle:l.Toggle,Switch:a.Switch,Box:u.Box},mdxType:"Playground"},(0,c.mdx)(u.Box,{mdxType:"Box"},(0,c.mdx)(l.Toggle,{initial:!0,mdxType:"Toggle"},function(e){var t=e.on,n=e.toggle;return(0,c.mdx)(a.Switch,{isSwitchedOn:t,onChange:n,isDisabled:!1,onIcon:null,offIcon:null,duration:300,getStyles:function(e,t){return{circleStyle:{},containerStyle:{},backgroundColorOff:"#F5F6F7",backgroundColorOn:"#67c6bb",circleColorOff:"white",circleColorOn:"white"}},mdxType:"Switch"})}))),(0,c.mdx)("h3",{id:"props"},"Props"),(0,c.mdx)(s.Props,{of:a.Switch,mdxType:"Props"}))}f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Switch/Switch.mdx"}}),f.isMDXComponent=!0},"./src/components/Switch/Switch.styles.ts":function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.getSwitchStyles=t.getSwitchVariables=void 0,"undefined"!==typeof SwitchVariables&&SwitchVariables&&SwitchVariables===Object(SwitchVariables)&&Object.isExtensible(SwitchVariables)&&Object.defineProperty(SwitchVariables,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SwitchVariables",filename:"src/components/Switch/Switch.styles.ts"}});var n=function(e){return{backgroundColorOff:e.colors.background.greyDefault,backgroundColorOn:e.colors.background.primaryDefault,circleColorOff:e.colors.background.content,circleColorOn:e.colors.background.content,circle:{alignItems:"center",backgroundColor:e.colors.background.content,borderRadius:24,display:"flex",height:38,justifyContent:"center",padding:0,width:38},container:{alignItems:"center",backgroundColor:e.colors.background.greyLight,borderRadius:24,flexDirection:"row",height:44,padding:3,width:72}}};t.getSwitchVariables=n,n&&n===Object(n)&&Object.isExtensible(n)&&Object.defineProperty(n,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getSwitchVariables",filename:"src/components/Switch/Switch.styles.ts"}}),"undefined"!==typeof SwitchStylesRequired&&SwitchStylesRequired&&SwitchStylesRequired===Object(SwitchStylesRequired)&&Object.isExtensible(SwitchStylesRequired)&&Object.defineProperty(SwitchStylesRequired,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SwitchStylesRequired",filename:"src/components/Switch/Switch.styles.ts"}}),"undefined"!==typeof SwitchStyles&&SwitchStyles&&SwitchStyles===Object(SwitchStyles)&&Object.isExtensible(SwitchStyles)&&Object.defineProperty(SwitchStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SwitchStyles",filename:"src/components/Switch/Switch.styles.ts"}}),"undefined"!==typeof GetSwitchStyles&&GetSwitchStyles&&GetSwitchStyles===Object(GetSwitchStyles)&&Object.isExtensible(GetSwitchStyles)&&Object.defineProperty(GetSwitchStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetSwitchStyles",filename:"src/components/Switch/Switch.styles.ts"}});var o=function(e){var t=n(e);return{backgroundColorOff:t.backgroundColorOff,backgroundColorOn:t.backgroundColorOn,circleColorOff:t.circleColorOff,circleColorOn:t.circleColorOn,circleStyle:t.circle,containerStyle:t.container}};t.getSwitchStyles=o,o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getSwitchStyles",filename:"src/components/Switch/Switch.styles.ts"}})},"./src/components/Switch/Switch.tsx":function(e,t,n){var o=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),i=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.Switch=void 0;var r=i(n("./node_modules/@babel/runtime/helpers/extends.js")),c=i(n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),s=o(n("./node_modules/react/index.js")),l=n("./node_modules/react-native-web/dist/index.js"),a=n("./node_modules/react-spring/native.cjs.js"),u=n("./src/constants/Animation.ts"),d=n("./src/icons/index.ts"),p=n("./src/theme/index.ts"),f=n("./src/utils/mergeStyles.ts"),b=n("./src/components/Switch/Switch.styles.ts"),m=(0,a.animated)(l.View);"undefined"!==typeof SwitchProps&&SwitchProps&&SwitchProps===Object(SwitchProps)&&Object.isExtensible(SwitchProps)&&Object.defineProperty(SwitchProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SwitchProps",filename:"src/components/Switch/Switch.tsx"}});var S=function(e){var t=e.onIcon,n=e.offIcon,o=e.onChange,i=e.isSwitchedOn,S=e.getStyles,y=e.testID,g=(0,c.default)(e,["onIcon","offIcon","onChange","isSwitchedOn","getStyles","testID"]),h=(0,p.useTheme)(),O=(0,f.mergeStyles)(b.getSwitchStyles,S)(h),j=O.circleStyle,_=O.containerStyle,w=O.backgroundColorOff,x=O.backgroundColorOn,v=O.circleColorOff,P=O.circleColorOn,R=(0,a.useSpring)({config:u.springDefaultConfig,backgroundColor:i?x:w,circleColor:i?P:v,circlePosition:i?_.width-(j.width+2*_.padding):0}),C=R.backgroundColor,E=R.circleColor,B=R.circlePosition;return s.createElement(l.TouchableOpacity,(0,r.default)({accessible:!0,accessibilityLabel:"switch",onPress:o,activeOpacity:1,style:{alignSelf:"flex-start",flexDirection:"row",flexWrap:"wrap"},testID:y},g),s.createElement(m,{style:[_,{backgroundColor:C}]},s.createElement(m,{style:[j,{backgroundColor:E},{transform:[{translateX:B}]}]},i?t||s.createElement(d.Icon,{name:"check",size:20,color:h.colors.text.primary}):n||s.createElement(d.Icon,{name:"x",size:20,color:h.colors.text.default}))))};t.Switch=S,S&&S===Object(S)&&Object.isExtensible(S)&&Object.defineProperty(S,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Switch",filename:"src/components/Switch/Switch.tsx"}})},"./src/components/Switch/index.ts":function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var o=n("./src/components/Switch/Switch.tsx");Object.keys(o).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})})},"./src/constants/Animation.ts":function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.springDefaultConfig=void 0;var n={friction:40,tension:400};t.springDefaultConfig=n,"undefined"!==typeof n&&n&&n===Object(n)&&Object.isExtensible(n)&&Object.defineProperty(n,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"springDefaultConfig",filename:"src/constants/Animation.ts"}})},"./src/icons/Icon.web.tsx":function(e,t,n){var o=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n("./node_modules/react/index.js")),r=o(n("./node_modules/react-icons/fi/index.esm.js"));t.default=function(e){var t=e.name,n=e.color,o=e.size,c=r["Fi".concat(function(e){var t=e.replace(/(\-\w)/g,function(e){return e[1].toUpperCase()});return t.charAt(0).toUpperCase()+t.slice(1)}(t))];return i.createElement(c,{color:n,size:o})}},"./src/icons/index.ts":function(e,t,n){var o=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Icon",{enumerable:!0,get:function(){return i.default}});var i=o(n("./src/icons/Icon.web.tsx"));"undefined"!==typeof Icon&&Icon&&Icon===Object(Icon)&&Object.isExtensible(Icon)&&Object.defineProperty(Icon,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Icon",filename:"src/icons/index.ts"}})},"./src/utils/mergeStyles.ts":function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.mergeStyles=void 0;var o=n("./node_modules/deepmerge/dist/umd.js");"undefined"!==typeof GetStyles&&GetStyles&&GetStyles===Object(GetStyles)&&Object.isExtensible(GetStyles)&&Object.defineProperty(GetStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetStyles",filename:"src/utils/mergeStyles.ts"}}),"undefined"!==typeof GetStylesOptional&&GetStylesOptional&&GetStylesOptional===Object(GetStylesOptional)&&Object.isExtensible(GetStylesOptional)&&Object.defineProperty(GetStylesOptional,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetStylesOptional",filename:"src/utils/mergeStyles.ts"}}),"undefined"!==typeof ArgumentTypes&&ArgumentTypes&&ArgumentTypes===Object(ArgumentTypes)&&Object.isExtensible(ArgumentTypes)&&Object.defineProperty(ArgumentTypes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ArgumentTypes",filename:"src/utils/mergeStyles.ts"}}),"undefined"!==typeof ReplaceReturnType&&ReplaceReturnType&&ReplaceReturnType===Object(ReplaceReturnType)&&Object.isExtensible(ReplaceReturnType)&&Object.defineProperty(ReplaceReturnType,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ReplaceReturnType",filename:"src/utils/mergeStyles.ts"}});var i=function(e,t){return function(){var n=e.apply(void 0,arguments);return t?o(n,t.apply(void 0,arguments)):n}};t.mergeStyles=i,i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"mergeStyles",filename:"src/utils/mergeStyles.ts"}})}}]);
//# sourceMappingURL=12.884c5daed04d06b9e7af.js.map