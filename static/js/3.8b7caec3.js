(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./src/components/Helpers/Responsive.tsx":function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.Responsive=t.isWindowBelowMaxWidth=t.isWindowAboveMinWidth=void 0;var r=n("./node_modules/react-native-web/dist/index.js");"undefined"!==typeof ResponsiveRenderPropType&&ResponsiveRenderPropType&&ResponsiveRenderPropType===Object(ResponsiveRenderPropType)&&Object.isExtensible(ResponsiveRenderPropType)&&Object.defineProperty(ResponsiveRenderPropType,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ResponsiveRenderPropType",filename:"src/components/Helpers/Responsive.tsx"}}),"undefined"!==typeof ResponsiveChildrenProps&&ResponsiveChildrenProps&&ResponsiveChildrenProps===Object(ResponsiveChildrenProps)&&Object.isExtensible(ResponsiveChildrenProps)&&Object.defineProperty(ResponsiveChildrenProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ResponsiveChildrenProps",filename:"src/components/Helpers/Responsive.tsx"}}),"undefined"!==typeof ResponsiveProps&&ResponsiveProps&&ResponsiveProps===Object(ResponsiveProps)&&Object.isExtensible(ResponsiveProps)&&Object.defineProperty(ResponsiveProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ResponsiveProps",filename:"src/components/Helpers/Responsive.tsx"}});var o=function(e){return r.Dimensions.get("window").width>e};t.isWindowAboveMinWidth=o,o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"isWindowAboveMinWidth",filename:"src/components/Helpers/Responsive.tsx"}});var s=function(e){return r.Dimensions.get("window").width<e};t.isWindowBelowMaxWidth=s,s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"isWindowBelowMaxWidth",filename:"src/components/Helpers/Responsive.tsx"}});var a=function(e){var t=e.children,n=e.minWidth,r=e.maxWidth,a=!0,l=!0;n&&(a=o(n)),r&&(l=s(r));var i=a&&l;return"function"===typeof t?t({matches:i}):i?t:null};t.Responsive=a,a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Responsive",filename:"src/components/Helpers/Responsive.tsx"}})},"./src/components/Helpers/ViewMeasure.tsx":function(e,t,n){var r=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),o=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.ViewMeasure=void 0;var s=o(n("./node_modules/@babel/runtime/helpers/extends.js")),a=o(n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),l=r(n("./node_modules/react/index.js")),i=n("./node_modules/react-native-web/dist/index.js"),d=n("./src/components/Helpers/useMeasure.ts");"undefined"!==typeof ViewMeasureRenderPropType&&ViewMeasureRenderPropType&&ViewMeasureRenderPropType===Object(ViewMeasureRenderPropType)&&Object.isExtensible(ViewMeasureRenderPropType)&&Object.defineProperty(ViewMeasureRenderPropType,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ViewMeasureRenderPropType",filename:"src/components/Helpers/ViewMeasure.tsx"}}),"undefined"!==typeof ViewMeasureProps&&ViewMeasureProps&&ViewMeasureProps===Object(ViewMeasureProps)&&Object.isExtensible(ViewMeasureProps)&&Object.defineProperty(ViewMeasureProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ViewMeasureProps",filename:"src/components/Helpers/ViewMeasure.tsx"}});var u=function(e){var t=e.onMeasure,n=e.children,r=(0,a.default)(e,["onMeasure","children"]),o="function"===typeof n,u=(0,d.useMeasure)({onMeasure:t}),c=u.forwardRef,p=u.onLayout;return l.createElement(i.View,(0,s.default)({ref:c,onLayout:p,children:o?n(measurements):n},r))};t.ViewMeasure=u,u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ViewMeasure",filename:"src/components/Helpers/ViewMeasure.tsx"}})},"./src/components/Helpers/index.ts":function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n("./src/components/Helpers/ViewMeasure.tsx");Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})});var o=n("./src/components/Helpers/Responsive.tsx");Object.keys(o).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})});var s=n("./src/components/Helpers/useMeasure.ts");Object.keys(s).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return s[e]}})});var a=n("./src/components/Helpers/useElement.ts");Object.keys(a).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}})});var l=n("./src/components/Helpers/useFreezeBody.ts");Object.keys(l).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return l[e]}})})},"./src/components/Helpers/useElement.ts":function(e,t,n){var r=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),t.useElement=void 0;var o=r(n("./node_modules/react/index.js")),s=function(e){var t=o.useRef(null);o.useEffect(function(){var n,r=function(e){var t=document.createElement("div");return t.setAttribute("id",e),t}(e);return n=r,document.body.lastElementChild&&document.body.insertBefore(n,document.body.lastElementChild.nextElementSibling),t.current&&r.appendChild(t.current),function(){t.current&&t.current.remove(),-1===r.childNodes.length&&r.remove()}},[]);return t.current||(t.current=document.createElement("div")),t.current};t.useElement=s,s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useElement",filename:"src/components/Helpers/useElement.ts"}})},"./src/components/Helpers/useFreezeBody.ts":function(e,t,n){var r=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),t.useFreezeBody=void 0;var o=r(n("./node_modules/react/index.js")),s=function(e){var t=e.isFrozen;o.useEffect(function(){var e=function(){document.body.style.overflow="",document.body.style.height=""};return t?(document.body.style.overflow="hidden",document.body.style.height="100vh"):e(),function(){return e()}},[t])};t.useFreezeBody=s,s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useFreezeBody",filename:"src/components/Helpers/useFreezeBody.ts"}})},"./src/components/Helpers/useMeasure.ts":function(e,t,n){var r=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),o=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.useMeasure=void 0;var s=o(n("./node_modules/@babel/runtime/helpers/objectSpread.js")),a=o(n("./node_modules/@babel/runtime/helpers/slicedToArray.js")),l=r(n("./node_modules/react/index.js")),i=n("./node_modules/react-native-web/dist/index.js");"undefined"!==typeof Measurements&&Measurements&&Measurements===Object(Measurements)&&Object.isExtensible(Measurements)&&Object.defineProperty(Measurements,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Measurements",filename:"src/components/Helpers/useMeasure.ts"}}),"undefined"!==typeof UseMeasureProps&&UseMeasureProps&&UseMeasureProps===Object(UseMeasureProps)&&Object.isExtensible(UseMeasureProps)&&Object.defineProperty(UseMeasureProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"UseMeasureProps",filename:"src/components/Helpers/useMeasure.ts"}});var d=function(e){var t=l.createRef(),n=e.onMeasure,r=l.useState({height:0,pageX:0,pageY:0,width:0,x:0,y:0}),o=(0,a.default)(r,2),d=o[0],u=o[1],c=function(e){i.UIManager.measure((0,i.findNodeHandle)(t.current),function(t,r,o,a,l,i){var c=(0,s.default)({},d,e,{pageX:l,pageY:i});u(c),n&&n(c)})};return{forwardRef:t,measurements:d,onLayout:function(e){var t=e.nativeEvent.layout;c(t)},onMeasure:c}};t.useMeasure=d,d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useMeasure",filename:"src/components/Helpers/useMeasure.ts"}})},"./src/components/Modal/CloseableModal.tsx":function(e,t,n){var r=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),o=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.CloseableModal=void 0;var s=o(n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),a=r(n("./node_modules/react/index.js")),l=n("./node_modules/react-native-web/dist/index.js"),i=n("./src/components/Modal/index.ts"),d=n("./src/icons/index.ts"),u=n("./src/theme/index.ts"),c=n("./src/components/Layout/index.ts"),p=n("./src/components/Modal/ModalContent.tsx");"undefined"!==typeof CloseableModalProps&&CloseableModalProps&&CloseableModalProps===Object(CloseableModalProps)&&Object.isExtensible(CloseableModalProps)&&Object.defineProperty(CloseableModalProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CloseableModalProps",filename:"src/components/Modal/CloseableModal.tsx"}});var m=function(e){var t=e.children,n=e.rightSide,r=e.onClose,o=(0,s.default)(e,["children","rightSide","onClose"]),m=(0,u.useTheme)();return a.createElement(i.Modal,o,a.createElement(p.ModalContent,null,a.createElement(c.Box,{flexDirection:"row",justifyContent:"space-between"},a.createElement(l.TouchableOpacity,{style:{width:56,height:60,justifyContent:"center"},onPress:function(e){e.preventDefault(),r()}},a.createElement(l.View,{style:{paddingHorizontal:8}},a.createElement(d.Icon,{color:m.colors.text.default,size:40,name:"x"}))),n),t))};t.CloseableModal=m,m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CloseableModal",filename:"src/components/Modal/CloseableModal.tsx"}})},"./src/components/Modal/FormModal.tsx":function(e,t,n){var r=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),o=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.FormModal=void 0;var s=o(n("./node_modules/@babel/runtime/helpers/extends.js")),a=o(n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),l=r(n("./node_modules/react/index.js")),i=n("./node_modules/react-native-web/dist/index.js"),d=n("./src/components/Typography/index.ts"),u=n("./src/components/Modal/CloseableModal.tsx");"undefined"!==typeof FormModalProps&&FormModalProps&&FormModalProps===Object(FormModalProps)&&Object.isExtensible(FormModalProps)&&Object.defineProperty(FormModalProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FormModalProps",filename:"src/components/Modal/FormModal.tsx"}});var c=function(e){var t=e.children,n=e.onClose,r=e.onClear,o=e.clearText,c=void 0===o?"Clear":o,p=(0,a.default)(e,["children","onClose","onClear","clearText"]);return l.createElement(u.CloseableModal,(0,s.default)({onClose:n,rightSide:l.createElement(i.TouchableOpacity,{onPress:function(e){e.preventDefault(),r()}},l.createElement(i.View,{style:{alignItems:"center",display:"flex",height:"100%",justifyContent:"center",paddingHorizontal:16}},l.createElement(d.Text,{isBold:!0},c)))},p),t)};t.FormModal=c,c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FormModal",filename:"src/components/Modal/FormModal.tsx"}})},"./src/components/Modal/HistoryModal.web.tsx":function(e,t,n){var r=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),o=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.HistoryModal=void 0;var s=o(n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),a=o(n("./node_modules/@babel/runtime/helpers/extends.js")),l=o(n("./node_modules/@babel/runtime/helpers/defineProperty.js")),i=o(n("./node_modules/@babel/runtime/helpers/objectSpread.js")),d=o(n("./node_modules/@babel/runtime/helpers/classCallCheck.js")),u=o(n("./node_modules/@babel/runtime/helpers/createClass.js")),c=o(n("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),p=o(n("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),m=o(n("./node_modules/@babel/runtime/helpers/inherits.js")),b=r(n("./node_modules/react/index.js")),f=n("./src/components/Modal/ModalBase.web.tsx"),y=0,v=function(e){function t(){var e,n;(0,d.default)(this,t);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(n=(0,c.default)(this,(e=(0,p.default)(t)).call.apply(e,[this].concat(o)))).modalId=++y,n.componentDidUpdate=function(e){var t=n.props.visible;e.visible!==t&&(t?n.updateBrowserHistory():n.handleManuallyClosed())},n.componentWillUnmount=function(){n.clearBrowserState()},n.updateBrowserHistory=function(){history.state&&history.state.modal&&history.state.modal[n.modalId]||history.pushState((0,i.default)({},history.state,{modal:(0,i.default)({},history.state&&history.state.modal,(0,l.default)({},n.modalId,!0))}),""),window.addEventListener("popstate",n.handlePopstate,!1)},n.handlePopstate=function(e){var t=n.props,r=t.visible,o=t.onRequestClose;e.state&&e.state.modal&&e.state.modal[n.modalId]||!o||(n.clearBrowserState(),o()),!r&&e.state&&e.state.modal&&e.state.modal[n.modalId]&&history.go(-1)},n.handleEscapeKey=function(){var e=n.props.onRequestClose;(history.state||history.state.modal||history.state.modal[n.modalId])&&e&&(n.clearBrowserState(),e(),history.go(-1))},n.handleManuallyClosed=function(){history.state&&history.state.modal&&history.state.modal[n.modalId]&&(n.clearBrowserState(),history.go(-1))},n.clearBrowserState=function(){history.replaceState((0,i.default)({},history.state,{modal:(0,i.default)({},history.state&&history.state.modal,(0,l.default)({},n.modalId,!1))}),""),window.removeEventListener("popstate",n.handlePopstate,!1)},n}return(0,m.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=(0,a.default)({},this.props);return b.createElement(f.ModalBase,(0,a.default)({},e,{onRequestClose:this.handleEscapeKey}))}}]),t}(b.Component),j=function(e){var t=e.useHistory,n=void 0!==t&&t,r=(0,s.default)(e,["useHistory"]);return n?b.createElement(v,r):b.createElement(f.ModalBase,r)};t.HistoryModal=j,j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HistoryModal",filename:"src/components/Modal/HistoryModal.web.tsx"}})},"./src/components/Modal/Modal.tsx":function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n("./src/components/Modal/HistoryModal.web.tsx");Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})})},"./src/components/Modal/ModalBase.web.tsx":function(e,t,n){var r=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),o=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.ModalBase=void 0;var s=o(n("./node_modules/@babel/runtime/helpers/slicedToArray.js")),a=o(n("./node_modules/focus-trap/index.js")),l=r(n("./node_modules/react/index.js")),i=r(n("./node_modules/react-dom/index.js")),d=n("./node_modules/react-spring/web.cjs.js"),u=n("./src/components/Helpers/index.ts"),c=function(e){var t=e.children,n=e.transparent,r=e.visible,o=e.isBackgroundScrollable,c=void 0!==o&&o,p=e.onRequestClose,m=e.animationType,b=void 0===m?"none":m,f=!1,y=(0,u.useElement)("modal"),v=l.useState(r),j=(0,s.default)(v,2),O=j[0],M=j[1],_=l.useRef(null),h=l.useRef(null);(0,u.useFreezeBody)({isFrozen:!(c||!r)}),l.useEffect(function(){var e=function(){h.current&&(h.current.deactivate(),h.current=null)};return r?(_.current&&!h.current&&(h.current=(0,a.default)(_.current,{initialFocus:_.current,onDeactivate:function(){p&&r&&!f&&p()}}),h.current.activate()),M(!0)):e(),function(){f=!0,e()}},[r]);var P=(0,d.useSpring)({config:{clamp:!0,friction:24,tension:240},onRest:function(){r||M(!1)},opacity:"fade"===b?r?1:0:1,y:"slide"===b?r?0:100:0}),x=P.opacity,g=P.y;return i.createPortal(l.createElement(d.animated.div,{tabIndex:-1,ref:_,style:{backgroundColor:n?"transparent":"white",bottom:0,display:O?"flex":"none",flexDirection:"column",left:0,opacity:x,position:c?"absolute":"fixed",right:0,top:0,transform:g.interpolate(function(e){return"translateY(".concat(e,"%)")}),zIndex:1e3}},r?t:null),y)};t.ModalBase=c,c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ModalBase",filename:"src/components/Modal/ModalBase.web.tsx"}})},"./src/components/Modal/ModalContent.tsx":function(e,t,n){var r=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),t.ModalContent=void 0;var o=r(n("./node_modules/react/index.js")),s=n("./node_modules/react-native-web/dist/index.js");"undefined"!==typeof ModalContentProps&&ModalContentProps&&ModalContentProps===Object(ModalContentProps)&&Object.isExtensible(ModalContentProps)&&Object.defineProperty(ModalContentProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ModalContentProps",filename:"src/components/Modal/ModalContent.tsx"}});var a=function(e){var t=e.children;return o.createElement(s.View,{style:{height:"100%",marginLeft:"auto",marginRight:"auto",maxWidth:960}},t)};t.ModalContent=a,a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ModalContent",filename:"src/components/Modal/ModalContent.tsx"}})},"./src/components/Modal/index.ts":function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r={Modal:!0,ModalProps:!0};Object.defineProperty(t,"Modal",{enumerable:!0,get:function(){return i.HistoryModal}}),Object.defineProperty(t,"ModalProps",{enumerable:!0,get:function(){return i.HistoryModalProps}});var o=n("./src/components/Modal/ModalBase.web.tsx");Object.keys(o).forEach(function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(r,e)||Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}}))});var s=n("./src/components/Modal/HistoryModal.web.tsx");Object.keys(s).forEach(function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(r,e)||Object.defineProperty(t,e,{enumerable:!0,get:function(){return s[e]}}))});var a=n("./src/components/Modal/FormModal.tsx");Object.keys(a).forEach(function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(r,e)||Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}}))});var l=n("./src/components/Modal/CloseableModal.tsx");Object.keys(l).forEach(function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(r,e)||Object.defineProperty(t,e,{enumerable:!0,get:function(){return l[e]}}))});var i=n("./src/components/Modal/Modal.tsx");"undefined"!==typeof ModalProps&&ModalProps&&ModalProps===Object(ModalProps)&&Object.isExtensible(ModalProps)&&Object.defineProperty(ModalProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ModalProps",filename:"src/components/Modal/index.ts"}}),"undefined"!==typeof Modal&&Modal&&Modal===Object(Modal)&&Object.isExtensible(Modal)&&Object.defineProperty(Modal,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Modal",filename:"src/components/Modal/index.ts"}})},"./src/components/Overlay/Overlay.styles.ts":function(e,t,n){var r=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.getOverlayStyles=t.getOverlayVariables=void 0;var o=r(n("./node_modules/@babel/runtime/helpers/objectSpread.js"));"undefined"!==typeof OverlayVariables&&OverlayVariables&&OverlayVariables===Object(OverlayVariables)&&Object.isExtensible(OverlayVariables)&&Object.defineProperty(OverlayVariables,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"OverlayVariables",filename:"src/components/Overlay/Overlay.styles.ts"}});var s=function(e){return{overlay:{bottom:0,cursor:"auto",height:"100%",left:0,position:"absolute",right:0,top:0,width:"100%"}}};t.getOverlayVariables=s,s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getOverlayVariables",filename:"src/components/Overlay/Overlay.styles.ts"}}),"undefined"!==typeof OverlayStyles&&OverlayStyles&&OverlayStyles===Object(OverlayStyles)&&Object.isExtensible(OverlayStyles)&&Object.defineProperty(OverlayStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"OverlayStyles",filename:"src/components/Overlay/Overlay.styles.ts"}}),"undefined"!==typeof OverlayStylesProps&&OverlayStylesProps&&OverlayStylesProps===Object(OverlayStylesProps)&&Object.isExtensible(OverlayStylesProps)&&Object.defineProperty(OverlayStylesProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"OverlayStylesProps",filename:"src/components/Overlay/Overlay.styles.ts"}}),"undefined"!==typeof GetOverlayStyles&&GetOverlayStyles&&GetOverlayStyles===Object(GetOverlayStyles)&&Object.isExtensible(GetOverlayStyles)&&Object.defineProperty(GetOverlayStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetOverlayStyles",filename:"src/components/Overlay/Overlay.styles.ts"}});var a=function(e,t){var n=e.transparent,r={overlay:{bottom:0,cursor:"auto",height:"100%",left:0,position:"absolute",right:0,top:0,width:"100%"}};return{overlayStyle:(0,o.default)({},r.overlay,{backgroundColor:n?"transparent":t.colors.background.overlay})}};t.getOverlayStyles=a,a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getOverlayStyles",filename:"src/components/Overlay/Overlay.styles.ts"}})},"./src/components/Overlay/Overlay.tsx":function(e,t,n){var r=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),t.Overlay=void 0;var o=r(n("./node_modules/react/index.js")),s=n("./node_modules/react-native-web/dist/index.js"),a=n("./src/theme/index.ts"),l=n("./src/utils/mergeStyles.ts"),i=n("./src/components/Overlay/Overlay.styles.ts"),d=function(e){var t=e.onPress,n=e.transparent,r=void 0!==n&&n,d=e.getStyles,u=(0,a.useTheme)(),c=(0,l.mergeStyles)(i.getOverlayStyles,d)({transparent:r},u).overlayStyle;return o.createElement(s.TouchableWithoutFeedback,{onPress:function(e){e.preventDefault(),t()}},o.createElement(s.View,{style:c}))};t.Overlay=d,d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Overlay",filename:"src/components/Overlay/Overlay.tsx"}})},"./src/components/Overlay/index.ts":function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n("./src/components/Overlay/Overlay.tsx");Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})})},"./src/icons/Icon.web.tsx":function(e,t,n){var r=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("./node_modules/react/index.js")),s=r(n("./node_modules/react-icons/fi/index.esm.js"));t.default=function(e){var t=e.name,n=e.color,r=e.size,a=s["Fi".concat(function(e){var t=e.replace(/(\-\w)/g,function(e){return e[1].toUpperCase()});return t.charAt(0).toUpperCase()+t.slice(1)}(t))];return o.createElement(a,{color:n,size:r})}},"./src/icons/index.ts":function(e,t,n){var r=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Icon",{enumerable:!0,get:function(){return o.default}});var o=r(n("./src/icons/Icon.web.tsx"));"undefined"!==typeof Icon&&Icon&&Icon===Object(Icon)&&Object.isExtensible(Icon)&&Object.defineProperty(Icon,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Icon",filename:"src/icons/index.ts"}})}}]);
//# sourceMappingURL=3.236498420dea747f10f7.js.map