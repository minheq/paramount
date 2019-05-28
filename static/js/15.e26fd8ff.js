(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"./src/components/Grid/Column.styles.ts":function(e,o){Object.defineProperty(o,"__esModule",{value:!0}),o.getColumnStyles=void 0,"undefined"!==typeof ColumnStylesProps&&ColumnStylesProps&&ColumnStylesProps===Object(ColumnStylesProps)&&Object.isExtensible(ColumnStylesProps)&&Object.defineProperty(ColumnStylesProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ColumnStylesProps",filename:"src/components/Grid/Column.styles.ts"}}),"undefined"!==typeof GetColumnStyles&&GetColumnStyles&&GetColumnStyles===Object(GetColumnStyles)&&Object.isExtensible(GetColumnStyles)&&Object.defineProperty(GetColumnStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetColumnStyles",filename:"src/components/Grid/Column.styles.ts"}}),"undefined"!==typeof ColumnStyles&&ColumnStyles&&ColumnStyles===Object(ColumnStyles)&&Object.isExtensible(ColumnStyles)&&Object.defineProperty(ColumnStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ColumnStyles",filename:"src/components/Grid/Column.styles.ts"}});var n=function(e,o){var n=e.hasGutter,t=e.gutterWidth;return{innerWrapperStyle:{height:"100%",paddingLeft:n?t:0,paddingRight:n?t:0},outerWrapperStyle:{height:"100%",minHeight:0}}};o.getColumnStyles=n,n&&n===Object(n)&&Object.isExtensible(n)&&Object.defineProperty(n,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getColumnStyles",filename:"src/components/Grid/Column.styles.ts"}})},"./src/components/Grid/Column.tsx":function(e,o,n){var t=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(o,"__esModule",{value:!0}),o.Column=o.splitColumnConfig=o.getProportion=void 0;var i=r(n("./node_modules/@babel/runtime/helpers/objectSpread.js")),l=r(n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),d=t(n("./node_modules/react/index.js")),m=n("./node_modules/react-native-web/dist/index.js"),u=n("./src/theme/index.ts"),s=n("./src/utils/mergeStyles.ts"),a=n("./src/components/Grid/Column.styles.ts"),c=n("./src/components/Grid/LayoutContext.tsx");"undefined"!==typeof ColumnConfigBase&&ColumnConfigBase&&ColumnConfigBase===Object(ColumnConfigBase)&&Object.isExtensible(ColumnConfigBase)&&Object.defineProperty(ColumnConfigBase,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ColumnConfigBase",filename:"src/components/Grid/Column.tsx"}}),"undefined"!==typeof ColumnConfig&&ColumnConfig&&ColumnConfig===Object(ColumnConfig)&&Object.isExtensible(ColumnConfig)&&Object.defineProperty(ColumnConfig,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ColumnConfig",filename:"src/components/Grid/Column.tsx"}}),"undefined"!==typeof ColumnProps&&ColumnProps&&ColumnProps===Object(ColumnProps)&&Object.isExtensible(ColumnProps)&&Object.defineProperty(ColumnProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ColumnProps",filename:"src/components/Grid/Column.tsx"}});var b=function(e,o){var n=e[o];if(n)return n;var t=function(e,o){var n=c.DESC_ORDER_BREAKPOINTS.indexOf(o),t=c.DESC_ORDER_BREAKPOINTS.find(function(o,t){return!(n>=t)&&!!e[o]});return t?e[t]:null}(e,o);return t||null},x=function(e,o){return"".concat(e*(100/o),"%")};o.getProportion=x,x&&x===Object(x)&&Object.isExtensible(x)&&Object.defineProperty(x,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getProportion",filename:"src/components/Grid/Column.tsx"}});var p=function(e){var o=e.xsmall,n=e.small,t=e.medium,r=e.large,i=e.xlarge,l=e.offsetXsmall,d=e.offsetSmall,m=e.offsetMedium;return{columns:{xsmall:o,small:n,medium:t,large:r,xlarge:i},offsetColumns:{large:e.offsetLarge,medium:m,small:d,xlarge:e.offsetXlarge,xsmall:l}}};o.splitColumnConfig=p,p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"splitColumnConfig",filename:"src/components/Grid/Column.tsx"}});var C=function(e){var o=e.children,n=e.hasGutter,t=void 0===n||n,r=e.getStyles,C=(0,l.default)(e,["children","hasGutter","getStyles"]),f=d.useContext(c.LayoutContext),y=f.currentBreakpoint,g=f.gutterWidth,h=f.gridColumnCount,_=(0,u.useTheme)(),P=p(C),j=P.columns,B=P.offsetColumns,v=(0,s.mergeStyles)(a.getColumnStyles,r)({hasGutter:t,gutterWidth:g},_),O=v.outerWrapperStyle,R=v.innerWrapperStyle,w=b(j,y),S=x(w||12,h),T=b(B,y),k=x(T||0,h);return d.createElement(m.View,{style:(0,i.default)({flexBasis:S,marginLeft:k},O)},d.createElement(m.View,{style:R},o))};o.Column=C,C&&C===Object(C)&&Object.isExtensible(C)&&Object.defineProperty(C,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Column",filename:"src/components/Grid/Column.tsx"}})},"./src/components/Grid/Container.styles.ts":function(e,o){Object.defineProperty(o,"__esModule",{value:!0}),o.getContainerStyles=void 0,"undefined"!==typeof ContainerStylesProps&&ContainerStylesProps&&ContainerStylesProps===Object(ContainerStylesProps)&&Object.isExtensible(ContainerStylesProps)&&Object.defineProperty(ContainerStylesProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ContainerStylesProps",filename:"src/components/Grid/Container.styles.ts"}}),"undefined"!==typeof GetContainerStyles&&GetContainerStyles&&GetContainerStyles===Object(GetContainerStyles)&&Object.isExtensible(GetContainerStyles)&&Object.defineProperty(GetContainerStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetContainerStyles",filename:"src/components/Grid/Container.styles.ts"}}),"undefined"!==typeof ContainerStyles&&ContainerStyles&&ContainerStyles===Object(ContainerStyles)&&Object.isExtensible(ContainerStyles)&&Object.defineProperty(ContainerStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ContainerStyles",filename:"src/components/Grid/Container.styles.ts"}});var n=function(e,o){var n=e.maxWidth,t=e.containerWidth;return{innerWrapperStyle:{height:"100%",maxWidth:n||t,width:"100%"},outerWrapperStyle:{flexDirection:"row",height:"100%",justifyContent:"center",width:"100%"}}};o.getContainerStyles=n,n&&n===Object(n)&&Object.isExtensible(n)&&Object.defineProperty(n,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getContainerStyles",filename:"src/components/Grid/Container.styles.ts"}})},"./src/components/Grid/Container.tsx":function(e,o,n){var t=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(o,"__esModule",{value:!0}),o.Container=void 0;var r=t(n("./node_modules/react/index.js")),i=n("./node_modules/react-native-web/dist/index.js"),l=n("./src/theme/index.ts"),d=n("./src/utils/mergeStyles.ts"),m=n("./src/components/Grid/Container.styles.ts"),u=n("./src/components/Grid/LayoutContext.tsx");"undefined"!==typeof ContainerProps&&ContainerProps&&ContainerProps===Object(ContainerProps)&&Object.isExtensible(ContainerProps)&&Object.defineProperty(ContainerProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ContainerProps",filename:"src/components/Grid/Container.tsx"}});var s=function(e){var o=e.children,n=e.getStyles,t=e.maxWidth,s=r.useContext(u.LayoutContext).maxWidth,a=(0,l.useTheme)(),c=(0,d.mergeStyles)(m.getContainerStyles,n)({maxWidth:t,containerWidth:s},a),b=c.outerWrapperStyle,x=c.innerWrapperStyle;return r.createElement(i.View,{style:b},r.createElement(i.View,{style:x},o))};o.Container=s,s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Container",filename:"src/components/Grid/Container.tsx"}})},"./src/components/Grid/Grid.mdx":function(e,o,n){var t=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(o,"__esModule",{value:!0}),o.default=x;var r=t(n("./node_modules/@babel/runtime/helpers/extends.js")),i=t(n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),l=(t(n("./node_modules/react/index.js")),n("./node_modules/@mdx-js/react/dist/index.es.js")),d=n("./node_modules/react-powerplug/dist/react-powerplug.esm.js"),m=n("./node_modules/docz/dist/index.esm.js"),u=n("./src/components/Grid/index.ts"),s=n("./src/components/Box/index.ts"),a=n("./src/components/Typography/index.ts"),c={},b="wrapper";function x(e){var o=e.components,n=(0,i.default)(e,["components"]);return(0,l.mdx)(b,(0,r.default)({},c,n,{components:o,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"grid"},"Grid"),(0,l.mdx)("h3",{id:"usage"},"Usage"),(0,l.mdx)(m.Playground,{__position:0,__code:'<LayoutProvider>\n  <Box paddingVertical={16}>\n    <Row>\n      <Column medium={1}>\n        <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n      </Column>\n      <Column medium={1}>\n        <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n      </Column>\n      <Column medium={1}>\n        <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n      </Column>\n      <Column medium={1}>\n        <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n      </Column>\n      <Column medium={1}>\n        <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n      </Column>\n      <Column medium={1}>\n        <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n      </Column>\n      <Column medium={1}>\n        <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n      </Column>\n      <Column medium={1}>\n        <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n      </Column>\n      <Column medium={1}>\n        <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n      </Column>\n      <Column medium={1}>\n        <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n      </Column>\n      <Column medium={1}>\n        <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n      </Column>\n      <Column medium={1}>\n        <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n      </Column>\n    </Row>\n  </Box>\n  <Box paddingVertical={16}>\n    <Row>\n      <Column medium={8}>\n        <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n      </Column>\n      <Column medium={4}>\n        <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n      </Column>\n    </Row>\n  </Box>\n  <Box paddingVertical={16}>\n    <Row>\n      <Column medium={4}>\n        <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n      </Column>\n      <Column medium={4}>\n        <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n      </Column>\n      <Column medium={4}>\n        <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n      </Column>\n    </Row>\n  </Box>\n  <Box paddingVertical={16}>\n    <Row>\n      <Column medium={6}>\n        <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n      </Column>\n      <Column medium={6}>\n        <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n      </Column>\n    </Row>\n  </Box>\n</LayoutProvider>',__scope:{props:this?this.props:n,CounterContainer:d.Counter,Playground:m.Playground,Props:m.Props,Column:u.Column,Row:u.Row,LayoutProvider:u.LayoutProvider,Box:s.Box,Text:a.Text},mdxType:"Playground"},(0,l.mdx)(u.LayoutProvider,{mdxType:"LayoutProvider"},(0,l.mdx)(s.Box,{paddingVertical:16,mdxType:"Box"},(0,l.mdx)(u.Row,{mdxType:"Row"},(0,l.mdx)(u.Column,{medium:1,mdxType:"Column"},(0,l.mdx)(s.Box,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box"})),(0,l.mdx)(u.Column,{medium:1,mdxType:"Column"},(0,l.mdx)(s.Box,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box"})),(0,l.mdx)(u.Column,{medium:1,mdxType:"Column"},(0,l.mdx)(s.Box,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box"})),(0,l.mdx)(u.Column,{medium:1,mdxType:"Column"},(0,l.mdx)(s.Box,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box"})),(0,l.mdx)(u.Column,{medium:1,mdxType:"Column"},(0,l.mdx)(s.Box,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box"})),(0,l.mdx)(u.Column,{medium:1,mdxType:"Column"},(0,l.mdx)(s.Box,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box"})),(0,l.mdx)(u.Column,{medium:1,mdxType:"Column"},(0,l.mdx)(s.Box,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box"})),(0,l.mdx)(u.Column,{medium:1,mdxType:"Column"},(0,l.mdx)(s.Box,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box"})),(0,l.mdx)(u.Column,{medium:1,mdxType:"Column"},(0,l.mdx)(s.Box,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box"})),(0,l.mdx)(u.Column,{medium:1,mdxType:"Column"},(0,l.mdx)(s.Box,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box"})),(0,l.mdx)(u.Column,{medium:1,mdxType:"Column"},(0,l.mdx)(s.Box,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box"})),(0,l.mdx)(u.Column,{medium:1,mdxType:"Column"},(0,l.mdx)(s.Box,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box"})))),(0,l.mdx)(s.Box,{paddingVertical:16,mdxType:"Box"},(0,l.mdx)(u.Row,{mdxType:"Row"},(0,l.mdx)(u.Column,{medium:8,mdxType:"Column"},(0,l.mdx)(s.Box,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box"})),(0,l.mdx)(u.Column,{medium:4,mdxType:"Column"},(0,l.mdx)(s.Box,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box"})))),(0,l.mdx)(s.Box,{paddingVertical:16,mdxType:"Box"},(0,l.mdx)(u.Row,{mdxType:"Row"},(0,l.mdx)(u.Column,{medium:4,mdxType:"Column"},(0,l.mdx)(s.Box,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box"})),(0,l.mdx)(u.Column,{medium:4,mdxType:"Column"},(0,l.mdx)(s.Box,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box"})),(0,l.mdx)(u.Column,{medium:4,mdxType:"Column"},(0,l.mdx)(s.Box,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box"})))),(0,l.mdx)(s.Box,{paddingVertical:16,mdxType:"Box"},(0,l.mdx)(u.Row,{mdxType:"Row"},(0,l.mdx)(u.Column,{medium:6,mdxType:"Column"},(0,l.mdx)(s.Box,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box"})),(0,l.mdx)(u.Column,{medium:6,mdxType:"Column"},(0,l.mdx)(s.Box,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box"})))))),(0,l.mdx)("h3",{id:"column-wrapping"},"Column wrapping"),(0,l.mdx)(m.Playground,{__position:1,__code:'<LayoutProvider>\n  <Box paddingVertical={16}>\n    <Row>\n      <Column xsmall={9}>\n        <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n      </Column>\n      <Column xsmall={4}>\n        <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n      </Column>\n      <Column xsmall={6}>\n        <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n      </Column>\n    </Row>\n  </Box>\n</LayoutProvider>',__scope:{props:this?this.props:n,CounterContainer:d.Counter,Playground:m.Playground,Props:m.Props,Column:u.Column,Row:u.Row,LayoutProvider:u.LayoutProvider,Box:s.Box,Text:a.Text},mdxType:"Playground"},(0,l.mdx)(u.LayoutProvider,{mdxType:"LayoutProvider"},(0,l.mdx)(s.Box,{paddingVertical:16,mdxType:"Box"},(0,l.mdx)(u.Row,{mdxType:"Row"},(0,l.mdx)(u.Column,{xsmall:9,mdxType:"Column"},(0,l.mdx)(s.Box,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box"})),(0,l.mdx)(u.Column,{xsmall:4,mdxType:"Column"},(0,l.mdx)(s.Box,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box"})),(0,l.mdx)(u.Column,{xsmall:6,mdxType:"Column"},(0,l.mdx)(s.Box,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box"})))))),(0,l.mdx)("h3",{id:"offsets"},"Offsets"),(0,l.mdx)(m.Playground,{__position:2,__code:'<LayoutProvider>\n  <Box paddingVertical={16}>\n    <Row>\n      <Column offsetXsmall={2} xsmall={6}>\n        <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n      </Column>\n    </Row>\n    <Row>\n      <Column offsetXsmall={4} xsmall={6}>\n        <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n      </Column>\n    </Row>\n    <Row>\n      <Column offsetXsmall={6} xsmall={6}>\n        <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n      </Column>\n    </Row>\n  </Box>\n</LayoutProvider>',__scope:{props:this?this.props:n,CounterContainer:d.Counter,Playground:m.Playground,Props:m.Props,Column:u.Column,Row:u.Row,LayoutProvider:u.LayoutProvider,Box:s.Box,Text:a.Text},mdxType:"Playground"},(0,l.mdx)(u.LayoutProvider,{mdxType:"LayoutProvider"},(0,l.mdx)(s.Box,{paddingVertical:16,mdxType:"Box"},(0,l.mdx)(u.Row,{mdxType:"Row"},(0,l.mdx)(u.Column,{offsetXsmall:2,xsmall:6,mdxType:"Column"},(0,l.mdx)(s.Box,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box"}))),(0,l.mdx)(u.Row,{mdxType:"Row"},(0,l.mdx)(u.Column,{offsetXsmall:4,xsmall:6,mdxType:"Column"},(0,l.mdx)(s.Box,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box"}))),(0,l.mdx)(u.Row,{mdxType:"Row"},(0,l.mdx)(u.Column,{offsetXsmall:6,xsmall:6,mdxType:"Column"},(0,l.mdx)(s.Box,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box"})))))),(0,l.mdx)("h3",{id:"without-gutter"},"Without gutter"),(0,l.mdx)(m.Playground,{__position:3,__code:'<LayoutProvider>\n  <Box paddingVertical={16}>\n    <Row>\n      <Column xsmall={6} hasGutter={false}>\n        <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n      </Column>\n      <Column xsmall={6} hasGutter={false}>\n        <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n      </Column>\n    </Row>\n  </Box>\n</LayoutProvider>',__scope:{props:this?this.props:n,CounterContainer:d.Counter,Playground:m.Playground,Props:m.Props,Column:u.Column,Row:u.Row,LayoutProvider:u.LayoutProvider,Box:s.Box,Text:a.Text},mdxType:"Playground"},(0,l.mdx)(u.LayoutProvider,{mdxType:"LayoutProvider"},(0,l.mdx)(s.Box,{paddingVertical:16,mdxType:"Box"},(0,l.mdx)(u.Row,{mdxType:"Row"},(0,l.mdx)(u.Column,{xsmall:6,hasGutter:!1,mdxType:"Column"},(0,l.mdx)(s.Box,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box"})),(0,l.mdx)(u.Column,{xsmall:6,hasGutter:!1,mdxType:"Column"},(0,l.mdx)(s.Box,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box"})))))))}x&&x===Object(x)&&Object.isExtensible(x)&&Object.defineProperty(x,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Grid/Grid.mdx"}}),x.isMDXComponent=!0},"./src/components/Grid/LayoutContext.tsx":function(e,o,n){var t=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(o,"__esModule",{value:!0}),o.LayoutContext=o.DESC_ORDER_BREAKPOINTS=o.ASC_ORDER_BREAKPOINTS=o.defaultLayout=void 0;var r=t(n("./node_modules/react/index.js"));"undefined"!==typeof Breakpoints&&Breakpoints&&Breakpoints===Object(Breakpoints)&&Object.isExtensible(Breakpoints)&&Object.defineProperty(Breakpoints,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Breakpoints",filename:"src/components/Grid/LayoutContext.tsx"}}),"undefined"!==typeof FullBreakpoints&&FullBreakpoints&&FullBreakpoints===Object(FullBreakpoints)&&Object.isExtensible(FullBreakpoints)&&Object.defineProperty(FullBreakpoints,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FullBreakpoints",filename:"src/components/Grid/LayoutContext.tsx"}}),"undefined"!==typeof ColumnCount&&ColumnCount&&ColumnCount===Object(ColumnCount)&&Object.isExtensible(ColumnCount)&&Object.defineProperty(ColumnCount,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ColumnCount",filename:"src/components/Grid/LayoutContext.tsx"}}),"undefined"!==typeof Breakpoint&&Breakpoint&&Breakpoint===Object(Breakpoint)&&Object.isExtensible(Breakpoint)&&Object.defineProperty(Breakpoint,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Breakpoint",filename:"src/components/Grid/LayoutContext.tsx"}}),"undefined"!==typeof FullBreakpoint&&FullBreakpoint&&FullBreakpoint===Object(FullBreakpoint)&&Object.isExtensible(FullBreakpoint)&&Object.defineProperty(FullBreakpoint,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FullBreakpoint",filename:"src/components/Grid/LayoutContext.tsx"}}),"undefined"!==typeof LayoutInterface&&LayoutInterface&&LayoutInterface===Object(LayoutInterface)&&Object.isExtensible(LayoutInterface)&&Object.defineProperty(LayoutInterface,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"LayoutInterface",filename:"src/components/Grid/LayoutContext.tsx"}});var i={breakpoints:{small:480,medium:720,large:960,xlarge:1280},currentBreakpoint:"small",gridColumnCount:12,gutterWidth:15,maxWidth:1440};o.defaultLayout=i,"undefined"!==typeof i&&i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"defaultLayout",filename:"src/components/Grid/LayoutContext.tsx"}});var l=["xsmall","small","medium","large","xlarge"];o.ASC_ORDER_BREAKPOINTS=l,"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ASC_ORDER_BREAKPOINTS",filename:"src/components/Grid/LayoutContext.tsx"}});var d=l.slice(0).reverse();o.DESC_ORDER_BREAKPOINTS=d,"undefined"!==typeof d&&d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DESC_ORDER_BREAKPOINTS",filename:"src/components/Grid/LayoutContext.tsx"}});var m=r.createContext(i);o.LayoutContext=m,"undefined"!==typeof m&&m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"LayoutContext",filename:"src/components/Grid/LayoutContext.tsx"}})},"./src/components/Grid/LayoutProvider.tsx":function(e,o,n){var t=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(o,"__esModule",{value:!0}),o.LayoutProvider=o.getCurrentBreakpoint=void 0;var i=r(n("./node_modules/@babel/runtime/helpers/objectSpread.js")),l=r(n("./node_modules/@babel/runtime/helpers/slicedToArray.js")),d=t(n("./node_modules/deepmerge/dist/umd.js")),m=t(n("./node_modules/react/index.js")),u=n("./node_modules/react-native-web/dist/index.js"),s=n("./src/components/Grid/LayoutContext.tsx");"undefined"!==typeof LayoutProviderProps&&LayoutProviderProps&&LayoutProviderProps===Object(LayoutProviderProps)&&Object.isExtensible(LayoutProviderProps)&&Object.defineProperty(LayoutProviderProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"LayoutProviderProps",filename:"src/components/Grid/LayoutProvider.tsx"}});var a=function(e){var o=e.breakpoints,n=u.Dimensions.get("window");return s.DESC_ORDER_BREAKPOINTS.find(function(e){if("xsmall"===e&&n.width<o.small)return!0;var t=o[e];return n.width>=t})||"xsmall"};o.getCurrentBreakpoint=a,a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getCurrentBreakpoint",filename:"src/components/Grid/LayoutProvider.tsx"}});var c=function(e){var o=e.children,n=e.layout,t=m.useContext(s.LayoutContext),r=n?d(t,n):t,c=m.useState(a(r)),b=(0,l.default)(c,2),x=b[0],p=b[1],C=m.useCallback(function(){p(a(r))},[]);return m.useLayoutEffect(function(){return u.Dimensions.addEventListener("change",C),function(){return u.Dimensions.removeEventListener("change",C)}},[]),m.createElement(s.LayoutContext.Provider,{value:(0,i.default)({},r,{currentBreakpoint:x})},o)};o.LayoutProvider=c,c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"LayoutProvider",filename:"src/components/Grid/LayoutProvider.tsx"}})},"./src/components/Grid/Row.styles.tsx":function(e,o){Object.defineProperty(o,"__esModule",{value:!0}),o.getRowStyles=void 0,"undefined"!==typeof GetRowStyles&&GetRowStyles&&GetRowStyles===Object(GetRowStyles)&&Object.isExtensible(GetRowStyles)&&Object.defineProperty(GetRowStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetRowStyles",filename:"src/components/Grid/Row.styles.tsx"}}),"undefined"!==typeof RowStyles&&RowStyles&&RowStyles===Object(RowStyles)&&Object.isExtensible(RowStyles)&&Object.defineProperty(RowStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"RowStyles",filename:"src/components/Grid/Row.styles.tsx"}});var n=function(e){return{rowStyle:{flexDirection:"row",flexWrap:"wrap",height:"100%"}}};o.getRowStyles=n,n&&n===Object(n)&&Object.isExtensible(n)&&Object.defineProperty(n,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getRowStyles",filename:"src/components/Grid/Row.styles.tsx"}})},"./src/components/Grid/Row.tsx":function(e,o,n){var t=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(o,"__esModule",{value:!0}),o.Row=void 0;var r=t(n("./node_modules/react/index.js")),i=n("./node_modules/react-native-web/dist/index.js"),l=n("./src/theme/index.ts"),d=n("./src/utils/mergeStyles.ts"),m=n("./src/components/Grid/Row.styles.tsx");"undefined"!==typeof RowProps&&RowProps&&RowProps===Object(RowProps)&&Object.isExtensible(RowProps)&&Object.defineProperty(RowProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"RowProps",filename:"src/components/Grid/Row.tsx"}});var u=function(e){var o=e.children,n=e.getStyles,t=(0,l.useTheme)(),u=(0,d.mergeStyles)(m.getRowStyles,n)(t).rowStyle;return r.createElement(i.View,{style:u},o)};o.Row=u,u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Row",filename:"src/components/Grid/Row.tsx"}})},"./src/components/Grid/Visible.tsx":function(e,o,n){var t=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(o,"__esModule",{value:!0}),o.Visible=o.splitConfig=void 0;var i=r(n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),l=t(n("./node_modules/react/index.js")),d=n("./src/components/Grid/LayoutContext.tsx");"undefined"!==typeof VisibleConfig&&VisibleConfig&&VisibleConfig===Object(VisibleConfig)&&Object.isExtensible(VisibleConfig)&&Object.defineProperty(VisibleConfig,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"VisibleConfig",filename:"src/components/Grid/Visible.tsx"}}),"undefined"!==typeof VisibleProps&&VisibleProps&&VisibleProps===Object(VisibleProps)&&Object.isExtensible(VisibleProps)&&Object.defineProperty(VisibleProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"VisibleProps",filename:"src/components/Grid/Visible.tsx"}});var m=function(e){var o=e.xsmallUp,n=e.xsmall,t=e.xsmallDown,r=e.smallUp,i=e.small,l=e.smallDown,d=e.mediumUp,m=e.medium,u=e.mediumDown,s=e.largeUp,a=e.large,c=e.largeDown,b=e.xlargeUp,x=e.xlarge;return{visibleDowns:[t,l,u,c,e.xlargeDown],visibleExacts:[n,i,m,a,x],visibleUps:[o,r,d,s,b]}};o.splitConfig=m,m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"splitConfig",filename:"src/components/Grid/Visible.tsx"}});var u=function(e){var o=e.children;return function(e,o){var n=m(e),t=n.visibleDowns,r=n.visibleUps,i=n.visibleExacts,l=d.ASC_ORDER_BREAKPOINTS.indexOf(o),u=t.filter(function(e,o){return o>=l&&!!e}).length>0,s=r.filter(function(e,o){return o<=l&&!!e}).length>0,a=!!i.find(function(e,o){return o===l&&!!e});return u||s||a}((0,i.default)(e,["children"]),l.useContext(d.LayoutContext).currentBreakpoint)?o:null};o.Visible=u,u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Visible",filename:"src/components/Grid/Visible.tsx"}})},"./src/components/Grid/index.ts":function(e,o,n){Object.defineProperty(o,"__esModule",{value:!0});var t=n("./src/components/Grid/Column.tsx");Object.keys(t).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(o,e,{enumerable:!0,get:function(){return t[e]}})});var r=n("./src/components/Grid/Container.tsx");Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(o,e,{enumerable:!0,get:function(){return r[e]}})});var i=n("./src/components/Grid/LayoutContext.tsx");Object.keys(i).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(o,e,{enumerable:!0,get:function(){return i[e]}})});var l=n("./src/components/Grid/LayoutProvider.tsx");Object.keys(l).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(o,e,{enumerable:!0,get:function(){return l[e]}})});var d=n("./src/components/Grid/Row.tsx");Object.keys(d).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(o,e,{enumerable:!0,get:function(){return d[e]}})});var m=n("./src/components/Grid/Visible.tsx");Object.keys(m).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(o,e,{enumerable:!0,get:function(){return m[e]}})})}}]);
//# sourceMappingURL=15.8b6a61fdb1e33ec38c04.js.map