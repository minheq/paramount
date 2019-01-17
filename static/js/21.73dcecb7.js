(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"./src/components/Checkbox/index.ts":function(e,t,n){var i=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Checkbox",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"CheckboxProps",{enumerable:!0,get:function(){return a.CheckboxProps}}),Object.defineProperty(t,"LabeledCheckbox",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"LabeledCheckboxProps",{enumerable:!0,get:function(){return l.LabeledCheckboxProps}});var a=i(n("./src/components/Checkbox/Checkbox.tsx")),l=i(n("./src/components/Checkbox/LabeledCheckbox.tsx"));try{__class.displayName="__class",__class.__docgenInfo={description:"",displayName:"__class",props:{isChecked:{defaultValue:null,description:"",name:"isChecked",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},isInteractive:{defaultValue:null,description:"Sometimes we just want the display of the checkbox",name:"isInteractive",required:!1,type:{name:"boolean"}},checkedIcon:{defaultValue:null,description:"",name:"checkedIcon",required:!1,type:{name:"ReactNode"}},shape:{defaultValue:null,description:"",name:"shape",required:!1,type:{name:"CheckboxShape"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(e: GestureResponderEvent) => void"}},getStyles:{defaultValue:null,description:"",name:"getStyles",required:!1,type:{name:"GetCheckboxStyles"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:'"left" | "right"'}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:'"selected" | "dark" | "default" | "muted" | "plain" | "primary" | "secondary" | "danger" | "info" | "success" | "warning"'}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"small" | "medium" | "large"'}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox/index.ts#__class"]={docgenInfo:__class.__docgenInfo,name:"__class",path:"src/components/Checkbox/index.ts#__class"})}catch(s){}},"./src/components/SelectList/SelectList.mdx":function(e,t,n){var i=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),l=i(n("./node_modules/@babel/runtime/helpers/classCallCheck.js")),s=i(n("./node_modules/@babel/runtime/helpers/createClass.js")),o=i(n("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),r=i(n("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),d=i(n("./node_modules/@babel/runtime/helpers/inherits.js")),c=i(n("./node_modules/react/index.js")),u=n("./node_modules/@mdx-js/tag/dist/index.js"),m=n("./node_modules/docz/dist/index.m.js"),p=i(n("./src/components/SelectList/SelectList.tsx")),h=i(n("./src/components/SelectList/SelectListItem.tsx")),f=n("./node_modules/react-powerplug/dist/react-powerplug.esm.js"),y=function(e){function t(e){var n;return(0,l.default)(this,t),(n=(0,o.default)(this,(0,r.default)(t).call(this,e))).layout=null,n}return(0,d.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){var e=this.props,t=e.components,n=(0,a.default)(e,["components"]);return c.default.createElement(u.MDXTag,{name:"wrapper",components:t},c.default.createElement(u.MDXTag,{name:"h2",components:t,props:{id:"usage"}},"Usage"),c.default.createElement(u.MDXTag,{name:"p",components:t},"SelectList that supports single value or multiple values selected at the same item. ",c.default.createElement(u.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"SelectList")," is a compound component, which means that its children can be any component, and it will implicitly inject props such as ",c.default.createElement(u.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"isSelected")," or ",c.default.createElement(u.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"onSelect")," to them."),c.default.createElement(u.MDXTag,{name:"h3",components:t,props:{id:"multi-select"}},"Multi select"),c.default.createElement(m.Playground,{__position:0,__code:'<State initial={{ selectedValue: [\'js\', \'go\'] }}>\n  {({ state, setState }) => (\n    <SelectList\n      isMulti\n      selectedValue={state.selectedValue}\n      onValueChange={(newValue, itemIndex) => {\n        setState({ selectedValue: newValue })\n      }}\n    >\n      <SelectListItem label="Java" value="java" />\n      <SelectListItem label="JavaScript" value="js" />\n      <SelectListItem label="Elixir" value="elixir" />\n      <SelectListItem label="Haskell" value="haskell" />\n      <SelectListItem label="Rust" value="rust" />\n      <SelectListItem label="Go" value="go" />\n    </SelectList>\n  )}\n</State>',__scope:{props:this?this.props:n,SelectList:p.default,SelectListItem:h.default,State:f.State}},c.default.createElement(f.State,{initial:{selectedValue:["js","go"]}},function(e){var t=e.state,n=e.setState;return c.default.createElement(p.default,{isMulti:!0,selectedValue:t.selectedValue,onValueChange:function(e,t){n({selectedValue:e})}},c.default.createElement(h.default,{label:"Java",value:"java"}),c.default.createElement(h.default,{label:"JavaScript",value:"js"}),c.default.createElement(h.default,{label:"Elixir",value:"elixir"}),c.default.createElement(h.default,{label:"Haskell",value:"haskell"}),c.default.createElement(h.default,{label:"Rust",value:"rust"}),c.default.createElement(h.default,{label:"Go",value:"go"}))})),c.default.createElement(u.MDXTag,{name:"h3",components:t,props:{id:"single-select"}},"Single select"),c.default.createElement(m.Playground,{__position:1,__code:'<State initial={{ selectedValue: \'go\' }}>\n  {({ state, setState }) => (\n    <SelectList\n      selectedValue={state.selectedValue}\n      onValueChange={(newValue, itemIndex) => {\n        setState({ selectedValue: newValue })\n      }}\n    >\n      <SelectListItem label="Java" value="java" />\n      <SelectListItem label="JavaScript" value="js" />\n      <SelectListItem label="Elixir" value="elixir" />\n      <SelectListItem label="Haskell" value="haskell" />\n      <SelectListItem label="Rust" value="rust" />\n      <SelectListItem label="Go" value="go" />\n    </SelectList>\n  )}\n</State>',__scope:{props:this?this.props:n,SelectList:p.default,SelectListItem:h.default,State:f.State}},c.default.createElement(f.State,{initial:{selectedValue:"go"}},function(e){var t=e.state,n=e.setState;return c.default.createElement(p.default,{selectedValue:t.selectedValue,onValueChange:function(e,t){n({selectedValue:e})}},c.default.createElement(h.default,{label:"Java",value:"java"}),c.default.createElement(h.default,{label:"JavaScript",value:"js"}),c.default.createElement(h.default,{label:"Elixir",value:"elixir"}),c.default.createElement(h.default,{label:"Haskell",value:"haskell"}),c.default.createElement(h.default,{label:"Rust",value:"rust"}),c.default.createElement(h.default,{label:"Go",value:"go"}))})),c.default.createElement(u.MDXTag,{name:"h2",components:t,props:{id:"props"}},"Props"),c.default.createElement(u.MDXTag,{name:"h3",components:t,props:{id:"select-list"}},"Select List"),c.default.createElement(m.PropsTable,{of:p.default}),c.default.createElement(u.MDXTag,{name:"h3",components:t,props:{id:"select-list-item"}},"Select List Item"),c.default.createElement(u.MDXTag,{name:"p",components:t},"Extends ",c.default.createElement(u.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"TouchableHighlightProps"),". Read from ",c.default.createElement(u.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"activeOpacity")," and above for component specific props"),c.default.createElement(m.PropsTable,{of:h.default}))}}]),t}(c.default.Component);t.default=y},"./src/components/SelectList/SelectList.styles.ts":function(e,t,n){var i=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.getSelectListStyles=t.getSelectListVariables=void 0;var a=i(n("./node_modules/@babel/runtime/helpers/objectSpread.js")),l=i(n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),s=n("./src/components/Typography/Text.styles.ts"),o=function(e){var t=(0,s.getTextVariables)(e);return{base:{backgroundColor:e.colors.background.plain,borderBottomWidth:1,borderColor:e.colors.border.default,justifyContent:"center"},disabled:{backgroundColor:e.colors.background.disabled},focusBackgroundColor:e.colors.background.tint1,selected:{},sizes:{small:{fontSize:e.textSizes.small,height:e.controlHeights.small,paddingLeft:e.controlPaddings.small,paddingRight:e.controlPaddings.small},medium:{fontSize:e.textSizes.medium,height:e.controlHeights.medium,paddingLeft:e.controlPaddings.medium,paddingRight:e.controlPaddings.medium},large:{fontSize:e.textSizes.large,height:e.controlHeights.large,paddingLeft:e.controlPaddings.large,paddingRight:e.controlPaddings.large}},textSizes:t.size,wrapper:{alignItems:"center",flexDirection:"row",justifyContent:"space-between"}}};t.getSelectListVariables=o;t.getSelectListStyles=function(e,t){var n=e.size,i=e.isDisabled,s=e.isSelected,r=o(t),d=r.base,c=r.disabled,u=r.selected,m=r.focusBackgroundColor,p=r.sizes,h=r.textSizes,f=p[n],y=(f.fontSize,(0,l.default)(f,["fontSize"]));return{containerStyle:(0,a.default)({},d,y,s?u:{},i?c:{}),focusBackgroundColor:m,textStyle:h[n],wrapperStyle:r.wrapper}};try{o.displayName="getSelectListVariables",o.__docgenInfo={description:"",displayName:"getSelectListVariables",props:{colors:{defaultValue:null,description:"",name:"colors",required:!0,type:{name:"Colors"}},fills:{defaultValue:null,description:"",name:"fills",required:!0,type:{name:"Fills"}},fontFamilies:{defaultValue:null,description:"",name:"fontFamilies",required:!0,type:{name:"FontFamilies"}},fontWeights:{defaultValue:null,description:"",name:"fontWeights",required:!0,type:{name:"FontWeights"}},headingSizes:{defaultValue:null,description:"",name:"headingSizes",required:!0,type:{name:"HeadingSizes"}},paragraphSizes:{defaultValue:null,description:"",name:"paragraphSizes",required:!0,type:{name:"ParagraphSizes"}},textSizes:{defaultValue:null,description:"",name:"textSizes",required:!0,type:{name:"TextSizes"}},elevations:{defaultValue:null,description:"",name:"elevations",required:!0,type:{name:"ViewStyle[]"}},controlPaddings:{defaultValue:null,description:"",name:"controlPaddings",required:!0,type:{name:"ControlSizes"}},controlHeights:{defaultValue:null,description:"",name:"controlHeights",required:!0,type:{name:"ControlSizes"}},controlBorderRadius:{defaultValue:null,description:"",name:"controlBorderRadius",required:!0,type:{name:"ControlSizes"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SelectList/SelectList.styles.ts#getSelectListVariables"]={docgenInfo:o.__docgenInfo,name:"getSelectListVariables",path:"src/components/SelectList/SelectList.styles.ts#getSelectListVariables"})}catch(r){}},"./src/components/SelectList/SelectList.tsx":function(e,t,n){var i=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.SelectList=void 0;var a=i(n("./node_modules/react/index.js")),l=(0,n("./src/theme/index.ts").withTheme)(function(e){var t=e.selectedValue,n=e.onValueChange,i=e.isMulti,l=e.children,s=function(e,a,l){i&&Array.isArray(t)?n(l?t.filter(function(t){return t!==e}):t.concat(e),a):n(e,a)};return a.Children.map(l,function(e,n){if(!a.isValidElement(e))return e;var l=e,o=i&&Array.isArray(t)?t.some(function(e){return e===l.props.value}):t===l.props.value;return a.cloneElement(l,{index:n,isSelected:o,onSelect:s})})});t.SelectList=l;var s=l;t.default=s;try{l.displayName="SelectList",l.__docgenInfo={description:"",displayName:"SelectList",props:{selectedValue:{defaultValue:null,description:"",name:"selectedValue",required:!0,type:{name:"string | string[]"}},isMulti:{defaultValue:null,description:"",name:"isMulti",required:!1,type:{name:"boolean"}},onValueChange:{defaultValue:null,description:"",name:"onValueChange",required:!0,type:{name:"(itemValue: string | string[], itemIndex: number) => void"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SelectList/SelectList.tsx#SelectList"]={docgenInfo:l.__docgenInfo,name:"SelectList",path:"src/components/SelectList/SelectList.tsx#SelectList"})}catch(o){}try{__class.displayName="__class",__class.__docgenInfo={description:"",displayName:"__class",props:{selectedValue:{defaultValue:null,description:"",name:"selectedValue",required:!0,type:{name:"string | string[]"}},isMulti:{defaultValue:null,description:"",name:"isMulti",required:!1,type:{name:"boolean"}},onValueChange:{defaultValue:null,description:"",name:"onValueChange",required:!0,type:{name:"(itemValue: string | string[], itemIndex: number) => void"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SelectList/SelectList.tsx#__class"]={docgenInfo:__class.__docgenInfo,name:"__class",path:"src/components/SelectList/SelectList.tsx#__class"})}catch(o){}},"./src/components/SelectList/SelectListItem.tsx":function(e,t,n){var i=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),a=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.SelectListItem=void 0;var l=a(n("./node_modules/@babel/runtime/helpers/extends.js")),s=a(n("./node_modules/@babel/runtime/helpers/objectSpread.js")),o=a(n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),r=i(n("./node_modules/react/index.js")),d=n("./node_modules/react-native-web/dist/index.js"),c=n("./src/theme/index.ts"),u=n("./src/components/Checkbox/index.ts"),m=n("./src/components/Typography/index.ts"),p=n("./src/components/Typography/Text.styles.ts"),h=n("./src/components/SelectList/SelectList.styles.ts"),f=(0,c.withTheme)(function(e){var t=e.getStyles,n=void 0===t?h.getSelectListStyles:t,i=e.index,a=void 0===i?0:i,c=e.isDisabled,f=void 0!==c&&c,y=e.isSelected,b=void 0!==y&&y,v=e.label,S=e.onSelect,g=void 0===S?function(){return null}:S,w=e.size,V=void 0===w?"medium":w,_=e.theme,L=e.value,q=(0,o.default)(e,["getStyles","index","isDisabled","isSelected","label","onSelect","size","theme","value"]),T=n({size:V,isDisabled:f,isSelected:b},_),x=T.containerStyle,C=T.textStyle,I=T.focusBackgroundColor,k=T.wrapperStyle;return r.createElement(d.TouchableHighlight,(0,l.default)({disabled:f,onPress:function(){return g(L,a,b)},underlayColor:I,style:x},q),r.createElement(d.View,{style:k},r.createElement(m.Text,{getStyles:function(){var e=p.getTextStyles.apply(void 0,arguments).textStyle;return{textStyle:(0,s.default)({},e,C)}}},v),r.createElement(u.Checkbox,{isInteractive:!1,shape:"circle",isChecked:b})))});t.SelectListItem=f;var y=f;t.default=y;try{f.displayName="SelectListItem",f.__docgenInfo={description:"",displayName:"SelectListItem",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"small" | "medium" | "large"'}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},getStyles:{defaultValue:null,description:"",name:"getStyles",required:!1,type:{name:"GetSelectListStyles"}},index:{defaultValue:null,description:"",name:"index",required:!1,type:{name:"number"}},isSelected:{defaultValue:null,description:"",name:"isSelected",required:!1,type:{name:"boolean"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"(value: string, index: number, isSelected: boolean) => void"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},activeOpacity:{defaultValue:null,description:"Determines what the opacity of the wrapped view should be when touch is active.",name:"activeOpacity",required:!1,type:{name:"number"}},onHideUnderlay:{defaultValue:null,description:"Called immediately after the underlay is hidden",name:"onHideUnderlay",required:!1,type:{name:"() => void"}},onShowUnderlay:{defaultValue:null,description:"Called immediately after the underlay is shown",name:"onShowUnderlay",required:!1,type:{name:"() => void"}},style:{defaultValue:null,description:"//FIXME: not in doc but available in examples\n@see https://facebook.github.io/react-native/docs/view.html#style",name:"style",required:!1,type:{name:"StyleProp<ViewStyle>"}},underlayColor:{defaultValue:null,description:"The color of the underlay that will show through when the touch is active.",name:"underlayColor",required:!1,type:{name:"string"}},delayLongPress:{defaultValue:null,description:"Delay in ms, from onPressIn, before onLongPress is called.",name:"delayLongPress",required:!1,type:{name:"number"}},delayPressIn:{defaultValue:null,description:"Delay in ms, from the start of the touch, before onPressIn is called.",name:"delayPressIn",required:!1,type:{name:"number"}},delayPressOut:{defaultValue:null,description:"Delay in ms, from the release of the touch, before onPressOut is called.",name:"delayPressOut",required:!1,type:{name:"number"}},disabled:{defaultValue:null,description:"If true, disable all interactions for this component.",name:"disabled",required:!1,type:{name:"boolean"}},hitSlop:{defaultValue:null,description:"This defines how far your touch can start away from the button.\nThis is added to pressRetentionOffset when moving off of the button.\nNOTE The touch area never extends past the parent view bounds and\nthe Z-index of sibling views always takes precedence if a touch hits\ntwo overlapping views.",name:"hitSlop",required:!1,type:{name:"Insets"}},onLayout:{defaultValue:null,description:"Invoked on mount and layout changes with\n{nativeEvent: {layout: {x, y, width, height}}}",name:"onLayout",required:!1,type:{name:"(event: LayoutChangeEvent) => void"}},onLongPress:{defaultValue:null,description:"",name:"onLongPress",required:!1,type:{name:"(event: GestureResponderEvent) => void"}},onPress:{defaultValue:null,description:"Called when the touch is released,\nbut not if cancelled (e.g. by a scroll that steals the responder lock).",name:"onPress",required:!1,type:{name:"(event: GestureResponderEvent) => void"}},onPressIn:{defaultValue:null,description:"",name:"onPressIn",required:!1,type:{name:"(event: GestureResponderEvent) => void"}},onPressOut:{defaultValue:null,description:"",name:"onPressOut",required:!1,type:{name:"(event: GestureResponderEvent) => void"}},pressRetentionOffset:{defaultValue:null,description:"When the scroll view is disabled, this defines how far your\ntouch may move off of the button, before deactivating the button.\nOnce deactivated, try moving it back and you'll see that the button\nis once again reactivated! Move it back and forth several times\nwhile the scroll view is disabled. Ensure you pass in a constant\nto reduce memory allocations.",name:"pressRetentionOffset",required:!1,type:{name:"Insets"}},testID:{defaultValue:null,description:"Used to locate this view in end-to-end tests.",name:"testID",required:!1,type:{name:"string"}},accessible:{defaultValue:null,description:"When true, indicates that the view is an accessibility element.\nBy default, all the touchable elements are accessible.",name:"accessible",required:!1,type:{name:"boolean"}},accessibilityLabel:{defaultValue:null,description:"Overrides the text that's read by the screen reader when the user interacts with the element. By default, the\nlabel is constructed by traversing all the children and accumulating all the Text nodes separated by space.",name:"accessibilityLabel",required:!1,type:{name:"string"}},accessibilityRole:{defaultValue:null,description:"Accessibility Role tells a person using either VoiceOver on iOS or TalkBack on Android the type of element that is focused on.",name:"accessibilityRole",required:!1,type:{name:"AccessibilityRole"}},accessibilityStates:{defaultValue:null,description:"Accessibility State tells a person using either VoiceOver on iOS or TalkBack on Android the state of the element currently focused on.",name:"accessibilityStates",required:!1,type:{name:"AccessibilityState[]"}},accessibilityHint:{defaultValue:null,description:"An accessibility hint helps users understand what will happen when they perform an action on the accessibility element when that result is not obvious from the accessibility label.",name:"accessibilityHint",required:!1,type:{name:"string"}},accessibilityComponentType:{defaultValue:null,description:"In some cases, we also want to alert the end user of the type of selected component (i.e., that it is a \u201cbutton\u201d).\nIf we were using native buttons, this would work automatically. Since we are using javascript, we need to\nprovide a bit more context for TalkBack. To do so, you must specify the \u2018accessibilityComponentType\u2019 property\nfor any UI component. For instances, we support \u2018button\u2019, \u2018radiobutton_checked\u2019 and \u2018radiobutton_unchecked\u2019 and so on.\n@platform android",name:"accessibilityComponentType",required:!1,type:{name:'"none" | "button" | "radiobutton_checked" | "radiobutton_unchecked"'}},accessibilityLiveRegion:{defaultValue:null,description:"Indicates to accessibility services whether the user should be notified when this view changes.\nWorks for Android API >= 19 only.\nSee http://developer.android.com/reference/android/view/View.html#attr_android:accessibilityLiveRegion for references.\n@platform android",name:"accessibilityLiveRegion",required:!1,type:{name:'"none" | "polite" | "assertive"'}},importantForAccessibility:{defaultValue:null,description:"Controls how view is important for accessibility which is if it fires accessibility events\nand if it is reported to accessibility services that query the screen.\nWorks for Android only. See http://developer.android.com/reference/android/R.attr.html#importantForAccessibility for references.\n\nPossible values:\n      'auto' - The system determines whether the view is important for accessibility - default (recommended).\n      'yes' - The view is important for accessibility.\n      'no' - The view is not important for accessibility.\n      'no-hide-descendants' - The view is not important for accessibility, nor are any of its descendant views.",name:"importantForAccessibility",required:!1,type:{name:'"auto" | "yes" | "no" | "no-hide-descendants"'}},accessibilityElementsHidden:{defaultValue:null,description:"A Boolean value indicating whether the accessibility elements contained within this accessibility element\nare hidden to the screen reader.\n@platform ios",name:"accessibilityElementsHidden",required:!1,type:{name:"boolean"}},accessibilityTraits:{defaultValue:null,description:"Accessibility traits tell a person using VoiceOver what kind of element they have selected.\nIs this element a label? A button? A header? These questions are answered by accessibilityTraits.\n@platform ios",name:"accessibilityTraits",required:!1,type:{name:'"disabled" | "none" | "button" | "link" | "search" | "image" | "text" | "adjustable" | "header" | "summary" | "selected" | "plays" | "key" | "frequentUpdates" | "startsMedia" | "allowsDirectInteraction" | "pageTurn" | AccessibilityTrait[]'}},onAccessibilityTap:{defaultValue:null,description:"When `accessible` is true, the system will try to invoke this function when the user performs accessibility tap gesture.\n@platform ios",name:"onAccessibilityTap",required:!1,type:{name:"() => void"}},onMagicTap:{defaultValue:null,description:"When accessible is true, the system will invoke this function when the user performs the magic tap gesture.\n@platform ios",name:"onMagicTap",required:!1,type:{name:"() => void"}},accessibilityIgnoresInvertColors:{defaultValue:null,description:"https://facebook.github.io/react-native/docs/accessibility#accessibilityignoresinvertcolorsios\n@platform ios",name:"accessibilityIgnoresInvertColors",required:!1,type:{name:"boolean"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SelectList/SelectListItem.tsx#SelectListItem"]={docgenInfo:f.__docgenInfo,name:"SelectListItem",path:"src/components/SelectList/SelectListItem.tsx#SelectListItem"})}catch(b){}try{__class.displayName="__class",__class.__docgenInfo={description:"",displayName:"__class",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"small" | "medium" | "large"'}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},getStyles:{defaultValue:null,description:"",name:"getStyles",required:!1,type:{name:"GetSelectListStyles"}},index:{defaultValue:null,description:"",name:"index",required:!1,type:{name:"number"}},isSelected:{defaultValue:null,description:"",name:"isSelected",required:!1,type:{name:"boolean"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"(value: string, index: number, isSelected: boolean) => void"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},activeOpacity:{defaultValue:null,description:"Determines what the opacity of the wrapped view should be when touch is active.",name:"activeOpacity",required:!1,type:{name:"number"}},onHideUnderlay:{defaultValue:null,description:"Called immediately after the underlay is hidden",name:"onHideUnderlay",required:!1,type:{name:"() => void"}},onShowUnderlay:{defaultValue:null,description:"Called immediately after the underlay is shown",name:"onShowUnderlay",required:!1,type:{name:"() => void"}},style:{defaultValue:null,description:"//FIXME: not in doc but available in examples\n@see https://facebook.github.io/react-native/docs/view.html#style",name:"style",required:!1,type:{name:"StyleProp<ViewStyle>"}},underlayColor:{defaultValue:null,description:"The color of the underlay that will show through when the touch is active.",name:"underlayColor",required:!1,type:{name:"string"}},delayLongPress:{defaultValue:null,description:"Delay in ms, from onPressIn, before onLongPress is called.",name:"delayLongPress",required:!1,type:{name:"number"}},delayPressIn:{defaultValue:null,description:"Delay in ms, from the start of the touch, before onPressIn is called.",name:"delayPressIn",required:!1,type:{name:"number"}},delayPressOut:{defaultValue:null,description:"Delay in ms, from the release of the touch, before onPressOut is called.",name:"delayPressOut",required:!1,type:{name:"number"}},disabled:{defaultValue:null,description:"If true, disable all interactions for this component.",name:"disabled",required:!1,type:{name:"boolean"}},hitSlop:{defaultValue:null,description:"This defines how far your touch can start away from the button.\nThis is added to pressRetentionOffset when moving off of the button.\nNOTE The touch area never extends past the parent view bounds and\nthe Z-index of sibling views always takes precedence if a touch hits\ntwo overlapping views.",name:"hitSlop",required:!1,type:{name:"Insets"}},onLayout:{defaultValue:null,description:"Invoked on mount and layout changes with\n{nativeEvent: {layout: {x, y, width, height}}}",name:"onLayout",required:!1,type:{name:"(event: LayoutChangeEvent) => void"}},onLongPress:{defaultValue:null,description:"",name:"onLongPress",required:!1,type:{name:"(event: GestureResponderEvent) => void"}},onPress:{defaultValue:null,description:"Called when the touch is released,\nbut not if cancelled (e.g. by a scroll that steals the responder lock).",name:"onPress",required:!1,type:{name:"(event: GestureResponderEvent) => void"}},onPressIn:{defaultValue:null,description:"",name:"onPressIn",required:!1,type:{name:"(event: GestureResponderEvent) => void"}},onPressOut:{defaultValue:null,description:"",name:"onPressOut",required:!1,type:{name:"(event: GestureResponderEvent) => void"}},pressRetentionOffset:{defaultValue:null,description:"When the scroll view is disabled, this defines how far your\ntouch may move off of the button, before deactivating the button.\nOnce deactivated, try moving it back and you'll see that the button\nis once again reactivated! Move it back and forth several times\nwhile the scroll view is disabled. Ensure you pass in a constant\nto reduce memory allocations.",name:"pressRetentionOffset",required:!1,type:{name:"Insets"}},testID:{defaultValue:null,description:"Used to locate this view in end-to-end tests.",name:"testID",required:!1,type:{name:"string"}},accessible:{defaultValue:null,description:"When true, indicates that the view is an accessibility element.\nBy default, all the touchable elements are accessible.",name:"accessible",required:!1,type:{name:"boolean"}},accessibilityLabel:{defaultValue:null,description:"Overrides the text that's read by the screen reader when the user interacts with the element. By default, the\nlabel is constructed by traversing all the children and accumulating all the Text nodes separated by space.",name:"accessibilityLabel",required:!1,type:{name:"string"}},accessibilityRole:{defaultValue:null,description:"Accessibility Role tells a person using either VoiceOver on iOS or TalkBack on Android the type of element that is focused on.",name:"accessibilityRole",required:!1,type:{name:"AccessibilityRole"}},accessibilityStates:{defaultValue:null,description:"Accessibility State tells a person using either VoiceOver on iOS or TalkBack on Android the state of the element currently focused on.",name:"accessibilityStates",required:!1,type:{name:"AccessibilityState[]"}},accessibilityHint:{defaultValue:null,description:"An accessibility hint helps users understand what will happen when they perform an action on the accessibility element when that result is not obvious from the accessibility label.",name:"accessibilityHint",required:!1,type:{name:"string"}},accessibilityComponentType:{defaultValue:null,description:"In some cases, we also want to alert the end user of the type of selected component (i.e., that it is a \u201cbutton\u201d).\nIf we were using native buttons, this would work automatically. Since we are using javascript, we need to\nprovide a bit more context for TalkBack. To do so, you must specify the \u2018accessibilityComponentType\u2019 property\nfor any UI component. For instances, we support \u2018button\u2019, \u2018radiobutton_checked\u2019 and \u2018radiobutton_unchecked\u2019 and so on.\n@platform android",name:"accessibilityComponentType",required:!1,type:{name:'"none" | "button" | "radiobutton_checked" | "radiobutton_unchecked"'}},accessibilityLiveRegion:{defaultValue:null,description:"Indicates to accessibility services whether the user should be notified when this view changes.\nWorks for Android API >= 19 only.\nSee http://developer.android.com/reference/android/view/View.html#attr_android:accessibilityLiveRegion for references.\n@platform android",name:"accessibilityLiveRegion",required:!1,type:{name:'"none" | "polite" | "assertive"'}},importantForAccessibility:{defaultValue:null,description:"Controls how view is important for accessibility which is if it fires accessibility events\nand if it is reported to accessibility services that query the screen.\nWorks for Android only. See http://developer.android.com/reference/android/R.attr.html#importantForAccessibility for references.\n\nPossible values:\n      'auto' - The system determines whether the view is important for accessibility - default (recommended).\n      'yes' - The view is important for accessibility.\n      'no' - The view is not important for accessibility.\n      'no-hide-descendants' - The view is not important for accessibility, nor are any of its descendant views.",name:"importantForAccessibility",required:!1,type:{name:'"auto" | "yes" | "no" | "no-hide-descendants"'}},accessibilityElementsHidden:{defaultValue:null,description:"A Boolean value indicating whether the accessibility elements contained within this accessibility element\nare hidden to the screen reader.\n@platform ios",name:"accessibilityElementsHidden",required:!1,type:{name:"boolean"}},accessibilityTraits:{defaultValue:null,description:"Accessibility traits tell a person using VoiceOver what kind of element they have selected.\nIs this element a label? A button? A header? These questions are answered by accessibilityTraits.\n@platform ios",name:"accessibilityTraits",required:!1,type:{name:'"disabled" | "none" | "button" | "link" | "search" | "image" | "text" | "adjustable" | "header" | "summary" | "selected" | "plays" | "key" | "frequentUpdates" | "startsMedia" | "allowsDirectInteraction" | "pageTurn" | AccessibilityTrait[]'}},onAccessibilityTap:{defaultValue:null,description:"When `accessible` is true, the system will try to invoke this function when the user performs accessibility tap gesture.\n@platform ios",name:"onAccessibilityTap",required:!1,type:{name:"() => void"}},onMagicTap:{defaultValue:null,description:"When accessible is true, the system will invoke this function when the user performs the magic tap gesture.\n@platform ios",name:"onMagicTap",required:!1,type:{name:"() => void"}},accessibilityIgnoresInvertColors:{defaultValue:null,description:"https://facebook.github.io/react-native/docs/accessibility#accessibilityignoresinvertcolorsios\n@platform ios",name:"accessibilityIgnoresInvertColors",required:!1,type:{name:"boolean"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SelectList/SelectListItem.tsx#__class"]={docgenInfo:__class.__docgenInfo,name:"__class",path:"src/components/SelectList/SelectListItem.tsx#__class"})}catch(b){}}}]);
//# sourceMappingURL=21.e6613d87202ca509c995.js.map