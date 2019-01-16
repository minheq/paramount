(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"./src/components/Divider/Divider.mdx":function(e,r,t){var n=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var a=n(t("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),i=n(t("./node_modules/@babel/runtime/helpers/classCallCheck.js")),l=n(t("./node_modules/@babel/runtime/helpers/createClass.js")),d=n(t("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),u=n(t("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),o=n(t("./node_modules/@babel/runtime/helpers/inherits.js")),s=n(t("./node_modules/react/index.js")),m=t("./node_modules/@mdx-js/tag/dist/index.js"),p=t("./node_modules/docz/dist/index.m.js"),c=n(t("./src/components/Divider/Divider.tsx")),f=t("./src/components/Layout/index.ts"),y=function(e){function r(e){var t;return(0,i.default)(this,r),(t=(0,d.default)(this,(0,u.default)(r).call(this,e))).layout=null,t}return(0,o.default)(r,e),(0,l.default)(r,[{key:"render",value:function(){var e=this.props,r=e.components,t=(0,a.default)(e,["components"]);return s.default.createElement(m.MDXTag,{name:"wrapper",components:r},s.default.createElement(m.MDXTag,{name:"h2",components:r,props:{id:"usage"}},"Usage"),s.default.createElement(m.MDXTag,{name:"h3",components:r,props:{id:"default"}},"Default"),s.default.createElement(p.Playground,{__position:0,__code:"<Box paddingVertical={40}>\n  <Divider />\n</Box>",__scope:{props:this?this.props:t,Divider:c.default,Box:f.Box}},s.default.createElement(f.Box,{paddingVertical:40},s.default.createElement(c.default,null))),s.default.createElement(m.MDXTag,{name:"h2",components:r,props:{id:"props"}},"Props"),s.default.createElement(p.PropsTable,{of:c.default}))}}]),r}(s.default.Component);r.default=y},"./src/components/Divider/Divider.styles.ts":function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.getDividerStyles=r.getDividerVariables=void 0;var t=function(e){return{color:e.colors.border.default,radius:6,size:1}};r.getDividerVariables=t;r.getDividerStyles=function(e,r){var n=e.size,a=e.color,i=e.radius,l=t(r);return{dividerStyle:{backgroundColor:a||l.color,borderRadius:i||l.radius,height:n||l.size,width:"100%"}}};try{t.displayName="getDividerVariables",t.__docgenInfo={description:"",displayName:"getDividerVariables",props:{colors:{defaultValue:null,description:"",name:"colors",required:!0,type:{name:"Colors"}},fills:{defaultValue:null,description:"",name:"fills",required:!0,type:{name:"Fills"}},fontFamilies:{defaultValue:null,description:"",name:"fontFamilies",required:!0,type:{name:"FontFamilies"}},fontWeights:{defaultValue:null,description:"",name:"fontWeights",required:!0,type:{name:"FontWeights"}},headingSizes:{defaultValue:null,description:"",name:"headingSizes",required:!0,type:{name:"HeadingSizes"}},paragraphSizes:{defaultValue:null,description:"",name:"paragraphSizes",required:!0,type:{name:"ParagraphSizes"}},textSizes:{defaultValue:null,description:"",name:"textSizes",required:!0,type:{name:"TextSizes"}},elevations:{defaultValue:null,description:"",name:"elevations",required:!0,type:{name:"ViewStyle[]"}},controlPaddings:{defaultValue:null,description:"",name:"controlPaddings",required:!0,type:{name:"ControlSizes"}},controlHeights:{defaultValue:null,description:"",name:"controlHeights",required:!0,type:{name:"ControlSizes"}},controlBorderRadius:{defaultValue:null,description:"",name:"controlBorderRadius",required:!0,type:{name:"ControlSizes"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Divider/Divider.styles.ts#getDividerVariables"]={docgenInfo:t.__docgenInfo,name:"getDividerVariables",path:"src/components/Divider/Divider.styles.ts#getDividerVariables"})}catch(n){}},"./src/components/Divider/Divider.tsx":function(e,r,t){var n=t("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(r,"__esModule",{value:!0}),r.default=r.Divider=void 0;var a=n(t("./node_modules/react/index.js")),i=t("./node_modules/react-native-web/dist/index.js"),l=t("./src/theme/index.ts"),d=t("./src/components/Divider/Divider.styles.ts"),u=(0,l.withTheme)(function(e){var r=e.theme,t=e.size,n=e.color,l=e.radius,u=e.getStyles,o=(void 0===u?d.getDividerStyles:u)({size:t,color:n,radius:l},r).dividerStyle;return a.createElement(i.View,{style:o})});r.Divider=u;var o=u;r.default=o;try{u.displayName="Divider",u.__docgenInfo={description:"",displayName:"Divider",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},radius:{defaultValue:null,description:"",name:"radius",required:!1,type:{name:"number"}},getStyles:{defaultValue:null,description:"",name:"getStyles",required:!1,type:{name:"GetDividerStyles"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Divider/Divider.tsx#Divider"]={docgenInfo:u.__docgenInfo,name:"Divider",path:"src/components/Divider/Divider.tsx#Divider"})}catch(s){}try{__class.displayName="__class",__class.__docgenInfo={description:"",displayName:"__class",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},radius:{defaultValue:null,description:"",name:"radius",required:!1,type:{name:"number"}},getStyles:{defaultValue:null,description:"",name:"getStyles",required:!1,type:{name:"GetDividerStyles"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Divider/Divider.tsx#__class"]={docgenInfo:__class.__docgenInfo,name:"__class",path:"src/components/Divider/Divider.tsx#__class"})}catch(s){}},"./src/components/Layout/index.ts":function(e,r,t){var n=t("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"Box",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(r,"BoxProps",{enumerable:!0,get:function(){return a.BoxProps}}),Object.defineProperty(r,"Spacing",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(r,"SpacingProps",{enumerable:!0,get:function(){return i.SpacingProps}});var a=n(t("./src/components/Layout/Box.tsx")),i=n(t("./src/components/Layout/Spacing.tsx"));try{__class.displayName="__class",__class.__docgenInfo={description:"",displayName:"__class",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"ViewStyle"}},elevation:{defaultValue:null,description:"Sets the elevation of a view, using Android's underlying\n[elevation API](https://developer.android.com/training/material/shadows-clipping.html#Elevation).\nThis adds a drop shadow to the item and affects z-order for overlapping views.\nOnly supported on Android 5.0+, has no effect on earlier versions.",name:"elevation",required:!1,type:{name:"0 | 1 | 2 | 3 | 4 | 5 | 6"}},shape:{defaultValue:null,description:"",name:"shape",required:!1,type:{name:"Shape"}},backfaceVisibility:{defaultValue:null,description:"",name:"backfaceVisibility",required:!1,type:{name:'"visible" | "hidden"'}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string"}},borderBottomColor:{defaultValue:null,description:"",name:"borderBottomColor",required:!1,type:{name:"string"}},borderBottomEndRadius:{defaultValue:null,description:"",name:"borderBottomEndRadius",required:!1,type:{name:"number"}},borderBottomLeftRadius:{defaultValue:null,description:"",name:"borderBottomLeftRadius",required:!1,type:{name:"number"}},borderBottomRightRadius:{defaultValue:null,description:"",name:"borderBottomRightRadius",required:!1,type:{name:"number"}},borderBottomStartRadius:{defaultValue:null,description:"",name:"borderBottomStartRadius",required:!1,type:{name:"number"}},borderBottomWidth:{defaultValue:null,description:"",name:"borderBottomWidth",required:!1,type:{name:"number"}},borderColor:{defaultValue:null,description:"",name:"borderColor",required:!1,type:{name:"string"}},borderEndColor:{defaultValue:null,description:"",name:"borderEndColor",required:!1,type:{name:"string"}},borderLeftColor:{defaultValue:null,description:"",name:"borderLeftColor",required:!1,type:{name:"string"}},borderLeftWidth:{defaultValue:null,description:"",name:"borderLeftWidth",required:!1,type:{name:"number"}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"number"}},borderRightColor:{defaultValue:null,description:"",name:"borderRightColor",required:!1,type:{name:"string"}},borderRightWidth:{defaultValue:null,description:"",name:"borderRightWidth",required:!1,type:{name:"number"}},borderStartColor:{defaultValue:null,description:"",name:"borderStartColor",required:!1,type:{name:"string"}},borderStyle:{defaultValue:null,description:"",name:"borderStyle",required:!1,type:{name:'"solid" | "dotted" | "dashed"'}},borderTopColor:{defaultValue:null,description:"",name:"borderTopColor",required:!1,type:{name:"string"}},borderTopEndRadius:{defaultValue:null,description:"",name:"borderTopEndRadius",required:!1,type:{name:"number"}},borderTopLeftRadius:{defaultValue:null,description:"",name:"borderTopLeftRadius",required:!1,type:{name:"number"}},borderTopRightRadius:{defaultValue:null,description:"",name:"borderTopRightRadius",required:!1,type:{name:"number"}},borderTopStartRadius:{defaultValue:null,description:"",name:"borderTopStartRadius",required:!1,type:{name:"number"}},borderTopWidth:{defaultValue:null,description:"",name:"borderTopWidth",required:!1,type:{name:"number"}},borderWidth:{defaultValue:null,description:"",name:"borderWidth",required:!1,type:{name:"number"}},opacity:{defaultValue:null,description:"",name:"opacity",required:!1,type:{name:"number"}},testID:{defaultValue:null,description:"",name:"testID",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:'"flex-start" | "flex-end" | "center" | "stretch" | "space-between" | "space-around"'}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"FlexAlignType"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:'"flex-start" | "flex-end" | "center" | "stretch" | "baseline" | "auto"'}},aspectRatio:{defaultValue:null,description:"",name:"aspectRatio",required:!1,type:{name:"number"}},borderEndWidth:{defaultValue:null,description:"",name:"borderEndWidth",required:!1,type:{name:"ReactText"}},borderStartWidth:{defaultValue:null,description:"",name:"borderStartWidth",required:!1,type:{name:"ReactText"}},bottom:{defaultValue:null,description:"",name:"bottom",required:!1,type:{name:"ReactText"}},display:{defaultValue:null,description:"",name:"display",required:!1,type:{name:'"flex" | "none"'}},end:{defaultValue:null,description:"",name:"end",required:!1,type:{name:"ReactText"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"number"}},flexBasis:{defaultValue:null,description:"",name:"flexBasis",required:!1,type:{name:"ReactText"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:'"row" | "column" | "row-reverse" | "column-reverse"'}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"number"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"number"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:'"wrap" | "nowrap" | "wrap-reverse"'}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"GridScale"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:'"flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly"'}},left:{defaultValue:null,description:"",name:"left",required:!1,type:{name:"ReactText"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"GridScale"}},marginBottom:{defaultValue:null,description:"",name:"marginBottom",required:!1,type:{name:"GridScale"}},marginEnd:{defaultValue:null,description:"",name:"marginEnd",required:!1,type:{name:"GridScale"}},marginHorizontal:{defaultValue:null,description:"",name:"marginHorizontal",required:!1,type:{name:"GridScale"}},marginLeft:{defaultValue:null,description:"",name:"marginLeft",required:!1,type:{name:"GridScale"}},marginRight:{defaultValue:null,description:"",name:"marginRight",required:!1,type:{name:"GridScale"}},marginStart:{defaultValue:null,description:"",name:"marginStart",required:!1,type:{name:"GridScale"}},marginTop:{defaultValue:null,description:"",name:"marginTop",required:!1,type:{name:"GridScale"}},marginVertical:{defaultValue:null,description:"",name:"marginVertical",required:!1,type:{name:"GridScale"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"ReactText"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"ReactText"}},minHeight:{defaultValue:null,description:"",name:"minHeight",required:!1,type:{name:"ReactText"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"ReactText"}},overflow:{defaultValue:null,description:"",name:"overflow",required:!1,type:{name:'"visible" | "hidden" | "scroll"'}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"GridScale"}},paddingBottom:{defaultValue:null,description:"",name:"paddingBottom",required:!1,type:{name:"GridScale"}},paddingEnd:{defaultValue:null,description:"",name:"paddingEnd",required:!1,type:{name:"GridScale"}},paddingHorizontal:{defaultValue:null,description:"",name:"paddingHorizontal",required:!1,type:{name:"GridScale"}},paddingLeft:{defaultValue:null,description:"",name:"paddingLeft",required:!1,type:{name:"GridScale"}},paddingRight:{defaultValue:null,description:"",name:"paddingRight",required:!1,type:{name:"GridScale"}},paddingStart:{defaultValue:null,description:"",name:"paddingStart",required:!1,type:{name:"GridScale"}},paddingTop:{defaultValue:null,description:"",name:"paddingTop",required:!1,type:{name:"GridScale"}},paddingVertical:{defaultValue:null,description:"",name:"paddingVertical",required:!1,type:{name:"GridScale"}},position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:'"absolute" | "relative"'}},right:{defaultValue:null,description:"",name:"right",required:!1,type:{name:"ReactText"}},start:{defaultValue:null,description:"",name:"start",required:!1,type:{name:"ReactText"}},top:{defaultValue:null,description:"",name:"top",required:!1,type:{name:"ReactText"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"ReactText"}},zIndex:{defaultValue:null,description:"",name:"zIndex",required:!1,type:{name:"number"}},direction:{defaultValue:null,description:"@platform ios",name:"direction",required:!1,type:{name:'"inherit" | "ltr" | "rtl"'}},shadowColor:{defaultValue:null,description:"",name:"shadowColor",required:!1,type:{name:"string"}},shadowOffset:{defaultValue:null,description:"",name:"shadowOffset",required:!1,type:{name:"{ width: number; height: number; }"}},shadowOpacity:{defaultValue:null,description:"",name:"shadowOpacity",required:!1,type:{name:"number"}},shadowRadius:{defaultValue:null,description:"",name:"shadowRadius",required:!1,type:{name:"number"}},transform:{defaultValue:null,description:"",name:"transform",required:!1,type:{name:"(PerpectiveTransform | RotateTransform | RotateXTransform | RotateYTransform | RotateZTransform | ScaleTransform | ScaleXTransform | ScaleYTransform | TranslateXTransform | TranslateYTransform | SkewXTransform | SkewYTransform)[]"}},transformMatrix:{defaultValue:null,description:"",name:"transformMatrix",required:!1,type:{name:"number[]"}},rotation:{defaultValue:null,description:"",name:"rotation",required:!1,type:{name:"number"}},scaleX:{defaultValue:null,description:"",name:"scaleX",required:!1,type:{name:"number"}},scaleY:{defaultValue:null,description:"",name:"scaleY",required:!1,type:{name:"number"}},translateX:{defaultValue:null,description:"",name:"translateX",required:!1,type:{name:"number"}},translateY:{defaultValue:null,description:"",name:"translateY",required:!1,type:{name:"number"}},gridPointMultiplier:{defaultValue:null,description:"",name:"gridPointMultiplier",required:!1,type:{name:"number"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Layout/index.ts#__class"]={docgenInfo:__class.__docgenInfo,name:"__class",path:"src/components/Layout/index.ts#__class"})}catch(l){}}}]);
//# sourceMappingURL=21.759dbc44072619a392c9.js.map