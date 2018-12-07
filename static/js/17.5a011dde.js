(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"./src/components/Switch/Switch.mdx":function(e,t,n){var o=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),i=o(n("./node_modules/@babel/runtime/helpers/classCallCheck.js")),l=o(n("./node_modules/@babel/runtime/helpers/createClass.js")),r=o(n("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),s=o(n("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),d=o(n("./node_modules/@babel/runtime/helpers/inherits.js")),c=o(n("./node_modules/react/index.js")),u=n("./node_modules/@mdx-js/tag/dist/index.js"),p=n("./node_modules/docz/dist/index.m.js"),m=n("./node_modules/react-powerplug/dist/react-powerplug.esm.js"),h=o(n("./src/components/Switch/Switch.tsx")),f=function(e){function t(e){var n;return(0,i.default)(this,t),(n=(0,r.default)(this,(0,s.default)(t).call(this,e))).layout=null,n}return(0,d.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this.props,t=e.components,n=(0,a.default)(e,["components"]);return c.default.createElement(u.MDXTag,{name:"wrapper",components:t},c.default.createElement(u.MDXTag,{name:"h2",components:t,props:{id:"usage"}},"Usage"),c.default.createElement(u.MDXTag,{name:"h3",components:t,props:{id:"default"}},"Default"),c.default.createElement(p.Playground,{__position:0,__code:"<Toggle initial={true}>\n  {({ on, toggle }) => <Switch isSwitchedOn={on} onChange={toggle} />}\n</Toggle>",__scope:{props:this?this.props:n,Toggle:m.Toggle,Switch:h.default}},c.default.createElement(m.Toggle,{initial:!0},function(e){var t=e.on,n=e.toggle;return c.default.createElement(h.default,{isSwitchedOn:t,onChange:n})})),c.default.createElement(u.MDXTag,{name:"h2",components:t,props:{id:"props"}},"Props"),c.default.createElement(p.PropsTable,{of:h.default}))}}]),t}(c.default.Component);t.default=f},"./src/components/Switch/Switch.tsx":function(e,t,n){var o=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),a=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.Switch=void 0;var i=a(n("./node_modules/@babel/runtime/helpers/classCallCheck.js")),l=a(n("./node_modules/@babel/runtime/helpers/createClass.js")),r=a(n("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),s=a(n("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),d=a(n("./node_modules/@babel/runtime/helpers/inherits.js")),c=o(n("./node_modules/react/index.js")),u=n("./node_modules/react-icons/fi/index.js"),p=n("./node_modules/react-native-web/dist/index.js"),m=n("./src/theme/index.ts"),h=function(e){function t(e){var n;(0,i.default)(this,t),(n=(0,r.default)(this,(0,s.default)(t).call(this,e))).handleOnPress=function(){var e=n.props.onChange;n.runAnimation(),e&&e()},n.runAnimation=function(){var e=n.props,t=e.duration,o=e.isSwitchedOn,a={duration:t,fromValue:o?1:0,toValue:o?0:1};p.Animated.timing(n.state.animXValue,a).start()};var o=e.theme.getSwitchStyles(),a=o.circleStyle,l=o.containerStyle,d=l.width-(a.width+2*l.padding);return n.state={animXValue:new p.Animated.Value(e.isSwitchedOn?1:0),circlePosXEnd:d,circlePosXStart:0},n}return(0,d.default)(t,e),(0,l.default)(t,[{key:"componentWillReceiveProps",value:function(e){e.isSwitchedOn!==this.props.isSwitchedOn&&this.runAnimation()}},{key:"render",value:function(){var e=this.props,t=e.theme,n=e.isSwitchedOn,o=this.props,a=o.onIcon,i=void 0===a?c.createElement(u.FiCheck,{size:20,color:t.themeVariables.colors.text.primary}):a,l=o.offIcon,r=void 0===l?c.createElement(u.FiX,{size:20,color:t.themeVariables.colors.text.default}):l,s=this.state,d=s.animXValue,m=s.circlePosXStart,h=s.circlePosXEnd,g=t.getSwitchStyles(),S=g.circleStyle,b=g.containerStyle,_=g.backgroundColorOff,w=g.backgroundColorOn,y=g.circleColorOff,O=g.circleColorOn;return c.createElement(p.TouchableOpacity,{onPress:this.handleOnPress,activeOpacity:1},c.createElement(p.Animated.View,{style:[f.container,b,{backgroundColor:d.interpolate({inputRange:[0,1],outputRange:[_,w]})}]},c.createElement(p.Animated.View,{style:[S,{backgroundColor:d.interpolate({inputRange:[0,1],outputRange:[y,O]})},{transform:[{translateX:d.interpolate({inputRange:[0,1],outputRange:[m,h]})}]}]},n?i:r)))}}]),t}(c.Component);h.defaultProps={backgroundColorOff:"rgb(215,215,215)",backgroundColorOn:"rgb(227,227,227)",circleColorOff:"white",circleColorOn:"rgb(102,134,205)",duration:300,circleStyle:{backgroundColor:"white",borderRadius:15,height:30,width:30},containerStyle:{backgroundColor:"rgb(227,227,227)",borderRadius:18,height:36,padding:3,width:72},isSwitchedOn:!1,onChange:function(){return null}};var f=p.StyleSheet.create({container:{alignItems:"center",flexDirection:"row"}}),g=(0,m.withTheme)(h);t.Switch=g;var S=g;t.default=S;try{g.displayName="Switch",g.__docgenInfo={description:"",displayName:"Switch",props:{isSwitchedOn:{defaultValue:null,description:"",name:"isSwitchedOn",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"() => void"}},onIcon:{defaultValue:null,description:"",name:"onIcon",required:!1,type:{name:"ReactNode"}},offIcon:{defaultValue:null,description:"",name:"offIcon",required:!1,type:{name:"ReactNode"}},duration:{defaultValue:null,description:"",name:"duration",required:!1,type:{name:"number"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Switch/Switch.tsx#Switch"]={docgenInfo:g.__docgenInfo,name:"Switch",path:"src/components/Switch/Switch.tsx#Switch"})}catch(b){}try{__class.displayName="__class",__class.__docgenInfo={description:"",displayName:"__class",props:{isSwitchedOn:{defaultValue:null,description:"",name:"isSwitchedOn",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"() => void"}},onIcon:{defaultValue:null,description:"",name:"onIcon",required:!1,type:{name:"ReactNode"}},offIcon:{defaultValue:null,description:"",name:"offIcon",required:!1,type:{name:"ReactNode"}},duration:{defaultValue:null,description:"",name:"duration",required:!1,type:{name:"number"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Switch/Switch.tsx#__class"]={docgenInfo:__class.__docgenInfo,name:"__class",path:"src/components/Switch/Switch.tsx#__class"})}catch(b){}}}]);
//# sourceMappingURL=17.c8a45eb5e48cedb71421.js.map