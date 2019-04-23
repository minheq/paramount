(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"./src/components/Button/BackButton.tsx":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.BackButton=void 0;var l=r(o("./node_modules/@babel/runtime/helpers/extends.js")),a=n(o("./node_modules/react/index.js")),s=o("./src/icons/index.ts"),i=o("./src/theme/index.ts"),d=o("./src/components/Button/Button.tsx"),u=function(e){var t=(0,i.useTheme)();return a.createElement(d.Button,(0,l.default)({appearance:"minimal",isInline:!0,iconBefore:a.createElement(s.Icon,{name:"arrow-left",size:24,color:t.colors.text.default}),size:"small"},e))};t.BackButton=u,u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BackButton",filename:"src/components/Button/BackButton.tsx"}})},"./src/components/Button/Button.styles.ts":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.getButtonStyles=t.getButtonVariables=void 0;var r=n(o("./node_modules/@babel/runtime/helpers/objectSpread.js")),l=n(o("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));"undefined"!==typeof ButtonColorProps&&ButtonColorProps&&ButtonColorProps===Object(ButtonColorProps)&&Object.isExtensible(ButtonColorProps)&&Object.defineProperty(ButtonColorProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColorProps",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof ButtonColors&&ButtonColors&&ButtonColors===Object(ButtonColors)&&Object.isExtensible(ButtonColors)&&Object.defineProperty(ButtonColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColors",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof ButtonColor&&ButtonColor&&ButtonColor===Object(ButtonColor)&&Object.isExtensible(ButtonColor)&&Object.defineProperty(ButtonColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColor",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof ButtonAppearances&&ButtonAppearances&&ButtonAppearances===Object(ButtonAppearances)&&Object.isExtensible(ButtonAppearances)&&Object.defineProperty(ButtonAppearances,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonAppearances",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof ButtonAppearance&&ButtonAppearance&&ButtonAppearance===Object(ButtonAppearance)&&Object.isExtensible(ButtonAppearance)&&Object.defineProperty(ButtonAppearance,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonAppearance",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof SizeStyles&&SizeStyles&&SizeStyles===Object(SizeStyles)&&Object.isExtensible(SizeStyles)&&Object.defineProperty(SizeStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SizeStyles",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof ButtonSizes&&ButtonSizes&&ButtonSizes===Object(ButtonSizes)&&Object.isExtensible(ButtonSizes)&&Object.defineProperty(ButtonSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonSizes",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof ButtonSize&&ButtonSize&&ButtonSize===Object(ButtonSize)&&Object.isExtensible(ButtonSize)&&Object.defineProperty(ButtonSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonSize",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof ButtonVariables&&ButtonVariables&&ButtonVariables===Object(ButtonVariables)&&Object.isExtensible(ButtonVariables)&&Object.defineProperty(ButtonVariables,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonVariables",filename:"src/components/Button/Button.styles.ts"}});var a=function(e){return{appearances:{minimal:{default:{backgroundColor:e.colors.background.white,color:e.colors.text.default,focusColor:e.colors.background.greyDefault},danger:{backgroundColor:e.colors.background.white,color:e.colors.text.danger,focusColor:e.colors.background.greyDefault},primary:{backgroundColor:e.colors.background.white,color:e.colors.text.primary,focusColor:e.colors.background.greyDefault},secondary:{backgroundColor:e.colors.background.white,color:e.colors.text.secondary?e.colors.text.secondary:e.colors.text.default,focusColor:e.colors.background.greyDefault}},primary:{default:{backgroundColor:e.colors.background.greyLight,borderColor:e.colors.border.default,color:e.colors.text.default,focusColor:e.colors.background.greyDefault,loadingBackgroundColor:e.colors.background.overlay},danger:{backgroundColor:e.colors.background.dangerDefault,borderColor:e.colors.border.danger,color:"white",focusColor:e.colors.background.dangerDark,loadingBackgroundColor:e.colors.background.dangerLight},primary:{backgroundColor:e.colors.background.primaryDefault,borderColor:e.colors.border.primary,color:"white",focusColor:e.colors.background.primaryDark,loadingBackgroundColor:e.colors.background.primaryLight},secondary:{backgroundColor:e.colors.background.secondaryDefault,borderColor:e.colors.border.secondary,color:"white",focusColor:e.colors.background.secondaryDark,loadingBackgroundColor:e.colors.background.secondaryLight}},outline:{default:{backgroundColor:e.colors.background.white,borderColor:e.colors.text.default,borderWidth:3,color:e.colors.text.default,focusColor:e.colors.background.greyDefault},danger:{backgroundColor:e.colors.background.white,borderColor:e.colors.border.danger,borderWidth:3,color:e.colors.text.danger,focusColor:e.colors.background.dangerLight},primary:{backgroundColor:e.colors.background.white,borderColor:e.colors.border.primary,borderWidth:3,color:e.colors.text.primary,focusColor:e.colors.background.primaryLight},secondary:{backgroundColor:e.colors.background.white,borderColor:e.colors.border.secondary,borderWidth:3,color:e.colors.text.secondary,focusColor:e.colors.background.secondaryLight}}},disabled:{backgroundColor:e.colors.background.greyDark,color:e.colors.text.muted},sizes:{small:{borderRadius:e.controlBorderRadius.small,fontSize:e.textSizes.small.fontSize||14,height:e.controlHeights.small,paddingLeft:e.controlPaddings.small,paddingRight:e.controlPaddings.small},medium:{borderRadius:e.controlBorderRadius.medium,fontSize:e.textSizes.medium.fontSize||16,height:e.controlHeights.medium,paddingLeft:e.controlPaddings.medium,paddingRight:e.controlPaddings.medium},large:{borderRadius:e.controlBorderRadius.large,fontSize:e.textSizes.large.fontSize||20,height:e.controlHeights.large,paddingLeft:e.controlPaddings.large,paddingRight:e.controlPaddings.large}}}};t.getButtonVariables=a,a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getButtonVariables",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof ButtonStyles&&ButtonStyles&&ButtonStyles===Object(ButtonStyles)&&Object.isExtensible(ButtonStyles)&&Object.defineProperty(ButtonStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonStyles",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof ButtonStylesProps&&ButtonStylesProps&&ButtonStylesProps===Object(ButtonStylesProps)&&Object.isExtensible(ButtonStylesProps)&&Object.defineProperty(ButtonStylesProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonStylesProps",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof GetButtonStyles&&GetButtonStyles&&GetButtonStyles===Object(GetButtonStyles)&&Object.isExtensible(GetButtonStyles)&&Object.defineProperty(GetButtonStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetButtonStyles",filename:"src/components/Button/Button.styles.ts"}});var s=function(e,t){var o=e.appearance,n=e.color,s=e.size,i=e.isDisabled,d=e.isLoading,u=e.isInline,c=a(t),m=c.appearances,b=c.sizes,p=c.disabled,f=(0,l.default)(c,["appearances","sizes","disabled"]),y=m[o][n],g=y.color,v=y.focusColor,h=y.loadingBackgroundColor,j=(0,l.default)(y,["color","focusColor","loadingBackgroundColor"]),x=b[s],O=x.fontSize,_=(0,l.default)(x,["fontSize"]),B=p.color,P=(0,l.default)(p,["color"]);return{buttonStyle:(0,r.default)({},i?(0,r.default)({},P,_):(0,r.default)({},_,f,j,d?{backgroundColor:h}:{}),u?{alignSelf:"flex-start",flexDirection:"row",flexWrap:"wrap"}:{}),focusColor:v,textStyle:{alignItems:"center",color:i?B:g,display:"flex",fontSize:O,fontWeight:"600",justifyContent:"center",textAlign:"center"}}};t.getButtonStyles=s,s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getButtonStyles",filename:"src/components/Button/Button.styles.ts"}})},"./src/components/Button/Button.tsx":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.Button=void 0;var l=r(o("./node_modules/@babel/runtime/helpers/extends.js")),a=r(o("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),s=n(o("./node_modules/react/index.js")),i=o("./node_modules/react-native-web/dist/index.js"),d=o("./src/theme/index.ts"),u=o("./src/utils/mergeStyles.ts"),c=o("./src/components/Layout/index.ts"),m=o("./src/components/Loading/index.ts"),b=o("./src/components/Typography/index.ts"),p=o("./src/components/Button/Button.styles.ts");"undefined"!==typeof ButtonProps&&ButtonProps&&ButtonProps===Object(ButtonProps)&&Object.isExtensible(ButtonProps)&&Object.defineProperty(ButtonProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonProps",filename:"src/components/Button/Button.tsx"}});var f=function(e){var t=e.appearance,o=void 0===t?"primary":t,n=(e.title,e.color),r=void 0===n?"default":n,m=e.getStyles,b=(e.icon,e.iconAfter),f=e.iconBefore,g=(e.iconLoading,e.isActive,e.isDisabled),v=void 0!==g&&g,h=e.isInline,j=void 0!==h&&h,x=e.isLoading,O=void 0!==x&&x,_=e.onPress,B=void 0===_?function(){}:_,P=e.size,w=void 0===P?"medium":P,C=e.testID,S=(0,a.default)(e,["appearance","title","color","getStyles","icon","iconAfter","iconBefore","iconLoading","isActive","isDisabled","isInline","isLoading","onPress","size","testID"]),D=(0,d.useTheme)(),M=(0,u.mergeStyles)(p.getButtonStyles,m)({appearance:o,color:r,isDisabled:v,isInline:j,isLoading:O,size:w},D),k=M.buttonStyle,E=M.textStyle,T=M.focusColor;return s.createElement(i.TouchableHighlight,(0,l.default)({accessible:!0,accessibilityRole:"button",underlayColor:T,disabled:!(!v&&!O),onPress:B,style:k,testID:C},S),s.createElement(i.View,{style:{alignItems:"center",flexDirection:"row",height:"100%",justifyContent:"center"}},f,s.createElement(c.Spacing,{paddingLeft:f?1:0,paddingRight:b?1:0},s.createElement(y,(0,l.default)({},e,{textStyle:E}))),b))};t.Button=f,f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Button",filename:"src/components/Button/Button.tsx"}}),"undefined"!==typeof ButtonContentProps&&ButtonContentProps&&ButtonContentProps===Object(ButtonContentProps)&&Object.isExtensible(ButtonContentProps)&&Object.defineProperty(ButtonContentProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonContentProps",filename:"src/components/Button/Button.tsx"}});var y=function(e){var t=e.isLoading,o=e.iconLoading,n=e.icon,r=e.title,l=e.textStyle;return t?o||s.createElement(m.LoadingDots,{color:l.color}):n||(r?s.createElement(b.Text,{getStyles:function(){return{textStyle:l}}},r):null)}},"./src/components/Button/index.ts":function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0});var n=o("./src/components/Button/Button.tsx");Object.keys(n).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})});var r=o("./src/components/Button/BackButton.tsx");Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})})},"./src/components/Drawer/Drawer.mdx":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=y;var r=n(o("./node_modules/@babel/runtime/helpers/extends.js")),l=n(o("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),a=n(o("./node_modules/react/index.js")),s=o("./node_modules/@mdx-js/react/dist/index.es.js"),i=o("./node_modules/docz/dist/index.esm.js"),d=o("./node_modules/react-powerplug/dist/react-powerplug.esm.js"),u=o("./src/components/Drawer/index.ts"),c=o("./src/components/Button/index.ts"),m=o("./src/components/Layout/index.ts"),b=o("./src/components/Typography/index.ts"),p={},f="wrapper";function y(e){var t=e.components,o=(0,l.default)(e,["components"]);return(0,s.mdx)(f,(0,r.default)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"drawer"},"Drawer"),(0,s.mdx)("h3",{id:"usage"},"Usage"),(0,s.mdx)(i.Playground,{__position:0,__code:'<Drawer\n  space="30%"\n  isVisible={false}\n  onClose={() => console.log(\'Close\')}\n  offset={0}\n  position="left"\n  getStyles={(props, theme) => ({\n    modalContainerStyle: {},\n    containerStyle: {},\n  })}\n/>',__scope:{props:this?this.props:o,Playground:i.Playground,Props:i.Props,Toggle:d.Toggle,Drawer:u.Drawer,Button:c.Button,Box:m.Box,Spacing:m.Spacing,Text:b.Text},mdxType:"Playground"},(0,s.mdx)(u.Drawer,{space:"30%",isVisible:!1,onClose:function(){return console.log("Close")},offset:0,position:"left",getStyles:function(e,t){return{modalContainerStyle:{},containerStyle:{}}},mdxType:"Drawer"})),(0,s.mdx)("h3",{id:"variants"},"Variants"),(0,s.mdx)(i.Playground,{__position:1,__code:'<Toggle>\n  {({ on, toggle }) => (\n    <>\n      <Button onPress={toggle} title="Open bottom drawer" />\n      <Drawer space="30%" isVisible={on} onClose={toggle}>\n        <Box width="100%" height="100%" backgroundColor="white" />\n      </Drawer>\n    </>\n  )}\n</Toggle>\n<Toggle>\n  {({ on, toggle }) => (\n    <>\n      <Button onPress={toggle} title="Open top drawer" />\n      <Drawer space="30%" position="top" isVisible={on} onClose={toggle}>\n        <Box width="100%" height="100%" backgroundColor="white" />\n      </Drawer>\n    </>\n  )}\n</Toggle>\n<Toggle>\n  {({ on, toggle }) => (\n    <>\n      <Button onPress={toggle} title="Open left drawer" />\n      <Drawer space="30%" position="left" isVisible={on} onClose={toggle}>\n        <Box width="100%" height="100%" backgroundColor="white" />\n      </Drawer>\n    </>\n  )}\n</Toggle>\n<Toggle>\n  {({ on, toggle }) => (\n    <>\n      <Button onPress={toggle} title="Open right drawer" />\n      <Drawer space="30%" position="right" isVisible={on} onClose={toggle}>\n        <Box width="100%" height="100%" backgroundColor="white" />\n      </Drawer>\n    </>\n  )}\n</Toggle>',__scope:{props:this?this.props:o,Playground:i.Playground,Props:i.Props,Toggle:d.Toggle,Drawer:u.Drawer,Button:c.Button,Box:m.Box,Spacing:m.Spacing,Text:b.Text},mdxType:"Playground"},(0,s.mdx)(d.Toggle,{mdxType:"Toggle"},function(e){var t=e.on,o=e.toggle;return(0,s.mdx)(a.default.Fragment,null,(0,s.mdx)(c.Button,{onPress:o,title:"Open bottom drawer",mdxType:"Button"}),(0,s.mdx)(u.Drawer,{space:"30%",isVisible:t,onClose:o,mdxType:"Drawer"},(0,s.mdx)(m.Box,{width:"100%",height:"100%",backgroundColor:"white",mdxType:"Box"})))}),(0,s.mdx)(d.Toggle,{mdxType:"Toggle"},function(e){var t=e.on,o=e.toggle;return(0,s.mdx)(a.default.Fragment,null,(0,s.mdx)(c.Button,{onPress:o,title:"Open top drawer",mdxType:"Button"}),(0,s.mdx)(u.Drawer,{space:"30%",position:"top",isVisible:t,onClose:o,mdxType:"Drawer"},(0,s.mdx)(m.Box,{width:"100%",height:"100%",backgroundColor:"white",mdxType:"Box"})))}),(0,s.mdx)(d.Toggle,{mdxType:"Toggle"},function(e){var t=e.on,o=e.toggle;return(0,s.mdx)(a.default.Fragment,null,(0,s.mdx)(c.Button,{onPress:o,title:"Open left drawer",mdxType:"Button"}),(0,s.mdx)(u.Drawer,{space:"30%",position:"left",isVisible:t,onClose:o,mdxType:"Drawer"},(0,s.mdx)(m.Box,{width:"100%",height:"100%",backgroundColor:"white",mdxType:"Box"})))}),(0,s.mdx)(d.Toggle,{mdxType:"Toggle"},function(e){var t=e.on,o=e.toggle;return(0,s.mdx)(a.default.Fragment,null,(0,s.mdx)(c.Button,{onPress:o,title:"Open right drawer",mdxType:"Button"}),(0,s.mdx)(u.Drawer,{space:"30%",position:"right",isVisible:t,onClose:o,mdxType:"Drawer"},(0,s.mdx)(m.Box,{width:"100%",height:"100%",backgroundColor:"white",mdxType:"Box"})))})))}y&&y===Object(y)&&Object.isExtensible(y)&&Object.defineProperty(y,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Drawer/Drawer.mdx"}}),y.isMDXComponent=!0},"./src/components/Drawer/Drawer.styles.ts":function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.getDrawerStyles=t.getDrawerVariables=void 0,"undefined"!==typeof DrawerVariables&&DrawerVariables&&DrawerVariables===Object(DrawerVariables)&&Object.isExtensible(DrawerVariables)&&Object.defineProperty(DrawerVariables,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DrawerVariables",filename:"src/components/Drawer/Drawer.styles.ts"}});var o=function(e){return{container:{position:"absolute",width:"100%",zIndex:1},modalContainer:{alignItems:"center",display:"flex",height:"100%",justifyContent:"center",width:"100%"}}};t.getDrawerVariables=o,o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getDrawerVariables",filename:"src/components/Drawer/Drawer.styles.ts"}}),"undefined"!==typeof DrawerStyles&&DrawerStyles&&DrawerStyles===Object(DrawerStyles)&&Object.isExtensible(DrawerStyles)&&Object.defineProperty(DrawerStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DrawerStyles",filename:"src/components/Drawer/Drawer.styles.ts"}}),"undefined"!==typeof GetDrawerStyles&&GetDrawerStyles&&GetDrawerStyles===Object(GetDrawerStyles)&&Object.isExtensible(GetDrawerStyles)&&Object.defineProperty(GetDrawerStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetDrawerStyles",filename:"src/components/Drawer/Drawer.styles.ts"}});var n=function(e){var t={container:{position:"absolute",width:"100%",zIndex:1},modalContainer:{alignItems:"center",display:"flex",height:"100%",justifyContent:"center",width:"100%"}};return{containerStyle:t.container,modalContainerStyle:t.modalContainer}};t.getDrawerStyles=n,n&&n===Object(n)&&Object.isExtensible(n)&&Object.defineProperty(n,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getDrawerStyles",filename:"src/components/Drawer/Drawer.styles.ts"}})},"./src/components/Drawer/Drawer.tsx":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.Drawer=void 0;var l=r(o("./node_modules/@babel/runtime/helpers/defineProperty.js")),a=r(o("./node_modules/@babel/runtime/helpers/objectSpread.js")),s=n(o("./node_modules/react/index.js")),i=o("./node_modules/react-native-web/dist/index.js"),d=o("./src/theme/index.ts"),u=o("./src/utils/mergeStyles.ts"),c=o("./src/components/Modal/index.ts"),m=o("./src/components/Overlay/index.ts"),b=o("./src/components/Drawer/Drawer.styles.ts");"undefined"!==typeof DrawerProps&&DrawerProps&&DrawerProps===Object(DrawerProps)&&Object.isExtensible(DrawerProps)&&Object.defineProperty(DrawerProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DrawerProps",filename:"src/components/Drawer/Drawer.tsx"}});var p=function(e){var t=e.children,o=e.isVisible,n=e.onClose,r=void 0===n?function(){return null}:n,p=e.position,f=void 0===p?"bottom":p,y=e.offset,g=void 0===y?0:y,v=e.space,h=e.getStyles,j=(0,d.useTheme)(),x=(0,u.mergeStyles)(b.getDrawerStyles,h)(j),O=x.modalContainerStyle,_=x.containerStyle;if(!o)return null;var B=new i.Animated.Value(-500);return i.Animated.spring(B,{bounciness:0,speed:70,toValue:g}).start(),s.createElement(c.Modal,{visible:!0,transparent:!0,onRequestClose:r},s.createElement(i.View,{style:O},s.createElement(i.Animated.View,{style:(0,a.default)({},_,(0,l.default)({},f,B),("left"===f||"right"===f)&&v&&{height:"100%",width:v},("bottom"===f||"top"===f)&&v&&{height:v,width:"100%"})},t),s.createElement(m.Overlay,{onPress:r})))};t.Drawer=p,p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Drawer",filename:"src/components/Drawer/Drawer.tsx"}})},"./src/components/Drawer/index.ts":function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0});var n=o("./src/components/Drawer/Drawer.tsx");Object.keys(n).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})})},"./src/components/Loading/LoadingDots.tsx":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.LoadingDots=void 0;var l=r(o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js")),a=r(o("./node_modules/@babel/runtime/helpers/asyncToGenerator.js")),s=n(o("./node_modules/react/index.js")),i=o("./node_modules/react-native-web/dist/index.js"),d=o("./node_modules/react-spring/native.js"),u=(0,d.animated)(i.View);"undefined"!==typeof LoadingDotsProps&&LoadingDotsProps&&LoadingDotsProps===Object(LoadingDotsProps)&&Object.isExtensible(LoadingDotsProps)&&Object.defineProperty(LoadingDotsProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"LoadingDotsProps",filename:"src/components/Loading/LoadingDots.tsx"}});var c=["1","2","3"],m=function(e){var t=e.size,o=void 0===t?10:t,n=e.color,r=void 0===n?"#aaa":n,m=(0,d.useTrail)(c.length,{config:{duration:800},from:{opacity:0},reset:!0,to:function(){var e=(0,a.default)(l.default.mark(function e(t){return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,t({opacity:1});case 3:return e.next=5,t({opacity:0});case 5:e.next=0;break;case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()});return s.createElement(i.View,{style:{alignItems:"center",flexDirection:"row",justifyContent:"center"}},m.map(function(e,t){return s.createElement(u,{key:c[t],style:{backgroundColor:r,borderRadius:"50%",height:o,marginLeft:3,marginRight:3,opacity:e.opacity,width:o}})}))};t.LoadingDots=m,m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"LoadingDots",filename:"src/components/Loading/LoadingDots.tsx"}})},"./src/components/Loading/index.ts":function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0});var n=o("./src/components/Loading/LoadingDots.tsx");Object.keys(n).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})})},"./src/components/Modal/CloseableModal.tsx":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.CloseableModal=void 0;var l=r(o("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),a=n(o("./node_modules/react/index.js")),s=o("./node_modules/react-native-web/dist/index.js"),i=o("./src/components/Modal/index.ts"),d=o("./src/icons/index.ts"),u=o("./src/theme/index.ts"),c=o("./src/components/Layout/index.ts"),m=o("./src/components/Modal/ModalContent.tsx");"undefined"!==typeof CloseableModalProps&&CloseableModalProps&&CloseableModalProps===Object(CloseableModalProps)&&Object.isExtensible(CloseableModalProps)&&Object.defineProperty(CloseableModalProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CloseableModalProps",filename:"src/components/Modal/CloseableModal.tsx"}});var b=function(e){var t=e.children,o=e.rightSide,n=e.onClose,r=(0,l.default)(e,["children","rightSide","onClose"]),b=(0,u.useTheme)();return a.createElement(i.Modal,r,a.createElement(m.ModalContent,null,a.createElement(c.Box,{flexDirection:"row",justifyContent:"space-between"},a.createElement(s.TouchableOpacity,{style:{width:56,height:60,justifyContent:"center"},onPress:function(e){e.preventDefault(),n()}},a.createElement(s.View,{style:{paddingHorizontal:8}},a.createElement(d.Icon,{color:b.colors.text.default,size:40,name:"x"}))),o),t))};t.CloseableModal=b,b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CloseableModal",filename:"src/components/Modal/CloseableModal.tsx"}})},"./src/components/Modal/FormModal.tsx":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.FormModal=void 0;var l=r(o("./node_modules/@babel/runtime/helpers/extends.js")),a=r(o("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),s=n(o("./node_modules/react/index.js")),i=o("./node_modules/react-native-web/dist/index.js"),d=o("./src/components/Typography/index.ts"),u=o("./src/components/Modal/CloseableModal.tsx");"undefined"!==typeof FormModalProps&&FormModalProps&&FormModalProps===Object(FormModalProps)&&Object.isExtensible(FormModalProps)&&Object.defineProperty(FormModalProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FormModalProps",filename:"src/components/Modal/FormModal.tsx"}});var c=function(e){var t=e.children,o=e.onClose,n=e.onClear,r=e.clearText,c=void 0===r?"Clear":r,m=(0,a.default)(e,["children","onClose","onClear","clearText"]);return s.createElement(u.CloseableModal,(0,l.default)({onClose:o,rightSide:s.createElement(i.TouchableOpacity,{onPress:function(e){e.preventDefault(),n()}},s.createElement(i.View,{style:{alignItems:"center",display:"flex",height:"100%",justifyContent:"center",paddingHorizontal:16}},s.createElement(d.Text,{isBold:!0},c)))},m),t)};t.FormModal=c,c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FormModal",filename:"src/components/Modal/FormModal.tsx"}})},"./src/components/Modal/HistoryModal.web.tsx":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.HistoryModal=void 0;var l=r(o("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),a=r(o("./node_modules/@babel/runtime/helpers/extends.js")),s=r(o("./node_modules/@babel/runtime/helpers/defineProperty.js")),i=r(o("./node_modules/@babel/runtime/helpers/objectSpread.js")),d=r(o("./node_modules/@babel/runtime/helpers/classCallCheck.js")),u=r(o("./node_modules/@babel/runtime/helpers/createClass.js")),c=r(o("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),m=r(o("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),b=r(o("./node_modules/@babel/runtime/helpers/inherits.js")),p=n(o("./node_modules/react/index.js")),f=o("./src/components/Modal/ModalBase.web.tsx"),y=0,g=function(e){function t(){var e,o;(0,d.default)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(o=(0,c.default)(this,(e=(0,m.default)(t)).call.apply(e,[this].concat(r)))).modalId=++y,o.componentDidUpdate=function(e){var t=o.props.visible;e.visible!==t&&(t?o.updateBrowserHistory():o.handleManuallyClosed())},o.componentWillUnmount=function(){o.clearBrowserState()},o.updateBrowserHistory=function(){history.state&&history.state.modal&&history.state.modal[o.modalId]||history.pushState((0,i.default)({},history.state,{modal:(0,i.default)({},history.state&&history.state.modal,(0,s.default)({},o.modalId,!0))}),""),window.addEventListener("popstate",o.handlePopstate,!1)},o.handlePopstate=function(e){var t=o.props,n=t.visible,r=t.onRequestClose;e.state&&e.state.modal&&e.state.modal[o.modalId]||!r||(o.clearBrowserState(),r()),!n&&e.state&&e.state.modal&&e.state.modal[o.modalId]&&history.go(-1)},o.handleEscapeKey=function(){var e=o.props.onRequestClose;(history.state||history.state.modal||history.state.modal[o.modalId])&&e&&(o.clearBrowserState(),e(),history.go(-1))},o.handleManuallyClosed=function(){history.state&&history.state.modal&&history.state.modal[o.modalId]&&(o.clearBrowserState(),history.go(-1))},o.clearBrowserState=function(){history.replaceState((0,i.default)({},history.state,{modal:(0,i.default)({},history.state&&history.state.modal,(0,s.default)({},o.modalId,!1))}),""),window.removeEventListener("popstate",o.handlePopstate,!1)},o}return(0,b.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=(0,a.default)({},this.props);return p.createElement(f.ModalBase,(0,a.default)({},e,{onRequestClose:this.handleEscapeKey}))}}]),t}(p.PureComponent),v=function(e){var t=e.useHistory,o=void 0!==t&&t,n=(0,l.default)(e,["useHistory"]);return o?p.createElement(g,n):p.createElement(f.ModalBase,n)};t.HistoryModal=v,v&&v===Object(v)&&Object.isExtensible(v)&&Object.defineProperty(v,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HistoryModal",filename:"src/components/Modal/HistoryModal.web.tsx"}})},"./src/components/Modal/Modal.tsx":function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0});var n=o("./src/components/Modal/HistoryModal.web.tsx");Object.keys(n).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})})},"./src/components/Modal/ModalBase.web.tsx":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.ModalBase=void 0;var l=r(o("./node_modules/@babel/runtime/helpers/classCallCheck.js")),a=r(o("./node_modules/@babel/runtime/helpers/createClass.js")),s=r(o("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),i=r(o("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),d=r(o("./node_modules/@babel/runtime/helpers/inherits.js")),u=r(o("./node_modules/focus-trap/index.js")),c=n(o("./node_modules/react/index.js")),m=n(o("./node_modules/react-dom/index.js")),b=function(e){function t(e){var o;return(0,l.default)(this,t),(o=(0,s.default)(this,(0,i.default)(t).call(this,e))).el=void 0,o.modalRoot=void 0,o.focusTrap=void 0,o.isUnmounting=!1,o.content=c.createRef(),o.freezeBody=function(){document.body.style.overflow="hidden",document.body.style.height="100vh"},o.unfreezeBody=function(){document.body.style.overflow="",document.body.style.height=""},o.activateFocus=function(){var e=o.props.onRequestClose;o.content.current&&!o.focusTrap&&(o.focusTrap=(0,u.default)(o.content.current,{initialFocus:o.content.current,onDeactivate:function(){e&&o.props.visible&&!o.isUnmounting&&e()}}),o.focusTrap.activate())},o.deactivateFocus=function(){o.focusTrap&&(o.focusTrap.deactivate(),o.focusTrap=null)},o.el=null,o.modalRoot=null,o.focusTrap=null,o}return(0,d.default)(t,e),(0,a.default)(t,[{key:"componentDidMount",value:function(){this.el=document.createElement("div"),this.modalRoot=document.getElementsByTagName("body")[0],this.modalRoot.appendChild(this.el),this.forceUpdate()}},{key:"componentDidUpdate",value:function(){var e=this.props,t=e.visible,o=e.isBackgroundScrollable,n=void 0!==o&&o;t?(this.activateFocus(),n||this.freezeBody()):(this.deactivateFocus(),n||this.unfreezeBody())}},{key:"componentWillUnmount",value:function(){this.modalRoot&&this.el&&this.modalRoot.removeChild(this.el),this.isUnmounting=!0,this.deactivateFocus()}},{key:"render",value:function(){var e=this.props,t=e.transparent,o=e.visible,n=e.isBackgroundScrollable,r=void 0!==n&&n;return o&&this.el?m.createPortal(c.createElement("div",{tabIndex:-1,ref:this.content,style:{backgroundColor:t?"transparent":"white",bottom:0,left:0,overflow:"auto",position:r?"absolute":"fixed",right:0,top:0,zIndex:1e3}},this.props.children),this.el):null}}]),t}(c.PureComponent);t.ModalBase=b,"undefined"!==typeof b&&b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ModalBase",filename:"src/components/Modal/ModalBase.web.tsx"}})},"./src/components/Modal/ModalContent.tsx":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),t.ModalContent=void 0;var r=n(o("./node_modules/react/index.js")),l=o("./node_modules/react-native-web/dist/index.js");"undefined"!==typeof ModalContentProps&&ModalContentProps&&ModalContentProps===Object(ModalContentProps)&&Object.isExtensible(ModalContentProps)&&Object.defineProperty(ModalContentProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ModalContentProps",filename:"src/components/Modal/ModalContent.tsx"}});var a=function(e){var t=e.children;return r.createElement(l.View,{style:{height:"100%",marginLeft:"auto",marginRight:"auto",maxWidth:960}},t)};t.ModalContent=a,a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ModalContent",filename:"src/components/Modal/ModalContent.tsx"}})},"./src/components/Modal/index.ts":function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0});var n={Modal:!0,ModalProps:!0};Object.defineProperty(t,"Modal",{enumerable:!0,get:function(){return i.HistoryModal}}),Object.defineProperty(t,"ModalProps",{enumerable:!0,get:function(){return i.HistoryModalProps}});var r=o("./src/components/Modal/ModalBase.web.tsx");Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(n,e)||Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}}))});var l=o("./src/components/Modal/HistoryModal.web.tsx");Object.keys(l).forEach(function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(n,e)||Object.defineProperty(t,e,{enumerable:!0,get:function(){return l[e]}}))});var a=o("./src/components/Modal/FormModal.tsx");Object.keys(a).forEach(function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(n,e)||Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}}))});var s=o("./src/components/Modal/CloseableModal.tsx");Object.keys(s).forEach(function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(n,e)||Object.defineProperty(t,e,{enumerable:!0,get:function(){return s[e]}}))});var i=o("./src/components/Modal/Modal.tsx");"undefined"!==typeof ModalProps&&ModalProps&&ModalProps===Object(ModalProps)&&Object.isExtensible(ModalProps)&&Object.defineProperty(ModalProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ModalProps",filename:"src/components/Modal/index.ts"}}),"undefined"!==typeof Modal&&Modal&&Modal===Object(Modal)&&Object.isExtensible(Modal)&&Object.defineProperty(Modal,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Modal",filename:"src/components/Modal/index.ts"}})},"./src/components/Overlay/Overlay.styles.ts":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.getOverlayStyles=t.getOverlayVariables=void 0;var r=n(o("./node_modules/@babel/runtime/helpers/objectSpread.js"));"undefined"!==typeof OverlayVariables&&OverlayVariables&&OverlayVariables===Object(OverlayVariables)&&Object.isExtensible(OverlayVariables)&&Object.defineProperty(OverlayVariables,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"OverlayVariables",filename:"src/components/Overlay/Overlay.styles.ts"}});var l=function(e){return{overlay:{bottom:0,cursor:"auto",height:"100%",left:0,position:"absolute",right:0,top:0,width:"100%"}}};t.getOverlayVariables=l,l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getOverlayVariables",filename:"src/components/Overlay/Overlay.styles.ts"}}),"undefined"!==typeof OverlayStyles&&OverlayStyles&&OverlayStyles===Object(OverlayStyles)&&Object.isExtensible(OverlayStyles)&&Object.defineProperty(OverlayStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"OverlayStyles",filename:"src/components/Overlay/Overlay.styles.ts"}}),"undefined"!==typeof OverlayStylesProps&&OverlayStylesProps&&OverlayStylesProps===Object(OverlayStylesProps)&&Object.isExtensible(OverlayStylesProps)&&Object.defineProperty(OverlayStylesProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"OverlayStylesProps",filename:"src/components/Overlay/Overlay.styles.ts"}}),"undefined"!==typeof GetOverlayStyles&&GetOverlayStyles&&GetOverlayStyles===Object(GetOverlayStyles)&&Object.isExtensible(GetOverlayStyles)&&Object.defineProperty(GetOverlayStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetOverlayStyles",filename:"src/components/Overlay/Overlay.styles.ts"}});var a=function(e,t){var o=e.transparent,n={overlay:{bottom:0,cursor:"auto",height:"100%",left:0,position:"absolute",right:0,top:0,width:"100%"}};return{overlayStyle:(0,r.default)({},n.overlay,{backgroundColor:o?"transparent":t.colors.background.overlay})}};t.getOverlayStyles=a,a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getOverlayStyles",filename:"src/components/Overlay/Overlay.styles.ts"}})},"./src/components/Overlay/Overlay.tsx":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),t.Overlay=void 0;var r=n(o("./node_modules/react/index.js")),l=o("./node_modules/react-native-web/dist/index.js"),a=o("./src/theme/index.ts"),s=o("./src/utils/mergeStyles.ts"),i=o("./src/components/Overlay/Overlay.styles.ts"),d=function(e){var t=e.onPress,o=e.transparent,n=void 0!==o&&o,d=e.getStyles,u=(0,a.useTheme)(),c=(0,s.mergeStyles)(i.getOverlayStyles,d)({transparent:n},u).overlayStyle;return r.createElement(l.TouchableWithoutFeedback,{onPress:function(e){e.preventDefault(),t()}},r.createElement(l.View,{style:c}))};t.Overlay=d,d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Overlay",filename:"src/components/Overlay/Overlay.tsx"}})},"./src/components/Overlay/index.ts":function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0});var n=o("./src/components/Overlay/Overlay.tsx");Object.keys(n).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})})},"./src/icons/Icon.web.tsx":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(o("./node_modules/react/index.js")),l=n(o("./node_modules/react-icons/fi/index.esm.js"));t.default=function(e){var t=e.name,o=e.color,n=e.size,a=l["Fi".concat(function(e){var t=e.replace(/(\-\w)/g,function(e){return e[1].toUpperCase()});return t.charAt(0).toUpperCase()+t.slice(1)}(t))];return r.createElement(a,{color:o,size:n})}},"./src/icons/index.ts":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Icon",{enumerable:!0,get:function(){return r.default}});var r=n(o("./src/icons/Icon.web.tsx"));"undefined"!==typeof Icon&&Icon&&Icon===Object(Icon)&&Object.isExtensible(Icon)&&Object.defineProperty(Icon,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Icon",filename:"src/icons/index.ts"}})}}]);
//# sourceMappingURL=9.fbd593c4d92f00afd73c.js.map