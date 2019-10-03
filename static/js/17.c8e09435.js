(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"./src/components/Avatar/Avatar.mdx":function(e,t,r){"use strict";r.r(t),r.d(t,"default",function(){return b});var a=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),n=(r("./node_modules/react/index.js"),r("./node_modules/@mdx-js/react/dist/index.es.js")),s=r("./node_modules/docz/dist/index.esm.js"),i=r("./src/components/Avatar/Avatar.tsx"),c=r("./src/components/Box/Box.tsx"),l="/home/travis/build/WeTrustPlatform/paramount/src/components/Avatar/Avatar.mdx",u={},m="wrapper";function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(n.b)(m,Object(o.a)({},u,r,{components:t,mdxType:"MDXLayout",__source:{fileName:l,lineNumber:21}}),Object(n.b)("h1",Object(o.a)({id:"avatar"},{__source:{fileName:l,lineNumber:23}}),"Avatar"),Object(n.b)("p",{__source:{fileName:l,lineNumber:26}},"Display avatar image, with default for name initials"),Object(n.b)("h2",Object(o.a)({id:"usage"},{__source:{fileName:l,lineNumber:27}}),"Usage"),Object(n.b)(s.c,{__position:0,__code:'<Avatar\n  source={{ uri: \'https://picsum.photos/200/200\', width: 200, height: 200 }}\n  // Fallbacks to name if source is not provided\n  name="Bill Gates"\n  size="large"\n/>',__scope:{props:this?this.props:r,Playground:s.c,Props:s.d,Avatar:i.a,Box:c.a},mdxType:"Playground",__source:{fileName:l,lineNumber:30}},Object(n.b)(i.a,{source:{uri:"https://picsum.photos/200/200",width:200,height:200},name:"Bill Gates",size:"large",mdxType:"Avatar",__source:{fileName:l,lineNumber:37}})),Object(n.b)("h2",Object(o.a)({id:"props"},{__source:{fileName:l,lineNumber:44}}),"Props"),Object(n.b)(s.d,{of:i.a,mdxType:"Props",__source:{fileName:l,lineNumber:47}}))}b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Avatar/Avatar.mdx"}}),b.isMDXComponent=!0},"./src/components/Avatar/Avatar.tsx":function(e,t,r){"use strict";r.d(t,"a",function(){return f});var a=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),n=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),s=r("./node_modules/dlv/dist/dlv.umd.js"),i=r.n(s),c=r("./node_modules/react/index.js"),l=r("./node_modules/react-native-web/dist/exports/Image/index.js"),u=r("./node_modules/react-native-web/dist/exports/View/index.js"),m=r("./src/theme/Theme.tsx"),b=r("./src/utils/isControlSize.ts"),d=r("./src/utils/overrides.ts"),p=r("./src/components/Typography/Text.tsx"),v="/home/travis/build/WeTrustPlatform/paramount/src/components/Avatar/Avatar.tsx";"undefined"!==typeof AvatarOverrides&&AvatarOverrides&&AvatarOverrides===Object(AvatarOverrides)&&Object.isExtensible(AvatarOverrides)&&Object.defineProperty(AvatarOverrides,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"AvatarOverrides",filename:"src/components/Avatar/Avatar.tsx"}}),"undefined"!==typeof AvatarProps&&AvatarProps&&AvatarProps===Object(AvatarProps)&&Object.isExtensible(AvatarProps)&&Object.defineProperty(AvatarProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"AvatarProps",filename:"src/components/Avatar/Avatar.tsx"}});var f=function(e){var t=e.source,r=e.name,a=e.size,s=void 0===a?"medium":a,l=e.isSolid,u=void 0!==l&&l,b=e.color,p=void 0===b?"auto":b,f=e.testID,j=e.overrides,O=void 0===j?{}:j,h=Object(m.b)(),A=c.useState(!1),y=Object(n.a)(A,2),P=y[0],S=y[1],N=!t||P,E=Object(d.a)(_,e,i()(h,"overrides.Avatar.Root"),O.Root),B=Object(n.a)(E,2),C=B[0],w=B[1],z=Object(d.a)(g,e,i()(h,"overrides.Avatar.Initial"),O.Initials),T=Object(n.a)(z,2),I=T[0],k=T[1],D=Object(d.a)(x,e,i()(h,"overrides.Avatar.Image"),O.Image),W=Object(n.a)(D,2),H=W[0],M=W[1];return c.createElement(C,Object(o.a)({name:r,size:s,isSolid:u,color:p,testID:f},w,{__source:{fileName:v,lineNumber:94}}),N&&c.createElement(I,Object(o.a)({name:r,size:s,isSolid:u,color:p},k,{__source:{fileName:v,lineNumber:103}})),!N&&!!t&&c.createElement(H,Object(o.a)({onError:function(){return S(!0)},source:t},M,{__source:{fileName:v,lineNumber:112}})))};"undefined"!==typeof f&&f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Avatar",filename:"src/components/Avatar/Avatar.tsx"}});var j=function(e){var t=String(e),r=0;if(0===t.trim().length)return r;for(var a=0;a<t.length;a++)r=(r<<5)-r+t.charCodeAt(a),r&=r;return Math.abs(r)};j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"hashCode",filename:"src/components/Avatar/Avatar.tsx"}}),"undefined"!==typeof AvatarColor&&AvatarColor&&AvatarColor===Object(AvatarColor)&&Object.isExtensible(AvatarColor)&&Object.defineProperty(AvatarColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"AvatarColor",filename:"src/components/Avatar/Avatar.tsx"}});var O={large:2,medium:1.5,small:1},_=function(e){var t=e.testID,r=e.children,a=e.name,o=e.size,n=e.isSolid,s=e.color,i=e.style,l=Object(m.b)(),d=l.fills[n?"solid":"subtle"],p=Object.keys(d),f=Object(b.a)(o)?l.controlHeights[o]*O[o]:o;return c.createElement(u.a,{style:[{alignItems:"center",backgroundColor:d["auto"===s?p[j(a)%p.length]:s].backgroundColor,borderRadius:9999,display:"flex",height:f,justifyContent:"center",overflow:"hidden",position:"relative",width:f},i],testID:t,__source:{fileName:v,lineNumber:168}},r)},g=function(e){var t=e.name,r=e.size,n=e.isSolid,s=e.color,i=e.style,l=Object(a.a)(e,["name","size","isSolid","color","style"]),u=Object(m.b)(),f=u.fills[n?"solid":"subtle"],_=Object.keys(f),g=Object(b.a)(r)?u.controlHeights[r]*O[r]:r,x=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"?";return e?e.replace(/\s+/," ").split(" ").slice(0,2).map(function(e){return e&&e[0].toUpperCase()}).join(""):t}(t);return c.createElement(p.a,Object(o.a)({},l,{style:[{color:f["auto"===s?_[j(t)%_.length]:s].color,fontSize:g/2,lineHeight:g},Object(d.b)(e,i)],__source:{fileName:v,lineNumber:227}}),x)},x=function(e){var t=e.style,r=Object(a.a)(e,["style"]);return c.createElement(l.a,Object(o.a)({style:[{height:"100%",width:"100%"},t]},r,{__source:{fileName:v,lineNumber:252}}))}},"./src/components/Box/Box.tsx":function(e,t,r){"use strict";var a=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=r("./node_modules/react/index.js"),n=r("./node_modules/react-native-web/dist/exports/View/index.js"),s=r("./src/theme/Theme.tsx"),i=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),c=r("./node_modules/dlv/dist/dlv.umd.js"),l=r.n(c),u=r("./src/utils/overrides.ts");"undefined"!==typeof SpacingProps&&SpacingProps&&SpacingProps===Object(SpacingProps)&&Object.isExtensible(SpacingProps)&&Object.defineProperty(SpacingProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SpacingProps",filename:"src/components/Spacing/Spacing.tsx"}}),"undefined"!==typeof SpacingOverride&&SpacingOverride&&SpacingOverride===Object(SpacingOverride)&&Object.isExtensible(SpacingOverride)&&Object.defineProperty(SpacingOverride,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SpacingOverride",filename:"src/components/Spacing/Spacing.tsx"}});var m=function(e,t){return"number"===typeof e?e:t.spacing[e]};m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getSpacing",filename:"src/components/Spacing/Spacing.tsx"}});var b=function(e){var t=e.size,r=void 0===t?"medium":t,c=e.orientation,b=void 0===c?"vertical":c,d=e.style,p=Object(a.a)(e,["size","orientation","style"]),v=Object(s.b)();return o.createElement(n.a,Object(i.a)({style:["vertical"===b?{height:m(r,v)}:{width:m(r,v)},Object(u.b)(e,d),Object(u.b)(e,l()(v,"overrides.Spacing.style"))]},p,{__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Spacing/Spacing.tsx",lineNumber:44}}))};b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Spacing",filename:"src/components/Spacing/Spacing.tsx"}}),r.d(t,"a",function(){return p});"undefined"!==typeof BoxProps&&BoxProps&&BoxProps===Object(BoxProps)&&Object.isExtensible(BoxProps)&&Object.defineProperty(BoxProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxProps",filename:"src/components/Box/Box.tsx"}});var d={backgroundColor:function(e,t){return t.colors.background[e]?{backgroundColor:t.colors.background[e]}:{backgroundColor:e}},elevation:function(e,t){return t.elevations[e]},shape:function(e,t){return t.containerShapes[e]},space:m,spaceBottom:m,spaceEnd:m,spaceHorizontal:m,spaceLeft:m,spaceRight:m,spaceStart:m,spaceTop:m,spaceVertical:m},p=function(e){var t=e.children,r=e.testID,i=Object(a.a)(e,["children","testID"]),c=Object(s.b)(),l=[],u={};for(var m in i)if(m){var b=d[m];if(b){var p=b(i[m],c);l.push(p)}else u[m]=i[m]}return o.createElement(n.a,{testID:r,style:[u,l],__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Box/Box.tsx",lineNumber:78}},t)};"undefined"!==typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Box",filename:"src/components/Box/Box.tsx"}})},"./src/utils/isControlSize.ts":function(e,t,r){"use strict";r.d(t,"a",function(){return a});var a=function(e){return"number"!==typeof e};"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"isControlSize",filename:"src/utils/isControlSize.ts"}})}}]);
//# sourceMappingURL=17.6242c88caa7b6481e64c.js.map