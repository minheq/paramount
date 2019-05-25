(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"./src/components/Alert/Alert.mdx":function(e,t,r){var n=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=p;var l=n(r("./node_modules/@babel/runtime/helpers/extends.js")),o=n(r("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),s=(n(r("./node_modules/react/index.js")),r("./node_modules/@mdx-js/react/dist/index.es.js")),i=r("./node_modules/docz/dist/index.esm.js"),a=r("./src/components/Alert/Alert.tsx"),c=r("./src/components/Box/index.ts"),d={},m="wrapper";function p(e){var t=e.components,r=(0,o.default)(e,["components"]);return(0,s.mdx)(m,(0,l.default)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"alert"},"Alert"),(0,s.mdx)("h3",{id:"usage"},"Usage"),(0,s.mdx)(i.Playground,{__position:0,__code:'<Alert\n  title="Kitchen sink"\n  description="Message"\n  isCloseable\n  intent="success"\n  component={null} // Overrides body\n  getStyles={(props, theme) => ({\n    bodyStyle: {},\n    containerStyle: {},\n  })}\n/>',__scope:{props:this?this.props:r,Playground:i.Playground,Props:i.Props,Alert:a.Alert,Box:c.Box},mdxType:"Playground"},(0,s.mdx)(a.Alert,{title:"Kitchen sink",description:"Message",isCloseable:!0,intent:"success",component:null,getStyles:function(e,t){return{bodyStyle:{},containerStyle:{}}},mdxType:"Alert"})),(0,s.mdx)("h3",{id:"variants"},"Variants"),(0,s.mdx)(i.Playground,{__position:1,__code:'<Box paddingVertical={16}>\n  <Alert title="Info" description="Message" />\n</Box>\n<Box paddingVertical={16}>\n  <Alert intent="success" title="Success" description="Message" />\n</Box>\n<Box paddingVertical={16}>\n  <Alert intent="warning" title="Warning" description="Message" />\n</Box>\n<Box paddingVertical={16}>\n  <Alert intent="danger" title="Danger" description="Message" />\n</Box>',__scope:{props:this?this.props:r,Playground:i.Playground,Props:i.Props,Alert:a.Alert,Box:c.Box},mdxType:"Playground"},(0,s.mdx)(c.Box,{paddingVertical:16,mdxType:"Box"},(0,s.mdx)(a.Alert,{title:"Info",description:"Message",mdxType:"Alert"})),(0,s.mdx)(c.Box,{paddingVertical:16,mdxType:"Box"},(0,s.mdx)(a.Alert,{intent:"success",title:"Success",description:"Message",mdxType:"Alert"})),(0,s.mdx)(c.Box,{paddingVertical:16,mdxType:"Box"},(0,s.mdx)(a.Alert,{intent:"warning",title:"Warning",description:"Message",mdxType:"Alert"})),(0,s.mdx)(c.Box,{paddingVertical:16,mdxType:"Box"},(0,s.mdx)(a.Alert,{intent:"danger",title:"Danger",description:"Message",mdxType:"Alert"}))),(0,s.mdx)("h3",{id:"props"},"Props"),(0,s.mdx)(i.Props,{of:a.Alert,mdxType:"Props"}))}p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Alert/Alert.mdx"}}),p.isMDXComponent=!0},"./src/components/Alert/Alert.styles.ts":function(e,t,r){var n=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.getAlertStyles=t.alertVariables=void 0;var l=n(r("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),o=n(r("./node_modules/@babel/runtime/helpers/objectSpread.js"));"undefined"!==typeof AlertStyles&&AlertStyles&&AlertStyles===Object(AlertStyles)&&Object.isExtensible(AlertStyles)&&Object.defineProperty(AlertStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"AlertStyles",filename:"src/components/Alert/Alert.styles.ts"}}),"undefined"!==typeof AlertSeparatedVariables&&AlertSeparatedVariables&&AlertSeparatedVariables===Object(AlertSeparatedVariables)&&Object.isExtensible(AlertSeparatedVariables)&&Object.defineProperty(AlertSeparatedVariables,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"AlertSeparatedVariables",filename:"src/components/Alert/Alert.styles.ts"}}),"undefined"!==typeof AlertVariables&&AlertVariables&&AlertVariables===Object(AlertVariables)&&Object.isExtensible(AlertVariables)&&Object.defineProperty(AlertVariables,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"AlertVariables",filename:"src/components/Alert/Alert.styles.ts"}});var s=function(e){return{body:{flex:1},container:(0,o.default)({backgroundColor:e.colors.background.content,borderLeftWidth:5,borderRadius:e.controlBorderRadius.medium,display:"flex",flexDirection:"row",padding:16},e.elevations[2]),message:{},title:{},danger:{body:{},container:{borderLeftColor:e.colors.border.danger},message:{},title:{}},info:{body:{},container:{borderLeftColor:e.colors.border.info},message:{},title:{}},success:{body:{},container:{borderLeftColor:e.colors.border.success},message:{},title:{}},warning:{body:{},container:{borderLeftColor:e.colors.border.warning},message:{},title:{}}}};t.alertVariables=s,s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"alertVariables",filename:"src/components/Alert/Alert.styles.ts"}}),"undefined"!==typeof AlertStyleProps&&AlertStyleProps&&AlertStyleProps===Object(AlertStyleProps)&&Object.isExtensible(AlertStyleProps)&&Object.defineProperty(AlertStyleProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"AlertStyleProps",filename:"src/components/Alert/Alert.styles.ts"}}),"undefined"!==typeof GetAlertStyles&&GetAlertStyles&&GetAlertStyles===Object(GetAlertStyles)&&Object.isExtensible(GetAlertStyles)&&Object.defineProperty(GetAlertStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetAlertStyles",filename:"src/components/Alert/Alert.styles.ts"}});var i=function(e,t){var r=e.intent,n=s(t),i=n.container,a=n.body,c=n.title,d=n.message,m=(0,l.default)(n,["container","body","title","message"])[r];return{bodyStyle:(0,o.default)({},a,m.body),containerStyle:(0,o.default)({},i,m.container),textStyle:(0,o.default)({},d,m.message),titleStyle:(0,o.default)({},c,m.title)}};t.getAlertStyles=i,i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getAlertStyles",filename:"src/components/Alert/Alert.styles.ts"}})},"./src/components/Alert/Alert.tsx":function(e,t,r){var n=r("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),t.Alert=void 0;var l=n(r("./node_modules/react/index.js")),o=r("./node_modules/react-native-web/dist/index.js"),s=r("./src/theme/index.ts"),i=r("./src/utils/mergeStyles.ts"),a=r("./src/components/Box/index.ts"),c=r("./src/components/Icon/index.ts"),d=r("./src/components/Typography/index.ts"),m=r("./src/components/Alert/Alert.styles.ts");"undefined"!==typeof AlertProps&&AlertProps&&AlertProps===Object(AlertProps)&&Object.isExtensible(AlertProps)&&Object.defineProperty(AlertProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"AlertProps",filename:"src/components/Alert/Alert.tsx"}});var p=function(e){var t=e.title,r=e.description,n=e.component,p=e.onClose,u=e.isCloseable,b=void 0!==u&&u,y=e.icon,f=e.intent,x=void 0===f?"info":f,A=e.getStyles,g=e.testID,_=(0,s.useTheme)(),j=(0,i.mergeStyles)(m.getAlertStyles,A)({intent:x},_),S=j.containerStyle,P=j.bodyStyle;return l.createElement(o.View,{style:S,testID:g},y||l.createElement(a.Box,{paddingRight:16,justifyContent:"center"},function(e,t){switch(e){case"success":return l.createElement(c.Icon,{name:"check-circle",size:24,color:t.colors.text.success});case"warning":return l.createElement(c.Icon,{name:"alert-triangle",size:24,color:t.colors.text.warning});case"danger":return l.createElement(c.Icon,{name:"alert-circle",size:24,color:t.colors.text.danger});default:return l.createElement(c.Icon,{name:"info",size:24,color:t.colors.text.info})}}(x,_)),n||l.createElement(o.View,{style:P},l.createElement(d.Text,{weight:"bold"},t),l.createElement(d.Text,null,r)),b&&l.createElement(o.TouchableOpacity,{onPress:p},l.createElement(a.Box,{paddingLeft:16},l.createElement(c.Icon,{name:"x",size:24,color:_.colors.text.default}))))};t.Alert=p,p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Alert",filename:"src/components/Alert/Alert.tsx"}})},"./src/components/Icon/Icon.web.tsx":function(e,t,r){var n=r("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),t.Icon=void 0;var l=n(r("./node_modules/react/index.js")),o=n(r("./node_modules/react-icons/fi/index.esm.js"));var s=function(e){var t=e.name,r=e.color,n=e.size,s=o["Fi".concat(function(e){var t=e.replace(/(\-\w)/g,function(e){return e[1].toUpperCase()});return t.charAt(0).toUpperCase()+t.slice(1)}(t))];return l.createElement(s,{color:r,size:n})};t.Icon=s,s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Icon",filename:"src/components/Icon/Icon.web.tsx"}})},"./src/components/Icon/index.ts":function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r("./src/components/Icon/Icon.web.tsx");Object.keys(n).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})})}}]);
//# sourceMappingURL=28.76eade9a8b38486f696c.js.map