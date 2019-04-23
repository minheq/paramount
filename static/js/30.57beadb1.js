(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"./src/components/Popover/Popover.mdx":function(e,o,t){var n=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(o,"__esModule",{value:!0}),o.default=v;var r=n(t("./node_modules/@babel/runtime/helpers/extends.js")),s=n(t("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),i=(n(t("./node_modules/react/index.js")),t("./node_modules/@mdx-js/react/dist/index.es.js")),p=t("./node_modules/docz/dist/index.esm.js"),l=t("./src/components/Popover/index.ts"),a=t("./src/components/Button/index.ts"),d=t("./src/components/Layout/index.ts"),u=t("./src/components/Typography/index.ts"),m=t("./node_modules/react-powerplug/dist/react-powerplug.esm.js"),c={},P=function(e){var o=e.children;return document.body.style.height="initial",document.body.style.position="relative",(0,i.mdx)("div",null,o)};function v(e){var o=e.components,t=(0,s.default)(e,["components"]);return(0,i.mdx)(P,(0,r.default)({},c,t,{components:o,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"popover"},"Popover"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"Popover")," composes ",(0,i.mdx)("inlineCode",{parentName:"p"},"Positioner")," and adds only a white box wrapping. Content that can be anything. Popover just applies some styles for the content. For more low-level usage, use ",(0,i.mdx)("inlineCode",{parentName:"p"},"Positioner")),(0,i.mdx)("h3",{id:"usage"},"Usage"),(0,i.mdx)(p.Playground,{__position:0,__code:'<Popover\n  isVisible={false}\n  onClose={() => console.log(\'Close\')}\n  position="top-right"\n  content={() => <Box width={200} height={200} />}\n  getStyles={(props, theme) => ({\n    popoverStyle: {},\n  })}\n  // ...Positioner props\n>\n  <Button title="Child" />\n</Popover>',__scope:{props:this?this.props:t,Playground:p.Playground,Props:p.Props,Popover:l.Popover,Button:a.Button,Box:d.Box,Spacing:d.Spacing,Text:u.Text,Toggle:m.Toggle},mdxType:"Playground"},(0,i.mdx)(l.Popover,{isVisible:!1,onClose:function(){return console.log("Close")},position:"top-right",content:function(){return(0,i.mdx)(d.Box,{width:200,height:200,mdxType:"Box"})},getStyles:function(e,o){return{popoverStyle:{}}},mdxType:"Popover"},(0,i.mdx)(a.Button,{title:"Child",mdxType:"Button"}))),(0,i.mdx)("h3",{id:"variants"},"Variants"),(0,i.mdx)(p.Playground,{__position:1,__code:'<Spacing paddingBottom={8} zIndex={1}>\n  <Box flexDirection="row" justifyContent="space-between">\n    <Toggle>\n      {({ on, toggle }) => (\n        <Popover\n          isVisible={on}\n          onClose={toggle}\n          position="top-right"\n          content={() => (\n            <Box width={200} height={200}>\n              <Text>\n                Content that can be anything. Popover just applies some styles\n                for the content. For more low-level usage, use `Positioner`\n              </Text>\n            </Box>\n          )}\n        >\n          <Button onPress={toggle} isInline title="Top right" />\n        </Popover>\n      )}\n    </Toggle>\n    <Toggle>\n      {({ on, toggle }) => (\n        <Popover\n          isVisible={on}\n          onClose={toggle}\n          position="top"\n          content={() => (\n            <Box width={200} height={200}>\n              <Text>\n                Content that can be anything. Popover just applies some styles\n                for the content. For more low-level usage, use `Positioner`\n              </Text>\n            </Box>\n          )}\n        >\n          <Button onPress={toggle} isInline title="Top" />\n        </Popover>\n      )}\n    </Toggle>\n    <Toggle>\n      {({ on, toggle }) => (\n        <Popover\n          isVisible={on}\n          onClose={toggle}\n          position="top-left"\n          content={() => (\n            <Box width={200} height={200}>\n              <Text>\n                Content that can be anything. Popover just applies some styles\n                for the content. For more low-level usage, use `Positioner`\n              </Text>\n            </Box>\n          )}\n        >\n          <Button onPress={toggle} isInline title="Top left" />\n        </Popover>\n      )}\n    </Toggle>\n  </Box>\n</Spacing>',__scope:{props:this?this.props:t,Playground:p.Playground,Props:p.Props,Popover:l.Popover,Button:a.Button,Box:d.Box,Spacing:d.Spacing,Text:u.Text,Toggle:m.Toggle},mdxType:"Playground"},(0,i.mdx)(d.Spacing,{paddingBottom:8,zIndex:1,mdxType:"Spacing"},(0,i.mdx)(d.Box,{flexDirection:"row",justifyContent:"space-between",mdxType:"Box"},(0,i.mdx)(m.Toggle,{mdxType:"Toggle"},function(e){var o=e.on,t=e.toggle;return(0,i.mdx)(l.Popover,{isVisible:o,onClose:t,position:"top-right",content:function(){return(0,i.mdx)(d.Box,{width:200,height:200,mdxType:"Box"},(0,i.mdx)(u.Text,{mdxType:"Text"},"Content that can be anything. Popover just applies some styles for the content. For more low-level usage, use `Positioner`"))},mdxType:"Popover"},(0,i.mdx)(a.Button,{onPress:t,isInline:!0,title:"Top right",mdxType:"Button"}))}),(0,i.mdx)(m.Toggle,{mdxType:"Toggle"},function(e){var o=e.on,t=e.toggle;return(0,i.mdx)(l.Popover,{isVisible:o,onClose:t,position:"top",content:function(){return(0,i.mdx)(d.Box,{width:200,height:200,mdxType:"Box"},(0,i.mdx)(u.Text,{mdxType:"Text"},"Content that can be anything. Popover just applies some styles for the content. For more low-level usage, use `Positioner`"))},mdxType:"Popover"},(0,i.mdx)(a.Button,{onPress:t,isInline:!0,title:"Top",mdxType:"Button"}))}),(0,i.mdx)(m.Toggle,{mdxType:"Toggle"},function(e){var o=e.on,t=e.toggle;return(0,i.mdx)(l.Popover,{isVisible:o,onClose:t,position:"top-left",content:function(){return(0,i.mdx)(d.Box,{width:200,height:200,mdxType:"Box"},(0,i.mdx)(u.Text,{mdxType:"Text"},"Content that can be anything. Popover just applies some styles for the content. For more low-level usage, use `Positioner`"))},mdxType:"Popover"},(0,i.mdx)(a.Button,{onPress:t,isInline:!0,title:"Top left",mdxType:"Button"}))})))),(0,i.mdx)("h3",{id:"props"},"Props"),(0,i.mdx)(p.Props,{of:l.Popover,mdxType:"Props"}))}v&&v===Object(v)&&Object.isExtensible(v)&&Object.defineProperty(v,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Popover/Popover.mdx"}}),v.isMDXComponent=!0},"./src/components/Popover/Popover.styles.ts":function(e,o,t){var n=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(o,"__esModule",{value:!0}),o.getPopoverStyles=o.getPopoverVariables=void 0;var r=n(t("./node_modules/@babel/runtime/helpers/objectSpread.js"));"undefined"!==typeof PopoverVariables&&PopoverVariables&&PopoverVariables===Object(PopoverVariables)&&Object.isExtensible(PopoverVariables)&&Object.defineProperty(PopoverVariables,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PopoverVariables",filename:"src/components/Popover/Popover.styles.ts"}});var s=function(e){return{popover:(0,r.default)({backgroundColor:e.colors.background.white,padding:16},e.elevations[2])}};o.getPopoverVariables=s,s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getPopoverVariables",filename:"src/components/Popover/Popover.styles.ts"}}),"undefined"!==typeof PopoverStyles&&PopoverStyles&&PopoverStyles===Object(PopoverStyles)&&Object.isExtensible(PopoverStyles)&&Object.defineProperty(PopoverStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PopoverStyles",filename:"src/components/Popover/Popover.styles.ts"}}),"undefined"!==typeof GetPopoverStyles&&GetPopoverStyles&&GetPopoverStyles===Object(GetPopoverStyles)&&Object.isExtensible(GetPopoverStyles)&&Object.defineProperty(GetPopoverStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetPopoverStyles",filename:"src/components/Popover/Popover.styles.ts"}});var i=function(e){return{popoverStyle:s(e).popover}};o.getPopoverStyles=i,i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getPopoverStyles",filename:"src/components/Popover/Popover.styles.ts"}})},"./src/components/Popover/Popover.tsx":function(e,o,t){var n=t("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(o,"__esModule",{value:!0}),o.Popover=void 0;var s=r(t("./node_modules/@babel/runtime/helpers/extends.js")),i=n(t("./node_modules/react/index.js")),p=t("./node_modules/react-native-web/dist/index.js"),l=t("./src/theme/index.ts"),a=t("./src/utils/mergeStyles.ts"),d=t("./src/components/Positioner/index.ts"),u=t("./src/components/Popover/Popover.styles.ts");"undefined"!==typeof PopoverProps&&PopoverProps&&PopoverProps===Object(PopoverProps)&&Object.isExtensible(PopoverProps)&&Object.defineProperty(PopoverProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PopoverProps",filename:"src/components/Popover/Popover.tsx"}});var m=function(e){var o=e.content,t=e.getContentStyles,n=(0,l.useTheme)(),r=(0,a.mergeStyles)(u.getPopoverStyles,t)(n).popoverStyle;return i.createElement(d.Positioner,(0,s.default)({},e,{content:function(e){return i.createElement(p.View,{style:r},o(e))}}))};o.Popover=m,m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Popover",filename:"src/components/Popover/Popover.tsx"}})},"./src/components/Popover/index.ts":function(e,o,t){Object.defineProperty(o,"__esModule",{value:!0});var n=t("./src/components/Popover/Popover.tsx");Object.keys(n).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(o,e,{enumerable:!0,get:function(){return n[e]}})})}}]);
//# sourceMappingURL=30.fbd593c4d92f00afd73c.js.map