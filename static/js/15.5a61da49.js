(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"./src/components/Avatar/Avatar.mdx":function(e,t,r){"use strict";r.r(t),r.d(t,"default",function(){return d});var a=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),n=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),o=(r("./node_modules/react/index.js"),r("./node_modules/@mdx-js/react/dist/index.es.js")),i=r("./node_modules/docz/dist/index.esm.js"),s=r("./src/components/Avatar/Avatar.tsx"),c=r("./src/components/Box/Box.tsx"),l="/home/travis/build/WeTrustPlatform/paramount/src/components/Avatar/Avatar.mdx",u={},m="wrapper";function d(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)(m,Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout",__source:{fileName:l,lineNumber:21}}),Object(o.b)("h1",Object(n.a)({id:"avatar"},{__source:{fileName:l,lineNumber:23}}),"Avatar"),Object(o.b)("p",{__source:{fileName:l,lineNumber:26}},"Display avatar image, with default for name initials"),Object(o.b)("h2",Object(n.a)({id:"usage"},{__source:{fileName:l,lineNumber:27}}),"Usage"),Object(o.b)(i.c,{__position:0,__code:'<Avatar\n  source={{ uri: \'https://picsum.photos/200/200\', width: 200, height: 200 }}\n  // Fallbacks to name if source is not provided\n  name="Bill Gates"\n  size="large"\n/>',__scope:{props:this?this.props:r,Playground:i.c,Props:i.d,Avatar:s.a,Box:c.a},mdxType:"Playground",__source:{fileName:l,lineNumber:30}},Object(o.b)(s.a,{source:{uri:"https://picsum.photos/200/200",width:200,height:200},name:"Bill Gates",size:"large",mdxType:"Avatar",__source:{fileName:l,lineNumber:37}})),Object(o.b)("h2",Object(n.a)({id:"props"},{__source:{fileName:l,lineNumber:44}}),"Props"),Object(o.b)(i.d,{of:s.a,mdxType:"Props",__source:{fileName:l,lineNumber:47}}))}d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Avatar/Avatar.mdx"}}),d.isMDXComponent=!0},"./src/components/Avatar/Avatar.tsx":function(e,t,r){"use strict";r.d(t,"a",function(){return j});var a=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),n=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),o=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),i=r("./node_modules/dlv/dist/dlv.umd.js"),s=r.n(i),c=r("./node_modules/react/index.js"),l=r.n(c),u=r("./node_modules/react-native-web/dist/exports/Image/index.js"),m=r("./node_modules/react-native-web/dist/exports/View/index.js"),d=r("./src/theme/Theme.tsx"),b=r("./src/utils/ControlSize.ts"),p=r("./src/utils/Overrides.ts"),f=r("./src/components/Typography/Text.tsx"),v="/home/travis/build/WeTrustPlatform/paramount/src/components/Avatar/Avatar.tsx";"undefined"!==typeof AvatarOverrides&&AvatarOverrides&&AvatarOverrides===Object(AvatarOverrides)&&Object.isExtensible(AvatarOverrides)&&Object.defineProperty(AvatarOverrides,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"AvatarOverrides",filename:"src/components/Avatar/Avatar.tsx"}}),"undefined"!==typeof AvatarProps&&AvatarProps&&AvatarProps===Object(AvatarProps)&&Object.isExtensible(AvatarProps)&&Object.defineProperty(AvatarProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"AvatarProps",filename:"src/components/Avatar/Avatar.tsx"}});var j=function(e){var t=e.source,r=e.name,a=e.size,i=void 0===a?"medium":a,c=e.isSolid,u=void 0!==c&&c,m=e.color,b=void 0===m?"auto":m,f=e.testID,j=e.overrides,g=void 0===j?{}:j,O=Object(d.a)(),y=l.a.useState(!1),A=Object(o.a)(y,2),S=A[0],P=A[1],N=!t||S,C=Object(p.a)(_,e,{name:r,size:i,isSolid:u,color:b,testID:f},s()(O,"overrides.Avatar.Root"),g.Root),E=Object(o.a)(C,2),B=E[0],z=E[1],w=Object(p.a)(x,e,{name:r,size:i,isSolid:u,color:b},s()(O,"overrides.Avatar.Initial"),g.Initials),T=Object(o.a)(w,2),H=T[0],I=T[1];if(!N&&t){var k=Object(p.a)(h,e,{onError:function(){return P(!0)},source:t},s()(O,"overrides.Avatar.Image"),g.Image),D=Object(o.a)(k,2),W=D[0],R=D[1];return l.a.createElement(B,Object(n.a)({},z,{__source:{fileName:v,lineNumber:102}}),l.a.createElement(W,Object(n.a)({},R,{__source:{fileName:v,lineNumber:103}})))}return l.a.createElement(B,Object(n.a)({},z,{__source:{fileName:v,lineNumber:109}}),l.a.createElement(H,Object(n.a)({},I,{__source:{fileName:v,lineNumber:110}})))};"undefined"!==typeof j&&j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Avatar",filename:"src/components/Avatar/Avatar.tsx"}});var g=function(e){var t=String(e),r=0;if(0===t.trim().length)return r;for(var a=0;a<t.length;a++)r=(r<<5)-r+t.charCodeAt(a),r&=r;return Math.abs(r)};g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"hashCode",filename:"src/components/Avatar/Avatar.tsx"}}),"undefined"!==typeof AvatarColor&&AvatarColor&&AvatarColor===Object(AvatarColor)&&Object.isExtensible(AvatarColor)&&Object.defineProperty(AvatarColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"AvatarColor",filename:"src/components/Avatar/Avatar.tsx"}});var O={large:2,medium:1.5,small:1},_=function(e){var t=e.testID,r=e.children,a=e.name,n=e.size,o=e.isSolid,i=e.color,s=e.style,c=Object(d.a)(),u=c.fills[o?"solid":"subtle"],p=Object.keys(u),f=Object(b.a)(n)?c.controlHeights[n]*O[n]:n;return l.a.createElement(m.a,{style:[{alignItems:"center",backgroundColor:u["auto"===i?p[g(a)%p.length]:i].backgroundColor,borderRadius:9999,display:"flex",height:f,justifyContent:"center",overflow:"hidden",position:"relative",width:f},s],testID:t,__source:{fileName:v,lineNumber:161}},r)},x=function(e){var t=e.name,r=e.size,o=e.isSolid,i=e.color,s=e.style,c=Object(a.a)(e,["name","size","isSolid","color","style"]),u=Object(d.a)(),m=u.fills[o?"solid":"subtle"],j=Object.keys(m),_=Object(b.a)(r)?u.controlHeights[r]*O[r]:r,x=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"?";return e?e.replace(/\s+/," ").split(" ").slice(0,2).map(function(e){return e&&e[0].toUpperCase()}).join(""):t}(t);return l.a.createElement(f.a,Object(n.a)({},c,{style:[{color:m["auto"===i?j[g(t)%j.length]:i].color,fontSize:_/2,lineHeight:_},Object(p.b)(e,s)],__source:{fileName:v,lineNumber:220}}),x)},h=function(e){var t=e.style,r=Object(a.a)(e,["style"]);return l.a.createElement(u.a,Object(n.a)({style:[{height:"100%",width:"100%"},t]},r,{__source:{fileName:v,lineNumber:245}}))}},"./src/components/Box/Box.tsx":function(e,t,r){"use strict";var a=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),n=r("./node_modules/react/index.js"),o=r.n(n),i=r("./node_modules/react-native-web/dist/exports/View/index.js"),s=r("./src/theme/Theme.tsx"),c=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),l=r("./node_modules/dlv/dist/dlv.umd.js"),u=r.n(l),m=r("./src/utils/Overrides.ts");"undefined"!==typeof SpacingProps&&SpacingProps&&SpacingProps===Object(SpacingProps)&&Object.isExtensible(SpacingProps)&&Object.defineProperty(SpacingProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SpacingProps",filename:"src/components/Spacing/Spacing.tsx"}}),"undefined"!==typeof SpacingOverride&&SpacingOverride&&SpacingOverride===Object(SpacingOverride)&&Object.isExtensible(SpacingOverride)&&Object.defineProperty(SpacingOverride,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SpacingOverride",filename:"src/components/Spacing/Spacing.tsx"}});var d=function(e,t){return"number"===typeof e?e:t.spacing[e]};d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getSpacing",filename:"src/components/Spacing/Spacing.tsx"}});var b=function(e){var t=e.size,r=void 0===t?"medium":t,n=e.orientation,l=void 0===n?"vertical":n,b=e.style,p=Object(a.a)(e,["size","orientation","style"]),f=Object(s.a)();return o.a.createElement(i.a,Object(c.a)({style:["vertical"===l?{height:d(r,f)}:{width:d(r,f)},Object(m.b)(e,b),Object(m.b)(e,u()(f,"overrides.Spacing.style"))]},p,{__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Spacing/Spacing.tsx",lineNumber:44}}))};b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Spacing",filename:"src/components/Spacing/Spacing.tsx"}}),r.d(t,"a",function(){return f});"undefined"!==typeof BoxProps&&BoxProps&&BoxProps===Object(BoxProps)&&Object.isExtensible(BoxProps)&&Object.defineProperty(BoxProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxProps",filename:"src/components/Box/Box.tsx"}});var p={backgroundColor:function(e,t){return t.colors.background[e]?{backgroundColor:t.colors.background[e]}:{backgroundColor:e}},elevation:function(e,t){return t.elevations[e]},shape:function(e,t){return t.containerShapes[e]},space:function(e,t){return{padding:d(e,t)}},spaceBottom:function(e,t){return{paddingBottom:d(e,t)}},spaceEnd:function(e,t){return{paddingEnd:d(e,t)}},spaceHorizontal:function(e,t){return{paddingHorizontal:d(e,t)}},spaceLeft:function(e,t){return{paddingLeft:d(e,t)}},spaceRight:function(e,t){return{paddingRight:d(e,t)}},spaceStart:function(e,t){return{paddingStart:d(e,t)}},spaceTop:function(e,t){return{paddingTop:d(e,t)}},spaceVertical:function(e,t){return{paddingVertical:d(e,t)}}},f=function(e){var t=e.children,r=e.testID,n=Object(a.a)(e,["children","testID"]),c=Object(s.a)(),l=[],u={};for(var m in n)if(m){var d=p[m];if(d){var b=d(n[m],c);l.push(b)}else u[m]=n[m]}return o.a.createElement(i.a,{testID:r,style:[u,l],__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Box/Box.tsx",lineNumber:106}},t)};"undefined"!==typeof f&&f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Box",filename:"src/components/Box/Box.tsx"}})},"./src/utils/ControlSize.ts":function(e,t,r){"use strict";r.d(t,"a",function(){return n}),r.d(t,"b",function(){return o});var a=r("./src/theme/Theme.tsx"),n=function(e){return"number"!==typeof e};"undefined"!==typeof n&&n&&n===Object(n)&&Object.isExtensible(n)&&Object.defineProperty(n,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"isControlSize",filename:"src/utils/ControlSize.ts"}});var o=function(){var e=Object(a.a)();return{getControlHeight:function(t){return"number"===typeof t?t:e.controlHeights[t]},getSmallerTextSize:function(t){switch(function(t){if("number"===typeof t){if(t>=e.controlHeights.large)return"large";if(t>=e.controlHeights.medium)return"medium";if(t>=e.controlHeights.small)return"small";if(t<e.controlHeights.small)return"xsmall"}return t}(t)){case"large":return"medium";case"medium":return"small";case"small":default:return"xsmall"}},getSmallerHeightControlSize:function(t){switch(function(t){if("number"===typeof t){if(t>=e.controlHeights.large)return"large";if(t>=e.controlHeights.medium)return"medium";if(t<e.controlHeights.medium)return"small"}return t}(t)){case"large":return"medium";case"medium":default:return"small"}}}};"undefined"!==typeof o&&o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useControlSizeUtils",filename:"src/utils/ControlSize.ts"}})}}]);
//# sourceMappingURL=15.ee22def8b66aef7b4a31.js.map