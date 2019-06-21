(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"./src/components/Box/Box.tsx":function(e,t,r){"use strict";r.d(t,"a",function(){return i});var n=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=r("./node_modules/react/index.js"),s=r("./node_modules/react-native-web/dist/exports/View/index.js"),a=r("./src/theme/Theme.tsx");"undefined"!==typeof BoxProps&&BoxProps&&BoxProps===Object(BoxProps)&&Object.isExtensible(BoxProps)&&Object.defineProperty(BoxProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxProps",filename:"src/components/Box/Box.tsx"}});var l={backgroundColor:function(e,t){return t.colors.background[e]?{backgroundColor:t.colors.background[e]}:{backgroundColor:e}},elevation:function(e,t){return t.elevations[e]},shape:function(e,t){return t.containerShapes[e]}},i=function(e){var t=e.children,r=e.testID,i=Object(n.a)(e,["children","testID"]),c=Object(a.a)(),u=[],m={};for(var b in i)if(b){var d=l[b];if(d){var p=d(i[b],c);u.push(p)}else m[b]=i[b]}return o.createElement(s.a,{testID:r,style:[m,u],__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Box/Box.tsx",lineNumber:53}},t)};"undefined"!==typeof i&&i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Box",filename:"src/components/Box/Box.tsx"}})},"./src/components/Drawer/Drawer.mdx":function(e,t,r){"use strict";r.r(t),r.d(t,"default",function(){return g});var n=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),s=r("./node_modules/react/index.js"),a=r.n(s),l=r("./node_modules/@mdx-js/react/dist/index.es.js"),i=r("./node_modules/docz/dist/index.esm.js"),c=r("./src/components/Box/Box.tsx"),u=r("./src/components/Button/Button.tsx"),m=r("./src/components/Drawer/Drawer.tsx"),b=r("./src/components/Typography/Text.tsx"),d=r("./src/components/Helpers/Toggle.tsx"),p="/home/travis/build/WeTrustPlatform/paramount/src/components/Drawer/Drawer.mdx",f={},y="wrapper";function g(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(l.b)(y,Object(o.a)({},f,r,{components:t,mdxType:"MDXLayout",__source:{fileName:p,lineNumber:21}}),Object(l.b)("h1",Object(o.a)({id:"drawer"},{__source:{fileName:p,lineNumber:24}}),"Drawer"),Object(l.b)("p",{__source:{fileName:p,lineNumber:27}},"Slides a panel from defined position"),Object(l.b)("h2",Object(o.a)({id:"usage"},{__source:{fileName:p,lineNumber:28}}),"Usage"),Object(l.b)(i.c,{__position:0,__code:'<Toggle>\n  {({ on, toggle }) => (\n    <>\n      <Button onPress={toggle} title="Open bottom drawer" />\n      <Drawer space="30%" isVisible={on} onRequestClose={toggle}>\n        <Box width="100%" height="100%" backgroundColor="white" />\n      </Drawer>\n    </>\n  )}\n</Toggle>\n<Toggle>\n  {({ on, toggle }) => (\n    <>\n      <Button onPress={toggle} title="Open top drawer" />\n      <Drawer\n        space="30%"\n        position="top"\n        isVisible={on}\n        onRequestClose={toggle}\n      >\n        <Box width="100%" height="100%" backgroundColor="white" />\n      </Drawer>\n    </>\n  )}\n</Toggle>\n<Toggle>\n  {({ on, toggle }) => (\n    <>\n      <Button onPress={toggle} title="Open left drawer" />\n      <Drawer\n        space="30%"\n        position="left"\n        isVisible={on}\n        onRequestClose={toggle}\n      >\n        <Box width="100%" height="100%" backgroundColor="white" />\n      </Drawer>\n    </>\n  )}\n</Toggle>\n<Toggle>\n  {({ on, toggle }) => (\n    <>\n      <Button onPress={toggle} title="Open right drawer" />\n      <Drawer\n        space="30%"\n        position="right"\n        isVisible={on}\n        onRequestClose={toggle}\n      >\n        <Box width="100%" height="100%" backgroundColor="white" />\n      </Drawer>\n    </>\n  )}\n</Toggle>',__scope:{props:this?this.props:r,Playground:i.c,Props:i.d,Box:c.a,Button:u.a,Drawer:m.a,Text:b.a,Toggle:d.a},mdxType:"Playground",__source:{fileName:p,lineNumber:31}},Object(l.b)(d.a,{mdxType:"Toggle",__source:{fileName:p,lineNumber:41}},function(e){var t=e.on,r=e.toggle;return Object(l.b)(a.a.Fragment,null,Object(l.b)(u.a,{onPress:r,title:"Open bottom drawer",mdxType:"Button",__source:{fileName:p,lineNumber:46}}),Object(l.b)(m.a,{space:"30%",isVisible:t,onRequestClose:r,mdxType:"Drawer",__source:{fileName:p,lineNumber:47}},Object(l.b)(c.a,{width:"100%",height:"100%",backgroundColor:"white",mdxType:"Box",__source:{fileName:p,lineNumber:48}})))}),Object(l.b)(d.a,{mdxType:"Toggle",__source:{fileName:p,lineNumber:52}},function(e){var t=e.on,r=e.toggle;return Object(l.b)(a.a.Fragment,null,Object(l.b)(u.a,{onPress:r,title:"Open top drawer",mdxType:"Button",__source:{fileName:p,lineNumber:57}}),Object(l.b)(m.a,{space:"30%",position:"top",isVisible:t,onRequestClose:r,mdxType:"Drawer",__source:{fileName:p,lineNumber:58}},Object(l.b)(c.a,{width:"100%",height:"100%",backgroundColor:"white",mdxType:"Box",__source:{fileName:p,lineNumber:59}})))}),Object(l.b)(d.a,{mdxType:"Toggle",__source:{fileName:p,lineNumber:63}},function(e){var t=e.on,r=e.toggle;return Object(l.b)(a.a.Fragment,null,Object(l.b)(u.a,{onPress:r,title:"Open left drawer",mdxType:"Button",__source:{fileName:p,lineNumber:68}}),Object(l.b)(m.a,{space:"30%",position:"left",isVisible:t,onRequestClose:r,mdxType:"Drawer",__source:{fileName:p,lineNumber:69}},Object(l.b)(c.a,{width:"100%",height:"100%",backgroundColor:"white",mdxType:"Box",__source:{fileName:p,lineNumber:70}})))}),Object(l.b)(d.a,{mdxType:"Toggle",__source:{fileName:p,lineNumber:74}},function(e){var t=e.on,r=e.toggle;return Object(l.b)(a.a.Fragment,null,Object(l.b)(u.a,{onPress:r,title:"Open right drawer",mdxType:"Button",__source:{fileName:p,lineNumber:79}}),Object(l.b)(m.a,{space:"30%",position:"right",isVisible:t,onRequestClose:r,mdxType:"Drawer",__source:{fileName:p,lineNumber:80}},Object(l.b)(c.a,{width:"100%",height:"100%",backgroundColor:"white",mdxType:"Box",__source:{fileName:p,lineNumber:81}})))})),Object(l.b)("h2",Object(o.a)({id:"props"},{__source:{fileName:p,lineNumber:86}}),"Props"),Object(l.b)(i.d,{of:m.a,mdxType:"Props",__source:{fileName:p,lineNumber:89}}),Object(l.b)("h2",Object(o.a)({id:"customization"},{__source:{fileName:p,lineNumber:90}}),"Customization"),Object(l.b)("p",{__source:{fileName:p,lineNumber:93}},"Using ",Object(l.b)("inlineCode",{parentName:"p",__source:{fileName:p,lineNumber:93}},"getStyles")," prop"),Object(l.b)("pre",{__source:{fileName:p,lineNumber:94}},Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx"},{__source:{fileName:p,lineNumber:94}}),"DrawerStyles {\n  overlayStyle: ViewStyle;\n  containerStyle: ViewStyle;\n  modalContainerStyle: ViewStyle;\n}\n\ngetStyles={(DrawerProps, Theme) => DrawerStyles}\n")),Object(l.b)("p",{__source:{fileName:p,lineNumber:104}},"Markup"),Object(l.b)("pre",{__source:{fileName:p,lineNumber:105}},Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx"},{__source:{fileName:p,lineNumber:105}}),"<View modalContainerStyle>\n  <View containerStyle>{children}</View>\n  <Overlay overlayStyle />\n</View>\n")))}g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Drawer/Drawer.mdx"}}),g.isMDXComponent=!0},"./src/components/Drawer/Drawer.tsx":function(e,t,r){"use strict";var n=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),o=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),s=r("./node_modules/react/index.js"),a=r("./node_modules/react-native-web/dist/exports/View/index.js"),l=r("./node_modules/react-spring/native.cjs.js"),i=r("./src/constants/Animation.ts"),c=r("./src/theme/Theme.tsx"),u=r("./src/utils/mergeStyles.ts"),m=r("./src/components/Modal/HistoryModal.web.tsx"),b=r("./src/components/Overlay/Overlay.tsx");"undefined"!==typeof DrawerStyles&&DrawerStyles&&DrawerStyles===Object(DrawerStyles)&&Object.isExtensible(DrawerStyles)&&Object.defineProperty(DrawerStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DrawerStyles",filename:"src/components/Drawer/Drawer.styles.ts"}}),"undefined"!==typeof GetDrawerStyles&&GetDrawerStyles&&GetDrawerStyles===Object(GetDrawerStyles)&&Object.isExtensible(GetDrawerStyles)&&Object.defineProperty(GetDrawerStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetDrawerStyles",filename:"src/components/Drawer/Drawer.styles.ts"}});var d=function(e,t){return{containerStyle:{position:"absolute",width:"100%",zIndex:1},modalContainerStyle:{alignItems:"center",display:"flex",height:"100%",justifyContent:"center",width:"100%"},overlayStyle:{}}};d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getDrawerStyles",filename:"src/components/Drawer/Drawer.styles.ts"}}),r.d(t,"a",function(){return y});var p="/home/travis/build/WeTrustPlatform/paramount/src/components/Drawer/Drawer.tsx",f=Object(l.animated)(a.a);"undefined"!==typeof DrawerProps&&DrawerProps&&DrawerProps===Object(DrawerProps)&&Object.isExtensible(DrawerProps)&&Object.defineProperty(DrawerProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DrawerProps",filename:"src/components/Drawer/Drawer.tsx"}});var y=function(e){var t,r=e.children,y=e.isVisible,g=void 0!==y&&y,O=e.onRequestClose,j=void 0===O?function(){return null}:O,_=e.position,v=void 0===_?"bottom":_,h=e.offset,w=void 0===h?0:h,x=e.space,N=e.shouldLockBodyScroll,P=void 0===N||N,S=e.useHistory,D=void 0!==S&&S,T=e.getStyles,B=Object(c.a)(),C=Object(u.a)(d,T,B.components.getDrawerStyles)(e,B),E=C.modalContainerStyle,k=C.containerStyle,R=C.overlayStyle,M=Object(l.useSpring)((t={},Object(o.a)(t,v,w),Object(o.a)(t,"config",i.a),Object(o.a)(t,"from",Object(o.a)({},v,-600)),Object(o.a)(t,"reset",!0),t));return s.createElement(m.a,{visible:g,transparent:!0,onRequestClose:j,shouldLockBodyScroll:P,useHistory:D,__source:{fileName:p,lineNumber:98}},s.createElement(a.a,{style:E,__source:{fileName:p,lineNumber:105}},s.createElement(f,{style:Object(n.a)({},k,Object(o.a)({},v,M[v]),("left"===v||"right"===v)&&x&&{height:"100%",width:x},("bottom"===v||"top"===v)&&x&&{height:x,width:"100%"}),__source:{fileName:p,lineNumber:108}},r),s.createElement(b.a,{onPress:j,getStyles:function(){return{overlayStyle:R}},__source:{fileName:p,lineNumber:126}})))};"undefined"!==typeof y&&y&&y===Object(y)&&Object.isExtensible(y)&&Object.defineProperty(y,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Drawer",filename:"src/components/Drawer/Drawer.tsx"}})},"./src/components/Helpers/Toggle.tsx":function(e,t,r){"use strict";r.d(t,"a",function(){return a});var n=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),o=r("./node_modules/react/index.js"),s=r.n(o);"undefined"!==typeof ToggleRenderProps&&ToggleRenderProps&&ToggleRenderProps===Object(ToggleRenderProps)&&Object.isExtensible(ToggleRenderProps)&&Object.defineProperty(ToggleRenderProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ToggleRenderProps",filename:"src/components/Helpers/Toggle.tsx"}}),"undefined"!==typeof ToggleProps&&ToggleProps&&ToggleProps===Object(ToggleProps)&&Object.isExtensible(ToggleProps)&&Object.defineProperty(ToggleProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ToggleProps",filename:"src/components/Helpers/Toggle.tsx"}});var a=function(e){var t=e.children,r=e.initial,o=void 0!==r&&r,a=s.a.useState(o),l=Object(n.a)(a,2),i=l[0],c=l[1],u=s.a.useCallback(function(){c(!i)},[i]),m=s.a.useCallback(function(e){c(e)},[]);return t({on:i,toggle:u,set:m})};"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Toggle",filename:"src/components/Helpers/Toggle.tsx"}})},"./src/components/Modal/HistoryModal.web.tsx":function(e,t,r){"use strict";var n=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),s=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),a=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),l=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),i=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),c=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),u=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),m=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js"),b=r("./node_modules/react/index.js"),d=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),p=r("./node_modules/focus-trap/index.js"),f=r.n(p),y=r("./node_modules/react-dom/index.js"),g=r("./node_modules/react-spring/web.cjs.js"),O=r("./src/constants/Animation.ts"),j=r("./node_modules/exenv/index.js"),_=function(e){var t=b.useRef(null);b.useEffect(function(){var r,n=function(e){var t=document.createElement("div");return e&&t.setAttribute("id",e),t}(e);return r=n,document.body.lastElementChild&&document.body.insertBefore(r,document.body.lastElementChild.nextElementSibling),t.current&&n.appendChild(t.current),function(){t.current&&t.current.remove(),-1===n.childNodes.length&&n.remove()}},[]);return!t.current&&j.canUseDOM&&(t.current=document.createElement("div")),t.current};_&&_===Object(_)&&Object.isExtensible(_)&&Object.defineProperty(_,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useElement",filename:"src/hooks/useElement.ts"}});var v=function(e){var t=e.isLocked;b.useEffect(function(){var e=window.getComputedStyle(document.body).overflow,r=function(){document.body.style.overflow=e};return t?document.body.style.overflow="hidden":r(),function(){return r()}},[t])};v&&v===Object(v)&&Object.isExtensible(v)&&Object.defineProperty(v,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useLockBodyScroll",filename:"src/hooks/useLockBodyScroll.ts"}});var h=function(e){var t=e.children,r=e.transparent,n=e.visible,o=e.shouldLockBodyScroll,s=void 0===o||o,a=e.onRequestClose,l=e.animationType,i=void 0===l?"none":l,c=!1,u=_();if(!u)return null;var m=b.useState(n),p=Object(d.a)(m,2),j=p[0],h=p[1],w=b.useRef(null),x=b.useRef(null);v({isLocked:!(!s||!n)}),b.useEffect(function(){var e=function(){x.current&&(x.current.deactivate(),x.current=null)};return n?(w.current&&!x.current&&(x.current=f()(w.current,{initialFocus:w.current,onDeactivate:function(){a&&n&&!c&&a()}}),x.current.activate()),h(!0)):e(),function(){c=!0,e()}},[n]);var N=Object(g.useSpring)({onRest:function(){return!n&&j&&h(!1)},config:O.a,opacity:"fade"===i?n?1:0:1,y:"slide"===i?n?0:100:0}),P=N.opacity,S=N.y;return y.createPortal(b.createElement(g.animated.div,{tabIndex:-1,ref:w,style:{backgroundColor:r?"transparent":"white",bottom:0,display:j?"flex":"none",flexDirection:"column",left:0,opacity:P,position:s?"fixed":"absolute",right:0,top:0,transform:S.interpolate(function(e){return"translateY(".concat(e,"%)")}),zIndex:1e3},__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Modal/ModalBase.web.tsx",lineNumber:83}},n?t:null),u)};h&&h===Object(h)&&Object.isExtensible(h)&&Object.defineProperty(h,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ModalBase",filename:"src/components/Modal/ModalBase.web.tsx"}}),r.d(t,"a",function(){return P});var w="/home/travis/build/WeTrustPlatform/paramount/src/components/Modal/HistoryModal.web.tsx",x=0,N=function(e){function t(){var e,r;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(r=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).modalId=++x,r.componentDidUpdate=function(e){var t=r.props.visible;e.visible!==t&&(t?r.updateBrowserHistory():r.handleManuallyClosed())},r.componentWillUnmount=function(){r.clearBrowserState()},r.updateBrowserHistory=function(){history.state&&history.state.modal&&history.state.modal[r.modalId]||history.pushState(Object(a.a)({},history.state,{modal:Object(a.a)({},history.state&&history.state.modal,Object(s.a)({},r.modalId,!0))}),""),window.addEventListener("popstate",r.handlePopstate,!1)},r.handlePopstate=function(e){var t=r.props,n=t.visible,o=t.onRequestClose;e.state&&e.state.modal&&e.state.modal[r.modalId]||!o||(r.clearBrowserState(),o()),!n&&e.state&&e.state.modal&&e.state.modal[r.modalId]&&history.go(-1)},r.handleEscapeKey=function(){var e=r.props.onRequestClose;(history.state||history.state.modal||history.state.modal[r.modalId])&&e&&(r.clearBrowserState(),e(),history.go(-1))},r.handleManuallyClosed=function(){history.state&&history.state.modal&&history.state.modal[r.modalId]&&(r.clearBrowserState(),history.go(-1))},r.clearBrowserState=function(){history.replaceState(Object(a.a)({},history.state,{modal:Object(a.a)({},history.state&&history.state.modal,Object(s.a)({},r.modalId,!1))}),""),window.removeEventListener("popstate",r.handlePopstate,!1)},r}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=Object(o.a)({},this.props);return b.createElement(h,Object(o.a)({},e,{onRequestClose:this.handleEscapeKey,__source:{fileName:w,lineNumber:132}}))}}]),t}(b.Component),P=function(e){var t=e.useHistory,r=void 0!==t&&t,s=Object(n.a)(e,["useHistory"]);return r?b.createElement(N,Object(o.a)({},s,{__source:{fileName:w,lineNumber:140}})):b.createElement(h,Object(o.a)({},s,{__source:{fileName:w,lineNumber:142}}))};"undefined"!==typeof P&&P&&P===Object(P)&&Object.isExtensible(P)&&Object.defineProperty(P,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HistoryModal",filename:"src/components/Modal/HistoryModal.web.tsx"}})},"./src/components/Overlay/Overlay.tsx":function(e,t,r){"use strict";var n=r("./node_modules/react/index.js"),o=r("./node_modules/react-native-web/dist/exports/TouchableWithoutFeedback/index.js"),s=r("./node_modules/react-native-web/dist/exports/View/index.js"),a=r("./src/theme/Theme.tsx"),l=r("./src/utils/mergeStyles.ts");"undefined"!==typeof OverlayStyles&&OverlayStyles&&OverlayStyles===Object(OverlayStyles)&&Object.isExtensible(OverlayStyles)&&Object.defineProperty(OverlayStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"OverlayStyles",filename:"src/components/Overlay/Overlay.styles.ts"}}),"undefined"!==typeof OverlayStylesProps&&OverlayStylesProps&&OverlayStylesProps===Object(OverlayStylesProps)&&Object.isExtensible(OverlayStylesProps)&&Object.defineProperty(OverlayStylesProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"OverlayStylesProps",filename:"src/components/Overlay/Overlay.styles.ts"}}),"undefined"!==typeof GetOverlayStyles&&GetOverlayStyles&&GetOverlayStyles===Object(GetOverlayStyles)&&Object.isExtensible(GetOverlayStyles)&&Object.defineProperty(GetOverlayStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetOverlayStyles",filename:"src/components/Overlay/Overlay.styles.ts"}});var i=function(e,t){return{overlayStyle:{backgroundColor:e.transparent?"transparent":t.colors.background.overlay,bottom:0,cursor:"auto",height:"100%",left:0,position:"absolute",right:0,top:0,width:"100%"}}};i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getOverlayStyles",filename:"src/components/Overlay/Overlay.styles.ts"}}),r.d(t,"a",function(){return u});var c="/home/travis/build/WeTrustPlatform/paramount/src/components/Overlay/Overlay.tsx",u=function(e){var t=e.onPress,r=e.transparent,u=void 0!==r&&r,m=e.getStyles,b=Object(a.a)(),d=Object(l.a)(i,m,b.components.getOverlayStyles)({transparent:u},b).overlayStyle;return n.createElement(o.a,{onPress:function(e){e.preventDefault(),t()},__source:{fileName:c,lineNumber:30}},n.createElement(s.a,{style:d,__source:{fileName:c,lineNumber:36}}))};"undefined"!==typeof u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Overlay",filename:"src/components/Overlay/Overlay.tsx"}})},"./src/constants/Animation.ts":function(e,t,r){"use strict";r.d(t,"a",function(){return n});var n={friction:40,tension:450};"undefined"!==typeof n&&n&&n===Object(n)&&Object.isExtensible(n)&&Object.defineProperty(n,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"springDefaultConfig",filename:"src/constants/Animation.ts"}})}}]);
//# sourceMappingURL=22.f1c3b6e697a5fb6b03af.js.map