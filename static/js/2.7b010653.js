(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./src/components/Button/Button.styles.ts":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.getButtonStyles=t.getButtonAppearances=void 0;var r=n(o("./node_modules/@babel/runtime/helpers/objectSpread.js")),s=n(o("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),a=o("./src/components/Button/changeColor.ts");"undefined"!==typeof ButtonColorProps&&ButtonColorProps&&ButtonColorProps===Object(ButtonColorProps)&&Object.isExtensible(ButtonColorProps)&&Object.defineProperty(ButtonColorProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColorProps",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof ButtonAppearances&&ButtonAppearances&&ButtonAppearances===Object(ButtonAppearances)&&Object.isExtensible(ButtonAppearances)&&Object.defineProperty(ButtonAppearances,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonAppearances",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof ButtonAppearance&&ButtonAppearance&&ButtonAppearance===Object(ButtonAppearance)&&Object.isExtensible(ButtonAppearance)&&Object.defineProperty(ButtonAppearance,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonAppearance",filename:"src/components/Button/Button.styles.ts"}});var l=function(e){return{minimal:{default:{backgroundColor:e.colors.background.content,color:e.colors.text.default},danger:{backgroundColor:e.colors.background.content,color:e.colors.text.danger},primary:{backgroundColor:e.colors.background.content,color:e.colors.text.primary},secondary:{backgroundColor:e.colors.background.content,color:e.colors.text.secondary}},primary:{default:{backgroundColor:e.colors.button.default,color:e.colors.button.defaultText,loadingBackgroundColor:e.colors.background.overlay},danger:{backgroundColor:e.colors.button.danger,color:e.colors.button.dangerText,loadingBackgroundColor:e.colors.background.dangerLight},primary:{backgroundColor:e.colors.button.primary,color:e.colors.button.primaryText,loadingBackgroundColor:e.colors.background.primaryLight},secondary:{backgroundColor:e.colors.button.secondary,color:e.colors.button.secondaryText,loadingBackgroundColor:e.colors.background.secondaryLight}},outline:{default:{backgroundColor:e.colors.background.content,borderColor:e.colors.text.default,borderWidth:3,color:e.colors.text.default},danger:{backgroundColor:e.colors.background.content,borderColor:e.colors.border.danger,borderWidth:3,color:e.colors.text.danger},primary:{backgroundColor:e.colors.background.content,borderColor:e.colors.border.primary,borderWidth:3,color:e.colors.text.primary},secondary:{backgroundColor:e.colors.background.content,borderColor:e.colors.border.secondary,borderWidth:3,color:e.colors.text.secondary}}}};t.getButtonAppearances=l,l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getButtonAppearances",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof ButtonStyles&&ButtonStyles&&ButtonStyles===Object(ButtonStyles)&&Object.isExtensible(ButtonStyles)&&Object.defineProperty(ButtonStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonStyles",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof ButtonStylesProps&&ButtonStylesProps&&ButtonStylesProps===Object(ButtonStylesProps)&&Object.isExtensible(ButtonStylesProps)&&Object.defineProperty(ButtonStylesProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonStylesProps",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof GetButtonStyles&&GetButtonStyles&&GetButtonStyles===Object(GetButtonStyles)&&Object.isExtensible(GetButtonStyles)&&Object.defineProperty(GetButtonStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetButtonStyles",filename:"src/components/Button/Button.styles.ts"}});var i=function(e,t){var o=e.appearance,n=e.color,i=e.size,u=e.isDisabled,c=e.isLoading,d=e.isInline,f=e.iconBefore,b=e.iconAfter,p=l(t)[o][n],m=p.color,y=p.loadingBackgroundColor,g=(0,s.default)(p,["color","loadingBackgroundColor"]);return{buttonStyle:(0,r.default)({borderRadius:t.controlBorderRadius[i],height:t.controlHeights[i],paddingLeft:2*t.controlPaddings[i],paddingRight:2*t.controlPaddings[i]},g,u?{backgroundColor:t.colors.button.disabled}:(0,r.default)({},c?{backgroundColor:y}:{}),d?{alignSelf:"flex-start",flexDirection:"row",flexWrap:"wrap"}:{}),focusColor:"minimal"===o||"outline"===o?t.colors.button.default:(0,a.darken)(g.backgroundColor,.05),textStyle:{alignItems:"center",color:u?t.colors.text.muted:m,display:"flex",fontWeight:"600",justifyContent:"center",textAlign:"center"},innerButtonWrapperStyle:{alignItems:"center",flexDirection:"row",height:"100%",justifyContent:"center"},buttonContentWrapperStyle:{paddingLeft:f?8:0,paddingRight:b?8:0}}};t.getButtonStyles=i,i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getButtonStyles",filename:"src/components/Button/Button.styles.ts"}})},"./src/components/Button/Button.tsx":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.Button=void 0;var s=r(o("./node_modules/@babel/runtime/helpers/extends.js")),a=r(o("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),l=n(o("./node_modules/react/index.js")),i=o("./node_modules/react-native-web/dist/index.js"),u=o("./src/theme/index.ts"),c=o("./src/utils/mergeStyles.ts"),d=o("./src/components/Loading/index.ts"),f=o("./src/components/Typography/index.ts"),b=o("./src/components/Button/Button.styles.ts");"undefined"!==typeof ButtonProps&&ButtonProps&&ButtonProps===Object(ButtonProps)&&Object.isExtensible(ButtonProps)&&Object.defineProperty(ButtonProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonProps",filename:"src/components/Button/Button.tsx"}});var p=function(e){var t=e.appearance,o=void 0===t?"primary":t,n=(e.title,e.color),r=void 0===n?"primary":n,d=e.getStyles,f=(e.icon,e.iconAfter),p=e.iconBefore,y=(e.iconLoading,e.isActive,e.isDisabled),g=void 0!==y&&y,j=e.isInline,v=void 0!==j&&j,h=e.isLoading,_=void 0!==h&&h,B=e.onPress,P=void 0===B?function(){}:B,O=e.size,x=void 0===O?"medium":O,M=e.testID,k=(0,a.default)(e,["appearance","title","color","getStyles","icon","iconAfter","iconBefore","iconLoading","isActive","isDisabled","isInline","isLoading","onPress","size","testID"]),C=(0,u.useTheme)(),E=(0,c.mergeStyles)(b.getButtonStyles,d,C.components.getButtonStyles)({appearance:o,color:r,iconAfter:f,iconBefore:p,isDisabled:g,isInline:v,isLoading:_,size:x},C),S=E.buttonStyle,w=E.textStyle,L=E.focusColor,D=E.innerButtonWrapperStyle,R=E.buttonContentWrapperStyle;return l.createElement(i.TouchableHighlight,(0,s.default)({accessible:!0,accessibilityRole:"button",underlayColor:L,disabled:!(!g&&!_),onPress:P,style:S,testID:M},k),l.createElement(i.View,{style:D},p,l.createElement(i.View,{style:R},l.createElement(m,(0,s.default)({},e,{textStyle:w}))),f))};t.Button=p,p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Button",filename:"src/components/Button/Button.tsx"}}),"undefined"!==typeof ButtonContentProps&&ButtonContentProps&&ButtonContentProps===Object(ButtonContentProps)&&Object.isExtensible(ButtonContentProps)&&Object.defineProperty(ButtonContentProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonContentProps",filename:"src/components/Button/Button.tsx"}});var m=function(e){var t=e.isLoading,o=e.iconLoading,n=e.icon,r=e.title,s=e.textStyle,a=e.size;return t?o||l.createElement(d.LoadingDots,{color:s.color}):n||(r?l.createElement(f.Text,{size:a,getStyles:function(){return{textStyle:s}}},r):null)}},"./src/components/Button/changeColor.ts":function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.lighten=t.darken=void 0;var o=function(e,t){for(e+="";e.length<t;)e="0"+e;return e},n=function(e,t,n){e=(e=e.replace(/^\s*|\s*$/,"")).replace(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i,"#$1$1$2$2$3$3");var r=Math.round(256*t)*(n?-1:1),s="(\\d|[1-9]\\d|1\\d{2}|2[0-4][0-9]|25[0-5])",a=e.match(new RegExp("^rgba?\\(\\s*"+s+"\\s*,\\s*"+s+"\\s*,\\s*"+s+"(?:\\s*,\\s*(0|1|0?\\.\\d+))?\\s*\\)$","i")),l=a&&null!=a[4]?a[4]:null,i=a?[a[1],a[2],a[3]]:e.replace(/^#?([a-f0-9][a-f0-9])([a-f0-9][a-f0-9])([a-f0-9][a-f0-9])/i,function(e,t,o,n){return parseInt(t,16)+","+parseInt(o,16)+","+parseInt(n,16)}).split(/,/);return a?"rgb"+(null!==l?"a":"")+"("+Math[n?"max":"min"](parseInt(i[0],10)+r,n?0:255)+", "+Math[n?"max":"min"](parseInt(i[1],10)+r,n?0:255)+", "+Math[n?"max":"min"](parseInt(i[2],10)+r,n?0:255)+(null!==l?", "+l:"")+")":["#",o(Math[n?"max":"min"](parseInt(i[0],10)+r,n?0:255).toString(16),2),o(Math[n?"max":"min"](parseInt(i[1],10)+r,n?0:255).toString(16),2),o(Math[n?"max":"min"](parseInt(i[2],10)+r,n?0:255).toString(16),2)].join("")},r=function(e,t){return n(e,t,!0)};t.darken=r,r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"darken",filename:"src/components/Button/changeColor.ts"}});var s=function(e,t){return n(e,t,!1)};t.lighten=s,s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"lighten",filename:"src/components/Button/changeColor.ts"}})},"./src/components/Button/index.ts":function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0});var n=o("./src/components/Button/Button.tsx");Object.keys(n).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})})},"./src/components/Loading/LoadingDots.tsx":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.LoadingDots=void 0;var s=r(o("./node_modules/@babel/runtime/regenerator/index.js")),a=r(o("./node_modules/@babel/runtime/helpers/asyncToGenerator.js")),l=n(o("./node_modules/react/index.js")),i=o("./node_modules/react-native-web/dist/index.js"),u=o("./node_modules/react-spring/native.cjs.js"),c=(0,u.animated)(i.View);"undefined"!==typeof LoadingDotsProps&&LoadingDotsProps&&LoadingDotsProps===Object(LoadingDotsProps)&&Object.isExtensible(LoadingDotsProps)&&Object.defineProperty(LoadingDotsProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"LoadingDotsProps",filename:"src/components/Loading/LoadingDots.tsx"}});var d=["1","2","3"],f=function(e){var t=e.size,o=void 0===t?10:t,n=e.color,r=void 0===n?"#aaa":n,f=(0,u.useTrail)(d.length,{config:{duration:800},from:{opacity:0},reset:!0,to:function(){var e=(0,a.default)(s.default.mark(function e(t){return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,t({opacity:1});case 3:return e.next=5,t({opacity:0});case 5:e.next=0;break;case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()});return l.createElement(i.View,{style:{alignItems:"center",flexDirection:"row",justifyContent:"center"}},f.map(function(e,t){return l.createElement(c,{key:d[t],style:{backgroundColor:r,borderRadius:"50%",height:o,marginLeft:3,marginRight:3,opacity:e.opacity,width:o}})}))};t.LoadingDots=f,f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"LoadingDots",filename:"src/components/Loading/LoadingDots.tsx"}})},"./src/components/Loading/index.ts":function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0});var n=o("./src/components/Loading/LoadingDots.tsx");Object.keys(n).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})})},"./src/components/Modal/HistoryModal.web.tsx":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.HistoryModal=void 0;var s=r(o("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),a=r(o("./node_modules/@babel/runtime/helpers/extends.js")),l=r(o("./node_modules/@babel/runtime/helpers/defineProperty.js")),i=r(o("./node_modules/@babel/runtime/helpers/objectSpread.js")),u=r(o("./node_modules/@babel/runtime/helpers/classCallCheck.js")),c=r(o("./node_modules/@babel/runtime/helpers/createClass.js")),d=r(o("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),f=r(o("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),b=r(o("./node_modules/@babel/runtime/helpers/inherits.js")),p=n(o("./node_modules/react/index.js")),m=o("./src/components/Modal/ModalBase.web.tsx"),y=0,g=function(e){function t(){var e,o;(0,u.default)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(o=(0,d.default)(this,(e=(0,f.default)(t)).call.apply(e,[this].concat(r)))).modalId=++y,o.componentDidUpdate=function(e){var t=o.props.visible;e.visible!==t&&(t?o.updateBrowserHistory():o.handleManuallyClosed())},o.componentWillUnmount=function(){o.clearBrowserState()},o.updateBrowserHistory=function(){history.state&&history.state.modal&&history.state.modal[o.modalId]||history.pushState((0,i.default)({},history.state,{modal:(0,i.default)({},history.state&&history.state.modal,(0,l.default)({},o.modalId,!0))}),""),window.addEventListener("popstate",o.handlePopstate,!1)},o.handlePopstate=function(e){var t=o.props,n=t.visible,r=t.onRequestClose;e.state&&e.state.modal&&e.state.modal[o.modalId]||!r||(o.clearBrowserState(),r()),!n&&e.state&&e.state.modal&&e.state.modal[o.modalId]&&history.go(-1)},o.handleEscapeKey=function(){var e=o.props.onRequestClose;(history.state||history.state.modal||history.state.modal[o.modalId])&&e&&(o.clearBrowserState(),e(),history.go(-1))},o.handleManuallyClosed=function(){history.state&&history.state.modal&&history.state.modal[o.modalId]&&(o.clearBrowserState(),history.go(-1))},o.clearBrowserState=function(){history.replaceState((0,i.default)({},history.state,{modal:(0,i.default)({},history.state&&history.state.modal,(0,l.default)({},o.modalId,!1))}),""),window.removeEventListener("popstate",o.handlePopstate,!1)},o}return(0,b.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=(0,a.default)({},this.props);return p.createElement(m.ModalBase,(0,a.default)({},e,{onRequestClose:this.handleEscapeKey}))}}]),t}(p.Component),j=function(e){var t=e.useHistory,o=void 0!==t&&t,n=(0,s.default)(e,["useHistory"]);return o?p.createElement(g,n):p.createElement(m.ModalBase,n)};t.HistoryModal=j,j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HistoryModal",filename:"src/components/Modal/HistoryModal.web.tsx"}})},"./src/components/Modal/Modal.tsx":function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0});var n=o("./src/components/Modal/HistoryModal.web.tsx");Object.keys(n).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})})},"./src/components/Modal/ModalBase.web.tsx":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.ModalBase=void 0;var s=r(o("./node_modules/@babel/runtime/helpers/slicedToArray.js")),a=r(o("./node_modules/focus-trap/index.js")),l=n(o("./node_modules/react/index.js")),i=n(o("./node_modules/react-dom/index.js")),u=o("./node_modules/react-spring/web.cjs.js"),c=o("./src/constants/Animation.ts"),d=o("./src/hooks/index.ts"),f=function(e){var t=e.children,o=e.transparent,n=e.visible,r=e.shouldLockBodyScroll,f=void 0===r||r,b=e.onRequestClose,p=e.animationType,m=void 0===p?"none":p,y=!1,g=(0,d.useElement)();if(!g)return null;var j=l.useState(n),v=(0,s.default)(j,2),h=v[0],_=v[1],B=l.useRef(null),P=l.useRef(null);(0,d.useLockBodyScroll)({isLocked:!(!f||!n)}),l.useEffect(function(){var e=function(){P.current&&(P.current.deactivate(),P.current=null)};return n?(B.current&&!P.current&&(P.current=(0,a.default)(B.current,{initialFocus:B.current,onDeactivate:function(){b&&n&&!y&&b()}}),P.current.activate()),_(!0)):e(),function(){y=!0,e()}},[n]);var O=(0,u.useSpring)({onRest:function(){return!n&&h&&_(!1)},config:c.springDefaultConfig,opacity:"fade"===m?n?1:0:1,y:"slide"===m?n?0:100:0}),x=O.opacity,M=O.y;return i.createPortal(l.createElement(u.animated.div,{tabIndex:-1,ref:B,style:{backgroundColor:o?"transparent":"white",bottom:0,display:h?"flex":"none",flexDirection:"column",left:0,opacity:x,position:f?"fixed":"absolute",right:0,top:0,transform:M.interpolate(function(e){return"translateY(".concat(e,"%)")}),zIndex:1e3}},n?t:null),g)};t.ModalBase=f,f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ModalBase",filename:"src/components/Modal/ModalBase.web.tsx"}})},"./src/components/Modal/index.ts":function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0});var n={Modal:!0,ModalProps:!0};Object.defineProperty(t,"Modal",{enumerable:!0,get:function(){return a.HistoryModal}}),Object.defineProperty(t,"ModalProps",{enumerable:!0,get:function(){return a.HistoryModalProps}});var r=o("./src/components/Modal/ModalBase.web.tsx");Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(n,e)||Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}}))});var s=o("./src/components/Modal/HistoryModal.web.tsx");Object.keys(s).forEach(function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(n,e)||Object.defineProperty(t,e,{enumerable:!0,get:function(){return s[e]}}))});var a=o("./src/components/Modal/Modal.tsx");"undefined"!==typeof ModalProps&&ModalProps&&ModalProps===Object(ModalProps)&&Object.isExtensible(ModalProps)&&Object.defineProperty(ModalProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ModalProps",filename:"src/components/Modal/index.ts"}}),"undefined"!==typeof Modal&&Modal&&Modal===Object(Modal)&&Object.isExtensible(Modal)&&Object.defineProperty(Modal,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Modal",filename:"src/components/Modal/index.ts"}})},"./src/constants/Animation.ts":function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.springDefaultConfig=void 0;var o={friction:40,tension:450};t.springDefaultConfig=o,"undefined"!==typeof o&&o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"springDefaultConfig",filename:"src/constants/Animation.ts"}})},"./src/hooks/index.ts":function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0});var n=o("./src/hooks/usePrevious.ts");Object.keys(n).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})});var r=o("./src/hooks/useMeasure.ts");Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})});var s=o("./src/hooks/useElement.ts");Object.keys(s).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return s[e]}})});var a=o("./src/hooks/useLockBodyScroll.ts");Object.keys(a).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}})})},"./src/hooks/useElement.ts":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),t.useElement=void 0;var r=o("./node_modules/exenv/index.js"),s=n(o("./node_modules/react/index.js")),a=function(e){var t=s.useRef(null);s.useEffect(function(){var o,n=function(e){var t=document.createElement("div");return e&&t.setAttribute("id",e),t}(e);return o=n,document.body.lastElementChild&&document.body.insertBefore(o,document.body.lastElementChild.nextElementSibling),t.current&&n.appendChild(t.current),function(){t.current&&t.current.remove(),-1===n.childNodes.length&&n.remove()}},[]);return!t.current&&r.canUseDOM&&(t.current=document.createElement("div")),t.current};t.useElement=a,a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useElement",filename:"src/hooks/useElement.ts"}})},"./src/hooks/useLockBodyScroll.ts":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),t.useLockBodyScroll=void 0;var r=n(o("./node_modules/react/index.js")),s=function(e){var t=e.isLocked;r.useEffect(function(){var e=window.getComputedStyle(document.body).overflow,o=function(){document.body.style.overflow=e};return t?document.body.style.overflow="hidden":o(),function(){return o()}},[t])};t.useLockBodyScroll=s,s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useLockBodyScroll",filename:"src/hooks/useLockBodyScroll.ts"}})},"./src/hooks/useMeasure.ts":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.useMeasure=t.initialMeasurements=void 0;var s=r(o("./node_modules/@babel/runtime/helpers/objectSpread.js")),a=r(o("./node_modules/@babel/runtime/helpers/slicedToArray.js")),l=n(o("./node_modules/react/index.js")),i=o("./node_modules/react-native-web/dist/index.js");"undefined"!==typeof Measurements&&Measurements&&Measurements===Object(Measurements)&&Object.isExtensible(Measurements)&&Object.defineProperty(Measurements,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Measurements",filename:"src/hooks/useMeasure.ts"}}),"undefined"!==typeof UseMeasureProps&&UseMeasureProps&&UseMeasureProps===Object(UseMeasureProps)&&Object.isExtensible(UseMeasureProps)&&Object.defineProperty(UseMeasureProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"UseMeasureProps",filename:"src/hooks/useMeasure.ts"}});var u={height:0,pageX:0,pageY:0,width:0,x:0,y:0};t.initialMeasurements=u,"undefined"!==typeof u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"initialMeasurements",filename:"src/hooks/useMeasure.ts"}});var c=function(e){return"web"===i.Platform.OS?e+window.scrollY:e},d=function(e){var t=e.onMeasure,o=e.ref,n=l.useState(u),r=(0,a.default)(n,2),d=r[0],f=r[1],b=l.useCallback(function(e){var n=(0,i.findNodeHandle)(o.current),r=d;n&&i.UIManager.measure(n,function(o,n,a,l,i,u){var d=(0,s.default)({},r,e,{pageX:i,pageY:c(u)});f(d),t&&t(d)})},[d]),p=l.useCallback(function(e){var t=e.nativeEvent.layout;b(t)},[b,d]),m=l.useCallback(function(){b()},[b,d]);return l.useEffect(function(){return i.Dimensions.addEventListener("change",m),function(){return i.Dimensions.removeEventListener("change",m)}},[d]),{measurements:d,onLayout:p,onMeasure:b}};t.useMeasure=d,d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useMeasure",filename:"src/hooks/useMeasure.ts"}})},"./src/hooks/usePrevious.ts":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),t.usePrevious=void 0;var r=n(o("./node_modules/react/index.js")),s=function(e){var t=r.useRef(e);return r.useEffect(function(){t.current=e},[e]),t.current};t.usePrevious=s,s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"usePrevious",filename:"src/hooks/usePrevious.ts"}})}}]);
//# sourceMappingURL=2.58d4baec849292285fb2.js.map