(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"./src/components/Box/Box.tsx":function(e,t,o){"use strict";o.d(t,"a",function(){return l});var n=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=o("./node_modules/react/index.js"),s=o("./node_modules/react-native-web/dist/exports/View/index.js"),i=o("./src/theme/Theme.tsx");"undefined"!==typeof BoxProps&&BoxProps&&BoxProps===Object(BoxProps)&&Object.isExtensible(BoxProps)&&Object.defineProperty(BoxProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxProps",filename:"src/components/Box/Box.tsx"}});var a={backgroundColor:function(e,t){return t.colors.background[e]?{backgroundColor:t.colors.background[e]}:{backgroundColor:e}},elevation:function(e,t){return t.elevations[e]},shape:function(e,t){return t.containerShapes[e]}},l=function(e){var t=e.children,o=e.testID,l=Object(n.a)(e,["children","testID"]),c=Object(i.a)(),u=[],p={};for(var m in l)if(m){var b=a[m];if(b){var d=b(l[m],c);u.push(d)}else p[m]=l[m]}return r.createElement(s.a,{testID:o,style:[p,u],__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Box/Box.tsx",lineNumber:53}},t)};"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Box",filename:"src/components/Box/Box.tsx"}})},"./src/components/Helpers/Toggle.tsx":function(e,t,o){"use strict";o.d(t,"a",function(){return i});var n=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),r=o("./node_modules/react/index.js"),s=o.n(r);"undefined"!==typeof ToggleRenderProps&&ToggleRenderProps&&ToggleRenderProps===Object(ToggleRenderProps)&&Object.isExtensible(ToggleRenderProps)&&Object.defineProperty(ToggleRenderProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ToggleRenderProps",filename:"src/components/Helpers/Toggle.tsx"}}),"undefined"!==typeof ToggleProps&&ToggleProps&&ToggleProps===Object(ToggleProps)&&Object.isExtensible(ToggleProps)&&Object.defineProperty(ToggleProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ToggleProps",filename:"src/components/Helpers/Toggle.tsx"}});var i=function(e){var t=e.children,o=e.initial,r=void 0!==o&&o,i=s.a.useState(r),a=Object(n.a)(i,2),l=a[0],c=a[1],u=s.a.useCallback(function(){c(!l)},[l]),p=s.a.useCallback(function(e){c(e)},[]);return t({on:l,toggle:u,set:p})};"undefined"!==typeof i&&i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Toggle",filename:"src/components/Helpers/Toggle.tsx"}})},"./src/components/Helpers/ViewMeasure.tsx":function(e,t,o){"use strict";var n=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),r=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),s=o("./node_modules/react/index.js"),i=o("./node_modules/react-native-web/dist/exports/View/index.js"),a=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),l=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),c=o("./node_modules/react-native-web/dist/exports/Dimensions/index.js"),u=o("./node_modules/react-native-web/dist/exports/findNodeHandle/index.js"),p=o("./node_modules/react-native-web/dist/exports/Platform/index.js"),m=o("./node_modules/react-native-web/dist/exports/UIManager/index.js");"undefined"!==typeof Measurements&&Measurements&&Measurements===Object(Measurements)&&Object.isExtensible(Measurements)&&Object.defineProperty(Measurements,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Measurements",filename:"src/hooks/useMeasure.ts"}}),"undefined"!==typeof UseMeasureProps&&UseMeasureProps&&UseMeasureProps===Object(UseMeasureProps)&&Object.isExtensible(UseMeasureProps)&&Object.defineProperty(UseMeasureProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"UseMeasureProps",filename:"src/hooks/useMeasure.ts"}});var b={height:0,pageX:0,pageY:0,width:0,x:0,y:0};"undefined"!==typeof b&&b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"initialMeasurements",filename:"src/hooks/useMeasure.ts"}});var d=function(e){return"web"===p.a.OS?e+window.scrollY:e},f=function(e){var t=e.onMeasure,o=e.ref,n=s.useState(b),r=Object(l.a)(n,2),i=r[0],p=r[1],f=s.useCallback(function(e){var n=Object(u.a)(o.current),r=i;n&&m.a.measure(n,function(o,n,s,i,l,c){var u=Object(a.a)({},r,e,{pageX:l,pageY:d(c)});p(u),t&&t(u)})},[i]),P=s.useCallback(function(e){var t=e.nativeEvent.layout;f(t)},[f,i]),j=s.useCallback(function(){f()},[f,i]);return s.useEffect(function(){return c.a.addEventListener("change",j),function(){return c.a.removeEventListener("change",j)}},[i]),{measurements:i,onLayout:P,onMeasure:f}};f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useMeasure",filename:"src/hooks/useMeasure.ts"}}),o.d(t,"a",function(){return P});"undefined"!==typeof ViewMeasureRenderProp&&ViewMeasureRenderProp&&ViewMeasureRenderProp===Object(ViewMeasureRenderProp)&&Object.isExtensible(ViewMeasureRenderProp)&&Object.defineProperty(ViewMeasureRenderProp,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ViewMeasureRenderProp",filename:"src/components/Helpers/ViewMeasure.tsx"}}),"undefined"!==typeof ViewMeasureProps&&ViewMeasureProps&&ViewMeasureProps===Object(ViewMeasureProps)&&Object.isExtensible(ViewMeasureProps)&&Object.defineProperty(ViewMeasureProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ViewMeasureProps",filename:"src/components/Helpers/ViewMeasure.tsx"}});var P=function(e){var t=e.onMeasure,o=e.children,a=Object(r.a)(e,["onMeasure","children"]),l="function"===typeof o,c=s.useRef(null),u=f({onMeasure:t,ref:c}),p=u.measurements,m=u.onLayout;return s.createElement(i.a,Object(n.a)({ref:c,onLayout:m,children:l?o(p):o},a,{__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Helpers/ViewMeasure.tsx",lineNumber:24}}))};"undefined"!==typeof P&&P&&P===Object(P)&&Object.isExtensible(P)&&Object.defineProperty(P,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ViewMeasure",filename:"src/components/Helpers/ViewMeasure.tsx"}})},"./src/components/Popover/Popover.mdx":function(e,t,o){"use strict";o.r(t),o.d(t,"default",function(){return f});var n=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),s=(o("./node_modules/react/index.js"),o("./node_modules/@mdx-js/react/dist/index.es.js")),i=o("./node_modules/docz/dist/index.esm.js"),a=o("./src/components/Box/Box.tsx"),l=o("./src/components/Button/Button.tsx"),c=o("./src/components/Popover/Popover.tsx"),u=o("./src/components/Helpers/Toggle.tsx"),p=o("./src/components/Typography/Text.tsx"),m="/home/travis/build/WeTrustPlatform/paramount/src/components/Popover/Popover.mdx",b={},d="wrapper";function f(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(s.b)(d,Object(r.a)({},b,o,{components:t,mdxType:"MDXLayout",__source:{fileName:m,lineNumber:21}}),Object(s.b)("h1",Object(r.a)({id:"popover"},{__source:{fileName:m,lineNumber:24}}),"Popover"),Object(s.b)("p",{__source:{fileName:m,lineNumber:27}},"Composes ",Object(s.b)("inlineCode",{parentName:"p",__source:{fileName:m,lineNumber:27}},"Positioner")),Object(s.b)("h3",Object(r.a)({id:"usage"},{__source:{fileName:m,lineNumber:28}}),"Usage"),Object(s.b)(i.c,{__position:0,__code:'<Box height={250}>\n  <Toggle>\n    {({ on, toggle }) => (\n      <Popover\n        isVisible={on}\n        position="bottom"\n        content={\n          <Box width={200} height={200}>\n            <Text>\n              Due to variety and complexity involved in detecting touch\n              outside of the component on the web and in native, managing its\n              open and closed state is in your control\n            </Text>\n            <Button\n              appearance="outline"\n              color="danger"\n              onPress={toggle}\n              title="Close popover"\n            />\n          </Box>\n        }\n      >\n        <Button onPress={toggle} title="Open popover" />\n      </Popover>\n    )}\n  </Toggle>\n</Box>',__scope:{props:this?this.props:o,Playground:i.c,Props:i.d,Box:a.a,Button:l.a,Popover:c.a,Toggle:u.a,Text:p.a},mdxType:"Playground",__source:{fileName:m,lineNumber:31}},Object(s.b)(a.a,{height:250,mdxType:"Box",__source:{fileName:m,lineNumber:41}},Object(s.b)(u.a,{mdxType:"Toggle",__source:{fileName:m,lineNumber:42}},function(e){var t=e.on,o=e.toggle;return Object(s.b)(c.a,{isVisible:t,position:"bottom",content:Object(s.b)(a.a,{width:200,height:200,mdxType:"Box",__source:{fileName:m,lineNumber:46}},Object(s.b)(p.a,{mdxType:"Text",__source:{fileName:m,lineNumber:47}},"Due to variety and complexity involved in detecting touch outside of the component on the web and in native, managing its open and closed state is in your control"),Object(s.b)(l.a,{appearance:"outline",color:"danger",onPress:o,title:"Close popover",mdxType:"Button",__source:{fileName:m,lineNumber:52}})),mdxType:"Popover",__source:{fileName:m,lineNumber:46}},Object(s.b)(l.a,{onPress:o,title:"Open popover",mdxType:"Button",__source:{fileName:m,lineNumber:54}}))}))),Object(s.b)("h3",Object(r.a)({id:"props"},{__source:{fileName:m,lineNumber:59}}),"Props"),Object(s.b)(i.d,{of:c.a,mdxType:"Props",__source:{fileName:m,lineNumber:62}}),Object(s.b)("h3",Object(r.a)({id:"customization"},{__source:{fileName:m,lineNumber:63}}),"Customization"),Object(s.b)("p",{__source:{fileName:m,lineNumber:66}},"Using ",Object(s.b)("inlineCode",{parentName:"p",__source:{fileName:m,lineNumber:66}},"getStyles")," prop"),Object(s.b)("pre",{__source:{fileName:m,lineNumber:67}},Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"},{__source:{fileName:m,lineNumber:67}}),"PopoverStyles {\n  popoverStyle: ViewStyle;\n  positionerStyle: ViewStyle;\n  containerStyle: ViewStyle;\n}\n\ngetStyles={(PopoverProps, Theme) => PopoverStyles}\n")),Object(s.b)("p",{__source:{fileName:m,lineNumber:77}},"Markup"),Object(s.b)("pre",{__source:{fileName:m,lineNumber:78}},Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"},{__source:{fileName:m,lineNumber:78}}),"<>\n  <View positionerStyle>\n    <View popoverStyle>{content}</View>\n  </View>\n  <View containerStyle>{children}</View>\n</>\n")))}f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Popover/Popover.mdx"}}),f.isMDXComponent=!0},"./src/components/Popover/Popover.tsx":function(e,t,o){"use strict";var n=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),r=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),s=o("./node_modules/react/index.js"),i=o("./node_modules/react-native-web/dist/exports/View/index.js"),a=o("./src/theme/Theme.tsx"),l=o("./src/utils/mergeStyles.ts"),c=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),u=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");"undefined"!==typeof PositionInterface&&PositionInterface&&PositionInterface===Object(PositionInterface)&&Object.isExtensible(PositionInterface)&&Object.defineProperty(PositionInterface,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PositionInterface",filename:"src/constants/Position.ts"}});var p={TOP:"top",TOP_LEFT:"top-left",TOP_RIGHT:"top-right",BOTTOM:"bottom",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",LEFT:"left",RIGHT:"right"};"undefined"!==typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"POSITION",filename:"src/constants/Position.ts"}}),"undefined"!==typeof Position&&Position&&Position===Object(Position)&&Object.isExtensible(Position)&&Object.defineProperty(Position,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Position",filename:"src/constants/Position.ts"}});var m=o("./src/components/Helpers/ViewMeasure.tsx");"undefined"!==typeof PositionerStyles&&PositionerStyles&&PositionerStyles===Object(PositionerStyles)&&Object.isExtensible(PositionerStyles)&&Object.defineProperty(PositionerStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PositionerStyles",filename:"src/components/Positioner/Positioner.styles.ts"}}),"undefined"!==typeof PositionerStyleProps&&PositionerStyleProps&&PositionerStyleProps===Object(PositionerStyleProps)&&Object.isExtensible(PositionerStyleProps)&&Object.defineProperty(PositionerStyleProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PositionerStyleProps",filename:"src/components/Positioner/Positioner.styles.ts"}}),"undefined"!==typeof GetPositionerStyles&&GetPositionerStyles&&GetPositionerStyles===Object(GetPositionerStyles)&&Object.isExtensible(GetPositionerStyles)&&Object.defineProperty(GetPositionerStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetPositionerStyles",filename:"src/components/Positioner/Positioner.styles.ts"}});var b=function(e,t){return{containerStyle:{},positionerStyle:{opacity:e.isPositionerMeasurementsMeasured?1:0,position:"absolute",zIndex:1}}};b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getPositionerStyles",filename:"src/components/Positioner/Positioner.styles.ts"}});var d="/home/travis/build/WeTrustPlatform/paramount/src/components/Positioner/Positioner.tsx";"undefined"!==typeof PositionerProps&&PositionerProps&&PositionerProps===Object(PositionerProps)&&Object.isExtensible(PositionerProps)&&Object.defineProperty(PositionerProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PositionerProps",filename:"src/components/Positioner/Positioner.tsx"}});var f={height:0,pageX:0,pageY:0,width:0,x:0,y:0},P=function(e){var t=e.getStyles,o=e.children,n=e.content,r=e.isVisible,i=e.position,P=void 0===i?p.BOTTOM:i,j=s.useState(f),_=Object(u.a)(j,2),g=_[0],O=_[1],y=s.useState(f),v=Object(u.a)(y,2),x=v[0],h=v[1],T=Object(a.a)(),S=!(!x.width&&!x.height),M=Object(l.a)(b,t,T.components.getPositionerStyles)({isPositionerMeasurementsMeasured:S},T),N=M.positionerStyle,w=M.containerStyle,E=function(e){var t=e.position,o=e.targetMeasurements,n=e.positionerMeasurements;switch(t){case p.TOP_LEFT:return{left:0,top:-n.height-14};case p.TOP:return{left:o.width/2,top:-n.height-14,transform:[{translateX:-n.width/2}]};case p.TOP_RIGHT:return{right:0,top:-n.height-14};case p.LEFT:return{left:0-n.width-14,top:-n.height/2+o.height/2};case p.RIGHT:return{right:0-n.width-14,top:-n.height/2+o.height/2};case p.BOTTOM_RIGHT:return{right:0,top:o.height+14};case p.BOTTOM:return{left:o.width/2,top:o.height+14,transform:[{translateX:-n.width/2}]};case p.BOTTOM_LEFT:return{left:0,top:o.height+14};default:return{}}}({position:P,positionerMeasurements:x,targetMeasurements:g});return s.createElement(s.Fragment,null,r&&s.createElement(m.a,{style:Object(c.a)({},E,N),onMeasure:h,__source:{fileName:d,lineNumber:155}},n),s.createElement(m.a,{style:w,onMeasure:O,__source:{fileName:d,lineNumber:165}},o))};P&&P===Object(P)&&Object.isExtensible(P)&&Object.defineProperty(P,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Positioner",filename:"src/components/Positioner/Positioner.tsx"}}),"undefined"!==typeof PopoverStyles&&PopoverStyles&&PopoverStyles===Object(PopoverStyles)&&Object.isExtensible(PopoverStyles)&&Object.defineProperty(PopoverStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PopoverStyles",filename:"src/components/Popover/Popover.styles.ts"}}),"undefined"!==typeof GetPopoverStyles&&GetPopoverStyles&&GetPopoverStyles===Object(GetPopoverStyles)&&Object.isExtensible(GetPopoverStyles)&&Object.defineProperty(GetPopoverStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetPopoverStyles",filename:"src/components/Popover/Popover.styles.ts"}});var j=function(e,t){return Object(c.a)({popoverStyle:Object(c.a)({backgroundColor:t.colors.background.content,padding:16},t.elevations[2])},b(e))};j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getPopoverStyles",filename:"src/components/Popover/Popover.styles.ts"}}),o.d(t,"a",function(){return g});var _="/home/travis/build/WeTrustPlatform/paramount/src/components/Popover/Popover.tsx";"undefined"!==typeof PopoverProps&&PopoverProps&&PopoverProps===Object(PopoverProps)&&Object.isExtensible(PopoverProps)&&Object.defineProperty(PopoverProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PopoverProps",filename:"src/components/Popover/Popover.tsx"}});var g=function(e){var t=e.content,o=e.getStyles,c=Object(r.a)(e,["content","getStyles"]),u=Object(a.a)(),p=Object(l.a)(j,o,u.components.getPopoverStyles)({isPositionerMeasurementsMeasured:!1},u).popoverStyle;return s.createElement(P,Object(n.a)({},c,{getStyles:o,content:s.createElement(i.a,{style:p,__source:{fileName:_,lineNumber:32}},t),__source:{fileName:_,lineNumber:29}}))};"undefined"!==typeof g&&g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Popover",filename:"src/components/Popover/Popover.tsx"}})}}]);
//# sourceMappingURL=29.d316ff61f2c312be217d.js.map