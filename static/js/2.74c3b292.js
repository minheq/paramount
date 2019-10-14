(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./src/components/Box/Box.tsx":function(e,t,r){"use strict";var o=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),n=r("./node_modules/react/index.js"),a=r.n(n),s=r("./node_modules/react-native-web/dist/exports/View/index.js"),i=r("./src/theme/Theme.tsx"),l=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),c=r("./node_modules/dlv/dist/dlv.umd.js"),u=r.n(c),d=r("./src/utils/Overrides.ts");"undefined"!==typeof SpacingProps&&SpacingProps&&SpacingProps===Object(SpacingProps)&&Object.isExtensible(SpacingProps)&&Object.defineProperty(SpacingProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SpacingProps",filename:"src/components/Spacing/Spacing.tsx"}}),"undefined"!==typeof SpacingOverride&&SpacingOverride&&SpacingOverride===Object(SpacingOverride)&&Object.isExtensible(SpacingOverride)&&Object.defineProperty(SpacingOverride,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SpacingOverride",filename:"src/components/Spacing/Spacing.tsx"}});var m=function(e,t){return"number"===typeof e?e:t.spacing[e]};m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getSpacing",filename:"src/components/Spacing/Spacing.tsx"}});var b=function(e){var t=e.size,r=void 0===t?"medium":t,n=e.orientation,c=void 0===n?"vertical":n,b=e.style,p=Object(o.a)(e,["size","orientation","style"]),f=Object(i.a)();return a.a.createElement(s.a,Object(l.a)({style:["vertical"===c?{height:m(r,f)}:{width:m(r,f)},Object(d.b)(e,b),Object(d.b)(e,u()(f,"overrides.Spacing.style"))]},p,{__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Spacing/Spacing.tsx",lineNumber:44}}))};b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Spacing",filename:"src/components/Spacing/Spacing.tsx"}}),r.d(t,"a",function(){return f});"undefined"!==typeof BoxProps&&BoxProps&&BoxProps===Object(BoxProps)&&Object.isExtensible(BoxProps)&&Object.defineProperty(BoxProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxProps",filename:"src/components/Box/Box.tsx"}});var p={backgroundColor:function(e,t){return t.colors.background[e]?{backgroundColor:t.colors.background[e]}:{backgroundColor:e}},elevation:function(e,t){return t.elevations[e]},shape:function(e,t){return t.containerShapes[e]},space:function(e,t){return{padding:m(e,t)}},spaceBottom:function(e,t){return{paddingBottom:m(e,t)}},spaceEnd:function(e,t){return{paddingEnd:m(e,t)}},spaceHorizontal:function(e,t){return{paddingHorizontal:m(e,t)}},spaceLeft:function(e,t){return{paddingLeft:m(e,t)}},spaceRight:function(e,t){return{paddingRight:m(e,t)}},spaceStart:function(e,t){return{paddingStart:m(e,t)}},spaceTop:function(e,t){return{paddingTop:m(e,t)}},spaceVertical:function(e,t){return{paddingVertical:m(e,t)}}},f=function(e){var t=e.children,r=e.testID,n=Object(o.a)(e,["children","testID"]),l=Object(i.a)(),c=[],u={};for(var d in n)if(d){var m=p[d];if(m){var b=m(n[d],l);c.push(b)}else u[d]=n[d]}return a.a.createElement(s.a,{testID:r,style:[u,c],__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Box/Box.tsx",lineNumber:106}},t)};"undefined"!==typeof f&&f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Box",filename:"src/components/Box/Box.tsx"}})},"./src/components/Button/Button.tsx":function(e,t,r){"use strict";var o=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),n=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),s=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),i=r("./node_modules/dlv/dist/dlv.umd.js"),l=r.n(i),c=r("./node_modules/react/index.js"),u=r.n(c),d=r("./node_modules/react-native-web/dist/exports/TouchableOpacity/index.js"),m=r("./src/theme/Theme.tsx"),b=r("./src/utils/ControlSize.ts"),p=r("./src/utils/Overrides.ts"),f=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js"),g=r.n(f),j=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),y=r("./node_modules/react-native-web/dist/exports/View/index.js"),v=r("./node_modules/react-spring/native.cjs.js"),O=function(e,t){return!e},h=function(){var e=u.a.useReducer(O,!0),t=Object(s.a)(e,2)[1];return u.a.useCallback(function(){t(null)},[t])};h&&h===Object(h)&&Object.isExtensible(h)&&Object.defineProperty(h,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useForceUpdate",filename:"src/hooks/useForceUpdate.ts"}});var _="/home/travis/build/WeTrustPlatform/paramount/src/components/LoadingIndicators/Dots.tsx",x=Object(v.animated)(y.a);"undefined"!==typeof DotsProps&&DotsProps&&DotsProps===Object(DotsProps)&&Object.isExtensible(DotsProps)&&Object.defineProperty(DotsProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DotsProps",filename:"src/components/LoadingIndicators/Dots.tsx"}});var P=function(e){var t=Object(m.a)(),r=e.size,o=void 0===r?10:r,n=e.color,a=void 0===n?t.colors.text.primary:n,s=h(),i=Object(v.useTrail)(3,{config:{duration:800},from:{opacity:0},onRest:s,reset:!0,to:function(){var e=Object(j.a)(g.a.mark(function e(t){return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t({opacity:1});case 2:return e.next=4,t({opacity:0});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()});return u.a.createElement(y.a,{style:{alignItems:"center",flexDirection:"row",justifyContent:"center"},__source:{fileName:_,lineNumber:34}},i.map(function(e,t){return u.a.createElement(x,{key:t,style:{backgroundColor:a,borderRadius:999,height:o,marginLeft:3,marginRight:3,opacity:e.opacity,width:o},__source:{fileName:_,lineNumber:42}})}))};P&&P===Object(P)&&Object.isExtensible(P)&&Object.defineProperty(P,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Dots",filename:"src/components/LoadingIndicators/Dots.tsx"}});var B=r("./src/components/Typography/Text.tsx");r.d(t,"a",function(){return E});var S="/home/travis/build/WeTrustPlatform/paramount/src/components/Button/Button.tsx";"undefined"!==typeof ButtonOverrides&&ButtonOverrides&&ButtonOverrides===Object(ButtonOverrides)&&Object.isExtensible(ButtonOverrides)&&Object.defineProperty(ButtonOverrides,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonOverrides",filename:"src/components/Button/Button.tsx"}}),"undefined"!==typeof ButtonProps&&ButtonProps&&ButtonProps===Object(ButtonProps)&&Object.isExtensible(ButtonProps)&&Object.defineProperty(ButtonProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonProps",filename:"src/components/Button/Button.tsx"}});var E=function(e){var t=e.appearance,r=void 0===t?"primary":t,o=e.color,n=void 0===o?"default":o,i=e.isDisabled,c=void 0!==i&&i,d=e.isLoading,b=void 0!==d&&d,f=e.size,g=void 0===f?"medium":f,j=e.onPress,y=void 0===j?function(){}:j,v=e.title,O=e.testID,h=e.overrides,_=void 0===h?{}:h,x=Object(m.a)(),P=Object(p.a)(C,e,{appearance:r,color:n,isDisabled:c,isLoading:b,size:g,onPress:y,testID:O},l()(x,"overrides.Button.Touchable"),_.Touchable),B=Object(s.a)(P,2),E=B[0],k=B[1],N=Object(p.a)(T,e,{appearance:r,color:n,isDisabled:c,size:g,title:v},l()(x,"overrides.Button.Title"),_.Title),D=Object(s.a)(N,2),H=D[0],L=D[1],z=Object(p.a)(w,e,{appearance:r,color:n},l()(x,"overrides.Button.Loading"),_.Loading),I=Object(s.a)(z,2),M=I[0],W=I[1],A=Object(p.a)(R,e,{appearance:r,color:n,isDisabled:c,isLoading:b,size:g},l()(x,"overrides.Button.IconBefore"),_.IconBefore),U=Object(s.a)(A,2),q=U[0],F=U[1],V=Object(p.a)(R,e,{appearance:r,color:n,isDisabled:c,isLoading:b,size:g},l()(x,"overrides.Button.IconAfter"),_.IconAfter),J=Object(s.a)(V,2),K=J[0],G=J[1];return u.a.createElement(E,Object(a.a)({},k,{__source:{fileName:S,lineNumber:151}}),u.a.createElement(q,Object(a.a)({},F,{__source:{fileName:S,lineNumber:152}})),b?u.a.createElement(M,Object(a.a)({},W,{__source:{fileName:S,lineNumber:153}})):u.a.createElement(H,Object(a.a)({},L,{__source:{fileName:S,lineNumber:153}})),u.a.createElement(K,Object(a.a)({},G,{__source:{fileName:S,lineNumber:154}})))};"undefined"!==typeof E&&E&&E===Object(E)&&Object.isExtensible(E)&&Object.defineProperty(E,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Button",filename:"src/components/Button/Button.tsx"}});var C=function(e){var t=e.appearance,r=e.color,s=e.isDisabled,i=e.isLoading,l=e.size,c=e.children,p=e.style,f=Object(n.a)(e,["appearance","color","isDisabled","isLoading","size","children","style"]),g=Object(m.a)(),j=function(e,t){return{minimal:{default:{backgroundColor:e.colors.background.content},danger:{backgroundColor:e.colors.background.content},primary:{backgroundColor:e.colors.background.content},secondary:{backgroundColor:e.colors.background.content}},primary:{default:{backgroundColor:t?e.colors.background.greyLight:e.colors.button.default},danger:{backgroundColor:t?e.colors.background.dangerLight:e.colors.button.danger},primary:{backgroundColor:t?e.colors.background.primaryLight:e.colors.button.primary},secondary:{backgroundColor:t?e.colors.background.secondaryLight:e.colors.button.secondary}},outline:{default:{backgroundColor:e.colors.background.content,borderColor:e.colors.text.default,borderWidth:3},danger:{backgroundColor:e.colors.background.content,borderColor:e.colors.border.danger,borderWidth:3},primary:{backgroundColor:e.colors.background.content,borderColor:e.colors.border.primary,borderWidth:3},secondary:{backgroundColor:e.colors.background.content,borderColor:e.colors.border.secondary,borderWidth:3}}}}(g,i),y=Object(b.a)(l)?{borderRadius:g.controlBorderRadius[l],minHeight:g.controlHeights[l],paddingLeft:g.controlPaddings[l]+8,paddingRight:g.controlPaddings[l]+8}:{borderRadius:g.controlBorderRadius.medium,minHeight:l,paddingLeft:g.controlPaddings.medium+8,paddingRight:g.controlPaddings.medium+8},v=y.borderRadius,O=y.minHeight,h=y.paddingLeft,_=y.paddingRight;return u.a.createElement(d.a,Object(a.a)({accessibilityRole:"button",disabled:!(!s&&!i),style:[Object(o.a)({borderRadius:v,minHeight:O,paddingLeft:h,paddingRight:_,flexDirection:"row",alignItems:"center",justifyContent:"center"},j[t][r],s&&{backgroundColor:g.colors.button.disabled}),p]},f,{__source:{fileName:S,lineNumber:277}}),c)},k=function(e){return{minimal:{default:e.colors.text.default,danger:e.colors.text.danger,primary:e.colors.text.primary,secondary:e.colors.text.secondary},primary:{default:e.colors.button.defaultText,danger:e.colors.button.dangerText,primary:e.colors.button.primaryText,secondary:e.colors.button.secondaryText},outline:{default:e.colors.text.default,danger:e.colors.text.danger,primary:e.colors.text.primary,secondary:e.colors.text.secondary}}},T=function(e){var t=e.appearance,r=e.color,s=e.isDisabled,i=e.size,l=e.title,c=e.style,d=Object(n.a)(e,["appearance","color","isDisabled","size","title","style"]),f=Object(m.a)(),g=Object(b.a)(i)?f.textSizes[i]:f.textSizes.medium;return l?u.a.createElement(B.a,Object(a.a)({weight:"bold",style:[Object(o.a)({alignItems:"center",color:s?f.colors.text.muted:k(f)[t][r],display:"flex",fontWeight:"600",justifyContent:"center",textAlign:"center",paddingHorizontal:8},g),Object(p.b)(e,c)]},d,{__source:{fileName:S,lineNumber:360}}),l):null},w=function(e){var t=e.appearance,r=e.color,o=Object(m.a)();return u.a.createElement(P,{color:k(o)[t][r],__source:{fileName:S,lineNumber:393}})},R=function(e){return u.a.createElement(u.a.Fragment,null)}},"./src/components/Helpers/Toggle.tsx":function(e,t,r){"use strict";r.d(t,"a",function(){return s});var o=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),n=r("./node_modules/react/index.js"),a=r.n(n);"undefined"!==typeof ToggleRenderProps&&ToggleRenderProps&&ToggleRenderProps===Object(ToggleRenderProps)&&Object.isExtensible(ToggleRenderProps)&&Object.defineProperty(ToggleRenderProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ToggleRenderProps",filename:"src/components/Helpers/Toggle.tsx"}}),"undefined"!==typeof ToggleProps&&ToggleProps&&ToggleProps===Object(ToggleProps)&&Object.isExtensible(ToggleProps)&&Object.defineProperty(ToggleProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ToggleProps",filename:"src/components/Helpers/Toggle.tsx"}});var s=function(e){var t=e.children,r=e.initial,n=void 0!==r&&r,s=a.a.useState(n),i=Object(o.a)(s,2),l=i[0],c=i[1],u=a.a.useCallback(function(){c(!l)},[l]),d=a.a.useCallback(function(e){c(e)},[]);return t({on:l,toggle:u,set:d})};"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Toggle",filename:"src/components/Helpers/Toggle.tsx"}})},"./src/components/Modal/HistoryModal.web.tsx":function(e,t,r){"use strict";var o=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),n=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),a=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),s=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),i=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),l=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),c=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),u=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),d=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js"),m=r("./node_modules/react/index.js"),b=r.n(m),p=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),f=r("./node_modules/focus-trap/index.js"),g=r.n(f),j=r("./node_modules/react-dom/index.js"),y=r.n(j),v=r("./node_modules/react-spring/web.cjs.js"),O=r("./src/constants/Animation.ts"),h=r("./node_modules/exenv/index.js"),_=function(e){var t=b.a.useRef(null);b.a.useEffect(function(){var r,o=function(e){var t=document.createElement("div");return e&&t.setAttribute("id",e),t}(e);return r=o,document.body.lastElementChild&&document.body.insertBefore(r,document.body.lastElementChild.nextElementSibling),t.current&&o.appendChild(t.current),function(){t.current&&t.current.remove(),-1===o.childNodes.length&&o.remove()}},[e]);return!t.current&&h.canUseDOM&&(t.current=document.createElement("div")),t.current};_&&_===Object(_)&&Object.isExtensible(_)&&Object.defineProperty(_,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useElement",filename:"src/hooks/useElement.ts"}});var x=function(e){var t=e.isLocked;b.a.useEffect(function(){var e=window.getComputedStyle(document.body).overflow,r=function(){document.body.style.overflow=e};return t?document.body.style.overflow="hidden":r(),function(){return r()}},[t])};x&&x===Object(x)&&Object.isExtensible(x)&&Object.defineProperty(x,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useLockBodyScroll",filename:"src/hooks/useLockBodyScroll.ts"}});var P=function(e){var t=e.children,r=e.transparent,o=e.visible,n=e.shouldLockBodyScroll,a=void 0===n||n,s=e.onRequestClose,i=e.animationType,l=void 0===i?"none":i,c=b.a.useRef(!1),u=_(),d=b.a.useState(o),m=Object(p.a)(d,2),f=m[0],j=m[1],h=b.a.useRef(null),P=b.a.useRef(null);x({isLocked:!(!a||!o)}),b.a.useEffect(function(){var e=function(){P.current&&(P.current.deactivate(),P.current=null)};return o?(h.current&&!P.current&&(P.current=g()(h.current,{initialFocus:h.current,onDeactivate:function(){s&&o&&!c.current&&s()}}),P.current.activate()),j(!0)):e(),function(){c.current=!0,e()}},[s,o]);var B=Object(v.useSpring)({onRest:function(){return!o&&f&&j(!1)},config:O.a,opacity:"fade"===l?o?1:0:1,y:"slide"===l?o?0:100:0}),S=B.opacity,E=B.y;return u?y.a.createPortal(b.a.createElement(v.animated.div,{tabIndex:-1,ref:h,style:{backgroundColor:r?"transparent":"white",bottom:0,display:f?"flex":"none",flexDirection:"column",left:0,opacity:S,position:a?"fixed":"absolute",right:0,top:0,transform:E.interpolate(function(e){return"translateY(".concat(e,"%)")}),zIndex:1e3},__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Modal/ModalBase.web.tsx",lineNumber:83}},o?t:null),u):null};P&&P===Object(P)&&Object.isExtensible(P)&&Object.defineProperty(P,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ModalBase",filename:"src/components/Modal/ModalBase.web.tsx"}}),r.d(t,"a",function(){return C});var B="/home/travis/build/WeTrustPlatform/paramount/src/components/Modal/HistoryModal.web.tsx",S=0,E=function(e){function t(){var e,r;Object(i.a)(this,t);for(var o=arguments.length,n=new Array(o),l=0;l<o;l++)n[l]=arguments[l];return(r=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).modalId=++S,r.componentDidUpdate=function(e){var t=r.props.visible;e.visible!==t&&(t?r.updateBrowserHistory():r.handleManuallyClosed())},r.componentWillUnmount=function(){r.clearBrowserState()},r.updateBrowserHistory=function(){history.state&&history.state.modal&&history.state.modal[r.modalId]||history.pushState(Object(s.a)({},history.state,{modal:Object(s.a)({},history.state&&history.state.modal,Object(a.a)({},r.modalId,!0))}),""),window.addEventListener("popstate",r.handlePopstate,!1)},r.handlePopstate=function(e){var t=r.props,o=t.visible,n=t.onRequestClose;e.state&&e.state.modal&&e.state.modal[r.modalId]||!n||(r.clearBrowserState(),n()),!o&&e.state&&e.state.modal&&e.state.modal[r.modalId]&&history.go(-1)},r.handleEscapeKey=function(){var e=r.props.onRequestClose;(history.state||history.state.modal||history.state.modal[r.modalId])&&e&&(r.clearBrowserState(),e(),history.go(-1))},r.handleManuallyClosed=function(){history.state&&history.state.modal&&history.state.modal[r.modalId]&&(r.clearBrowserState(),history.go(-1))},r.clearBrowserState=function(){history.replaceState(Object(s.a)({},history.state,{modal:Object(s.a)({},history.state&&history.state.modal,Object(a.a)({},r.modalId,!1))}),""),window.removeEventListener("popstate",r.handlePopstate,!1)},r}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=Object(n.a)({},this.props);return b.a.createElement(P,Object(n.a)({},e,{onRequestClose:this.handleEscapeKey,__source:{fileName:B,lineNumber:132}}))}}]),t}(b.a.Component),C=function(e){var t=e.useHistory,r=void 0!==t&&t,a=Object(o.a)(e,["useHistory"]);return r?b.a.createElement(E,Object(n.a)({},a,{__source:{fileName:B,lineNumber:140}})):b.a.createElement(P,Object(n.a)({},a,{__source:{fileName:B,lineNumber:142}}))};"undefined"!==typeof C&&C&&C===Object(C)&&Object.isExtensible(C)&&Object.defineProperty(C,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HistoryModal",filename:"src/components/Modal/HistoryModal.web.tsx"}})},"./src/utils/ControlSize.ts":function(e,t,r){"use strict";r.d(t,"a",function(){return n}),r.d(t,"b",function(){return a});var o=r("./src/theme/Theme.tsx"),n=function(e){return"number"!==typeof e};"undefined"!==typeof n&&n&&n===Object(n)&&Object.isExtensible(n)&&Object.defineProperty(n,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"isControlSize",filename:"src/utils/ControlSize.ts"}});var a=function(){var e=Object(o.a)();return{getControlHeight:function(t){return"number"===typeof t?t:e.controlHeights[t]},getSmallerTextSize:function(t){switch(function(t){if("number"===typeof t){if(t>=e.controlHeights.large)return"large";if(t>=e.controlHeights.medium)return"medium";if(t>=e.controlHeights.small)return"small";if(t<e.controlHeights.small)return"xsmall"}return t}(t)){case"large":return"medium";case"medium":return"small";case"small":default:return"xsmall"}},getSmallerHeightControlSize:function(t){switch(function(t){if("number"===typeof t){if(t>=e.controlHeights.large)return"large";if(t>=e.controlHeights.medium)return"medium";if(t<e.controlHeights.medium)return"small"}return t}(t)){case"large":return"medium";case"medium":default:return"small"}}}};"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useControlSizeUtils",filename:"src/utils/ControlSize.ts"}})}}]);
//# sourceMappingURL=2.ee22def8b66aef7b4a31.js.map