(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"./src/components/Button/BackButton.tsx":function(e,t,o){var r=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),n=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.BackButton=void 0;var s=n(o("./node_modules/@babel/runtime/helpers/extends.js")),l=r(o("./node_modules/react/index.js")),i=o("./src/icons/index.ts"),a=o("./src/theme/index.ts"),c=o("./src/components/Button/Button.tsx"),u=function(e){var t=(0,a.useTheme)();return l.createElement(c.Button,(0,s.default)({appearance:"minimal",isInline:!0,iconBefore:l.createElement(i.Icon,{name:"arrow-left",size:24,color:t.colors.text.default}),size:"small"},e))};t.BackButton=u,u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BackButton",filename:"src/components/Button/BackButton.tsx"}})},"./src/components/Button/Button.styles.ts":function(e,t,o){var r=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.getButtonStyles=t.getButtonVariables=void 0;var n=r(o("./node_modules/@babel/runtime/helpers/objectSpread.js")),s=r(o("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));"undefined"!==typeof ButtonColorProps&&ButtonColorProps&&ButtonColorProps===Object(ButtonColorProps)&&Object.isExtensible(ButtonColorProps)&&Object.defineProperty(ButtonColorProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColorProps",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof ButtonColors&&ButtonColors&&ButtonColors===Object(ButtonColors)&&Object.isExtensible(ButtonColors)&&Object.defineProperty(ButtonColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColors",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof ButtonColor&&ButtonColor&&ButtonColor===Object(ButtonColor)&&Object.isExtensible(ButtonColor)&&Object.defineProperty(ButtonColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColor",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof ButtonAppearances&&ButtonAppearances&&ButtonAppearances===Object(ButtonAppearances)&&Object.isExtensible(ButtonAppearances)&&Object.defineProperty(ButtonAppearances,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonAppearances",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof ButtonAppearance&&ButtonAppearance&&ButtonAppearance===Object(ButtonAppearance)&&Object.isExtensible(ButtonAppearance)&&Object.defineProperty(ButtonAppearance,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonAppearance",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof SizeStyles&&SizeStyles&&SizeStyles===Object(SizeStyles)&&Object.isExtensible(SizeStyles)&&Object.defineProperty(SizeStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SizeStyles",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof ButtonSizes&&ButtonSizes&&ButtonSizes===Object(ButtonSizes)&&Object.isExtensible(ButtonSizes)&&Object.defineProperty(ButtonSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonSizes",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof ButtonSize&&ButtonSize&&ButtonSize===Object(ButtonSize)&&Object.isExtensible(ButtonSize)&&Object.defineProperty(ButtonSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonSize",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof ButtonVariables&&ButtonVariables&&ButtonVariables===Object(ButtonVariables)&&Object.isExtensible(ButtonVariables)&&Object.defineProperty(ButtonVariables,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonVariables",filename:"src/components/Button/Button.styles.ts"}});var l=function(e){return{appearances:{minimal:{default:{backgroundColor:e.colors.background.content,color:e.colors.text.default,focusColor:e.colors.background.greyDefault},danger:{backgroundColor:e.colors.background.content,color:e.colors.text.danger,focusColor:e.colors.background.greyDefault},primary:{backgroundColor:e.colors.background.content,color:e.colors.text.primary,focusColor:e.colors.background.greyDefault},secondary:{backgroundColor:e.colors.background.content,color:e.colors.text.secondary?e.colors.text.secondary:e.colors.text.default,focusColor:e.colors.background.greyDefault}},primary:{default:{backgroundColor:e.colors.background.greyLight,borderColor:e.colors.border.default,color:e.colors.text.default,focusColor:e.colors.background.greyDefault,loadingBackgroundColor:e.colors.background.overlay},danger:{backgroundColor:e.colors.background.dangerDefault,borderColor:e.colors.border.danger,color:e.colors.text.white,focusColor:e.colors.background.dangerDark,loadingBackgroundColor:e.colors.background.dangerLight},primary:{backgroundColor:e.colors.background.primaryDefault,borderColor:e.colors.border.primary,color:e.colors.text.white,focusColor:e.colors.background.primaryDark,loadingBackgroundColor:e.colors.background.primaryLight},secondary:{backgroundColor:e.colors.background.secondaryDefault,borderColor:e.colors.border.secondary,color:e.colors.text.white,focusColor:e.colors.background.secondaryDark,loadingBackgroundColor:e.colors.background.secondaryLight}},outline:{default:{backgroundColor:e.colors.background.content,borderColor:e.colors.text.default,borderWidth:3,color:e.colors.text.default,focusColor:e.colors.background.greyDefault},danger:{backgroundColor:e.colors.background.content,borderColor:e.colors.border.danger,borderWidth:3,color:e.colors.text.danger,focusColor:e.colors.background.dangerLight},primary:{backgroundColor:e.colors.background.content,borderColor:e.colors.border.primary,borderWidth:3,color:e.colors.text.primary,focusColor:e.colors.background.primaryLight},secondary:{backgroundColor:e.colors.background.content,borderColor:e.colors.border.secondary,borderWidth:3,color:e.colors.text.secondary,focusColor:e.colors.background.secondaryLight}}},disabled:{backgroundColor:e.colors.background.greyDark,color:e.colors.text.muted},sizes:{small:{borderRadius:e.controlBorderRadius.small,fontSize:e.textSizes.small.fontSize||14,height:e.controlHeights.small,paddingLeft:2*e.controlPaddings.small,paddingRight:2*e.controlPaddings.small},medium:{borderRadius:e.controlBorderRadius.medium,fontSize:e.textSizes.medium.fontSize||16,height:e.controlHeights.medium,paddingLeft:2*e.controlPaddings.medium,paddingRight:2*e.controlPaddings.medium},large:{borderRadius:e.controlBorderRadius.large,fontSize:e.textSizes.large.fontSize||20,height:e.controlHeights.large,paddingLeft:2*e.controlPaddings.large,paddingRight:2*e.controlPaddings.large}}}};t.getButtonVariables=l,l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getButtonVariables",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof ButtonStyles&&ButtonStyles&&ButtonStyles===Object(ButtonStyles)&&Object.isExtensible(ButtonStyles)&&Object.defineProperty(ButtonStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonStyles",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof ButtonStylesProps&&ButtonStylesProps&&ButtonStylesProps===Object(ButtonStylesProps)&&Object.isExtensible(ButtonStylesProps)&&Object.defineProperty(ButtonStylesProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonStylesProps",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof GetButtonStyles&&GetButtonStyles&&GetButtonStyles===Object(GetButtonStyles)&&Object.isExtensible(GetButtonStyles)&&Object.defineProperty(GetButtonStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetButtonStyles",filename:"src/components/Button/Button.styles.ts"}});var i=function(e,t){var o=e.appearance,r=e.color,i=e.size,a=e.isDisabled,c=e.isLoading,u=e.isInline,d=l(t),b=d.appearances,m=d.sizes,f=d.disabled,p=(0,s.default)(d,["appearances","sizes","disabled"]),g=b[o][r],y=g.color,P=g.focusColor,j=g.loadingBackgroundColor,B=(0,s.default)(g,["color","focusColor","loadingBackgroundColor"]),x=m[i],S=x.fontSize,C=(0,s.default)(x,["fontSize"]),_=f.color,O=(0,s.default)(f,["color"]);return{buttonStyle:(0,n.default)({},a?(0,n.default)({},O,C):(0,n.default)({},C,p,B,c?{backgroundColor:j}:{}),u?{alignSelf:"flex-start",flexDirection:"row",flexWrap:"wrap"}:{}),focusColor:P,textStyle:{alignItems:"center",color:a?_:y,display:"flex",fontSize:S,fontWeight:"600",justifyContent:"center",textAlign:"center"}}};t.getButtonStyles=i,i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getButtonStyles",filename:"src/components/Button/Button.styles.ts"}})},"./src/components/Button/Button.tsx":function(e,t,o){var r=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),n=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.Button=void 0;var s=n(o("./node_modules/@babel/runtime/helpers/extends.js")),l=n(o("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),i=r(o("./node_modules/react/index.js")),a=o("./node_modules/react-native-web/dist/index.js"),c=o("./src/theme/index.ts"),u=o("./src/utils/mergeStyles.ts"),d=o("./src/components/Box/index.ts"),b=o("./src/components/Loading/index.ts"),m=o("./src/components/Typography/index.ts"),f=o("./src/components/Button/Button.styles.ts");"undefined"!==typeof ButtonProps&&ButtonProps&&ButtonProps===Object(ButtonProps)&&Object.isExtensible(ButtonProps)&&Object.defineProperty(ButtonProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonProps",filename:"src/components/Button/Button.tsx"}});var p=function(e){var t=e.appearance,o=void 0===t?"primary":t,r=(e.title,e.color),n=void 0===r?"default":r,b=e.getStyles,m=(e.icon,e.iconAfter),p=e.iconBefore,y=(e.iconLoading,e.isActive,e.isDisabled),P=void 0!==y&&y,j=e.isInline,B=void 0!==j&&j,x=e.isLoading,S=void 0!==x&&x,C=e.onPress,_=void 0===C?function(){}:C,O=e.size,v=void 0===O?"medium":O,h=e.testID,k=(0,l.default)(e,["appearance","title","color","getStyles","icon","iconAfter","iconBefore","iconLoading","isActive","isDisabled","isInline","isLoading","onPress","size","testID"]),z=(0,c.useTheme)(),E=(0,u.mergeStyles)(f.getButtonStyles,b)({appearance:o,color:n,isDisabled:P,isInline:B,isLoading:S,size:v},z),D=E.buttonStyle,L=E.textStyle,w=E.focusColor;return i.createElement(a.TouchableHighlight,(0,s.default)({accessible:!0,accessibilityRole:"button",underlayColor:w,disabled:!(!P&&!S),onPress:_,style:D,testID:h},k),i.createElement(a.View,{style:{alignItems:"center",flexDirection:"row",height:"100%",justifyContent:"center"}},p,i.createElement(d.Box,{paddingLeft:p?8:0,paddingRight:m?8:0},i.createElement(g,(0,s.default)({},e,{textStyle:L}))),m))};t.Button=p,p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Button",filename:"src/components/Button/Button.tsx"}}),"undefined"!==typeof ButtonContentProps&&ButtonContentProps&&ButtonContentProps===Object(ButtonContentProps)&&Object.isExtensible(ButtonContentProps)&&Object.defineProperty(ButtonContentProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonContentProps",filename:"src/components/Button/Button.tsx"}});var g=function(e){var t=e.isLoading,o=e.iconLoading,r=e.icon,n=e.title,s=e.textStyle;return t?o||i.createElement(b.LoadingDots,{color:s.color}):r||(n?i.createElement(m.Text,{getStyles:function(){return{textStyle:s}}},n):null)}},"./src/components/Button/index.ts":function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0});var r=o("./src/components/Button/Button.tsx");Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})});var n=o("./src/components/Button/BackButton.tsx");Object.keys(n).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})})},"./src/components/Counter/Counter.styles.ts":function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.getCounterStyles=t.getCounterVariables=void 0,"undefined"!==typeof CounterVariables&&CounterVariables&&CounterVariables===Object(CounterVariables)&&Object.isExtensible(CounterVariables)&&Object.defineProperty(CounterVariables,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CounterVariables",filename:"src/components/Counter/Counter.styles.ts"}});var o=function(e){return{container:{display:"flex",flexDirection:"row"},count:{justifyContent:"center"},counter:{alignItems:"center",borderColor:e.colors.border.primary,borderRadius:999,borderWidth:1,display:"flex",height:40,justifyContent:"center",width:40},disabled:{borderColor:e.colors.border.default}}};t.getCounterVariables=o,o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getCounterVariables",filename:"src/components/Counter/Counter.styles.ts"}}),"undefined"!==typeof CounterStyles&&CounterStyles&&CounterStyles===Object(CounterStyles)&&Object.isExtensible(CounterStyles)&&Object.defineProperty(CounterStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CounterStyles",filename:"src/components/Counter/Counter.styles.ts"}}),"undefined"!==typeof GetCounterStyles&&GetCounterStyles&&GetCounterStyles===Object(GetCounterStyles)&&Object.isExtensible(GetCounterStyles)&&Object.defineProperty(GetCounterStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetCounterStyles",filename:"src/components/Counter/Counter.styles.ts"}});var r=function(e){var t=o(e),r=t.container,n=t.counter;return{containerStyle:r,countStyle:t.count,counterStyle:n,disabledStyle:t.disabled,textStyle:{}}};t.getCounterStyles=r,r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getCounterStyles",filename:"src/components/Counter/Counter.styles.ts"}})},"./src/components/Counter/Counter.tsx":function(e,t,o){var r=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),n=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.Counter=void 0;var s=n(o("./node_modules/@babel/runtime/helpers/objectSpread.js")),l=r(o("./node_modules/react/index.js")),i=o("./node_modules/react-native-web/dist/index.js"),a=o("./src/icons/index.ts"),c=o("./src/theme/index.ts"),u=o("./src/utils/mergeStyles.ts"),d=o("./src/components/Box/index.ts"),b=o("./src/components/Typography/index.ts"),m=o("./src/components/Counter/Counter.styles.ts");"undefined"!==typeof CounterProps&&CounterProps&&CounterProps===Object(CounterProps)&&Object.isExtensible(CounterProps)&&Object.defineProperty(CounterProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CounterProps",filename:"src/components/Counter/Counter.tsx"}});var f=function(e){var t=e.count,o=e.component,r=e.max,n=e.min,f=e.onIncrement,p=e.onDecrement,g=e.getStyles,y=(0,c.useTheme)(),P=(0,u.mergeStyles)(m.getCounterStyles,g)(y),j=P.containerStyle,B=P.counterStyle,x=P.countStyle,S=P.textStyle,C=P.disabledStyle,_=n===t,O=r===t;return l.createElement(i.View,{style:j},l.createElement(d.Box,{paddingRight:16},l.createElement(i.TouchableOpacity,{activeOpacity:.7,style:(0,s.default)({},B,_&&C),disabled:_,onPress:_?void 0:p},l.createElement(a.Icon,{name:"minus",size:16,color:_?y.colors.text.muted:y.colors.text.primary}))),o||l.createElement(i.View,{style:x},l.createElement(b.Text,{getStyles:function(){return{textStyle:S}}},"".concat(t))),l.createElement(d.Box,{paddingLeft:16},l.createElement(i.TouchableOpacity,{activeOpacity:.7,style:(0,s.default)({},B,O&&C),disabled:O,onPress:O?void 0:f},l.createElement(a.Icon,{name:"plus",size:16,color:O?y.colors.text.muted:y.colors.text.primary}))))};t.Counter=f,f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Counter",filename:"src/components/Counter/Counter.tsx"}})},"./src/components/Counter/index.ts":function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0});var r=o("./src/components/Counter/Counter.tsx");Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})})},"./src/components/Loading/LoadingDots.tsx":function(e,t,o){var r=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),n=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.LoadingDots=void 0;var s=n(o("./node_modules/@babel/runtime/regenerator/index.js")),l=n(o("./node_modules/@babel/runtime/helpers/asyncToGenerator.js")),i=r(o("./node_modules/react/index.js")),a=o("./node_modules/react-native-web/dist/index.js"),c=o("./node_modules/react-spring/native.cjs.js"),u=(0,c.animated)(a.View);"undefined"!==typeof LoadingDotsProps&&LoadingDotsProps&&LoadingDotsProps===Object(LoadingDotsProps)&&Object.isExtensible(LoadingDotsProps)&&Object.defineProperty(LoadingDotsProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"LoadingDotsProps",filename:"src/components/Loading/LoadingDots.tsx"}});var d=["1","2","3"],b=function(e){var t=e.size,o=void 0===t?10:t,r=e.color,n=void 0===r?"#aaa":r,b=(0,c.useTrail)(d.length,{config:{duration:800},from:{opacity:0},reset:!0,to:function(){var e=(0,l.default)(s.default.mark(function e(t){return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,t({opacity:1});case 3:return e.next=5,t({opacity:0});case 5:e.next=0;break;case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()});return i.createElement(a.View,{style:{alignItems:"center",flexDirection:"row",justifyContent:"center"}},b.map(function(e,t){return i.createElement(u,{key:d[t],style:{backgroundColor:n,borderRadius:"50%",height:o,marginLeft:3,marginRight:3,opacity:e.opacity,width:o}})}))};t.LoadingDots=b,b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"LoadingDots",filename:"src/components/Loading/LoadingDots.tsx"}})},"./src/components/Loading/index.ts":function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0});var r=o("./src/components/Loading/LoadingDots.tsx");Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})})},"./src/components/Progress/Progress.mdx":function(e,t,o){var r=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=p;var n=r(o("./node_modules/@babel/runtime/helpers/extends.js")),s=r(o("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),l=(r(o("./node_modules/react/index.js")),o("./node_modules/@mdx-js/react/dist/index.es.js")),i=o("./node_modules/react-powerplug/dist/react-powerplug.esm.js"),a=o("./node_modules/docz/dist/index.esm.js"),c=o("./src/components/Progress/Progress.tsx"),u=o("./src/components/Box/index.ts"),d=o("./src/components/Button/index.ts"),b=o("./src/components/Counter/index.ts"),m={},f="wrapper";function p(e){var t=e.components,o=(0,s.default)(e,["components"]);return(0,l.mdx)(f,(0,n.default)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"progress"},"Progress"),(0,l.mdx)("h3",{id:"usage"},"Usage"),(0,l.mdx)(a.Playground,{__position:0,__code:'<CounterContainer initial={0}>\n  {({ count, incBy, decBy }) => (\n    <Box>\n      <Progress\n        percent={count}\n        size="large"\n        getStyles={(props, theme) => ({\n          containerStyle: {},\n          progressStyle: {},\n        })}\n      />\n      <Counter\n        count={count}\n        onDecrement={() => decBy(10)}\n        onIncrement={() => incBy(10)}\n        min={0}\n        max={100}\n      />\n    </Box>\n  )}\n</CounterContainer>',__scope:{props:this?this.props:o,CounterContainer:i.Counter,Playground:a.Playground,Props:a.Props,Progress:c.Progress,Box:u.Box,Button:d.Button,Counter:b.Counter},mdxType:"Playground"},(0,l.mdx)(i.Counter,{initial:0,mdxType:"CounterContainer"},function(e){var t=e.count,o=e.incBy,r=e.decBy;return(0,l.mdx)(u.Box,{mdxType:"Box"},(0,l.mdx)(c.Progress,{percent:t,size:"large",getStyles:function(e,t){return{containerStyle:{},progressStyle:{}}},mdxType:"Progress"}),(0,l.mdx)(b.Counter,{count:t,onDecrement:function(){return r(10)},onIncrement:function(){return o(10)},min:0,max:100,mdxType:"Counter"}))})),(0,l.mdx)("h3",{id:"props"},"Props"),(0,l.mdx)(a.Props,{of:c.Progress,mdxType:"Props"}))}p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Progress/Progress.mdx"}}),p.isMDXComponent=!0},"./src/components/Progress/Progress.styles.ts":function(e,t,o){var r=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.getProgressStyles=t.getProgressVariables=void 0;var n=r(o("./node_modules/@babel/runtime/helpers/objectSpread.js"));"undefined"!==typeof ProgressVariables&&ProgressVariables&&ProgressVariables===Object(ProgressVariables)&&Object.isExtensible(ProgressVariables)&&Object.defineProperty(ProgressVariables,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ProgressVariables",filename:"src/components/Progress/Progress.styles.ts"}}),"undefined"!==typeof ProgressSizes&&ProgressSizes&&ProgressSizes===Object(ProgressSizes)&&Object.isExtensible(ProgressSizes)&&Object.defineProperty(ProgressSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ProgressSizes",filename:"src/components/Progress/Progress.styles.ts"}}),"undefined"!==typeof ProgressSize&&ProgressSize&&ProgressSize===Object(ProgressSize)&&Object.isExtensible(ProgressSize)&&Object.defineProperty(ProgressSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ProgressSize",filename:"src/components/Progress/Progress.styles.ts"}});var s=function(e){return{container:{backgroundColor:e.colors.background.greyDefault},progress:{backgroundColor:e.colors.background.primaryDefault,height:"100%"},size:{small:{borderRadius:999,height:16},medium:{borderRadius:999,height:24},large:{borderRadius:999,height:32}}}};t.getProgressVariables=s,s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getProgressVariables",filename:"src/components/Progress/Progress.styles.ts"}}),"undefined"!==typeof ProgressStylesProps&&ProgressStylesProps&&ProgressStylesProps===Object(ProgressStylesProps)&&Object.isExtensible(ProgressStylesProps)&&Object.defineProperty(ProgressStylesProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ProgressStylesProps",filename:"src/components/Progress/Progress.styles.ts"}}),"undefined"!==typeof GetProgressStyles&&GetProgressStyles&&GetProgressStyles===Object(GetProgressStyles)&&Object.isExtensible(GetProgressStyles)&&Object.defineProperty(GetProgressStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetProgressStyles",filename:"src/components/Progress/Progress.styles.ts"}}),"undefined"!==typeof ProgressStyles&&ProgressStyles&&ProgressStyles===Object(ProgressStyles)&&Object.isExtensible(ProgressStyles)&&Object.defineProperty(ProgressStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ProgressStyles",filename:"src/components/Progress/Progress.styles.ts"}});var l=function(e,t){var o=e.size,r=s(t),l=r.size[o];return{containerStyle:(0,n.default)({},l,r.container),progressStyle:(0,n.default)({},l,r.progress)}};t.getProgressStyles=l,l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getProgressStyles",filename:"src/components/Progress/Progress.styles.ts"}})},"./src/components/Progress/Progress.tsx":function(e,t,o){var r=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),n=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.Progress=void 0;var s=n(o("./node_modules/@babel/runtime/helpers/objectSpread.js")),l=r(o("./node_modules/react/index.js")),i=o("./node_modules/react-native-web/dist/index.js"),a=o("./node_modules/react-spring/native.cjs.js"),c=o("./src/constants/Animation.ts"),u=o("./src/theme/index.ts"),d=o("./src/utils/mergeStyles.ts"),b=o("./src/components/Progress/Progress.styles.ts"),m=(0,a.animated)(i.View);"undefined"!==typeof ProgressProps&&ProgressProps&&ProgressProps===Object(ProgressProps)&&Object.isExtensible(ProgressProps)&&Object.defineProperty(ProgressProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ProgressProps",filename:"src/components/Progress/Progress.tsx"}});var f=function(e){var t=e.percent,o=void 0===t?0:t,r=e.size,n=void 0===r?"medium":r,f=e.getStyles,p=e.testID,g=(0,u.useTheme)(),y=(0,d.mergeStyles)(b.getProgressStyles,f)({size:n},g),P=y.containerStyle,j=y.progressStyle,B=Math.max(Math.min(o,100),0),x=(0,a.useSpring)({config:c.springDefaultConfig,from:{width:B},width:B}).width;return l.createElement(i.View,{style:P,testID:p},l.createElement(m,{accessibilityRole:"web"===i.Platform.OS?"progress":"none",style:(0,s.default)({},j,{width:x.interpolate(function(e){return"".concat(e,"%")})})}))};t.Progress=f,f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Progress",filename:"src/components/Progress/Progress.tsx"}})},"./src/constants/Animation.ts":function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.springDefaultConfig=void 0;var o={friction:40,tension:400};t.springDefaultConfig=o,"undefined"!==typeof o&&o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"springDefaultConfig",filename:"src/constants/Animation.ts"}})},"./src/icons/Icon.web.tsx":function(e,t,o){var r=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(o("./node_modules/react/index.js")),s=r(o("./node_modules/react-icons/fi/index.esm.js"));t.default=function(e){var t=e.name,o=e.color,r=e.size,l=s["Fi".concat(function(e){var t=e.replace(/(\-\w)/g,function(e){return e[1].toUpperCase()});return t.charAt(0).toUpperCase()+t.slice(1)}(t))];return n.createElement(l,{color:o,size:r})}},"./src/icons/index.ts":function(e,t,o){var r=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Icon",{enumerable:!0,get:function(){return n.default}});var n=r(o("./src/icons/Icon.web.tsx"));"undefined"!==typeof Icon&&Icon&&Icon===Object(Icon)&&Object.isExtensible(Icon)&&Object.defineProperty(Icon,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Icon",filename:"src/icons/index.ts"}})}}]);
//# sourceMappingURL=10.b664005596a8b33ed21b.js.map