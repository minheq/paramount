(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"./src/components/Button/Button.tsx":function(e,t,o){"use strict";var n=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),r=o("./node_modules/react/index.js"),s=o.n(r),a=o("./node_modules/react-native-web/dist/exports/TouchableOpacity/index.js"),c=o("./node_modules/react-native-web/dist/exports/View/index.js"),i=o("./src/theme/Theme.tsx"),l=o("./src/utils/mergeStyles.ts"),u=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js"),d=o.n(u),b=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),m=o("./node_modules/react-spring/native.cjs.js"),p=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),f=function(e,t){return!e},g=function(){var e=s.a.useReducer(f,!0),t=Object(p.a)(e,2)[1];return s.a.useCallback(function(){t(null)},[t])};g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useForceUpdate",filename:"src/hooks/useForceUpdate.ts"}});var y="/home/travis/build/WeTrustPlatform/paramount/src/components/LoadingIndicators/Dots.tsx",_=Object(m.animated)(c.a);"undefined"!==typeof DotsProps&&DotsProps&&DotsProps===Object(DotsProps)&&Object.isExtensible(DotsProps)&&Object.defineProperty(DotsProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DotsProps",filename:"src/components/LoadingIndicators/Dots.tsx"}});var j=function(e){var t=Object(i.b)(),o=e.size,n=void 0===o?10:o,s=e.color,a=void 0===s?t.colors.text.primary:s,l=g(),u=Object(m.useTrail)(3,{config:{duration:800},from:{opacity:0},onRest:l,reset:!0,to:function(){var e=Object(b.a)(d.a.mark(function e(t){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t({opacity:1});case 2:return e.next=4,t({opacity:0});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()});return r.createElement(c.a,{style:{alignItems:"center",flexDirection:"row",justifyContent:"center"},__source:{fileName:y,lineNumber:34}},u.map(function(e,t){return r.createElement(_,{key:t,style:{backgroundColor:a,borderRadius:999,height:n,marginLeft:3,marginRight:3,opacity:e.opacity,width:n},__source:{fileName:y,lineNumber:42}})}))};j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Dots",filename:"src/components/LoadingIndicators/Dots.tsx"}});var B=o("./src/components/Typography/Text.tsx"),x=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),O=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),P=o("./src/utils/isControlSize.ts");"undefined"!==typeof ButtonColorProps&&ButtonColorProps&&ButtonColorProps===Object(ButtonColorProps)&&Object.isExtensible(ButtonColorProps)&&Object.defineProperty(ButtonColorProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColorProps",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof ButtonAppearances&&ButtonAppearances&&ButtonAppearances===Object(ButtonAppearances)&&Object.isExtensible(ButtonAppearances)&&Object.defineProperty(ButtonAppearances,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonAppearances",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof ButtonAppearance&&ButtonAppearance&&ButtonAppearance===Object(ButtonAppearance)&&Object.isExtensible(ButtonAppearance)&&Object.defineProperty(ButtonAppearance,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonAppearance",filename:"src/components/Button/Button.styles.ts"}});var h=function(e){return{minimal:{default:{backgroundColor:e.colors.background.content,color:e.colors.text.default},danger:{backgroundColor:e.colors.background.content,color:e.colors.text.danger},primary:{backgroundColor:e.colors.background.content,color:e.colors.text.primary},secondary:{backgroundColor:e.colors.background.content,color:e.colors.text.secondary}},primary:{default:{backgroundColor:e.colors.button.default,color:e.colors.button.defaultText,loadingBackgroundColor:e.colors.background.overlay},danger:{backgroundColor:e.colors.button.danger,color:e.colors.button.dangerText,loadingBackgroundColor:e.colors.background.dangerLight},primary:{backgroundColor:e.colors.button.primary,color:e.colors.button.primaryText,loadingBackgroundColor:e.colors.background.primaryLight},secondary:{backgroundColor:e.colors.button.secondary,color:e.colors.button.secondaryText,loadingBackgroundColor:e.colors.background.secondaryLight}},outline:{default:{backgroundColor:e.colors.background.content,borderColor:e.colors.text.default,borderWidth:3,color:e.colors.text.default},danger:{backgroundColor:e.colors.background.content,borderColor:e.colors.border.danger,borderWidth:3,color:e.colors.text.danger},primary:{backgroundColor:e.colors.background.content,borderColor:e.colors.border.primary,borderWidth:3,color:e.colors.text.primary},secondary:{backgroundColor:e.colors.background.content,borderColor:e.colors.border.secondary,borderWidth:3,color:e.colors.text.secondary}}}};h&&h===Object(h)&&Object.isExtensible(h)&&Object.defineProperty(h,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getButtonAppearances",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof ButtonStyles&&ButtonStyles&&ButtonStyles===Object(ButtonStyles)&&Object.isExtensible(ButtonStyles)&&Object.defineProperty(ButtonStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonStyles",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof GetButtonStyles&&GetButtonStyles&&GetButtonStyles===Object(GetButtonStyles)&&Object.isExtensible(GetButtonStyles)&&Object.defineProperty(GetButtonStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetButtonStyles",filename:"src/components/Button/Button.styles.ts"}});var C=function(e,t){var o=e.appearance,n=void 0===o?"primary":o,r=e.color,s=void 0===r?"default":r,a=e.iconAfter,c=e.iconBefore,i=e.isDisabled,l=e.isLoading,u=e.size,d=void 0===u?"medium":u,b=!!a,m=!!c,p=h(t)[n][s],f=p.color,g=p.loadingBackgroundColor,y=Object(O.a)(p,["color","loadingBackgroundColor"]),_=Object(P.a)(d)?{borderRadius:t.controlBorderRadius[d],height:t.controlHeights[d],paddingLeft:2*t.controlPaddings[d],paddingRight:2*t.controlPaddings[d]}:{borderRadius:t.controlBorderRadius.medium,height:d,paddingLeft:2*t.controlPaddings.medium,paddingRight:2*t.controlPaddings.medium},j=_.borderRadius,B=_.height,C=_.paddingLeft,v=_.paddingRight,N=Object(P.a)(d)?t.textSizes[d]:t.textSizes.medium;return{buttonContentWrapperStyle:{paddingLeft:m?8:0,paddingRight:b?8:0},innerButtonWrapperStyle:{alignItems:"center",flexDirection:"row",height:"100%",justifyContent:"center"},textStyle:Object(x.a)({alignItems:"center",color:i?t.colors.text.muted:f,display:"flex",fontWeight:"600",justifyContent:"center",textAlign:"center"},N),touchableStyle:Object(x.a)({borderRadius:j,height:B,paddingLeft:C,paddingRight:v},y,i?{backgroundColor:t.colors.button.disabled}:Object(x.a)({},l?{backgroundColor:g}:{}))}};C&&C===Object(C)&&Object.isExtensible(C)&&Object.defineProperty(C,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getButtonStyles",filename:"src/components/Button/Button.styles.ts"}}),o.d(t,"a",function(){return N});var v="/home/travis/build/WeTrustPlatform/paramount/src/components/Button/Button.tsx";"undefined"!==typeof ButtonProps&&ButtonProps&&ButtonProps===Object(ButtonProps)&&Object.isExtensible(ButtonProps)&&Object.defineProperty(ButtonProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonProps",filename:"src/components/Button/Button.tsx"}});var N=function(e){var t=e.getStyles,o=e.iconAfter,s=e.iconBefore,u=e.isDisabled,d=void 0!==u&&u,b=e.isLoading,m=void 0!==b&&b,p=e.onPress,f=void 0===p?function(){}:p,g=e.testID,y=e.accessibilityHint,_=e.accessibilityLabel,j=e.accessible,B=void 0===j||j,x=Object(i.b)(),O=Object(l.a)(C,t,x.components.getButtonStyles)(e,x),P=O.touchableStyle,h=O.textStyle,N=O.innerButtonWrapperStyle,k=O.buttonContentWrapperStyle;return r.createElement(a.a,{accessibilityRole:"button",disabled:!(!d&&!m),onPress:f,style:P,testID:g,accessibilityHint:y,accessibilityLabel:_,accessible:B,__source:{fileName:v,lineNumber:123}},r.createElement(c.a,{style:N,__source:{fileName:v,lineNumber:133}},s,r.createElement(c.a,{style:k,__source:{fileName:v,lineNumber:135}},r.createElement(T,Object(n.a)({},e,{textStyle:h,__source:{fileName:v,lineNumber:136}}))),o))};"undefined"!==typeof N&&N&&N===Object(N)&&Object.isExtensible(N)&&Object.defineProperty(N,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Button",filename:"src/components/Button/Button.tsx"}}),"undefined"!==typeof ButtonContentProps&&ButtonContentProps&&ButtonContentProps===Object(ButtonContentProps)&&Object.isExtensible(ButtonContentProps)&&Object.defineProperty(ButtonContentProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonContentProps",filename:"src/components/Button/Button.tsx"}});var T=function(e){var t=e.isLoading,o=e.iconLoading,n=e.icon,s=e.title,a=e.textStyle,c=Object(i.b)();return t?r.createElement(r.Fragment,null,o||r.createElement(j,{color:a?a.color:c.colors.text.white,__source:{fileName:v,lineNumber:156}})):n?r.createElement(r.Fragment,null,n):s?r.createElement(B.a,{getStyles:function(){return{textStyle:a}},__source:{fileName:v,lineNumber:163}},s):r.createElement(r.Fragment,null)}},"./src/components/Toast/Toast.mdx":function(e,t,o){"use strict";o.r(t),o.d(t,"default",function(){return f});var n=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),s=(o("./node_modules/react/index.js"),o("./node_modules/@mdx-js/react/dist/index.es.js")),a=o("./node_modules/docz/dist/index.esm.js"),c=o("./src/components/Box/Box.tsx"),i=o("./src/components/Button/Button.tsx"),l=o("./src/components/Toast/ToastContext.ts"),u=o("./src/components/Toast/ToastProvider.tsx"),d=o("./src/components/Toast/Toast.tsx"),b="/home/travis/build/WeTrustPlatform/paramount/src/components/Toast/Toast.mdx",m={},p="wrapper";function f(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(s.b)(p,Object(r.a)({},m,o,{components:t,mdxType:"MDXLayout",__source:{fileName:b,lineNumber:21}}),Object(s.b)("h1",Object(r.a)({id:"toast"},{__source:{fileName:b,lineNumber:24}}),"Toast"),Object(s.b)("h2",Object(r.a)({id:"setup"},{__source:{fileName:b,lineNumber:27}}),"Setup"),Object(s.b)("p",{__source:{fileName:b,lineNumber:30}},"Make sure to use ",Object(s.b)("inlineCode",{parentName:"p",__source:{fileName:b,lineNumber:30}},"ThemeProvider")," at the top-level component."),Object(s.b)("pre",{__source:{fileName:b,lineNumber:31}},Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"},{__source:{fileName:b,lineNumber:31}}),"<ThemeProvider>{children}</ThemeProvider>\n")),Object(s.b)("h2",Object(r.a)({id:"usage"},{__source:{fileName:b,lineNumber:35}}),"Usage"),Object(s.b)("p",{__source:{fileName:b,lineNumber:38}},"Paramount exposes a convenience hook ",Object(s.b)("inlineCode",{parentName:"p",__source:{fileName:b,lineNumber:38}},"useToast")," you can use to create toasts from anywhere in the application."),Object(s.b)(a.c,{__position:0,__code:"<ToastProvider>\n  {/*\n    We use `ToastContext.Consumer` here due to limitations in docs\n    Use `const { notify } = useToast()` inside your function component\n   */}\n  <ToastContext.Consumer>\n    {({ notify }) => (\n      <Button\n        onPress={() =>\n          notify({\n            title: 'Title',\n            description: 'Description',\n            duration: 5000,\n          })\n        }\n        title=\"Open toast\"\n      />\n    )}\n  </ToastContext.Consumer>\n</ToastProvider>",__scope:{props:this?this.props:o,Playground:a.c,Props:a.d,Box:c.a,Button:i.a,ToastContext:l.a,ToastProvider:u.a,Toast:d.a},mdxType:"Playground",__source:{fileName:b,lineNumber:39}},Object(s.b)(u.a,{mdxType:"ToastProvider",__source:{fileName:b,lineNumber:49}},Object(s.b)(l.a.Consumer,{__source:{fileName:b,lineNumber:56}},function(e){var t=e.notify;return Object(s.b)(i.a,{onPress:function(){return t({title:"Title",description:"Description",duration:5e3})},title:"Open toast",mdxType:"Button",__source:{fileName:b,lineNumber:59}})}))),Object(s.b)("h2",Object(r.a)({id:"toast-options"},{__source:{fileName:b,lineNumber:67}}),"Toast Options"),Object(s.b)(a.d,{of:d.a,mdxType:"Props",__source:{fileName:b,lineNumber:70}}))}f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Toast/Toast.mdx"}}),f.isMDXComponent=!0},"./src/utils/isControlSize.ts":function(e,t,o){"use strict";o.d(t,"a",function(){return n});var n=function(e){return"number"!==typeof e};"undefined"!==typeof n&&n&&n===Object(n)&&Object.isExtensible(n)&&Object.defineProperty(n,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"isControlSize",filename:"src/utils/isControlSize.ts"}})}}]);
//# sourceMappingURL=25.fda0a51c017c9ba0378c.js.map