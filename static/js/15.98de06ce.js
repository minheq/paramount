(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"./src/components/Box/Box.tsx":function(e,t,n){var o=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.Box=t.shapeMapping=t.BASE_BORDER_RADII=void 0;var i=r(n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),c=o(n("./node_modules/react/index.js")),s=n("./node_modules/react-native-web/dist/index.js"),l=n("./src/theme/index.ts");t.BASE_BORDER_RADII=4,4===Object(4)&&Object.isExtensible(4)&&Object.defineProperty(4,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BASE_BORDER_RADII",filename:"src/components/Box/Box.tsx"}}),"undefined"!==typeof Shape&&Shape&&Shape===Object(Shape)&&Object.isExtensible(Shape)&&Object.defineProperty(Shape,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Shape",filename:"src/components/Box/Box.tsx"}}),"undefined"!==typeof BoxProps&&BoxProps&&BoxProps===Object(BoxProps)&&Object.isExtensible(BoxProps)&&Object.defineProperty(BoxProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxProps",filename:"src/components/Box/Box.tsx"}});var a={circle:{borderRadius:999},pill:{borderRadius:999},rounded:{borderRadius:4},roundedBottom:{borderBottomLeftRadius:4,borderBottomRightRadius:4},roundedLeft:{borderBottomLeftRadius:4,borderTopLeftRadius:4},roundedRight:{borderBottomRightRadius:4,borderTopRightRadius:4},roundedTop:{borderTopLeftRadius:4,borderTopRightRadius:4},square:{borderRadius:0}};t.shapeMapping=a,"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"shapeMapping",filename:"src/components/Box/Box.tsx"}});var u={elevation:function(e,t){return t.elevations[e]},shape:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e){return a[e]})},d=function(e){var t=e.children,n=e.style,o=e.testID,r=(0,i.default)(e,["children","style","testID"]),a=(0,l.useTheme)(),d=[],f={};for(var b in r)if(b){var p=u[b];if(p){var m=p(r[b],a);d.push(m)}else f[b]=r[b]}return c.createElement(s.View,{testID:o,style:[f,d,n]},t)};t.Box=d,d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Box",filename:"src/components/Box/Box.tsx"}})},"./src/components/Box/index.ts":function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var o=n("./src/components/Box/Box.tsx");Object.keys(o).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})})},"./src/components/Switch/Switch.mdx":function(e,t,n){var o=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=b;var r=o(n("./node_modules/@babel/runtime/helpers/extends.js")),i=o(n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),c=(o(n("./node_modules/react/index.js")),n("./node_modules/@mdx-js/react/dist/index.es.js")),s=n("./node_modules/docz/dist/index.esm.js"),l=n("./node_modules/react-powerplug/dist/react-powerplug.esm.js"),a=n("./src/components/Switch/index.ts"),u=n("./src/components/Box/index.ts"),d={},f="wrapper";function b(e){var t=e.components,n=(0,i.default)(e,["components"]);return(0,c.mdx)(f,(0,r.default)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,c.mdx)("h1",{id:"switch"},"Switch"),(0,c.mdx)("h3",{id:"usage"},"Usage"),(0,c.mdx)(s.Playground,{__position:0,__code:"<Box>\n  <Toggle initial={true}>\n    {({ on, toggle }) => (\n      <Switch\n        isSwitchedOn={on}\n        onChange={toggle}\n        isDisabled={false}\n        onIcon={null}\n        offIcon={null}\n        duration={300}\n        getStyles={(props, theme) => ({\n          circleStyle: {},\n          containerStyle: {},\n          backgroundColorOff: '#F5F6F7',\n          backgroundColorOn: '#67c6bb',\n          circleColorOff: 'white',\n          circleColorOn: 'white',\n        })}\n      />\n    )}\n  </Toggle>\n</Box>",__scope:{props:this?this.props:n,Playground:s.Playground,Props:s.Props,Toggle:l.Toggle,Switch:a.Switch,Box:u.Box},mdxType:"Playground"},(0,c.mdx)(u.Box,{mdxType:"Box"},(0,c.mdx)(l.Toggle,{initial:!0,mdxType:"Toggle"},function(e){var t=e.on,n=e.toggle;return(0,c.mdx)(a.Switch,{isSwitchedOn:t,onChange:n,isDisabled:!1,onIcon:null,offIcon:null,duration:300,getStyles:function(e,t){return{circleStyle:{},containerStyle:{},backgroundColorOff:"#F5F6F7",backgroundColorOn:"#67c6bb",circleColorOff:"white",circleColorOn:"white"}},mdxType:"Switch"})}))),(0,c.mdx)("h3",{id:"props"},"Props"),(0,c.mdx)(s.Props,{of:a.Switch,mdxType:"Props"}))}b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Switch/Switch.mdx"}}),b.isMDXComponent=!0},"./src/components/Switch/Switch.styles.ts":function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.getSwitchStyles=t.getSwitchVariables=void 0,"undefined"!==typeof SwitchVariables&&SwitchVariables&&SwitchVariables===Object(SwitchVariables)&&Object.isExtensible(SwitchVariables)&&Object.defineProperty(SwitchVariables,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SwitchVariables",filename:"src/components/Switch/Switch.styles.ts"}});var n=function(e){return{backgroundColorOff:e.colors.background.greyDefault,backgroundColorOn:e.colors.background.primaryDefault,circleColorOff:e.colors.background.content,circleColorOn:e.colors.background.content,circle:{alignItems:"center",backgroundColor:e.colors.background.content,borderRadius:24,display:"flex",height:38,justifyContent:"center",padding:0,width:38},container:{alignItems:"center",backgroundColor:e.colors.background.greyLight,borderRadius:24,flexDirection:"row",height:44,padding:3,width:72}}};t.getSwitchVariables=n,n&&n===Object(n)&&Object.isExtensible(n)&&Object.defineProperty(n,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getSwitchVariables",filename:"src/components/Switch/Switch.styles.ts"}}),"undefined"!==typeof SwitchStylesRequired&&SwitchStylesRequired&&SwitchStylesRequired===Object(SwitchStylesRequired)&&Object.isExtensible(SwitchStylesRequired)&&Object.defineProperty(SwitchStylesRequired,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SwitchStylesRequired",filename:"src/components/Switch/Switch.styles.ts"}}),"undefined"!==typeof SwitchStyles&&SwitchStyles&&SwitchStyles===Object(SwitchStyles)&&Object.isExtensible(SwitchStyles)&&Object.defineProperty(SwitchStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SwitchStyles",filename:"src/components/Switch/Switch.styles.ts"}}),"undefined"!==typeof GetSwitchStyles&&GetSwitchStyles&&GetSwitchStyles===Object(GetSwitchStyles)&&Object.isExtensible(GetSwitchStyles)&&Object.defineProperty(GetSwitchStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetSwitchStyles",filename:"src/components/Switch/Switch.styles.ts"}});var o=function(e){var t=n(e);return{backgroundColorOff:t.backgroundColorOff,backgroundColorOn:t.backgroundColorOn,circleColorOff:t.circleColorOff,circleColorOn:t.circleColorOn,circleStyle:t.circle,containerStyle:t.container}};t.getSwitchStyles=o,o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getSwitchStyles",filename:"src/components/Switch/Switch.styles.ts"}})},"./src/components/Switch/Switch.tsx":function(e,t,n){var o=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.Switch=void 0;var i=r(n("./node_modules/@babel/runtime/helpers/extends.js")),c=r(n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),s=o(n("./node_modules/react/index.js")),l=n("./node_modules/react-native-web/dist/index.js"),a=n("./node_modules/react-spring/native.cjs.js"),u=n("./src/constants/Animation.ts"),d=n("./src/icons/index.ts"),f=n("./src/theme/index.ts"),b=n("./src/utils/mergeStyles.ts"),p=n("./src/components/Switch/Switch.styles.ts"),m=(0,a.animated)(l.View);"undefined"!==typeof SwitchProps&&SwitchProps&&SwitchProps===Object(SwitchProps)&&Object.isExtensible(SwitchProps)&&Object.defineProperty(SwitchProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SwitchProps",filename:"src/components/Switch/Switch.tsx"}});var y=function(e){var t=e.onIcon,n=e.offIcon,o=e.onChange,r=e.isSwitchedOn,y=e.getStyles,S=e.testID,h=(0,c.default)(e,["onIcon","offIcon","onChange","isSwitchedOn","getStyles","testID"]),g=(0,f.useTheme)(),O=(0,b.mergeStyles)(p.getSwitchStyles,y)(g),w=O.circleStyle,x=O.containerStyle,j=O.backgroundColorOff,_=O.backgroundColorOn,v=O.circleColorOff,P=O.circleColorOn,R=(0,a.useSpring)({config:u.springDefaultConfig,backgroundColor:r?_:j,circleColor:r?P:v,circlePosition:r?x.width-(w.width+2*x.padding):0}),C=R.backgroundColor,B=R.circleColor,E=R.circlePosition;return s.createElement(l.TouchableOpacity,(0,i.default)({accessible:!0,accessibilityLabel:"switch",onPress:o,activeOpacity:1,style:{alignSelf:"flex-start",flexDirection:"row",flexWrap:"wrap"},testID:S},h),s.createElement(m,{style:[x,{backgroundColor:C}]},s.createElement(m,{style:[w,{backgroundColor:B},{transform:[{translateX:E}]}]},r?t||s.createElement(d.Icon,{name:"check",size:20,color:g.colors.text.primary}):n||s.createElement(d.Icon,{name:"x",size:20,color:g.colors.text.default}))))};t.Switch=y,y&&y===Object(y)&&Object.isExtensible(y)&&Object.defineProperty(y,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Switch",filename:"src/components/Switch/Switch.tsx"}})},"./src/components/Switch/index.ts":function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var o=n("./src/components/Switch/Switch.tsx");Object.keys(o).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})})},"./src/constants/Animation.ts":function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.springDefaultConfig=void 0;var n={friction:40,tension:400};t.springDefaultConfig=n,"undefined"!==typeof n&&n&&n===Object(n)&&Object.isExtensible(n)&&Object.defineProperty(n,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"springDefaultConfig",filename:"src/constants/Animation.ts"}})},"./src/icons/Icon.web.tsx":function(e,t,n){var o=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n("./node_modules/react/index.js")),i=o(n("./node_modules/react-icons/fi/index.esm.js"));t.default=function(e){var t=e.name,n=e.color,o=e.size,c=i["Fi".concat(function(e){var t=e.replace(/(\-\w)/g,function(e){return e[1].toUpperCase()});return t.charAt(0).toUpperCase()+t.slice(1)}(t))];return r.createElement(c,{color:n,size:o})}},"./src/icons/index.ts":function(e,t,n){var o=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Icon",{enumerable:!0,get:function(){return r.default}});var r=o(n("./src/icons/Icon.web.tsx"));"undefined"!==typeof Icon&&Icon&&Icon===Object(Icon)&&Object.isExtensible(Icon)&&Object.defineProperty(Icon,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Icon",filename:"src/icons/index.ts"}})},"./src/utils/mergeStyles.ts":function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.mergeStyles=void 0;var o=n("./node_modules/deepmerge/dist/umd.js");"undefined"!==typeof GetStyles&&GetStyles&&GetStyles===Object(GetStyles)&&Object.isExtensible(GetStyles)&&Object.defineProperty(GetStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetStyles",filename:"src/utils/mergeStyles.ts"}}),"undefined"!==typeof GetStylesOptional&&GetStylesOptional&&GetStylesOptional===Object(GetStylesOptional)&&Object.isExtensible(GetStylesOptional)&&Object.defineProperty(GetStylesOptional,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetStylesOptional",filename:"src/utils/mergeStyles.ts"}}),"undefined"!==typeof ArgumentTypes&&ArgumentTypes&&ArgumentTypes===Object(ArgumentTypes)&&Object.isExtensible(ArgumentTypes)&&Object.defineProperty(ArgumentTypes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ArgumentTypes",filename:"src/utils/mergeStyles.ts"}}),"undefined"!==typeof ReplaceReturnType&&ReplaceReturnType&&ReplaceReturnType===Object(ReplaceReturnType)&&Object.isExtensible(ReplaceReturnType)&&Object.defineProperty(ReplaceReturnType,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ReplaceReturnType",filename:"src/utils/mergeStyles.ts"}});var r=function(e,t){return function(){var n=e.apply(void 0,arguments);return t?o(n,t.apply(void 0,arguments)):n}};t.mergeStyles=r,r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"mergeStyles",filename:"src/utils/mergeStyles.ts"}})}}]);
//# sourceMappingURL=15.b664005596a8b33ed21b.js.map