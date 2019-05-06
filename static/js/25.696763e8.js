(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"./src/components/Badge/Badge.mdx":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=p;var d=n(o("./node_modules/@babel/runtime/helpers/extends.js")),s=n(o("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),a=(n(o("./node_modules/react/index.js")),o("./node_modules/@mdx-js/react/dist/index.es.js")),l=o("./node_modules/docz/dist/index.esm.js"),i=o("./src/components/Badge/Badge.tsx"),r=o("./src/theme/index.ts"),g=o("./src/components/Layout/index.ts"),c={},m="wrapper";function p(e){var t=e.components,o=(0,s.default)(e,["components"]);return(0,a.mdx)(m,(0,d.default)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"badge"},"Badge"),(0,a.mdx)("h3",{id:"usage"},"Usage"),(0,a.mdx)(l.Playground,{__position:0,__code:'<Box>\n  <Badge\n    color="blue"\n    size="large"\n    shape="rounded"\n    isSolid={false}\n    getStyles={(props, theme) => ({\n      containerStyle: {},\n      textStyle: {},\n    })}\n  >\n    Badge\n  </Badge>\n</Box>',__scope:{props:this?this.props:o,Playground:l.Playground,Props:l.Props,Badge:i.Badge,ThemeContext:r.ThemeContext,Box:g.Box},mdxType:"Playground"},(0,a.mdx)(g.Box,{mdxType:"Box"},(0,a.mdx)(i.Badge,{color:"blue",size:"large",shape:"rounded",isSolid:!1,getStyles:function(e,t){return{containerStyle:{},textStyle:{}}},mdxType:"Badge"},"Badge"))),(0,a.mdx)("h3",{id:"default"},"Default"),(0,a.mdx)(l.Playground,{__position:1,__code:'<ThemeContext.Consumer>\n  {theme => (\n    <Box>\n      {Object.keys(theme.fills.solid).map(color => (\n        <Box flexDirection="row" key={color}>\n          <Badge color={color}>{color}</Badge>\n          <Badge color={color} isSolid>\n            {color}\n          </Badge>\n        </Box>\n      ))}\n    </Box>\n  )}\n</ThemeContext.Consumer>',__scope:{props:this?this.props:o,Playground:l.Playground,Props:l.Props,Badge:i.Badge,ThemeContext:r.ThemeContext,Box:g.Box},mdxType:"Playground"},(0,a.mdx)(r.ThemeContext.Consumer,null,function(e){return(0,a.mdx)(g.Box,{mdxType:"Box"},Object.keys(e.fills.solid).map(function(e){return(0,a.mdx)(g.Box,{flexDirection:"row",key:e,mdxType:"Box"},(0,a.mdx)(i.Badge,{color:e,mdxType:"Badge"},e),(0,a.mdx)(i.Badge,{color:e,isSolid:!0,mdxType:"Badge"},e))}))})),(0,a.mdx)("h3",{id:"pills"},"Pills"),(0,a.mdx)(l.Playground,{__position:2,__code:'<ThemeContext.Consumer>\n  {theme => (\n    <Box>\n      {Object.keys(theme.fills.solid).map(color => (\n        <Box flexDirection="row" key={color}>\n          <Badge shape="pill" color={color}>\n            {color}\n          </Badge>\n          <Badge shape="pill" color={color} isSolid>\n            {color}\n          </Badge>\n        </Box>\n      ))}\n    </Box>\n  )}\n</ThemeContext.Consumer>',__scope:{props:this?this.props:o,Playground:l.Playground,Props:l.Props,Badge:i.Badge,ThemeContext:r.ThemeContext,Box:g.Box},mdxType:"Playground"},(0,a.mdx)(r.ThemeContext.Consumer,null,function(e){return(0,a.mdx)(g.Box,{mdxType:"Box"},Object.keys(e.fills.solid).map(function(e){return(0,a.mdx)(g.Box,{flexDirection:"row",key:e,mdxType:"Box"},(0,a.mdx)(i.Badge,{shape:"pill",color:e,mdxType:"Badge"},e),(0,a.mdx)(i.Badge,{shape:"pill",color:e,isSolid:!0,mdxType:"Badge"},e))}))})),(0,a.mdx)("h3",{id:"props"},"Props"),(0,a.mdx)(l.Props,{of:i.Badge,mdxType:"Props"}))}p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Badge/Badge.mdx"}}),p.isMDXComponent=!0},"./src/components/Badge/Badge.styles.ts":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.getBadgeStyles=t.getBadgeVariables=void 0;var d=n(o("./node_modules/@babel/runtime/helpers/objectSpread.js")),s=o("./src/components/Layout/Box.tsx");"undefined"!==typeof BadgeSizes&&BadgeSizes&&BadgeSizes===Object(BadgeSizes)&&Object.isExtensible(BadgeSizes)&&Object.defineProperty(BadgeSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BadgeSizes",filename:"src/components/Badge/Badge.styles.ts"}}),"undefined"!==typeof BadgeSize&&BadgeSize&&BadgeSize===Object(BadgeSize)&&Object.isExtensible(BadgeSize)&&Object.defineProperty(BadgeSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BadgeSize",filename:"src/components/Badge/Badge.styles.ts"}}),"undefined"!==typeof BadgeVariables&&BadgeVariables&&BadgeVariables===Object(BadgeVariables)&&Object.isExtensible(BadgeVariables)&&Object.defineProperty(BadgeVariables,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BadgeVariables",filename:"src/components/Badge/Badge.styles.ts"}});var a=function(e){return{fills:e.fills,sizes:{small:{height:e.controlHeights.small,paddingLeft:e.controlPaddings.small,paddingRight:e.controlPaddings.small},medium:{height:e.controlHeights.medium,paddingLeft:e.controlPaddings.medium,paddingRight:e.controlPaddings.medium},large:{height:e.controlHeights.large,paddingLeft:e.controlPaddings.large,paddingRight:e.controlPaddings.large}}}};t.getBadgeVariables=a,a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getBadgeVariables",filename:"src/components/Badge/Badge.styles.ts"}}),"undefined"!==typeof BadgeStylesProps&&BadgeStylesProps&&BadgeStylesProps===Object(BadgeStylesProps)&&Object.isExtensible(BadgeStylesProps)&&Object.defineProperty(BadgeStylesProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BadgeStylesProps",filename:"src/components/Badge/Badge.styles.ts"}}),"undefined"!==typeof BadgeStyles&&BadgeStyles&&BadgeStyles===Object(BadgeStyles)&&Object.isExtensible(BadgeStyles)&&Object.defineProperty(BadgeStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BadgeStyles",filename:"src/components/Badge/Badge.styles.ts"}}),"undefined"!==typeof GetBadgeStyles&&GetBadgeStyles&&GetBadgeStyles===Object(GetBadgeStyles)&&Object.isExtensible(GetBadgeStyles)&&Object.defineProperty(GetBadgeStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetBadgeStyles",filename:"src/components/Badge/Badge.styles.ts"}});var l=function(e,t){var o=e.size,n=e.color,l=e.isSolid,i=e.shape,r=a(t),g=s.shapeMapping[i],c=(l?r.fills.solid:r.fills.subtle)[n],m=r.sizes[o],p=m.height,B=m.paddingLeft,u=m.paddingRight;return{containerStyle:(0,d.default)({alignItems:"center",alignSelf:"flex-start",backgroundColor:c.backgroundColor,display:"flex",flexDirection:"row",height:p,justifyContent:"center",paddingLeft:B,paddingRight:u},g),textStyle:{color:c.color,textTransform:"uppercase"}}};t.getBadgeStyles=l,l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getBadgeStyles",filename:"src/components/Badge/Badge.styles.ts"}})},"./src/components/Badge/Badge.tsx":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),t.Badge=void 0;var d=n(o("./node_modules/react/index.js")),s=o("./node_modules/react-native-web/dist/index.js"),a=o("./src/theme/index.ts"),l=o("./src/utils/mergeStyles.ts"),i=o("./src/components/Typography/index.ts"),r=o("./src/components/Badge/Badge.styles.ts");"undefined"!==typeof BadgeProps&&BadgeProps&&BadgeProps===Object(BadgeProps)&&Object.isExtensible(BadgeProps)&&Object.defineProperty(BadgeProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BadgeProps",filename:"src/components/Badge/Badge.tsx"}});var g=function(e){var t=e.children,o=e.color,n=void 0===o?"neutral":o,g=e.getStyles,c=e.isSolid,m=void 0!==c&&c,p=e.shape,B=void 0===p?"rounded":p,u=e.size,x=void 0===u?"small":u,y=e.testID,f=(0,a.useTheme)(),b=(0,l.mergeStyles)(r.getBadgeStyles,g)({size:x,color:n,isSolid:m,shape:B},f),h=b.containerStyle,S=b.textStyle;return d.createElement(s.View,{style:h,testID:y},d.createElement(i.Text,{isBold:!0,size:x,getStyles:function(){return{textStyle:S}}},t))};t.Badge=g,g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Badge",filename:"src/components/Badge/Badge.tsx"}})}}]);
//# sourceMappingURL=25.884c5daed04d06b9e7af.js.map