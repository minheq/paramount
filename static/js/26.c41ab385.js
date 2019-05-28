(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"./src/components/Counter/Counter.mdx":function(e,t,n){var o=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=m;var r=o(n("./node_modules/@babel/runtime/helpers/extends.js")),s=o(n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),u=(o(n("./node_modules/react/index.js")),n("./node_modules/@mdx-js/react/dist/index.es.js")),l=n("./node_modules/react-powerplug/dist/react-powerplug.esm.js"),c=n("./node_modules/docz/dist/index.esm.js"),i=n("./src/components/Counter/index.ts"),a={},d="wrapper";function m(e){var t=e.components,n=(0,s.default)(e,["components"]);return(0,u.mdx)(d,(0,r.default)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,u.mdx)("h1",{id:"counter"},"Counter"),(0,u.mdx)("h3",{id:"usage"},"Usage"),(0,u.mdx)(c.Playground,{__position:0,__code:"<CounterContainer initial={0}>\n  {({ count, inc, dec }) => (\n    <Counter\n      count={count}\n      onDecrement={dec}\n      onIncrement={inc}\n      min={0}\n      max={10}\n      component={null}\n      getStyles={(props, theme) => ({\n        containerStyle: {},\n        counterStyle: {},\n        countStyle: {},\n        disabledStyle: {},\n        ntextStyle: {},\n      })}\n    />\n  )}\n</CounterContainer>",__scope:{props:this?this.props:n,CounterContainer:l.Counter,Playground:c.Playground,Props:c.Props,Counter:i.Counter},mdxType:"Playground"},(0,u.mdx)(l.Counter,{initial:0,mdxType:"CounterContainer"},function(e){var t=e.count,n=e.inc,o=e.dec;return(0,u.mdx)(i.Counter,{count:t,onDecrement:o,onIncrement:n,min:0,max:10,component:null,getStyles:function(e,t){return{containerStyle:{},counterStyle:{},countStyle:{},disabledStyle:{},ntextStyle:{}}},mdxType:"Counter"})})),(0,u.mdx)("h3",{id:"props"},"Props"),(0,u.mdx)(c.Props,{of:i.Counter,mdxType:"Props"}))}m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Counter/Counter.mdx"}}),m.isMDXComponent=!0},"./src/components/Counter/Counter.styles.ts":function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.getCounterStyles=t.getCounterVariables=void 0,"undefined"!==typeof CounterVariables&&CounterVariables&&CounterVariables===Object(CounterVariables)&&Object.isExtensible(CounterVariables)&&Object.defineProperty(CounterVariables,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CounterVariables",filename:"src/components/Counter/Counter.styles.ts"}});var n=function(e){return{container:{display:"flex",flexDirection:"row"},count:{justifyContent:"center"},counter:{alignItems:"center",borderColor:e.colors.border.primary,borderRadius:999,borderWidth:1,display:"flex",height:40,justifyContent:"center",width:40},disabled:{borderColor:e.colors.border.default}}};t.getCounterVariables=n,n&&n===Object(n)&&Object.isExtensible(n)&&Object.defineProperty(n,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getCounterVariables",filename:"src/components/Counter/Counter.styles.ts"}}),"undefined"!==typeof CounterStyles&&CounterStyles&&CounterStyles===Object(CounterStyles)&&Object.isExtensible(CounterStyles)&&Object.defineProperty(CounterStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CounterStyles",filename:"src/components/Counter/Counter.styles.ts"}}),"undefined"!==typeof GetCounterStyles&&GetCounterStyles&&GetCounterStyles===Object(GetCounterStyles)&&Object.isExtensible(GetCounterStyles)&&Object.defineProperty(GetCounterStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetCounterStyles",filename:"src/components/Counter/Counter.styles.ts"}});var o=function(e){var t=n(e),o=t.container,r=t.counter;return{containerStyle:o,countStyle:t.count,counterStyle:r,disabledStyle:t.disabled,textStyle:{}}};t.getCounterStyles=o,o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getCounterStyles",filename:"src/components/Counter/Counter.styles.ts"}})},"./src/components/Counter/Counter.tsx":function(e,t,n){var o=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.Counter=void 0;var s=r(n("./node_modules/@babel/runtime/helpers/objectSpread.js")),u=o(n("./node_modules/react/index.js")),l=n("./node_modules/react-native-web/dist/index.js"),c=n("./src/theme/index.ts"),i=n("./src/utils/mergeStyles.ts"),a=n("./src/components/Box/index.ts"),d=n("./src/components/Icon/index.ts"),m=n("./src/components/Typography/index.ts"),p=n("./src/components/Counter/Counter.styles.ts");"undefined"!==typeof CounterProps&&CounterProps&&CounterProps===Object(CounterProps)&&Object.isExtensible(CounterProps)&&Object.defineProperty(CounterProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CounterProps",filename:"src/components/Counter/Counter.tsx"}});var b=function(e){var t=e.count,n=e.component,o=e.max,r=e.min,b=e.onIncrement,y=e.onDecrement,f=e.getStyles,C=(0,c.useTheme)(),x=(0,i.mergeStyles)(p.getCounterStyles,f)(C),j=x.containerStyle,_=x.counterStyle,S=x.countStyle,v=x.textStyle,O=x.disabledStyle,g=r===t,P=o===t;return u.createElement(l.View,{style:j},u.createElement(a.Box,{paddingRight:16},u.createElement(l.TouchableOpacity,{activeOpacity:.7,style:(0,s.default)({},_,g&&O),disabled:g,onPress:g?void 0:y},u.createElement(d.Icon,{name:"minus",size:16,color:g?C.colors.text.muted:C.colors.text.primary}))),n||u.createElement(l.View,{style:S},u.createElement(m.Text,{getStyles:function(){return{textStyle:v}}},"".concat(t))),u.createElement(a.Box,{paddingLeft:16},u.createElement(l.TouchableOpacity,{activeOpacity:.7,style:(0,s.default)({},_,P&&O),disabled:P,onPress:P?void 0:b},u.createElement(d.Icon,{name:"plus",size:16,color:P?C.colors.text.muted:C.colors.text.primary}))))};t.Counter=b,b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Counter",filename:"src/components/Counter/Counter.tsx"}})},"./src/components/Counter/index.ts":function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var o=n("./src/components/Counter/Counter.tsx");Object.keys(o).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})})},"./src/components/Icon/Icon.web.tsx":function(e,t,n){var o=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),t.Icon=void 0;var r=o(n("./node_modules/react/index.js")),s=o(n("./node_modules/react-icons/fi/index.esm.js"));var u=function(e){var t=e.name,n=e.color,o=e.size,u=s["Fi".concat(function(e){var t=e.replace(/(\-\w)/g,function(e){return e[1].toUpperCase()});return t.charAt(0).toUpperCase()+t.slice(1)}(t))];return r.createElement(u,{color:n,size:o})};t.Icon=u,u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Icon",filename:"src/components/Icon/Icon.web.tsx"}})},"./src/components/Icon/index.ts":function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var o=n("./src/components/Icon/Icon.web.tsx");Object.keys(o).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})})}}]);
//# sourceMappingURL=26.8b6a61fdb1e33ec38c04.js.map