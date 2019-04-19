(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"./src/components/Drawer/Drawer.styles.ts":function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getDrawerStyles=n.getDrawerVariables=void 0;var t=function(e){return{container:{position:"absolute",width:"100%",zIndex:1},modalContainer:{alignItems:"center",display:"flex",height:"100%",justifyContent:"center",width:"100%"}}};n.getDrawerVariables=t;var o=function(e){var n={container:{position:"absolute",width:"100%",zIndex:1},modalContainer:{alignItems:"center",display:"flex",height:"100%",justifyContent:"center",width:"100%"}};return{containerStyle:n.container,modalContainerStyle:n.modalContainer}};n.getDrawerStyles=o;try{t.displayName="getDrawerVariables",t.__docgenInfo={description:"",displayName:"getDrawerVariables",props:{colors:{defaultValue:null,description:"",name:"colors",required:!0,type:{name:"Colors"}},fills:{defaultValue:null,description:"",name:"fills",required:!0,type:{name:"Fills"}},fontFamilies:{defaultValue:null,description:"",name:"fontFamilies",required:!0,type:{name:"FontFamilies"}},fontWeights:{defaultValue:null,description:"",name:"fontWeights",required:!0,type:{name:"FontWeights"}},headingSizes:{defaultValue:null,description:"",name:"headingSizes",required:!0,type:{name:"HeadingSizes"}},paragraphSizes:{defaultValue:null,description:"",name:"paragraphSizes",required:!0,type:{name:"ParagraphSizes"}},textSizes:{defaultValue:null,description:"",name:"textSizes",required:!0,type:{name:"TextSizes"}},elevations:{defaultValue:null,description:"",name:"elevations",required:!0,type:{name:"ViewStyle[]"}},controlPaddings:{defaultValue:null,description:"",name:"controlPaddings",required:!0,type:{name:"ControlSizes"}},controlHeights:{defaultValue:null,description:"",name:"controlHeights",required:!0,type:{name:"ControlSizes"}},controlBorderRadius:{defaultValue:null,description:"",name:"controlBorderRadius",required:!0,type:{name:"ControlSizes"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Drawer/Drawer.styles.ts#getDrawerVariables"]={docgenInfo:t.__docgenInfo,name:"getDrawerVariables",path:"src/components/Drawer/Drawer.styles.ts#getDrawerVariables"})}catch(r){}try{o.displayName="getDrawerStyles",o.__docgenInfo={description:"",displayName:"getDrawerStyles",props:{colors:{defaultValue:null,description:"",name:"colors",required:!0,type:{name:"Colors"}},fills:{defaultValue:null,description:"",name:"fills",required:!0,type:{name:"Fills"}},fontFamilies:{defaultValue:null,description:"",name:"fontFamilies",required:!0,type:{name:"FontFamilies"}},fontWeights:{defaultValue:null,description:"",name:"fontWeights",required:!0,type:{name:"FontWeights"}},headingSizes:{defaultValue:null,description:"",name:"headingSizes",required:!0,type:{name:"HeadingSizes"}},paragraphSizes:{defaultValue:null,description:"",name:"paragraphSizes",required:!0,type:{name:"ParagraphSizes"}},textSizes:{defaultValue:null,description:"",name:"textSizes",required:!0,type:{name:"TextSizes"}},elevations:{defaultValue:null,description:"",name:"elevations",required:!0,type:{name:"ViewStyle[]"}},controlPaddings:{defaultValue:null,description:"",name:"controlPaddings",required:!0,type:{name:"ControlSizes"}},controlHeights:{defaultValue:null,description:"",name:"controlHeights",required:!0,type:{name:"ControlSizes"}},controlBorderRadius:{defaultValue:null,description:"",name:"controlBorderRadius",required:!0,type:{name:"ControlSizes"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Drawer/Drawer.styles.ts#getDrawerStyles"]={docgenInfo:o.__docgenInfo,name:"getDrawerStyles",path:"src/components/Drawer/Drawer.styles.ts#getDrawerStyles"})}catch(r){}},"./src/components/Drawer/Drawer.tsx":function(e,n,t){var o=t("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(n,"__esModule",{value:!0}),n.Drawer=void 0;var a=r(t("./node_modules/@babel/runtime/helpers/defineProperty.js")),i=r(t("./node_modules/@babel/runtime/helpers/objectSpread.js")),s=o(t("./node_modules/react/index.js")),l=t("./node_modules/react-native-web/dist/index.js"),d=t("./src/theme/index.ts"),u=t("./src/utils/mergeStyles.ts"),p=t("./src/components/Modal/index.ts"),c=t("./src/components/Overlay/index.ts"),m=t("./src/components/Drawer/Drawer.styles.ts"),f=function(e){var n=e.children,t=e.isVisible,o=e.onClose,r=void 0===o?function(){return null}:o,f=e.position,g=void 0===f?"bottom":f,y=e.offset,w=void 0===y?0:y,h=e.space,b=e.getStyles,_=(0,d.useTheme)(),S=(0,u.mergeStyles)(m.getDrawerStyles,b)(_),D=S.modalContainerStyle,M=S.containerStyle;if(!t)return null;var V=new l.Animated.Value(-500);return l.Animated.spring(V,{bounciness:0,speed:70,toValue:w}).start(),s.createElement(p.Modal,{visible:!0,transparent:!0,onRequestClose:r},s.createElement(l.View,{style:D},s.createElement(l.Animated.View,{style:(0,i.default)({},M,(0,a.default)({},g,V),("left"===g||"right"===g)&&h&&{height:"100%",width:h},("bottom"===g||"top"===g)&&h&&{height:h,width:"100%"})},n),s.createElement(c.Overlay,{onPress:r})))};n.Drawer=f;try{f.displayName="Drawer",f.__docgenInfo={description:"",displayName:"Drawer",props:{isVisible:{defaultValue:null,description:"To show dialog or not",name:"isVisible",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Called when clicking on overlay or pressing Esc",name:"onClose",required:!1,type:{name:"() => void"}},offset:{defaultValue:null,description:"Amount to offset from the edge of window @default 0",name:"offset",required:!1,type:{name:"number"}},space:{defaultValue:null,description:"Amount of % screen to take up.",name:"space",required:!1,type:{name:"ReactText"}},position:{defaultValue:null,description:"Which side to draw from @default bottom",name:"position",required:!1,type:{name:"Position"}},getStyles:{defaultValue:null,description:"",name:"getStyles",required:!1,type:{name:"ReplaceReturnType<GetDrawerStyles, DeepPartial<DrawerStyles>>"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Drawer/Drawer.tsx#Drawer"]={docgenInfo:f.__docgenInfo,name:"Drawer",path:"src/components/Drawer/Drawer.tsx#Drawer"})}catch(g){}},"./src/components/Drawer/index.ts":function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0});var o=t("./src/components/Drawer/Drawer.tsx");Object.keys(o).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(n,e,{enumerable:!0,get:function(){return o[e]}})})},"./src/components/Menu/DrawerMenu.tsx":function(e,n,t){var o=t("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(n,"__esModule",{value:!0}),n.DrawerMenu=void 0;var a=r(t("./node_modules/@babel/runtime/helpers/extends.js")),i=o(t("./node_modules/react/index.js")),s=t("./src/theme/index.ts"),l=t("./src/components/Button/index.ts"),d=t("./src/components/Drawer/index.ts"),u=t("./src/components/Layout/index.ts"),p=function(e){var n=e.options,t=void 0===n?[]:n,o=e.isVisible,r=e.onClose,p=(0,s.useTheme)();return i.createElement(d.Drawer,{isVisible:o,onClose:r},i.createElement(u.Spacing,{padding:3},i.createElement(u.Box,{elevation:1,borderRadius:p.controlBorderRadius.medium,borderWidth:1,borderColor:p.colors.border.default},t.map(function(e){return i.createElement(l.Button,(0,a.default)({key:e.title},e))})),i.createElement(u.Spacing,{paddingTop:3},i.createElement(l.Button,{onPress:r,title:"Close"}))))};n.DrawerMenu=p;try{p.displayName="DrawerMenu",p.__docgenInfo={description:"",displayName:"DrawerMenu",props:{isVisible:{defaultValue:null,description:"To show dialog or not",name:"isVisible",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Called when clicking on overlay or pressing Esc",name:"onClose",required:!1,type:{name:"() => void"}},options:{defaultValue:null,description:"List of menu options, which also take `ButtonProps`",name:"options",required:!1,type:{name:"any[]"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Menu/DrawerMenu.tsx#DrawerMenu"]={docgenInfo:p.__docgenInfo,name:"DrawerMenu",path:"src/components/Menu/DrawerMenu.tsx#DrawerMenu"})}catch(c){}},"./src/components/Menu/DropdownMenu.mdx":function(e,n,t){var o=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=o(t("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),a=o(t("./node_modules/@babel/runtime/helpers/classCallCheck.js")),i=o(t("./node_modules/@babel/runtime/helpers/createClass.js")),s=o(t("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),l=o(t("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),d=o(t("./node_modules/@babel/runtime/helpers/inherits.js")),u=o(t("./node_modules/react/index.js")),p=t("./node_modules/@mdx-js/tag/dist/index.js"),c=t("./node_modules/docz/dist/index.m.js"),m=t("./node_modules/react-powerplug/dist/react-powerplug.esm.js"),f=t("./src/components/Menu/index.ts"),g=t("./src/components/Button/index.ts"),y=function(e){function n(e){var t;return(0,a.default)(this,n),(t=(0,s.default)(this,(0,l.default)(n).call(this,e))).layout=null,t}return(0,d.default)(n,e),(0,i.default)(n,[{key:"render",value:function(){var e=this.props,n=e.components,t=(0,r.default)(e,["components"]);return u.default.createElement(p.MDXTag,{name:"wrapper",components:n},u.default.createElement(p.MDXTag,{name:"h1",components:n,props:{id:"dropdownmenu"}},"DropdownMenu"),u.default.createElement(p.MDXTag,{name:"h3",components:n,props:{id:"usage"}},"Usage"),u.default.createElement(c.Playground,{__position:0,__code:"<Toggle>\n  {({ on, toggle }) => (\n    <>\n      <DropdownMenu\n        options={[\n          {\n            onPress: toggle,\n            title: 'Menu Option 1',\n            color: 'danger',\n            appearance: 'minimal',\n          },\n          {\n            onPress: toggle,\n            title: 'Menu Option 2',\n            color: 'primary',\n            appearance: 'minimal',\n          },\n          {\n            onPress: toggle,\n            title: 'Menu Option 3',\n            color: 'secondary',\n            appearance: 'minimal',\n          },\n          {\n            onPress: toggle,\n            title: 'Menu Option 4',\n            appearance: 'minimal',\n          },\n        ]}\n        isVisible={on}\n        onClose={toggle}\n      >\n        <Button isInline onPress={toggle} title=\"Open dropdown menu\" />\n      </DropdownMenu>\n    </>\n  )}\n</Toggle>",__scope:{props:this?this.props:t,Toggle:m.Toggle,DropdownMenu:f.DropdownMenu,Button:g.Button}},u.default.createElement(m.Toggle,null,function(e){var n=e.on,t=e.toggle;return u.default.createElement(u.default.Fragment,null,u.default.createElement(f.DropdownMenu,{options:[{onPress:t,title:"Menu Option 1",color:"danger",appearance:"minimal"},{onPress:t,title:"Menu Option 2",color:"primary",appearance:"minimal"},{onPress:t,title:"Menu Option 3",color:"secondary",appearance:"minimal"},{onPress:t,title:"Menu Option 4",appearance:"minimal"}],isVisible:n,onClose:t},u.default.createElement(g.Button,{isInline:!0,onPress:t,title:"Open dropdown menu"})))})))}}]),n}(u.default.Component);n.default=y},"./src/components/Menu/DropdownMenu.tsx":function(e,n,t){var o=t("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(n,"__esModule",{value:!0}),n.DropdownMenu=void 0;var a=r(t("./node_modules/@babel/runtime/helpers/extends.js")),i=r(t("./node_modules/@babel/runtime/helpers/slicedToArray.js")),s=o(t("./node_modules/react/index.js")),l=t("./src/theme/index.ts"),d=t("./src/components/Button/index.ts"),u=t("./src/components/Helpers/index.ts"),p=t("./src/components/Layout/index.ts"),c=t("./src/components/Positioner/index.ts"),m=function(e){var n=e.options,t=void 0===n?[]:n,o=e.isVisible,r=e.onClose,m=e.children,f=s.useState({height:0,pageX:0,pageY:0,width:0,x:0,y:0}),g=(0,i.default)(f,2),y=g[0],w=g[1],h=(0,l.useTheme)();return s.createElement(c.Positioner,{position:"bottom",content:function(){return s.createElement(p.Box,{elevation:1,borderRadius:h.controlBorderRadius.medium,borderWidth:1,borderColor:h.colors.border.default,width:y.width},t.map(function(e){return s.createElement(d.Button,(0,a.default)({key:e.title},e))}))},isVisible:o,onClose:r},s.createElement(u.ViewMeasure,{onMeasure:w},m))};n.DropdownMenu=m;try{m.displayName="DropdownMenu",m.__docgenInfo={description:"",displayName:"DropdownMenu",props:{isVisible:{defaultValue:null,description:"To show dialog or not",name:"isVisible",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Called when clicking on overlay or pressing Esc",name:"onClose",required:!1,type:{name:"() => void"}},options:{defaultValue:null,description:"List of menu options, which also take `ButtonProps`",name:"options",required:!1,type:{name:"any[]"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Menu/DropdownMenu.tsx#DropdownMenu"]={docgenInfo:m.__docgenInfo,name:"DropdownMenu",path:"src/components/Menu/DropdownMenu.tsx#DropdownMenu"})}catch(f){}},"./src/components/Menu/index.ts":function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0});var o=t("./src/components/Menu/DrawerMenu.tsx");Object.keys(o).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(n,e,{enumerable:!0,get:function(){return o[e]}})});var r=t("./src/components/Menu/DropdownMenu.tsx");Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(n,e,{enumerable:!0,get:function(){return r[e]}})})}}]);
//# sourceMappingURL=27.9c5844844be652539b6a.js.map