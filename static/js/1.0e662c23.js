(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"./src/components/Button/Button.tsx":function(e,t,o){"use strict";var r=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),n=o("./node_modules/react/index.js"),a=o.n(n),l=o("./node_modules/react-native-web/dist/exports/TouchableOpacity/index.js"),i=o("./node_modules/react-native-web/dist/exports/View/index.js"),s=o("./src/theme/Theme.tsx"),c=o("./src/utils/mergeStyles.ts"),u=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js"),d=o.n(u),b=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),m=o("./node_modules/react-spring/native.cjs.js"),f=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),p=function(e,t){return!e},g=function(){var e=a.a.useReducer(p,!0),t=Object(f.a)(e,2)[1];return a.a.useCallback(function(){t(null)},[t])};g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useForceUpdate",filename:"src/hooks/useForceUpdate.ts"}});var y="/home/travis/build/WeTrustPlatform/paramount/src/components/LoadingIndicators/Dots.tsx",h=Object(m.animated)(i.a);"undefined"!==typeof DotsProps&&DotsProps&&DotsProps===Object(DotsProps)&&Object.isExtensible(DotsProps)&&Object.defineProperty(DotsProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DotsProps",filename:"src/components/LoadingIndicators/Dots.tsx"}});var x=function(e){var t=Object(s.a)(),o=e.size,r=void 0===o?10:o,a=e.color,l=void 0===a?t.colors.text.primary:a,c=g(),u=Object(m.useTrail)(3,{config:{duration:800},from:{opacity:0},onRest:c,reset:!0,to:function(){var e=Object(b.a)(d.a.mark(function e(t){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t({opacity:1});case 2:return e.next=4,t({opacity:0});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()});return n.createElement(i.a,{style:{alignItems:"center",flexDirection:"row",justifyContent:"center"},__source:{fileName:y,lineNumber:34}},u.map(function(e,t){return n.createElement(h,{key:t,style:{backgroundColor:l,borderRadius:999,height:r,marginLeft:3,marginRight:3,opacity:e.opacity,width:r},__source:{fileName:y,lineNumber:42}})}))};x&&x===Object(x)&&Object.isExtensible(x)&&Object.defineProperty(x,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Dots",filename:"src/components/LoadingIndicators/Dots.tsx"}});var j=o("./src/components/Typography/Text.tsx"),O=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),C=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");"undefined"!==typeof ButtonColorProps&&ButtonColorProps&&ButtonColorProps===Object(ButtonColorProps)&&Object.isExtensible(ButtonColorProps)&&Object.defineProperty(ButtonColorProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColorProps",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof ButtonAppearances&&ButtonAppearances&&ButtonAppearances===Object(ButtonAppearances)&&Object.isExtensible(ButtonAppearances)&&Object.defineProperty(ButtonAppearances,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonAppearances",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof ButtonAppearance&&ButtonAppearance&&ButtonAppearance===Object(ButtonAppearance)&&Object.isExtensible(ButtonAppearance)&&Object.defineProperty(ButtonAppearance,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonAppearance",filename:"src/components/Button/Button.styles.ts"}});var _=function(e){return{minimal:{default:{backgroundColor:e.colors.background.content,color:e.colors.text.default},danger:{backgroundColor:e.colors.background.content,color:e.colors.text.danger},primary:{backgroundColor:e.colors.background.content,color:e.colors.text.primary},secondary:{backgroundColor:e.colors.background.content,color:e.colors.text.secondary}},primary:{default:{backgroundColor:e.colors.button.default,color:e.colors.button.defaultText,loadingBackgroundColor:e.colors.background.overlay},danger:{backgroundColor:e.colors.button.danger,color:e.colors.button.dangerText,loadingBackgroundColor:e.colors.background.dangerLight},primary:{backgroundColor:e.colors.button.primary,color:e.colors.button.primaryText,loadingBackgroundColor:e.colors.background.primaryLight},secondary:{backgroundColor:e.colors.button.secondary,color:e.colors.button.secondaryText,loadingBackgroundColor:e.colors.background.secondaryLight}},outline:{default:{backgroundColor:e.colors.background.content,borderColor:e.colors.text.default,borderWidth:3,color:e.colors.text.default},danger:{backgroundColor:e.colors.background.content,borderColor:e.colors.border.danger,borderWidth:3,color:e.colors.text.danger},primary:{backgroundColor:e.colors.background.content,borderColor:e.colors.border.primary,borderWidth:3,color:e.colors.text.primary},secondary:{backgroundColor:e.colors.background.content,borderColor:e.colors.border.secondary,borderWidth:3,color:e.colors.text.secondary}}}};_&&_===Object(_)&&Object.isExtensible(_)&&Object.defineProperty(_,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getButtonAppearances",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof ButtonStyles&&ButtonStyles&&ButtonStyles===Object(ButtonStyles)&&Object.isExtensible(ButtonStyles)&&Object.defineProperty(ButtonStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonStyles",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof GetButtonStyles&&GetButtonStyles&&GetButtonStyles===Object(GetButtonStyles)&&Object.isExtensible(GetButtonStyles)&&Object.defineProperty(GetButtonStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetButtonStyles",filename:"src/components/Button/Button.styles.ts"}});var T=function(e,t){var o=e.appearance,r=void 0===o?"primary":o,n=e.color,a=void 0===n?"default":n,l=e.iconAfter,i=e.iconBefore,s=e.isDisabled,c=e.isLoading,u=e.size,d=void 0===u?"medium":u,b=!!l,m=!!i,f=_(t)[r][a],p=f.color,g=f.loadingBackgroundColor,y=Object(C.a)(f,["color","loadingBackgroundColor"]);return{buttonContentWrapperStyle:{paddingLeft:m?8:0,paddingRight:b?8:0},innerButtonWrapperStyle:{alignItems:"center",flexDirection:"row",height:"100%",justifyContent:"center"},textStyle:{alignItems:"center",color:s?t.colors.text.muted:p,display:"flex",fontWeight:"600",justifyContent:"center",textAlign:"center"},touchableStyle:Object(O.a)({borderRadius:t.controlBorderRadius[d],height:t.controlHeights[d],paddingLeft:2*t.controlPaddings[d],paddingRight:2*t.controlPaddings[d]},y,s?{backgroundColor:t.colors.button.disabled}:Object(O.a)({},c?{backgroundColor:g}:{}))}};T&&T===Object(T)&&Object.isExtensible(T)&&Object.defineProperty(T,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getButtonStyles",filename:"src/components/Button/Button.styles.ts"}}),o.d(t,"a",function(){return P});var S="/home/travis/build/WeTrustPlatform/paramount/src/components/Button/Button.tsx";"undefined"!==typeof ButtonProps&&ButtonProps&&ButtonProps===Object(ButtonProps)&&Object.isExtensible(ButtonProps)&&Object.defineProperty(ButtonProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonProps",filename:"src/components/Button/Button.tsx"}});var P=function(e){var t=e.getStyles,o=e.iconAfter,a=e.iconBefore,u=e.isDisabled,d=void 0!==u&&u,b=e.isLoading,m=void 0!==b&&b,f=e.onPress,p=void 0===f?function(){}:f,g=e.testID,y=e.accessibilityHint,h=e.accessibilityLabel,x=e.accessible,j=void 0===x||x,O=Object(s.a)(),C=Object(c.a)(T,t,O.components.getButtonStyles)(e,O),_=C.touchableStyle,P=C.textStyle,B=C.innerButtonWrapperStyle,k=C.buttonContentWrapperStyle;return n.createElement(l.a,{accessibilityRole:"button",disabled:!(!d&&!m),onPress:p,style:_,testID:g,accessibilityHint:y,accessibilityLabel:h,accessible:j,__source:{fileName:S,lineNumber:125}},n.createElement(i.a,{style:B,__source:{fileName:S,lineNumber:135}},a,n.createElement(i.a,{style:k,__source:{fileName:S,lineNumber:137}},n.createElement(v,Object(r.a)({},e,{textStyle:P,__source:{fileName:S,lineNumber:138}}))),o))};"undefined"!==typeof P&&P&&P===Object(P)&&Object.isExtensible(P)&&Object.defineProperty(P,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Button",filename:"src/components/Button/Button.tsx"}}),"undefined"!==typeof ButtonContentProps&&ButtonContentProps&&ButtonContentProps===Object(ButtonContentProps)&&Object.isExtensible(ButtonContentProps)&&Object.defineProperty(ButtonContentProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonContentProps",filename:"src/components/Button/Button.tsx"}});var v=function(e){var t=e.isLoading,o=e.iconLoading,r=e.icon,a=e.title,l=e.textStyle,i=e.size;return t?n.createElement(n.Fragment,null,o||n.createElement(x,{color:l.color,__source:{fileName:S,lineNumber:154}})):r?n.createElement(n.Fragment,null,r):a?n.createElement(j.a,{size:i,getStyles:function(){return{textStyle:l}},__source:{fileName:S,lineNumber:159}},a):n.createElement(n.Fragment,null)}},"./src/components/Typography/Text.styles.ts":function(e,t,o){"use strict";o.d(t,"a",function(){return n}),o.d(t,"b",function(){return a}),o.d(t,"c",function(){return i});var r=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");"undefined"!==typeof TextStyles&&TextStyles&&TextStyles===Object(TextStyles)&&Object.isExtensible(TextStyles)&&Object.defineProperty(TextStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextStyles",filename:"src/components/Typography/Text.styles.ts"}}),"undefined"!==typeof GetTextStyles&&GetTextStyles&&GetTextStyles===Object(GetTextStyles)&&Object.isExtensible(GetTextStyles)&&Object.defineProperty(GetTextStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetTextStyles",filename:"src/components/Typography/Text.styles.ts"}});var n=function(e){return function(t){if(t)return e[t]||t}};"undefined"!==typeof n&&n&&n===Object(n)&&Object.isExtensible(n)&&Object.defineProperty(n,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getFontWeight",filename:"src/components/Typography/Text.styles.ts"}});var a=function(e){return function(t){return e[t]||t}};"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTextColor",filename:"src/components/Typography/Text.styles.ts"}});var l=function(e){return function(t){return e[t]||{fontSize:t}}};l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTextSize",filename:"src/components/Typography/Text.styles.ts"}});var i=function(e,t){var o=e.color,i=void 0===o?"default":o,s=e.size,c=void 0===s?"medium":s,u=e.align,d=void 0===u?"left":u,b=e.weight,m=e.isItalic,f=void 0!==m&&m,p=e.transform,g=l(t.textSizes)(c);return{textStyle:Object(r.a)({},g,{color:a(t.colors.text)(i),fontFamily:t.fontFamilies.text,fontWeight:n(t.fontWeights)(b)||g.fontWeight,textAlign:d},f&&{fontStyle:"italic"},p&&{textTransform:p})}};"undefined"!==typeof i&&i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTextStyles",filename:"src/components/Typography/Text.styles.ts"}})},"./src/components/Typography/Text.tsx":function(e,t,o){"use strict";o.d(t,"a",function(){return u});var r=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),n=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=o("./node_modules/react/index.js"),l=o("./node_modules/react-native-web/dist/exports/Text/index.js"),i=o("./src/theme/Theme.tsx"),s=o("./src/utils/mergeStyles.ts"),c=o("./src/components/Typography/Text.styles.ts");"undefined"!==typeof TextProps&&TextProps&&TextProps===Object(TextProps)&&Object.isExtensible(TextProps)&&Object.defineProperty(TextProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextProps",filename:"src/components/Typography/Text.tsx"}});var u=function(e){var t=e.children,o=(e.color,e.size,e.align,e.weight,e.getStyles),u=(e.isItalic,e.transform,Object(n.a)(e,["children","color","size","align","weight","getStyles","isItalic","transform"])),d=Object(i.a)(),b=Object(s.a)(c.c,o,d.components.getTextStyles)(e,d).textStyle;return a.createElement(l.a,Object(r.a)({style:b},u,{__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Typography/Text.tsx",lineNumber:75}}),t)};"undefined"!==typeof u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Text",filename:"src/components/Typography/Text.tsx"}})},"./src/theme/Theme.tsx":function(e,t,o){"use strict";var r=o("./node_modules/deepmerge/dist/umd.js"),n=o.n(r),a=o("./node_modules/react/index.js"),l=o.n(a),i=o("./node_modules/react-native-web/dist/exports/Platform/index.js");"undefined"!==typeof ColorPalette&&ColorPalette&&ColorPalette===Object(ColorPalette)&&Object.isExtensible(ColorPalette)&&Object.defineProperty(ColorPalette,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ColorPalette",filename:"src/theme/palette.ts"}}),"undefined"!==typeof Palette&&Palette&&Palette===Object(Palette)&&Object.isExtensible(Palette)&&Object.defineProperty(Palette,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Palette",filename:"src/theme/palette.ts"}});var s={lightest:"#fafafa",light:"#eeeeee",base:"#cccccc",dark:"#a7a7a7",darkest:"#7e7e7e"},c={lightest:"#e5f5ff",light:"#ceecff",base:"#1ca5F7",dark:"#59a9de",darkest:"#33495f"},u={lightest:"#f9e1de",light:"#f9aa9f",base:"#d26557",dark:"#bb584e",darkest:"#b74033"},d={lightest:"#fce8cf",light:"#f2c58a",base:"#f3b058",dark:"#ec8e30",darkest:"#b26500"},b={lightest:"#fef8e7",light:"#fbe6a2",base:"#f7d154",dark:"#d1b047",darkest:"#7e6514"},m={lightest:"#eafff3",light:"#c2edd5",base:"#54bf84",dark:"#42a46e",darkest:"#16a054"},f={lightest:"#d6fcf7",light:"#c0f9f2",base:"#67c6bb",dark:"#3fa296",darkest:"#1b877a"},p={lightest:"#f8f7fc",light:"#eae7f8",base:"#735dd0",dark:"#37248f",darkest:"#37248f"};"undefined"!==typeof purple&&purple&&purple===Object(purple)&&Object.isExtensible(purple)&&Object.defineProperty(purple,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"purple",filename:"src/theme/palette.ts"}}),"undefined"!==typeof teal&&teal&&teal===Object(teal)&&Object.isExtensible(teal)&&Object.defineProperty(teal,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"teal",filename:"src/theme/palette.ts"}}),"undefined"!==typeof green&&green&&green===Object(green)&&Object.isExtensible(green)&&Object.defineProperty(green,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"green",filename:"src/theme/palette.ts"}}),"undefined"!==typeof yellow&&yellow&&yellow===Object(yellow)&&Object.isExtensible(yellow)&&Object.defineProperty(yellow,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"yellow",filename:"src/theme/palette.ts"}}),"undefined"!==typeof orange&&orange&&orange===Object(orange)&&Object.isExtensible(orange)&&Object.defineProperty(orange,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"orange",filename:"src/theme/palette.ts"}}),"undefined"!==typeof red&&red&&red===Object(red)&&Object.isExtensible(red)&&Object.defineProperty(red,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"red",filename:"src/theme/palette.ts"}}),"undefined"!==typeof blue&&blue&&blue===Object(blue)&&Object.isExtensible(blue)&&Object.defineProperty(blue,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"blue",filename:"src/theme/palette.ts"}}),"undefined"!==typeof neutral&&neutral&&neutral===Object(neutral)&&Object.isExtensible(neutral)&&Object.defineProperty(neutral,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"neutral",filename:"src/theme/palette.ts"}});var g={small:4,medium:4,large:4},y={background:{base:"white",content:"white",overlay:"rgba(0,0,0,0.3)",greyLight:s.lightest,greyDefault:"#F5F6F7",greyDark:s.light,primaryLight:f.lightest,primaryDefault:f.base,primaryDark:f.dark,secondaryLight:d.lightest,secondaryDefault:d.base,secondaryDark:d.dark,dangerLight:u.lightest,dangerDefault:u.base,dangerDark:u.dark,infoLight:c.lightest,infoDefault:c.base,infoDark:c.dark,successLight:m.lightest,successDefault:m.base,successDark:m.dark,warningLight:d.lightest,warningDefault:d.base,warningDark:d.dark},border:{default:s.light,primary:f.darkest,secondary:d.darkest,danger:u.darkest,info:c.darkest,success:m.darkest,warning:d.darkest},button:{disabled:s.light,disabledText:s.darkest,default:s.lightest,defaultText:s.darkest,primary:f.base,primaryText:"white",secondary:d.base,secondaryText:"white",danger:u.base,dangerText:"white"},text:{link:s.darkest,default:s.darkest,muted:s.dark,white:"white",selected:"white",primary:f.darkest,secondary:d.darkest,danger:u.darkest,info:c.darkest,success:m.darkest,warning:d.darkest}},h=[{elevation:0,shadowColor:s.dark,shadowOffset:{width:0,height:0},shadowOpacity:0,shadowRadius:0},{elevation:1,shadowColor:s.dark,shadowOffset:{width:1,height:1},shadowOpacity:.15,shadowRadius:8},{elevation:2,shadowColor:s.dark,shadowOffset:{width:2,height:2},shadowOpacity:.2,shadowRadius:10},{elevation:3,shadowColor:s.dark,shadowOffset:{width:3,height:3},shadowOpacity:.25,shadowRadius:12},{elevation:4,shadowColor:s.dark,shadowOffset:{width:4,height:4},shadowOpacity:.3,shadowRadius:8},{elevation:5,shadowColor:s.dark,shadowOffset:{width:5,height:5},shadowOpacity:.35,shadowRadius:8}],x={colors:y,fills:{solid:{neutral:{backgroundColor:s.base,color:"white"},blue:{backgroundColor:c.base,color:"white"},red:{backgroundColor:u.base,color:"white"},orange:{backgroundColor:d.base,color:"white"},yellow:{backgroundColor:b.base,color:b.darkest},green:{backgroundColor:m.base,color:"white"},teal:{backgroundColor:f.base,color:"white"},purple:{backgroundColor:p.base,color:"white"}},subtle:{neutral:{backgroundColor:s.light,color:s.darkest},blue:{backgroundColor:c.light,color:c.darkest},red:{backgroundColor:u.light,color:u.darkest},orange:{backgroundColor:d.light,color:d.darkest},yellow:{backgroundColor:b.light,color:b.darkest},green:{backgroundColor:m.light,color:m.darkest},teal:{backgroundColor:f.light,color:f.darkest},purple:{backgroundColor:p.light,color:p.darkest}}},fontFamilies:"web"===i.a.OS?{heading:'"SF UI Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',mono:'"SF Mono", "Monaco", "Inconsolata", "Fira Mono", "Droid Sans Mono", "Source Code Pro", monospace',text:'"SF UI Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'}:{heading:"System",mono:"System",text:"System"},fontWeights:{bold:"bold",light:"300",normal:"normal"},headingSizes:{xxxlarge:{fontSize:35,letterSpacing:-.2,lineHeight:40},xxlarge:{fontSize:29,letterSpacing:-.2,lineHeight:32},xlarge:{fontSize:24,letterSpacing:-.07,lineHeight:28},large:{fontSize:20,letterSpacing:-.07,lineHeight:24},medium:{fontSize:16,letterSpacing:-.05,lineHeight:20},small:{fontSize:14,letterSpacing:-.05,lineHeight:20}},paragraphSizes:{small:{fontSize:14,lineHeight:24},medium:{fontSize:16,lineHeight:21},large:{fontSize:18,lineHeight:18}},textSizes:{large:{fontSize:20},medium:{fontSize:16},small:{fontSize:14},xsmall:{fontSize:12}},elevations:h,controlBorderRadius:g,controlHeights:{small:40,medium:48,large:56},controlPaddings:{small:8,medium:16,large:24},containerShapes:{circle:{borderRadius:999},pill:{borderRadius:999},rounded:{borderRadius:g.medium},roundedBottom:{borderBottomLeftRadius:g.medium,borderBottomRightRadius:g.medium},roundedLeft:{borderBottomLeftRadius:g.medium,borderTopLeftRadius:g.medium},roundedRight:{borderBottomRightRadius:g.medium,borderTopRightRadius:g.medium},roundedTop:{borderTopLeftRadius:g.medium,borderTopRightRadius:g.medium},square:{borderRadius:0}},components:{}};"undefined"!==typeof x&&x&&x===Object(x)&&Object.isExtensible(x)&&Object.defineProperty(x,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"defaultTheme",filename:"src/theme/defaultTheme.ts"}}),o.d(t,"a",function(){return _});"undefined"!==typeof TextSizes&&TextSizes&&TextSizes===Object(TextSizes)&&Object.isExtensible(TextSizes)&&Object.defineProperty(TextSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof TextSize&&TextSize&&TextSize===Object(TextSize)&&Object.isExtensible(TextSize)&&Object.defineProperty(TextSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof HeadingSizes&&HeadingSizes&&HeadingSizes===Object(HeadingSizes)&&Object.isExtensible(HeadingSizes)&&Object.defineProperty(HeadingSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HeadingSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof HeadingSize&&HeadingSize&&HeadingSize===Object(HeadingSize)&&Object.isExtensible(HeadingSize)&&Object.defineProperty(HeadingSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HeadingSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ParagraphSizes&&ParagraphSizes&&ParagraphSizes===Object(ParagraphSizes)&&Object.isExtensible(ParagraphSizes)&&Object.defineProperty(ParagraphSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ParagraphSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ParagraphSize&&ParagraphSize&&ParagraphSize===Object(ParagraphSize)&&Object.isExtensible(ParagraphSize)&&Object.defineProperty(ParagraphSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ParagraphSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontFamilies&&FontFamilies&&FontFamilies===Object(FontFamilies)&&Object.isExtensible(FontFamilies)&&Object.defineProperty(FontFamilies,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontFamilies",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontFamily&&FontFamily&&FontFamily===Object(FontFamily)&&Object.isExtensible(FontFamily)&&Object.defineProperty(FontFamily,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontFamily",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof RNFontWeight&&RNFontWeight&&RNFontWeight===Object(RNFontWeight)&&Object.isExtensible(RNFontWeight)&&Object.defineProperty(RNFontWeight,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"RNFontWeight",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontWeights&&FontWeights&&FontWeights===Object(FontWeights)&&Object.isExtensible(FontWeights)&&Object.defineProperty(FontWeights,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontWeights",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontWeight&&FontWeight&&FontWeight===Object(FontWeight)&&Object.isExtensible(FontWeight)&&Object.defineProperty(FontWeight,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontWeight",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof TextColors&&TextColors&&TextColors===Object(TextColors)&&Object.isExtensible(TextColors)&&Object.defineProperty(TextColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof TextColor&&TextColor&&TextColor===Object(TextColor)&&Object.isExtensible(TextColor)&&Object.defineProperty(TextColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ButtonColors&&ButtonColors&&ButtonColors===Object(ButtonColors)&&Object.isExtensible(ButtonColors)&&Object.defineProperty(ButtonColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ButtonColorsWithText&&ButtonColorsWithText&&ButtonColorsWithText===Object(ButtonColorsWithText)&&Object.isExtensible(ButtonColorsWithText)&&Object.defineProperty(ButtonColorsWithText,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColorsWithText",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ButtonColor&&ButtonColor&&ButtonColor===Object(ButtonColor)&&Object.isExtensible(ButtonColor)&&Object.defineProperty(ButtonColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BorderColors&&BorderColors&&BorderColors===Object(BorderColors)&&Object.isExtensible(BorderColors)&&Object.defineProperty(BorderColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BorderColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BorderColor&&BorderColor&&BorderColor===Object(BorderColor)&&Object.isExtensible(BorderColor)&&Object.defineProperty(BorderColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BorderColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BackgroundColors&&BackgroundColors&&BackgroundColors===Object(BackgroundColors)&&Object.isExtensible(BackgroundColors)&&Object.defineProperty(BackgroundColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BackgroundColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BackgroundColor&&BackgroundColor&&BackgroundColor===Object(BackgroundColor)&&Object.isExtensible(BackgroundColor)&&Object.defineProperty(BackgroundColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BackgroundColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Colors&&Colors&&Colors===Object(Colors)&&Object.isExtensible(Colors)&&Object.defineProperty(Colors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Colors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Elevations&&Elevations&&Elevations===Object(Elevations)&&Object.isExtensible(Elevations)&&Object.defineProperty(Elevations,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Elevations",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Elevation&&Elevation&&Elevation===Object(Elevation)&&Object.isExtensible(Elevation)&&Object.defineProperty(Elevation,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Elevation",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ControlSizes&&ControlSizes&&ControlSizes===Object(ControlSizes)&&Object.isExtensible(ControlSizes)&&Object.defineProperty(ControlSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ControlSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ControlSize&&ControlSize&&ControlSize===Object(ControlSize)&&Object.isExtensible(ControlSize)&&Object.defineProperty(ControlSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ControlSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FillColorProps&&FillColorProps&&FillColorProps===Object(FillColorProps)&&Object.isExtensible(FillColorProps)&&Object.defineProperty(FillColorProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FillColorProps",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FillColors&&FillColors&&FillColors===Object(FillColors)&&Object.isExtensible(FillColors)&&Object.defineProperty(FillColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FillColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FillColor&&FillColor&&FillColor===Object(FillColor)&&Object.isExtensible(FillColor)&&Object.defineProperty(FillColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FillColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Fills&&Fills&&Fills===Object(Fills)&&Object.isExtensible(Fills)&&Object.defineProperty(Fills,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Fills",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ContainerShapes&&ContainerShapes&&ContainerShapes===Object(ContainerShapes)&&Object.isExtensible(ContainerShapes)&&Object.defineProperty(ContainerShapes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ContainerShapes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ContainerShape&&ContainerShape&&ContainerShape===Object(ContainerShape)&&Object.isExtensible(ContainerShape)&&Object.defineProperty(ContainerShape,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ContainerShape",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Theme&&Theme&&Theme===Object(Theme)&&Object.isExtensible(Theme)&&Object.defineProperty(Theme,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Theme",filename:"src/theme/Theme.tsx"}});var j=l.a.createContext(x);"undefined"!==typeof j&&j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ThemeContext",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ThemeProviderProps&&ThemeProviderProps&&ThemeProviderProps===Object(ThemeProviderProps)&&Object.isExtensible(ThemeProviderProps)&&Object.defineProperty(ThemeProviderProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ThemeProviderProps",filename:"src/theme/Theme.tsx"}});var O=function(e){return e?n()(x,e):x};O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"createTheme",filename:"src/theme/Theme.tsx"}});var C=function(e){var t=e.children,o=e.value,r=O(void 0===o?x:o);return l.a.createElement(j.Provider,{value:r,__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/theme/Theme.tsx",lineNumber:315}},t)};C&&C===Object(C)&&Object.isExtensible(C)&&Object.defineProperty(C,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ThemeProvider",filename:"src/theme/Theme.tsx"}});var _=function(){return l.a.useContext(j)};"undefined"!==typeof _&&_&&_===Object(_)&&Object.isExtensible(_)&&Object.defineProperty(_,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useTheme",filename:"src/theme/Theme.tsx"}})},"./src/utils/mergeStyles.ts":function(e,t,o){"use strict";o.d(t,"a",function(){return a});var r=o("./node_modules/deepmerge/dist/umd.js"),n=o.n(r);"undefined"!==typeof GetStyles&&GetStyles&&GetStyles===Object(GetStyles)&&Object.isExtensible(GetStyles)&&Object.defineProperty(GetStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetStyles",filename:"src/utils/mergeStyles.ts"}}),"undefined"!==typeof ArgumentTypes&&ArgumentTypes&&ArgumentTypes===Object(ArgumentTypes)&&Object.isExtensible(ArgumentTypes)&&Object.defineProperty(ArgumentTypes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ArgumentTypes",filename:"src/utils/mergeStyles.ts"}}),"undefined"!==typeof ReplaceReturnType&&ReplaceReturnType&&ReplaceReturnType===Object(ReplaceReturnType)&&Object.isExtensible(ReplaceReturnType)&&Object.defineProperty(ReplaceReturnType,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ReplaceReturnType",filename:"src/utils/mergeStyles.ts"}});var a=function(e,t,o){return function(r,a){var l=[e(r,a)];return o&&l.push(o(r,a)),t&&l.push(t(r,a)),n.a.all(l)}};"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"mergeStyles",filename:"src/utils/mergeStyles.ts"}})}}]);
//# sourceMappingURL=1.f1c3b6e697a5fb6b03af.js.map