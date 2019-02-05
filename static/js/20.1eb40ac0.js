(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"./src/components/Counter/Counter.mdx":function(e,n,t){var r=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(t("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),i=r(t("./node_modules/@babel/runtime/helpers/classCallCheck.js")),l=r(t("./node_modules/@babel/runtime/helpers/createClass.js")),o=r(t("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),u=r(t("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),d=r(t("./node_modules/@babel/runtime/helpers/inherits.js")),s=r(t("./node_modules/react/index.js")),c=t("./node_modules/@mdx-js/tag/dist/index.js"),m=t("./node_modules/docz/dist/index.m.js"),p=r(t("./src/components/Counter/Counter.tsx")),f=t("./src/components/Layout/index.ts"),y=t("./node_modules/react-powerplug/dist/react-powerplug.esm.js"),g=function(e){function n(e){var t;return(0,i.default)(this,n),(t=(0,o.default)(this,(0,u.default)(n).call(this,e))).layout=null,t}return(0,d.default)(n,e),(0,l.default)(n,[{key:"render",value:function(){var e=this.props,n=e.components,t=(0,a.default)(e,["components"]);return s.default.createElement(c.MDXTag,{name:"wrapper",components:n},s.default.createElement(c.MDXTag,{name:"h2",components:n,props:{id:"usage"}},"Usage"),s.default.createElement(c.MDXTag,{name:"h3",components:n,props:{id:"counter"}},"Counter"),s.default.createElement(m.Playground,{__position:0,__code:"<CounterContainer initial={1}>\n  {({ count, inc, dec }) => (\n    <Counter count={count} onIncrement={inc} onDecrement={dec} />\n  )}\n</CounterContainer>",__scope:{props:this?this.props:t,Counter:p.default,Spacing:f.Spacing,CounterContainer:y.Counter}},s.default.createElement(y.Counter,{initial:1},function(e){var n=e.count,t=e.inc,r=e.dec;return s.default.createElement(p.default,{count:n,onIncrement:t,onDecrement:r})})),s.default.createElement(c.MDXTag,{name:"h3",components:n,props:{id:"counter-with-min-and-max-count"}},"Counter with min and max count"),s.default.createElement(m.Playground,{__position:1,__code:"<CounterContainer initial={0}>\n  {({ count, inc, dec }) => (\n    <Counter\n      count={count}\n      onDecrement={dec}\n      onIncrement={inc}\n      min={0}\n      max={10}\n    />\n  )}\n</CounterContainer>",__scope:{props:this?this.props:t,Counter:p.default,Spacing:f.Spacing,CounterContainer:y.Counter}},s.default.createElement(y.Counter,{initial:0},function(e){var n=e.count,t=e.inc,r=e.dec;return s.default.createElement(p.default,{count:n,onDecrement:r,onIncrement:t,min:0,max:10})})),s.default.createElement(c.MDXTag,{name:"h2",components:n,props:{id:"props"}},"Props"),s.default.createElement(m.PropsTable,{of:p.default}))}}]),n}(s.default.Component);n.default=g},"./src/components/Counter/Counter.styles.ts":function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getCounterStyles=n.getCounterVariables=void 0;var t=function(e){return{container:{display:"flex",flexDirection:"row"},count:{justifyContent:"center"},counter:{alignItems:"center",borderColor:e.colors.border.primary,borderRadius:999,borderWidth:1,display:"flex",height:40,justifyContent:"center",width:40},disabled:{borderColor:e.colors.border.muted}}};n.getCounterVariables=t;var r=function(e){var n=t(e),r=n.container,a=n.counter;return{containerStyle:r,countStyle:n.count,counterStyle:a,disabledStyle:n.disabled}};n.getCounterStyles=r;try{t.displayName="getCounterVariables",t.__docgenInfo={description:"",displayName:"getCounterVariables",props:{colors:{defaultValue:null,description:"",name:"colors",required:!0,type:{name:"Colors"}},fills:{defaultValue:null,description:"",name:"fills",required:!0,type:{name:"Fills"}},fontFamilies:{defaultValue:null,description:"",name:"fontFamilies",required:!0,type:{name:"FontFamilies"}},fontWeights:{defaultValue:null,description:"",name:"fontWeights",required:!0,type:{name:"FontWeights"}},headingSizes:{defaultValue:null,description:"",name:"headingSizes",required:!0,type:{name:"HeadingSizes"}},paragraphSizes:{defaultValue:null,description:"",name:"paragraphSizes",required:!0,type:{name:"ParagraphSizes"}},textSizes:{defaultValue:null,description:"",name:"textSizes",required:!0,type:{name:"TextSizes"}},elevations:{defaultValue:null,description:"",name:"elevations",required:!0,type:{name:"ViewStyle[]"}},controlPaddings:{defaultValue:null,description:"",name:"controlPaddings",required:!0,type:{name:"ControlSizes"}},controlHeights:{defaultValue:null,description:"",name:"controlHeights",required:!0,type:{name:"ControlSizes"}},controlBorderRadius:{defaultValue:null,description:"",name:"controlBorderRadius",required:!0,type:{name:"ControlSizes"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Counter/Counter.styles.ts#getCounterVariables"]={docgenInfo:t.__docgenInfo,name:"getCounterVariables",path:"src/components/Counter/Counter.styles.ts#getCounterVariables"})}catch(a){}try{r.displayName="getCounterStyles",r.__docgenInfo={description:"",displayName:"getCounterStyles",props:{colors:{defaultValue:null,description:"",name:"colors",required:!0,type:{name:"Colors"}},fills:{defaultValue:null,description:"",name:"fills",required:!0,type:{name:"Fills"}},fontFamilies:{defaultValue:null,description:"",name:"fontFamilies",required:!0,type:{name:"FontFamilies"}},fontWeights:{defaultValue:null,description:"",name:"fontWeights",required:!0,type:{name:"FontWeights"}},headingSizes:{defaultValue:null,description:"",name:"headingSizes",required:!0,type:{name:"HeadingSizes"}},paragraphSizes:{defaultValue:null,description:"",name:"paragraphSizes",required:!0,type:{name:"ParagraphSizes"}},textSizes:{defaultValue:null,description:"",name:"textSizes",required:!0,type:{name:"TextSizes"}},elevations:{defaultValue:null,description:"",name:"elevations",required:!0,type:{name:"ViewStyle[]"}},controlPaddings:{defaultValue:null,description:"",name:"controlPaddings",required:!0,type:{name:"ControlSizes"}},controlHeights:{defaultValue:null,description:"",name:"controlHeights",required:!0,type:{name:"ControlSizes"}},controlBorderRadius:{defaultValue:null,description:"",name:"controlBorderRadius",required:!0,type:{name:"ControlSizes"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Counter/Counter.styles.ts#getCounterStyles"]={docgenInfo:r.__docgenInfo,name:"getCounterStyles",path:"src/components/Counter/Counter.styles.ts#getCounterStyles"})}catch(a){}},"./src/components/Counter/Counter.tsx":function(e,n,t){var r=t("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),a=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(n,"__esModule",{value:!0}),n.default=n.Counter=void 0;var i=a(t("./node_modules/@babel/runtime/helpers/objectSpread.js")),l=r(t("./node_modules/react/index.js")),o=t("./node_modules/react-native-web/dist/index.js"),u=t("./src/icons/index.ts"),d=t("./src/theme/index.ts"),s=t("./src/utils/mergeStyles.ts"),c=t("./src/components/Layout/index.ts"),m=t("./src/components/Counter/Counter.styles.ts"),p=(0,d.withTheme)(function(e){var n=e.count,t=e.component,r=e.max,a=e.min,d=e.onIncrement,p=e.onDecrement,f=e.getStyles,y=e.theme,g=(0,s.mergeStyles)(m.getCounterStyles,f)(y),b=g.containerStyle,S=g.counterStyle,h=g.countStyle,V=g.disabledStyle,C=a===n,q=r===n;return l.createElement(o.View,{style:b},l.createElement(c.Spacing,{paddingRight:2},l.createElement(o.TouchableOpacity,{activeOpacity:.7,style:(0,i.default)({},S,C&&V),disabled:C,onPress:C?void 0:p},l.createElement(u.Icon,{name:"minus",size:16,color:C?y.colors.text.muted:y.colors.text.primary}))),t||l.createElement(o.View,{style:h},n),l.createElement(c.Spacing,{paddingLeft:2},l.createElement(o.TouchableOpacity,{activeOpacity:.7,style:(0,i.default)({},S,q&&V),disabled:q,onPress:q?void 0:d},l.createElement(u.Icon,{name:"plus",size:16,color:q?y.colors.text.muted:y.colors.text.primary}))))});n.Counter=p;var f=p;n.default=f;try{p.displayName="Counter",p.__docgenInfo={description:"",displayName:"Counter",props:{count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"number"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ReactNode"}},onIncrement:{defaultValue:null,description:"",name:"onIncrement",required:!1,type:{name:"() => void"}},onDecrement:{defaultValue:null,description:"",name:"onDecrement",required:!1,type:{name:"() => void"}},getStyles:{defaultValue:null,description:"Inline styles for components",name:"getStyles",required:!1,type:{name:"ReplaceReturnType<GetCounterStyles, DeepPartial<CounterStyles>>"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Counter/Counter.tsx#Counter"]={docgenInfo:p.__docgenInfo,name:"Counter",path:"src/components/Counter/Counter.tsx#Counter"})}catch(y){}try{__class.displayName="__class",__class.__docgenInfo={description:"",displayName:"__class",props:{count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"number"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ReactNode"}},onIncrement:{defaultValue:null,description:"",name:"onIncrement",required:!1,type:{name:"() => void"}},onDecrement:{defaultValue:null,description:"",name:"onDecrement",required:!1,type:{name:"() => void"}},getStyles:{defaultValue:null,description:"Inline styles for components",name:"getStyles",required:!1,type:{name:"ReplaceReturnType<GetCounterStyles, DeepPartial<CounterStyles>>"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Counter/Counter.tsx#__class"]={docgenInfo:__class.__docgenInfo,name:"__class",path:"src/components/Counter/Counter.tsx#__class"})}catch(y){}},"./src/components/Layout/index.ts":function(e,n,t){var r=t("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"Box",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(n,"BoxProps",{enumerable:!0,get:function(){return a.BoxProps}}),Object.defineProperty(n,"Spacing",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(n,"SpacingProps",{enumerable:!0,get:function(){return i.SpacingProps}});var a=r(t("./src/components/Layout/Box.tsx")),i=r(t("./src/components/Layout/Spacing.tsx"));try{__class.displayName="__class",__class.__docgenInfo={description:"",displayName:"__class",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"ViewStyle"}},elevation:{defaultValue:null,description:"Sets the elevation of a view, using Android's underlying\n[elevation API](https://developer.android.com/training/material/shadows-clipping.html#Elevation).\nThis adds a drop shadow to the item and affects z-order for overlapping views.\nOnly supported on Android 5.0+, has no effect on earlier versions.",name:"elevation",required:!1,type:{name:"0 | 1 | 2 | 3 | 4 | 5 | 6"}},shape:{defaultValue:null,description:"",name:"shape",required:!1,type:{name:"Shape"}},backfaceVisibility:{defaultValue:null,description:"",name:"backfaceVisibility",required:!1,type:{name:'"visible" | "hidden"'}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string"}},borderBottomColor:{defaultValue:null,description:"",name:"borderBottomColor",required:!1,type:{name:"string"}},borderBottomEndRadius:{defaultValue:null,description:"",name:"borderBottomEndRadius",required:!1,type:{name:"number"}},borderBottomLeftRadius:{defaultValue:null,description:"",name:"borderBottomLeftRadius",required:!1,type:{name:"number"}},borderBottomRightRadius:{defaultValue:null,description:"",name:"borderBottomRightRadius",required:!1,type:{name:"number"}},borderBottomStartRadius:{defaultValue:null,description:"",name:"borderBottomStartRadius",required:!1,type:{name:"number"}},borderBottomWidth:{defaultValue:null,description:"",name:"borderBottomWidth",required:!1,type:{name:"number"}},borderColor:{defaultValue:null,description:"",name:"borderColor",required:!1,type:{name:"string"}},borderEndColor:{defaultValue:null,description:"",name:"borderEndColor",required:!1,type:{name:"string"}},borderLeftColor:{defaultValue:null,description:"",name:"borderLeftColor",required:!1,type:{name:"string"}},borderLeftWidth:{defaultValue:null,description:"",name:"borderLeftWidth",required:!1,type:{name:"number"}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"number"}},borderRightColor:{defaultValue:null,description:"",name:"borderRightColor",required:!1,type:{name:"string"}},borderRightWidth:{defaultValue:null,description:"",name:"borderRightWidth",required:!1,type:{name:"number"}},borderStartColor:{defaultValue:null,description:"",name:"borderStartColor",required:!1,type:{name:"string"}},borderStyle:{defaultValue:null,description:"",name:"borderStyle",required:!1,type:{name:'"solid" | "dotted" | "dashed"'}},borderTopColor:{defaultValue:null,description:"",name:"borderTopColor",required:!1,type:{name:"string"}},borderTopEndRadius:{defaultValue:null,description:"",name:"borderTopEndRadius",required:!1,type:{name:"number"}},borderTopLeftRadius:{defaultValue:null,description:"",name:"borderTopLeftRadius",required:!1,type:{name:"number"}},borderTopRightRadius:{defaultValue:null,description:"",name:"borderTopRightRadius",required:!1,type:{name:"number"}},borderTopStartRadius:{defaultValue:null,description:"",name:"borderTopStartRadius",required:!1,type:{name:"number"}},borderTopWidth:{defaultValue:null,description:"",name:"borderTopWidth",required:!1,type:{name:"number"}},borderWidth:{defaultValue:null,description:"",name:"borderWidth",required:!1,type:{name:"number"}},opacity:{defaultValue:null,description:"",name:"opacity",required:!1,type:{name:"number"}},testID:{defaultValue:null,description:"",name:"testID",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:'"flex-start" | "flex-end" | "center" | "stretch" | "space-between" | "space-around"'}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"FlexAlignType"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:'"flex-start" | "flex-end" | "center" | "stretch" | "baseline" | "auto"'}},aspectRatio:{defaultValue:null,description:"",name:"aspectRatio",required:!1,type:{name:"number"}},borderEndWidth:{defaultValue:null,description:"",name:"borderEndWidth",required:!1,type:{name:"ReactText"}},borderStartWidth:{defaultValue:null,description:"",name:"borderStartWidth",required:!1,type:{name:"ReactText"}},bottom:{defaultValue:null,description:"",name:"bottom",required:!1,type:{name:"ReactText"}},display:{defaultValue:null,description:"",name:"display",required:!1,type:{name:'"flex" | "none"'}},end:{defaultValue:null,description:"",name:"end",required:!1,type:{name:"ReactText"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"number"}},flexBasis:{defaultValue:null,description:"",name:"flexBasis",required:!1,type:{name:"ReactText"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:'"row" | "column" | "row-reverse" | "column-reverse"'}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"number"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"number"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:'"wrap" | "nowrap" | "wrap-reverse"'}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"GridScale"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:'"flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly"'}},left:{defaultValue:null,description:"",name:"left",required:!1,type:{name:"ReactText"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"GridScale"}},marginBottom:{defaultValue:null,description:"",name:"marginBottom",required:!1,type:{name:"GridScale"}},marginEnd:{defaultValue:null,description:"",name:"marginEnd",required:!1,type:{name:"GridScale"}},marginHorizontal:{defaultValue:null,description:"",name:"marginHorizontal",required:!1,type:{name:"GridScale"}},marginLeft:{defaultValue:null,description:"",name:"marginLeft",required:!1,type:{name:"GridScale"}},marginRight:{defaultValue:null,description:"",name:"marginRight",required:!1,type:{name:"GridScale"}},marginStart:{defaultValue:null,description:"",name:"marginStart",required:!1,type:{name:"GridScale"}},marginTop:{defaultValue:null,description:"",name:"marginTop",required:!1,type:{name:"GridScale"}},marginVertical:{defaultValue:null,description:"",name:"marginVertical",required:!1,type:{name:"GridScale"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"ReactText"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"ReactText"}},minHeight:{defaultValue:null,description:"",name:"minHeight",required:!1,type:{name:"ReactText"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"ReactText"}},overflow:{defaultValue:null,description:"",name:"overflow",required:!1,type:{name:'"visible" | "hidden" | "scroll"'}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"GridScale"}},paddingBottom:{defaultValue:null,description:"",name:"paddingBottom",required:!1,type:{name:"GridScale"}},paddingEnd:{defaultValue:null,description:"",name:"paddingEnd",required:!1,type:{name:"GridScale"}},paddingHorizontal:{defaultValue:null,description:"",name:"paddingHorizontal",required:!1,type:{name:"GridScale"}},paddingLeft:{defaultValue:null,description:"",name:"paddingLeft",required:!1,type:{name:"GridScale"}},paddingRight:{defaultValue:null,description:"",name:"paddingRight",required:!1,type:{name:"GridScale"}},paddingStart:{defaultValue:null,description:"",name:"paddingStart",required:!1,type:{name:"GridScale"}},paddingTop:{defaultValue:null,description:"",name:"paddingTop",required:!1,type:{name:"GridScale"}},paddingVertical:{defaultValue:null,description:"",name:"paddingVertical",required:!1,type:{name:"GridScale"}},position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:'"absolute" | "relative"'}},right:{defaultValue:null,description:"",name:"right",required:!1,type:{name:"ReactText"}},start:{defaultValue:null,description:"",name:"start",required:!1,type:{name:"ReactText"}},top:{defaultValue:null,description:"",name:"top",required:!1,type:{name:"ReactText"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"ReactText"}},zIndex:{defaultValue:null,description:"",name:"zIndex",required:!1,type:{name:"number"}},direction:{defaultValue:null,description:"@platform ios",name:"direction",required:!1,type:{name:'"inherit" | "ltr" | "rtl"'}},shadowColor:{defaultValue:null,description:"",name:"shadowColor",required:!1,type:{name:"string"}},shadowOffset:{defaultValue:null,description:"",name:"shadowOffset",required:!1,type:{name:"{ width: number; height: number; }"}},shadowOpacity:{defaultValue:null,description:"",name:"shadowOpacity",required:!1,type:{name:"number"}},shadowRadius:{defaultValue:null,description:"",name:"shadowRadius",required:!1,type:{name:"number"}},transform:{defaultValue:null,description:"",name:"transform",required:!1,type:{name:"(PerpectiveTransform | RotateTransform | RotateXTransform | RotateYTransform | RotateZTransform | ScaleTransform | ScaleXTransform | ScaleYTransform | TranslateXTransform | TranslateYTransform | SkewXTransform | SkewYTransform)[]"}},transformMatrix:{defaultValue:null,description:"",name:"transformMatrix",required:!1,type:{name:"number[]"}},rotation:{defaultValue:null,description:"",name:"rotation",required:!1,type:{name:"number"}},scaleX:{defaultValue:null,description:"",name:"scaleX",required:!1,type:{name:"number"}},scaleY:{defaultValue:null,description:"",name:"scaleY",required:!1,type:{name:"number"}},translateX:{defaultValue:null,description:"",name:"translateX",required:!1,type:{name:"number"}},translateY:{defaultValue:null,description:"",name:"translateY",required:!1,type:{name:"number"}},gridPointMultiplier:{defaultValue:null,description:"",name:"gridPointMultiplier",required:!1,type:{name:"number"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Layout/index.ts#__class"]={docgenInfo:__class.__docgenInfo,name:"__class",path:"src/components/Layout/index.ts#__class"})}catch(l){}},"./src/icons/Icon.web.tsx":function(e,n,t){var r=t("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(t("./node_modules/react/index.js")),i=r(t("./node_modules/react-icons/fi/index.js"));n.default=function(e){var n=e.name,t=e.color,r=e.size,l=i["Fi".concat(function(e){var n=e.replace(/(\-\w)/g,function(e){return e[1].toUpperCase()});return n.charAt(0).toUpperCase()+n.slice(1)}(n))];return a.createElement(l,{color:t,size:r})};try{Iconweb.displayName="Iconweb",Iconweb.__docgenInfo={description:"",displayName:"Iconweb",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"FeatherIconName"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/Icon.web.tsx#Iconweb"]={docgenInfo:Iconweb.__docgenInfo,name:"Iconweb",path:"src/icons/Icon.web.tsx#Iconweb"})}catch(l){}},"./src/icons/index.ts":function(e,n,t){var r=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"Icon",{enumerable:!0,get:function(){return a.default}});var a=r(t("./src/icons/Icon.web.tsx"));try{icons.displayName="icons",icons.__docgenInfo={description:"",displayName:"icons",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"FeatherIconName"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/index.ts#icons"]={docgenInfo:icons.__docgenInfo,name:"icons",path:"src/icons/index.ts#icons"})}catch(i){}},"./src/utils/mergeStyles.ts":function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0}),n.mergeStyles=void 0;var r=t("./node_modules/deepmerge/dist/umd.js");n.mergeStyles=function(e,n){return function(){var t=e.apply(void 0,arguments);return n?r(t,n.apply(void 0,arguments)):t}}}}]);
//# sourceMappingURL=20.53f8020584aa06b49ed8.js.map