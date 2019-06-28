(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"./src/components/Helpers/ViewMeasure.tsx":function(e,t,r){"use strict";var n=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),i=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=r("./node_modules/react/index.js"),l=r("./node_modules/react-native-web/dist/exports/View/index.js"),o=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),s=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),u=r("./node_modules/react-native-web/dist/exports/Dimensions/index.js"),c=r("./node_modules/react-native-web/dist/exports/findNodeHandle/index.js"),d=r("./node_modules/react-native-web/dist/exports/Platform/index.js"),m=r("./node_modules/react-native-web/dist/exports/UIManager/index.js");"undefined"!==typeof Measurements&&Measurements&&Measurements===Object(Measurements)&&Object.isExtensible(Measurements)&&Object.defineProperty(Measurements,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Measurements",filename:"src/hooks/useMeasure.ts"}}),"undefined"!==typeof UseMeasureProps&&UseMeasureProps&&UseMeasureProps===Object(UseMeasureProps)&&Object.isExtensible(UseMeasureProps)&&Object.defineProperty(UseMeasureProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"UseMeasureProps",filename:"src/hooks/useMeasure.ts"}});var b={height:0,pageX:0,pageY:0,width:0,x:0,y:0};"undefined"!==typeof b&&b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"initialMeasurements",filename:"src/hooks/useMeasure.ts"}});var f=function(e){return"web"===d.a.OS?e+window.scrollY:e},p=function(e){var t=e.onMeasure,r=e.ref,n=a.useState(b),i=Object(s.a)(n,2),l=i[0],d=i[1],p=a.useCallback(function(e){var n=Object(c.a)(r.current),i=l;n&&m.a.measure(n,function(r,n,a,l,s,u){var c=Object(o.a)({},i,e,{pageX:s,pageY:f(u)});d(c),t&&t(c)})},[l]),g=a.useCallback(function(e){var t=e.nativeEvent.layout;p(t)},[p,l]),h=a.useCallback(function(){p()},[p,l]);return a.useEffect(function(){return u.a.addEventListener("change",h),function(){return u.a.removeEventListener("change",h)}},[l]),{measurements:l,onLayout:g,onMeasure:p}};p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useMeasure",filename:"src/hooks/useMeasure.ts"}}),r.d(t,"a",function(){return g});"undefined"!==typeof ViewMeasureRenderProp&&ViewMeasureRenderProp&&ViewMeasureRenderProp===Object(ViewMeasureRenderProp)&&Object.isExtensible(ViewMeasureRenderProp)&&Object.defineProperty(ViewMeasureRenderProp,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ViewMeasureRenderProp",filename:"src/components/Helpers/ViewMeasure.tsx"}}),"undefined"!==typeof ViewMeasureProps&&ViewMeasureProps&&ViewMeasureProps===Object(ViewMeasureProps)&&Object.isExtensible(ViewMeasureProps)&&Object.defineProperty(ViewMeasureProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ViewMeasureProps",filename:"src/components/Helpers/ViewMeasure.tsx"}});var g=function(e){var t=e.onMeasure,r=e.children,o=Object(i.a)(e,["onMeasure","children"]),s="function"===typeof r,u=a.useRef(null),c=p({onMeasure:t,ref:u}),d=c.measurements,m=c.onLayout;return a.createElement(l.a,Object(n.a)({ref:u,onLayout:m,children:s?r(d):r},o,{__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Helpers/ViewMeasure.tsx",lineNumber:24}}))};"undefined"!==typeof g&&g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ViewMeasure",filename:"src/components/Helpers/ViewMeasure.tsx"}})},"./src/components/Slider/Slider.mdx":function(e,t,r){"use strict";r.r(t),r.d(t,"default",function(){return d});var n=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),a=(r("./node_modules/react/index.js"),r("./node_modules/@mdx-js/react/dist/index.es.js")),l=r("./node_modules/docz/dist/index.esm.js"),o=r("./src/components/Slider/Slider.tsx"),s="/home/travis/build/WeTrustPlatform/paramount/src/components/Slider/Slider.mdx",u={},c="wrapper";function d(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(a.b)(c,Object(i.a)({},u,r,{components:t,mdxType:"MDXLayout",__source:{fileName:s,lineNumber:21}}),Object(a.b)("h1",Object(i.a)({id:"slider"},{__source:{fileName:s,lineNumber:24}}),"Slider"),Object(a.b)("h2",Object(i.a)({id:"usage"},{__source:{fileName:s,lineNumber:27}}),"Usage"),Object(a.b)(l.c,{__position:0,__code:"<Slider\n  size=\"small\"\n  value={0.3}\n  onValueChange={value => console.log('onValueChange', value)}\n  onSlidingComplete={value => console.log('onSlidingComplete', value)}\n  onSlidingStart={value => console.log('onSlidingStart', value)}\n/>",__scope:{props:this?this.props:r,Playground:l.c,Props:l.d,Slider:o.a},mdxType:"Playground",__source:{fileName:s,lineNumber:30}},Object(a.b)(o.a,{size:"small",value:.3,onValueChange:function(e){return console.log("onValueChange",e)},onSlidingComplete:function(e){return console.log("onSlidingComplete",e)},onSlidingStart:function(e){return console.log("onSlidingStart",e)},mdxType:"Slider",__source:{fileName:s,lineNumber:36}})),Object(a.b)("h3",Object(i.a)({id:"with-range"},{__source:{fileName:s,lineNumber:38}}),"With Range"),Object(a.b)("p",{__source:{fileName:s,lineNumber:41}},"By using ",Object(a.b)("inlineCode",{parentName:"p",__source:{fileName:s,lineNumber:41}},"value")," as an array of ",Object(a.b)("inlineCode",{parentName:"p",__source:{fileName:s,lineNumber:41}},"[number, number]"),", it will automatically transform into a range slider. The minimum range is the value of the step"),Object(a.b)(l.c,{__position:1,__code:"<Slider\n  value={[30, 60]}\n  step={5}\n  minimumValue={0}\n  maximumValue={100}\n  onValueChange={value => console.log('onValueChange', value)}\n  onSlidingComplete={value => console.log('onSlidingComplete', value)}\n  onSlidingStart={value => console.log('onSlidingStart', value)}\n/>",__scope:{props:this?this.props:r,Playground:l.c,Props:l.d,Slider:o.a},mdxType:"Playground",__source:{fileName:s,lineNumber:42}},Object(a.b)(o.a,{value:[30,60],step:5,minimumValue:0,maximumValue:100,onValueChange:function(e){return console.log("onValueChange",e)},onSlidingComplete:function(e){return console.log("onSlidingComplete",e)},onSlidingStart:function(e){return console.log("onSlidingStart",e)},mdxType:"Slider",__source:{fileName:s,lineNumber:48}})),Object(a.b)("h2",Object(i.a)({id:"props"},{__source:{fileName:s,lineNumber:50}}),"Props"),Object(a.b)(l.d,{of:o.a,mdxType:"Props",__source:{fileName:s,lineNumber:53}}),Object(a.b)("h2",Object(i.a)({id:"customization"},{__source:{fileName:s,lineNumber:54}}),"Customization"),Object(a.b)("p",{__source:{fileName:s,lineNumber:57}},"Using ",Object(a.b)("inlineCode",{parentName:"p",__source:{fileName:s,lineNumber:57}},"getStyles")," prop"),Object(a.b)("pre",{__source:{fileName:s,lineNumber:58}},Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-tsx"},{__source:{fileName:s,lineNumber:58}}),"SliderStyles {\n  containerStyle: ViewStyle; // { height: thumbSize }\n  selectedTrackStyle: ViewStyle;\n  thumbStyle: ViewStyle; // { height: thumbSize, width: thumbSize }\n  unselectedTrackStyle: ViewStyle;\n}\n\ngetStyles={(SliderProps, Theme) => SliderStyles}\n")),Object(a.b)("p",{__source:{fileName:s,lineNumber:69}},"Markup"),Object(a.b)("pre",{__source:{fileName:s,lineNumber:70}},Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-tsx"},{__source:{fileName:s,lineNumber:70}}),"<View containerStyle>\n  <View unselectedTrackStyle />\n  <View selectedTrackStyle />\n  <View thumbStyle />\n  <View thumbStyle />\n</View>\n")))}d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Slider/Slider.mdx"}}),d.isMDXComponent=!0},"./src/components/Slider/Slider.tsx":function(e,t,r){"use strict";var n=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),i=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),a=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),l=r("./node_modules/react/index.js"),o=r("./node_modules/react-native-web/dist/exports/PanResponder/index.js"),s=r("./node_modules/react-native-web/dist/exports/View/index.js"),u=function(e){var t=l.useRef(e);return l.useEffect(function(){t.current=e},[e]),t.current};u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"usePrevious",filename:"src/hooks/usePrevious.ts"}});var c=r("./src/theme/Theme.tsx"),d=r("./src/utils/mergeStyles.ts"),m=r("./src/components/Helpers/ViewMeasure.tsx");"undefined"!==typeof SliderStyles&&SliderStyles&&SliderStyles===Object(SliderStyles)&&Object.isExtensible(SliderStyles)&&Object.defineProperty(SliderStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SliderStyles",filename:"src/components/Slider/Slider.styles.ts"}}),"undefined"!==typeof GetSliderStyles&&GetSliderStyles&&GetSliderStyles===Object(GetSliderStyles)&&Object.isExtensible(GetSliderStyles)&&Object.defineProperty(GetSliderStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetSliderStyles",filename:"src/components/Slider/Slider.styles.ts"}});var b=function(e,t){var r=e.size,n=void 0===r?"medium":r,i=t.controlHeights[n];return{containerStyle:{height:i,justifyContent:"center"},selectedTrackStyle:{backgroundColor:t.colors.background.primaryDefault,borderRadius:8,height:8,position:"absolute",width:"100%"},thumbStyle:{backgroundColor:t.colors.background.content,borderColor:t.colors.border.primary,borderRadius:999,borderWidth:3,height:i,position:"absolute",width:i,zIndex:1},unselectedTrackStyle:{backgroundColor:t.colors.background.greyDark,borderRadius:8,height:8,position:"absolute",width:"100%"}}};b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getSliderStyles",filename:"src/components/Slider/Slider.styles.ts"}}),r.d(t,"a",function(){return S});var f="/home/travis/build/WeTrustPlatform/paramount/src/components/Slider/Slider.tsx";"undefined"!==typeof Rect&&Rect&&Rect===Object(Rect)&&Object.isExtensible(Rect)&&Object.defineProperty(Rect,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Rect",filename:"src/components/Slider/Slider.tsx"}}),"undefined"!==typeof RangeValue&&RangeValue&&RangeValue===Object(RangeValue)&&Object.isExtensible(RangeValue)&&Object.defineProperty(RangeValue,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"RangeValue",filename:"src/components/Slider/Slider.tsx"}}),"undefined"!==typeof SliderValue&&SliderValue&&SliderValue===Object(SliderValue)&&Object.isExtensible(SliderValue)&&Object.defineProperty(SliderValue,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SliderValue",filename:"src/components/Slider/Slider.tsx"}}),"undefined"!==typeof SliderProps&&SliderProps&&SliderProps===Object(SliderProps)&&Object.isExtensible(SliderProps)&&Object.defineProperty(SliderProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SliderProps",filename:"src/components/Slider/Slider.tsx"}});var p={height:0,pageX:0,pageY:0,width:0,x:0,y:0},g=function(e){var t=e.maximumValue,r=e.minimumValue;return function(e){return e>t?t:e<r?r:e}},h=function(e){return Array.isArray(e)},y=function(e){return h(e)?e[0]:e},j=function(e){return h(e)?e[1]:e},S=function(e){var t=e.value,r=void 0===t?0:t,S=e.onSlidingStart,O=void 0===S?function(){}:S,_=e.onSlidingComplete,x=void 0===_?function(){}:_,v=e.onValueChange,C=void 0===v?function(){}:v,P=e.minimumValue,T=void 0===P?0:P,w=e.maximumValue,k=void 0===w?1:w,E=e.step,F=void 0===E?0:E,R=e.getStyles,z=e.isRange,N=void 0!==z&&z,V=e.leftThumbAccessibilityLabel,M=e.leftThumbAccessibilityHint,B=e.rightThumbAccessibilityHint,H=e.rightThumbAccessibilityLabel,W=r||(N?[T,k]:T),D=l.useState(W),L=Object(a.a)(D,2),A=L[0],U=L[1],G=l.useState(!1),I=Object(a.a)(G,2),X=I[0],Y=I[1],J=l.useState(p),q=Object(a.a)(J,2),K=q[0],Q=q[1],Z=u(X),$=(k-T)/K.width,ee=K.width/(k-T),te=h(A),re=function(e){var t=y(A)+e*$,r=F?Math.round(t/F)*F:t,n=g({maximumValue:te?j(A)-F:k,minimumValue:T})(y(r)),i=function(e,t){return h(e)?[t,e[1]]:t}(A,n);U(i),C(i)},ne=function(e){var t=j(A)+e*$,r=F?Math.round(t/F)*F:t,n=g({maximumValue:k,minimumValue:y(A)+F})(j(r)),i=function(e,t){return h(e)?[e[0],t]:t}(A,n);U(i),C(i)},ie=function(e){return o.a.create({onStartShouldSetPanResponder:function(){return O(A),!0},onPanResponderGrant:function(){Y(!0)},onPanResponderMove:function(t,r){var n=r.dx;return e(n)},onPanResponderRelease:function(){Y(!1)}})},ae=l.useRef(ie(re)),le=l.useRef(ie(ne));l.useEffect(function(){ae.current=ie(re),le.current=ie(ne),Z&&!X&&x(A)},[X,$]);var oe=Object(c.a)(),se=Object(d.a)(b,R,oe.components.getSliderStyles)(e,oe),ue=se.containerStyle,ce=se.selectedTrackStyle,de=se.thumbStyle,me=se.unselectedTrackStyle,be=y(A)*ee,fe=j(A)*ee,pe=X?"grabbing":"grab";return l.createElement(m.a,{onMeasure:Q,style:Object(i.a)({},ue),__source:{fileName:f,lineNumber:279}},l.createElement(s.a,{style:me,__source:{fileName:f,lineNumber:280}}),l.createElement(s.a,{style:Object(i.a)({},ce,te?{left:be,width:fe-be}:{width:be}),__source:{fileName:f,lineNumber:281}}),l.createElement(s.a,Object(n.a)({accessible:!0,style:Object(i.a)({},de,{left:be-de.width/2,cursor:pe}),accessibilityLabel:V,accessibilityHint:M},ae.current.panHandlers,{__source:{fileName:f,lineNumber:287}})),te&&l.createElement(s.a,Object(n.a)({accessible:!0,style:Object(i.a)({},de,{left:fe-de.width/2,cursor:pe}),accessibilityLabel:H,accessibilityHint:B},le.current.panHandlers,{__source:{fileName:f,lineNumber:296}})))};"undefined"!==typeof S&&S&&S===Object(S)&&Object.isExtensible(S)&&Object.defineProperty(S,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Slider",filename:"src/components/Slider/Slider.tsx"}})},"./src/theme/Theme.tsx":function(e,t,r){"use strict";var n=r("./node_modules/deepmerge/dist/umd.js"),i=r.n(n),a=r("./node_modules/react/index.js"),l=r.n(a),o=r("./node_modules/react-native-web/dist/exports/Platform/index.js");"undefined"!==typeof ColorPalette&&ColorPalette&&ColorPalette===Object(ColorPalette)&&Object.isExtensible(ColorPalette)&&Object.defineProperty(ColorPalette,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ColorPalette",filename:"src/theme/palette.ts"}}),"undefined"!==typeof Palette&&Palette&&Palette===Object(Palette)&&Object.isExtensible(Palette)&&Object.defineProperty(Palette,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Palette",filename:"src/theme/palette.ts"}});var s={lightest:"#fafafa",light:"#eeeeee",base:"#cccccc",dark:"#a7a7a7",darkest:"#7e7e7e"},u={lightest:"#e5f5ff",light:"#ceecff",base:"#1ca5F7",dark:"#59a9de",darkest:"#33495f"},c={lightest:"#f9e1de",light:"#f9aa9f",base:"#d26557",dark:"#bb584e",darkest:"#b74033"},d={lightest:"#fce8cf",light:"#f2c58a",base:"#f3b058",dark:"#ec8e30",darkest:"#b26500"},m={lightest:"#fef8e7",light:"#fbe6a2",base:"#f7d154",dark:"#d1b047",darkest:"#7e6514"},b={lightest:"#eafff3",light:"#c2edd5",base:"#54bf84",dark:"#42a46e",darkest:"#16a054"},f={lightest:"#d6fcf7",light:"#c0f9f2",base:"#67c6bb",dark:"#3fa296",darkest:"#1b877a"},p={lightest:"#f8f7fc",light:"#eae7f8",base:"#735dd0",dark:"#37248f",darkest:"#37248f"};"undefined"!==typeof purple&&purple&&purple===Object(purple)&&Object.isExtensible(purple)&&Object.defineProperty(purple,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"purple",filename:"src/theme/palette.ts"}}),"undefined"!==typeof teal&&teal&&teal===Object(teal)&&Object.isExtensible(teal)&&Object.defineProperty(teal,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"teal",filename:"src/theme/palette.ts"}}),"undefined"!==typeof green&&green&&green===Object(green)&&Object.isExtensible(green)&&Object.defineProperty(green,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"green",filename:"src/theme/palette.ts"}}),"undefined"!==typeof yellow&&yellow&&yellow===Object(yellow)&&Object.isExtensible(yellow)&&Object.defineProperty(yellow,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"yellow",filename:"src/theme/palette.ts"}}),"undefined"!==typeof orange&&orange&&orange===Object(orange)&&Object.isExtensible(orange)&&Object.defineProperty(orange,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"orange",filename:"src/theme/palette.ts"}}),"undefined"!==typeof red&&red&&red===Object(red)&&Object.isExtensible(red)&&Object.defineProperty(red,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"red",filename:"src/theme/palette.ts"}}),"undefined"!==typeof blue&&blue&&blue===Object(blue)&&Object.isExtensible(blue)&&Object.defineProperty(blue,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"blue",filename:"src/theme/palette.ts"}}),"undefined"!==typeof neutral&&neutral&&neutral===Object(neutral)&&Object.isExtensible(neutral)&&Object.defineProperty(neutral,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"neutral",filename:"src/theme/palette.ts"}});var g={small:4,medium:4,large:4},h={background:{base:"white",content:"white",overlay:"rgba(0,0,0,0.3)",greyLight:s.lightest,greyDefault:"#F5F6F7",greyDark:s.light,primaryLight:f.lightest,primaryDefault:f.base,primaryDark:f.dark,secondaryLight:d.lightest,secondaryDefault:d.base,secondaryDark:d.dark,dangerLight:c.lightest,dangerDefault:c.base,dangerDark:c.dark,infoLight:u.lightest,infoDefault:u.base,infoDark:u.dark,successLight:b.lightest,successDefault:b.base,successDark:b.dark,warningLight:d.lightest,warningDefault:d.base,warningDark:d.dark},border:{default:s.light,primary:f.darkest,secondary:d.darkest,danger:c.darkest,info:u.darkest,success:b.darkest,warning:d.darkest},button:{disabled:s.light,disabledText:s.darkest,default:s.lightest,defaultText:s.darkest,primary:f.base,primaryText:"white",secondary:d.base,secondaryText:"white",danger:c.base,dangerText:"white"},text:{link:s.darkest,default:s.darkest,muted:s.dark,white:"white",selected:"white",primary:f.darkest,secondary:d.darkest,danger:c.darkest,info:u.darkest,success:b.darkest,warning:d.darkest}},y=[{elevation:0,shadowColor:s.dark,shadowOffset:{width:0,height:0},shadowOpacity:0,shadowRadius:0},{elevation:1,shadowColor:s.dark,shadowOffset:{width:1,height:1},shadowOpacity:.15,shadowRadius:8},{elevation:2,shadowColor:s.dark,shadowOffset:{width:2,height:2},shadowOpacity:.2,shadowRadius:10},{elevation:3,shadowColor:s.dark,shadowOffset:{width:3,height:3},shadowOpacity:.25,shadowRadius:12},{elevation:4,shadowColor:s.dark,shadowOffset:{width:4,height:4},shadowOpacity:.3,shadowRadius:8},{elevation:5,shadowColor:s.dark,shadowOffset:{width:5,height:5},shadowOpacity:.35,shadowRadius:8}],j={colors:h,fills:{solid:{neutral:{backgroundColor:s.base,color:"white"},blue:{backgroundColor:u.base,color:"white"},red:{backgroundColor:c.base,color:"white"},orange:{backgroundColor:d.base,color:"white"},yellow:{backgroundColor:m.base,color:m.darkest},green:{backgroundColor:b.base,color:"white"},teal:{backgroundColor:f.base,color:"white"},purple:{backgroundColor:p.base,color:"white"}},subtle:{neutral:{backgroundColor:s.light,color:s.darkest},blue:{backgroundColor:u.light,color:u.darkest},red:{backgroundColor:c.light,color:c.darkest},orange:{backgroundColor:d.light,color:d.darkest},yellow:{backgroundColor:m.light,color:m.darkest},green:{backgroundColor:b.light,color:b.darkest},teal:{backgroundColor:f.light,color:f.darkest},purple:{backgroundColor:p.light,color:p.darkest}}},fontFamilies:"web"===o.a.OS?{heading:'"SF UI Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',mono:'"SF Mono", "Monaco", "Inconsolata", "Fira Mono", "Droid Sans Mono", "Source Code Pro", monospace',text:'"SF UI Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'}:{heading:"System",mono:"System",text:"System"},fontWeights:{bold:"bold",light:"300",normal:"normal"},headingSizes:{xxxlarge:{fontSize:35,letterSpacing:-.2,lineHeight:40},xxlarge:{fontSize:29,letterSpacing:-.2,lineHeight:32},xlarge:{fontSize:24,letterSpacing:-.07,lineHeight:28},large:{fontSize:20,letterSpacing:-.07,lineHeight:24},medium:{fontSize:16,letterSpacing:-.05,lineHeight:20},small:{fontSize:14,letterSpacing:-.05,lineHeight:20}},paragraphSizes:{small:{fontSize:14,lineHeight:24},medium:{fontSize:16,lineHeight:21},large:{fontSize:18,lineHeight:18}},textSizes:{large:{fontSize:20},medium:{fontSize:16},small:{fontSize:14},xsmall:{fontSize:12}},elevations:y,controlBorderRadius:g,controlHeights:{small:40,medium:48,large:56},controlPaddings:{small:8,medium:16,large:24},containerShapes:{circle:{borderRadius:999},pill:{borderRadius:999},rounded:{borderRadius:g.medium},roundedBottom:{borderBottomLeftRadius:g.medium,borderBottomRightRadius:g.medium},roundedLeft:{borderBottomLeftRadius:g.medium,borderTopLeftRadius:g.medium},roundedRight:{borderBottomRightRadius:g.medium,borderTopRightRadius:g.medium},roundedTop:{borderTopLeftRadius:g.medium,borderTopRightRadius:g.medium},square:{borderRadius:0}},components:{}};"undefined"!==typeof j&&j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"defaultTheme",filename:"src/theme/defaultTheme.ts"}}),r.d(t,"a",function(){return x});"undefined"!==typeof TextSizes&&TextSizes&&TextSizes===Object(TextSizes)&&Object.isExtensible(TextSizes)&&Object.defineProperty(TextSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof TextSize&&TextSize&&TextSize===Object(TextSize)&&Object.isExtensible(TextSize)&&Object.defineProperty(TextSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof HeadingSizes&&HeadingSizes&&HeadingSizes===Object(HeadingSizes)&&Object.isExtensible(HeadingSizes)&&Object.defineProperty(HeadingSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HeadingSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof HeadingSize&&HeadingSize&&HeadingSize===Object(HeadingSize)&&Object.isExtensible(HeadingSize)&&Object.defineProperty(HeadingSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HeadingSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ParagraphSizes&&ParagraphSizes&&ParagraphSizes===Object(ParagraphSizes)&&Object.isExtensible(ParagraphSizes)&&Object.defineProperty(ParagraphSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ParagraphSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ParagraphSize&&ParagraphSize&&ParagraphSize===Object(ParagraphSize)&&Object.isExtensible(ParagraphSize)&&Object.defineProperty(ParagraphSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ParagraphSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontFamilies&&FontFamilies&&FontFamilies===Object(FontFamilies)&&Object.isExtensible(FontFamilies)&&Object.defineProperty(FontFamilies,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontFamilies",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontFamily&&FontFamily&&FontFamily===Object(FontFamily)&&Object.isExtensible(FontFamily)&&Object.defineProperty(FontFamily,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontFamily",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof RNFontWeight&&RNFontWeight&&RNFontWeight===Object(RNFontWeight)&&Object.isExtensible(RNFontWeight)&&Object.defineProperty(RNFontWeight,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"RNFontWeight",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontWeights&&FontWeights&&FontWeights===Object(FontWeights)&&Object.isExtensible(FontWeights)&&Object.defineProperty(FontWeights,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontWeights",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontWeight&&FontWeight&&FontWeight===Object(FontWeight)&&Object.isExtensible(FontWeight)&&Object.defineProperty(FontWeight,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontWeight",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof TextColors&&TextColors&&TextColors===Object(TextColors)&&Object.isExtensible(TextColors)&&Object.defineProperty(TextColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof TextColor&&TextColor&&TextColor===Object(TextColor)&&Object.isExtensible(TextColor)&&Object.defineProperty(TextColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ButtonColors&&ButtonColors&&ButtonColors===Object(ButtonColors)&&Object.isExtensible(ButtonColors)&&Object.defineProperty(ButtonColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ButtonColorsWithText&&ButtonColorsWithText&&ButtonColorsWithText===Object(ButtonColorsWithText)&&Object.isExtensible(ButtonColorsWithText)&&Object.defineProperty(ButtonColorsWithText,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColorsWithText",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ButtonColor&&ButtonColor&&ButtonColor===Object(ButtonColor)&&Object.isExtensible(ButtonColor)&&Object.defineProperty(ButtonColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BorderColors&&BorderColors&&BorderColors===Object(BorderColors)&&Object.isExtensible(BorderColors)&&Object.defineProperty(BorderColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BorderColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BorderColor&&BorderColor&&BorderColor===Object(BorderColor)&&Object.isExtensible(BorderColor)&&Object.defineProperty(BorderColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BorderColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BackgroundColors&&BackgroundColors&&BackgroundColors===Object(BackgroundColors)&&Object.isExtensible(BackgroundColors)&&Object.defineProperty(BackgroundColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BackgroundColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BackgroundColor&&BackgroundColor&&BackgroundColor===Object(BackgroundColor)&&Object.isExtensible(BackgroundColor)&&Object.defineProperty(BackgroundColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BackgroundColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Colors&&Colors&&Colors===Object(Colors)&&Object.isExtensible(Colors)&&Object.defineProperty(Colors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Colors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Elevations&&Elevations&&Elevations===Object(Elevations)&&Object.isExtensible(Elevations)&&Object.defineProperty(Elevations,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Elevations",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Elevation&&Elevation&&Elevation===Object(Elevation)&&Object.isExtensible(Elevation)&&Object.defineProperty(Elevation,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Elevation",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ControlSizes&&ControlSizes&&ControlSizes===Object(ControlSizes)&&Object.isExtensible(ControlSizes)&&Object.defineProperty(ControlSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ControlSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ControlSize&&ControlSize&&ControlSize===Object(ControlSize)&&Object.isExtensible(ControlSize)&&Object.defineProperty(ControlSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ControlSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FillColorProps&&FillColorProps&&FillColorProps===Object(FillColorProps)&&Object.isExtensible(FillColorProps)&&Object.defineProperty(FillColorProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FillColorProps",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FillColors&&FillColors&&FillColors===Object(FillColors)&&Object.isExtensible(FillColors)&&Object.defineProperty(FillColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FillColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FillColor&&FillColor&&FillColor===Object(FillColor)&&Object.isExtensible(FillColor)&&Object.defineProperty(FillColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FillColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Fills&&Fills&&Fills===Object(Fills)&&Object.isExtensible(Fills)&&Object.defineProperty(Fills,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Fills",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ContainerShapes&&ContainerShapes&&ContainerShapes===Object(ContainerShapes)&&Object.isExtensible(ContainerShapes)&&Object.defineProperty(ContainerShapes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ContainerShapes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ContainerShape&&ContainerShape&&ContainerShape===Object(ContainerShape)&&Object.isExtensible(ContainerShape)&&Object.defineProperty(ContainerShape,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ContainerShape",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Theme&&Theme&&Theme===Object(Theme)&&Object.isExtensible(Theme)&&Object.defineProperty(Theme,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Theme",filename:"src/theme/Theme.tsx"}});var S=l.a.createContext(j);"undefined"!==typeof S&&S&&S===Object(S)&&Object.isExtensible(S)&&Object.defineProperty(S,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ThemeContext",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ThemeProviderProps&&ThemeProviderProps&&ThemeProviderProps===Object(ThemeProviderProps)&&Object.isExtensible(ThemeProviderProps)&&Object.defineProperty(ThemeProviderProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ThemeProviderProps",filename:"src/theme/Theme.tsx"}});var O=function(e){return e?i()(j,e):j};O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"createTheme",filename:"src/theme/Theme.tsx"}});var _=function(e){var t=e.children,r=e.value,n=O(void 0===r?j:r);return l.a.createElement(S.Provider,{value:n,__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/theme/Theme.tsx",lineNumber:315}},t)};_&&_===Object(_)&&Object.isExtensible(_)&&Object.defineProperty(_,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ThemeProvider",filename:"src/theme/Theme.tsx"}});var x=function(){return l.a.useContext(S)};"undefined"!==typeof x&&x&&x===Object(x)&&Object.isExtensible(x)&&Object.defineProperty(x,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useTheme",filename:"src/theme/Theme.tsx"}})},"./src/utils/mergeStyles.ts":function(e,t,r){"use strict";r.d(t,"a",function(){return a});var n=r("./node_modules/deepmerge/dist/umd.js"),i=r.n(n);"undefined"!==typeof GetStyles&&GetStyles&&GetStyles===Object(GetStyles)&&Object.isExtensible(GetStyles)&&Object.defineProperty(GetStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetStyles",filename:"src/utils/mergeStyles.ts"}}),"undefined"!==typeof ArgumentTypes&&ArgumentTypes&&ArgumentTypes===Object(ArgumentTypes)&&Object.isExtensible(ArgumentTypes)&&Object.defineProperty(ArgumentTypes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ArgumentTypes",filename:"src/utils/mergeStyles.ts"}}),"undefined"!==typeof ReplaceReturnType&&ReplaceReturnType&&ReplaceReturnType===Object(ReplaceReturnType)&&Object.isExtensible(ReplaceReturnType)&&Object.defineProperty(ReplaceReturnType,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ReplaceReturnType",filename:"src/utils/mergeStyles.ts"}});var a=function(e,t,r){return function(n,a){var l=[e(n,a)];return r&&l.push(r(n,a)),t&&l.push(t(n,a)),i.a.all(l)}};"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"mergeStyles",filename:"src/utils/mergeStyles.ts"}})}}]);
//# sourceMappingURL=33.914343c54a6e55e07260.js.map