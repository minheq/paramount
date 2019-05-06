(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"./src/components/Overlay/Overlay.styles.ts":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.getOverlayStyles=t.getOverlayVariables=void 0;var r=n(o("./node_modules/@babel/runtime/helpers/objectSpread.js"));"undefined"!==typeof OverlayVariables&&OverlayVariables&&OverlayVariables===Object(OverlayVariables)&&Object.isExtensible(OverlayVariables)&&Object.defineProperty(OverlayVariables,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"OverlayVariables",filename:"src/components/Overlay/Overlay.styles.ts"}});var i=function(e){return{overlay:{bottom:0,cursor:"auto",height:"100%",left:0,position:"absolute",right:0,top:0,width:"100%"}}};t.getOverlayVariables=i,i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getOverlayVariables",filename:"src/components/Overlay/Overlay.styles.ts"}}),"undefined"!==typeof OverlayStyles&&OverlayStyles&&OverlayStyles===Object(OverlayStyles)&&Object.isExtensible(OverlayStyles)&&Object.defineProperty(OverlayStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"OverlayStyles",filename:"src/components/Overlay/Overlay.styles.ts"}}),"undefined"!==typeof OverlayStylesProps&&OverlayStylesProps&&OverlayStylesProps===Object(OverlayStylesProps)&&Object.isExtensible(OverlayStylesProps)&&Object.defineProperty(OverlayStylesProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"OverlayStylesProps",filename:"src/components/Overlay/Overlay.styles.ts"}}),"undefined"!==typeof GetOverlayStyles&&GetOverlayStyles&&GetOverlayStyles===Object(GetOverlayStyles)&&Object.isExtensible(GetOverlayStyles)&&Object.defineProperty(GetOverlayStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetOverlayStyles",filename:"src/components/Overlay/Overlay.styles.ts"}});var s=function(e,t){var o=e.transparent,n={overlay:{bottom:0,cursor:"auto",height:"100%",left:0,position:"absolute",right:0,top:0,width:"100%"}};return{overlayStyle:(0,r.default)({},n.overlay,{backgroundColor:o?"transparent":t.colors.background.overlay})}};t.getOverlayStyles=s,s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getOverlayStyles",filename:"src/components/Overlay/Overlay.styles.ts"}})},"./src/components/Overlay/Overlay.tsx":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),t.Overlay=void 0;var r=n(o("./node_modules/react/index.js")),i=o("./node_modules/react-native-web/dist/index.js"),s=o("./src/theme/index.ts"),a=o("./src/utils/mergeStyles.ts"),l=o("./src/components/Overlay/Overlay.styles.ts"),c=function(e){var t=e.onPress,o=e.transparent,n=void 0!==o&&o,c=e.getStyles,u=(0,s.useTheme)(),m=(0,a.mergeStyles)(l.getOverlayStyles,c)({transparent:n},u).overlayStyle;return r.createElement(i.TouchableWithoutFeedback,{onPress:function(e){e.preventDefault(),t()}},r.createElement(i.View,{style:m}))};t.Overlay=c,c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Overlay",filename:"src/components/Overlay/Overlay.tsx"}})},"./src/components/Overlay/index.ts":function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0});var n=o("./src/components/Overlay/Overlay.tsx");Object.keys(n).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})})},"./src/components/Popover/Popover.mdx":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=b;var r=n(o("./node_modules/@babel/runtime/helpers/extends.js")),i=n(o("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),s=(n(o("./node_modules/react/index.js")),o("./node_modules/@mdx-js/react/dist/index.es.js")),a=o("./node_modules/docz/dist/index.esm.js"),l=o("./src/components/Popover/index.ts"),c=o("./src/components/Button/index.ts"),u=o("./src/components/Layout/index.ts"),m=o("./src/components/Typography/index.ts"),p=o("./node_modules/react-powerplug/dist/react-powerplug.esm.js"),d={},f=function(e){var t=e.children;return document.body.style.height="initial",document.body.style.position="relative",(0,s.mdx)("div",null,t)};function b(e){var t=e.components,o=(0,i.default)(e,["components"]);return(0,s.mdx)(f,(0,r.default)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"popover"},"Popover"),(0,s.mdx)("p",null,(0,s.mdx)("inlineCode",{parentName:"p"},"Popover")," composes ",(0,s.mdx)("inlineCode",{parentName:"p"},"Positioner")," and adds only a white box wrapping. Content that can be anything. Popover just applies some styles for the content. For more low-level usage, use ",(0,s.mdx)("inlineCode",{parentName:"p"},"Positioner")),(0,s.mdx)("h3",{id:"usage"},"Usage"),(0,s.mdx)(a.Playground,{__position:0,__code:'<Popover\n  isVisible={false}\n  onClose={() => console.log(\'Close\')}\n  position="top-right"\n  content={() => <Box width={200} height={200} />}\n  getStyles={(props, theme) => ({\n    popoverStyle: {},\n  })}\n  // ...Positioner props\n>\n  <Button title="Child" />\n</Popover>',__scope:{props:this?this.props:o,Playground:a.Playground,Props:a.Props,Popover:l.Popover,Button:c.Button,Box:u.Box,Spacing:u.Spacing,Text:m.Text,Toggle:p.Toggle},mdxType:"Playground"},(0,s.mdx)(l.Popover,{isVisible:!1,onClose:function(){return console.log("Close")},position:"top-right",content:function(){return(0,s.mdx)(u.Box,{width:200,height:200,mdxType:"Box"})},getStyles:function(e,t){return{popoverStyle:{}}},mdxType:"Popover"},(0,s.mdx)(c.Button,{title:"Child",mdxType:"Button"}))),(0,s.mdx)("h3",{id:"variants"},"Variants"),(0,s.mdx)(a.Playground,{__position:1,__code:'<Spacing paddingBottom={8} zIndex={1}>\n  <Box flexDirection="row" justifyContent="space-between">\n    <Toggle>\n      {({ on, toggle }) => (\n        <Popover\n          isVisible={on}\n          onClose={toggle}\n          position="top-right"\n          content={() => (\n            <Box width={200} height={200}>\n              <Text>\n                Content that can be anything. Popover just applies some styles\n                for the content. For more low-level usage, use `Positioner`\n              </Text>\n            </Box>\n          )}\n        >\n          <Button onPress={toggle} isInline title="Top right" />\n        </Popover>\n      )}\n    </Toggle>\n    <Toggle>\n      {({ on, toggle }) => (\n        <Popover\n          isVisible={on}\n          onClose={toggle}\n          position="top"\n          content={() => (\n            <Box width={200} height={200}>\n              <Text>\n                Content that can be anything. Popover just applies some styles\n                for the content. For more low-level usage, use `Positioner`\n              </Text>\n            </Box>\n          )}\n        >\n          <Button onPress={toggle} isInline title="Top" />\n        </Popover>\n      )}\n    </Toggle>\n    <Toggle>\n      {({ on, toggle }) => (\n        <Popover\n          isVisible={on}\n          onClose={toggle}\n          position="top-left"\n          content={() => (\n            <Box width={200} height={200}>\n              <Text>\n                Content that can be anything. Popover just applies some styles\n                for the content. For more low-level usage, use `Positioner`\n              </Text>\n            </Box>\n          )}\n        >\n          <Button onPress={toggle} isInline title="Top left" />\n        </Popover>\n      )}\n    </Toggle>\n  </Box>\n</Spacing>',__scope:{props:this?this.props:o,Playground:a.Playground,Props:a.Props,Popover:l.Popover,Button:c.Button,Box:u.Box,Spacing:u.Spacing,Text:m.Text,Toggle:p.Toggle},mdxType:"Playground"},(0,s.mdx)(u.Spacing,{paddingBottom:8,zIndex:1,mdxType:"Spacing"},(0,s.mdx)(u.Box,{flexDirection:"row",justifyContent:"space-between",mdxType:"Box"},(0,s.mdx)(p.Toggle,{mdxType:"Toggle"},function(e){var t=e.on,o=e.toggle;return(0,s.mdx)(l.Popover,{isVisible:t,onClose:o,position:"top-right",content:function(){return(0,s.mdx)(u.Box,{width:200,height:200,mdxType:"Box"},(0,s.mdx)(m.Text,{mdxType:"Text"},"Content that can be anything. Popover just applies some styles for the content. For more low-level usage, use `Positioner`"))},mdxType:"Popover"},(0,s.mdx)(c.Button,{onPress:o,isInline:!0,title:"Top right",mdxType:"Button"}))}),(0,s.mdx)(p.Toggle,{mdxType:"Toggle"},function(e){var t=e.on,o=e.toggle;return(0,s.mdx)(l.Popover,{isVisible:t,onClose:o,position:"top",content:function(){return(0,s.mdx)(u.Box,{width:200,height:200,mdxType:"Box"},(0,s.mdx)(m.Text,{mdxType:"Text"},"Content that can be anything. Popover just applies some styles for the content. For more low-level usage, use `Positioner`"))},mdxType:"Popover"},(0,s.mdx)(c.Button,{onPress:o,isInline:!0,title:"Top",mdxType:"Button"}))}),(0,s.mdx)(p.Toggle,{mdxType:"Toggle"},function(e){var t=e.on,o=e.toggle;return(0,s.mdx)(l.Popover,{isVisible:t,onClose:o,position:"top-left",content:function(){return(0,s.mdx)(u.Box,{width:200,height:200,mdxType:"Box"},(0,s.mdx)(m.Text,{mdxType:"Text"},"Content that can be anything. Popover just applies some styles for the content. For more low-level usage, use `Positioner`"))},mdxType:"Popover"},(0,s.mdx)(c.Button,{onPress:o,isInline:!0,title:"Top left",mdxType:"Button"}))})))),(0,s.mdx)("h3",{id:"props"},"Props"),(0,s.mdx)(a.Props,{of:l.Popover,mdxType:"Props"}))}b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Popover/Popover.mdx"}}),b.isMDXComponent=!0},"./src/components/Popover/Popover.styles.ts":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.getPopoverStyles=t.getPopoverVariables=void 0;var r=n(o("./node_modules/@babel/runtime/helpers/objectSpread.js"));"undefined"!==typeof PopoverVariables&&PopoverVariables&&PopoverVariables===Object(PopoverVariables)&&Object.isExtensible(PopoverVariables)&&Object.defineProperty(PopoverVariables,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PopoverVariables",filename:"src/components/Popover/Popover.styles.ts"}});var i=function(e){return{popover:(0,r.default)({backgroundColor:e.colors.background.content,padding:16},e.elevations[2])}};t.getPopoverVariables=i,i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getPopoverVariables",filename:"src/components/Popover/Popover.styles.ts"}}),"undefined"!==typeof PopoverStyles&&PopoverStyles&&PopoverStyles===Object(PopoverStyles)&&Object.isExtensible(PopoverStyles)&&Object.defineProperty(PopoverStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PopoverStyles",filename:"src/components/Popover/Popover.styles.ts"}}),"undefined"!==typeof GetPopoverStyles&&GetPopoverStyles&&GetPopoverStyles===Object(GetPopoverStyles)&&Object.isExtensible(GetPopoverStyles)&&Object.defineProperty(GetPopoverStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetPopoverStyles",filename:"src/components/Popover/Popover.styles.ts"}});var s=function(e){return{popoverStyle:i(e).popover}};t.getPopoverStyles=s,s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getPopoverStyles",filename:"src/components/Popover/Popover.styles.ts"}})},"./src/components/Popover/Popover.tsx":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.Popover=void 0;var i=r(o("./node_modules/@babel/runtime/helpers/extends.js")),s=n(o("./node_modules/react/index.js")),a=o("./node_modules/react-native-web/dist/index.js"),l=o("./src/theme/index.ts"),c=o("./src/utils/mergeStyles.ts"),u=o("./src/components/Positioner/index.ts"),m=o("./src/components/Popover/Popover.styles.ts");"undefined"!==typeof PopoverProps&&PopoverProps&&PopoverProps===Object(PopoverProps)&&Object.isExtensible(PopoverProps)&&Object.defineProperty(PopoverProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PopoverProps",filename:"src/components/Popover/Popover.tsx"}});var p=function(e){var t=e.content,o=e.getContentStyles,n=(0,l.useTheme)(),r=(0,c.mergeStyles)(m.getPopoverStyles,o)(n).popoverStyle;return s.createElement(u.Positioner,(0,i.default)({},e,{content:function(e){return s.createElement(a.View,{style:r},t(e))}}))};t.Popover=p,p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Popover",filename:"src/components/Popover/Popover.tsx"}})},"./src/components/Popover/index.ts":function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0});var n=o("./src/components/Popover/Popover.tsx");Object.keys(n).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})})},"./src/components/Positioner/ArrowedPositioner.tsx":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.ArrowedPositioned=void 0;var i=r(o("./node_modules/@babel/runtime/helpers/extends.js")),s=n(o("./node_modules/react/index.js")),a=o("./src/theme/index.ts"),l=o("./src/components/Positioner/index.ts"),c=o("./src/components/Positioner/getPositionerArrow.tsx"),u=function(e){var t=e.content,o=e.isFullWidth,n=(0,a.useTheme)();return s.createElement(l.Positioner,(0,i.default)({},e,{content:function(e){var r={position:e.position,targetMeasurements:e.targetMeasurements,theme:n},i=o?(0,c.getFullWidthPositionerArrow)(r):(0,c.getPositionerArrow)(r);return s.createElement(s.Fragment,null,t,i)}}))};t.ArrowedPositioned=u,u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ArrowedPositioned",filename:"src/components/Positioner/ArrowedPositioner.tsx"}})},"./src/components/Positioner/Positioner.styles.ts":function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.getPositionerStyles=t.getPositionerVariables=void 0,"undefined"!==typeof PositionerVariables&&PositionerVariables&&PositionerVariables===Object(PositionerVariables)&&Object.isExtensible(PositionerVariables)&&Object.defineProperty(PositionerVariables,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PositionerVariables",filename:"src/components/Positioner/Positioner.styles.ts"}});var o=function(e){return{modalContainer:{alignItems:"center",display:"flex",height:"100%",justifyContent:"center",width:"100%"},positioner:{position:"absolute",zIndex:1}}};t.getPositionerVariables=o,o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getPositionerVariables",filename:"src/components/Positioner/Positioner.styles.ts"}}),"undefined"!==typeof PositionerStyles&&PositionerStyles&&PositionerStyles===Object(PositionerStyles)&&Object.isExtensible(PositionerStyles)&&Object.defineProperty(PositionerStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PositionerStyles",filename:"src/components/Positioner/Positioner.styles.ts"}}),"undefined"!==typeof GetPositionerStyles&&GetPositionerStyles&&GetPositionerStyles===Object(GetPositionerStyles)&&Object.isExtensible(GetPositionerStyles)&&Object.defineProperty(GetPositionerStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetPositionerStyles",filename:"src/components/Positioner/Positioner.styles.ts"}});var n=function(e){var t={modalContainer:{alignItems:"center",display:"flex",height:"100%",justifyContent:"center",width:"100%"},positioner:{position:"absolute",zIndex:1}};return{modalContainerStyle:t.modalContainer,positionerStyle:t.positioner}};t.getPositionerStyles=n,n&&n===Object(n)&&Object.isExtensible(n)&&Object.defineProperty(n,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getPositionerStyles",filename:"src/components/Positioner/Positioner.styles.ts"}})},"./src/components/Positioner/Positioner.tsx":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.Positioner=t.PositionerBase=t.getIsOverflowing=void 0;var i=r(o("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),s=r(o("./node_modules/@babel/runtime/helpers/classCallCheck.js")),a=r(o("./node_modules/@babel/runtime/helpers/createClass.js")),l=r(o("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),c=r(o("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),u=r(o("./node_modules/@babel/runtime/helpers/inherits.js")),m=r(o("./node_modules/@babel/runtime/helpers/objectSpread.js")),p=n(o("./node_modules/react/index.js")),d=o("./node_modules/react-native-web/dist/index.js"),f=o("./src/constants/index.ts"),b=o("./src/theme/index.ts"),O=o("./src/utils/mergeStyles.ts"),P=o("./src/components/Helpers/index.ts"),g=o("./src/components/Modal/index.ts"),y=o("./src/components/Overlay/index.ts"),v=o("./src/components/Positioner/Positioner.styles.ts");"undefined"!==typeof ContentProps&&ContentProps&&ContentProps===Object(ContentProps)&&Object.isExtensible(ContentProps)&&Object.defineProperty(ContentProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ContentProps",filename:"src/components/Positioner/Positioner.tsx"}}),"undefined"!==typeof PositionerProps&&PositionerProps&&PositionerProps===Object(PositionerProps)&&Object.isExtensible(PositionerProps)&&Object.defineProperty(PositionerProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PositionerProps",filename:"src/components/Positioner/Positioner.tsx"}});var h=function(e){return function(t){var o=t.shouldFlipBottomToTop,n=t.shouldFlipLeftToRight,r=t.shouldFlipRightToLeft,i=t.shouldFlipTopToBottom,s=e;return e.includes(f.POSITION.BOTTOM)&&o&&(s=s.replace(f.POSITION.BOTTOM,f.POSITION.TOP)),e.includes(f.POSITION.TOP)&&i&&(s=s.replace(f.POSITION.TOP,f.POSITION.BOTTOM)),e.includes(f.POSITION.LEFT)&&n&&(s=s.replace(f.POSITION.LEFT,f.POSITION.RIGHT)),e.includes(f.POSITION.RIGHT)&&r&&(s=s.replace(f.POSITION.RIGHT,f.POSITION.LEFT)),s}},T=function(e){var t=e.positionerMeasurements,o=e.screenLayout;e.position;return t.width>o.width-48};t.getIsOverflowing=T,"undefined"!==typeof T&&T&&T===Object(T)&&Object.isExtensible(T)&&Object.defineProperty(T,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getIsOverflowing",filename:"src/components/Positioner/Positioner.tsx"}}),"undefined"!==typeof PositionerState&&PositionerState&&PositionerState===Object(PositionerState)&&Object.isExtensible(PositionerState)&&Object.defineProperty(PositionerState,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PositionerState",filename:"src/components/Positioner/Positioner.tsx"}});var j={isDynamicContent:!1,isFullWidth:!1,position:f.POSITION.BOTTOM},x={height:0,pageX:0,pageY:0,width:0,x:0,y:0},_=function(e){function t(e){var o;(0,s.default)(this,t),(o=(0,l.default)(this,(0,c.default)(t).call(this,e))).hasOverflowedCounter=0;var n=e.isDynamicContent,r=void 0===n?j.isDynamicContent:n;return o.state={childrenMeasurements:x,isAdjustingContent:r,positionerMeasurements:x},o}return(0,u.default)(t,e),(0,a.default)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.isDynamicContent;(void 0===t?j.isDynamicContent:t)&&setTimeout(function(){e.setState({isAdjustingContent:!1})},700)}},{key:"render",value:function(){var e=this,t=this.props,o=t.theme,n=t.getStyles,r=t.children,s=t.content,a=t.parentHeight,l=t.isVisible,c=t.isFullWidth,u=void 0===c?j.isFullWidth:c,b=t.onClose,x=void 0===b?function(){return null}:b,_=t.position,S=void 0===_?j.position:_,w=t.targetMeasurements,I=this.state,E=I.positionerMeasurements,C=I.childrenMeasurements,B=I.isAdjustingContent,M=(0,O.mergeStyles)(v.getPositionerStyles,n)(o),A=M.positionerStyle,R=M.modalContainerStyle,V=d.Dimensions.get("window"),N=w||C,F=0!==E.width&&0!==E.height,L={offset:14,position:S,positionerMeasurements:E,screenLayout:(0,m.default)({},V,{height:a||V.height}),targetMeasurements:N},X=u?function(e){var t=e.screenLayout,o=e.position,n=e.targetMeasurements,r=e.positionerMeasurements,i=e.offset;switch(h(o)({shouldFlipBottomToTop:r.height+i>t.height-n.pageY+n.height-i,shouldFlipLeftToRight:!1,shouldFlipRightToLeft:!1,shouldFlipTopToBottom:r.height+i>n.pageY}).replace("-left","").replace("-right","")){case f.POSITION.TOP:return{position:f.POSITION.TOP,left:0,right:0,top:n.pageY-r.height-i};case f.POSITION.BOTTOM:return{position:f.POSITION.BOTTOM,left:0,right:0,top:n.pageY+n.height+i};default:return{position:f.POSITION.BOTTOM_RIGHT}}}(L):function(e){var t=e.screenLayout,o=e.position,n=e.targetMeasurements,r=e.positionerMeasurements,i=e.offset,s=h(o)({shouldFlipBottomToTop:r.height+i>t.height-n.pageY+n.height-i,shouldFlipLeftToRight:o===f.POSITION.LEFT?r.width+i+24>n.pageX-i:r.width+i>t.width-n.pageX,shouldFlipRightToLeft:o===f.POSITION.RIGHT?n.pageX+n.width+r.width+i>t.width-i:n.pageX<r.width+24,shouldFlipTopToBottom:r.height+i>n.pageY}),a=T({position:o,positionerMeasurements:r,screenLayout:t});switch(s){case f.POSITION.TOP_LEFT:return{position:f.POSITION.TOP_LEFT,left:n.pageX,marginRight:24,top:n.pageY-r.height-i};case f.POSITION.TOP:return{position:f.POSITION.TOP,left:n.pageX,top:n.pageY-r.height-i,transform:[{translateX:-r.width/2+n.width/2}]};case f.POSITION.TOP_RIGHT:return(0,m.default)({position:f.POSITION.TOP_RIGHT},a?{left:0,marginLeft:24,marginRight:t.width-n.pageX-n.width}:{left:n.pageX-r.width+n.width},{top:n.pageY-r.height-i});case f.POSITION.LEFT:return(0,m.default)({position:f.POSITION.LEFT},a?{left:0,marginLeft:24,marginRight:t.width-n.pageX+i}:{left:n.pageX-r.width-i},{top:n.pageY,transform:[{translateY:-r.height/2+n.height/2}]});case f.POSITION.RIGHT:return{position:f.POSITION.RIGHT,left:n.pageX+n.width+i,marginRight:24,top:n.pageY,transform:[{translateY:-r.height/2+n.height/2}]};case f.POSITION.BOTTOM_RIGHT:return{position:f.POSITION.BOTTOM_RIGHT,left:n.pageX-r.width+n.width,top:n.pageY+n.height+i};case f.POSITION.BOTTOM:return{position:f.POSITION.BOTTOM,left:n.pageX,top:n.pageY+n.height+i,transform:[{translateX:-r.width/2+n.width/2}]};case f.POSITION.BOTTOM_LEFT:return{position:f.POSITION.BOTTOM_LEFT,left:n.pageX,marginRight:24,top:n.pageY+n.height+i};default:return{position:f.POSITION.BOTTOM_RIGHT}}}(L),G=X.position,k=(0,i.default)(X,["position"]);return p.createElement(p.Fragment,null,w?r:p.createElement(P.ViewMeasure,{onMeasure:function(t){e.setState({childrenMeasurements:t})}},r),p.createElement(g.Modal,{visible:B||l,transparent:!0,onRequestClose:x,isBackgroundScrollable:!0},p.createElement(d.View,{style:R},p.createElement(P.ViewMeasure,{style:(0,m.default)({},A,k,{opacity:F&&!B?1:0}),onMeasure:function(t){var o=T({position:S,positionerMeasurements:E,screenLayout:V});0===e.hasOverflowedCounter?e.setState({positionerMeasurements:t}):o||e.setState({positionerMeasurements:t}),o&&e.hasOverflowedCounter++}},s({position:G,positionerMeasurements:E,targetMeasurements:N})),p.createElement(y.Overlay,{transparent:!0,onPress:x}))))}}]),t}(p.Component);t.PositionerBase=_,"undefined"!==typeof _&&_&&_===Object(_)&&Object.isExtensible(_)&&Object.defineProperty(_,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PositionerBase",filename:"src/components/Positioner/Positioner.tsx"}});var S=(0,b.withTheme)(_);t.Positioner=S,"undefined"!==typeof S&&S&&S===Object(S)&&Object.isExtensible(S)&&Object.defineProperty(S,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Positioner",filename:"src/components/Positioner/Positioner.tsx"}})},"./src/components/Positioner/getPositionerArrow.tsx":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.getFullWidthPositionerArrow=t.FullWidthBottomArrow=t.FullWidthTopArrow=t.getPositionerArrow=t.BottomLeftArrow=t.BottomArrow=t.BottomRightArrow=t.RightArrow=t.LeftArrow=t.TopRightArrow=t.TopArrow=t.TopLeftArrow=void 0;var i=r(o("./node_modules/@babel/runtime/helpers/objectSpread.js")),s=n(o("./node_modules/react/index.js")),a=o("./node_modules/react-native-web/dist/index.js"),l={borderColor:"transparent",borderWidth:11,height:0,position:"absolute",width:0},c=function(e){var t=e.theme,o=e.targetMeasurements;return s.createElement(s.Fragment,null,s.createElement(a.View,{style:(0,i.default)({},l,{borderTopColor:t.colors.border.default,bottom:0,left:o.width/2,marginBottom:-22,transform:[{translateX:-11}]})}),s.createElement(a.View,{style:(0,i.default)({},l,{borderTopColor:"white",bottom:0,left:o.width/2,marginBottom:-21,transform:[{translateX:-11}]})}))};t.TopLeftArrow=c,c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TopLeftArrow",filename:"src/components/Positioner/getPositionerArrow.tsx"}});var u=function(e){var t=e.theme;e.targetMeasurements;return s.createElement(s.Fragment,null,s.createElement(a.View,{style:(0,i.default)({},l,{borderTopColor:t.colors.border.default,bottom:0,left:"50%",marginBottom:-22,transform:[{translateX:-11}]})}),s.createElement(a.View,{style:(0,i.default)({},l,{borderTopColor:"white",bottom:0,left:"50%",marginBottom:-21,transform:[{translateX:-11}]})}))};t.TopArrow=u,u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TopArrow",filename:"src/components/Positioner/getPositionerArrow.tsx"}});var m=function(e){var t=e.theme,o=e.targetMeasurements;return s.createElement(s.Fragment,null,s.createElement(a.View,{style:(0,i.default)({},l,{borderTopColor:t.colors.border.default,bottom:0,marginBottom:-22,right:o.width/2,transform:[{translateX:11}]})}),s.createElement(a.View,{style:(0,i.default)({},l,{borderTopColor:"white",bottom:0,marginBottom:-21,right:o.width/2,transform:[{translateX:11}]})}))};t.TopRightArrow=m,m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TopRightArrow",filename:"src/components/Positioner/getPositionerArrow.tsx"}});var p=function(e){var t=e.theme;e.targetMeasurements;return s.createElement(s.Fragment,null,s.createElement(a.View,{style:(0,i.default)({},l,{borderLeftColor:t.colors.border.default,marginRight:-22,right:0,top:"50%",transform:[{translateY:-10}]})}),s.createElement(a.View,{style:(0,i.default)({},l,{borderLeftColor:"white",marginRight:-21,right:0,top:"50%",transform:[{translateY:-10}]})}))};t.LeftArrow=p,p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"LeftArrow",filename:"src/components/Positioner/getPositionerArrow.tsx"}});var d=function(e){var t=e.theme;e.targetMeasurements;return s.createElement(s.Fragment,null,s.createElement(a.View,{style:(0,i.default)({},l,{borderRightColor:t.colors.border.default,left:0,marginLeft:-22,top:"50%",transform:[{translateY:-10}]})}),s.createElement(a.View,{style:(0,i.default)({},l,{borderRightColor:"white",left:0,marginLeft:-21,top:"50%",transform:[{translateY:-10}]})}))};t.RightArrow=d,d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"RightArrow",filename:"src/components/Positioner/getPositionerArrow.tsx"}});var f=function(e){var t=e.theme,o=e.targetMeasurements;return s.createElement(s.Fragment,null,s.createElement(a.View,{style:(0,i.default)({},l,{borderBottomColor:t.colors.border.default,marginTop:-22,right:o.width/2,top:0,transform:[{translateX:11}]})}),s.createElement(a.View,{style:(0,i.default)({},l,{borderBottomColor:"white",marginTop:-21,right:o.width/2,top:0,transform:[{translateX:11}]})}))};t.BottomRightArrow=f,f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BottomRightArrow",filename:"src/components/Positioner/getPositionerArrow.tsx"}});var b=function(e){var t=e.theme;e.targetMeasurements;return s.createElement(s.Fragment,null,s.createElement(a.View,{style:(0,i.default)({},l,{borderBottomColor:t.colors.border.default,marginTop:-22,right:"50%",top:0,transform:[{translateX:11}]})}),s.createElement(a.View,{style:(0,i.default)({},l,{borderBottomColor:"white",marginTop:-21,right:"50%",top:0,transform:[{translateX:11}]})}))};t.BottomArrow=b,b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BottomArrow",filename:"src/components/Positioner/getPositionerArrow.tsx"}});var O=function(e){var t=e.theme,o=e.targetMeasurements;return s.createElement(s.Fragment,null,s.createElement(a.View,{style:(0,i.default)({},l,{borderBottomColor:t.colors.border.default,left:o.width/2,marginTop:-22,top:0,transform:[{translateX:-11}]})}),s.createElement(a.View,{style:(0,i.default)({},l,{borderBottomColor:"white",left:o.width/2,marginTop:-21,top:0,transform:[{translateX:-11}]})}))};t.BottomLeftArrow=O,O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BottomLeftArrow",filename:"src/components/Positioner/getPositionerArrow.tsx"}});var P=function(e){var t=e.position,o=e.targetMeasurements,n=e.theme;switch(t){case"top-left":return s.createElement(c,{theme:n,targetMeasurements:o});case"top":return s.createElement(u,{theme:n,targetMeasurements:o});case"top-right":return s.createElement(m,{theme:n,targetMeasurements:o});case"left":return s.createElement(p,{theme:n,targetMeasurements:o});case"right":return s.createElement(d,{theme:n,targetMeasurements:o});case"bottom-right":return s.createElement(f,{theme:n,targetMeasurements:o});case"bottom":return s.createElement(b,{theme:n,targetMeasurements:o});case"bottom-left":return s.createElement(O,{theme:n,targetMeasurements:o});default:return s.createElement(a.View,null)}};t.getPositionerArrow=P,P&&P===Object(P)&&Object.isExtensible(P)&&Object.defineProperty(P,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getPositionerArrow",filename:"src/components/Positioner/getPositionerArrow.tsx"}});var g=function(e){var t=e.theme,o=e.targetMeasurements;return s.createElement(s.Fragment,null,s.createElement(a.View,{style:(0,i.default)({},l,{borderTopColor:t.colors.border.default,bottom:0,left:o.pageX+o.width/2,marginBottom:-22,transform:[{translateX:-11}]})}),s.createElement(a.View,{style:(0,i.default)({},l,{borderTopColor:"white",bottom:0,left:o.pageX+o.width/2,marginBottom:-21,transform:[{translateX:-11}]})}))};t.FullWidthTopArrow=g,g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FullWidthTopArrow",filename:"src/components/Positioner/getPositionerArrow.tsx"}});var y=function(e){var t=e.theme,o=e.targetMeasurements;return s.createElement(s.Fragment,null,s.createElement(a.View,{style:(0,i.default)({},l,{borderBottomColor:t.colors.border.default,left:o.pageX+o.width/2,marginTop:-22,top:0,transform:[{translateX:-11}]})}),s.createElement(a.View,{style:(0,i.default)({},l,{borderBottomColor:"white",left:o.pageX+o.width/2,marginTop:-21,top:0,transform:[{translateX:-11}]})}))};t.FullWidthBottomArrow=y,y&&y===Object(y)&&Object.isExtensible(y)&&Object.defineProperty(y,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FullWidthBottomArrow",filename:"src/components/Positioner/getPositionerArrow.tsx"}});var v=function(e){var t=e.position,o=e.targetMeasurements,n=e.theme;switch(t){case"top":return s.createElement(g,{theme:n,targetMeasurements:o});case"bottom":return s.createElement(y,{theme:n,targetMeasurements:o});default:return s.createElement(a.View,null)}};t.getFullWidthPositionerArrow=v,v&&v===Object(v)&&Object.isExtensible(v)&&Object.defineProperty(v,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getFullWidthPositionerArrow",filename:"src/components/Positioner/getPositionerArrow.tsx"}})},"./src/components/Positioner/index.ts":function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0});var n=o("./src/components/Positioner/Positioner.tsx");Object.keys(n).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})});var r=o("./src/components/Positioner/ArrowedPositioner.tsx");Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})})},"./src/constants/Intent.ts":function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.INTENT=void 0,"undefined"!==typeof Intents&&Intents&&Intents===Object(Intents)&&Object.isExtensible(Intents)&&Object.defineProperty(Intents,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Intents",filename:"src/constants/Intent.ts"}}),"undefined"!==typeof Intent&&Intent&&Intent===Object(Intent)&&Object.isExtensible(Intent)&&Object.defineProperty(Intent,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Intent",filename:"src/constants/Intent.ts"}});var o={danger:"danger",info:"info",success:"success",warning:"warning"};t.INTENT=o,"undefined"!==typeof o&&o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"INTENT",filename:"src/constants/Intent.ts"}})},"./src/constants/Position.ts":function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.POSITION=void 0,"undefined"!==typeof PositionInterface&&PositionInterface&&PositionInterface===Object(PositionInterface)&&Object.isExtensible(PositionInterface)&&Object.defineProperty(PositionInterface,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PositionInterface",filename:"src/constants/Position.ts"}});var o={TOP:"top",TOP_LEFT:"top-left",TOP_RIGHT:"top-right",BOTTOM:"bottom",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",LEFT:"left",RIGHT:"right"};t.POSITION=o,"undefined"!==typeof o&&o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"POSITION",filename:"src/constants/Position.ts"}}),"undefined"!==typeof Position&&Position&&Position===Object(Position)&&Object.isExtensible(Position)&&Object.defineProperty(Position,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Position",filename:"src/constants/Position.ts"}})},"./src/constants/StackingOrder.ts":function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={FOCUSED:2,STACKING_CONTEXT:5,POSITIONER:10,OVERLAY:20,TOASTER:30},"undefined"!==typeof TOASTER&&TOASTER&&TOASTER===Object(TOASTER)&&Object.isExtensible(TOASTER)&&Object.defineProperty(TOASTER,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TOASTER",filename:"src/constants/StackingOrder.ts"}}),"undefined"!==typeof OVERLAY&&OVERLAY&&OVERLAY===Object(OVERLAY)&&Object.isExtensible(OVERLAY)&&Object.defineProperty(OVERLAY,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"OVERLAY",filename:"src/constants/StackingOrder.ts"}}),"undefined"!==typeof POSITIONER&&POSITIONER&&POSITIONER===Object(POSITIONER)&&Object.isExtensible(POSITIONER)&&Object.defineProperty(POSITIONER,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"POSITIONER",filename:"src/constants/StackingOrder.ts"}}),"undefined"!==typeof STACKING_CONTEXT&&STACKING_CONTEXT&&STACKING_CONTEXT===Object(STACKING_CONTEXT)&&Object.isExtensible(STACKING_CONTEXT)&&Object.defineProperty(STACKING_CONTEXT,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"STACKING_CONTEXT",filename:"src/constants/StackingOrder.ts"}}),"undefined"!==typeof FOCUSED&&FOCUSED&&FOCUSED===Object(FOCUSED)&&Object.isExtensible(FOCUSED)&&Object.defineProperty(FOCUSED,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FOCUSED",filename:"src/constants/StackingOrder.ts"}})},"./src/constants/index.ts":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0});var r={StackingOrder:!0,Intent:!0,Intents:!0};Object.defineProperty(t,"StackingOrder",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"Intent",{enumerable:!0,get:function(){return s.Intent}}),Object.defineProperty(t,"Intents",{enumerable:!0,get:function(){return s.Intents}});var i=n(o("./src/constants/StackingOrder.ts")),s=o("./src/constants/Intent.ts"),a=o("./src/constants/Position.ts");Object.keys(a).forEach(function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(r,e)||Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}}))}),"undefined"!==typeof StackingOrder&&StackingOrder&&StackingOrder===Object(StackingOrder)&&Object.isExtensible(StackingOrder)&&Object.defineProperty(StackingOrder,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"StackingOrder",filename:"src/constants/index.ts"}}),"undefined"!==typeof Intents&&Intents&&Intents===Object(Intents)&&Object.isExtensible(Intents)&&Object.defineProperty(Intents,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Intents",filename:"src/constants/index.ts"}}),"undefined"!==typeof Intent&&Intent&&Intent===Object(Intent)&&Object.isExtensible(Intent)&&Object.defineProperty(Intent,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Intent",filename:"src/constants/index.ts"}})}}]);
//# sourceMappingURL=8.884c5daed04d06b9e7af.js.map